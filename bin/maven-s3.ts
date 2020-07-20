#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MavenS3Stack } from '../lib/maven-s3-stack';

const app = new cdk.App();
new MavenS3Stack(app, 'MavenS3Stack');
