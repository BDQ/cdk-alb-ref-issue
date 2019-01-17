#!/usr/bin/env node
import cdk = require('@aws-cdk/cdk');
import { CdkAlbRefIssueStack } from '../lib/cdk-alb-ref-issue-stack';

const app = new cdk.App();
new CdkAlbRefIssueStack(app, 'CdkAlbRefIssueStack');
app.run();
