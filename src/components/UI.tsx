import React from 'react';

interface UIProps {
  children: React.ReactNode;
  className?: string;
}

// Card Components
export function Card({ children, className = '' }: UIProps) {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}

export function InfoCard({ children, className = '' }: UIProps) {
  return (
    <div className={`bg-blue-50 border border-blue-200 rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}

export function SuccessCard({ children, className = '' }: UIProps) {
  return (
    <div className={`bg-green-50 border border-green-200 rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}

export function WarningCard({ children, className = '' }: UIProps) {
  return (
    <div className={`bg-yellow-50 border border-yellow-200 rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}

export function ErrorCard({ children, className = '' }: UIProps) {
  return (
    <div className={`bg-red-50 border border-red-200 rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}

// Grid Components
export function Grid({ children, className = '' }: UIProps) {
  return (
    <div className={`grid gap-6 ${className}`}>
      {children}
    </div>
  );
}

export function Grid2({ children, className = '' }: UIProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-6 ${className}`}>
      {children}
    </div>
  );
}

export function Grid3({ children, className = '' }: UIProps) {
  return (
    <div className={`grid md:grid-cols-3 gap-6 ${className}`}>
      {children}
    </div>
  );
}

// Container Components
export function Container({ children, className = '' }: UIProps) {
  return (
    <div className={`max-w-4xl mx-auto px-6 py-16 ${className}`}>
      {children}
    </div>
  );
}

export function Section({ children, className = '' }: UIProps) {
  return (
    <section className={`mb-12 ${className}`}>
      {children}
    </section>
  );
}

// Divider Component
export function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`border-t border-gray-200 my-8 ${className}`} />
  );
}

// Tag/Badge Component
export function Tag({ children, className = '' }: UIProps) {
  return (
    <span className={`px-3 py-1 bg-accent/10 text-accent text-sm rounded-full ${className}`}>
      {children}
    </span>
  );
}

// Highlight Box Component
export function HighlightBox({ children, className = '' }: UIProps) {
  return (
    <div className={`bg-gradient-to-r from-accent/10 to-accent-dark/10 rounded-xl p-8 my-12 ${className}`}>
      {children}
    </div>
  );
}

// Metrics Card Component
export function MetricCard({ 
  value, 
  label, 
  className = '' 
}: { 
  value: string; 
  label: string; 
  className?: string; 
}) {
  return (
    <div className={`text-center bg-accent/5 rounded-lg p-6 ${className}`}>
      <div className="text-3xl font-bold text-accent mb-2">{value}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}

// Step Component
export function Step({ 
  number, 
  children, 
  className = '' 
}: { 
  number: number; 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
        {number}
      </span>
      <span>{children}</span>
    </div>
  );
}
