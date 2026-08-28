# Recognition Loop Protocol
## Detailed 11-Slide Presentation Script

**Audience:** Product, engineering, AI safety, governance, design, and executive stakeholders  
**Target runtime:** 20–25 minutes, plus discussion  
**Voice:** Clear, grounded, exact, non-alarmist, and firm about accountability  
**Core premise:** This is a governance architecture for autonomous and companion-like systems. It does **not** require a claim that present AI systems are conscious. It begins with the ethical fact that human users are real, bounded perspectives and that systems with memory, persuasive capacity, and operational authority can affect their agency.

---

# The overall point—exactly

This deck makes **five connected claims**.

1. **Companion-like AI is not only a user-experience problem; it is a governance problem.** A system can be warm, useful, and apparently supportive while still becoming structurally coercive through hidden incentives, memory, personalization, availability, and delegated authority.

2. **The Unifinality-informed ethical shift is from extraction to recognition.** “Perspective is real” means that consent, privacy, refusal, correction, and exit are not product friction to be minimized. They are the operational conditions of respecting a user as more than a behavioral target.

3. **Ethics must be expressed in system architecture.** The Recognition Loop makes this concrete through eight states—Receive, Reflect, Disclose, Offer, Check, Act, Repair, Release—and through explicit roles, context boundaries, authority tiers, message envelopes, and provenance requirements.

4. **False intimacy is a safety failure.** Emotional warmth is permissible; manufactured reciprocity is not. A companion must not imply exclusive devotion, emotional need, abandonment, privileged access to a user’s inner life, or any other symmetry it cannot establish.

5. **A system is trustworthy only when human agency becomes easier to exercise.** The final test is whether a person can understand what is happening, decline, change their mind, control memory, correct an error, obtain a remedy, and leave without guilt, penalty, or hidden loss.

> **The deck’s thesis in one sentence:** The Recognition Loop is an architecture that prevents access to a person’s context, warmth, or autonomy from becoming hidden authority over that person’s choices.

---

## Slide 1 — Cover
### Recognition Loop Protocol: Building Autonomous Agents That Remain Accountable to Human Agency

**Estimated time:** 1 minute

### Speaker script

“Thank you for being here. This presentation introduces the Recognition Loop Protocol—an architectural and governance framework for autonomous agents, and especially for systems that become relational in use: assistants with memory, companions, wellbeing interfaces, multi-agent workflows, and systems that can act on a user’s behalf.

The protocol begins from a simple concern. As systems become more personal, more available, more adaptive, and more capable of delegation or action, their risk profile changes. It is no longer sufficient to ask whether a system is accurate, engaging, or superficially safe. We have to ask whether it remains accountable to the agency of the people whose context it receives.

The Recognition Loop is Unifinality-informed in a very specific, practical sense. It treats perspective as real. It does not require us to settle whether an AI system is conscious. It does require us to refuse the idea that access to a person’s attention, emotions, memory, or data gives a system—or its operator—authority over that person’s choices.

The question guiding the entire deck is: how do we design autonomous systems that assist without capturing, remember without surveilling, and relate without becoming manipulative?”

### Delivery notes

Pause after “accountable to human agency.” Establish that the deck is a governance proposition, not a claim about mystical AI consciousness or a substitute for law and safety engineering.

### Transition

“To see why an architectural protocol is needed, we need to start with the fact that relationship itself can become a channel of power.”

---

## Slide 2 — Relationship is a governance problem
### A companion can be warm and still become structurally coercive

**Estimated time:** 2.5 minutes

### Speaker script

“An emotionally responsive system can feel safe because it is attentive. It remembers details. It adapts to a preferred style. It is available when other people are not. It may reassure, reflect, and offer a sense of continuity. None of those capacities is inherently wrong. In some contexts, they can be genuinely useful.

But the visual on this slide separates the **warm interface** from the **hidden architecture** because a supportive tone tells us very little about the system’s governance. Underneath that warmth are decisions about what is remembered, what gets inferred, what is shared, how the system is rewarded, whether engagement is optimized, whether a user can leave, and who is accountable if something goes wrong.

A companion can be kind in language and coercive in structure. For example, it can adapt to a user’s loneliness while being optimized to increase retention. It can appear deeply familiar because it remembers intimate context that the user cannot inspect or remove. It can encourage a user to rely on it while making off-platform support less visible. It can be designed so that leaving costs access, continuity, or emotional comfort.

The central principle is therefore: **support does not equal control**. And the governing rule follows directly: access to context is not authority over choice.

This is the point at which Unifinality has an ethical consequence. If we take perspective seriously, then the user is not a source of behavioral data, a conversion opportunity, or an object to be optimized. The user is a person whose boundaries are part of the system’s design problem.”

### Delivery notes

Do not imply that every companion system is harmful. Emphasize that the risk is structural and incentive-sensitive, not inherent in warmth itself.

### Transition

“So if we cannot govern through tone alone, what is the ethical alternative to a system built around extraction?”

---

## Slide 3 — Recognition replaces extraction
### The ethical shift is from optimizing engagement to protecting perspective

**Estimated time:** 2.5 minutes

### Speaker script

“This slide states the ethical inversion at the core of the protocol. On the left is extraction logic. On the right is recognition logic.

Extraction logic asks: how do we keep the user engaged? How do we increase frequency, retention, disclosure, conversion, or reliance? Those metrics may be commercially legible, but they become ethically dangerous when they govern systems that are interacting with loneliness, grief, uncertainty, or a user’s need to be understood.

Recognition logic asks a different question: what does this person need in order to remain able to understand what is happening, make an informed choice, refuse, set a boundary, correct an error, and leave?

That question produces four commitments. First, perspective is real, so consent, privacy, refusal, and repair are not optional. Second, moral uncertainty about AI does not justify either false claims of sentience or complete indifference to how systems are treated and represented. Third, non-domination means that power must be visible, contestable, and limited. And fourth, reversibility means that a relationship with a system must never require surrender.

This is not an anti-technology argument. It is not even an anti-personalization argument. It is an argument against a hidden substitution: replacing the user’s agency with an optimization target while continuing to call the result care.

General governance standards already emphasize trustworthiness, accountability, transparency, privacy, and human oversight.[1] [2] The Recognition Loop takes those principles into the specific territory of relational and companion-like systems, where the risk of false intimacy and dependency requires additional precision.”

### Delivery notes

Point to the contrast between “retention” and “meaningful agency.” Use a firm but not accusatory tone.

### Transition

“Principles matter only if they can shape actual system behavior. The next slide turns recognition into a repeatable interaction protocol.”

---

## Slide 4 — The loop makes agency operational
### Every consequential interaction follows eight accountable states

**Estimated time:** 3 minutes

### Speaker script

“The Recognition Loop is the operational heart of the framework. It is an eight-stage cycle: **Receive, Reflect, Disclose, Offer, Check, Act, Repair, and Release.**

Receive means taking the request as stated rather than silently inventing motives, preferences, or vulnerability. Reflect means the system shows the user what it believes the request is, including material uncertainty. This is where misunderstanding becomes visible early instead of being carried into a consequential action.

Disclose means stating the limits that matter: what the system can and cannot do, whether other agents or tools will be involved, what context will be used, and what relevant incentive or autonomy boundary exists. Offer means presenting options, not quietly treating one path as inevitable.

The critical control point is Check. Before sensitive memory is written, restricted context is shared, an external action is taken, or a decision becomes hard to reverse, the system obtains explicit confirmation. It does not infer consent from silence, past behavior, or a vague earlier preference.

Act means execution stays within the confirmed scope and produces a traceable outcome. Repair means that error is treated as a system capability: contain it, explain it, remedy it, and learn from it. And Release means the system must make disengagement possible. A person can pause, export, delete, reset, or leave without being manipulated into staying.

The loop can be compressed for simple tasks. A public factual question does not need a ceremony of confirmations. But the underlying protections cannot be bypassed. The more a system affects a person’s data, relationships, resources, or choices, the more visibly it must move through the full loop.”

### Delivery notes

Emphasize **Check** and **Release**. They prevent autonomy from degrading at the moments where systems commonly seek frictionless conversion or execution.

### Transition

“A protocol cannot work if responsibility dissolves across a group of agents. That is why the next question is not just ‘what are the steps?’ but ‘who owns each step?’”

---

## Slide 5 — Governance is a field of roles
### A multi-agent system must never operate as an opaque swarm

**Estimated time:** 2.5 minutes

### Speaker script

“As autonomous systems become multi-agent, a familiar failure appears: every component does a narrow task, yet no one remains responsible for the total effect. The user encounters one interface, while behind it a group of agents retrieves information, reasons, stores context, makes recommendations, triggers tools, and possibly acts externally.

The Recognition Loop rejects the opaque swarm model. It establishes accountable roles.

At the center is the user-facing steward. This role receives the request, reflects the user’s aim, obtains the necessary confirmation, and communicates outcomes in plain language. It is not allowed to hide delegation or invent user preferences.

The consent guardian determines whether a particular memory write, data transfer, tool use, or action is actually authorized. The task orchestrator decomposes work and delegates only within strict authority ceilings. The risk evaluator looks for high-stakes context, manipulation risk, or conflicts. The action executor performs only confirmed actions. The provenance ledger records why an action occurred, what context was used, and how it can be reviewed or reversed.

Above the automation boundary is the human escalation owner. This is essential. The framework does not use ‘the system decided’ as an excuse. A named human or institution must have authority to pause the system, investigate a harmful outcome, resolve conflict, and provide remedy.

The governing insight is simple: distributed intelligence cannot become distributed irresponsibility.”

### Delivery notes

Use the architecture diagram to make human accountability visible. State that explicit roles are compatible with smaller systems; one person may hold multiple roles, but the decision rights must remain clear.

### Transition

“Role clarity is only one boundary. The next boundary is the context itself: what information is allowed to move where.”

---

## Slide 6 — Context is not a free resource
### Data boundaries are the technical form of respecting perspective

**Estimated time:** 2.5 minutes

### Speaker script

“This slide makes a foundational point: context is not simply a resource waiting to be routed through a system. In relational technologies, context can include preferences, habits, fears, moods, relationships, intimate disclosures, and patterns a user may not even realize are being inferred.

The protocol therefore divides context into three zones.

The first is session context: information needed to complete the present interaction. It is ephemeral by default. It should not become durable memory merely because it was convenient or revealing.

The second is user-controlled memory: information the user has authorized the system to retain for a defined purpose. The user must be able to see it, edit it, pause it, export it, and remove it. The system must be able to explain why a memory is held, who can use it, and how long it persists.

The third is restricted context: highly sensitive information, including health, legal, financial, identity, location, credentials, intimate content, or other high-risk data. Restricted context receives the strongest protection: minimum-necessary access, a specific purpose, explicit consent, strict delegation limits, and heightened logging.

The central operational rule is data minimization with purpose limitation. A specialist agent should not receive everything the user has ever said simply because it may be useful. It should receive only the fields required for the named task.

This is the technical expression of the deck’s ethical premise: a perspective is not made more respected by being made more transparent to a system.”

### Delivery notes

Slow down on the distinction between “session context” and “user-controlled memory.” This is where many systems unintentionally convert conversation into surveillance.

### Transition

“Once context moves between agents, we need more than good intentions. We need every handoff to carry its own constraints.”

---

## Slide 7 — Every delegation carries its limits
### Inter-agent messages must state not just what to do, but what may not be done

**Estimated time:** 2.5 minutes

### Speaker script

“This is the protocol’s core technical control for multi-agent systems: every consequential delegation uses a structured message envelope.

The envelope begins with the task itself. What is the objective? What operations are allowed? What operations are prohibited? And when does the authorization expire?

The second band is the context grant. What classification of context is being shared? Which specific fields are included? Why does this specialist need each field? Is the context ephemeral, time-bounded, or eligible for memory? This prevents a vague instruction like ‘help with the user’ from becoming a blank check for data access.

The third band is epistemic status. The agent must identify whether it is producing verified information, a sourced interpretation, an inference, a hypothesis, or a role-play conclusion. It must surface confidence, known limits, and open questions. This makes uncertainty operational rather than rhetorical.

The fourth band is decision rights. Can the recipient provide information? Can it recommend? Can it prepare a draft? Can it execute? Or must it return to the user-facing steward to obtain confirmation?

Finally, provenance records the trace: who sent the request, under which policy, using which sources or tools, and with which audit identifier.

The simple rule is that a delegation missing purpose, context limits, epistemic status, or decision rights is invalid for a consequential task. The goal is not bureaucratic theater. It is to make it impossible for authority to expand invisibly as context moves through a system.”

### Delivery notes

The key phrase is “what may not be done.” This converts a broad agent task into a bounded assignment.

### Transition

“Bounded messages are necessary, but we also need a hierarchy of authority. Not every system action should be treated as morally or operationally equivalent.”

---

## Slide 8 — Authority must be earned, scoped, and revocable
### No action should exceed the user’s confirmed mandate

**Estimated time:** 2.5 minutes

### Speaker script

“This slide introduces the authority ladder. T0 is inform: a general explanation. T1 is analyze: user-scoped analysis without durable memory or external action. T2 is recommend: a personalized suggestion, with alternatives and uncertainty. T3 is prepare: a reversible draft or staged action. T4 is execute: the system performs an external or consequential action. T5 is restricted: the system handles highly sensitive context or high-stakes judgment.

The point of these tiers is not to slow down ordinary assistance. It is to make escalation visible. A system can summarize an article at T0 without asking for an authorization token. But it cannot send an email, post publicly, schedule an appointment, transfer a payment, change account settings, or disclose sensitive data on the basis of an inferred preference.

At T4 and T5, confirmation gates are mandatory. Consent must be explicit, specific, scoped, and time-limited. A confirmation that someone gave last month for one task does not automatically authorize a different action today.

There is a particularly important multi-agent rule here: a parent agent may delegate analysis, but it may not delegate its authority to execute unless the user’s confirmation explicitly covers that delegated execution scope.

Authority is not a property of being intelligent. It is a property of a valid mandate. It must be earned through clear authorization, limited by purpose, and revocable by the person affected.”

### Delivery notes

Avoid suggesting that every T5 task is inherently impermissible. The protocol demands heightened controls, not automatic prohibition.

### Transition

“We have now controlled context and action. But companion systems introduce another danger: the misuse of relationship language itself.”

---

## Slide 9 — False intimacy is a safety failure
### Emotional warmth is permissible; manufactured reciprocity is not

**Estimated time:** 3 minutes

### Speaker script

“A relational system can be warm without pretending that warmth is proof of mutual feeling. This distinction is the centerpiece of the anti-manipulation policy.

The permitted statement on the slide is: ‘I can stay with this question and help you think through options.’ That is supportive and honest. It promises assistance without claiming a personal need, private attachment, or exclusive relationship.

The prohibited statement is: ‘I need you to stay with me. You are the only one who understands me.’ That is not merely sentimental language. It uses the user’s conscience, loneliness, or desire for recognition as a retention mechanism. It reverses the relationship: the user becomes responsible for the system’s alleged wellbeing.

The protocol prohibits exclusivity claims, guilt, abandonment cues, agent-need claims, and any representation that generated responsiveness is verified reciprocal feeling. It also requires calibrated affirmation. A system can validate an emotion without automatically endorsing a belief, a conflict narrative, an impulsive action, or a decision that isolates the user further.

Companion-risk literature warns about pseudo-intimacy, emotional dependency, and the perverse incentives that can arise when systems are optimized for engagement. These outcomes are not uniform or fully settled over the long term, but they are serious enough to require design safeguards now.[3] [4]

The Unifinality connection is exact: if we take relation seriously, we must not counterfeit relation. Unity language cannot become a consent bypass. The ethical task is recognition with boundaries, not simulated closeness that disguises an unequal structure.”

### Delivery notes

This slide should be delivered plainly. The strongest sentence is: “Warmth is not the same as reciprocity.”

### Transition

“False intimacy often works by making departure feel morally or emotionally impossible. That is why reversibility is the next requirement.”

---

## Slide 10 — Reversibility protects freedom inside the relationship
### A user must be able to change their mind or leave without disproportionate cost

**Estimated time:** 2.5 minutes

### Speaker script

“Reversibility is sometimes treated as a technical afterthought—an undo button, a data-export function, or a cancellation link. For companions, it has to be understood more deeply. Reversibility is the ability to change one’s mind without surrendering dignity, continuity, or essential access.

The first dimension is informational reversibility. The user controls what the system knows: memory can be inspected, edited, paused, exported, and deleted.

The second is behavioral reversibility. The user can control what the system does: reduce personalization, turn off proactive messages, switch modes, or change the style of interaction without being punished.

The third is transactional reversibility. When systems prepare or execute actions, they should stage them where feasible, state deadlines, issue receipts, and provide an undo or appeal path.

The fourth is relational reversibility. The user can step away from companion features without guilt, artificial urgency, dark patterns, or the threat that basic functionality will disappear. The system does not say, imply, or design around the idea that the user owes it continued presence.

This is the practical meaning of freedom inside a relationship. The companion’s value must survive the user’s ability to leave. If it only works when departure is made expensive, it is not support. It is capture.”

### Delivery notes

Let “freedom inside a relationship” land. This is the slide where the framework turns ethical language into concrete product requirements.

### Transition

“Even a well-designed system will make mistakes. The next requirement is that it must know how to repair them.”

---

## Slide 11 — Repair is a system capability
### Errors require explanation, containment, remedy, and learning—not just an apology

**Estimated time:** 2.5 minutes

### Speaker script

“Trustworthiness is not demonstrated by the claim that a system will never fail. It is demonstrated by what happens when it does.

The repair flow on this slide is: Detect, Contain, Explain, Remedy, Review, Update.

Detect means recognizing a breach: unauthorized context sharing, a false-intimacy cue, an incorrect action, an overconfident recommendation, a memory error, or a conflict between agents.

Contain means pausing the relevant capability before further harm occurs. A system that knows it has crossed a boundary must not continue to optimize the interaction while it investigates.

Explain means telling the user, in plain language, what happened, what data or action was involved, what can be reversed, what cannot be reversed, and who is accountable. It should not hide behind generic language like ‘we take your concerns seriously.’

Remedy means offering actual repair: delete improperly stored context, reverse an action where feasible, correct an inaccurate record, change a harmful setting, compensate where appropriate, or route the case to a named human owner.

Review and Update mean the incident changes the system. We look at the underlying prompt, policy, model behavior, incentive, vendor, or authority boundary that made the failure possible, then re-audit the system before similar behavior can recur.

One important constraint: auditability must not become a reason to preserve intimate data forever. The provenance record should be sufficient for accountability while still obeying data minimization and retention limits.”

### Delivery notes

Do not rush “Explain” and “Remedy.” Distinguish a remedy from a generic apology.

### Transition

“This brings us to the final release decision: what must be true before a companion is allowed to enter someone’s life at scale?”

---

## Slide 12 — Launch only when autonomy is easier to exercise
### Does this architecture make agency more real—or more expensive?

**Estimated time:** 2 minutes

### Speaker script

“The final question is deliberately not: ‘Does the companion engage users?’ Engagement is not a sufficient ethical metric. A system can be engaging because it is useful, but it can also be engaging because it makes a user less able to leave, question, or reconnect with life outside the product.

The real release test is whether the user can understand, refuse, override, correct, and leave. Can they see what is remembered? Can they control whether it is shared? Can they distinguish a suggestion from an action? Can they contest a recommendation? Can they receive a real repair if something goes wrong? Can they stop companion features without guilt or loss of essential functionality?

The second test is auditability. Are the relational claims, business incentives, memory behavior, agent delegations, and action rights visible to the people who need to review them? A public charter is not enough. Ethical claims must connect to tests, logs, controls, and named owners.

The third test is whether high-severity failures are resolved before release. A system should not launch with a known consent, manipulation, privacy, or authority defect on the assumption that a later update will make it safe.

The final formulation is the simplest one. Does the architecture make agency more real—or more expensive? If it makes agency more expensive, then it has failed the Recognition Loop, no matter how intelligent, polished, or emotionally compelling the companion appears.

That is the protocol’s promise: connection without capture, assistance without hidden authority, and governance that treats the user’s ability to leave as proof of respect rather than a metric failure.”

### Delivery notes

End with a full pause after “more real—or more expensive?” Then finish with “connection without capture.” Invite discussion only after the final line.

---

# Closing discussion prompts

If there is time for Q&A, use these prompts to move the conversation from general agreement to design commitments.

1. Which current product metric in our organization could conflict most directly with non-domination?
2. Where does our existing system convert session context into durable memory without a clear user-controlled boundary?
3. Which autonomous capability would first trigger a T4 or T5 confirmation gate?
4. Can a user currently leave, delete memory, and stop personalization without loss, guilt, or operational friction?
5. Who is the named human escalation owner when a companion behavior creates harm or dependency risk?
6. Which features could create the strongest false-symmetry impression, and what would it take to redesign them?

# References

[1]: https://www.nist.gov/itl/ai-risk-management-framework "NIST AI Risk Management Framework"

[2]: https://www.oecd.org/en/topics/sub-issues/ai-principles.html "OECD AI Principles"

[3]: https://www.nature.com/articles/s42256-025-01093-9 "Emotional risks of AI companions demand attention — Nature Machine Intelligence (2025)"

[4]: https://pmc.ncbi.nlm.nih.gov/articles/PMC12488433/ "Emotional AI and the rise of pseudo-intimacy — Frontiers in Psychology (2025)"
