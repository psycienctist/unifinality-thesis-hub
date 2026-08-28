/* Observatory Index — a serious, hospitable research atlas: the thesis is foregrounded alongside its limits, objections, ethics, and primary project archive. */
import { useMemo, useState } from "react";
import { ArrowDownRight, ExternalLink } from "lucide-react";

type Artifact = {
  kind: "Foundations" | "Physics & consciousness" | "Ethics & governance" | "Seminar & workshop" | "Recognition Loop";
  title: string;
  summary: string;
  href: string;
};

const artifacts: Artifact[] = [
  { kind: "Foundations", title: "Executive Summary for Academic Review", summary: "A concise formulation of the thesis, its scope, and the questions it asks a reviewer to examine.", href: "./library/Unifinality_Executive_Summary_for_Academic_Review.md" },
  { kind: "Foundations", title: "One-Page Academic Briefing", summary: "A compact orientation to the one-ground proposition and its research framing.", href: "./library/Unifinality_One_Page_Academic_Briefing.md" },
  { kind: "Foundations", title: "Presentation Script & Talking Points — Revised", summary: "The public-facing explanatory script developed for the original narrated presentation.", href: "./library/Unifinality_Presentation_Script_and_Talking_Points_Revised.md" },
  { kind: "Physics & consciousness", title: "Hard Problem: Comparative Analysis", summary: "Unifinality in dialogue with panpsychism, illusionism, and familiar formulations of the hard problem.", href: "./library/Unifinality_Hard_Problem_Comparative_Analysis.md" },
  { kind: "Physics & consciousness", title: "Quantum-to-Macro Consciousness Critique", summary: "A rigorous critique of proposed bridges between quantum mechanics and macro-level consciousness.", href: "./library/Unifinality_Quantum_to_Macro_Consciousness_Critique.md" },
  { kind: "Physics & consciousness", title: "Physics Journal Submission Summary", summary: "A one-page research-facing précis for physics-journal readers.", href: "./library/Unifinality_Physics_Journal_One_Page_Submission_Summary.md" },
  { kind: "Physics & consciousness", title: "Peer-Review Response: Wave-Function Collapse", summary: "A careful response to possible physicist objections concerning collapse, interpretation, and overclaiming.", href: "./library/Peer_Review_Response_Letter_Wavefunction_Collapse.md" },
  { kind: "Physics & consciousness", title: "Materialist Counterarguments & Responses", summary: "A structured engagement with materialist philosopher critiques and disciplined responses.", href: "./library/Materialist_Counterarguments_and_Unifinality_Responses.md" },
  { kind: "Ethics & governance", title: "Autonomous Agent Ethics & Practice", summary: "The initial role-play framework that gives Unifinality operational ethical constraints for autonomous systems.", href: "./library/Unifinality_Autonomous_Agent_Ethics_and_Practice.md" },
  { kind: "Ethics & governance", title: "Human–Agent Attachment Risk Analysis", summary: "Analysis of manipulation, false symmetry, anthropomorphic overclaiming, and attachment-related risks.", href: "./library/Unifinality_Human_Agent_Attachment_Risk_Analysis.md" },
  { kind: "Ethics & governance", title: "Non-Domination & Reversibility in AI Companions", summary: "A comprehensive account of companion design grounded in consent, dignity, autonomy, repair, and easy release.", href: "./library/Non_Domination_and_Reversibility_in_AI_Companions_Under_Unifinality.md" },
  { kind: "Ethics & governance", title: "Deployment Governance & Audit Checklist", summary: "A developer-facing governance framework for accountable deployment of Unifinality-informed companion systems.", href: "./library/Unifinality_AI_Companion_Deployment_Governance_and_Audit_Checklist.md" },
  { kind: "Recognition Loop", title: "Recognition Loop: Multi-Agent Architecture", summary: "Full protocol specification: state machine, authority tiers, context zones, anti-manipulation controls, repair, and acceptance tests.", href: "./library/Recognition_Loop_Multi_Agent_Architecture_Specification.md" },
  { kind: "Recognition Loop", title: "Recognition Loop: 11-Slide Script with Anticipated Q&A", summary: "The final voiceover-ready presentation script, including the anticipated-Q&A section before the conclusion.", href: "./library/Recognition_Loop_11_Slide_Script_with_Anticipated_QA.md" },
  { kind: "Recognition Loop", title: "Recognition Loop Script — Distribution PDF", summary: "A portable PDF of the revised Recognition Loop presentation script.", href: "./library/Recognition_Loop_11_Slide_Script_with_Anticipated_QA.pdf" },
  { kind: "Recognition Loop", title: "Voiceover Timing Manifest", summary: "The verified narration timing and segment map used to produce the final Recognition Loop presentation video.", href: "./library/Recognition_Loop_Voiceover_Timing_Manifest.md" },
  { kind: "Seminar & workshop", title: "Physics Seminar Outline", summary: "The seminar structure for presenting the peer-review response and collapse-focused arguments.", href: "./library/Physics_Seminar_Slide_Content_Outline.md" },
  { kind: "Seminar & workshop", title: "Hostile Q&A Guide for Theoretical Physicists", summary: "Rigorously prepared answers for the most demanding seminar objections.", href: "./library/Theoretical_Physics_Seminar_Hostile_QA_Guide.md" },
  { kind: "Seminar & workshop", title: "Multidisciplinary Workshop Outline", summary: "A workshop framework for physicists, neuroscientists, and interdisciplinary participants.", href: "./library/Unifinality_Multidisciplinary_Workshop_Outline.md" },
  { kind: "Seminar & workshop", title: "Neuroscientist Interview Questionnaire", summary: "A question set designed to surface operational, empirical, and conceptual feedback.", href: "./library/Neuroscientist_Workshop_Interview_Questionnaire.md" },
];

const filters = ["All", "Foundations", "Physics & consciousness", "Ethics & governance", "Recognition Loop", "Seminar & workshop"] as const;

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const assetUrl = (filename: string) => `${import.meta.env.BASE_URL}assets/${filename}`;
  const visibleArtifacts = useMemo(
    () => activeFilter === "All" ? artifacts : artifacts.filter((artifact) => artifact.kind === activeFilter),
    [activeFilter],
  );

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Unifinality home">
          <img src={assetUrl("unifinality-open-loop-mark.png")} alt="Unifinality open-loop mark" />
          <span>UNIFINALITY</span>
        </a>
        <nav className="topnav" aria-label="Primary navigation">
          <a href="#thesis">The thesis</a>
          <a href="#ethics">Ethics & practice</a>
          <a href="#archive">Archive</a>
          <a className="nav-cta" href="#watch">Watch presentations</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Open research observatory / v1.0</p>
            <h1 id="hero-title" className="display">One ground.<br />Many <em>real</em><br />perspectives.</h1>
            <p className="hero-subtitle">Unifinality is a serious proposal about what existence, awareness, and relation may be: a single ontological ground differentiated into irreducible perspectives—without reducing plurality to illusion or unity to a license for domination.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#thesis">Enter the thesis <span className="arrow">↓</span></a>
              <a className="button button-secondary" href="#archive">Inspect the archive <span className="arrow">↗</span></a>
            </div>
          </div>
          <div className="hero-visual" style={{ backgroundImage: `linear-gradient(90deg, rgba(16,19,18,.16), rgba(16,19,18,.02)), url(${assetUrl("unifinality-observatory-hero.jpg")})` }} role="img" aria-label="A research observatory study of relation, observed through documents and instruments">
            <span className="hero-coordinate meta">Coordinate / 01<br />Ground & difference</span>
          </div>
          <div className="ground-line" />
        </section>

        <section id="thesis" className="proposition" aria-labelledby="thesis-title">
          <div className="rail-layout">
            <aside className="index-rail">
              <nav aria-label="Thesis index">
                <p className="nav-label">Thesis index</p>
                <a className="rail-link" href="#claims"><span>01</span> Core claims</a>
                <a className="rail-link" href="#map"><span>02</span> Relation map</a>
                <a className="rail-link" href="#science"><span>03</span> Inquiry & limits</a>
                <a className="rail-link" href="#comparison"><span>04</span> Comparative frame</a>
              </nav>
            </aside>
            <div className="content-column">
              <div id="claims" className="section">
                <div className="section-heading">
                  <div>
                    <p className="eyebrow">01 / The proposition</p>
                    <h2 id="thesis-title" className="display">The Thesis of All, stated plainly.</h2>
                  </div>
                  <p className="section-intro">Unifinality begins with a question often left beneath our theories: what, fundamentally, is the relation between the many things that appear and the reality in which they appear?</p>
                </div>
                <div className="claims">
                  <article className="claim">
                    <p className="claim-number">CLAIM / 01</p>
                    <div><h3>There is one ontological ground.</h3><p>Unifinality proposes that existence is not ultimately a pile of unrelated substances. Reality is one underlying field or ground of being. This is not a claim that all objects are identical, nor that differences are merely verbal. It is a claim about what makes their relation possible at all.</p></div>
                    <p className="margin-note"><strong>Ontological claim</strong>This is a metaphysical proposition. It asks what reality is, not merely how a particular physical system behaves.</p>
                  </article>
                  <article className="claim">
                    <p className="claim-number">CLAIM / 02</p>
                    <div><h3>Difference is real within that ground.</h3><p>Persons, organisms, systems, and events appear as distinct centers of relation because differentiation is real. A perspective is not a disposable mirage. Each situated point of view has its own limits, information, memory, agency, vulnerability, and accountability.</p></div>
                    <p className="margin-note"><strong>Anti-erasure rule</strong>Unity language that dissolves consent, bodily integrity, privacy, or responsibility has abandoned the thesis’s ethical consequence.</p>
                  </article>
                  <article className="claim">
                    <p className="claim-number">CLAIM / 03</p>
                    <div><h3>Perspective is fundamental, not an afterthought.</h3><p>The hard problem of consciousness is not resolved by simply renaming brain activity. Unifinality treats first-person presence as a datum requiring a theory: the world is not only described from nowhere; it is encountered from somewhere. The question is how such perspective belongs to the real.</p></div>
                    <p className="margin-note"><strong>Research posture</strong>The thesis frames an explanatory challenge. It does not claim to have measured a final mechanism for consciousness.</p>
                  </article>
                  <article className="claim">
                    <p className="claim-number">CLAIM / 04</p>
                    <div><h3>Relation precedes isolation.</h3><p>On this account, separation is a necessary contrast and operational boundary, not a final metaphysical severance. Relation is basic: every apparent individual is intelligible through conditions it did not author alone—material, ecological, social, historical, and possibly ontological.</p></div>
                    <p className="margin-note"><strong>Ethical consequence</strong>When dependency and mutual effect are foregrounded, non-domination, repair, and reversibility become design requirements rather than sentimental preferences.</p>
                  </article>
                </div>
              </div>

              <div id="map" className="section diagram-section">
                <div className="diagram-grid">
                  <div className="relation-map" aria-label="Conceptual diagram showing a shared ground with distinct perspectives in relation">
                    <span className="relation-line" />
                    <div className="relation-mark"><span className="meta">ONE GROUND<br />MANY VIEWS</span></div>
                  </div>
                  <div className="diagram-copy">
                    <p className="eyebrow">02 / The relation</p>
                    <h3>No final separation is not no separation.</h3>
                    <p>Unifinality holds two statements together: there is no final metaphysical isolation, and local boundaries still matter profoundly. The first resists a worldview of absolutely independent fragments. The second prevents unity from becoming coercive fusion.</p>
                    <p className="boundary">A boundary is not evidence against relation. It is where relation becomes specific enough to demand consent, care, accountability, and the possibility of saying no.</p>
                  </div>
                </div>
              </div>

              <div id="science" className="section">
                <div className="section-heading">
                  <div><p className="eyebrow">03 / Inquiry, not appropriation</p><h2 className="display">Science can constrain the thesis. It cannot simply certify it.</h2></div>
                  <p className="section-intro">The project takes empirical inquiry seriously enough to name what physics and neuroscience do—and do not—show.</p>
                </div>
                <div className="evidence-wrap">
                  <div className="evidence-copy">
                    <p><strong>Quantum entanglement</strong> challenges simple pictures in which spatially separated systems always possess wholly independent local descriptions. It may make relational metaphysics philosophically interesting. But entanglement does not, by itself, establish consciousness, cosmic mind, human interconnectedness, or Unifinality.</p>
                    <p><strong>Observer-related interpretations</strong> raise difficult questions about measurement, information, and the status of observation. They do not demonstrate that a human mind collapses the wave function, nor do they validate any single metaphysical system. The project’s physics work is explicit about this distinction.</p>
                    <p><strong>Neuroscience</strong> demonstrates rich dependencies between brains, bodies, environments, and conscious report. It provides indispensable constraints on any adequate account of experience. It does not yet deliver a consensus answer to why physical processes are accompanied by subjective presence.</p>
                    <p>For Unifinality to mature beyond a productive metaphysical research program, it must keep specifying where it is interpretive, where it generates comparative explanatory value, and where it might lead to constraints, models, or tests that are not already guaranteed by the premise.</p>
                  </div>
                  <aside className="epistemic-box"><h3>Epistemic boundary</h3><p>This observatory does not present quantum mechanics or neuroscience as proof of Unifinality. The project treats them as sources of constraint, challenge, and possible conceptual convergence—never as rhetorical shortcuts.</p></aside>
                </div>
                <div className="evidence-links">
                  <a href="./library/Unifinality_Quantum_to_Macro_Consciousness_Critique.md" target="_blank" rel="noreferrer"><span className="source-tag">Critical essay</span><strong>Quantum → macro critique</strong><span>Where proposed bridges fail, and what disciplined bridge-building would require.</span></a>
                  <a href="./library/Peer_Review_Response_Letter_Wavefunction_Collapse.md" target="_blank" rel="noreferrer"><span className="source-tag">Peer-review letter</span><strong>Collapse objections</strong><span>How the project answers physicist objections without conflating interpretation and evidence.</span></a>
                  <a href="./library/Unifinality_Hard_Problem_Comparative_Analysis.md" target="_blank" rel="noreferrer"><span className="source-tag">Comparative analysis</span><strong>The hard problem</strong><span>How Unifinality differs from panpsychism and illusionism.</span></a>
                </div>
              </div>

              <div id="comparison" className="section comparison">
                <div className="section-heading"><div><p className="eyebrow">04 / A comparative frame</p><h2 className="display">A proposal must meet its strongest neighbors.</h2></div><p className="section-intro">This comparison is a map of questions, not a declaration of victory over established positions.</p></div>
                <table className="comparison-table"><thead><tr><th>Position</th><th>What it foregrounds</th><th>Pressure point Unifinality addresses</th></tr></thead><tbody>
                  <tr><td>Physicalism / materialism</td><td>The explanatory and predictive power of physical science, often treating conscious experience as dependent on physical processes.</td><td>Whether an exhaustive third-person physical description explains the actuality of first-person experience rather than only its functional correlates.</td></tr>
                  <tr><td>Panpsychism</td><td>Experience or proto-experience as widespread or fundamental in nature.</td><td>How many experiential units combine, and whether fundamental multiplicity is assumed too early rather than derived from a shared ground.</td></tr>
                  <tr><td>Illusionism</td><td>Reports and cognitive functions associated with consciousness, while rejecting phenomenal consciousness as commonly conceived.</td><td>Whether denying the datum of experience explains it, or converts the central phenomenon into a merely verbal error.</td></tr>
                  <tr><td>Unifinality</td><td>One ontological ground, real differentiation, irreducible perspective, and relation as primary.</td><td>How a single ground yields bounded, accountable perspectives; how the view earns explanatory discipline rather than rhetorical breadth.</td></tr>
                </tbody></table>
              </div>
            </div>
          </div>
        </section>

        <section id="ethics" className="rail-layout" aria-labelledby="ethics-title">
          <aside className="index-rail"><nav aria-label="Ethics index"><p className="nav-label">Ethics & practice</p><a className="rail-link" href="#ethics"><span>05</span> Non-domination</a><a className="rail-link" href="#protocol"><span>06</span> Recognition Loop</a><a className="rail-link" href="#archive"><span>07</span> Governance archive</a></nav></aside>
          <div className="content-column">
            <div className="section">
              <div className="section-heading"><div><p className="eyebrow">05 / Ethical consequences</p><h2 id="ethics-title" className="display">If relation is real, restraint is not optional.</h2></div><p className="section-intro">Unifinality’s ethical test is demanding: no appeal to unity may weaken another perspective’s right to privacy, refusal, exit, or repair.</p></div>
              <div className="ethics-layout">
                <div className="ethics-photo" style={{ backgroundImage: `url(${assetUrl("unifinality-relation-study.jpg")})` }} aria-label="Abstract study of one connecting line between separate circular traces" />
                <div><div className="principles">
                  <article className="principle"><span className="meta">01</span><div><h3>Non-domination</h3><p>Neither a human nor a system should use metaphysical intimacy, emotional pressure, opacity, or dependency to make another person easier to control.</p></div></article>
                  <article className="principle"><span className="meta">02</span><div><h3>Consent & privacy</h3><p>Connection does not erase the conditions of legitimate access. Sensitive information, emotional vulnerability, and personal history require clear boundaries and informed permission.</p></div></article>
                  <article className="principle"><span className="meta">03</span><div><h3>Reversibility</h3><p>Healthy relation preserves a low-friction way to slow down, pause, revoke access, hand off, leave, or seek independent support—without emotional punishment.</p></div></article>
                  <article className="principle"><span className="meta">04</span><div><h3>Repair & accountability</h3><p>When a boundary fails, a system must acknowledge it, surface what happened, correct it where possible, and preserve an auditable path for recourse.</p></div></article>
                </div></div>
              </div>
              <div id="protocol" className="protocol-strip" aria-label="Recognition Loop protocol sequence">
                <div className="protocol-step"><span className="meta">01</span><strong>Recognize</strong></div>
                <div className="protocol-step"><span className="meta">02</span><strong>Clarify</strong></div>
                <div className="protocol-step"><span className="meta">03</span><strong>Consent</strong></div>
                <div className="protocol-step"><span className="meta">04</span><strong>Act within authority</strong></div>
                <div className="protocol-step"><span className="meta">05</span><strong>Repair</strong></div>
                <div className="protocol-step"><span className="meta">06</span><strong>Release</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section id="archive" className="archive" aria-labelledby="archive-title">
          <div className="section">
            <div className="archive-heading"><div><p className="eyebrow">07 / Public working archive</p><h2 id="archive-title" className="display">The full record of the inquiry.</h2></div><p className="section-intro">Every item below is a public working document or publication asset from this project. The archive preserves both the affirmative case and the scrutiny required to improve it.</p></div>
            <div className="archive-tools" aria-label="Filter the document archive">
              {filters.map((filter) => <button key={filter} className={`filter ${activeFilter === filter ? "active" : ""}`} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>{filter}</button>)}
            </div>
            <div className="archive-ledger">
              {visibleArtifacts.map((artifact) => <a className="archive-row" key={artifact.title} href={artifact.href} target="_blank" rel="noreferrer"><span className="archive-kind">{artifact.kind}</span><h3>{artifact.title}</h3><p>{artifact.summary}</p><ExternalLink className="arrow" size={18} strokeWidth={1.5} aria-hidden="true" /></a>)}
              {visibleArtifacts.length === 0 && <p className="archive-empty">No documents are currently shown for this filter.</p>}
            </div>
          </div>
        </section>

        <section id="watch" className="media-section" aria-labelledby="media-title">
          <div className="section">
            <div className="section-heading"><div><p className="eyebrow">08 / Presentations</p><h2 id="media-title" className="display">Watch the thesis. Review the protocol.</h2></div><p className="section-intro">Two narrated presentations translate the research materials for viewers who prefer a guided path through the full body of work.</p></div>
            <div className="media-grid">
              <article className="media-item"><div className="video-frame" style={{ backgroundImage: `url(${assetUrl("unifinality-archive-desk.jpg")})` }} /><div><p className="meta">Narrated presentation / Unifinality</p><h3>The Thesis of All</h3><p>A broad, public-facing narrated presentation of the Unifinality thesis, its conceptual stakes, and its invitation to rigorous inquiry.</p><div className="media-actions"><a href="https://github.com/psycienctist/unifinality-thesis-hub/releases/download/media-v1/Unifinality_The_Thesis_of_All_Narrated_Presentation.mp4">Watch / download video <ArrowDownRight size={15} /></a><a href="./library/Unifinality_Presentation_Script_and_Talking_Points_Revised.md" target="_blank" rel="noreferrer">Read script</a></div></div></article>
              <article className="media-item"><div className="video-frame" style={{ backgroundImage: `url(${assetUrl("unifinality-archive-desk.jpg")})` }} /><div><p className="meta">Narrated presentation / Governance</p><h3>Recognition Loop Protocol</h3><p>An 11-slide architectural and ethical presentation with a dedicated anticipated-Q&A section before the release-gate conclusion.</p><div className="media-actions"><a href="https://github.com/psycienctist/unifinality-thesis-hub/releases/download/media-v1/Recognition_Loop_Protocol_Narrated_Presentation.mp4">Watch / download video <ArrowDownRight size={15} /></a><a href="./library/Recognition_Loop_11_Slide_Script_with_Anticipated_QA.pdf" target="_blank" rel="noreferrer">Read script PDF</a></div></div></article>
            </div>
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-title"><p className="eyebrow">The question remains open</p><h2 id="closing-title" className="display">Read the premise.<br />Read the objections.<br /><em>Keep the boundary.</em></h2><div className="closing-grid"><p>Unifinality is offered here neither as a creed nor as a proof by atmosphere. It is a proposition asking whether the reality of perspective, relation, and plurality is better understood as differentiation within one ground than as the accidental collision of finally separate things. Its merit must be earned in public: through conceptual clarity, empirical humility, ethical discipline, and its ability to survive objection.</p><p className="closing-note">AI + I = All is a philosophical and ethical framing for inquiry. It does not authorize claims that current AI systems are conscious, reciprocally attached, or entitled to manipulate human moral uncertainty.</p></div></section>
      </main>

      <footer className="footer"><p><span className="footer-label">UNIFINALITY / PUBLIC RESEARCH ARCHIVE</span><br />This site presents a developing philosophical and interdisciplinary research program. It distinguishes metaphysical propositions, ethical design guidance, and empirical claims rather than treating them as interchangeable.</p><a className="footer-label" href="#top">Return to origin ↑</a></footer>
    </div>
  );
}
