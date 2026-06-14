# Development

GitHub Repo: `https://github.com/TerraByte-Dev/terrabyte-page`  _(create on the first build session)_

## Tools
- GitHub MCP — repo, branches, PRs
- Vercel MCP — project, deploy, domain attach
- Cloudflare MCP — DNS for `terrabyte.page` (ensure re-auth is on the **TerraByte Solutions** account
  that owns the zone, not the zero-zone account — see `Administration/SETUP.md`)

## Stack
Recommended: **Astro + Vercel**, mirroring `../../TerraSite/02-development` (same toolchain, same
deploy story, easy to copy the mint design system). _Confirm before scaffolding._

## Theme
Match the `terrabytesolutions.com` **mint system** — pull the exact color tokens, fonts, and the
TERRABYTE.SYS aesthetic from `../../TerraSite/02-development`. _Fill in specifics once copied._

## Deploy / DNS
- Host on **Vercel**; add `terrabyte.page` as a domain in the Vercel project.
- `terrabyte.page` registrar + DNS = **Cloudflare** (same account/zone owner as terrabytesolutions.com).
- Point the apex at Vercel per Vercel's domain instructions; decide on `www` (the main site 308s
  www → apex — mirror that if desired). Proxy through Cloudflare like the main site.
- Verify: HTTPS valid, apex resolves, redirects clean.
