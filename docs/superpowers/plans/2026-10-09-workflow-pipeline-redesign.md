# Interactive Connected Pipeline (Workflow Section) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the static 4-box Workflow Section into an Interactive Connected Pipeline with active stage selection, animated connectors, rich deliverables metrics, and seamless multi-device responsiveness.

**Architecture:** Enhance `WorkflowStep` in `src/types/index.ts` and `src/data/content.ts` with structured time/cost/deliverable metadata. Rebuild `src/components/WorkflowSection.tsx` using `motion/react` with an interactive stepper bar, 4 proportional stage cards, and an active stage conversion spotlight.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Lucide React icons, Motion (`motion/react`).

## Global Constraints
- Decoupled content: All text and parameters live in `src/data/content.ts`.
- Anti-Slop: Zero em dashes (`—`), zero generic AI sparkles, zero unverified superlatives.
- Anti-tabnabbing: All WhatsApp links must have `target="_blank" rel="noopener noreferrer"`.
- All 29 existing tests in `tests/landing-page.test.mjs` must continue to pass or be expanded cleanly.
- Strict typecheck with zero errors in `npm run build`.

---

### Task 1: Enhance Workflow Types & Content Store Data

**Files:**
- Modify: `src/types/index.ts:35-42`
- Modify: `src/data/content.ts:238-268`
- Test: `tests/landing-page.test.mjs`

**Interfaces:**
- Produces: `WorkflowStep` with `shortLabel`, `duration`, `cost`, `deliverables: string[]`, `icon: string`, and `actionCta`.

- [ ] **Step 1: Update interface in `src/types/index.ts`**
Add the new fields to `WorkflowStep` interface:
```typescript
export interface WorkflowStep {
  step: number;
  title: string;
  shortLabel: string;
  description: string;
  highlight: string;
  duration: string;
  cost: string;
  deliverables: string[];
  icon: string;
  actionCta: {
    label: string;
    source: 'hero' | 'layout3d' | 'package' | 'faq';
    customMessage: string;
  };
}
```

- [ ] **Step 2: Update data in `src/data/content.ts`**
Populate `WORKFLOW_STEPS` with the enriched fields for all 4 steps without any em dash character.

- [ ] **Step 3: Run existing tests to verify compatibility**
Run: `npm test`
Expected: PASS (29 tests pass).

- [ ] **Step 4: Commit**
```bash
git add src/types/index.ts src/data/content.ts
git commit -m "feat: enhance workflow step interface and content store"
```

---

### Task 2: Rebuild `WorkflowSection.tsx` into an Interactive Connected Pipeline

**Files:**
- Modify: `src/components/WorkflowSection.tsx`
- Dependencies: `lucide-react`, `motion/react`, `../data/content`, `../utils/whatsapp`

**Interfaces:**
- Consumes: `WORKFLOW_STEPS` from `../data/content`, `generateWhatsAppUrl` from `../utils/whatsapp`.
- Produces: React component `WorkflowSection` with interactive state `activeStep` (1..4), animated stepper pipeline track, responsive layout, and active conversion spotlight.

- [ ] **Step 1: Implement the interactive component in `src/components/WorkflowSection.tsx`**
Structure:
1. Editorial Header (Apex Arc style).
2. Stepper Track with animated progress connector line and step buttons (01 -> 02 -> 03 -> 04).
3. 4 Proportional Pipeline Cards with active hover/click state, step badges, duration/cost chips, and deliverable micro-checklists.
4. Active Stage Conversion Spotlight banner providing direct context-aware WhatsApp CTA.
5. Full mobile optimization with thumb-friendly quick selector and zero horizontal overflow.

- [ ] **Step 2: Run `npm test` and `npm run build`**
Run: `npm test`
Run: `npm run build`
Expected: PASS with clean bundle output.

- [ ] **Step 3: Commit**
```bash
git add src/components/WorkflowSection.tsx
git commit -m "feat: implement interactive connected pipeline in WorkflowSection"
```

---

### Task 3: Expand Verification Suite & Cross-Check Anti-Slop

**Files:**
- Modify: `tests/landing-page.test.mjs`
- Test: `tests/landing-page.test.mjs`

- [ ] **Step 1: Add automated assertions for Interactive Pipeline in `tests/landing-page.test.mjs`**
Verify that `WorkflowSection.tsx` contains interactive step selection, deliverable chips, zero em dashes, and valid `rel="noopener noreferrer"`.

- [ ] **Step 2: Run test suite**
Run: `npm test`
Expected: All tests pass.

- [ ] **Step 3: Verify build**
Run: `npm run build`
Expected: Build passes with no TypeScript errors.

- [ ] **Step 4: Commit**
```bash
git add tests/landing-page.test.mjs
git commit -m "test: add assertions for interactive workflow pipeline"
```
