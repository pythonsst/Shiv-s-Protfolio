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
              <span>December 20, 2024</span>
              <span>•</span>
              <span>9 mins read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Backend Development with Node.js & AWS: Building Scalable APIs
            </h1>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Backend</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">AWS</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">API Development</span>
            </div>
          </header>

          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Building scalable backend systems is like building the foundation of a skyscraper - it needs to be solid, 
              reliable, and able to support everything built on top of it. This is how I built backend systems that serve millions of users 
              using Node.js and AWS, and the lessons I learned along the way.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The Backend Architecture Mindset</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Coming from mobile development, I had to shift my thinking from "how does this work on the device?" to "how does this work at scale?" 
              The backend is where the real engineering happens - it's where you handle concurrency, data consistency, and system reliability.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 py-4 bg-muted/30 rounded-r-lg my-8">
              <p className="text-muted-foreground italic">
                "A good backend is invisible - users never think about it, but they notice immediately when it's not working."
              </p>
            </blockquote>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Node.js: The Full-Stack Advantage</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Node.js became my go-to backend technology because it allowed me to use JavaScript everywhere. 
              This consistency across the stack meant faster development and easier maintenance.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">The Node.js Stack That Scales</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Core Framework</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Express.js for routing</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Helmet for security</li>
                  <li>• CORS for cross-origin requests</li>
                  <li>• Morgan for logging</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Database & Caching</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• PostgreSQL for relational data</li>
                  <li>• Redis for caching and sessions</li>
                  <li>• Prisma as ORM</li>
                  <li>• Connection pooling</li>
                  <li>• Database migrations</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">API Design: Building for the Future</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Good API design is crucial for scalability. Here are the principles I follow:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">RESTful Design</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Consistent URL patterns</li>
                  <li>• Proper HTTP status codes</li>
                  <li>• Resource-based endpoints</li>
                  <li>• Pagination for large datasets</li>
                  <li>• Versioning strategy</li>
                </ul>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Error Handling</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Consistent error response format</li>
                  <li>• Proper error logging</li>
                  <li>• Client-friendly error messages</li>
                  <li>• Error tracking and monitoring</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">AWS: The Cloud Infrastructure</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              AWS provides the infrastructure needed to scale. Here's how I use it:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Compute & Storage</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• EC2 for application servers</li>
                  <li>• S3 for file storage</li>
                  <li>• RDS for managed databases</li>
                  <li>• ElastiCache for Redis</li>
                  <li>• CloudFront for CDN</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Monitoring & Security</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• CloudWatch for monitoring</li>
                  <li>• IAM for access control</li>
                  <li>• VPC for network security</li>
                  <li>• WAF for web protection</li>
                  <li>• Secrets Manager for credentials</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Real-World Example: Bitcoin ATM API</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Let me show you how I built the backend for the Bitcoin ATM locator that serves 2+ million users:
            </p>

            <div className="bg-muted/30 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">API Endpoints</h3>
              <pre className="bg-black/5 rounded p-4 text-sm overflow-x-auto">
                <code>{`GET /api/v1/atms?lat=40.7128&lng=-74.0060&radius=5000
POST /api/v1/atms/{id}/availability
GET /api/v1/users/{id}/transactions
POST /api/v1/users/{id}/favorites`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Performance Optimization</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Backend performance is critical for user experience. Here are the techniques I use:
            </p>

            <ul className="text-muted-foreground leading-relaxed mb-6 space-y-3">
              <li><strong>Database Optimization:</strong> Proper indexing, query optimization, and connection pooling</li>
              <li><strong>Caching Strategy:</strong> Redis for frequently accessed data, CDN for static assets</li>
              <li><strong>Rate Limiting:</strong> Protect APIs from abuse and ensure fair usage</li>
              <li><strong>Load Balancing:</strong> Distribute traffic across multiple server instances</li>
              <li><strong>Monitoring:</strong> Real-time performance metrics and alerting</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Security: Building Fort Knox</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Security is not optional in backend development. Here's my security checklist:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Authentication & Authorization</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• JWT tokens for authentication</li>
                  <li>• Role-based access control</li>
                  <li>• Password hashing with bcrypt</li>
                  <li>• OAuth integration</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Data Protection</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Input validation and sanitization</li>
                  <li>• SQL injection prevention</li>
                  <li>• HTTPS everywhere</li>
                  <li>• Data encryption at rest</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 my-12">
              <h3 className="text-xl font-semibold text-foreground mb-4">Need a Scalable Backend?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you're looking for a backend engineer who can build scalable, secure APIs that serve millions of users, 
                I'd love to discuss your project requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:pythonsst@gmail.com" className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors font-medium">
                  Let's Build Your Backend
                </a>
                <Link href="/" className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium">
                  See My Work
                </Link>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong>About the Author:</strong> Shiv Shankar Tiwari is a Backend Engineer with over six years of experience building scalable APIs and backend systems. 
                He specializes in Node.js, AWS, PostgreSQL, and building systems that serve millions of users reliably.
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
