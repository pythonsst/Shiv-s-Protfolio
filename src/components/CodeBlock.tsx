import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

// Simple syntax highlighting for common languages
const highlightCode = (code: string, language: string): React.ReactNode => {
  const lines = code.split('\n');
  
  return lines.map((line, lineIndex) => {
    // Ruby/Fastlane syntax highlighting
    if (language === 'ruby' || language === 'fastlane') {
      return (
        <div key={lineIndex} className="leading-relaxed">
          {line.split(/(\s+)/).map((part, partIndex) => {
            // Keywords in purple
            if (['default_platform', 'platform', 'desc', 'lane', 'do', 'end', 'clear_derived_data', 'match', 'increment_build_number', 'build_app', 'upload_to_testflight'].includes(part.trim())) {
              return <span key={partIndex} className="text-purple-600 font-medium">{part}</span>;
            }
            // Symbols in orange
            if (part.match(/^:[a-zA-Z_][a-zA-Z0-9_]*$/)) {
              return <span key={partIndex} className="text-orange-600">{part}</span>;
            }
            // Strings in orange
            if (part.match(/^"[^"]*"$/)) {
              return <span key={partIndex} className="text-orange-600">{part}</span>;
            }
            // Comments in gray
            if (part.trim().startsWith('#')) {
              return <span key={partIndex} className="text-gray-500">{part}</span>;
            }
            // Default text
            return <span key={partIndex} className="text-gray-800">{part}</span>;
          })}
        </div>
      );
    }
    
    // JavaScript/TypeScript syntax highlighting
    if (language === 'javascript' || language === 'typescript') {
      return (
        <div key={lineIndex} className="leading-relaxed">
          {line.split(/(\s+)/).map((part, partIndex) => {
            // Keywords in purple
            if (['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'extends', 'import', 'export', 'async', 'await'].includes(part.trim())) {
              return <span key={partIndex} className="text-purple-600 font-medium">{part}</span>;
            }
            // Strings in orange
            if (part.match(/^"[^"]*"$/) || part.match(/^'[^']*'$/)) {
              return <span key={partIndex} className="text-orange-600">{part}</span>;
            }
            // Comments in gray
            if (part.trim().startsWith('//')) {
              return <span key={partIndex} className="text-gray-500">{part}</span>;
            }
            // Default text
            return <span key={partIndex} className="text-gray-800">{part}</span>;
          })}
        </div>
      );
    }
    
    // YAML syntax highlighting
    if (language === 'yaml') {
      return (
        <div key={lineIndex} className="leading-relaxed">
          {line.split(/(\s+)/).map((part, partIndex) => {
            // Keys in purple
            if (part.match(/^[A-Za-z_][A-Za-z0-9_]*:$/)) {
              return <span key={partIndex} className="text-purple-600 font-medium">{part}</span>;
            }
            // Comments in gray
            if (part.trim().startsWith('#')) {
              return <span key={partIndex} className="text-gray-500">{part}</span>;
            }
            // Default text
            return <span key={partIndex} className="text-gray-800">{part}</span>;
          })}
        </div>
      );
    }
    
    // Default - no highlighting
    return (
      <div key={lineIndex} className="leading-relaxed text-gray-800">
        {line}
      </div>
    );
  });
};

export default function CodeBlock({ 
  code, 
  language = 'javascript', 
  title,
  className = '' 
}: CodeBlockProps) {
  return (
    <div className={`bg-gray-900 rounded-lg overflow-hidden shadow-lg ${className}`}>
      {title && (
        <div className="bg-gray-800 px-4 py-3 border-b border-gray-700" style={{backgroundColor: '#374151'}}>
          <h4 className="text-sm font-semibold tracking-wide" style={{color: '#ffffff'}}>{title}</h4>
        </div>
      )}
      <div className="p-1">
        <div className="bg-gray-50 rounded-md overflow-x-auto shadow-sm border border-blue-200">
          <pre className="text-sm p-6 font-mono">
            {highlightCode(code, language)}
          </pre>
        </div>
      </div>
    </div>
  );
}
