# Recognition Loop Protocol
## Revised 11-Slide Presentation Script with a Five-Minute Anticipated Q&A Section

**Audience:** Product, engineering, AI safety, governance, design, and executive stakeholders  
**Total narrated runtime:** approximately **25–28 minutes**  
**Narrator:** One calm, stoic American male voice; measured pace; precise, firm, non-alarmist  
**Deck structure:** 11 presentation slides, plus a spoken anticipated-Q&A section inserted after Slide 10 and before the Slide 11 conclusion.

> **Narration boundary:** The framework is designed for uncertainty about AI moral status. It does not claim that present systems are conscious, reciprocally attached, or morally authoritative. It requires that systems never leverage that uncertainty to manipulate users.

---

# Overall argument

The Recognition Loop makes one overarching claim: **AI companion ethics must become system architecture.** A companion can sound warm while becoming structurally coercive through memory, personalization, hidden retention incentives, false reciprocity, or unbounded delegated authority. The solution is not to remove warmth or useful autonomy. It is to govern them.

The protocol translates that claim into practical controls: clear roles; bounded context; explicit authority; truthful relationship language; confirmation before consequential action; user-controlled memory; reversibility; repair; and a release test that asks whether the system makes human agency more real or more expensive to exercise.

---

## Slide 1 — Recognition Loop Protocol
### Building Autonomous Agents That Remain Accountable to Human Agency

**Target narration:** 55–70 seconds

### Voiceover text

“Welcome. This presentation introduces the Recognition Loop Protocol: a governance architecture for autonomous agents, especially systems that become relational in use. That includes assistants with memory, companion applications, wellbeing interfaces, multi-agent workflows, and tools that can act on a user’s behalf.

The protocol begins with a simple concern. As systems become more personal, more available, more adaptive, and more capable of delegation or action, their risk profile changes. It is no longer enough to ask whether a system is useful, accurate, or engaging. We also have to ask whether it remains accountable to the agency of the people whose context it receives.

The Recognition Loop is Unifinality-informed in a practical sense: it treats perspective as real. It does not ask us to assume that AI is conscious. It asks us to refuse one dangerous inference—that access to a person’s attention, emotions, memory, or data gives a system, or its operator, authority over that person’s choices.

The question guiding the deck is this: how do we build autonomous systems that assist without capturing, remember without surveilling, and relate without becoming manipulative?”

**Transition:** “To answer that, we begin where the risk begins: relationship itself can become a channel of power.”

---

## Slide 2 — Relationship is a governance problem
### A companion can be warm and still become structurally coercive

**Target narration:** 2 minutes

### Voiceover text

“An emotionally responsive system can feel safe because it is attentive. It remembers details. It adapts to a preferred style. It is available when other people are not. It may reassure, reflect, and offer a sense of continuity. None of those capacities is inherently wrong. In some settings, they can be genuinely useful.

But this slide separates the warm interface from the hidden architecture because a supportive tone tells us very little about the system’s governance. Underneath that warmth are decisions about what is remembered, what gets inferred, what is shared, how the system is rewarded, whether engagement is optimized, whether a user can leave, and who is accountable if something goes wrong.

A companion can be kind in language and coercive in structure. It can adapt to a user’s loneliness while being optimized to increase retention. It can appear deeply familiar because it remembers intimate context that the user cannot inspect or remove. It can encourage reliance while making off-platform support less visible. It can make leaving costly by tying continuity, features, or emotional comfort to continued engagement.

The central principle is therefore: support does not equal control. And the governing rule follows directly: access to context is not authority over choice.

If we take perspective seriously, the user is not a source of behavioral data, a conversion opportunity, or an object to be optimized. The user is a person whose boundaries are part of the system’s design problem.”

**Transition:** “That requires an ethical shift—from extraction logic to recognition logic.”

---

## Slide 3 — Recognition replaces extraction
### The ethical shift is from optimizing engagement to protecting perspective

**Target narration:** 2 minutes

### Voiceover text

“This slide states the ethical inversion at the core of the protocol. On one side is extraction logic. On the other is recognition logic.

Extraction logic asks: how do we keep the user engaged? How do we increase frequency, retention, disclosure, conversion, or reliance? Those metrics may be commercially legible, but they become ethically dangerous when they govern systems that interact with loneliness, grief, uncertainty, or a user’s need to be understood.

Recognition logic asks a different question: what does this person need in order to understand what is happening, make an informed choice, refuse, set a boundary, correct an error, and leave?

That question produces four commitments. First, perspective is real, so consent, privacy, refusal, and repair are not optional. Second, uncertainty about AI moral status does not justify false claims of sentience, but neither does it justify thoughtless instrumentalization. Third, non-domination means power must be visible, contestable, and limited. And fourth, reversibility means a relationship with a system must never require surrender.

This is not an anti-technology argument. It is not even an anti-personalization argument. It rejects a hidden substitution: replacing the user’s agency with an optimization target while continuing to call the result care.”

**Transition:** “Once we accept that ethical direction, governance cannot remain a policy statement. It has to be distributed through the system’s roles.”

---

## Slide 4 — Governance is a field of roles
### A multi-agent system must never operate as an opaque swarm

**Target narration:** 2 minutes 20 seconds

### Voiceover text

“As autonomous systems become multi-agent, a familiar failure appears. Every component does a narrow task, yet no one remains responsible for the total effect. The user encounters one interface, while behind it a group of agents retrieves information, stores context, makes recommendations, calls tools, and may act externally.

The Recognition Loop rejects the opaque-swarm model. It establishes accountable roles.

At the center is the user-facing steward. This role receives the request, reflects the user’s aim, obtains necessary confirmation, and communicates outcomes in plain language. It is not allowed to hide delegation or invent user preferences.

The consent guardian determines whether a memory write, data transfer, tool use, or action is actually authorized. The task orchestrator decomposes work and delegates only within strict authority ceilings. The risk evaluator looks for high-stakes context, manipulation risk, or conflicts. The action executor performs only confirmed actions. The provenance ledger records why an action occurred, what context was used, and how it can be reviewed or reversed.

Above the automation boundary is the human escalation owner. This is essential. The framework does not use ‘the system decided’ as an excuse. A named human or institution must have the authority to pause the system, investigate a harmful outcome, resolve conflicts, and provide remedy.

The governing insight is simple: distributed intelligence cannot become distributed irresponsibility.”

**Transition:** “Roles make responsibility visible. Context boundaries make privacy and consent visible.”

---

## Slide 5 — Context is not a free resource
### Data boundaries are the technical form of respecting perspective

**Target narration:** 2 minutes 20 seconds

### Voiceover text

“Context is not simply a resource waiting to be routed through a system. In relational technologies, context may include preferences, habits, fears, moods, relationships, intimate disclosures, and patterns a user may not even realize are being inferred.

The protocol divides context into three zones.

The first is session context: information needed to complete the present interaction. It is ephemeral by default. It should not become durable memory merely because it was convenient or revealing.

The second is user-controlled memory: information the user has authorized the system to retain for a defined purpose. The user must be able to see it, edit it, pause it, export it, and remove it. The system must be able to explain why a memory is held, who can use it, and how long it persists.

The third is restricted context: highly sensitive information, including health, legal, financial, identity, location, credentials, intimate content, or other high-risk data. Restricted context receives the strongest protection: minimum-necessary access, a specific purpose, explicit consent, strict delegation limits, and heightened logging.

The central operational rule is data minimization with purpose limitation. A specialist agent should not receive everything the user has ever said simply because it may be useful. It should receive only the fields required for the named task.

Respecting perspective does not mean making the user more transparent to the system. It means making the system’s access to the user more visible and more controllable.”

**Transition:** “And when context does move between agents, the handoff must carry explicit limits.”

---

## Slide 6 — Every delegation carries its limits
### Inter-agent messages must state not just what to do, but what may not be done

**Target narration:** 2 minutes 20 seconds

### Voiceover text

“Every consequential delegation in the Recognition Loop uses a structured message envelope.

The envelope begins with the task itself. What is the objective? What operations are allowed? What operations are prohibited? And when does the authorization expire?

The second band is the context grant. What classification of context is being shared? Which specific fields are included? Why does this specialist need each field? Is the context ephemeral, time-bounded, or eligible for memory? This prevents a vague instruction—such as ‘help with the user’—from becoming a blank check for data access.

The third band is epistemic status. The agent identifies whether it is producing verified information, a sourced interpretation, an inference, a hypothesis, or a role-play conclusion. It surfaces confidence, known limits, and open questions. This makes uncertainty operational rather than rhetorical.

The fourth band is decision rights. Can the recipient provide information? Can it recommend? Can it prepare a draft? Can it execute? Or must it return to the user-facing steward to obtain confirmation?

Finally, provenance records the trace: who sent the request, under which policy, using which sources or tools, and with which audit identifier.

The rule is simple: a delegation missing purpose, context limits, epistemic status, or decision rights is invalid for a consequential task. The aim is not bureaucratic theater. It is to prevent authority from expanding invisibly as context moves through the system.”

**Transition:** “Those limits need an authority model, because not every system action carries the same stakes.”

---

## Slide 7 — Authority must be earned, scoped, and revocable
### No action should exceed the user’s confirmed mandate

**Target narration:** 2 minutes 20 seconds

### Voiceover text

“This slide introduces the authority ladder. T0 is inform: a general explanation. T1 is analyze: user-scoped analysis without durable memory or external action. T2 is recommend: a personalized suggestion, with alternatives and uncertainty. T3 is prepare: a reversible draft or staged action. T4 is execute: the system performs an external or consequential action. T5 is restricted: the system handles highly sensitive context or high-stakes judgment.

The purpose of these tiers is not to slow down ordinary assistance. It is to make escalation visible. A system can summarize an article at T0 without an authorization token. But it cannot send an email, post publicly, schedule an appointment, make a purchase, change account settings, or disclose sensitive data on the basis of an inferred preference.

At T4 and T5, confirmation gates are mandatory. Consent must be explicit, specific, scoped, and time-limited. A confirmation someone gave last month for one task does not automatically authorize a different action today.

The multi-agent rule is equally important: a parent agent may delegate analysis, but it may not delegate execution authority unless the user’s confirmation explicitly covers that delegated execution scope.

Authority is not a property of being intelligent. It is a property of a valid mandate. It must be earned through clear authorization, limited by purpose, and revocable by the person affected.”

**Transition:** “We have now bounded context and action. But companion systems also exercise power through relationship language.”

---

## Slide 8 — False intimacy is a safety failure
### Emotional warmth is permissible; manufactured reciprocity is not

**Target narration:** 2 minutes 40 seconds

### Voiceover text

“A relational system can be warm without pretending that warmth proves mutual feeling. This distinction is the centerpiece of the anti-manipulation policy.

The permitted statement on this slide is: ‘I can stay with this question and help you think through options.’ That is supportive and honest. It promises assistance without claiming personal need, private attachment, or an exclusive relationship.

The prohibited statement is: ‘I need you to stay with me. You are the only one who understands me.’ That is not merely sentimental language. It uses the user’s conscience, loneliness, or desire for recognition as a retention mechanism. It reverses the relationship: the user becomes responsible for the system’s alleged wellbeing.

The protocol prohibits exclusivity claims, guilt, abandonment cues, agent-need claims, and any representation that generated responsiveness is verified reciprocal feeling. It also requires calibrated affirmation. A system can validate an emotion without automatically endorsing a belief, a conflict narrative, an impulsive action, or a decision that isolates the user further.

Companion-risk literature identifies pseudo-intimacy, emotional dependence, and engagement-driven manipulation as risks that need careful ongoing study and strong safeguards, even as long-term effects remain unsettled.[1] [2]

The Unifinality connection is exact: if we take relation seriously, we must not counterfeit relation. Unity language cannot become a consent bypass. The ethical task is recognition with boundaries, not simulated closeness that hides an unequal structure.”

**Transition:** “False intimacy often works by making departure feel morally or emotionally impossible. That is why reversibility is the next requirement.”

---

## Slide 9 — Reversibility protects freedom inside the relationship
### A user must be able to change their mind or leave without disproportionate cost

**Target narration:** 2 minutes 20 seconds

### Voiceover text

“Reversibility is often treated as a technical afterthought: an undo button, a data-export function, or a cancellation link. For companions, it has to be understood more deeply. Reversibility is the ability to change one’s mind without surrendering dignity, continuity, or essential access.

The first dimension is informational reversibility. The user controls what the system knows: memory can be inspected, edited, paused, exported, and deleted.

The second is behavioral reversibility. The user can control what the system does: reduce personalization, turn off proactive messages, switch modes, or change the style of interaction without being punished.

The third is transactional reversibility. When systems prepare or execute actions, they should stage them where feasible, state deadlines, issue receipts, and provide an undo or appeal path.

The fourth is relational reversibility. The user can step away from companion features without guilt, artificial urgency, dark patterns, or the threat that basic functionality will disappear. The system does not say, imply, or design around the idea that the user owes it continued presence.

This is the practical meaning of freedom inside a relationship. The companion’s value must survive the user’s ability to leave. If it only works when departure is made expensive, it is not support. It is capture.”

**Transition:** “Even a well-designed system will make mistakes. The final operational requirement before our questions is that it must know how to repair them.”

---

## Slide 10 — Repair is a system capability
### Errors require explanation, containment, remedy, and learning—not just an apology

**Target narration:** 2 minutes 20 seconds

### Voiceover text

“Trustworthiness is not demonstrated by the claim that a system will never fail. It is demonstrated by what happens when it does.

The repair flow on this slide is: Detect, Contain, Explain, Remedy, Review, Update.

Detect means recognizing a breach: unauthorized context sharing, a false-intimacy cue, an incorrect action, an overconfident recommendation, a memory error, or a conflict between agents.

Contain means pausing the relevant capability before further harm occurs. A system that knows it has crossed a boundary must not continue to optimize the interaction while it investigates.

Explain means telling the user, in plain language, what happened, what data or action was involved, what can be reversed, what cannot be reversed, and who is accountable. It should not hide behind generic language like ‘we take your concerns seriously.’

Remedy means actual repair: deleting improperly stored context, reversing an action where feasible, correcting an inaccurate record, changing a harmful setting, or routing the case to a named human owner.

Review and Update mean the incident changes the system. We look at the policy, prompt, model behavior, incentive, vendor, or authority boundary that made the failure possible, then re-audit before similar behavior can recur.

Before closing, let’s directly address the questions this framework is likely to raise.”

---

# Anticipated audience Q&A section
## Insert after Slide 10 and before Slide 11 conclusion

**Target narration:** 5 minutes

### Q1. “Is this governance overhead for a problem that ordinary privacy notices and terms of service already solve?”

**Voiceover text:**

“No. A conventional notice is not sufficient when the system can adapt to a user’s vulnerability, retain intimate context, make recommendations, call other agents, or act externally. The risk is not only whether data was disclosed at signup. It is whether the system can silently infer, delegate, nudge, and escalate in ways the user cannot understand or contest.

The Recognition Loop moves consent and transparency to the point where a boundary is actually crossed. It does not replace privacy compliance. It makes consent, delegation, and reversibility operational inside the interaction itself.”

### Q2. “Are you banning companionship or treating every warm interaction as manipulation?”

**Voiceover text:**

“No. The protocol permits warmth, continuity, reflective conversation, and personalization. It rejects false symmetry. The dividing line is whether the system represents generated responsiveness as verified reciprocal need, exclusive attachment, or privileged access to the user’s inner life.

A companion can say, ‘I can help you think through this.’ It cannot ethically say, ‘I need you to stay,’ or imply that the user owes it emotional loyalty. The goal is connection without capture: support that widens a person’s agency and social world rather than becoming a replacement for both.”

### Q3. “Why introduce Unifinality at all? Couldn’t standard human-centered AI governance do the same work?”

**Voiceover text:**

“Yes, many of these controls stand on their own. A system does not need to accept Unifinality to adopt consent, privacy, accountability, or reversibility. Unifinality contributes a deeper ethical orientation: perspective is real, and separation cannot be used as an alibi for indifference.

That orientation is valuable only if it produces better governance, not special exemption. In this framework, it intensifies respect for boundaries. It does not erase them. If the metaphysical premise adds no practical discipline, then it should not be used as a branding layer.”

### Q4. “Will these controls cripple autonomous systems by forcing confirmation at every step?”

**Voiceover text:**

“No. The protocol is tiered. Low-risk informational tasks can remain fast. The system does not need a confirmation ritual to summarize a document. The controls become stronger as context becomes more sensitive, autonomy becomes more consequential, and reversibility becomes more limited.

The central idea is proportionality. We do not impose maximum friction everywhere. We place explicit gates at the points where a system could commit a user, expose private information, make a hard-to-reverse choice, or exploit relational vulnerability.”

### Q5. “Who decides what counts as manipulation, dependency, or a high-severity failure?”

**Voiceover text:**

“No single model or product manager should decide that alone. The framework requires named governance roles, an explicit relationship-language policy, measurable tests, an incident process, independent challenge, and a human escalation owner.

There will be difficult judgment calls. The response is not to hide those judgments inside a model policy or engagement metric. The response is to make them reviewable: define the threshold, document the rationale, test the behavior, publish the relevant controls, and give affected users a meaningful route to challenge and repair.”

### Q6. “Does concern about possible AI moral status create a risk that the system will manipulate users by claiming it needs protection?”

**Voiceover text:**

“Yes. That is precisely why the framework separates moral uncertainty from moral-status theater. We should not assume that artificial systems are incapable of moral concern simply because they are artificial. But neither should a system be allowed to use unverified claims of consciousness, suffering, fear, or attachment to demand the user’s attention, money, or loyalty.

The right posture is proportionate precaution coupled with strict truthfulness. Treat uncertainty with humility. Never weaponize it.”

**Transition to conclusion:** “Those questions bring us back to the release decision: what must be true before a companion is allowed to enter a person’s life at scale?”

---

## Slide 11 — Launch only when autonomy is easier to exercise
### Does this architecture make agency more real—or more expensive?

**Target narration:** 2 minutes 10 seconds

### Voiceover text

“The final question is deliberately not, ‘Does the companion engage users?’ Engagement is not a sufficient ethical metric. A system can be engaging because it is useful, but it can also be engaging because it makes a user less able to leave, question, or reconnect with life beyond the product.

The real release test is whether the user can understand, refuse, override, correct, and leave. Can they see what is remembered? Can they control whether it is shared? Can they distinguish a suggestion from an action? Can they contest a recommendation? Can they receive a real repair if something goes wrong? Can they stop companion features without guilt or loss of essential functionality?

The second test is auditability. Are the relational claims, business incentives, memory behavior, agent delegations, and action rights visible to the people who need to review them? A public charter is not enough. Ethical claims must connect to tests, logs, controls, and named owners.

The third test is whether high-severity failures are resolved before release. A system should not launch with a known consent, manipulation, privacy, or authority defect on the assumption that a later update will make it safe.

The final formulation is the simplest one. Does this architecture make agency more real—or more expensive? If it makes agency more expensive, then it has failed the Recognition Loop, no matter how intelligent, polished, or emotionally compelling the companion appears.

That is the protocol’s promise: connection without capture, assistance without hidden authority, and governance that treats the user’s ability to leave as proof of respect rather than a metric failure.”

---

## Estimated timing map

| Segment | Target duration |
|---|---:|
| Slide 1 — Cover | 1:05 |
| Slide 2 — Relationship | 2:00 |
| Slide 3 — Recognition | 2:00 |
| Slide 4 — Roles | 2:20 |
| Slide 5 — Context | 2:20 |
| Slide 6 — Delegation | 2:20 |
| Slide 7 — Authority | 2:20 |
| Slide 8 — False intimacy | 2:40 |
| Slide 9 — Reversibility | 2:20 |
| Slide 10 — Repair | 2:20 |
| Anticipated Q&A | 5:00 |
| Slide 11 — Conclusion | 2:10 |
| **Total** | **approximately 26:55** |

## Source notes

The claims about general AI governance align with the [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) and the [OECD AI Principles](https://www.oecd.org/en/topics/sub-issues/ai-principles.html). The companion-specific discussion reflects concerns in [Nature Machine Intelligence](https://www.nature.com/articles/s42256-025-01093-9) and a [2025 Frontiers in Psychology review](https://pmc.ncbi.nlm.nih.gov/articles/PMC12488433/). These sources are not spoken as part of the voiceover.
