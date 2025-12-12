## Multi-App / Monorepo Usage Guide

`decode-sourcemap-cli` fully supports **monorepo environments** where multiple applications are managed in a single repository (e.g. Turborepo, pnpm workspace).

This is the **recommended setup** when you have more than one app.

<br/>

### When do you need this?

You should use a config-based setup if:

- Your repository contains **multiple apps** (e.g. `apps/vue-app-1`, `apps/react-app-1`)
- Each app has its **own build output (`dist`)**
- You want decoded source paths to correctly map to:

```
apps/{app-name}/src/...
```

<br/><br/>

### 1. Create `sourcemap.config.json`

Create a config file at the **repository root**:

```
root/
├─ apps/
│  ├─ vue-app-1/
│  ├─ react-app-1/
│  └─ vue-app-2/
├─ sourcemap.config.json
```

#### Example

```json
{
  "apps": [
    {
      "name": "vue-app-1",
      "distPath": "apps/vue-app-1/dist",
      "appPath": "apps/vue-app-1"
    },
    {
      "name": "react-app-1",
      "distPath": "apps/react-app-1/dist",
      "appPath": "apps/react-app-1"
    },
    {
      "name": "vue-app-2",
      "distPath": "apps/vue-app-2/dist",
      "appPath": "apps/vue-app-2"
    }
  ]
}
```

#### Field description

| Field | Description |
|------|-------------|
| `name` | Logical app name shown in the CLI selector |
| `distPath` | Path to the build output directory containing bundled JS & sourcemaps |
| `appPath` | Root directory of the app (used to resolve original source files) |

<br/><br/>

### 2. Run the CLI

From **any directory inside the repo**, run:

```bash
npx dsm
```

<br/><br/>

### 3. Select target app

If multiple apps are defined, the CLI will prompt you:

```
🔍 decode-sourcemap-cli
------------------------
? Select target app: react-app-1
```

Once selected, the CLI resolves paths like this:

```
📦 App: react-app-1
📁 AppRoot: /Users/gjm/sourcemap-cli-test/apps/react-app-1
📂 Dist: /Users/gjm/sourcemap-cli-test/apps/react-app-1/dist
```

<br/><br/>

### 4. Paste production error logs

Paste the exact error log from your browser console:

```
? Paste your logs (save & close): Received
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#1 Decoded Location   APP 

Hashed bundle position:
  index-DtHQv_4o.js:40:58169
```

<br/>

Decoded result:

```
Original source:
  file      src/components/ErrorTrigger.tsx
  line      6
  column    10

Open in editor:
  /Users/gjm/sourcemap-cli-test/apps/react-app-1/src/components/ErrorTrigger.tsx:6:10
```

✔️ Source paths are resolved relative to the selected app.

<br/><br/>

### How source paths are resolved

- Sourcemaps may return `src/...`, relative, or absolute paths
- The CLI does **not assume `src/`**
- `appPath` is used as the resolution base
- The correct file path is reconstructed automatically

Compatible with:

- Vue / React / Next.js / Nuxt.js
- Custom folder structures
- pnpm / Turborepo monorepos

<br/><br/>

### Optional: Skip the selector

```bash
npx dsm --app react-app-1
```

<br/><br/>

### Summary

✔ Recommended for monorepos  
✔ Correct source mapping per app  
✔ No assumptions about `src/`  
✔ Works with Turborepo & pnpm workspace  
