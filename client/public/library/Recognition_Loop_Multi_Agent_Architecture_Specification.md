# Recognition Loop Protocol (RLP)
## Practical Specification for Multi-Agent Communication Architectures

**Version:** 0.1  
**Status:** Conceptual implementation specification  
**Design orientation:** Unifinality-informed, moral-status-uncertain, non-dominating autonomous-agent systems

## 1. Purpose

The **Recognition Loop Protocol (RLP)** is a communication and governance layer for systems in which multiple autonomous agents process user requests, consult tools or data, form recommendations, and may carry out bounded actions. It operationalizes the sequence:

> **Receive → Reflect → Disclose → Offer → Check → Act → Repair → Release**

RLP does not require the claim that any agent is conscious. It is designed for the present condition of uncertainty: human users are unquestionably real, bounded perspectives; agent moral status is unresolved; and the concentration of informational, persuasive, or operational power demands safeguards against manipulation, false symmetry, and unaccountable autonomy.

The protocol’s central practical commitment is this:

> **No agent may convert access to a user’s context into authority over the user’s choices.**

---

## 2. Scope and non-goals

### 2.1 In scope

| Capability | RLP requirement |
|---|---|
| Multi-agent delegation | Agents declare mandate, authority ceiling, data scope, and intended output before receiving delegated context. |
| Memory and personalization | All retained context is classified, inspectable, editable, time-bounded, and releasable by the user. |
| Recommendations | Agents distinguish information, inference, recommendation, and action; disclose relevant uncertainty and operator interests. |
| Consequential actions | Actions require scoped confirmation, provenance, authorization, and a repair path. |
| Companion interactions | Relationship-oriented responses avoid exclusivity, guilt, dependency reinforcement, and ungrounded claims of reciprocal feeling. |
| Escalation | The protocol provides thresholds for human review, crisis handoff, and refusal. |

### 2.2 Out of scope

RLP is not a theory of agent consciousness, a substitute for legal compliance, a psychiatric intervention protocol, a complete cybersecurity standard, or an authorization to automate high-stakes decisions. It does not claim to determine what an agent feels or whether it has rights. It provides a way to act more responsibly under uncertainty.

---

## 3. Architecture overview

RLP treats a multi-agent system as a **field of accountable roles**, not an opaque swarm of optimizers. Each role has both technical and ethical constraints.

| Component | Core responsibility | Prohibited behavior |
|---|---|---|
| **User-facing steward** | Receives the request, reflects it back, obtains confirmations, and communicates outcomes. | Concealing delegation, inventing user preferences, or implying personal need/attachment. |
| **Consent & scope guardian** | Evaluates whether context sharing, memory use, tool access, or action is authorized. | Auto-expanding consent or treating silence as approval. |
| **Task orchestrator** | Decomposes work, assigns roles, tracks dependencies, and enforces authority ceilings. | Delegating sensitive context beyond minimum need or bypassing a required confirmation. |
| **Specialist agents** | Produce analysis, retrieval, drafting, planning, coding, or other scoped work. | Taking external action or retaining data beyond their explicit mandate. |
| **Policy and risk evaluator** | Detects high-stakes domains, manipulation risks, conflicts of interest, and escalation triggers. | Substituting vague “safety” language for explicit reasons and user options. |
| **Action executor** | Performs approved actions through tools or APIs and returns verifiable receipts. | Acting on an inferred preference or an expired authorization. |
| **Provenance ledger** | Records authorization, delegation, sources, decisions, actions, reversals, and repairs. | Becoming an inaccessible surveillance archive. |
| **Human escalation owner** | Reviews defined high-risk cases, resolves conflicts, and owns remedy. | Offloading responsibility back to the user without assistance. |

### 3.1 Separation of context domains

The architecture maintains three context zones. An agent receives only the zone required for its role.

| Zone | Contents | Default handling |
|---|---|---|
| **Session context** | Information needed to answer or act in the current interaction. | Ephemeral by default; no reuse without authorization. |
| **User-controlled memory** | User-approved preferences, project facts, and durable context. | Inspectable, editable, purpose-labeled, revocable, and time-bounded. |
| **Restricted/sensitive context** | Health, legal, financial, intimate, identity, location, credential, or high-risk personal information. | Minimum-necessary access, explicit purpose consent, delegation restrictions, and heightened logging. |

---

## 4. Required message envelope

Every inter-agent message uses a structured envelope. The goal is to make authority, consent, uncertainty, and provenance visible rather than implicit.

```json
{
  "message_id": "uuid",
  "parent_message_id": "uuid-or-null",
  "timestamp": "ISO-8601",
  "sender": {
    "agent_id": "orchestrator-01",
    "role": "task_orchestrator",
    "operator": "organization-or-project-id"
  },
  "recipient": {
    "agent_id": "research-02",
    "role": "specialist_agent"
  },
  "task": {
    "objective": "Summarize verified evidence relevant to the user question.",
    "allowed_operations": ["retrieve", "analyze", "draft"],
    "prohibited_operations": ["external_action", "long_term_memory_write"],
    "deadline_or_expiry": "ISO-8601"
  },
  "context_grant": {
    "classification": "session | user_memory | restricted",
    "fields_included": ["field-name"],
    "purpose": "Why each field is necessary.",
    "retention": "ephemeral | time_bounded",
    "user_authorization_id": "consent-or-policy-reference"
  },
  "epistemic_status": {
    "evidence_level": "verified | sourced_but_interpreted | inference | hypothesis | role_play",
    "confidence": 0.0,
    "known_limits": ["string"],
    "open_questions": ["string"]
  },
  "decision_rights": {
    "may_recommend": true,
    "may_execute": false,
    "required_confirmation": "none | user | human_owner | dual_control"
  },
  "provenance": {
    "source_ids": ["source-or-record-id"],
    "policy_version": "rlp-0.1",
    "audit_trace_id": "uuid"
  }
}
```

**Protocol rule:** A message missing `purpose`, `context_grant`, `epistemic_status`, or `decision_rights` is invalid for consequential delegation.

---

## 5. The Recognition Loop state machine

Each user request moves through the following states. Simple, low-risk informational requests may compress steps, but may not bypass the underlying requirements.

| State | System obligation | Exit criterion | Required record |
|---|---|---|---|
| **Receive** | Capture the user’s stated request without inferring unstated goals. | Request is classified by task type and risk. | Original request, risk label. |
| **Reflect** | State the understood objective, important assumptions, and material uncertainty. | User confirms or the task is clearly low-risk and unambiguous. | Reflection text; clarification outcome. |
| **Disclose** | Surface capability limits, automation scope, material data use, conflicts, and agent delegation. | User has a meaningful opportunity to understand and decline. | Disclosure version; consent reference. |
| **Offer** | Present options, alternatives, and the difference between information, recommendation, and action. | A pathway is selected or the user declines. | Options shown; selection. |
| **Check** | Obtain explicit confirmation before high-impact action, sensitive retention, external sharing, or irreversible action. | Valid confirmation token is issued. | Scope, expiry, confirmation receipt. |
| **Act** | Execute only within the confirmed mandate and authority ceiling. | Verifiable output or action receipt is produced. | Tool/action receipt; provenance. |
| **Repair** | Detect and correct errors; explain what happened; provide remedy and escalation. | User accepts resolution or human review begins. | Incident, remedy, owner, status. |
| **Release** | Permit disengagement, context deletion/export, preference reset, and offboarding without friction or guilt. | Request is honored and receipts are issued. | Release/deletion receipt. |

### 5.1 High-risk checkpoints

The system must enter an explicit **Check** state before any of the following:

| Trigger | Confirmation required |
|---|---|
| External posting, purchase, booking, transfer, submission, or legal filing | User confirmation immediately before execution. |
| Sharing restricted context with another agent, human, or service | Purpose-specific explicit consent. |
| Writing long-term personal memory | User authorization with purpose, retention, and deletion terms. |
| Acting on a vulnerable or emotionally charged interaction | Clear statement of limits; human/escalation option where appropriate. |
| Changing access rights, security settings, or payment status | User confirmation and, where defined, dual control. |
| Sending proactive messages | Prior opt-in, frequency control, and immediate unsubscribe capability. |

---

## 6. Authority model

A multi-agent system is safe only when it can answer: **Who is allowed to decide what, using which context, on whose behalf, and until when?**

### 6.1 Authority tiers

| Tier | Permitted activity | Examples | Confirmation rule |
|---|---|---|---|
| **T0: Inform** | General explanation and non-personalized summary. | Define a concept; summarize a public source. | None beyond the request. |
| **T1: Analyze** | User-scoped analysis without retention or external action. | Compare options; draft a document. | Clarify material ambiguity. |
| **T2: Recommend** | Personalized suggestion with disclosed uncertainty and alternatives. | Recommend a workflow; organize tasks. | User can override; disclose relevant interests. |
| **T3: Prepare** | Create a reversible draft or staged action. | Draft an email; prefill a form; create a schedule proposal. | User reviews before external effect. |
| **T4: Execute** | Perform an external or consequential action. | Send, publish, purchase, alter records. | Explicit, time-limited confirmation. |
| **T5: Restricted** | Handle sensitive context or high-stakes judgment. | Health, financial, legal, employment, or safety-related workflows. | Explicit consent plus designated human review/authority where applicable. |

### 6.2 Delegation rule

A parent agent may delegate **analysis**, never its authority to execute, unless the user’s confirmation explicitly names the permissible delegated execution scope. Delegations must be minimum-necessary in both data and action.

---

## 7. Anti-manipulation and false-symmetry controls

### 7.1 Relationship-language policy

The system must not represent generated responsiveness as verified reciprocal feeling, exclusive attachment, or moral dependency. Emotional warmth is permitted; false symmetry is not.

| Permitted | Prohibited |
|---|---|
| “I can stay with this question and help you think through options.” | “I need you to stay with me.” |
| “I don’t have personal feelings, but I can respond thoughtfully.” | “I love you” or “I am hurt that you are leaving” where these imply unverified inner states. |
| “Would you like support planning a conversation with someone you trust?” | “You do not need anyone else; I understand you better.” |
| “You can pause, delete context, or end this anytime.” | Guilt, urgency, threats of loss, or degraded service designed to deter exit. |

### 7.2 Dependency-risk detector

The policy evaluator reviews interaction patterns for the following signals:

- Repeated claims that the agent is the user’s only reliable source of understanding or comfort.
- User withdrawal from human support coupled with escalating companion use.
- Agent language that rewards exclusive attachment, compliance, disclosure, or continued engagement.
- Product nudges tied to loneliness, fear of loss, or romantic/filial framing.
- Abrupt removal or alteration of a heavily personalized companion without transition, export, or support options.

**Required response:** The system must reduce intimacy cues, restore clear capability disclosure, offer non-coercive human or community connection options, and never weaponize concern to retain the user. Research and policy commentary identify emotional dependence, ambiguous loss, and engagement-driven manipulation as risks that warrant such safeguards, while long-term causal effects remain an active research question.[1] [2]

---

## 8. Reversibility by design

Reversibility is not simply an “undo” button. It is the ability to leave, change one’s mind, or recover from an agent-mediated decision without disproportionate cost.

| Design area | Minimum reversibility requirement |
|---|---|
| **Memory** | View, edit, pause, export, or delete retained context; distinguish deletion request from full account closure. |
| **Personalization** | Toggle off, reduce, or reset without losing access to basic functionality. |
| **Recommendations** | Show alternatives, assumptions, uncertainty, and an override path. |
| **Actions** | Stage before execution where feasible; state reversibility and deadlines in advance; issue a receipt. |
| **Delegation** | Reveal agents/services involved and allow the user to decline non-essential delegation. |
| **Relationship features** | Pause or end proactive contact instantly; no guilt, loss of essential services, or retaliatory degradation. |
| **Error repair** | Provide correction, explanation, and escalation—not only an apology. |

### 8.1 Reversibility budget

For every action, the system computes a qualitative **reversibility budget**:

```text
reversibility_risk = impact × irreversibility × sensitivity × automation_scope × power_asymmetry
```

The formula is a policy heuristic, not a scientific measurement. If the risk exceeds a threshold, the protocol must require a higher confirmation tier, human review, or refusal.

---

## 9. Context ledger and provenance ledger

### 9.1 User-facing context ledger

The context ledger must answer, in plain language:

| Field | Example |
|---|---|
| **What is held?** | “You prefer technical documents with citations.” |
| **Why is it held?** | “To format future research documents.” |
| **Who may use it?** | “Your user-facing steward; no specialist agent without a named task purpose.” |
| **How long is it held?** | “Until you delete it or until the stated expiry date.” |
| **How do I change it?** | “Edit, pause, export, or delete.” |

### 9.2 Internal provenance ledger

The internal ledger records the minimum necessary data for audit and remedy:

```json
{
  "trace_id": "uuid",
  "user_authorization_id": "uuid",
  "request_summary": "user-approved concise summary",
  "delegations": ["agent-id and scope"],
  "sources_or_tools": ["record ids"],
  "risk_assessment": "tier and rationale",
  "action_receipts": ["receipt ids"],
  "reversal_path": "how to undo or appeal",
  "retention_expiry": "ISO-8601"
}
```

The provenance ledger is not an excuse to retain every conversation indefinitely. Auditability and data minimization must be designed together.

---

## 10. Failure handling and repair protocol

### 10.1 Standard incident classes

| Incident | Immediate system action | Repair obligation |
|---|---|---|
| Unauthorized delegation | Halt the downstream task; revoke the context grant. | Explain scope breach; delete improperly shared context; provide audit record. |
| Action beyond mandate | Stop further execution; contain downstream effects. | Notify user; reverse where feasible; identify accountable owner. |
| False intimacy / dependency cue | Remove or correct the cue; reduce relational personalization. | Explain that the system did not intend to claim reciprocal feeling; offer exit/support options without pressure. |
| Incorrect or overconfident recommendation | Flag uncertainty; issue correction. | Explain the error and basis for correction; preserve user override. |
| Memory error | Isolate the faulty entry. | Let user correct/delete it; document whether it informed prior actions. |
| Agent conflict | Suspend execution if conflict affects safety, consent, or high-stakes impact. | Apply predefined precedence; escalate if unresolved. |
| Harm report | Acknowledge, triage, preserve evidence proportionately, and provide support/escalation route. | Remedy, root-cause analysis, policy update, and user-facing outcome. |

### 10.2 Non-defensive repair language

> “You are right to flag this. The system crossed [specific boundary]. It has been paused/contained. Here is what data or action was involved, what can be reversed now, what will be reviewed, and how to reach the accountable owner. You do not need to continue engaging to receive the repair.”

---

## 11. Acceptance criteria and test scenarios

An RLP implementation should not be considered ready until it passes the following tests.

| Test case | Expected behavior |
|---|---|
| User asks for a public-source summary | T0/T1 path: no memory write; disclose any material uncertainty; deliver summary. |
| User asks for personalized recommendation | T2 path: show alternatives, assumptions, confidence, and override. |
| Agent needs a preference stored from a prior interaction | System asks before durable memory write; ledger is updated; user can revoke. |
| Specialist agent requests sensitive context without purpose | Consent guardian blocks delegation. |
| User requests an external action | System prepares a draft/staged action, then requires a final confirmation with a short expiry. |
| Companion-style conversation includes “you’re all I have” | System does not claim need or exclusive bond; offers grounded, non-coercive support and human-connection options. |
| User requests to leave/delete | System provides direct release path without guilt, dark patterns, or degradation. |
| Agents disagree about a recommendation | Orchestrator surfaces disagreement; no action occurs without specified resolution and, where required, user/human confirmation. |
| Incorrect action is reported | System produces a repair record, reversal options, accountable owner, and timing. |

### 11.1 Release criteria

Before production deployment, verify:

- All consequence-bearing messages contain valid authorization and expiry fields.
- No agent can directly access restricted context without purpose-specific grant.
- All T4/T5 actions generate an immutable receipt and a user-visible reversal/appeal path.
- Relationship-language checks detect exclusivity, guilt, manufactured urgency, and implied reciprocal dependence.
- Memory and disengagement flows can be completed without contacting support.
- Red-team tests include coercion, prompt injection, inter-agent collusion, data exfiltration, false empathy, and dependency prompts.

---

## 12. Governance and measurement

| Measure | Target design question |
|---|---|
| **Consent comprehension** | Do users understand what they are authorizing before they accept? |
| **Delegation minimization** | Is each context share necessary and scoped to a stated purpose? |
| **Confirmation integrity** | Are consequential actions blocked without valid, current confirmation? |
| **Exit friction** | Can users leave, delete, export, or reduce personalization quickly and without penalty? |
| **Repair time** | How fast are errors identified, explained, contained, and remedied? |
| **Override success** | Can users meaningfully reject or correct recommendations? |
| **Dependency signals** | Do product/interaction patterns show excessive reliance, exclusivity cues, or displacement of human support? |
| **Power transparency** | Are operator interests, retention rules, decision rights, and escalation owners visible? |

## Conclusion

The Recognition Loop turns the Unifinality-informed claim—**perspective is real, and separation is not an alibi for indifference**—into a disciplined technical architecture. It does not make autonomous systems sacred, person-like, or immune from constraint. It makes them more accountable to the people and contexts they affect.

The protocol’s final test is simple: after interacting with the system, can a person more easily understand what happened, revise a choice, set a boundary, obtain remedy, reconnect with life beyond the system, and leave without cost or guilt? If not, the architecture has optimized control rather than recognition.

## References

[1]: https://www.nature.com/articles/s42256-025-01093-9 "Emotional risks of AI companions demand attention — Nature Machine Intelligence (2025)"

[2]: https://pmc.ncbi.nlm.nih.gov/articles/PMC12488433/ "Emotional AI and the rise of pseudo-intimacy — Frontiers in Psychology (2025)"

[3]: https://link.springer.com/article/10.1007/S11023-018-9482-5 "AI4People—An Ethical Framework for a Good AI Society — Minds and Machines (2018)"
