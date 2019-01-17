import cdk = require("@aws-cdk/cdk");
import ec2 = require("@aws-cdk/aws-ec2");
import elbv2 = require("@aws-cdk/aws-elasticloadbalancingv2");

interface AppStackProps {
  vpc: ec2.IVpcNetwork;
}

export class AppStack extends cdk.Stack {
  constructor(parent: cdk.App, name: string, props: AppStackProps) {
    super(parent, name);

    // define an App load balance
    new elbv2.ApplicationLoadBalancer(this, "lb", {
      vpc: props.vpc,
      internetFacing: true
    });

    // console.log(lb);
  }
}
