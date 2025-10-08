"use client";

import Navigation from "@/components/Navigation";

export default function Resume() {

  return (
    <>
      <style jsx>{`
        /* World-Class Resume Design System */
        
          /* Print Optimized Styles - One Page Resume */
          @media print {
            .no-print { display: none !important; }
            .web-only { display: none !important; }
            
            * {
              -webkit-print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            
            html, body {
              background: white !important;
              margin: 0 !important;
              padding: 0 !important;
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
              font-size: 10pt !important;
              line-height: 1.3 !important;
              color: #1a202c !important;
            }
            
            main {
              background: white !important;
              margin: 0 !important;
              padding: 0 !important;
              min-height: auto !important;
            }
            
            .max-w-4xl {
              max-width: none !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            
            .resume-content {
              background: white !important;
              box-shadow: none !important;
              border: none !important;
              margin: 0 !important;
              padding: 12mm !important;
              border-radius: 0 !important;
              page-break-inside: avoid;
            }
            
            /* Compact Typography for One Page */
            h1 {
              font-size: 18pt !important;
              font-weight: 700 !important;
              color: #0f172a !important;
              margin-bottom: 3pt !important;
              letter-spacing: -0.01em !important;
            }
            
            h2 {
              font-size: 11pt !important;
              font-weight: 600 !important;
              color: #1e293b !important;
              margin-top: 6pt !important;
              margin-bottom: 3pt !important;
              border-bottom: 1pt solid #334155 !important;
              padding-bottom: 2pt !important;
            }
            
            h3 {
              font-size: 10pt !important;
              font-weight: 600 !important;
              color: #1e293b !important;
              margin-top: 4pt !important;
              margin-bottom: 2pt !important;
            }
            
            p, li, span, div {
              font-size: 9pt !important;
              color: #475569 !important;
              line-height: 1.3 !important;
            }
            
            /* Professional Color Palette */
            .text-primary { color: #0f172a !important; }
            .text-secondary { color: #1e293b !important; }
            .text-tertiary { color: #475569 !important; }
            .text-muted { color: #64748b !important; }
            .text-accent { color: #2563eb !important; }
            
            /* Compact Lists */
            ul, ol {
              margin: 2pt 0 !important;
              padding-left: 10pt !important;
            }
            
            li {
              margin-bottom: 1pt !important;
            }
            
            /* Ultra-Compact Spacing for One Page */
            .mb-12 { margin-bottom: 4pt !important; }
            .mb-8 { margin-bottom: 3pt !important; }
            .mb-6 { margin-bottom: 2pt !important; }
            .mb-4 { margin-bottom: 2pt !important; }
            .mb-3 { margin-bottom: 1pt !important; }
            .mb-2 { margin-bottom: 1pt !important; }
            
            .mt-8 { margin-top: 3pt !important; }
            .mt-6 { margin-top: 2pt !important; }
            .mt-4 { margin-top: 2pt !important; }
            .mt-2 { margin-top: 1pt !important; }
            
            .py-16 { padding-top: 3pt !important; padding-bottom: 3pt !important; }
            .py-8 { padding-top: 2pt !important; padding-bottom: 2pt !important; }
            .px-6 { padding-left: 2pt !important; padding-right: 2pt !important; }
            .p-8 { padding: 3pt !important; }
            
            /* Hide UI elements */
            button { display: none !important; }
            
            /* Grid adjustments for compact layout */
            .grid { display: block !important; }
            .grid > * { display: block !important; margin-bottom: 3pt !important; }
            .flex { display: block !important; }
            
            /* Professional borders */
            .border-b {
              border-bottom: 1pt solid #334155 !important;
              padding-bottom: 3pt !important;
              margin-bottom: 3pt !important;
            }
            
            /* Hide detailed sections in print */
            .detailed-section { display: none !important; }
            
            /* Show only essential content */
            .print-essential { display: block !important; }
          }
        
        /* Screen Styles - World-Class Design */
        @media screen {
          .resume-content {
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%) !important;
            border: 1px solid #e2e8f0 !important;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05) !important;
          }
          
          h1 {
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
          }
          
          h2 {
            color: #1e293b !important;
            position: relative !important;
          }
          
          h2::after {
            content: '' !important;
            position: absolute !important;
            bottom: -2px !important;
            left: 0 !important;
            width: 40px !important;
            height: 2px !important;
            background: linear-gradient(90deg, #2563eb 0%, #7c3aed 100%) !important;
            border-radius: 1px !important;
          }
        }
      `}</style>
      <div className="no-print">
      <Navigation />
      </div>
      <main className="pt-20 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
        <div className="max-w-5xl mx-auto px-8 py-20">
          <div className="resume-content bg-white p-12 rounded-2xl shadow-2xl border border-gray-100">
          {/* Elegant Header */}
          <div className="mb-12">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              Shiv Shankar Tiwari
            </h1>
              <p className="text-xl text-gray-600 mb-6 font-light">
                Senior Engineering Manager & Technical Architect
              </p>
              
              {/* Powerful Hook */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100 mb-8">
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  I transform startup ideas into enterprise-grade products serving millions of users. 
                  My passion ignited when I built my first mobile app at 19, and I've been scaling engineering teams and products ever since.
                </p>
              </div>
              
              {/* Clean Contact Information */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <a href="mailto:pythonsst@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  pythonsst@gmail.com
                </a>
                <a href="tel:+917007746087" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 7007746087
                </a>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Hyderabad, India
                </span>
                <a href="https://linkedin.com/in/mobile-engineer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://github.com/pythonsst" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Professional Summary
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-100">
              <p className="text-sm text-tertiary leading-relaxed mb-4">
                I caught fire coding when I was 19, and I've been building mobile and web applications that serve millions of users ever since. 
                My journey started with a simple Android app that I built to solve a problem I had, and it grew into a passion for creating products that make a real difference.
              </p>
              <p className="text-sm text-tertiary leading-relaxed mb-4">
                Today, I lead engineering teams at fast-growing startups, specializing in React Native, Flutter, and Node.js. 
                I've architected systems that process $100M+ in transactions, reduced deployment times by 90%, and built teams that consistently deliver high-quality products.
              </p>
              <p className="text-sm text-tertiary leading-relaxed">
                When I'm not coding, you'll find me mentoring developers, contributing to open-source projects, or exploring the latest in mobile development. 
                I believe great engineering is about solving real problems with elegant solutions, and I'm always excited to connect with others who share that passion.
              </p>
            </div>
          </section>

          {/* Print-Only: Condensed Summary */}
          <div className="print-essential" style={{display: 'none'}}>
            <div className="mb-4">
              <h2 className="text-lg font-bold text-secondary mb-2 border-b border-gray-300 pb-1">
                Core Competencies
              </h2>
              <p className="text-sm text-muted mb-2">
                <strong>Technical Leadership:</strong> Drove 200% revenue growth at world's largest Bitcoin ATM network (8,000+ ATMs, 15,000+ locations) • Architected systems serving 5M+ users • Optimized 4.4/5 rated mobile app reducing memory by 35% • Led teams of 8+ engineers
              </p>
              <p className="text-sm text-muted">
                <strong>Technologies:</strong> React Native, Flutter, Node.js, NestJS, Web3, Google Maps API, Simplex, BDCheckout™, 120+ Crypto Wallets, Go, Python, Java, C++, .NET, AWS, Docker, CI/CD
              </p>
            </div>
          </div>

          {/* Strategic Impact & Achievements */}
          <section className="mb-8 detailed-section">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Strategic Impact & Achievements
            </h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                  Scale & Performance Excellence
                </h3>
                <ul className="text-gray-700 space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-gray-400 font-bold mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-gray-900">Drove 200% revenue growth</strong> at world's largest Bitcoin ATM network (8,000+ ATMs across US/Canada, 15,000+ total locations)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 font-bold mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-gray-900">Optimized 4.4/5 rated mobile app</strong> reducing memory usage by 35% and battery consumption by 40%
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 font-bold mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-gray-900">Architected enterprise systems</strong> serving 5M+ active users with 99.9% uptime
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 font-bold mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-gray-900">Implemented advanced monitoring</strong> reducing crash rates by 45% across mobile applications
                    </div>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                  Leadership & Team Excellence
                </h3>
                <ul className="text-gray-700 space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-gray-400 font-bold mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-gray-900">Led high-performing teams</strong> of 8+ senior engineers across multiple time zones
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 font-bold mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-gray-900">Mentored 25+ developers</strong> advancing their careers in mobile development
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 font-bold mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-gray-900">Established engineering standards</strong> saving 40% development time
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 font-bold mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-gray-900">Sprint-focused development approach</strong> delivering projects with speed and precision, reflecting competitive athletic background
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 font-bold mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-gray-900">Implemented DevOps transformation</strong> across multiple product lines
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Print-Only: Condensed Experience */}
          <div className="print-essential" style={{display: 'none'}}>
            <div className="mb-4">
              <h2 className="text-lg font-bold text-secondary mb-2 border-b border-gray-300 pb-1">
              Professional Experience
              </h2>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">Deputy Manager – Mobile Engineering</h3>
                      <p className="text-xs text-gray-600">Validus Fintech Services Pvt Ltd</p>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">07/2024 - Present</span>
                  </div>
                  <p className="text-xs text-muted">Leading enterprise FinTech mobile development • Architected CI/CD pipelines reducing deployment by 90% • Implemented security protocols ensuring SOC2 compliance</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">Senior Mobile App Engineer</h3>
                      <p className="text-xs text-gray-600">Bitcoin Depot, Atlanta, USA</p>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">07/2022 - 05/2024</span>
                  </div>
                  <p className="text-xs text-muted">Led full-stack development for world's largest Bitcoin ATM network (8,400+ ATMs) driving 200% revenue growth • Implemented BDCheckout™ & Simplex integration processing $100M+ • Optimized 4.4/5 rated app reducing memory by 35%</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">Full Stack Engineer</h3>
                      <p className="text-xs text-gray-600">Affinidi, Bangalore, India</p>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">07/2021 - 05/2022</span>
                  </div>
                  <p className="text-xs text-muted">Developed decentralized identity solutions • Engineered digital wallets serving 100K+ users • Designed GraphQL APIs reducing response times by 50%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Leadership Experience */}
          <section className="mb-8 detailed-section">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Executive Leadership Experience
            </h2>
            <div className="space-y-6">
              {/* Current Role */}
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500 hover:shadow-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">Deputy Manager – Mobile Engineering</h3>
                    <div>
                      <a href="https://validusfintech.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors">
                        Validus Fintech Services Pvt Ltd
                      </a>
                      <p className="text-xs text-gray-500 mt-1">Enterprise FinTech Solutions</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 font-semibold bg-gray-200 px-3 py-1 rounded-full">07/2024 - Present</span>
                </div>
                <p className="text-sm text-gray-800 mb-4 font-medium leading-relaxed">Leading enterprise FinTech mobile application development with focus on security, scalability, and regulatory compliance for multi-million dollar portfolio.</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span><strong className="text-gray-900">Architected next-generation CI/CD pipelines</strong> reducing deployment time by 90% and enabling zero-downtime releases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span><strong className="text-gray-900">Implemented enterprise-grade security protocols</strong> and Clean Architecture patterns ensuring SOC2 compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span><strong className="text-gray-900">Optimized application performance</strong> reducing bundle size by 30% and improving user experience metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span><strong className="text-gray-900">Established engineering best practices</strong> and mentored team of 6+ senior mobile engineers</span>
                  </li>
                </ul>
              </div>

              {/* Bitcoin Depot */}
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-yellow-500 hover:shadow-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">Senior Mobile App Engineer</h3>
                    <div>
                      <a href="https://bitcoindepot.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors">
                        Bitcoin Depot, Atlanta, USA
                      </a>
                      <p className="text-xs text-gray-500 mt-1">World's Largest Bitcoin ATM Network</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 font-semibold bg-gray-200 px-3 py-1 rounded-full">07/2022 - 05/2024</span>
                </div>
                <p className="text-sm text-gray-800 mb-4 font-medium leading-relaxed">Led full-stack development for world's largest Bitcoin ATM network (8,400+ ATMs across North America), driving 200% revenue growth through innovative mobile and backend solutions.</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-2">•</span>
                    <span><strong className="text-gray-900">Architected BDCheckout™ integration</strong> enabling cash-to-crypto transactions at 8,400+ retail locations, processing $100M+ in transactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-2">•</span>
                    <span><strong className="text-gray-900">Implemented Simplex payment gateway</strong> for credit/debit card crypto purchases, expanding user accessibility across North America</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-2">•</span>
                    <span><strong className="text-gray-900">Optimized Google Maps & ATM locator</strong> reducing memory usage by 35% and battery consumption by 40% for 4.4/5 rated app</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-2">•</span>
                    <span><strong className="text-gray-900">Built NestJS backend services</strong> with Web3 integration supporting 120+ cryptocurrency wallets and real-time transaction processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-2">•</span>
                    <span><strong className="text-gray-900">Enhanced mobile app security</strong> implementing ultra-secure PIN-based wallet system and reducing crash rates by 45%</span>
                  </li>
                </ul>
              </div>

              {/* Affinidi */}
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-500 hover:shadow-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">Full Stack Engineer</h3>
                    <div>
                      <a href="https://www.affinidi.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors">
                        Affinidi, Bangalore, India
                      </a>
                      <p className="text-xs text-gray-500 mt-1">Enterprise Identity Solutions</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 font-semibold bg-gray-200 px-3 py-1 rounded-full">07/2021 - 05/2022</span>
                </div>
                <p className="text-sm text-gray-800 mb-4 font-medium leading-relaxed">Developed enterprise-grade decentralized identity solutions and secure digital wallet applications leveraging Blockchain and Web3 technologies for global enterprise clients and consumer markets.</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span><strong className="text-gray-900">Architected Affinidi Vault mobile application</strong> - Secure digital wallet with end-to-end encryption, passwordless sign-ins, and consent-based credential sharing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span><strong className="text-gray-900">Implemented dual storage architecture</strong> supporting both decentralized local storage and cloud storage with selective credential sharing capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span><strong className="text-gray-900">Built verifiable credentials system</strong> enabling direct credential claiming from issuers and organized file management with profile-based access control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span><strong className="text-gray-900">Designed high-performance GraphQL APIs</strong> reducing response times by 50% and supporting 10K+ concurrent requests for credential verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span><strong className="text-gray-900">Implemented vault backup & restore functionality</strong> with secure cloud synchronization and comprehensive consent history tracking</span>
                  </li>
                </ul>
              </div>

              {/* Contract Work */}
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-purple-500">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">Senior Software Engineer (Contract)</h3>
                    <div>
                      <a href="https://www.zibtek.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors">
                        Zibtek & Various Clients, Bangalore, India
                      </a>
                      <p className="text-xs text-gray-500 mt-1">Full-Stack Development Solutions</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 font-semibold bg-gray-200 px-3 py-1 rounded-full">06/2019 - 07/2021</span>
                </div>
                <p className="text-sm text-gray-800 mb-4 font-medium leading-relaxed">Delivered comprehensive full-stack solutions for Fortune 500 companies including ICICI Bank, SBI, and various government projects. Architected scalable backend systems, RESTful APIs, and cross-platform mobile applications for both iOS and Android platforms achieving significant market impact.</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">•</span>
                    <span><strong className="text-gray-900">FingerTip Educational Platform:</strong> Full-stack development with Node.js backend, REST APIs, and React Native mobile app driving 30% engagement increase and 50K+ student adoption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">•</span>
                    <span><strong className="text-gray-900">Multipie Trading Platform:</strong> Architected backend systems with real-time data processing, trading APIs, and Flutter mobile app achieving 400% user growth and $10M+ trading volume</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">•</span>
                    <span><strong className="text-gray-900">Zibtek Software Solutions:</strong> Delivered custom software development solutions for Fortune 500 companies including ICICI Bank, SBI, and government projects. Built full-stack applications using React.js, Node.js, Python, Django, and mobile development frameworks including React Native, Flutter, and iOS/Android native development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">•</span>
                    <span><strong className="text-gray-900">Led technical strategy</strong> and architecture decisions for cross-platform mobile development initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Print-Only: Condensed Education */}
          <div className="print-essential" style={{display: 'none'}}>
            <div className="mb-4">
              <h2 className="text-lg font-bold text-secondary mb-2 border-b border-gray-300 pb-1">
                Education & Certifications
              </h2>
              <p className="text-sm text-muted">
                <strong>B.Tech Computer Science</strong> - Rajkiya Engineering College Sonbhadra (2015-2019) • 
                <strong>Certifications:</strong> React Native Advanced, System Design, AWS Cloud Practitioner, Android Development
              </p>
            </div>
          </div>

          {/* Technical Architecture & Expertise */}
          <section className="mb-8 detailed-section">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Technical Architecture & Expertise
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">Mobile & Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">React Native</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Flutter</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">React.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Android</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">iOS</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Swift</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Kotlin</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Expo</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Fastlane</span>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">Backend & APIs</h3>
                  <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Nest.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Go</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Python</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Java</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">C++</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">.NET</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">GraphQL</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">PostgreSQL</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">MongoDB</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Redis</span>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">DevOps & Cloud</h3>
                  <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">AWS</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Docker</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">GitHub Actions</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">CI/CD</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Fastlane</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Jest</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Cypress</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Git</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Kubernetes</span>
                </div>
              </div>
            </div>
          </section>

          {/* Signature Projects & Innovations */}
          <section className="mb-8 detailed-section">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Signature Projects & Innovations
            </h2>
            <div className="space-y-6">
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900 text-lg">Bitcoin Depot - World's Largest Bitcoin ATM Network</h3>
                  <div className="flex gap-2 ml-4">
                    <a href="https://bitcoindepot.com/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full hover:bg-blue-700 transition-colors">
                      Company Website
                    </a>
                  </div>
                </div>
                <p className="text-gray-700 mb-3 leading-relaxed">Led full-stack development for world's largest Bitcoin ATM network with 8,000+ ATMs across US/Canada, 7,700+ BDCheckout™ retail locations, and 15,000+ total locations. Built cross-platform mobile applications for both iOS and Android, implemented BDCheckout™ checkout counter funding and Simplex online purchasing, driving 200% revenue growth</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">React Native</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">NestJS</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Web3</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Simplex</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">BDCheckout™</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Google Maps API</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">120+ Crypto Wallets</span>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900 text-lg">Affinidi Vault - Secure Digital Wallet</h3>
                  <div className="flex gap-2 ml-4">
                    <a href="https://www.affinidi.com/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full hover:bg-blue-700 transition-colors">
                      Company Website
                    </a>
                  </div>
                </div>
                <p className="text-gray-700 mb-3 leading-relaxed">Developed enterprise-grade decentralized identity wallet with end-to-end encryption, passwordless sign-ins, consent-based credential sharing, and dual storage architecture supporting multiple profiles. Built cross-platform mobile applications for both iOS and Android platforms</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">React Native</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Web3</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Blockchain</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Verifiable Credentials</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">End-to-End Encryption</span>
                </div>
              </div>
              
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900 text-lg">Multipie - Investment Insights Platform</h3>
                  <div className="flex gap-2 ml-4">
                    <a href="https://www.multipie.co/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full hover:bg-blue-700 transition-colors">
                      Company Website
                    </a>
              </div>
            </div>
                <p className="text-gray-700 mb-4 leading-relaxed">Built comprehensive Flutter-based investment platform with advanced features for stock market analysis and community-driven insights. Developed with focus on performance, user experience, and real-time data processing.</p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features Developed:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>Interact:</strong> Share insights with Stock Market Community</li>
                    <li><strong>Ideate:</strong> Track Portfolio with 360-degree stock analysis</li>
                    <li><strong>Invest:</strong> Check prominent investors' portfolios for better decisions</li>
                    <li><strong>Calculator:</strong> Advanced investment calculation tools</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Flutter</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Dart</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Real-time Analytics</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Portfolio Tracking</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Community Features</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Investment Calculator</span>
                </div>
              </div>
              
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900 text-lg">Open Source Contributions</h3>
                  <div className="flex gap-2 ml-4">
                    <a href="https://github.com/facebook/react-native" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-gray-600 text-white text-xs rounded-full hover:bg-gray-700 transition-colors">
                      React Native
                    </a>
                    <a href="https://github.com/facebook/react" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-gray-600 text-white text-xs rounded-full hover:bg-gray-700 transition-colors">
                      React Core
                    </a>
                </div>
                </div>
                <p className="text-gray-700 mb-3 leading-relaxed">Active contributor to React Native ecosystem including Hermes engine optimizations and performance improvements</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">React Native</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Hermes</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">React Core</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Performance</span>
                </div>
              </div>
            </div>
          </section>

          {/* Academic Excellence & Professional Certifications */}
          <section className="mb-8 detailed-section">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Academic Excellence & Professional Certifications
            </h2>
            
            {/* Education */}
            <div className="border border-gray-200 rounded-lg p-6 mb-6 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bachelor of Technology in Computer Science and Engineering</h3>
              <p className="text-sm text-gray-700 mb-1">Rajkiya Engineering College Sonbhadra • 2015 - 2019</p>
              <p className="text-sm text-gray-600 mb-3">Specialization in Software Engineering, Algorithms, and System Design</p>
              <div className="border-t border-gray-200 pt-3">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Athletic Achievements</h4>
                <p className="text-sm text-gray-700">Sprint Runner & Sports Champion • Represented college in multiple athletic competitions • Demonstrated speed, agility, and competitive excellence in track and field events</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              <div className="flex items-center gap-4 text-xs">
                <span className="font-medium text-gray-900">React Native Advanced</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500">Udemy</span>
                <span className="text-gray-400">•</span>
                <span className="font-medium text-gray-900">System Design</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500">ByteByteGo</span>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="font-medium text-gray-900">AWS Cloud Practitioner</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500">Amazon</span>
                <span className="text-gray-400">•</span>
                <span className="font-medium text-gray-900">Android Development</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500">Microsoft</span>
              </div>
            </div>
          </section>


          </div>
        </div>
      </main>
    </>
  );
}

