# Blog / Notes Split Design

Date: 2026-04-09

## Goal

Keep the existing Hexo site at `qianshu.wang` as the long-form blog, and repurpose the current Astro/Vercel site as a separate `notes` site for lightweight sharing.

## Decisions

1. `qianshu.wang` remains unchanged in style and content model.
2. The current Astro site becomes `notes`, not the primary blog.
3. Existing Astro `posts` content will be archived inside the repository before cleanup.
4. The first imported note will be `cc-switch.md`.
5. The blog and notes sites must link to each other in top-level navigation.

## Content Model

### Blog

- Domain: `qianshu.wang`
- Stack: Hexo
- Content: long-form technical articles, structured essays, deeper reflections

### Notes

- Domain: current Astro/Vercel site, later positioned as `notes`
- Stack: Astro
- Content: short-form sharing, tool picks, links, observations, lightweight writeups

## Archive Strategy

Current Astro posts under `src/pages/posts` are not deleted permanently first.

They will be moved into a repository archive directory so that:

- the current notes site becomes clean immediately
- previous migrated content stays recoverable
- future manual migration back into blog remains possible

Recommended archive location:

- `docs/archive/posts-2026-04-09/`

## Initial Notes Scope

For the first pass:

1. archive all existing Astro posts
2. keep the current site shell and styling foundation
3. import `F:\我的笔记本\Obsidian\Blog\公众号文章\草稿\【7】cc-switch\cc-switch.md`
4. adapt the imported content into notes-style metadata and layout

## Navigation

Both sites should expose a clear cross-link:

- Blog site links to Notes
- Notes site links to Blog

For the Astro notes site, top navigation should include a direct `Blog` link to `https://www.qianshu.wang/`.

## Risks

1. Existing Astro templates may still use blog-like wording and need copy cleanup.
2. Imported note frontmatter may need normalization before rendering cleanly.
3. Some image paths in imported notes may depend on external hosting and need validation.

## Implementation Order

1. Archive current Astro posts
2. Update notes site copy and navigation
3. Import `cc-switch.md`
4. Build and verify locally
5. Push and let Vercel redeploy
