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
              Coming from mobile development, transitioning to web development felt like learning a new language. But here's the secret: 
              the principles of good mobile development translate beautifully to web development. This is how I made the transition from React Native to React web development, 
              and how you can too.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The Mobile-to-Web Mental Model</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              When I started building web applications, I realized that many concepts from mobile development apply directly to web development:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">React Native Concepts</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Component-based architecture</li>
                  <li>• Props and state management</li>
                  <li>• Navigation and routing</li>
                  <li>• API integration</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">React Web Equivalents</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Same component patterns</li>
                  <li>• Props and state work identically</li>
                  <li>• React Router for navigation</li>
                  <li>• Fetch API or Axios</li>
                  <li>• Bundle optimization and lazy loading</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">TypeScript: The Game Changer</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              TypeScript was the bridge that made my transition seamless. Having used TypeScript in React Native, 
              I already understood the benefits: better IDE support, fewer runtime errors, and more maintainable code.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 py-4 bg-muted/30 rounded-r-lg my-8">
              <p className="text-muted-foreground italic">
                "TypeScript doesn't just catch bugs - it makes you a better developer by forcing you to think about data structures and API contracts."
              </p>
            </blockquote>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Key TypeScript Patterns for Web Development</h3>
            
            <div className="bg-muted/30 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">1. API Response Types</h4>
              <pre className="bg-black/5 rounded p-4 text-sm overflow-x-auto">
                <code>{`interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}`}</code>
              </pre>
            </div>

            <div className="bg-muted/30 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">2. Component Props</h4>
              <pre className="bg-black/5 rounded p-4 text-sm overflow-x-auto">
                <code>{`interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Modern React Patterns</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Coming from React Native, I was already familiar with hooks, but web development introduced me to some powerful patterns:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Custom Hooks for Data Fetching</h3>
            <div className="bg-muted/30 rounded-lg p-6 mb-6">
              <pre className="bg-black/5 rounded p-4 text-sm overflow-x-auto">
                <code>{`function useUser(userId: number) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUser(userId)
      .then(setUser)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, loading, error };
}`}</code>
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Component Composition</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              One of the biggest differences between mobile and web development is the importance of component composition. 
              In web development, you often need to create reusable UI components that work across different pages.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Performance Optimization</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Web performance optimization is different from mobile, but the principles are similar:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Bundle Optimization</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Code splitting with React.lazy()</li>
                  <li>• Dynamic imports for heavy libraries</li>
                  <li>• Tree shaking unused code</li>
                  <li>• Webpack bundle analysis</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Runtime Performance</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• React.memo() for component memoization</li>
                  <li>• useMemo() and useCallback() for expensive operations</li>
                  <li>• Virtual scrolling for large lists</li>
                  <li>• Image optimization and lazy loading</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The Full-Stack Advantage</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Having experience in both mobile and web development gives you a unique advantage. You can:
            </p>

            <ul className="text-muted-foreground leading-relaxed mb-6 space-y-3">
              <li>• Design APIs that work well for both mobile and web clients</li>
              <li>• Share business logic between platforms</li>
              <li>• Make architectural decisions that benefit the entire system</li>
              <li>• Debug issues that span multiple platforms</li>
              <li>• Mentor developers across different disciplines</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Tools and Libraries I Use</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Core Framework</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• React 18+</li>
                  <li>• Next.js for full-stack</li>
                  <li>• TypeScript</li>
                  <li>• Vite for development</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">State Management</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• React Query</li>
                  <li>• Zustand</li>
                  <li>• Context API</li>
                  <li>• Redux Toolkit</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Styling</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Tailwind CSS</li>
                  <li>• Styled Components</li>
                  <li>• CSS Modules</li>
                  <li>• Emotion</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 my-12">
              <h3 className="text-xl font-semibold text-foreground mb-4">Ready to Make the Transition?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you're a mobile developer looking to expand into web development, or a company looking for a full-stack engineer 
                with mobile experience, I'd love to share more insights about the transition.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:pythonsst@gmail.com" className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors font-medium">
                  Let's Talk Web Development
                </a>
                <Link href="/" className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium">
                  See My Projects
                </Link>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong>About the Author:</strong> Shiv Shankar Tiwari is a polyglot Software Engineer with experience in both mobile and web development. 
                He specializes in React Native, React, TypeScript, and building full-stack applications that work seamlessly across platforms.
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
