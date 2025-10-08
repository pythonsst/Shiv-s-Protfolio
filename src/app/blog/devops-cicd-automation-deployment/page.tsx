import Navigation from "@/components/Navigation";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function BlogPost() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <article className="max-w-4xl mx-auto px-6 py-16">
          {/* Top Navigation */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <Link 
                href="/" 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-sm font-medium">Back to Home</span>
              </Link>
              
              <div className="flex items-center gap-4">
                <Link 
                  href="/blog/startup-technical-leadership" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Next Article →
                </Link>
              </div>
            </div>
          </div>

          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
              <span>December 5, 2024</span>
              <span>•</span>
              <span>7 mins read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              DevOps & CI/CD: Automating Mobile & Web Application Deployment
            </h1>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">DevOps</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">CI/CD</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Automation</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">AWS</span>
            </div>
          </header>

          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Manual deployments are a thing of the past. In today's fast-paced development environment, 
              automation isn't just nice to have—it's essential. Over the past six years, I've built 
              comprehensive CI/CD pipelines that handle everything from code commits to production deployments, 
              saving hours of manual work and reducing deployment errors. Here's my complete guide to 
              automating mobile and web application deployments.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The DevOps Mindset</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              DevOps isn't just about tools—it's about culture and processes. The goal is to break down 
              silos between development and operations, enabling faster delivery of high-quality software.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 py-4 bg-muted/30 rounded-r-lg my-8">
              <p className="text-muted-foreground italic">
                "The best DevOps practices are invisible. When everything works seamlessly, developers can 
                focus on building features instead of fighting deployment issues."
              </p>
            </blockquote>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Key DevOps Principles</h3>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Automation:</strong> Automate everything that can be automated</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Infrastructure as Code:</strong> Define infrastructure in code for reproducibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Continuous Integration:</strong> Integrate code changes frequently and automatically</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Continuous Deployment:</strong> Deploy to production automatically and safely</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">My CI/CD Pipeline Architecture</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              After building multiple CI/CD pipelines, I've refined my approach to handle both mobile and web 
              applications efficiently. Here's the architecture I use:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Pipeline Stages</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <span><strong>Source Control:</strong> GitHub with branch protection and PR reviews</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <span><strong>Build & Test:</strong> Automated testing with Jest, Cypress, and Detox</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <span><strong>Security Scan:</strong> Dependency vulnerability scanning and code analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <span><strong>Deploy:</strong> Automated deployment to staging and production</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                  <span><strong>Monitor:</strong> Automated health checks and rollback capabilities</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">GitHub Actions: The Heart of CI/CD</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              GitHub Actions has become my go-to platform for CI/CD. It integrates seamlessly with GitHub 
              repositories and provides powerful automation capabilities.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Workflow Configuration</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I use YAML-based workflows that are version-controlled and easily maintainable. Here's a 
              typical workflow structure:
            </p>

            <CodeBlock 
              title="GitHub Actions Workflow"
              language="yaml"
              code={`name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test
      - run: npm run lint
      - run: npm run build

  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm audit
      - run: npx snyk test

  deploy:
    needs: [test, security-scan]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to AWS
        run: |
          aws s3 sync build/ s3://my-bucket
          aws cloudfront create-invalidation --distribution-id \${{ secrets.CLOUDFRONT_ID }} --paths "/*"`}
              className="mb-8"
            />

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Environment Management</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I use GitHub environments to manage different deployment stages with proper approvals and 
              environment-specific configurations.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Mobile App Deployment with Fastlane</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Mobile app deployment is more complex than web deployment due to app store requirements. 
              Fastlane automates the entire mobile deployment process.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Fastlane Setup</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fastlane uses Ruby-based configuration files to define deployment steps. Here's how I 
              structure my Fastfile:
            </p>

            <CodeBlock 
              title="Fastlane Configuration"
              language="fastlane"
              code={`# Fastfile
default_platform(:ios)
default_platform(:android)

platform :ios do
  desc "Build and upload to App Store"
  lane :release do
    increment_build_number
    build_app(
      scheme: "MyApp",
      export_method: "app-store"
    )
    upload_to_app_store(
      skip_metadata: false,
      skip_screenshots: false
    )
  end

  desc "Build and upload to TestFlight"
  lane :beta do
    increment_build_number
    build_app(
      scheme: "MyApp",
      export_method: "ad-hoc"
    )
    upload_to_testflight
  end
end

platform :android do
  desc "Build and upload to Play Store"
  lane :release do
    gradle(
      task: "bundle",
      build_type: "Release"
    )
    upload_to_play_store
  end
end`}
              className="mb-8"
            />

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Automated Version Management</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I automate version bumping and changelog generation based on commit messages and pull request 
              descriptions. This ensures consistent versioning across all platforms.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Web Application Deployment</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Web applications have different deployment requirements than mobile apps. I use a combination 
              of static hosting and container-based deployment depending on the application type.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Static Sites</h4>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>• Next.js with static export</li>
                  <li>• AWS S3 + CloudFront</li>
                  <li>• Automated cache invalidation</li>
                  <li>• Global CDN distribution</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Dynamic Apps</h4>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• Docker containerization</li>
                  <li>• AWS ECS/EKS</li>
                  <li>• Load balancer configuration</li>
                  <li>• Auto-scaling policies</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Blue-Green Deployment</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For zero-downtime deployments, I use blue-green deployment strategy. This involves running 
              two identical production environments and switching traffic between them.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Infrastructure as Code</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Infrastructure as Code (IaC) allows me to define and manage infrastructure using code. 
              This makes infrastructure reproducible, version-controlled, and easily maintainable.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">AWS CloudFormation</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I use AWS CloudFormation to define infrastructure resources. This ensures consistent 
              deployments across different environments.
            </p>

            <CodeBlock 
              title="AWS CloudFormation Template"
              language="yaml"
              code={`# cloudformation-template.yaml
Resources:
  WebServer:
    Type: AWS::ECS::Service
    Properties:
      Cluster: !Ref ECSCluster
      TaskDefinition: !Ref TaskDefinition
      DesiredCount: 2
      LoadBalancers:
        - ContainerName: web
          ContainerPort: 3000
          TargetGroupArn: !Ref TargetGroup

  Database:
    Type: AWS::RDS::DBInstance
    Properties:
      DBInstanceClass: db.t3.micro
      Engine: postgres
      MasterUsername: admin
      MasterUserPassword: !Ref DatabasePassword
      AllocatedStorage: 20`}
              className="mb-8"
            />

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Docker Containerization</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Docker containers ensure consistent deployments across different environments. I use 
              multi-stage builds to optimize image size and security.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Monitoring and Alerting</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Automated deployments require comprehensive monitoring to ensure everything works as expected. 
              I implement monitoring at multiple levels.
            </p>

            <div className="bg-accent/5 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Monitoring Stack</h4>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Application Monitoring:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Health check endpoints</li>
                    <li>• Performance metrics</li>
                    <li>• Error tracking (Sentry)</li>
                    <li>• Custom business metrics</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Infrastructure Monitoring:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• AWS CloudWatch</li>
                    <li>• Server metrics</li>
                    <li>• Database performance</li>
                    <li>• Network monitoring</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Automated Rollbacks</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When deployments fail, I need to rollback quickly. I implement automated rollback mechanisms 
              that trigger based on health check failures or error rate thresholds.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Security in CI/CD</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Security is crucial in CI/CD pipelines. I implement multiple security measures to protect 
              against vulnerabilities and unauthorized access.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-3">Secret Management</h4>
                <ul className="space-y-2 text-red-800 text-sm">
                  <li>• GitHub Secrets</li>
                  <li>• AWS Secrets Manager</li>
                  <li>• Environment variables</li>
                  <li>• Encrypted storage</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-900 mb-3">Vulnerability Scanning</h4>
                <ul className="space-y-2 text-orange-800 text-sm">
                  <li>• npm audit</li>
                  <li>• Snyk scanning</li>
                  <li>• Docker image scanning</li>
                  <li>• OWASP dependency check</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">Access Control</h4>
                <ul className="space-y-2 text-yellow-800 text-sm">
                  <li>• Branch protection rules</li>
                  <li>• Required reviews</li>
                  <li>• Environment approvals</li>
                  <li>• Audit logging</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Performance Optimization</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              CI/CD pipelines can become slow and expensive if not optimized. I implement several 
              strategies to improve pipeline performance.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Pipeline Optimization</h3>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Parallel Jobs:</strong> Run independent tests and builds in parallel</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Caching:</strong> Cache dependencies and build artifacts between runs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Conditional Steps:</strong> Skip unnecessary steps based on file changes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Resource Optimization:</strong> Use appropriate runner sizes for different jobs</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Real-World Case Study</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Let me share a real example of implementing CI/CD for a full-stack application. I built 
              a complete pipeline for a Bitcoin ATM locator that includes mobile apps, web app, and backend API.
            </p>

            <div className="bg-gradient-to-r from-accent/10 to-accent-dark/10 rounded-xl p-8 mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Pipeline Results</h4>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <span><strong>Deployment Time:</strong> Reduced from 2 hours to 15 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <span><strong>Error Rate:</strong> Reduced deployment errors by 95%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <span><strong>Rollback Time:</strong> Automated rollbacks in under 2 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <span><strong>Developer Productivity:</strong> 80% reduction in deployment-related tasks</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Key Takeaways</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Building comprehensive CI/CD pipelines taught me valuable lessons about automation and DevOps:
            </p>

            <ol className="space-y-4 text-muted-foreground mb-8">
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                <span><strong>Start simple:</strong> Begin with basic automation and gradually add complexity.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                <span><strong>Test everything:</strong> Implement comprehensive testing at every stage of the pipeline.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                <span><strong>Monitor continuously:</strong> Implement monitoring and alerting for all deployed applications.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                <span><strong>Security first:</strong> Build security into your CI/CD pipeline from the beginning.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">5</span>
                <span><strong>Document everything:</strong> Keep detailed documentation of your CI/CD processes and procedures.</span>
              </li>
            </ol>

            <div className="bg-gradient-to-r from-accent/10 to-accent-dark/10 rounded-xl p-8 my-12">
              <h3 className="text-xl font-bold text-foreground mb-4">The Bottom Line</h3>
              <p className="text-muted-foreground leading-relaxed">
                DevOps and CI/CD automation are essential for modern software development. The key is to start with 
                simple automation and gradually build more sophisticated pipelines. Focus on testing, monitoring, 
                and security from the beginning, and you'll build systems that deploy reliably and maintain themselves. 
                Remember: the best CI/CD pipeline is the one that gets out of your way and lets you focus on building great software.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex justify-center">
                <Link 
                  href="/" 
                  className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-dark transition-colors duration-300"
                >
                  View My Work
                </Link>
              </div>
            </div>

            {/* Article Navigation */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center gap-4">
                {/* Previous Article */}
                <Link 
                  href="/blog/fullstack-development-end-to-end" 
                  className="flex items-center gap-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-gray-700 font-medium">Previous</span>
                </Link>

                {/* Next Article */}
                <Link 
                  href="/blog/startup-technical-leadership" 
                  className="flex items-center gap-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="text-gray-700 font-medium">Next</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </article>
      </main>
    </>
  );
}
