# public-site-s3-cloudfront

Cdk project which create a public S3 site and a CloudFront distribution, static files that will be deployed need to be on 
the `website` directory.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
