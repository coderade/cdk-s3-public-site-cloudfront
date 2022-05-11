import * as cdk from '@aws-cdk/core';
import { PublicSiteS3CloudfrontStack} from '../lib/public-site-s3-cloudfront-stack';

const app = new cdk.App();
new PublicSiteS3CloudfrontStack(app, 'PublicSiteS3CloudfrontStack');