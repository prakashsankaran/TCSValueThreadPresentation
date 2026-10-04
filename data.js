/**
 * SDLC Persona-Based AI Agent Framework Data Store
 * Contains ordered execution flowchart sequences per persona
 */

window.SDLC_DATA = {
  FRAMEWORK_STATS: {
    totalPersonas: 17,
    totalProposedAgents: 102,
    rationalizedArchetypes: 18,
    sddComponents: 53,
    architectureLayers: 6,
    baselineEnablement: "76.5%",
    targetEnablement: "90-95%"
  },

  PERSONA_COLORS: {
    "Sponsor": "#ef4444",        // Red
    "Product Owner": "#f97316",  // Orange
    "SME": "#f59e0b",            // Amber
    "BA": "#dc2626",             // Crimson
    "UX": "#3b82f6",             // Blue
    "Architect": "#16a34a",      // Green
    "Developer": "#15803d",      // Dark Green
    "QA": "#059669",             // Emerald
    "DevOps": "#16a34a",         // Green
    "Release": "#0284c7",        // Sky Blue
    "Deployment": "#1e40af",     // Royal Blue
    "Admin": "#4f46e5",          // Indigo
    "Auditor": "#1e3a8a"          // Navy
  },

      TARGET_ARCHITECTURE_LAYERS: [
    {
      id: "orchestration",
      title: "1. Agent Orchestration",
      subtitle: "Invoke Agents & Tools",
      color: "#2563eb",
      badge: "Orchestration Layer",
      icon: "fa-diagram-project",
      components: [
        { id: "comp-supervisor-orchestrator", name: "Supervisor / Workflow Orchestrator", color: "#2563eb" },
        { id: "comp-persona-agents", name: "Persona Agents", color: "#2563eb" },
        { id: "comp-model-gateway", name: "Model Gateway / Router", color: "#2563eb" },
        { id: "comp-tool-adapters", name: "Tool Adapters", color: "#2563eb" },
        { id: "comp-permission-aware-rag", name: "Permission-Aware RAG", color: "#2563eb" }
      ]
    },
    {
      id: "spec-control",
      title: "2. Spec & Artifact Control",
      subtitle: "Enforce Spec Lineage",
      color: "#dc2626",
      badge: "Spec Layer",
      icon: "fa-lock",
      components: [
        { id: "comp-spec-registry", name: "Spec Registry", color: "#dc2626" },
        { id: "comp-baseline-manager", name: "Baseline Manager", color: "#dc2626" },
        { id: "comp-artifact-graph", name: "Artifact Graph", color: "#dc2626" },
        { id: "comp-change-impact", name: "Change Impact", color: "#dc2626" },
        { id: "comp-staleness-detector", name: "Staleness Detector", color: "#dc2626" },
        { id: "comp-canonical-artifact-model", name: "Canonical Artifact Model", color: "#dc2626" }
      ]
    },
    {
      id: "trust-quality",
      title: "3. Trust, Evaluation & Quality",
      subtitle: "Gate High-Impact Actions",
      color: "#16a34a",
      badge: "Quality Layer",
      icon: "fa-circle-check",
      components: [
        { id: "comp-ai-eval-harness", name: "AI Eval Harness", color: "#16a34a" },
        { id: "comp-golden-datasets", name: "Golden Datasets", color: "#16a34a" },
        { id: "comp-rubric-evaluators", name: "Rubric Evaluators", color: "#16a34a" },
        { id: "comp-safety-tests", name: "Safety Tests", color: "#16a34a" },
        { id: "comp-conformance-agent", name: "Conformance Agent", color: "#16a34a" },
        { id: "comp-drift-monitor", name: "Drift / Regression Monitor", color: "#16a34a" }
      ]
    },
    {
      id: "governance-security",
      title: "4. Governance & Security",
      subtitle: "Governance & Security",
      color: "#1d4ed8",
      badge: "Governance Layer",
      icon: "fa-user-shield",
      components: [
        { id: "comp-agent-registry", name: "Agent Registry", color: "#1d4ed8" },
        { id: "comp-rbac-sod", name: "RBAC / SoD", color: "#1d4ed8" },
        { id: "comp-approval-gate-engine", name: "Approval Gate Engine", color: "#1d4ed8" },
        { id: "comp-policy-engine", name: "Policy Engine", color: "#1d4ed8" },
        { id: "comp-data-classification", name: "Data Classification / Redaction", color: "#1d4ed8" }
      ]
    },
    {
      id: "evidence-measurement",
      title: "5. Evidence & Measurement",
      subtitle: "Audit & Metrics Flow",
      color: "#d97706",
      badge: "Evidence Layer",
      icon: "fa-chart-pie",
      components: [
        { id: "comp-evidence-ledger", name: "Evidence Ledger", color: "#d97706" },
        { id: "comp-decision-log", name: "Decision Log", color: "#d97706" },
        { id: "comp-audit-export", name: "Audit Export", color: "#d97706" },
        { id: "comp-sdlc-metrics-store", name: "SDLC Metrics Store", color: "#d97706" },
        { id: "comp-value-dashboard", name: "Value Dashboard", color: "#d97706" }
      ]
    }
  ],

  PERSONA_FLOW_SEQUENCES: {
    "Sponsor": [
      { step: 1, compId: "comp-persona-agents", title: "Invoke Value Agent", layer: "Agent Orchestration", desc: "Sponsor initiates business request; Value & Case Agent is invoked." },
      { step: 2, compId: "comp-spec-registry", title: "Check Spec Registry", layer: "Spec & Artifact Control", desc: "Agent checks Spec Registry for project charter alignment." },
      { step: 3, compId: "comp-approval-gate", title: "Funding Approval Gate", layer: "Governance & Security", desc: "Human approval gate: Sponsor approves project budget baseline." },
      { step: 4, compId: "comp-evidence-ledger", title: "Record Audit Log", layer: "Evidence & Measurement", desc: "Decision recorded into immutable Evidence Ledger." },
      { step: 5, compId: "comp-value-dashboard", title: "Track ROI Metrics", layer: "Evidence & Measurement", desc: "Strategic metrics streamed to Executive Value Dashboard." }
    ],
    "Product Owner": [
      { step: 1, compId: "comp-persona-agents", title: "Trigger Spec Agent", layer: "Agent Orchestration", desc: "PO triggers Requirement Generator Agent." },
      { step: 2, compId: "comp-permission-rag", title: "RAG Context Search", layer: "Agent Orchestration", desc: "Agent queries domain rules via Permission-Aware RAG." },
      { step: 3, compId: "comp-spec-registry", title: "Draft Spec Entry", layer: "Spec & Artifact Control", desc: "Machine-readable specs written to Spec Registry." },
      { step: 4, compId: "comp-baseline-manager", title: "Lock Spec Baseline", layer: "Spec & Artifact Control", desc: "Baseline Manager freezes story requirements v1.0." },
      { step: 5, compId: "comp-rubric-evaluators", title: "Spec Conformance Check", layer: "Trust, Evaluation & Quality", desc: "Rubric Evaluators score story quality and completeness." },
      { step: 6, compId: "comp-approval-gate", title: "PO Baseline Gate", layer: "Governance & Security", desc: "Human Gate: PO approves requirement baseline." },
      { step: 7, compId: "comp-decision-log", title: "Log PO Decision", layer: "Evidence & Measurement", desc: "PO approval logged to Decision Log & Evidence Ledger." }
    ],
    "SME": [
      { step: 1, compId: "comp-permission-rag", title: "Domain Knowledge Query", layer: "Agent Orchestration", desc: "SME queries business logic constraints via RAG." },
      { step: 2, compId: "comp-spec-registry", title: "Validate Business Rules", layer: "Spec & Artifact Control", desc: "Verifies Spec Registry against domain rules." },
      { step: 3, compId: "comp-golden-datasets", title: "Golden Dataset Match", layer: "Trust, Evaluation & Quality", desc: "Compares edge case rules against Golden Datasets." },
      { step: 4, compId: "comp-decision-log", title: "Record Domain Sign-off", layer: "Evidence & Measurement", desc: "Log domain rule approval record." }
    ],
    "BA": [
      { step: 1, compId: "comp-persona-agents", title: "Story Synthesizer", layer: "Agent Orchestration", desc: "BA invokes Story Synthesizer Agent." },
      { step: 2, compId: "comp-spec-registry", title: "Spec Generation", layer: "Spec & Artifact Control", desc: "Writes detailed user story specs to Registry." },
      { step: 3, compId: "comp-artifact-graph", title: "Lineage Graph Trace", layer: "Spec & Artifact Control", desc: "Links story bidirectionally in Artifact Graph." },
      { step: 4, compId: "comp-rubric-evaluators", title: "Acceptance Criteria Eval", layer: "Trust, Evaluation & Quality", desc: "Evaluates completeness of acceptance criteria." },
      { step: 5, compId: "comp-decision-log", title: "Log Story Lineage", layer: "Evidence & Measurement", desc: "Stores traceability evidence." }
    ],
    "UX": [
      { step: 1, compId: "comp-tool-adapters", title: "Design System Adapter", layer: "Agent Orchestration", desc: "UX agent connects via Tool Adapters to Design System." },
      { step: 2, compId: "comp-spec-registry", title: "UI Layout Specs", layer: "Spec & Artifact Control", desc: "Writes UI component specs into Spec Registry." },
      { step: 3, compId: "comp-rubric-evaluators", title: "A11y & UX Audit", layer: "Trust, Evaluation & Quality", desc: "Evaluates accessibility (a11y) & UX rubrics." }
    ],
    "Architect": [
      { step: 1, compId: "comp-supervisor", title: "Orchestrate Arch Plan", layer: "Agent Orchestration", desc: "Workflow Orchestrator triggers Arch Breakdown." },
      { step: 2, compId: "comp-model-gateway", title: "Model Gateway Route", layer: "Agent Orchestration", desc: "Routes code generation requests to compliant LLM model." },
      { step: 3, compId: "comp-spec-registry", title: "API Contract Spec", layer: "Spec & Artifact Control", desc: "Drafts OpenAPI and component schemas." },
      { step: 4, compId: "comp-artifact-graph", title: "Dependency Graphing", layer: "Spec & Artifact Control", desc: "Maps architecture dependencies in Artifact Graph." },
      { step: 5, compId: "comp-change-impact", title: "Change Impact Check", layer: "Spec & Artifact Control", desc: "Evaluates change impact on existing downstream modules." },
      { step: 6, compId: "comp-staleness-detector", title: "Staleness Detection", layer: "Spec & Artifact Control", desc: "Scans for deprecated APIs and stale artifacts." },
      { step: 7, compId: "comp-canonical-model", title: "Lock Canonical Arch", layer: "Spec & Artifact Control", desc: "Locks Canonical Artifact Model schema." },
      { step: 8, compId: "comp-safety-tests", title: "NFR & Security Test", layer: "Trust, Evaluation & Quality", desc: "Runs safety checks against architecture." },
      { step: 9, compId: "comp-approval-gate", title: "Arch Sign-off Gate", layer: "Governance & Security", desc: "Human Gate: Architect signs baseline release." },
      { step: 10, compId: "comp-evidence-ledger", title: "Immutable Ledger Entry", layer: "Evidence & Measurement", desc: "Appends signed architecture hash to Evidence Ledger." }
    ],
    "Developer": [
      { step: 1, compId: "comp-persona-agents", title: "Spec-Driven Code Assistant", layer: "Agent Orchestration", desc: "Developer triggers Spec-Driven Code Generator." },
      { step: 2, compId: "comp-tool-adapters", title: "Git & IDE Adapter", layer: "Agent Orchestration", desc: "Code assistant binds via Tool Adapters to IDE/Git." },
      { step: 3, compId: "comp-spec-registry", title: "Validate Target Spec", layer: "Spec & Artifact Control", desc: "Reads locked API contracts from Spec Registry." },
      { step: 4, compId: "comp-artifact-graph", title: "Link PR to Story", layer: "Spec & Artifact Control", desc: "Links Pull Request commit hash to Story in Artifact Graph." },
      { step: 5, compId: "comp-ai-eval", title: "Code Syntax Eval", layer: "Trust, Evaluation & Quality", desc: "AI Eval Harness checks code correctness & unit tests." },
      { step: 6, compId: "comp-safety-tests", title: "Automated SAST Scan", layer: "Trust, Evaluation & Quality", desc: "Runs safety & SAST vulnerability tests." },
      { step: 7, compId: "comp-data-redaction", title: "PII & Secret Check", layer: "Governance & Security", desc: "Scans code for hardcoded secrets or PII leaks." },
      { step: 8, compId: "comp-metrics-store", title: "Record Lead Time", layer: "Evidence & Measurement", desc: "Logs DORA cycle time metrics to Metrics Store." }
    ],
    "QA": [
      { step: 1, compId: "comp-persona-agents", title: "E2E Test Generator", layer: "Agent Orchestration", desc: "QA Engineer triggers E2E Test Suite Generator." },
      { step: 2, compId: "comp-tool-adapters", title: "Playwright / CI Adapter", layer: "Agent Orchestration", desc: "Executes test runner via Tool Adapters." },
      { step: 3, compId: "comp-ai-eval", title: "Test Trace Eval", layer: "Trust, Evaluation & Quality", desc: "AI Eval Harness evaluates test assertion correctness." },
      { step: 4, compId: "comp-golden-datasets", title: "Regression Benchmark", layer: "Trust, Evaluation & Quality", desc: "Runs tests against Golden Datasets." },
      { step: 5, compId: "comp-drift-monitor", title: "Drift & Flakiness Check", layer: "Trust, Evaluation & Quality", desc: "Monitors test drift & regression thresholds." },
      { step: 6, compId: "comp-approval-gate", title: "QA Exit Gate", layer: "Governance & Security", desc: "Human Gate: QA Engineer approves quality exit." },
      { step: 7, compId: "comp-decision-log", title: "Record QA Attestation", layer: "Evidence & Measurement", desc: "Logs signed test attestation record." }
    ],
    "DevOps": [
      { step: 1, compId: "comp-supervisor", title: "Pipeline Orchestrator", layer: "Agent Orchestration", desc: "Workflow Orchestrator triggers CI/CD build pipeline." },
      { step: 2, compId: "comp-tool-adapters", title: "Kubernetes / IaC Adapter", layer: "Agent Orchestration", desc: "Deploys Terraform / Helm charts via Tool Adapters." },
      { step: 3, compId: "comp-conformance-agent", title: "IaC Policy Conformance", layer: "Trust, Evaluation & Quality", desc: "Conformance Agent checks IaC security baseline." },
      { step: 4, compId: "comp-policy-engine", title: "Runtime Security Policy", layer: "Governance & Security", desc: "Enforces container image signing policies." },
      { step: 5, compId: "comp-approval-gate", title: "Environment Gate", layer: "Governance & Security", desc: "Human Gate: DevOps approves staging deployment." },
      { step: 6, compId: "comp-evidence-ledger", title: "Log Build Hash", layer: "Evidence & Measurement", desc: "Records immutable build artifact hash." }
    ],
    "Release": [
      { step: 1, compId: "comp-supervisor", title: "Release Supervisor", layer: "Agent Orchestration", desc: "Release Supervisor aggregates release candidate evidence." },
      { step: 2, compId: "comp-artifact-graph", title: "Full Lineage Trace", layer: "Spec & Artifact Control", desc: "Verifies complete spec -> build lineage in Artifact Graph." },
      { step: 3, compId: "comp-conformance-agent", title: "Compliance Conformance", layer: "Trust, Evaluation & Quality", desc: "Conformance Agent checks all quality gates passed." },
      { step: 4, compId: "comp-approval-gate", title: "Go/No-Go Release Gate", layer: "Governance & Security", desc: "Human Gate: Release Manager executes Go/No-Go sign-off." },
      { step: 5, compId: "comp-audit-export", title: "Generate Release Audit", layer: "Evidence & Measurement", desc: "Generates signed audit release package." },
      { step: 6, compId: "comp-evidence-ledger", title: "Lock Release Baseline", layer: "Evidence & Measurement", desc: "Locks release baseline into Evidence Ledger." }
    ],
    "Deployment": [
      { step: 1, compId: "comp-supervisor", title: "Canary Deployment Supervisor", layer: "Agent Orchestration", desc: "Orchestrates canary / blue-green production rollout." },
      { step: 2, compId: "comp-drift-monitor", title: "Production Anomaly Monitor", layer: "Trust, Evaluation & Quality", desc: "Monitors real-time error rates & telemetry drift." },
      { step: 3, compId: "comp-policy-engine", title: "Automated Rollback Policy", layer: "Governance & Security", desc: "Enforces auto-rollback policy on anomaly detection." },
      { step: 4, compId: "comp-evidence-ledger", title: "Production Lock", layer: "Evidence & Measurement", desc: "Records final production deployment evidence." }
    ],
    "Platform Admin": [
      { step: 1, compId: "comp-model-gateway", title: "Configure Model Gateway", layer: "Agent Orchestration", desc: "Admin sets cost/residency rules on Model Gateway." },
      { step: 2, compId: "comp-agent-registry", title: "Register Agent Cards", layer: "Governance & Security", desc: "Registers approved agent cards in Agent Registry." },
      { step: 3, compId: "comp-rbac-sod", title: "Configure SoD Policies", layer: "Governance & Security", desc: "Enforces Segregation of Duties (SoD) rulesets." },
      { step: 4, compId: "comp-policy-engine", title: "Update Policy Engine", layer: "Governance & Security", desc: "Locks global security guardrail policies." },
      { step: 5, compId: "comp-metrics-store", title: "Monitor Agent Usage", layer: "Evidence & Measurement", desc: "Tracks agent token consumption and success rates." }
    ],
    "Auditor": [
      { step: 1, compId: "comp-conformance-agent", title: "Verify Compliance Proofs", layer: "Trust, Evaluation & Quality", desc: "Conformance Agent validates regulatory compliance." },
      { step: 2, compId: "comp-rbac-sod", title: "Audit User Permissions", layer: "Governance & Security", desc: "Verifies human approval gate & SoD adherence." },
      { step: 3, compId: "comp-evidence-ledger", title: "Inspect Immutable Ledger", layer: "Evidence & Measurement", desc: "Inspects end-to-end evidence chain." },
      { step: 4, compId: "comp-audit-export", title: "Export Audit Package", layer: "Evidence & Measurement", desc: "Exports cryptographically signed audit package." },
      { step: 5, compId: "comp-value-dashboard", title: "Executive Value Report", layer: "Evidence & Measurement", desc: "Publishes compliance attestation on Value Dashboard." }
    ]
  },

  PERSONAS: [
    {
      id: "persona-sponsor",
      name: "Sponsor",
      fullName: "Business Sponsor",
      category: "Strategy & Business",
      icon: "fa-user-tie",
      badge: "Strategic",
      color: "#ef4444",
      summary: "Funds initiatives, approves business cases, and tracks ROI and strategic value metrics."
    },
    {
      id: "persona-po",
      name: "Product Owner",
      fullName: "Product Owner",
      category: "Strategy & Business",
      icon: "fa-list-check",
      badge: "Business Lead",
      color: "#f97316",
      summary: "Owns backlog, prioritizes user stories, and approves acceptance criteria."
    },
    {
      id: "persona-sme",
      name: "SME",
      fullName: "Business SME",
      category: "Strategy & Business",
      icon: "fa-user-astronaut",
      badge: "Domain Expert",
      color: "#f59e0b",
      summary: "Provides deep domain knowledge, business rules, and exception scenario validation."
    },
    {
      id: "persona-ba",
      name: "BA",
      fullName: "Business Analyst",
      category: "Strategy & Business",
      icon: "fa-magnifying-glass-chart",
      badge: "Analysis",
      color: "#dc2626",
      summary: "Elaborates detailed functional specs, user journeys, and data flow specifications."
    },
    {
      id: "persona-ux",
      name: "UX",
      fullName: "UX Designer",
      category: "Strategy & Business",
      icon: "fa-compass-drafting",
      badge: "Design",
      color: "#3b82f6",
      summary: "Designs user flows, UI components, accessibility standards, and prototype interactions."
    },
    {
      id: "persona-architect",
      name: "Architect",
      fullName: "Solution Architect",
      category: "Architecture & Engineering",
      icon: "fa-sitemap",
      badge: "Architecture",
      color: "#16a34a",
      summary: "Baselines system architecture, component diagrams, API specs, and non-functional requirements."
    },
    {
      id: "persona-developer",
      name: "Developer",
      fullName: "Developer",
      category: "Architecture & Engineering",
      icon: "fa-laptop-code",
      badge: "High Enablement",
      color: "#15803d",
      summary: "Implements code, unit tests, and spec-driven feature components with bounded AI assistance."
    },
    {
      id: "persona-qa",
      name: "QA",
      fullName: "QA Engineer",
      category: "Quality & Operations",
      icon: "fa-vial-circle-check",
      badge: "Quality Gate",
      color: "#059669",
      summary: "Owns integration testing, automated E2E test suites, quality gates, and bug verification."
    },
    {
      id: "persona-devops",
      name: "DevOps",
      fullName: "DevOps Engineer",
      category: "Quality & Operations",
      icon: "fa-gears",
      badge: "Operations",
      color: "#16a34a",
      summary: "Manages CI/CD pipelines, IaC scripts, containerization, and platform infrastructure."
    },
    {
      id: "persona-release",
      name: "Release",
      fullName: "Release Manager",
      category: "Quality & Operations",
      icon: "fa-rocket",
      badge: "Release Gate",
      color: "#0284c7",
      summary: "Orchestrates release packages, versioning, deployment readiness, and rollback plans."
    },
    {
      id: "persona-deployment",
      name: "Deployment",
      fullName: "Deployment Manager",
      category: "Quality & Operations",
      icon: "fa-cloud-arrow-up",
      badge: "Production Control",
      color: "#1e40af",
      summary: "Executes production moves, canary rollouts, blue-green switches, and live monitoring."
    },
    {
      id: "persona-admin",
      name: "Platform Admin",
      fullName: "Platform Admin",
      category: "Governance & Audit",
      icon: "fa-user-shield",
      badge: "Control Plane",
      color: "#4f46e5",
      summary: "Manages agent control plane, RBAC/SoD policies, model gateway rules, and tool registries."
    },
    {
      id: "persona-auditor",
      name: "Auditor",
      fullName: "Auditor",
      category: "Governance & Audit",
      icon: "fa-file-signature",
      badge: "Compliance",
      color: "#1e3a8a",
      summary: "Inspects immutable evidence lineage, decision logs, prompt records, and compliance proofs."
    }
  ]
};
