#!/usr/bin/env node
import cdk = require("@aws-cdk/cdk");
import { VpcStack } from "../lib/stacks/vpc-stack";
import { AppStack } from "../lib/stacks/app-stack";

const app = new cdk.App();

// define VPC
const vpcStack = new VpcStack(app, "test-vpc");
// console.log(vpcStack);
// // pass vpc to lb/app
new AppStack(app, "test-app", {
  vpc: vpcStack.vpc
});

app.run();
