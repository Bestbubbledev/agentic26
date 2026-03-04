# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Agentic26 — AI automation subscription landing page for SMBs. Single-page marketing site with one API route for Retell web calls.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint (uses next/core-web-vitals + typescript)
- No test framework configured

## Architecture

Next.js 16 App Router with a single route (`app/page.tsx`) that composes 11 section components in order: Navbar, Hero, TrustLogos, WhatWeDo, HowItWorks, Examples, Pricing, Contact, FAQ, Footer, ChatWidget.

Components using React state or browser APIs have `"use client"` directive. Server components are used where possible (WhatWeDo, Examples, HowItWorks, TrustLogos, Footer).

**Chat system**: Two independent chat UIs exist — Hero has an embedded demo with hardcoded quick-reply responses, ChatWidget is a floating overlay triggered from Contact section via DOM MutationObserver on a hidden element's class.

**Navigation**: Smooth scroll via `element.scrollIntoView()` with `preventDefault` on anchor clicks. Navbar is fixed with backdrop blur.

## Integrations

- **Retell AI (Voice Agent)**: Voice Agent card in Contact.tsx links to inbound phone number +1 (912) 289-8859 via `tel:` link. Retell handles voice (STT/TTS/telephony) with a Single-Prompt Agent.
- **Retell AI (Web Call)**: Interactive Demo card in Contact.tsx opens a floating voice call widget (`components/VoiceCallModal.tsx`) using `retell-client-js-sdk` for browser-based WebRTC voice calls. API route `app/api/retell/route.ts` creates web call sessions server-side. Agent ID: `agent_0acd42c905f89c5b07945b3538`. Requires `RETELL_API_KEY` in `.env.local`.

## Styling

- Tailwind CSS 4 via `@tailwindcss/postcss`
- Dark theme: `bg-neutral-950` base, neutral/violet/emerald/amber accent palette
- Icons: `@iconify/react` with `solar:` icon set
- Path alias: `@/*` maps to project root
