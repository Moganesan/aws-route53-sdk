const AWS = require("aws-sdk");

// Configure AWS credentials
AWS.config.update({
  accessKeyId: "AKIAYGWHH2DYNAO37SHZ",
  secretAccessKey: "rQ2rQg10Qubbw8IJ0ytr6gllCQ+lx3C5fEpuf69a",
  region: "ap-south-1",
});

const route53 = new AWS.Route53();

const hostedZoneId = "Z029321834QAGRXIAEAEF"; // Replace with your hosted zone ID
const subdomainName = "custom.kalakendradao.org"; // Replace with your subdomain
const subdomainIp = "13.232.130.212"; // Replace with the IP address you want to point to

// Create a change batch to add an A record for the subdomain
const changeBatch = {
  Changes: [
    {
      Action: "CREATE",
      ResourceRecordSet: {
        Name: subdomainName,
        Type: "A",
        TTL: 300,
        ResourceRecords: [
          {
            Value: subdomainIp,
          },
        ],
      },
    },
  ],
};

// Create the A record for the subdomain
route53.changeResourceRecordSets(
  {
    HostedZoneId: hostedZoneId,
    ChangeBatch: changeBatch,
  },
  (err, data) => {
    if (err) {
      console.error("Error creating subdomain:", err);
    } else {
      console.log("Subdomain created successfully:", data);
    }
  }
);
