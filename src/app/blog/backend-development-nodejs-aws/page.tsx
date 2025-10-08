import Navigation from "@/components/Navigation";
import CodeBlock from "@/components/CodeBlock";
import { H1, H2, H3, Paragraph, LeadParagraph, Blockquote, UnorderedList, ListItem, Strong } from "@/components/Typography";
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
                  href="/blog/fullstack-development-end-to-end" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Next Article →
                </Link>
              </div>
            </div>
          </div>

          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
              <span>December 20, 2024</span>
              <span>•</span>
              <span>9 mins read</span>
            </div>
            <H1>
              Backend Development with Node.js & AWS: Building Scalable APIs
            </H1>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Backend</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">AWS</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">API Development</span>
            </div>
          </header>

          <div className="prose max-w-none">
            <LeadParagraph>
              Building robust backend systems that can scale to millions of users requires more than just writing 
              good code—it requires understanding distributed systems, cloud infrastructure, and the art of API design. 
              Over the past six years, I've built backend systems that handle everything from simple CRUD operations 
              to complex real-time features. Here's what I've learned about building production-ready APIs with Node.js and AWS.
            </LeadParagraph>

            <H2>Why Node.js for Backend Development</H2>
            
            <Paragraph>
              Coming from mobile development, I was initially skeptical about using JavaScript on the server. But 
              Node.js has proven to be an excellent choice for building scalable backend systems. The event-driven 
              architecture and the ability to share code between frontend and backend make it incredibly powerful.
            </Paragraph>

            <Blockquote>
              "Node.js isn't just about JavaScript everywhere—it's about building fast, scalable applications 
              with a single language and a massive ecosystem."
            </Blockquote>

            <H3>Key Advantages I Discovered</H3>
            <UnorderedList>
              <ListItem>
                <Strong>High Performance:</Strong> Event-driven, non-blocking I/O handles thousands of concurrent connections
              </ListItem>
              <ListItem>
                <Strong>Rapid Development:</Strong> Huge ecosystem of packages and libraries
              </ListItem>
              <ListItem>
                <Strong>Code Reuse:</Strong> Share validation, types, and utilities between frontend and backend
              </ListItem>
              <ListItem>
                <Strong>Real-time Features:</Strong> Built-in support for WebSockets and real-time communication
              </ListItem>
            </UnorderedList>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">API Design Principles</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Good API design is crucial for maintainable and scalable backend systems. Here are the principles 
              I follow when designing APIs:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">1. RESTful Design</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I follow REST principles for predictable and intuitive APIs. This means using proper HTTP methods, 
              status codes, and resource-based URLs.
            </p>

            <CodeBlock 
              title="RESTful API Design Example"
              code={`// Good RESTful API design
GET    /api/users          // Get all users
GET    /api/users/:id      // Get specific user
POST   /api/users          // Create new user
PUT    /api/users/:id      // Update user
DELETE /api/users/:id      // Delete user

// Response format
{
  "data": { ... },
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 20
  },
  "links": {
    "self": "/api/users?page=1",
    "next": "/api/users?page=2"
  }
}`}
              className="mb-8"
            />

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Input Validation</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Never trust user input. I use libraries like Joi or Zod for comprehensive input validation that 
              catches errors before they reach business logic.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Error Handling</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Consistent error handling is crucial for debugging and user experience. I implement a centralized 
              error handling system with proper HTTP status codes and meaningful error messages.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Database Design and Optimization</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Database design is the foundation of any backend system. Here's how I approach database design 
              for scalable applications:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">PostgreSQL: My Go-To Database</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              PostgreSQL has become my database of choice for most applications. It offers excellent performance, 
              ACID compliance, and powerful features like JSON columns and full-text search.
            </p>

            <div className="bg-accent/5 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Database Optimization Strategies</h4>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Performance:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Proper indexing strategy</li>
                    <li>• Query optimization</li>
                    <li>• Connection pooling</li>
                    <li>• Read replicas for scaling</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Reliability:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Automated backups</li>
                    <li>• Point-in-time recovery</li>
                    <li>• Database migrations</li>
                    <li>• Monitoring and alerting</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Redis: The Swiss Army Knife</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Redis is incredibly versatile. I use it for caching, session storage, rate limiting, and real-time 
              features. It's become an essential part of my backend architecture.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">AWS: Cloud Infrastructure</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              AWS provides the infrastructure foundation for scalable backend systems. Here's how I leverage 
              AWS services for production applications:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Core Services</h4>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>• <strong>EC2:</strong> Virtual servers for applications</li>
                  <li>• <strong>RDS:</strong> Managed PostgreSQL databases</li>
                  <li>• <strong>ElastiCache:</strong> Managed Redis instances</li>
                  <li>• <strong>S3:</strong> Object storage for files</li>
                  <li>• <strong>CloudFront:</strong> CDN for global distribution</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Advanced Services</h4>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• <strong>ECS/EKS:</strong> Container orchestration</li>
                  <li>• <strong>Lambda:</strong> Serverless functions</li>
                  <li>• <strong>API Gateway:</strong> API management</li>
                  <li>• <strong>CloudWatch:</strong> Monitoring and logging</li>
                  <li>• <strong>Route 53:</strong> DNS management</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Microservices Architecture</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As applications grow, I transition from monolithic to microservices architecture. Each service 
              has its own database, API, and deployment pipeline.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Security Best Practices</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Security is not optional in backend development. Here are the security measures I implement 
              in every application:
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-red-900 mb-4">Security Checklist</h4>
              <div className="grid md:grid-cols-2 gap-4 text-red-800">
                <div>
                  <h5 className="font-semibold mb-2">Authentication & Authorization:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• JWT tokens with proper expiration</li>
                    <li>• Role-based access control (RBAC)</li>
                    <li>• Password hashing with bcrypt</li>
                    <li>• Rate limiting on auth endpoints</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Data Protection:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• HTTPS everywhere</li>
                    <li>• Input sanitization</li>
                    <li>• SQL injection prevention</li>
                    <li>• CORS configuration</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Performance Optimization</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Backend performance directly impacts user experience. Here are the optimization techniques 
              I use to build fast APIs:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Caching Strategies</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Caching is one of the most effective ways to improve performance. I implement multiple 
              layers of caching:
            </p>

            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Application-level caching:</strong> Cache frequently accessed data in memory</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Redis caching:</strong> Cache database queries and API responses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>CDN caching:</strong> Cache static assets and API responses globally</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Database Optimization</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Database performance is often the bottleneck in backend systems. Here's how I optimize database performance:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-foreground mb-2">Indexing</h5>
                <p className="text-muted-foreground text-sm">Proper indexes on frequently queried columns</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-foreground mb-2">Query Optimization</h5>
                <p className="text-muted-foreground text-sm">Analyze and optimize slow queries</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-foreground mb-2">Connection Pooling</h5>
                <p className="text-muted-foreground text-sm">Reuse database connections efficiently</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Monitoring and Debugging</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Production systems need comprehensive monitoring. Here's my monitoring stack:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Monitoring Stack</h4>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Application Monitoring:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Custom metrics with Prometheus</li>
                    <li>• Error tracking with Sentry</li>
                    <li>• Performance monitoring</li>
                    <li>• Health check endpoints</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Infrastructure Monitoring:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• AWS CloudWatch</li>
                    <li>• Server metrics</li>
                    <li>• Database performance</li>
                    <li>• Alert management</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Real-World Case Study</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Let me share a real example of scaling a backend system. I built a Bitcoin ATM locator API that 
              went from handling 1,000 requests per day to over 1 million requests per day in just six months.
            </p>

            <div className="bg-gradient-to-r from-accent/10 to-accent-dark/10 rounded-xl p-8 mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Scaling Journey</h4>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <span><strong>Initial Setup:</strong> Single EC2 instance with PostgreSQL database</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <span><strong>First Scale:</strong> Added Redis caching and database indexing</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <span><strong>Microservices:</strong> Split into location, user, and payment services</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <span><strong>Final Scale:</strong> ECS containers with auto-scaling and read replicas</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Key Takeaways</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Building scalable backend systems taught me valuable lessons:
            </p>

            <ol className="space-y-4 text-muted-foreground mb-8">
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                <span><strong>Start simple, scale gradually:</strong> Begin with a monolithic architecture and evolve to microservices as needed.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                <span><strong>Monitor everything:</strong> You can't optimize what you can't measure. Implement comprehensive monitoring from day one.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                <span><strong>Security is fundamental:</strong> Build security into your architecture, don't add it as an afterthought.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                <span><strong>Caching is crucial:</strong> Multiple layers of caching can dramatically improve performance and reduce costs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">5</span>
                <span><strong>Automation saves time:</strong> Automate deployments, testing, and monitoring to focus on building features.</span>
              </li>
            </ol>

            <div className="bg-gradient-to-r from-accent/10 to-accent-dark/10 rounded-xl p-8 my-12">
              <h3 className="text-xl font-bold text-foreground mb-4">The Bottom Line</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building scalable backend systems with Node.js and AWS is challenging but incredibly rewarding. 
                The key is to start with solid fundamentals—good API design, proper database schema, and comprehensive 
                testing—then gradually add complexity as your application grows. Focus on monitoring, security, 
                and performance from the beginning, and you'll build systems that can scale to millions of users.
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
                  href="/blog/modern-web-development-react-typescript" 
                  className="flex items-center gap-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-gray-700 font-medium">Previous</span>
                </Link>

                {/* Next Article */}
                <Link 
                  href="/blog/fullstack-development-end-to-end" 
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
