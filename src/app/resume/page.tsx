"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function Resume() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Shiv Shankar Tiwari
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Full-Stack Software Engineer & Startup Warrior
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>📧 pythonsst@gmail.com</span>
              <span>📱 +91 7007746087</span>
              <span>📍 Hyderabad, India</span>
              <a href="https://www.linkedin.com/in/mobile-engineer/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/pythonsst" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
              Professional Summary
            </h2>
            <div className="bg-white/80 rounded-2xl p-6 border border-gray-200/50 shadow-sm">
              <p className="text-muted-foreground leading-relaxed">
                I'm Shiv, a Full-Stack Software Engineer with 6+ years of experience building high-performance applications across mobile, web, and backend systems. 
                I've been the technical backbone of multiple startups, scaling from solo developer to engineering leader. 
                From building apps that serve millions of users to leading engineering teams, I specialize in React Native, Flutter, Node.js, TypeScript, and AWS cloud technologies.
              </p>
            </div>
          </section>

          {/* Key Achievements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
              Key Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-3">🚀 Scale & Performance</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Built apps serving millions of users</li>
                  <li>• Reduced deployment time by 90%</li>
                  <li>• Decreased crash rates by 30%</li>
                  <li>• Maintained 4.5+ app store ratings</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-3">👥 Leadership & Impact</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Led engineering teams at multiple startups</li>
                  <li>• Mentored developers in React Native & Android</li>
                  <li>• Built reusable components reducing redundancy</li>
                  <li>• Automated CI/CD workflows with Fastlane</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {/* Current Role */}
              <div className="bg-white/80 rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Deputy Manager – Mobile Engineering</h3>
                    <p className="text-accent font-medium">Validus Fintech Services Pvt Ltd</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">07/2024 - Present</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Leading the development of high-performance FinTech mobile applications, ensuring seamless UX, industry compliance, and top-tier security.
                </p>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Automated CI/CD workflows using Fastlane, reducing deployment time by 90%</li>
                  <li>• Implemented anti-reverse engineering techniques and end-to-end API encryption</li>
                  <li>• Revamped legacy codebase enforcing Clean Architecture, improving performance</li>
                  <li>• Reduced app size by 30% through optimization</li>
                  <li>• Built reusable open-source components, cutting redundancy and accelerating timelines</li>
                </ul>
              </div>

              {/* Bitcoin Depot */}
              <div className="bg-white/80 rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Senior Mobile App Engineer</h3>
                    <p className="text-accent font-medium">Bitcoin Depot, Atlanta, USA</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">07/2022 - 05/2024</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Led the development of Android & iOS applications for a leading Bitcoin ATM provider, ensuring secure transactions and enhanced functionality.
                </p>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Designed and optimized features like BDCCheckout funding & Bitcoin ATM locator</li>
                  <li>• Enhanced app reliability through comprehensive unit testing and debugging</li>
                  <li>• Refactored legacy codebase converting class components to functional components</li>
                  <li>• Resolved compatibility issues from React Native version upgrades</li>
                  <li>• Improved maintainability and performance across mobile platforms</li>
                </ul>
              </div>

              {/* Affinidi */}
              <div className="bg-white/80 rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Full Stack Engineer</h3>
                    <p className="text-accent font-medium">Affinidi, Bangalore, India</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">07/2021 - 05/2022</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Developed decentralized identity solutions leveraging Blockchain & Web 3.0, ensuring secure digital transactions and identity verification.
                </p>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Built and deployed secure digital wallets (YourEdge Wallet, Asli Wallet)</li>
                  <li>• Designed and implemented GraphQL APIs reducing backend response times by 50%</li>
                  <li>• Utilized AWS cloud services for high availability, security, and scalability</li>
                  <li>• Ensured compliance with Web3 standards for privacy-focused transactions</li>
                </ul>
              </div>

              {/* Contract Work */}
              <div className="bg-white/80 rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Mobile App Engineer (Contract)</h3>
                    <p className="text-accent font-medium">Various Clients, Bangalore, India</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">06/2019 - 07/2021</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Designed, developed, and deployed high-performance mobile applications for global clients and startups across education, social trading, and service delivery.
                </p>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• <strong>FingerTip:</strong> Interactive educational platform boosting student engagement by 30%</li>
                  <li>• <strong>Multipie:</strong> Cross-platform social trading app scaling user base by 400%</li>
                  <li>• <strong>Paniwala:</strong> On-demand water delivery platform optimizing order fulfillment</li>
                  <li>• Developed both Native Android and Flutter applications</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/80 rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-4">📱 Mobile Development</h3>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">React Native</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Flutter</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Android</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">iOS</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Swift</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Kotlin</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Java</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-4">🌐 Web & Backend</h3>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">React</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Node.js</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">TypeScript</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Express.js</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">GraphQL</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">REST APIs</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-4">☁️ Cloud & DevOps</h3>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">AWS</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Docker</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">CI/CD</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Fastlane</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">GitHub Actions</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Firebase</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education & Certifications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
              Education & Certifications
            </h2>
            <div className="space-y-6">
              <div className="bg-white/80 rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">B.Tech in Computer Science and Engineering</h3>
                    <p className="text-accent font-medium">Rajkiya Engineering College Sonbhadra</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-1 md:mt-0">2015 - 2019</span>
                </div>
                <p className="text-sm text-muted-foreground">Sonbhadra, India</p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Microsoft Certified Android App Development Training</h3>
                    <p className="text-accent font-medium">Microsoft Certification</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-1 md:mt-0">Completed</span>
                </div>
                <p className="text-sm text-muted-foreground">Professional Android development certification</p>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
              Languages
            </h2>
            <div className="bg-white/80 rounded-2xl p-6 border border-gray-200/50 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Hindi</h3>
                  <p className="text-muted-foreground text-sm">Native</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">English</h3>
                  <p className="text-muted-foreground text-sm">Proficient</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interests */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
              Interests
            </h2>
            <div className="bg-white/80 rounded-2xl p-6 border border-gray-200/50 shadow-sm">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🏆</div>
                  <h3 className="font-semibold text-foreground mb-1">Tech Enthusiast</h3>
                  <p className="text-sm text-muted-foreground">Love building innovative mobile apps & exploring AI</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="font-semibold text-foreground mb-1">Problem-Solver</h3>
                  <p className="text-sm text-muted-foreground">Enjoy coding contests, hackathons, and logical puzzles</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🚴‍♂️</div>
                  <h3 className="font-semibold text-foreground mb-1">Active Lifestyle</h3>
                  <p className="text-sm text-muted-foreground">Running, fitness, and adventure biking</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-accent/10 to-accent-dark/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Work Together?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and build amazing products. 
                Whether you need a mobile app, web application, or full-stack solution, let's create something great together.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="mailto:pythonsst@gmail.com" 
                  className="px-8 py-3 bg-accent text-white rounded-xl font-medium hover:bg-accent-hover transition-colors"
                >
                  Get in Touch
                </a>
                <Link 
                  href="/" 
                  className="px-8 py-3 border border-accent text-accent rounded-xl font-medium hover:bg-accent hover:text-white transition-all"
                >
                  View My Work
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
