"use client";

import Navigation from "@/components/Navigation";
import { useBlogPosts } from "@/hooks/useBlogPosts";

export default function Home() {
  const { publishedPosts } = useBlogPosts();

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section - Enhanced Design */}
        <section className="max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="space-y-12">
            {/* Profile Picture */}
            <div className="flex justify-center mb-8 md:mb-12">
              <div className="relative group">
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-accent/20 to-accent-dark/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="/images/profile-photo.jpg" 
                  alt="Shiv Shankar Tiwari - Meditating by the river" 
                  className="relative w-24 h-24 md:w-36 md:h-36 rounded-full border-2 md:border-4 border-white shadow-2xl object-cover"
                />
              </div>
            </div>
            
            <h1 className="text-center leading-tight">
              <span className="text-4xl md:text-5xl font-bold gradient-text block mb-6 font-serif">
                Hello!
              </span>
              <span className="text-2xl md:text-4xl font-bold text-foreground block mb-2">
                I&apos;m Shiv Shankar Tiwari
              </span>
              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="w-6 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                <span className="text-base md:text-lg text-muted-foreground font-medium">
                  mindful engineer & startup warrior
                </span>
                <div className="w-6 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              </div>
            </h1>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-6 md:gap-8 text-muted-foreground justify-center items-center mt-8 md:mt-10">
              <a href="https://github.com/pythonsst" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300 font-medium text-sm">
                GitHub
              </a>
              
              <a href="https://x.com/Shiv3234" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300 font-medium text-sm">
                Twitter
              </a>
              
              <a href="https://www.linkedin.com/in/mobile-engineer/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300 font-medium text-sm">
                LinkedIn
              </a>
              
              <a href="https://medium.com/@pythonsst" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300 font-medium text-sm">
                Medium
              </a>
            </div>
            
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="relative bg-gradient-to-br from-white/90 to-gray-50/50 rounded-2xl p-8 border border-gray-200/50 shadow-sm backdrop-blur-sm">
                <div className="max-w-3xl mx-auto">
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    I&apos;m Shiv, and I&apos;ve been the technical backbone of multiple startups for 6+ years. 
                    From a curious kid who loved breaking things to understand how they work, 
                    I&apos;ve become the engineer startups call when they need someone who can build <em>everything</em> from scratch and make it scale.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    When you&apos;re the only developer and the product needs to ship tomorrow, you learn to move fast and break things (then fix them). 
                    I&apos;ve built apps that serve millions of users, led engineering teams, and somehow kept my sanity through meditation and good coffee.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Writing Section - All Posts */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="mb-12 md:mb-20 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              <span className="text-sm font-medium text-accent uppercase tracking-wider">Blog</span>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-6 font-serif">Writing</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Thoughts, stories, and lessons from the trenches. No fluff, just real experiences building stuff that actually works.
            </p>
          </div>
          <div className="space-y-8">
                {publishedPosts.map((post) => (
              <article key={post.id} className="group">
                <a href={`/blog/${post.slug}`} className="block bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1.5 bg-accent/10 text-accent rounded-full font-medium text-xs">
                          {post.date}
                        </span>
                        <span className="text-muted-foreground text-xs">•</span>
                        <span className="text-muted-foreground text-xs">{post.readTime}</span>
                      </div>
                      {post.category && (
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full font-medium text-xs uppercase tracking-wide">
                          {post.category}
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors cursor-pointer leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200/30">
                      <span className="inline-flex items-center gap-1.5 text-accent group-hover:text-accent-hover transition-colors font-medium text-sm">
                        Read more
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-accent text-xs">→</span>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            ))}
            </div>
        </section>

        {/* Startup Experience Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="space-y-12 md:space-y-20">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                <span className="text-sm font-medium text-accent uppercase tracking-wider">Experience</span>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              </div>
              <h2 className="text-5xl font-bold text-foreground mb-6 font-serif">Startup Journey</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                From building my first app in college to scaling products for millions of users. 
                Here&apos;s what I&apos;ve learned along the way.
              </p>
            </div>
            
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white/80 rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Solo Builder</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Built entire apps from scratch - mobile, backend, database, deployment. 
                      When you&apos;re the only dev, you learn to be resourceful. Fast.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-200/50">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">React Native</span>
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Node.js</span>
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">AWS</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Team Lead</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Led engineering teams at multiple startups. Mentored developers, 
                      set up processes, and made sure everyone stayed sane during crunch time.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-200/50">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Mentoring</span>
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Process</span>
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Scale Master</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Apps serving millions of users. 90% faster deployments, 30% fewer crashes. 
                      The numbers don&apos;t lie - good engineering shows in the results.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-200/50">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Millions</span>
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">90% Faster</span>
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">30% Less Crashes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 rounded-2xl p-8 md:p-12 text-center border border-gray-200/50 shadow-sm">
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground">Ready to work together?</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Need someone who can build your mobile app, design your backend, or own the entire stack? 
                    I&apos;ve been there, done that, and I&apos;m ready for the next challenge.
                  </p>
                </div>
                    <div className="flex flex-wrap gap-4 justify-center pt-4">
                      <a href="mailto:pythonsst@gmail.com" className="px-8 py-3 bg-foreground text-white rounded-xl font-medium hover:bg-foreground/90 transition-colors duration-300">
                        Let&apos;s Talk
                      </a>
                      <a href="/resume" className="px-8 py-3 border-2 border-gray-600 text-gray-700 rounded-xl font-medium hover:bg-gray-600 hover:text-white transition-all duration-300">
                        View Resume
                      </a>
                    </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="space-y-12 md:space-y-16">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                <span className="text-sm font-medium text-accent uppercase tracking-wider">Testimonials</span>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">What People Say</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Real feedback from real clients. No fake reviews, just honest experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex text-gray-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">5.0/5.0 • Freelancer</span>
                  </div>
                  
                  <blockquote className="text-muted-foreground leading-relaxed text-sm">
                    &ldquo;Shiv is a very knowledgeable developer and also very helpful and able to think for himself. 
                    I gave him a project to complete after my original developer was unable to complete my app after a year of messing around... 
                    Shiv fixed all bugs I knew about and more I did not even know about. My app is now running smooth and ready for the app store.&rdquo;
                  </blockquote>
                  
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-200/30">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-bold text-sm">RM</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">Robert M.</div>
                      <div className="text-xs text-muted-foreground">London, United Kingdom</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex text-gray-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">$35/hour • Freelancer</span>
                  </div>
                  
                  <blockquote className="text-muted-foreground leading-relaxed text-sm">
                    &ldquo;Shiv has done a great job at fixing my android app. My previous developer spent 2 years building an app full of bugs he could not fix.... 
                    Shiv fixed it all within a week! Thanks Shiv... We will work again.&rdquo;
                  </blockquote>
                  
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-200/30">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-bold text-sm">RM</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">Robert M.</div>
                      <div className="text-xs text-muted-foreground">London, United Kingdom</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <a 
                href="https://www.freelancer.in/u/pythonsst" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent rounded-xl font-medium hover:bg-accent/20 transition-all duration-300 text-sm"
              >
                <span>View more reviews on Freelancer</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* YouTube Video Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="space-y-8 md:space-y-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                <span className="text-sm font-medium text-accent uppercase tracking-wider">Video</span>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">My Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                A quick glimpse into my journey. No fancy editing, just real talk about building apps and solving problems.
              </p>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/wEUGULfd1do"
                  title="Shiv Shankar Tiwari - Mobile Engineer Journey"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                ></iframe>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                This is where it all started - curiosity, some coding, and a lot of trial and error. 
                Fast forward 6+ years, and I&apos;m still building stuff, just with better tools and a clearer vision.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/50 mt-16 md:mt-32">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="text-center space-y-6 md:space-y-8">
              <div className="flex justify-center">
                <img 
                  src="/logo.svg" 
                  alt="Shiv Tiwari Logo" 
                  className="w-12 h-12 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg">
                  © 2025 Shiv Shankar Tiwari
                </p>
                <p className="text-sm text-muted-foreground">
                  Built with Next.js, TypeScript, and lots of coffee
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                <a href="https://github.com/pythonsst" className="text-muted-foreground hover:text-accent transition-colors font-medium text-sm">
                  GitHub
                </a>
                
                <a href="https://x.com/Shiv3234" className="text-muted-foreground hover:text-accent transition-colors font-medium text-sm">
                  Twitter
                </a>
                
                <a href="https://www.linkedin.com/in/mobile-engineer/" className="text-muted-foreground hover:text-accent transition-colors font-medium text-sm">
                  LinkedIn
                </a>
                
                <a href="https://medium.com/@pythonsst" className="text-muted-foreground hover:text-accent transition-colors font-medium text-sm">
                  Medium
                </a>
              </div>
            </div>
          </div>
        </footer>
    </main>
    </>
  );
}
