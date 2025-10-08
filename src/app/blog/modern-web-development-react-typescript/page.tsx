import Navigation from "@/components/Navigation";
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
                  href="/blog/backend-development-nodejs-aws" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Next Article →
                </Link>
              </div>
            </div>
          </div>

          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
              <span>December 28, 2024</span>
              <span>•</span>
              <span>7 mins read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Modern Web Development with React & TypeScript: A Mobile Developer's Guide
            </h1>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Web Development</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">React</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">TypeScript</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Frontend</span>
            </div>
          </header>

          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Coming from mobile development, transitioning to web development felt like learning a new language. 
              But here's the thing—the fundamentals are the same. You're still building user interfaces, managing 
              state, and handling user interactions. The difference is in the ecosystem, the tools, and the 
              constraints. After building multiple web applications, here's what I wish I knew when I started.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Why TypeScript Changed Everything</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              As a mobile developer, I was used to strong typing with languages like Swift and Kotlin. JavaScript's 
              dynamic typing felt like a step backward. TypeScript bridges that gap beautifully, giving you the 
              flexibility of JavaScript with the safety of static typing.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 py-4 bg-muted/30 rounded-r-lg my-8">
              <p className="text-muted-foreground italic">
                "TypeScript isn't just about catching bugs—it's about writing better code. The type system becomes 
                your documentation and your guide."
              </p>
            </blockquote>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">TypeScript Benefits I Discovered</h3>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Better IDE Support:</strong> Autocomplete, refactoring, and navigation that actually works</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Compile-time Error Detection:</strong> Catch bugs before they reach production</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Self-documenting Code:</strong> Types serve as living documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Easier Refactoring:</strong> Rename variables and functions with confidence</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">React: The Component Revolution</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Coming from React Native, React felt familiar but different. The component model is the same, but 
              the ecosystem and patterns are more mature. Here's how I approach React development:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Component Architecture</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I structure my components using a clear hierarchy that mirrors what I learned in mobile development:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Component Structure</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Presentational Components:</strong> Pure components that only handle UI rendering</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Container Components:</strong> Components that handle data fetching and state management</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Layout Components:</strong> Components that define page structure and navigation</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Custom Hooks:</strong> Reusable logic that can be shared across components</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">State Management Evolution</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              State management in React has evolved significantly. Here's my approach based on application complexity:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Simple Apps</h4>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>• useState for local state</li>
                  <li>• useContext for global state</li>
                  <li>• Custom hooks for logic</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Medium Apps</h4>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• Zustand for global state</li>
                  <li>• React Query for server state</li>
                  <li>• Form libraries for forms</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">Complex Apps</h4>
                <ul className="space-y-2 text-purple-800 text-sm">
                  <li>• Redux Toolkit</li>
                  <li>• RTK Query</li>
                  <li>• Complex state machines</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Modern Development Workflow</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              The web development ecosystem has matured significantly. Here's the modern workflow that I use for 
              building production-ready web applications:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Development Tools</h3>
            <div className="bg-accent/5 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Essential Tools</h4>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Development:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Vite for fast builds</li>
                    <li>• ESLint for code quality</li>
                    <li>• Prettier for formatting</li>
                    <li>• Husky for git hooks</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Testing:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Vitest for unit tests</li>
                    <li>• React Testing Library</li>
                    <li>• Playwright for e2e tests</li>
                    <li>• Storybook for components</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Performance Optimization</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Web performance is different from mobile performance, but the principles are similar. Here are the 
              key optimization techniques I use:
            </p>

            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Code Splitting:</strong> Load only the code you need, when you need it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Lazy Loading:</strong> Load components and routes on demand</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Memoization:</strong> Use React.memo, useMemo, and useCallback strategically</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Bundle Optimization:</strong> Tree shaking, minification, and compression</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">CSS-in-JS vs Traditional CSS</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              One of the biggest differences between mobile and web development is styling. In mobile, you have 
              platform-specific styling systems. On the web, you have multiple approaches to choose from.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">CSS-in-JS (Styled Components)</h4>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p><strong>Pros:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Component-scoped styles</li>
                    <li>• Dynamic styling with props</li>
                    <li>• No class name conflicts</li>
                    <li>• TypeScript integration</li>
                  </ul>
                  <p className="mt-2"><strong>Cons:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Runtime overhead</li>
                    <li>• Bundle size increase</li>
                    <li>• Learning curve</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Utility-First (Tailwind CSS)</h4>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p><strong>Pros:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Rapid development</li>
                    <li>• Consistent design system</li>
                    <li>• Small bundle size</li>
                    <li>• No runtime overhead</li>
                  </ul>
                  <p className="mt-2"><strong>Cons:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Verbose HTML</li>
                    <li>• Learning curve</li>
                    <li>• Less dynamic styling</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Real-World Project Structure</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Here's the project structure I use for production React applications:
            </p>

            <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-8 overflow-x-auto">
              <pre className="text-sm">
{`src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── forms/        # Form components
│   └── layout/       # Layout components
├── pages/            # Page components
├── hooks/            # Custom hooks
├── services/         # API services
├── types/            # TypeScript types
├── utils/            # Utility functions
├── constants/        # App constants
└── styles/           # Global styles`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Common Pitfalls and Solutions</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Coming from mobile development, I made several mistakes that are common when transitioning to web development. 
              Here are the ones I wish I knew about:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Pitfall 1: Not Understanding the Browser</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Browsers handle memory differently than mobile apps. I learned to use browser dev tools extensively 
              and implement proper cleanup for event listeners and subscriptions.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Pitfall 2: Ignoring SEO</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Unlike mobile apps, web applications need to be discoverable by search engines. I learned to use 
              Next.js for server-side rendering and proper meta tags.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Pitfall 3: Not Optimizing for Different Devices</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Web applications need to work on everything from phones to large desktop monitors. I learned to 
              use responsive design principles and test on multiple devices.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Key Takeaways</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Transitioning from mobile to web development taught me valuable lessons:
            </p>

            <ol className="space-y-4 text-muted-foreground mb-8">
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                <span><strong>TypeScript is essential:</strong> The type safety and developer experience benefits are worth the learning curve.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                <span><strong>Component architecture matters:</strong> Good component design makes applications maintainable and testable.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                <span><strong>Performance is different:</strong> Web performance focuses on bundle size, loading time, and runtime optimization.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                <span><strong>Testing is crucial:</strong> The web environment is less predictable than mobile, making testing even more important.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">5</span>
                <span><strong>Tooling ecosystem is rich:</strong> Take advantage of the mature tooling ecosystem for better developer experience.</span>
              </li>
            </ol>

            <div className="bg-gradient-to-r from-accent/10 to-accent-dark/10 rounded-xl p-8 my-12">
              <h3 className="text-xl font-bold text-foreground mb-4">The Bottom Line</h3>
              <p className="text-muted-foreground leading-relaxed">
                Modern web development with React and TypeScript is powerful and enjoyable once you understand the ecosystem. 
                The key is to embrace the differences while leveraging the similarities with mobile development. 
                Start with TypeScript, focus on component architecture, and gradually adopt more advanced patterns as your applications grow.
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
                  href="/blog/startup-engineering-one-man-army" 
                  className="flex items-center gap-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-gray-700 font-medium">Previous</span>
                </Link>

                {/* Next Article */}
                <Link 
                  href="/blog/backend-development-nodejs-aws" 
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
