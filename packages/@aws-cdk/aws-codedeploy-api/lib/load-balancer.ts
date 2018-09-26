/**
 * The generations of AWS load balancing solutions.
 */
export enum LoadBalancerGeneration {
    /**
     * The first generation (ELB Classic).
     */
    FIRST,

    /**
     * The second generation (ALB and NLB).
     */
    SECOND
}

/**
 * An interface of an abstract laod balancer, as needed by CodeDeploy.
 */
export interface LoadBalancerProvider {
    /**
     * Specify the generation this load balancer belongs to.
     */
    codeDeployLoadBalancerGeneration(): LoadBalancerGeneration;

    /**
     * Specify the name of this load balancer.
     */
    codeDeployLoadBalancerName(): string;
}
