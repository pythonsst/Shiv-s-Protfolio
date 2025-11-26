// src/components/Typography.tsx
import React from "react";

interface Props { children: React.ReactNode; className?: string; }

export function H1({ children, className = "" }: Props) {
  return <h1 className={`name ${className}`}>{children}</h1>;
}

export function H2({ children, className = "" }: Props) {
  return <h2 className={`section-title ${className}`}>{children}</h2>;
}

export function H3({ children, className = "" }: Props) {
  return <h3 style={{ fontSize: "var(--size-title)", fontWeight: 700, margin: "8px 0" }} className={className}>
    {children}
  </h3>;
}

export function Paragraph({ children, className = "" }: Props) {
  return <p style={{ fontSize: "var(--size-body)", color: "var(--body)", lineHeight: 1.45 }} className={className}>{children}</p>;
}

export function LeadParagraph({ children, className = "" }: Props) {
  return <p style={{ fontSize: "15px", color: "var(--body)", lineHeight: 1.5, marginBottom: 12 }} className={className}>{children}</p>;
}

export function UnorderedList({ children, className = "" }: Props) {
  return <ul style={{ margin: 0, paddingLeft: 18, fontSize: "var(--size-body)" }} className={className}>{children}</ul>;
}

export function ListItem({ children, className = "" }: Props) {
  return (
    <li style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }} className={className}>
      <span style={{ color: "var(--muted)", marginTop: 3 }}>•</span>
      <span>{children}</span>
    </li>
  );
}
