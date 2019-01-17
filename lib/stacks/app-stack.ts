import cdk = require("@aws-cdk/cdk");
import ec2 = require("@aws-cdk/aws-ec2");
import elbv2 = require("@aws-cdk/aws-elasticloadbalancingv2");

interface AppStackProps {
  vpc: ec2.IVpcNetwork;
}

export class AppStack extends cdk.Stack {
  constructor(parent: cdk.App, name: string, props: AppStackProps) {
    super(parent, name);

    // @ts-ignore
    const lb = new elbv2.ApplicationLoadBalancer(this, "lb", {
      vpc: props.vpc,
      internetFacing: true
    });

    // uncomment next to lines to fix
    // const lbResource = lb.node.findChild("Resource") as elbv2.CfnLoadBalancer;
    // lbResource.addOverride("DependsOn", []);
  }
}
