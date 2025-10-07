import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function BlogPost() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <article className="max-w-4xl mx-auto px-6 py-16">
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
              automation is not just a luxury - it's a necessity. This is how I built robust CI/CD pipelines 
              that reduced deployment time by 90% and eliminated human error from the release process.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The DevOps Mindset</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              DevOps isn't just about tools - it's about culture, process, and automation. 
              The goal is to make deployments so reliable and fast that they become a non-event.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 py-4 bg-muted/30 rounded-r-lg my-8">
              <p className="text-muted-foreground italic">
                "The best deployment is the one that happens automatically, reliably, and without anyone noticing."
              </p>
            </blockquote>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The CI/CD Pipeline Architecture</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Here's the CI/CD pipeline I built that handles both mobile and web applications:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">1. Source Control & Triggers</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• GitHub webhooks for automatic triggers</li>
                  <li>• Branch protection rules</li>
                  <li>• Pull request requirements</li>
                  <li>• Code review automation</li>
                </ul>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">2. Build & Test Phase</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Automated dependency installation</li>
                  <li>• Unit and integration tests</li>
                  <li>• Code quality checks (ESLint, Prettier)</li>
                  <li>• Security vulnerability scanning</li>
                </ul>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">3. Deployment Phase</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Automated staging deployment</li>
                  <li>• Production deployment with approval</li>
                  <li>• Database migrations</li>
                  <li>• Health checks and rollback capability</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Mobile App Deployment with Fastlane</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Mobile app deployment is particularly challenging due to app store requirements and multiple environments. 
              Fastlane solved this problem by automating the entire process.
            </p>

            <div className="bg-muted/30 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Fastlane Configuration</h3>
              <pre className="bg-black/5 rounded p-4 text-sm overflow-x-auto">
                <code>{`# Fastfile
platform :ios do
  desc "Deploy iOS app to TestFlight"
  lane :deploy_testflight do
    increment_build_number
    build_app(
      workspace: "BitcoinATM.xcworkspace",
      scheme: "BitcoinATM",
      export_method: "app-store"
    )
    upload_to_testflight
  end
end

platform :android do
  desc "Deploy Android app to Play Store"
  lane :deploy_playstore do
    gradle(task: "bundle", build_type: "Release")
    upload_to_play_store(
      track: "internal",
      aab: "app/build/outputs/bundle/release/app-release.aab"
    )
  end
end`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">GitHub Actions Workflow</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              GitHub Actions provides the orchestration layer for our CI/CD pipeline:
            </p>

            <div className="bg-muted/30 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Complete Workflow Example</h3>
              <pre className="bg-black/5 rounded p-4 text-sm overflow-x-auto">
                <code>{`name: Deploy Mobile App

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
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
      - name: Run linting
        run: npm run lint

  deploy-ios:
    needs: test
    runs-on: macos-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.0'
      - name: Install Fastlane
        run: bundle install
      - name: Deploy to TestFlight
        run: bundle exec fastlane deploy_testflight
        env:
          APP_STORE_CONNECT_API_KEY: \${{ secrets.APP_STORE_CONNECT_API_KEY }}

  deploy-android:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.0'
      - name: Install Fastlane
        run: bundle install
      - name: Deploy to Play Store
        run: bundle exec fastlane deploy_playstore
        env:
          GOOGLE_PLAY_SERVICE_ACCOUNT_JSON: \${{ secrets.GOOGLE_PLAY_SERVICE_ACCOUNT_JSON }}`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Web Application Deployment</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Web applications have their own deployment challenges, especially when dealing with multiple environments:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Staging Deployment</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Automatic deployment on PR creation</li>
                  <li>• Preview environments for testing</li>
                  <li>• Database seeding with test data</li>
                  <li>• Integration with testing tools</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Production Deployment</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Blue-green deployment strategy</li>
                  <li>• Database migrations with zero downtime</li>
                  <li>• Health checks and monitoring</li>
                  <li>• Automatic rollback on failure</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">AWS Infrastructure as Code</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Infrastructure as Code ensures that our deployment environments are consistent and reproducible:
            </p>

            <div className="bg-muted/30 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">CDK Stack Example</h3>
              <pre className="bg-black/5 rounded p-4 text-sm overflow-x-auto">
                <code>{`import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';

export class AppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // VPC for isolated network
    const vpc = new ec2.Vpc(this, 'AppVPC');

    // RDS Database
    const database = new rds.DatabaseInstance(this, 'AppDatabase', {
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_13_7,
      }),
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T3,
        ec2.InstanceSize.MICRO
      ),
      vpc,
      deletionProtection: false,
    });

    // Application Load Balancer
    const alb = new elbv2.ApplicationLoadBalancer(this, 'AppALB', {
      vpc,
      internetFacing: true,
    });
  }
}`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Monitoring and Alerting</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Deployment automation is only half the battle - you also need to monitor your applications:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Application Monitoring</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• CloudWatch for AWS resources</li>
                  <li>• Application performance monitoring</li>
                  <li>• Error tracking and alerting</li>
                  <li>• User experience monitoring</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Deployment Monitoring</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Deployment success/failure tracking</li>
                  <li>• Performance regression detection</li>
                  <li>• Automated rollback triggers</li>
                  <li>• Team notification systems</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The Results: 90% Faster Deployments</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Here are the results I achieved with automated CI/CD pipelines:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center bg-accent/5 rounded-lg p-6">
                <div className="text-3xl font-bold text-accent mb-2">90%</div>
                <div className="text-muted-foreground">Faster deployments</div>
              </div>
              <div className="text-center bg-accent/5 rounded-lg p-6">
                <div className="text-3xl font-bold text-accent mb-2">0</div>
                <div className="text-muted-foreground">Manual deployment errors</div>
              </div>
              <div className="text-center bg-accent/5 rounded-lg p-6">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-muted-foreground">Automated monitoring</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Best Practices for DevOps</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Here are the key practices that make DevOps successful:
            </p>

            <ol className="text-muted-foreground leading-relaxed mb-6 space-y-4">
              <li><strong>1. Automate Everything:</strong> If you're doing something manually more than twice, automate it.</li>
              <li><strong>2. Test Early and Often:</strong> Catch issues before they reach production.</li>
              <li><strong>3. Monitor Everything:</strong> You can't fix what you can't see.</li>
              <li><strong>4. Fail Fast and Recover Quickly:</strong> Build systems that can handle failures gracefully.</li>
              <li><strong>5. Document Your Processes:</strong> Make sure everyone understands how deployments work.</li>
            </ol>

            <div className="bg-muted/30 rounded-lg p-8 my-12">
              <h3 className="text-xl font-semibold text-foreground mb-4">Need Help with DevOps?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you're looking to implement DevOps practices and automated deployment pipelines for your applications, 
                I'd love to help you build a robust, reliable deployment system.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:pythonsst@gmail.com" className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors font-medium">
                  Let's Automate Your Deployments
                </a>
                <Link href="/" className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium">
                  See My Work
                </Link>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong>About the Author:</strong> Shiv Shankar Tiwari is a DevOps Engineer with over six years of experience building automated deployment pipelines. 
                He specializes in CI/CD, AWS, Fastlane, and building reliable, scalable infrastructure for mobile and web applications.
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
