'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center justify-center group"
            title="Home"
          >
            <div className="relative">
              <img 
                src="/logo.svg" 
                alt="Shiv Tiwari Logo - Click to go home" 
                className="w-10 h-10 group-hover:scale-110 transition-transform duration-200"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </div>
          </Link>

              {/* Desktop Navigation - Enhanced Clickable Style */}
              <div className="hidden md:flex items-center space-x-8">

                <Link
                  href="/resume"
                  className="text-muted-foreground hover:text-accent transition-colors font-medium px-3 py-2 rounded-md hover:bg-accent/5 relative group"
                >
                  Resume
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-accent transition-colors font-medium px-3 py-2 rounded-md hover:bg-accent/5 relative group"
                >
                  Writing
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
                </Link>
                
              </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Writing
              </Link>
              <Link
                href="/resume"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}