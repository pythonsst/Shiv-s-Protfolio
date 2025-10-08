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
                  href="/blog/devops-cicd-automation-deployment" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Next Article →
                </Link>
              </div>
            </div>
          </div>

          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
              <span>December 15, 2024</span>
              <span>•</span>
              <span>10 mins read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Full-Stack Development: Building End-to-End Solutions
            </h1>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Full Stack</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">React Native</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">AWS</span>
            </div>
          </header>

          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Full-stack development isn't just about knowing multiple technologies—it's about understanding how 
              they work together to create seamless user experiences. Over the past six years, I've built complete 
              applications from mobile apps to web interfaces to backend APIs, learning how to architect systems 
              that scale and maintain themselves. Here's my comprehensive guide to building end-to-end solutions.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The Full-Stack Mindset</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Being a full-stack developer means thinking beyond individual components. You need to understand 
              how data flows from the database through APIs to the user interface and back. This holistic 
              approach is what separates good developers from great ones.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 py-4 bg-muted/30 rounded-r-lg my-8">
              <p className="text-muted-foreground italic">
                "Full-stack development isn't about being a jack-of-all-trades—it's about understanding the 
                entire system and making informed decisions at every layer."
              </p>
            </blockquote>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Key Principles I Follow</h3>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Data-First Design:</strong> Start with the data model and work outward to the UI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>API-First Development:</strong> Design APIs before building the frontend</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Consistent Patterns:</strong> Use the same patterns across all layers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>End-to-End Testing:</strong> Test the entire user journey, not just individual components</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">My Full-Stack Architecture</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              After building multiple full-stack applications, I've refined my architecture to be both scalable 
              and maintainable. Here's the stack I use for most projects:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Technology Stack</h3>
              <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Frontend</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• React Native (Mobile)</li>
                    <li>• React + TypeScript (Web)</li>
                    <li>• Next.js (SSR/SSG)</li>
                    <li>• Tailwind CSS</li>
                    <li>• Zustand/Redux</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Backend</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Node.js + Express</li>
                    <li>• TypeScript</li>
                    <li>• PostgreSQL</li>
                    <li>• Redis</li>
                    <li>• JWT Authentication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Infrastructure</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• AWS (EC2, RDS, S3)</li>
                    <li>• Docker</li>
                    <li>• GitHub Actions</li>
                    <li>• CloudFront CDN</li>
                    <li>• CloudWatch</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Building the Data Layer</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              The data layer is the foundation of any full-stack application. I start by designing a robust 
              database schema that can evolve with the application.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Database Design Principles</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Good database design makes everything else easier. Here are the principles I follow:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Schema Design</h4>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>• Normalize data to reduce redundancy</li>
                  <li>• Use proper foreign key relationships</li>
                  <li>• Design for query patterns</li>
                  <li>• Plan for future scalability</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Performance</h4>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• Index frequently queried columns</li>
                  <li>• Use connection pooling</li>
                  <li>• Implement caching strategies</li>
                  <li>• Monitor query performance</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Migration Strategy</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Database migrations are critical for maintaining data integrity. I use a version-controlled 
              migration system that allows for both forward and backward migrations.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">API Layer: The Bridge</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              The API layer is what connects your frontend and backend. A well-designed API makes development 
              faster and the application more maintainable.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">RESTful API Design</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I follow REST principles for predictable and intuitive APIs. This includes proper HTTP methods, 
              status codes, and resource-based URLs.
            </p>

            <CodeBlock 
              title="RESTful API Design"
              code={`// Example API endpoints
GET    /api/v1/users              // List users
GET    /api/v1/users/:id          // Get user by ID
POST   /api/v1/users              // Create new user
PUT    /api/v1/users/:id          // Update user
DELETE /api/v1/users/:id          // Delete user

// Response format
{
  "success": true,
  "data": { ... },
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 20
  }
}`}
              className="mb-8"
            />

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Error Handling and Validation</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Consistent error handling is crucial for debugging and user experience. I implement a centralized 
              error handling system with proper HTTP status codes and meaningful error messages.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Frontend Development</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              The frontend is where users interact with your application. I build both mobile and web interfaces 
              that share common patterns and components.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">React Native for Mobile</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              React Native allows me to build native mobile apps while sharing code with web applications. 
              I use TypeScript for type safety and consistent patterns across platforms.
            </p>

            <div className="bg-accent/5 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Mobile App Architecture</h4>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Navigation:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• React Navigation</li>
                    <li>• Stack and Tab navigators</li>
                    <li>• Deep linking support</li>
                    <li>• Authentication flow</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">State Management:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Zustand for global state</li>
                    <li>• React Query for server state</li>
                    <li>• AsyncStorage for persistence</li>
                    <li>• Context for app-wide state</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">React for Web</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For web applications, I use React with Next.js for server-side rendering and static site generation. 
              This provides better SEO and performance.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">State Management Across Platforms</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Managing state consistently across mobile and web applications is crucial for a good user experience. 
              I use similar patterns and libraries across both platforms.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Client State</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• UI state (modals, forms)</li>
                  <li>• Navigation state</li>
                  <li>• User preferences</li>
                  <li>• Temporary data</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Server State</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• API responses</li>
                  <li>• Cached data</li>
                  <li>• Real-time updates</li>
                  <li>• Background sync</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Persistent State</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• User authentication</li>
                  <li>• App settings</li>
                  <li>• Offline data</li>
                  <li>• User preferences</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Authentication and Security</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Security is crucial in full-stack applications. I implement a comprehensive authentication and 
              authorization system that works across all platforms.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">JWT-Based Authentication</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I use JWT tokens for authentication, which work well across mobile and web applications. The 
              tokens are stored securely and refreshed automatically.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-red-900 mb-4">Security Checklist</h4>
              <div className="grid md:grid-cols-2 gap-4 text-red-800">
                <div>
                  <h5 className="font-semibold mb-2">Authentication:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• JWT tokens with expiration</li>
                    <li>• Refresh token rotation</li>
                    <li>• Password hashing (bcrypt)</li>
                    <li>• Rate limiting on auth endpoints</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Authorization:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Role-based access control</li>
                    <li>• Resource-level permissions</li>
                    <li>• API endpoint protection</li>
                    <li>• Client-side route guards</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Real-Time Features</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Modern applications need real-time features. I implement WebSockets for live updates, notifications, 
              and collaborative features.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">WebSocket Implementation</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I use Socket.io for real-time communication. It provides fallbacks for older browsers and handles 
              connection management automatically.
            </p>

            <CodeBlock 
              title="WebSocket Implementation"
              code={`// Server-side WebSocket setup
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  // Join user to specific rooms
  socket.join(\`user_\${userId}\`);
  
  // Handle real-time events
  socket.on('send_message', (data) => {
    io.to(\`room_\${data.roomId}\`).emit('new_message', data);
  });
});

// Client-side WebSocket connection
const socket = io('ws://localhost:3000');

socket.on('new_message', (data) => {
  // Update UI with new message
  updateChatUI(data);
});`}
              className="mb-8"
            />

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Testing Strategy</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Full-stack applications require comprehensive testing across all layers. I implement a testing 
              strategy that covers unit tests, integration tests, and end-to-end tests.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Unit Tests</h4>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>• Individual functions</li>
                  <li>• Component logic</li>
                  <li>• API endpoints</li>
                  <li>• Utility functions</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Integration Tests</h4>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• API integration</li>
                  <li>• Database operations</li>
                  <li>• Authentication flow</li>
                  <li>• External services</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">E2E Tests</h4>
                <ul className="space-y-2 text-purple-800 text-sm">
                  <li>• Complete user journeys</li>
                  <li>• Cross-platform testing</li>
                  <li>• Performance testing</li>
                  <li>• Accessibility testing</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Deployment and DevOps</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Deploying full-stack applications requires coordination between multiple services. I use Docker 
              and CI/CD pipelines to automate the deployment process.
            </p>

            <div className="bg-accent/5 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Deployment Pipeline</h4>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <span><strong>Code Push:</strong> Push to main branch triggers CI/CD</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <span><strong>Testing:</strong> Run all tests (unit, integration, e2e)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <span><strong>Build:</strong> Build Docker images for all services</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <span><strong>Deploy:</strong> Deploy to staging, then production</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Real-World Case Study</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Let me share a real example of building a full-stack application. I built a Bitcoin ATM locator 
              that includes a React Native mobile app, a React web app, and a Node.js backend API.
            </p>

            <div className="bg-gradient-to-r from-accent/10 to-accent-dark/10 rounded-xl p-8 mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Application Architecture</h4>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <span><strong>Mobile App:</strong> React Native with location services and offline support</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <span><strong>Web App:</strong> React with Next.js for SEO and performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <span><strong>Backend API:</strong> Node.js with PostgreSQL and Redis caching</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <span><strong>Infrastructure:</strong> AWS with Docker containers and auto-scaling</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Key Takeaways</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Building full-stack applications taught me valuable lessons about system design and development:
            </p>

            <ol className="space-y-4 text-muted-foreground mb-8">
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                <span><strong>Start with the data:</strong> Design your database schema first, then build outward to APIs and UI.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                <span><strong>Consistency is key:</strong> Use the same patterns and libraries across all platforms.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                <span><strong>Test everything:</strong> Implement comprehensive testing across all layers of your application.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                <span><strong>Security first:</strong> Build security into your architecture from the beginning.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">5</span>
                <span><strong>Automate deployment:</strong> Use CI/CD pipelines to deploy consistently and reliably.</span>
              </li>
            </ol>

            <div className="bg-gradient-to-r from-accent/10 to-accent-dark/10 rounded-xl p-8 my-12">
              <h3 className="text-xl font-bold text-foreground mb-4">The Bottom Line</h3>
              <p className="text-muted-foreground leading-relaxed">
                Full-stack development is about understanding the entire system and making informed decisions at every layer. 
                The key is to start with solid fundamentals—good database design, well-structured APIs, and consistent 
                frontend patterns—then gradually add complexity as your application grows. Focus on testing, security, 
                and performance from the beginning, and you'll build applications that scale and maintain themselves.
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
                  href="/blog/backend-development-nodejs-aws" 
                  className="flex items-center gap-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-gray-700 font-medium">Previous</span>
                </Link>

                {/* Next Article */}
                <Link 
                  href="/blog/devops-cicd-automation-deployment" 
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
