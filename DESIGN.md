---
version: alpha
name: Joblog
description: A job application tracker. Calm, clean and techy. Modern and tidy.
colors:
  primary: "#247D99"
  primary-hover: "#0D6C87"
  primary-soft: "#DFF0F7"
  on-primary: "#FFFFFF"
  background: "#FCFEFE"
  surface: "#FEFFFF"
  sunken: "#F4F6F7"
  border: "#D2DBDE"
  border-strong: "#B7C1C6"
  text: "#060F12"
  text-2: "#373F42"
  text-3: "#687074"
  success: "#187C49"
  danger: "#AF3D36"
  info: "#337288"
typography:
  display:
    fontFamily: Sora
    fontSize: 56px
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: -0.03em
  h1:
    fontFamily: Sora
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  h2:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.15
  h3:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  meta:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
rounded:
  tag: 4px
  input: 8px
  card: 16px
  pill: 999px
spacing:
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  6: 24px
  8: 32px
  12: 48px
  16: 64px
---

# Design System: Joblog

## 1. Visual Theme & Atmosphere

A calm, daily-app interface for someone in the middle of a job hunt. They open it between applications, often tired, often on a phone. It feels like a well kept paper planner: tidy, quiet, nothing shouting. Clean and techy, modern and tidy.

The three dials:
- **Density 5, Daily App Balanced.** Enough on screen to see the whole job hunt at a glance, never cramped.
- **Variance 3, Predictable.** A dashboard people use every day. Things stay where they expect them.
- **Motion 3, Static Restrained.** Motion only when something answers the user. Nothing loops, nothing floats.

Every screen answers one question: how is my job hunt going?

## 2. Color Palette & Roles

- **Harbour Teal** (#247D99): the single accent. Main buttons, links, focus rings, the selected status. Nothing else.
- **Deep Harbour** (#0D6C87): Harbour Teal on hover and press.
- **Mist Teal** (#DFF0F7): soft fill behind the selected item.
- **Clear Canvas** (#FCFEFE): page background.
- **Paper Surface** (#FEFFFF): cards, forms, dialogs.
- **Sunken Slate** (#F4F6F7): wells, the Applied tag, empty areas.
- **Hairline** (#D2DBDE): 1px borders and dividers. **Firm Hairline** (#B7C1C6) for inputs.
- **Ink** (#060F12): headings and the big numbers. Never pure black.
- **Slate Ink** (#373F42): body text. **Quiet Slate** (#687074): dates and meta.
- **Status, only on the status tag:** Offer in Forest (#187C49), Rejected in Brick (#AF3D36), Interview in Deep Sea (#337288), Applied in Slate Ink on Sunken Slate.

One accent only. The neutrals all lean slightly toward the teal, so the palette holds together. Flat colour everywhere.

## 3. Typography Rules

- **Display and headings:** Sora. Tight tracking, weight carries the hierarchy, not giant size. Headings written as sentences, never in capitals.
- **Body:** Geist. Relaxed leading, lines no wider than 65 characters, never below 14px.
- **Mono:** JetBrains Mono, for dates, counts in tables and small labels.
- **The four status counts** are the biggest numbers on the dashboard, in Sora.
- **Banned:** Inter, system default fonts, any serif.

Note: the BrandKit guide names Inter for body text. Inter is the number one AI default font, so this file swaps it for Geist. Where the PDF and this file disagree, this file wins.

## 4. Component Stylings

- **Buttons:** Harbour Teal fill, white text, 8px corners, at least 44px tall. Pressed state moves down 1px. No glow, no gradient. Secondary buttons are white with a Firm Hairline border. Labels say what they do: "Add application", "Save changes", "Delete".
- **Status count tiles:** four tiles in one row, big Sora number, short label under it. On a phone, a 2 by 2 grid.
- **Application cards:** Paper Surface, 1px Hairline border, 16px corners, no shadow. Company name in bold, job title under it, date applied in mono, status tag on the right. Edit and delete sit quietly at the bottom.
- **Status tags:** 4px corners, mono label, the status colour as text on a pale fill.
- **Inputs:** label above, error below in Brick, focus ring in Harbour Teal. No floating labels.
- **Loading:** skeleton blocks the same size as the content. No spinning circles.
- **Empty dashboard:** "No applications yet. Add your first one." with the Add button right under it.
- **Errors:** say what happened and how to fix it, next to the field. Never "Oops", never an apology.

## 5. Layout Principles

- Left aligned. Max width 1100px, centred on the page.
- Dashboard, top to bottom: hello with the person's name, the four counts, then applications in one column, newest first.
- Everything on a 4px grid, using the spacing scale only.
- One main action per screen.
- Below 768px, everything becomes one column. No sideways scrolling, ever. Every tap target at least 44px.
- Nothing overlaps. Every element has its own space.

## 6. Motion & Interaction

- Motion only as an answer to the user: a new card slides into the list after it is added, a deleted card fades out, a dialog opens.
- Short and soft, 150 to 250ms, animate only transform and opacity.
- No looping animations, no fade and slide on page load, no hover animation on every card.
- Respect reduced motion: if the user asks for less motion, nothing moves.

## 7. Anti-Patterns (Banned)

- No emoji anywhere.
- No Inter. No serif fonts.
- No pure black (#000000).
- No purple, no neon, no glows, no gradients, no gradient text.
- No glass or frosted panels, no blurred blobs.
- No centred hero with a headline, a subline and two buttons.
- No row of three identical cards with an icon on top.
- No coloured bar down the side of cards.
- No all caps labels.
- No fake people or companies ("John Doe", "Acme") in examples. No made up round numbers.
- No AI words in the copy: elevate, seamless, unleash, next gen.
- No "Submit", "Get started" or "Learn more". No arrows stuck on the end of link text.
- No placeholder text. No "scroll to explore".
- No em dashes in any copy.
