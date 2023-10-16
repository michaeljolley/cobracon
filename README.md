<p style="text-align:center">
<img alt="Cobra logo" src="public/images/cobra-android-chrome-192x192.png">
</p>

# CobraCon 2023

Welcome to the CobraCon project. A registration app that lets visitors join GI Joe or Cobra and create a shareable badge with their profile image overlaid on the GI Joe/Cobra character of their choice.

It's basically a SPA with Astro as the "backend/host". It uses the following tech:

| Tech       | Use                                                                            |
| ---------- | ------------------------------------------------------------------------------ |
| Astro      | Serves up static & SSR pages/endpoints                                         |
| Preact     | Handles the interactivity of the page                                          |
| Clerk      | Handles auth with GitHub & Twitter and stores user metadata                    |
| Cloudinary | Hosts images for GI Joe characters & transforms them using user profile images |
| Supabase   | Stores data related to GI Joe characters                                       |

## 🚀 Project Structure

Inside the CobraCon project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── components/
│       └── [Preact components & css]
│   └── pages/
│       └── badge.astro
│       └── getBadgeUrl.ts
│       └── index.astro
│       └── setMetadata.ts
│   └── stores/
│       └── [Nanostore stores]
│   └── styles/
│       └── main.css
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `pnpm install`     | Installs dependencies                        |
| `pnpm run dev`     | Starts local dev server at `localhost:4321`  |
| `pnpm run build`   | Build your production site to `./dist/`      |
| `pnpm run preview` | Preview your build locally, before deploying |
| `pnpm run format`  | Use Prettier to format files                 |

## 👀 Want to learn more?

Hit me up on [Twitter](https://twitter.com/michaeljolley).
