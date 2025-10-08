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
                  href="/blog/startup-one-man-army-to-leader" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Next Article →
                </Link>
              </div>
            </div>
          </div>

          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
              <span>December 10, 2024</span>
              <span>•</span>
              <span>8 mins read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Startup Technical Leadership: From Individual Contributor to Engineering Manager
            </h1>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Leadership</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Startup</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Engineering</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Management</span>
            </div>
          </header>

          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Leading engineering teams in a startup is like being a captain of a ship in uncharted waters - you need to navigate technical challenges, 
              manage people, and make decisions that could make or break the company. This is the story of how I transitioned from being a one-man army 
              to leading engineering teams at successful startups.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The Leadership Transition</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Validus Fintech Services, I made the transition from Senior Mobile Engineer to Deputy Manager of Mobile Engineering. 
              This wasn't just a title change - it was a fundamental shift in how I approached my work and responsibilities.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 py-4 bg-muted/30 rounded-r-lg my-8">
              <p className="text-muted-foreground italic">
                "Technical leadership isn't about being the best coder - it's about making everyone around you better."
              </p>
            </blockquote>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The Challenges of Startup Leadership</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Leading engineering teams in a startup comes with unique challenges:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Resource Constraints</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Limited budget for tools and infrastructure</li>
                  <li>• Small team size with big responsibilities</li>
                  <li>• Need to wear multiple hats</li>
                  <li>• Pressure to deliver quickly</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Technical Challenges</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Building scalable systems from scratch</li>
                  <li>• Maintaining code quality under pressure</li>
                  <li>• Making technology decisions that impact the future</li>
                  <li>• Balancing speed with quality</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">My Leadership Philosophy</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Over the years, I've developed a leadership philosophy that works well in startup environments:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Lead by Example</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I never ask my team to do something I wouldn't do myself. When we had a critical production issue at 2 AM, 
              I was the first one on the call, debugging alongside my team.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Empower Through Knowledge</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I believe in sharing everything I know. Every team member has access to my architectural decisions, 
              code reviews, and technical notes. Knowledge hoarding is the enemy of team growth.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Build Systems, Not Just Code</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I implemented automated CI/CD pipelines that reduced our deployment time by 90%. 
              Good processes make good teams, and good teams make great products.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Think Like an Owner</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I approach every technical decision as if the company's success depends on it - because it often does. 
              This mindset helps make better long-term decisions.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Building High-Performing Teams</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Here's how I built and managed high-performing engineering teams:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Hiring and Onboarding</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Focus on cultural fit and learning ability over specific skills</li>
                  <li>• Comprehensive onboarding process with mentorship</li>
                  <li>• Clear expectations and growth paths</li>
                  <li>• Regular feedback and performance reviews</li>
                </ul>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Team Development</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Weekly 1-on-1s for career development</li>
                  <li>• Technical mentoring and code reviews</li>
                  <li>• Cross-training to reduce knowledge silos</li>
                  <li>• Encouraging experimentation and learning</li>
                </ul>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Process and Communication</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Daily standups for alignment</li>
                  <li>• Sprint planning and retrospectives</li>
                  <li>• Clear documentation and knowledge sharing</li>
                  <li>• Open communication and feedback culture</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Technical Decision Making</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              As a technical leader, I'm responsible for making decisions that affect the entire engineering organization:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Architecture Decisions</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Microservices vs monolith</li>
                  <li>• Database technology choices</li>
                  <li>• Frontend framework selection</li>
                  <li>• Cloud infrastructure decisions</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Process Decisions</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Development workflow and tools</li>
                  <li>• Code review and quality standards</li>
                  <li>• Testing and deployment strategies</li>
                  <li>• Monitoring and alerting systems</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The Results: Team Success</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Here are the results I achieved as a technical leader:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center bg-accent/5 rounded-lg p-6">
                <div className="text-3xl font-bold text-accent mb-2">90%</div>
                <div className="text-muted-foreground">Faster deployments</div>
              </div>
              <div className="text-center bg-accent/5 rounded-lg p-6">
                <div className="text-3xl font-bold text-accent mb-2">30%</div>
                <div className="text-muted-foreground">Reduction in crash rate</div>
              </div>
              <div className="text-center bg-accent/5 rounded-lg p-6">
                <div className="text-3xl font-bold text-accent mb-2">4.8★</div>
                <div className="text-muted-foreground">Average app store rating</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Lessons Learned</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Here are the key lessons I learned about technical leadership in startups:
            </p>

            <ol className="text-muted-foreground leading-relaxed mb-6 space-y-4">
              <li><strong>1. People Come First:</strong> The best technology in the world won't save a bad team. Invest in your people.</li>
              <li><strong>2. Communication is Everything:</strong> Clear communication prevents most problems before they happen.</li>
              <li><strong>3. Process Enables Scale:</strong> Good processes allow teams to grow without losing quality.</li>
              <li><strong>4. Technical Debt Compounds:</strong> Address technical debt early, or it will slow you down later.</li>
              <li><strong>5. Lead with Empathy:</strong> Understanding your team's challenges makes you a better leader.</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The Future of Technical Leadership</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              As I look to the future, I'm excited about the next phase of my career. Whether it's leading larger engineering teams, 
              building the next unicorn startup, or mentoring the next generation of technical leaders, 
              I know that my experience in startup technical leadership has prepared me for whatever comes next.
            </p>

            <div className="bg-muted/30 rounded-lg p-8 my-12">
              <h3 className="text-xl font-semibold text-foreground mb-4">Looking for a Technical Leader?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you're looking for a technical leader who can build high-performing engineering teams and deliver results, 
                I'd love to discuss how I can help your startup succeed.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:pythonsst@gmail.com" className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors font-medium">
                  Let's Discuss Leadership
                </a>
                <Link href="/" className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium">
                  See My Experience
                </Link>
              </div>
            </div>

            {/* Article Navigation */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center gap-4">
                {/* Previous Article */}
                <Link 
                  href="/blog/startup-one-man-army-to-leader" 
                  className="flex items-center gap-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-gray-700 font-medium">Previous</span>
                </Link>

                {/* Next Article */}
                <Link 
                  href="/blog/startup-one-man-army-to-leader" 
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
