import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as iam from '@aws-cdk/aws-iam';
import { BlockPublicAccess } from '@aws-cdk/aws-s3';
import { Group } from '@aws-cdk/aws-iam';

export class MavenS3Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const fortranDeveloper = "arn:aws:iam::898915602003:group/fortran-developers";
    const fortranDeveloper2 = "arn:aws:iam::898915602003:group/fortran-developers-2";
    const deploymentGroup ="arn:aws:iam::898915602003:group/deployment";

    // S3
    const bucket = new s3.Bucket(this, "MavenBucketTest", {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL
    });
    
    bucket.addToResourcePolicy(new iam.PolicyStatement({
      actions:['s3:GetObject','s3:PutObject'],
      resources: [bucket.bucketArn +"/*"],
      principals: [new iam.AccountPrincipal(fortranDeveloper)]
    }));
  }
}
