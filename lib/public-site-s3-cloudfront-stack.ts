import * as cloudfront from "@aws-cdk/aws-cloudfront";
import * as origins from "@aws-cdk/aws-cloudfront-origins";
import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3deploy from "@aws-cdk/aws-s3-deployment";

export class PublicSiteS3CloudfrontStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create a bucket to upload your app files

    const BUCKET = "website-bucket-valdeci-bba"

    const websiteBucket = new s3.Bucket(this, BUCKET, {
      versioned: true,
    });

    const distribution = new cloudfront.Distribution(this, "Distribution", {
      defaultBehavior: {
        origin: new origins.S3Origin(websiteBucket),
      },
      defaultRootObject: "index.html",
    });

    // housekeeping for uploading the data in the bucket
    new s3deploy.BucketDeployment(this, "DeployWebsite", {
      sources: [s3deploy.Source.asset("./website")],
      destinationBucket: websiteBucket,
      distribution,
      distributionPaths: ["/*"],
    });

    // Prints out the web endpoint to the terminal
    new cdk.CfnOutput(this, "DistributionDomainName", {
      value: distribution.domainName,
    });

  }
}
