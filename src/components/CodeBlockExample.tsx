import React from 'react';
import CodeBlock from './CodeBlock';

// Example component showing how to use CodeBlock
export default function CodeBlockExample() {
  return (
    <div className="space-y-8">
      {/* Simple code block without title */}
      <CodeBlock 
        code={`console.log('Hello World!');`}
      />

      {/* Code block with title */}
      <CodeBlock 
        title="RESTful API Design"
        code={`// Example API endpoints
GET    /api/v1/users              // List users
GET    /api/v1/users/:id          // Get user by ID
POST   /api/v1/users              // Create new user
PUT    /api/v1/users/:id          // Update user
DELETE /api/v1/users/:id          // Delete user

// Response format
{
  "success": true,
  "data": { ... },
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 20
  }
}`}
        language="javascript"
      />

      {/* Fastlane code with syntax highlighting */}
      <CodeBlock 
        title="Fastlane Configuration"
        language="fastlane"
        code={`# Fastfile
default_platform(:ios)

platform :ios do
  desc "Build and upload to TestFlight"
  lane :beta do
    increment_build_number
    build_app(
      scheme: "MyApp",
      export_method: "ad-hoc"
    )
    upload_to_testflight
  end
end`}
      />

      {/* YAML code */}
      <CodeBlock 
        title="GitHub Actions Workflow"
        language="yaml"
        code={`name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm test`}
      />
    </div>
  );
}
