### Quick Start (Recommended)

The simplest way to use decode-sourcemap-cli is via npx.
No global installation is required.


#### 1. Install the package
```
npm add -D decode-sourcemap-cli


or

pnpm add -D decode-sourcemap-cli
```

#### 2. Run the CLI
```
npx dsm
```

That’s it.
- The CLI will automatically:
  - Detect your project root
  - Find the dist directory
  - Prompt you to paste production error logs
  - Decode sourcemaps locally

- This is the recommended way for most single-app projects.