const AWS = require("aws-sdk");

// Configure AWS credentials
AWS.config.update({
  accessKeyId: "YOUR_ACCESS_KEY_ID",
  secretAccessKey: "YOUR_SECRET_ACCESS_KEY",
  region: "us-east-1", // Change to your desired AWS region
});

const route53 = new AWS.Route53();

const domainName = "example.com"; // Replace with your desired domain name

// Create parameters for the hosted zone
const params = {
  Name: domainName,
  CallerReference: `${Date.now()}`, // Ensure this is unique for each request
};

// Create the hosted zone
route53.createHostedZone(params, (err, data) => {
  if (err) {
    console.error("Error creating hosted zone:", err);
  } else {
    console.log("Hosted zone created successfully:", data);
  }
});
