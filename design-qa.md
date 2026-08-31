# Design QA — nova-home final sequence

## Source visual truth

- FAQ motion and surface reference: `/Users/izzaguirres/Desktop/Gravação de Tela 2026-08-29 às 22.08.52.mov`
- Rejected custom-order and FAQ state: `/var/folders/cg/6jf89kxd441fs0_q7n5w_8000000gn/T/TemporaryItems/NSIRD_screencaptureui_7BAoft/Captura de Tela 2026-08-29 às 22.07.00.png`
- Rejected final CTA state: `/var/folders/cg/6jf89kxd441fs0_q7n5w_8000000gn/T/TemporaryItems/NSIRD_screencaptureui_2jln8t/Captura de Tela 2026-08-29 às 22.09.26.png`
- CTA campaign asset: `/Users/izzaguirres/2026/Serotiva/Clientes/Aplic/Propaganda/posts/gerados/2026-08-sequencia-inicial/raw/33-revista-leitura-feed-original.png`

## Implementation evidence

- Desktop, custom order: `/tmp/aplic-final-desktop-custom-centered.png`
- Mobile, custom order: `/tmp/aplic-final-mobile-custom-centered.png`
- Desktop, FAQ open state: `/tmp/aplic-final-desktop-faq-open-verified.png`
- Desktop, final CTA: `/tmp/aplic-final-desktop-cta.png`
- Mobile, FAQ open state: `/tmp/aplic-final-mobile-faq-open.png`
- Mobile, final CTA: `/tmp/aplic-final-mobile-cta.png`
- Mobile navigation, floating open state: `/tmp/aplic-mobile-menu-open-pointer.png`
- Focused reference/implementation comparison: `/tmp/aplic-faq-comparison.png`
- Emil polish, full desktop: `/tmp/aplic-emil-after-full-desktop.png`
- Emil polish, full mobile: `/tmp/aplic-emil-after-full-mobile.png`
- Emil polish, mobile menu open: `/tmp/aplic-emil-final-mobile-menu.png`
- Emil polish, mobile FAQ open: `/tmp/aplic-emil-final-mobile-faq-open.png`

## Viewports

- Desktop: 1536 × 900, DPR 1
- Mobile: 390 × 844, DPR 1
- Source video: 1534 × 1194
- Responsive overflow checks: 320, 360, 390, 430, 768, 1024, 1280, 1440, and 1536 px

## Comparison passes

### Full sequence

- Custom order now names the use case directly, includes examples for special dimensions, larger formats, and alternate finishes, and keeps one WhatsApp action.
- FAQ is separated from the dark custom-order card, uses an editorial heading, and preserves an even vertical rhythm across all four questions.
- Final CTA uses a real campaign photograph with a person and printed material, balanced against a single high-contrast WhatsApp action.
- Desktop and mobile screenshots show no horizontal overflow, clipped text, or overlap between the three sections.

### Focused FAQ comparison

- The focused comparison places the source video frame and the implementation side by side.
- Both use soft neutral rounded rows, a small right-aligned chevron, an answer revealed inside the active row, and small gaps between rows.
- The implementation intentionally uses the Aplic typography, palette, and four customer questions rather than duplicating the reference brand.
- Interaction check: opening item 1 produced `[true, false, false, false]`; opening item 3 next produced `[false, false, true, false]`. Only one answer remains open.

### Accessibility and resilience

- FAQ triggers are semantic buttons with `aria-expanded`, `aria-controls`, labeled regions, keyboard focus treatment, and reduced-motion support.
- CTA image has descriptive alt text; decorative process artwork remains empty-alt.
- Mobile controls maintain practical tap targets and readable wrapping at 390 px.

### Mobile navigation

- The previous full-height lateral sheet was replaced by a 288 × 296 px floating dialog aligned below the 390 px mobile header.
- The dialog has a true overlay, focus trap, visible close control, Escape dismissal, outside-click dismissal, and focus return to the menu trigger.
- Pointer QA confirmed that the `Produtos` item navigates to `/produtos`; the open state has zero horizontal overflow.
- Desktop navigation remains unchanged and the mobile dialog is not displayed at widths from 768 px.

### Emil design-engineering polish

- Large surfaces now share a 28 px desktop radius tier; product/process cards use 20 px, FAQ rows use 16 px, and controls retain their 12 px or pill geometry.
- Product-card padding and mobile campaign/CTA padding now sit on clean 4/8 px increments without changing the approved composition.
- Primary actions, product CTAs, footer CTA, catalogue link, and mobile-menu controls share a subtle `scale(0.97)` pressed state.
- UI transitions use the same strong ease-out curve and complete between 150 and 260 ms; the FAQ no longer exceeds the 300 ms interaction budget.
- Reduced-motion QA returned `0.001s` for the card, sticky header, and accordion transitions.
- Interaction QA confirmed: floating menu opens at 288 × 296 px and returns focus on Escape; FAQ opens one item at a time; product select exposes a listbox; the mobile rail scrolls from 0 to 302 px; page overflow remains zero.
- `npm run type-check` and `npm run build` both pass.

### Motion Quality Gate

- Editorial reveal uses one shared `IntersectionObserver` with `rootMargin: 0px 0px -10% 0px`, so content starts only after entering the visible viewport and reveals only once.
- Text enters over 900 ms from `translateY(12px)` with 3 px blur; media enters over 1120 ms from `scale(0.94)` with 2 px blur. Both use `cubic-bezier(0.22, 1, 0.36, 1)` and short 60 ms stagger steps.
- Only `opacity`, `transform`, and `filter` are transitioned. The legacy global reveal declaration was also narrowed from `transition: all` to those three explicit properties.
- Desktop and mobile runs each reached 47/47 revealed elements, preserved zero horizontal overflow, and kept every measured `offsetTop`, `offsetLeft`, width, and height unchanged from initial to final state.
- Returning to the top kept 47/47 elements revealed, confirming the scroll effect is one-shot rather than replaying in reverse.
- Slow-motion inspection at 4× duration preserved identical geometry through the midpoint and final frame; no jump, flash, ghost layer, or residual transform was observed.
- Reduced-motion emulation exposed all 47 elements immediately with `transform: none`, `filter: none`, and `transition: none`.
- Evidence: `/tmp/aplic-motion-desktop-opening-midpoint.png`, `/tmp/aplic-motion-desktop-hero-final.png`, `/tmp/aplic-motion-desktop-products-final.png`, `/tmp/aplic-motion-desktop-trust-final.png`, `/tmp/aplic-motion-desktop-process-final.png`, `/tmp/aplic-motion-desktop-final-cta-final.png`, `/tmp/aplic-motion-mobile-hero-final.png`, `/tmp/aplic-motion-mobile-products-final.png`, `/tmp/aplic-motion-mobile-process-final.png`, `/tmp/aplic-motion-mobile-final-cta-final.png`, and `/tmp/aplic-motion-desktop-slow-midpoint.png`.
- Local console keeps the pre-existing Vercel Analytics CSP warning for `va.vercel-scripts.com`; no runtime exception attributable to the motion implementation was recorded.

## Findings and history

- Resolved: circular plus controls and divider-only FAQ rows were replaced with the reference-inspired capsule accordion.
- Resolved: technical/internal copy was removed from the customer-facing sequence.
- Resolved: the generic centered CTA was replaced by a human campaign image and split composition.
- Resolved: the custom request area now explains when to use it instead of asking an ambiguous question.
- Resolved: the mobile navigation no longer occupies the full screen as a lateral drawer.
- Remaining blocking findings: none.

## Final result

passed

## Whole-site design-system rollout — 2026-08-30

### Routes covered

- Official home: `/` now renders the approved `/nova-home` experience while retaining the canonical home metadata and structured data.
- Core pages: `/produtos`, `/sobre`, `/contato`, and `/grafica-em-floripa`.
- Product landings: `/cartao-de-visita`, `/panfleto`, `/banner`, `/etiquetas-adesivas`, `/cracha`, `/pasta-com-bolso`, and `/blocos-receituario`.

### Product-media policy

- Campaign imagery is used in every hero with an exact product match: cartão, panfleto, banner, etiquetas and crachá.
- Pasta com bolso and blocos/receituários intentionally use branded placeholders until their campaign photographs are produced.
- No route reported a broken image in the browser pass.

### Responsive and interaction evidence

- Browser QA ran across all 12 public routes at 1536 × 900, 390 × 844 and 320 × 800.
- Every route kept `scrollWidth <= innerWidth`; no clipped heading, broken image or horizontal page overflow was found.
- The mobile floating menu opened at 288 × 296 px, locked background scroll, closed with Escape and restored the page state.
- FAQ state changed from `aria-expanded=false` to `true` and back; the closed region returned to zero height and zero opacity.
- A product variation changed from 500 units / R$ 345,00 to 1000 units / R$ 385,00 and closed its listbox correctly.
- Home and shared-page reveals remained hidden before the viewport threshold, reached opacity 1 with no residual transform or blur, and stayed revealed after returning to the top.
- Browser console audit across the route pass returned no warnings or errors attributable to the implementation.

### Verification

- `npm run type-check`: passed.
- `npm run build`: passed; all 19 static/dynamic routes were generated.
- Build warnings are pre-existing maintenance notices for Baseline Browser Mapping data, multiple lockfiles, the middleware convention, and one edge-runtime/static-generation limitation.
- Deployment was not performed.

### Result

passed

## Gate 8 — Conversion and measurement — 2026-08-31

### Contract

- Every active WhatsApp CTA uses `https://wa.me/5548999128310` with a prefilled message and an explicit `conversion_source` and `conversion_scope`.
- Product-card CTAs carry product name, product ID, selected variation, quantity and displayed price in both the WhatsApp message and the `whatsapp_click` payload.
- Custom orders use the separate `custom_order` scope; contact intents distinguish general quote, artwork submission and existing-order support.
- First-touch UTMs and click IDs are stored for the browser session and remain attached after internal navigation.
- The published GTM v8 fields remain intact. Product price uses `product_price` rather than `value`, so the existing Ads conversion does not inherit catalogue prices.

### Real interaction evidence

- Desktop, 1536 × 1000: one header activation produced exactly one `whatsapp_click` with source `header`, page `/`, the correct WhatsApp URL and the complete QA attribution.
- Desktop catalogue: changing Cartão de Visita from 100 to 500 units updated the card to R$ 245,00, generated a message containing product, quantity and price, and emitted exactly one event with the same commercial context.
- Attribution persisted from `/?utm_source=gate8&utm_medium=qa&utm_campaign=conversion_gate&utm_content=desktop&gclid=test-click-id` to the click on `/produtos` without replacing `page_path` or `page_location`.
- Mobile, 390 × 844: choosing 500 units and activating the CTA required two interactions, kept the CTA visible, emitted one event and produced no horizontal overflow.
- No WhatsApp message was sent during QA; destination and prefilled payload were validated before the external handoff.

### Route matrix

- Desktop and mobile passes covered `/`, `/produtos`, `/contato`, `/cartao-de-visita`, `/panfleto`, `/banner`, `/etiquetas-adesivas`, `/cracha`, `/pasta-com-bolso`, `/blocos-receituario` and `/grafica-em-floripa`.
- All 22 route-and-viewport checks had the correct WhatsApp destination, complete product-card metadata, zero broken images and zero page overflow.
- The browser console returned no warnings or errors in the final pass.

### Measurement boundary

- `whatsapp_click` is a technical click/open intent only.
- Conversation, quote and sale remain separate downstream states and were not inferred from this QA.

### Result

passed

## Gate 9 — Controlled production release — 2026-08-31

### Release identity

- Approved source commit: `0a21cb7de4620b04bbe7e05aedec2ca5afe94a33` on `origin/main`.
- Vercel deployment: `dpl_D15Qk2Ch9Q2m1YLfpp8Qg1f4Ugo1`, status `Ready`, target `production`.
- Canonical domain: `https://aplicgrafica.com.br`.
- Local release checks remained green: `npm run type-check`, `npm run build`, and `git diff --check`.

### Public surface QA

- Browser QA covered `/`, `/produtos`, `/contato`, `/cartao-de-visita`, `/panfleto`, `/banner`, `/etiquetas-adesivas`, `/cracha`, `/pasta-com-bolso`, `/blocos-receituario`, and `/grafica-em-floripa` at 1536 × 1000 and 390 × 844.
- All 22 route-and-viewport checks had a visible H1, correct WhatsApp destination, complete conversion source/scope, complete catalogue-product metadata, zero broken images, and zero horizontal overflow.
- The public mobile menu rendered as a 288 × 296 px floating dialog, locked the background, closed with Escape, and returned focus to the menu button.
- The public catalogue changed Cartão de Visita from 100 to 500 units and from R$ 185,00 to R$ 245,00 without layout regression. The resulting WhatsApp URL contained the selected product, quantity, and price.
- The in-app browser console stayed clean. Chrome exposed one unrelated pre-existing browser-extension injection error; no site-owned script appeared in that stack.

### Production measurement

- Google Tag Assistant connected to `GTM-KHJXCLT5` and found the GTM, GA4 `G-02JHQCQSWZ`, and Ads `AW-761339571` tags.
- One catalogue CTA activation produced event `7 whatsapp_click` with source `product_catalog_card`, scope `catalog_product`, product `Cartão de Visita Brilho Total`, product ID `cartao-brilho-frente`, variation and quantity `500 un.`, price `245`, currency `BRL`, page path `/produtos`, and the exact prefilled WhatsApp URL.
- `GA4 Event — WhatsApp click` fired once and `Ads Conversion — WhatsApp click` fired once for that single activation.
- The handoff opened WhatsApp with the prefilled context; no message was sent during QA.

### Measurement boundary

- This gate confirms deployment, the technical click event, and tag delivery only.
- Conversation, quote, order, and sale remain downstream commercial states and were not inferred.

### Result

passed
