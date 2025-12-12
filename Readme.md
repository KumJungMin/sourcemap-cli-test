### Quick Start (Recommended)

The simplest way to use decode-sourcemap-cli is via npx.
No global installation is required.


#### 1. Install the package
```
npm add -D decode-sourcemap-cli


or

pnpm add -D decode-sourcemap-cli
```
<br/>

#### 2. (Optional) Configure sourcemap.config.json

For most single-app projects, you do not need any configuration.
decode-sourcemap-cli will automatically assume ./dist as the build output directory.

However, you should create a config file if any of the following apply:
Your build output directory is not named dist

You are using a monorepo / multi-app structure
You want explicit, predictable app → dist mapping

Create a `sourcemap.config.json` file at your project root:
```
{
  "apps": [
    {
      "name": "vue-cli-test-app",
      "distPath": "./target-vite"
    }
  ]
}
```

**Explanation:**

- name
  - A logical name shown in the CLI selector.

- distPath
  - The directory that contains bundled JS files and .map files.
  - This path is resolved relative to the project root.

If only one app is defined, the CLI will auto-select it without prompting.

<br/>

#### 3. Run the CLI
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