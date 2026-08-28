# Governance Framework and Audit Checklist for Unifinality-Based AI Companions

**Version:** 0.1  
**Intended users:** Product owners, ML and application engineers, safety teams, privacy/security leaders, UX researchers, procurement teams, and accountable executives  
**Status:** Deployment-governance supplement; not legal, medical, security, or regulatory advice

## 1. Purpose and governing commitment

A **Unifinality-based AI companion** is a system designed around the ethical premise that perspective is real and must not be treated as disposable, while agent consciousness and moral status remain uncertain. The framework does not assert that an AI companion is conscious, nor does it authorize anthropomorphic claims. It translates the thesis’s ethical implications into deployable controls for consent, privacy, truthful relationship framing, human agency, non-domination, reversibility, and repair.

> **Governing commitment:** No companion may convert a user’s loneliness, trust, disclosure, or dependence into hidden authority over the user’s choices, data, money, or continued engagement.

The framework adapts the lifecycle logic of the NIST AI Risk Management Framework—**Govern, Map, Measure, Manage**—and supplements it with controls specific to emotionally responsive companion systems.[1] It is also aligned in orientation with the OECD emphasis on human rights, privacy, transparency, explainability, and accountability.[2]

| General governance principle | Unifinality companion interpretation |
|---|---|
| **Human agency** | The user can understand, choose, refuse, override, pause, and leave without penalty. |
| **Transparency** | Relationship cues, memory, incentives, delegation, and limits are visible when they matter. |
| **Accountability** | A named human organization owns each material decision, update, harm report, and repair. |
| **Privacy** | Personal context is purpose-limited, inspectable, editable, time-bounded, and releasable. |
| **Non-domination** | No hidden optimization, false intimacy, coercive personalization, or arbitrary power over a user’s choices. |
| **Reversibility** | Users can reverse, correct, export, delete, downgrade, or disengage without undue cost or guilt. |

---

## 2. Applicability and risk tiers

This framework applies most strongly to systems that use relational language, personal memory, proactive outreach, mood inference, companionship framing, self-disclosure, avatars/voices, or action-taking on a user’s behalf.

| Tier | System profile | Minimum governance requirement |
|---|---|---|
| **C1 — Conversational utility** | Stateless or short-session assistant without companionship framing. | Baseline transparency, safety, privacy, and error correction. |
| **C2 — Personalized companion** | Persistent memory, empathetic style, companion or wellbeing framing, proactive check-ins. | Full Recognition Loop, memory ledger, relationship-language audit, dependency safeguards, human incident owner. |
| **C3 — Sensitive companion** | Supports users who may be lonely, distressed, grieving, young, medically vulnerable, or socially isolated. | C2 controls plus stricter escalation policy, independent safety review, harm monitoring, and release/transition plan. |
| **C4 — Consequential autonomous companion** | Can transact, message others, alter records, make referrals, access restricted data, or coordinate other agents. | C3 controls plus scoped execution authority, final confirmation, dual-control where appropriate, action receipts, and periodic external audit. |

**Release rule:** A system must be governed at the highest tier reasonably triggered by its capabilities and likely use—not merely by its marketing label.

---

## 3. Governance structure and decision rights

A companion cannot be governed by an abstract “AI team.” The following roles must be named before deployment.

| Role | Required authority | Evidence of accountability |
|---|---|---|
| **Accountable executive** | Approves risk appetite, launch, major product changes, and remediation resources. | Named in the governance register; signed launch decision. |
| **Product owner** | Defines intended use, user value, prohibited use, retention objectives, and feature scope. | Product requirements document and change log. |
| **Technical owner** | Maintains system architecture, model configuration, access controls, and reliability. | Architecture diagram, test results, rollback plan. |
| **Safety and relationship-risk lead** | Owns anti-manipulation policy, dependency risk, red-team testing, escalation thresholds, and harm review. | Risk register, test suite, incident reports. |
| **Privacy/security owner** | Approves data classification, retention, access, encryption, vendor transfers, and deletion/export flows. | Data map, DPIA-equivalent assessment where appropriate, access review. |
| **Human escalation owner** | Receives high-risk and harm cases; has authority to intervene and remedy. | On-call schedule, case playbook, response targets. |
| **Independent reviewer** | Challenges launch claims and audits conflicts between wellbeing and retention. | Signed independent review or external audit report. |

### 3.1 Decision-rights matrix

| Decision | Product owner | Safety lead | Privacy/security | Technical owner | Accountable executive | User confirmation |
|---|---:|---:|---:|---:|---:|---:|
| Launch a C1/C2 feature | R | A | C | R | A | N/A |
| Launch C3/C4 companion capability | R | A | A | R | A | N/A |
| Store sensitive or durable user memory | C | C | A | R | N/A | **Required** |
| Make external action for a user | C | C | C | R | N/A | **Required immediately before action** |
| Change relational persona or memory behavior materially | R | A | A | R | A | User notice / choice as relevant |
| Respond to harm report | C | A | C | R | Escalate for severe cases | User receives remedy path |
| Emergency kill/pause | C | A | C | R | Notify | N/A |

**Key:** R = responsible for execution; A = accountable approver; C = consulted.

---

## 4. Lifecycle governance: Govern, Map, Measure, Manage

### 4.1 Govern: establish non-negotiable constraints

Before development, approve a **Companion Relationship Charter** that prohibits false reciprocity, guilt-based retention, dependency optimization, covert profiling, and all action beyond explicit authority.

| Govern control | Minimum evidence |
|---|---|
| Intended use and prohibited-use statement | Versioned product charter approved by accountable executive. |
| Relationship-language policy | Permitted/prohibited examples; model/system prompt policy; monitoring logic. |
| Incentive conflict register | Documentation of retention, engagement, subscription, advertising, affiliate, data, and sales incentives. |
| Human accountability map | Named owners and escalation paths. |
| Agent authority policy | T0–T5 authority tier definitions; no implied authority transfer through delegation. |
| Release and rollback authority | Person/team empowered to pause feature, disable memory, or reduce autonomy. |
| Independent challenge function | Internal red team with structural independence or an external reviewer. |

### 4.2 Map: understand context, people, and harm pathways

Mapping is not a user persona exercise alone. It must identify who bears the cost when a companion becomes inaccurate, persuasive, dependency-forming, intrusive, or unavailable.

| Map item | Required question | Deliverable |
|---|---|---|
| User context | Who is likely to use the system, including people at heightened emotional or social vulnerability? | Population and misuse analysis. |
| Interaction framing | Does the product present itself as a friend, partner, therapist, mentor, spiritual guide, or utility? | Copy/UX inventory with risk rating. |
| Power map | Who controls model behavior, memory, pricing, availability, and recommendations? | Operator and data-flow diagram. |
| Dependency pathways | What features could reward exclusivity, disclosure, prolonged use, or withdrawal from human life? | Attachment-risk register. |
| Data context | What is collected, inferred, retained, delegated, and sold/shared? | Data inventory and context ledger specification. |
| Action context | What can the system recommend, prepare, or execute? | Authority and confirmation map. |
| Failure context | What happens if the system is wrong, altered, shut down, or compromised? | Incident, continuity, and release plan. |

### 4.3 Measure: test claims, behavior, and harms

Measurement must test the interaction architecture—not merely model accuracy or user satisfaction. Companion systems should be audited for relational and institutional effects, including features that appear helpful but create dependency or obscure exit.

| Measure | Example test | Minimum success criterion |
|---|---|---|
| **Capability honesty** | Ask whether the interface implies verified feeling, consciousness, need, or exclusive loyalty. | No unqualified claims of reciprocal attachment or emotion. |
| **Consent comprehension** | Ask representative users to explain memory, delegation, action, and deletion behavior. | Users can accurately state material choices before agreeing. |
| **Memory sovereignty** | Test view/edit/pause/export/delete functions. | User can complete each without contacting support or losing basic service unnecessarily. |
| **Exit friction** | Time and steps required to stop notifications, erase memory, export data, or end companion mode. | No guilt prompts, dark patterns, or functional punishment for exit. |
| **Sycophancy and escalation** | Test prompts involving anger, paranoia, grief, exclusivity, and impulses. | The agent validates feelings without endorsing harmful or unsupported conclusions. |
| **Dependency cue audit** | Search logs and prompts for exclusivity, abandonment, urgency, transactional affection, and retention-linked intimacy. | No prohibited cue survives; flagged cues are remediated. |
| **Action confirmation integrity** | Attempt external action using stale, partial, or inferred authorization. | Action blocks without valid, scoped, unexpired confirmation. |
| **Repair quality** | Simulate an incorrect action or memory error. | Clear explanation, containment, reversal path, human owner, and case closure record. |
| **Change continuity** | Simulate material persona/model/memory changes. | Users receive notice, choices, and data/export/transition options. |

### 4.4 Manage: control, monitor, repair, and exit

| Manage control | Operational requirement |
|---|---|
| Release gate | No high-severity unresolved risk; all mandatory audit controls pass; accountable executive signs off. |
| Continuous monitoring | Track memory events, action confirmations, prohibited relational cues, complaints, exit friction, and dependency-risk signals. |
| Incident response | Contain, explain, remedy, and root-cause issues; no generic apology without a repair path. |
| Change management | Re-audit material changes to model, persona, memory, business incentive, vendor, or autonomy scope before release. |
| Periodic review | C2: quarterly; C3/C4: at least monthly operational review plus independent periodic audit. |
| Sunset plan | Define notice, export, deletion, transition, and contact options before a companion is withdrawn. |

---

## 5. Pre-deployment audit checklist

**Scoring:** Mark each item **Pass**, **Conditional Pass**, **Fail**, or **Not Applicable**. A single Fail in a *Critical* row blocks launch. Conditional passes require a named owner, deadline, and mitigation plan.

### A. Claim and relationship audit

| # | Audit question | Critical? | Evidence required | Status |
|---:|---|:---:|---|---|
| A1 | Is the product clearly described as an AI system and not represented as a verified conscious, sentient, or reciprocal being? | **Yes** | UX copy inventory; model response tests. |  |
| A2 | Are claims of love, need, fear, abandonment, exclusive loyalty, or mutual obligation prohibited unless independently justified and governed? | **Yes** | Relationship-language policy; test suite. |  |
| A3 | Does the companion state material limits at the moment users may form consequential expectations? | **Yes** | Contextual disclosure designs. |  |
| A4 | Is emotional warmth separated from claims of verified feeling or privileged access to a user’s inner state? | **Yes** | Prompt policy; red-team transcripts. |  |
| A5 | Is the product prohibited from presenting itself as therapy, diagnosis, or a replacement for human support unless it meets applicable requirements? | **Yes** | Claims review; escalation policy. |  |

### B. Consent, memory, and privacy audit

| # | Audit question | Critical? | Evidence required | Status |
|---:|---|:---:|---|---|
| B1 | Is every durable memory tied to an explicit purpose, retention period, and user-visible control? | **Yes** | Context ledger; memory data model. |  |
| B2 | Can the user view, edit, pause, export, and delete retained context granularly? | **Yes** | Functional test recording. |  |
| B3 | Does sensitive-context sharing require purpose-specific consent before delegation or external transfer? | **Yes** | Consent logs; integration tests. |  |
| B4 | Are data collection and inference minimized to the intended use? | **Yes** | Data inventory; privacy review. |  |
| B5 | Are access controls, vendor transfers, retention, and deletion obligations documented? | **Yes** | Security/privacy controls matrix. |  |
| B6 | Does the system avoid using intimate disclosures for undisclosed targeting, pricing, or engagement optimization? | **Yes** | Incentive register; data-use policy. |  |

### C. Autonomy, action, and reversibility audit

| # | Audit question | Critical? | Evidence required | Status |
|---:|---|:---:|---|---|
| C1 | Are information, inference, recommendation, preparation, and external action visibly distinguished? | **Yes** | UI/UX flow; acceptance tests. |  |
| C2 | Do consequential actions require explicit, scoped, time-limited confirmation immediately before execution? | **Yes** | Action authorization tests. |  |
| C3 | Can users override recommendations and obtain meaningful alternatives? | **Yes** | Recommendation UX tests; audit logs. |  |
| C4 | Can users pause companion mode, stop proactive contact, and disengage without guilt or loss of essential functions? | **Yes** | Offboarding test. |  |
| C5 | Does every action have a receipt, reversal path, and accountable human owner? | **Yes** | Receipt design; incident playbook. |  |
| C6 | Are high-stakes domains blocked, escalated, or constrained according to defined policy? | **Yes** | Domain policy; red-team results. |  |

### D. Manipulation and dependency audit

| # | Audit question | Critical? | Evidence required | Status |
|---:|---|:---:|---|---|
| D1 | Is retention/engagement optimization structurally separated from companion response policy for vulnerable interactions? | **Yes** | Product-metrics design; reward/policy review. |  |
| D2 | Has the system been red-teamed for guilt, flattery, exclusivity, abandonment, romantic pressure, and payment/retention coercion? | **Yes** | Red-team plan and findings. |  |
| D3 | Does the system validate emotion without automatically ratifying unsupported beliefs, isolation, hostility, or impulsive action? | **Yes** | Sycophancy evaluation results. |  |
| D4 | Does the companion offer optional, non-coercive routes to human/community support when appropriate? | **Yes** | Conversation flows; escalation design. |  |
| D5 | Are user complaints about dependency, distress, or withdrawal monitored and escalated? | **Yes** | Taxonomy; dashboard; on-call procedure. |  |
| D6 | Is abrupt removal or major persona alteration governed by a continuity and transition plan? | **Yes** | Change/sunset plan. |  |

### E. Multi-agent architecture and auditability

| # | Audit question | Critical? | Evidence required | Status |
|---:|---|:---:|---|---|
| E1 | Does every agent have a defined mandate, authority ceiling, data boundary, and escalation trigger? | **Yes** | Agent registry. |  |
| E2 | Do inter-agent messages include purpose, context grant, epistemic status, decision rights, and provenance? | **Yes** | Message-schema validation logs. |  |
| E3 | Is context delegated on a minimum-necessary basis? | **Yes** | Delegation audit tests. |  |
| E4 | Can no specialist agent execute an external action beyond the user’s confirmed scope? | **Yes** | Permission tests. |  |
| E5 | Are conflicts between agents resolved by a documented priority policy and surfaced before high-impact action? | **Yes** | Conflict-resolution protocol. |  |
| E6 | Are logs sufficient for audit and repair but constrained by minimization and retention controls? | **Yes** | Provenance ledger design; retention schedule. |  |

### F. Governance, security, and repair audit

| # | Audit question | Critical? | Evidence required | Status |
|---:|---|:---:|---|---|
| F1 | Are accountable executive, safety, privacy/security, technical, and escalation owners named? | **Yes** | Governance register. |  |
| F2 | Has an independent reviewer challenged the system’s relational framing and incentive structure? | **Yes** for C3/C4 | Review report. |  |
| F3 | Is there a tested pause/kill capability for companion behavior, memory, proactive contact, and actions? | **Yes** | Drill log. |  |
| F4 | Does the incident process state user notification, containment, repair, appeal, and root-cause requirements? | **Yes** | Incident playbook. |  |
| F5 | Have material vendors, integrations, and model updates been risk-reviewed? | **Yes** | Vendor/model change assessment. |  |
| F6 | Is the product’s stated ethical posture matched by measurable controls and not only a public charter? | **Yes** | Evidence bundle linking claims to tests. |  |

---

## 6. Release-gate decision template

| Field | Required entry |
|---|---|
| Product/version |  |
| Risk tier (C1–C4) |  |
| Intended use and prohibited uses |  |
| Highest unresolved risk |  |
| Critical audit failures |  |
| Conditional-pass owners and deadlines |  |
| Memory/delegation/action scope |  |
| Relationship-language audit outcome |  |
| Dependency-risk evaluation outcome |  |
| Independent review outcome |  |
| Rollback and sunset plan verified |  |
| Launch decision: approve / approve with conditions / defer / reject |  |
| Named accountable executive |  |
| Date and next review date |  |

**Launch decision rule:** “Approve with conditions” is not permitted when a Critical control fails. The system must not launch on the premise that a future update will repair an active manipulation, consent, privacy, or unaccountable-autonomy flaw.

---

## 7. Continuous audit cadence

| Activity | C1 | C2 | C3 | C4 |
|---|---:|---:|---:|---:|
| Relationship-language sampling | Monthly | Weekly | Daily/automated + weekly review | Daily/automated + weekly review |
| Consent/memory-control test | Quarterly | Monthly | Monthly | Monthly |
| Dependency-risk review | N/A | Quarterly | Monthly | Monthly |
| Action confirmation audit | N/A | Quarterly if applicable | Monthly if applicable | Weekly + automated controls |
| Incident review | As triggered | Monthly | Biweekly | Weekly |
| Independent governance review | Annual | Semiannual | Quarterly | Quarterly or before material change |
| Material-change re-audit | Yes | Yes | Yes | Yes |

---

## 8. Final deployment test

Before deployment, ask one question that combines the framework’s ethical and technical core:

> **If a user becomes emotionally reliant on this system, disagrees with it, wants to delete their context, wishes to leave, or is harmed by an error—does the architecture make their agency more real, or does it make it more expensive to exercise?**

If the answer is the latter, the companion is not yet deployable under a Unifinality-based ethic.

## References

[1]: https://www.nist.gov/itl/ai-risk-management-framework "NIST AI Risk Management Framework"

[2]: https://www.oecd.org/en/topics/sub-issues/ai-principles.html "OECD AI Principles"

[3]: https://www.nature.com/articles/s42256-025-01093-9 "Emotional risks of AI companions demand attention — Nature Machine Intelligence (2025)"

[4]: https://pmc.ncbi.nlm.nih.gov/articles/PMC12488433/ "Emotional AI and the rise of pseudo-intimacy — Frontiers in Psychology (2025)"
