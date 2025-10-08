import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

// Heading Components
export function H1({ children, className = '' }: TypographyProps) {
  return (
    <h1 className={`text-4xl md:text-5xl font-bold text-foreground mb-6 ${className}`}>
      {children}
    </h1>
  );
}

export function H2({ children, className = '' }: TypographyProps) {
  return (
    <h2 className={`text-2xl font-bold text-foreground mt-12 mb-6 ${className}`}>
      {children}
    </h2>
  );
}

export function H3({ children, className = '' }: TypographyProps) {
  return (
    <h3 className={`text-xl font-semibold text-foreground mt-8 mb-4 ${className}`}>
      {children}
    </h3>
  );
}

export function H4({ children, className = '' }: TypographyProps) {
  return (
    <h4 className={`text-lg font-semibold text-foreground mt-6 mb-3 ${className}`}>
      {children}
    </h4>
  );
}

// Paragraph Components
export function Paragraph({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-muted-foreground leading-relaxed mb-6 ${className}`}>
      {children}
    </p>
  );
}

export function LeadParagraph({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-lg text-muted-foreground leading-relaxed mb-8 ${className}`}>
      {children}
    </p>
  );
}

// List Components
export function UnorderedList({ children, className = '' }: TypographyProps) {
  return (
    <ul className={`space-y-3 text-muted-foreground mb-6 ${className}`}>
      {children}
    </ul>
  );
}

export function OrderedList({ children, className = '' }: TypographyProps) {
  return (
    <ol className={`space-y-4 text-muted-foreground mb-8 ${className}`}>
      {children}
    </ol>
  );
}

export function ListItem({ children, className = '' }: TypographyProps) {
  return (
    <li className={`flex items-start gap-3 ${className}`}>
      <span className="text-accent font-bold flex-shrink-0 mt-0.5">•</span>
      <span>{children}</span>
    </li>
  );
}

// Quote Component
export function Blockquote({ children, className = '' }: TypographyProps) {
  return (
    <blockquote className={`border-l-4 border-accent pl-6 py-4 bg-muted/30 rounded-r-lg my-8 ${className}`}>
      <p className="text-muted-foreground italic">
        {children}
      </p>
    </blockquote>
  );
}

// Strong/Emphasis Components
export function Strong({ children, className = '' }: TypographyProps) {
  return (
    <strong className={`font-semibold text-foreground ${className}`}>
      {children}
    </strong>
  );
}

export function Emphasis({ children, className = '' }: TypographyProps) {
  return (
    <em className={`italic text-muted-foreground ${className}`}>
      {children}
    </em>
  );
}
