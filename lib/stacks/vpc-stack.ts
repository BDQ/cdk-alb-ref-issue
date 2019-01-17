import cdk = require("@aws-cdk/cdk");
import ec2 = require("@aws-cdk/aws-ec2");

// defines our VPC
//
export class VpcStack extends cdk.Stack {
  public readonly vpc: ec2.IVpcNetwork;

  constructor(parent: cdk.App, name: string) {
    super(parent, name);

    // VPC using a small CIDR for staging
    //
    const vpc = new ec2.VpcNetwork(this, "vpc", {
      cidr: "10.0.0.0/24",
      maxAZs: 2
    });

    // export vpc
    this.vpc = vpc;
  }
}
