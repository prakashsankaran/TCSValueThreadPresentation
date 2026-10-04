window.currentSolutionView = "target-state";
/**
 * SDLC Persona AI Operating Model - Executive Presentation Deck & Electrical Schematic Application
 * Persona Flowchart Architecture: Sequence Path Bar Removed As Requested
 */

// GLOBAL DICTIONARY OF EXACT SDD AGENT STUDIO COMPONENTS & PERSONA LINKAGES
window.SDD_COMPONENTS_DATA = {
  "Value Dashboard": {
    "name": "Value Dashboard",
    "desc": "Executive portfolio dashboard tracking AI enablement adoption rates, defect leakage reduction, and business ROI.",
    "priority": "P0",
    "personas": [
      "Business Sponsor",
      "Delivery Manager",
      "Release Manager",
      "Technical Lead"
    ],
    "agents": [
      "Business Sponsor \u2014 Business Case & Value Analyst Agent",
      "Business Sponsor \u2014 Benefits Realization Agent",
      "Delivery Manager \u2014 Flow & Delivery Health Agent",
      "Delivery Manager \u2014 Team Effectiveness Insight Agent",
      "Technical Lead \u2014 Technical Debt & Engineering Health Agent",
      "Release Manager \u2014 Rollback & Post-Release Learning Agent"
    ]
  },
  "SDLC Metrics Store": {
    "name": "SDLC Metrics Store",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Business Sponsor",
      "Delivery Manager",
      "DevOps Engineer",
      "Technical Lead"
    ],
    "agents": [
      "Business Sponsor \u2014 Business Case & Value Analyst Agent",
      "Business Sponsor \u2014 Benefits Realization Agent",
      "Delivery Manager \u2014 Flow & Delivery Health Agent",
      "Technical Lead \u2014 Technical Debt & Engineering Health Agent",
      "DevOps Engineer \u2014 Delivery Performance & Release Safety Agent"
    ]
  },
  "Evidence Ledger": {
    "name": "Evidence Ledger",
    "desc": "Stores tamper-evident evidence linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Business Analyst",
      "Business SME",
      "Business Sponsor",
      "Data Architect",
      "Delivery Manager",
      "Deployment Manager",
      "DevOps Engineer",
      "Developer",
      "Platform Admin",
      "Product Owner",
      "QA Engineer",
      "Release Manager",
      "Security Reviewer",
      "Solution Architect",
      "Technical Lead",
      "UX Designer"
    ],
    "agents": [
      "Business Sponsor \u2014 Business Case & Value Analyst Agent",
      "Business Sponsor \u2014 Executive Status & Evidence Synthesis Agent",
      "Product Owner \u2014 Product Discovery & Insight Agent",
      "Product Owner \u2014 Product Decision Traceability Agent",
      "Business SME \u2014 Domain Knowledge Curator Agent",
      "Business Analyst \u2014 Elicitation & Workshop Agent",
      "Delivery Manager \u2014 Ceremony & Action Management Agent",
      "Delivery Manager \u2014 RAID & Status Reporting Agent",
      "UX Designer \u2014 User Research Synthesis Agent",
      "UX Designer \u2014 Persona & Journey Modeling Agent",
      "Solution Architect \u2014 ADR & Architecture Documentation Agent",
      "Data Architect \u2014 Metadata & Lineage Agent",
      "Security Reviewer \u2014 Security Remediation Support Agent",
      "Security Reviewer \u2014 Compliance & AI Security Evidence Agent",
      "Technical Lead \u2014 Security Analyzer Agent",
      "Developer \u2014 PR Documentation & Review Remediation Agent",
      "QA Engineer \u2014 Failure & Defect Triage Agent",
      "QA Engineer \u2014 Quality Gate & UAT Evidence Agent",
      "DevOps Engineer \u2014 Software Supply-Chain Assurance Agent",
      "Release Manager \u2014 Release Scope Assembly Agent",
      "Release Manager \u2014 Release Notes & Communication Agent",
      "Deployment Manager \u2014 Bounded Production Execution Agent",
      "Deployment Manager \u2014 Deployment Evidence & Handover Agent",
      "Platform Admin \u2014 Access Provisioning Agent",
      "Auditor \u2014 Evidence Collection & Authenticity Agent",
      "Auditor \u2014 Control Testing & Anomaly Agent"
    ]
  },
  "AI Adoption Analytics": {
    "name": "AI Adoption Analytics",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Business Sponsor",
      "Delivery Manager"
    ],
    "agents": [
      "Business Sponsor \u2014 Business Case & Value Analyst Agent",
      "Business Sponsor \u2014 Benefits Realization Agent",
      "Delivery Manager \u2014 Flow & Delivery Health Agent",
      "Auditor \u2014 Risk-Based Audit Planning Agent"
    ]
  },
  "Change Impact Agent": {
    "name": "Change Impact Agent",
    "desc": "Shows how a backlog or scope change affects specifications, architecture, code, tests and release commitments.",
    "priority": "P0",
    "personas": [
      "Business Analyst",
      "Business SME",
      "Business Sponsor",
      "Data Architect",
      "Delivery Manager",
      "DevOps Engineer",
      "Developer",
      "Product Owner",
      "QA Engineer",
      "Release Manager",
      "Solution Architect",
      "Technical Lead"
    ],
    "agents": [
      "Business Sponsor \u2014 Portfolio Risk & Scenario Agent",
      "Product Owner \u2014 Backlog Prioritization Agent",
      "Product Owner \u2014 Product Change Impact Agent",
      "Business SME \u2014 Process Change Impact Agent",
      "Business Analyst \u2014 Traceability & Change Impact Agent",
      "Delivery Manager \u2014 Dependency & Impediment Agent",
      "Solution Architect \u2014 Solution Option & Trade-off Agent",
      "Solution Architect \u2014 Architecture Drift & Change Impact Agent",
      "Data Architect \u2014 Migration & Reconciliation Agent",
      "Technical Lead \u2014 Technical Task Decomposition Agent",
      "Developer \u2014 Debugging & Root-Cause Agent",
      "QA Engineer \u2014 Failure & Defect Triage Agent",
      "DevOps Engineer \u2014 Infrastructure-as-Code Agent",
      "DevOps Engineer \u2014 Build & Deployment Failure Analyst Agent",
      "Release Manager \u2014 Change Risk Assessment Agent",
      "Release Manager \u2014 Release Calendar & Collision Agent"
    ]
  },
  "Artifact Graph": {
    "name": "Artifact Graph",
    "desc": "Maintains bidirectional relationships among requirements, specifications, designs, code, tests, defects, releases and deployment evidence.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Business Analyst",
      "Business SME",
      "Business Sponsor",
      "Data Architect",
      "Delivery Manager",
      "DevOps Engineer",
      "Developer",
      "Product Owner",
      "QA Engineer",
      "Release Manager",
      "Security Reviewer",
      "Solution Architect",
      "Technical Lead",
      "UX Designer"
    ],
    "agents": [
      "Business Sponsor \u2014 Portfolio Risk & Scenario Agent",
      "Product Owner \u2014 Backlog Prioritization Agent",
      "Product Owner \u2014 Product Change Impact Agent",
      "Business SME \u2014 Business Data Semantics Agent",
      "Business SME \u2014 Process Change Impact Agent",
      "Business Analyst \u2014 Traceability & Change Impact Agent",
      "Delivery Manager \u2014 Dependency & Impediment Agent",
      "UX Designer \u2014 Persona & Journey Modeling Agent",
      "UX Designer \u2014 Design System Conformance Agent",
      "Solution Architect \u2014 Architecture Drift & Change Impact Agent",
      "Data Architect \u2014 Data Model Generation Agent",
      "Data Architect \u2014 Metadata & Lineage Agent",
      "Security Reviewer \u2014 Threat Modeling Agent",
      "Technical Lead \u2014 Technical Task Decomposition Agent",
      "Technical Lead \u2014 PR Review & Spec Conformance Agent",
      "Technical Lead \u2014 Technical Debt & Engineering Health Agent",
      "Developer \u2014 Spec & Repository Context Agent",
      "Developer \u2014 Debugging & Root-Cause Agent",
      "QA Engineer \u2014 Risk-Based Test Strategy Agent",
      "QA Engineer \u2014 Failure & Defect Triage Agent",
      "DevOps Engineer \u2014 Build & Deployment Failure Analyst Agent",
      "Release Manager \u2014 Release Scope Assembly Agent",
      "Auditor \u2014 Risk-Based Audit Planning Agent",
      "Auditor \u2014 Traceability & Approval Audit Agent"
    ]
  },
  "Explainability Panel": {
    "name": "Explainability Panel",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Business Sponsor",
      "Deployment Manager",
      "DevOps Engineer",
      "Developer",
      "Platform Admin",
      "Product Owner",
      "QA Engineer",
      "Release Manager",
      "Security Reviewer",
      "Solution Architect"
    ],
    "agents": [
      "Business Sponsor \u2014 Portfolio Risk & Scenario Agent",
      "Business Sponsor \u2014 Stakeholder Decision Support Agent",
      "Product Owner \u2014 Backlog Prioritization Agent",
      "Solution Architect \u2014 Solution Option & Trade-off Agent",
      "Security Reviewer \u2014 Threat Modeling Agent",
      "Developer \u2014 Debugging & Root-Cause Agent",
      "QA Engineer \u2014 Failure & Defect Triage Agent",
      "DevOps Engineer \u2014 Build & Deployment Failure Analyst Agent",
      "Release Manager \u2014 Change Risk Assessment Agent",
      "Deployment Manager \u2014 Rollback Decision Support Agent",
      "Platform Admin \u2014 RBAC & Segregation-of-Duties Analyzer Agent",
      "Auditor \u2014 Risk-Based Audit Planning Agent"
    ]
  },
  "Decision/Dissent Capture": {
    "name": "Decision/Dissent Capture",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Business Analyst",
      "Business Sponsor",
      "Delivery Manager",
      "Deployment Manager",
      "Product Owner",
      "Release Manager",
      "Solution Architect"
    ],
    "agents": [
      "Business Sponsor \u2014 Portfolio Risk & Scenario Agent",
      "Business Sponsor \u2014 Stakeholder Decision Support Agent",
      "Product Owner \u2014 Backlog Prioritization Agent",
      "Business Analyst \u2014 Spec Baseline & Clarification Agent",
      "Delivery Manager \u2014 Team Effectiveness Insight Agent",
      "Solution Architect \u2014 Solution Option & Trade-off Agent",
      "Release Manager \u2014 Change Risk Assessment Agent",
      "Deployment Manager \u2014 Rollback Decision Support Agent"
    ]
  },
  "Connector Hub": {
    "name": "Connector Hub",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Business Sponsor",
      "Data Architect",
      "Delivery Manager",
      "Deployment Manager",
      "Platform Admin",
      "QA Engineer",
      "Release Manager"
    ],
    "agents": [
      "Business Sponsor \u2014 Executive Status & Evidence Synthesis Agent",
      "Delivery Manager \u2014 Dependency & Impediment Agent",
      "Data Architect \u2014 Metadata & Lineage Agent",
      "QA Engineer \u2014 Test Data & Environment Agent",
      "Release Manager \u2014 Release Calendar & Collision Agent",
      "Deployment Manager \u2014 Environment Readiness Agent",
      "Platform Admin \u2014 Connector & Integration Health Agent"
    ]
  },
  "Decision Log": {
    "name": "Decision Log",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Business Analyst",
      "Business Sponsor",
      "Delivery Manager",
      "Deployment Manager",
      "Developer",
      "Product Owner",
      "Release Manager",
      "Security Reviewer",
      "Solution Architect"
    ],
    "agents": [
      "Business Sponsor \u2014 Executive Status & Evidence Synthesis Agent",
      "Business Sponsor \u2014 Stakeholder Decision Support Agent",
      "Product Owner \u2014 Product Decision Traceability Agent",
      "Business Analyst \u2014 Elicitation & Workshop Agent",
      "Delivery Manager \u2014 Ceremony & Action Management Agent",
      "Delivery Manager \u2014 RAID & Status Reporting Agent",
      "Solution Architect \u2014 ADR & Architecture Documentation Agent",
      "Security Reviewer \u2014 Risk Exception & Approval Agent",
      "Developer \u2014 PR Documentation & Review Remediation Agent",
      "Release Manager \u2014 Release Notes & Communication Agent",
      "Deployment Manager \u2014 Deployment Evidence & Handover Agent",
      "Auditor \u2014 Finding & Remediation Tracking Agent"
    ]
  },
  "Audit Export Service": {
    "name": "Audit Export Service",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Business Sponsor",
      "Delivery Manager",
      "Deployment Manager",
      "Platform Admin",
      "Release Manager"
    ],
    "agents": [
      "Business Sponsor \u2014 Executive Status & Evidence Synthesis Agent",
      "Delivery Manager \u2014 RAID & Status Reporting Agent",
      "Release Manager \u2014 Release Notes & Communication Agent",
      "Deployment Manager \u2014 Deployment Evidence & Handover Agent",
      "Platform Admin \u2014 AI Governance & Evidence Agent",
      "Auditor \u2014 Evidence Collection & Authenticity Agent"
    ]
  },
  "Approval Gate Engine": {
    "name": "Approval Gate Engine",
    "desc": "OWASP-aligned human-in-the-loop gate engine enforcing mandatory human sign-offs for high-impact decisions.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Business Analyst",
      "Business Sponsor",
      "Delivery Manager",
      "Deployment Manager",
      "DevOps Engineer",
      "Platform Admin",
      "Product Owner",
      "QA Engineer",
      "Release Manager",
      "Security Reviewer"
    ],
    "agents": [
      "Business Sponsor \u2014 Gate Readiness Advisor Agent",
      "Product Owner \u2014 UAT & Business Readiness Agent",
      "Business Analyst \u2014 Spec Baseline & Clarification Agent",
      "Delivery Manager \u2014 Lifecycle Gate Coordination Agent",
      "Security Reviewer \u2014 Risk Exception & Approval Agent",
      "QA Engineer \u2014 Quality Gate & UAT Evidence Agent",
      "DevOps Engineer \u2014 Software Supply-Chain Assurance Agent",
      "Release Manager \u2014 Approval & Evidence Readiness Agent",
      "Deployment Manager \u2014 Deployment Plan Validator Agent",
      "Platform Admin \u2014 Access Provisioning Agent",
      "Platform Admin \u2014 Workflow & Gate Configuration Agent",
      "Auditor \u2014 Traceability & Approval Audit Agent"
    ]
  },
  "Human Review Workbench": {
    "name": "Human Review Workbench",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Business Analyst",
      "Business SME",
      "Business Sponsor",
      "Delivery Manager",
      "Developer",
      "Platform Admin",
      "Product Owner",
      "QA Engineer",
      "Release Manager",
      "Security Reviewer",
      "Technical Lead",
      "UX Designer"
    ],
    "agents": [
      "Business Sponsor \u2014 Gate Readiness Advisor Agent",
      "Business Sponsor \u2014 Stakeholder Decision Support Agent",
      "Product Owner \u2014 UAT & Business Readiness Agent",
      "Business SME \u2014 UAT Scenario Agent",
      "Business Analyst \u2014 Spec Baseline & Clarification Agent",
      "Delivery Manager \u2014 Lifecycle Gate Coordination Agent",
      "UX Designer \u2014 Wireframe & Prototype Generation Agent",
      "UX Designer \u2014 UX Implementation Review Agent",
      "Security Reviewer \u2014 Security Remediation Support Agent",
      "Technical Lead \u2014 PR Review & Spec Conformance Agent",
      "Developer \u2014 PR Documentation & Review Remediation Agent",
      "QA Engineer \u2014 Quality Gate & UAT Evidence Agent",
      "Release Manager \u2014 Approval & Evidence Readiness Agent",
      "Platform Admin \u2014 Workflow & Gate Configuration Agent",
      "Auditor \u2014 Finding & Remediation Tracking Agent"
    ]
  },
  "RBAC/SoD Service": {
    "name": "RBAC/SoD Service",
    "desc": "Role-Based Access Control and Segregation of Duties service preventing unauthorized actions or AI bypass of controls.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Business Sponsor",
      "Delivery Manager",
      "Platform Admin",
      "Release Manager",
      "Security Reviewer"
    ],
    "agents": [
      "Business Sponsor \u2014 Gate Readiness Advisor Agent",
      "Delivery Manager \u2014 Lifecycle Gate Coordination Agent",
      "Security Reviewer \u2014 Risk Exception & Approval Agent",
      "Release Manager \u2014 Approval & Evidence Readiness Agent",
      "Platform Admin \u2014 Access Provisioning Agent",
      "Platform Admin \u2014 RBAC & Segregation-of-Duties Analyzer Agent",
      "Auditor \u2014 Traceability & Approval Audit Agent"
    ]
  },
  "Baseline Manager": {
    "name": "Baseline Manager",
    "desc": "Locks requirement baselines and tracks versioned change requests prior to phase exits.",
    "priority": "P0",
    "personas": [
      "Business Analyst",
      "Business Sponsor",
      "Product Owner",
      "Release Manager"
    ],
    "agents": [
      "Business Sponsor \u2014 Gate Readiness Advisor Agent",
      "Product Owner \u2014 Product Decision Traceability Agent",
      "Business Analyst \u2014 Story-to-Spec Decomposition Agent",
      "Release Manager \u2014 Release Scope Assembly Agent"
    ]
  },
  "Feedback-to-Eval Pipeline": {
    "name": "Feedback-to-Eval Pipeline",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Business Sponsor",
      "Release Manager",
      "Security Reviewer",
      "Technical Lead"
    ],
    "agents": [
      "Business Sponsor \u2014 Benefits Realization Agent",
      "Security Reviewer \u2014 Security Remediation Support Agent",
      "Technical Lead \u2014 Remediation Support Analyzer Agent",
      "Release Manager \u2014 Rollback & Post-Release Learning Agent"
    ]
  },
  "Domain Knowledge Base": {
    "name": "Domain Knowledge Base",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Business Analyst",
      "Business SME",
      "Platform Admin",
      "Product Owner",
      "UX Designer"
    ],
    "agents": [
      "Product Owner \u2014 Product Discovery & Insight Agent",
      "Business SME \u2014 Domain Knowledge Curator Agent",
      "Business SME \u2014 Business Data Semantics Agent",
      "Business Analyst \u2014 Elicitation & Workshop Agent",
      "UX Designer \u2014 User Research Synthesis Agent",
      "UX Designer \u2014 Persona & Journey Modeling Agent",
      "Platform Admin \u2014 Platform Operations & User Support Agent"
    ]
  },
  "Permission-Aware RAG": {
    "name": "Permission-Aware RAG",
    "desc": "Enterprise Retrieval-Augmented Generation grounded in permissions and role-based access control.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Delivery Manager",
      "Deployment Manager",
      "Developer",
      "Platform Admin",
      "Product Owner",
      "Release Manager"
    ],
    "agents": [
      "Product Owner \u2014 Product Discovery & Insight Agent",
      "Delivery Manager \u2014 RAID & Status Reporting Agent",
      "Developer \u2014 Spec & Repository Context Agent",
      "Release Manager \u2014 Release Notes & Communication Agent",
      "Deployment Manager \u2014 Deployment Evidence & Handover Agent",
      "Platform Admin \u2014 Connector & Integration Health Agent",
      "Auditor \u2014 Evidence Collection & Authenticity Agent"
    ]
  },
  "Feedback Loop": {
    "name": "Feedback Loop",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Business SME",
      "Data Architect",
      "Delivery Manager",
      "Developer",
      "Platform Admin",
      "Product Owner",
      "UX Designer"
    ],
    "agents": [
      "Product Owner \u2014 Product Discovery & Insight Agent",
      "Business SME \u2014 Operational Exception Discovery Agent",
      "Delivery Manager \u2014 Ceremony & Action Management Agent",
      "Delivery Manager \u2014 Team Effectiveness Insight Agent",
      "UX Designer \u2014 User Research Synthesis Agent",
      "Data Architect \u2014 Data Quality & Anomaly Agent",
      "Developer \u2014 PR Documentation & Review Remediation Agent",
      "Platform Admin \u2014 Platform Operations & User Support Agent",
      "Auditor \u2014 Finding & Remediation Tracking Agent"
    ]
  },
  "Requirement Quality Agent": {
    "name": "Requirement Quality Agent",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Business Analyst",
      "Business SME",
      "Product Owner",
      "Security Reviewer",
      "Solution Architect"
    ],
    "agents": [
      "Product Owner \u2014 Story & Acceptance Criteria Agent",
      "Business SME \u2014 Business Rule Validation Agent",
      "Business Analyst \u2014 Requirement Quality Analyzer Agent",
      "Solution Architect \u2014 Architecture Driver Extraction Agent",
      "Security Reviewer \u2014 Security Requirement Agent"
    ]
  },
  "Clarification Agent": {
    "name": "Clarification Agent",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Business Analyst",
      "Business SME",
      "Developer",
      "Product Owner",
      "Technical Lead"
    ],
    "agents": [
      "Product Owner \u2014 Story & Acceptance Criteria Agent",
      "Business SME \u2014 Operational Exception Discovery Agent",
      "Business Analyst \u2014 Elicitation & Workshop Agent",
      "Business Analyst \u2014 Acceptance Criteria & Example Agent",
      "Technical Lead \u2014 Technical Task Decomposition Agent",
      "Developer \u2014 Spec & Repository Context Agent"
    ]
  },
  "Spec Linter": {
    "name": "Spec Linter",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Business Analyst",
      "Business SME",
      "Product Owner",
      "QA Engineer"
    ],
    "agents": [
      "Product Owner \u2014 Story & Acceptance Criteria Agent",
      "Business SME \u2014 Business Rule Validation Agent",
      "Business Analyst \u2014 Requirement Quality Analyzer Agent",
      "Business Analyst \u2014 Acceptance Criteria & Example Agent",
      "QA Engineer \u2014 Test-Case Generation Agent"
    ]
  },
  "Domain Rule Validator": {
    "name": "Domain Rule Validator",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Business Analyst",
      "Business SME",
      "Data Architect",
      "Product Owner",
      "QA Engineer",
      "Solution Architect"
    ],
    "agents": [
      "Product Owner \u2014 Story & Acceptance Criteria Agent",
      "Business SME \u2014 Business Rule Validation Agent",
      "Business SME \u2014 UAT Scenario Agent",
      "Business Analyst \u2014 Requirement Quality Analyzer Agent",
      "Business Analyst \u2014 Acceptance Criteria & Example Agent",
      "Solution Architect \u2014 Architecture Driver Extraction Agent",
      "Data Architect \u2014 Data Model Generation Agent",
      "Data Architect \u2014 Data Quality & Anomaly Agent",
      "QA Engineer \u2014 Test-Case Generation Agent"
    ]
  },
  "Staleness Detector": {
    "name": "Staleness Detector",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Business Analyst",
      "Business SME",
      "DevOps Engineer",
      "Product Owner",
      "Solution Architect",
      "Technical Lead",
      "UX Designer"
    ],
    "agents": [
      "Product Owner \u2014 Product Change Impact Agent",
      "Business SME \u2014 Process Change Impact Agent",
      "Business Analyst \u2014 Traceability & Change Impact Agent",
      "UX Designer \u2014 Design System Conformance Agent",
      "Solution Architect \u2014 Architecture Drift & Change Impact Agent",
      "Technical Lead \u2014 Technical Debt & Engineering Health Agent",
      "DevOps Engineer \u2014 Infrastructure-as-Code Agent"
    ]
  },
  "Regeneration Orchestrator": {
    "name": "Regeneration Orchestrator",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Business Analyst",
      "Business SME",
      "Product Owner"
    ],
    "agents": [
      "Product Owner \u2014 Product Change Impact Agent",
      "Business SME \u2014 Process Change Impact Agent",
      "Business Analyst \u2014 Traceability & Change Impact Agent"
    ]
  },
  "Conformance Agent": {
    "name": "Conformance Agent",
    "desc": "Compares generated or implemented outputs with the approved specification and reports functional, technical and policy deviations.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Business Analyst",
      "Business SME",
      "Data Architect",
      "Deployment Manager",
      "DevOps Engineer",
      "Developer",
      "Product Owner",
      "QA Engineer",
      "Security Reviewer",
      "Solution Architect",
      "Technical Lead",
      "UX Designer"
    ],
    "agents": [
      "Product Owner \u2014 UAT & Business Readiness Agent",
      "Business SME \u2014 UAT Scenario Agent",
      "Business Analyst \u2014 Story-to-Spec Decomposition Agent",
      "UX Designer \u2014 Wireframe & Prototype Generation Agent",
      "UX Designer \u2014 Accessibility Review Agent",
      "UX Designer \u2014 Design System Conformance Agent",
      "UX Designer \u2014 UX Implementation Review Agent",
      "Solution Architect \u2014 API & Integration Contract Agent",
      "Solution Architect \u2014 Architecture Drift & Change Impact Agent",
      "Data Architect \u2014 Data Model Generation Agent",
      "Data Architect \u2014 Schema & SQL Quality Agent",
      "Security Reviewer \u2014 Code & Dependency Security Analyzer Agent",
      "Security Reviewer \u2014 Security Remediation Support Agent",
      "Technical Lead \u2014 Code-Quality Analyzer Agent",
      "Technical Lead \u2014 Security Analyzer Agent",
      "Technical Lead \u2014 PR Review & Spec Conformance Agent",
      "Technical Lead \u2014 Remediation Support Analyzer Agent",
      "Developer \u2014 Spec-to-Code Generation Agent",
      "Developer \u2014 Unit & Integration Test Agent",
      "Developer \u2014 Refactoring & Code-Quality Agent",
      "QA Engineer \u2014 Test-Case Generation Agent",
      "QA Engineer \u2014 Quality Gate & UAT Evidence Agent",
      "DevOps Engineer \u2014 CI/CD Pipeline Generation Agent",
      "DevOps Engineer \u2014 Infrastructure-as-Code Agent",
      "Deployment Manager \u2014 Deployment Plan Validator Agent",
      "Deployment Manager \u2014 Smoke Test & Health Verification Agent",
      "Auditor \u2014 Traceability & Approval Audit Agent"
    ]
  },
  "Contract-Test Generator": {
    "name": "Contract-Test Generator",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Business Analyst",
      "Business SME",
      "Data Architect",
      "Deployment Manager",
      "Developer",
      "Product Owner",
      "QA Engineer",
      "Solution Architect",
      "Technical Lead",
      "UX Designer"
    ],
    "agents": [
      "Product Owner \u2014 UAT & Business Readiness Agent",
      "Business SME \u2014 UAT Scenario Agent",
      "Business Analyst \u2014 Acceptance Criteria & Example Agent",
      "UX Designer \u2014 UX Implementation Review Agent",
      "Solution Architect \u2014 API & Integration Contract Agent",
      "Data Architect \u2014 Migration & Reconciliation Agent",
      "Technical Lead \u2014 Remediation Support Analyzer Agent",
      "Developer \u2014 Unit & Integration Test Agent",
      "QA Engineer \u2014 Test-Case Generation Agent",
      "QA Engineer \u2014 Test Automation Agent",
      "Deployment Manager \u2014 Smoke Test & Health Verification Agent"
    ]
  },
  "Prompt/Output Registry": {
    "name": "Prompt/Output Registry",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "DevOps Engineer",
      "Platform Admin",
      "Product Owner",
      "Security Reviewer",
      "Solution Architect"
    ],
    "agents": [
      "Product Owner \u2014 Product Decision Traceability Agent",
      "Solution Architect \u2014 ADR & Architecture Documentation Agent",
      "Security Reviewer \u2014 Compliance & AI Security Evidence Agent",
      "DevOps Engineer \u2014 Software Supply-Chain Assurance Agent",
      "Platform Admin \u2014 AI Governance & Evidence Agent",
      "Auditor \u2014 Evidence Collection & Authenticity Agent"
    ]
  },
  "SME Validation Queue": {
    "name": "SME Validation Queue",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Business SME"
    ],
    "agents": [
      "Business SME \u2014 Domain Knowledge Curator Agent",
      "Business SME \u2014 Business Data Semantics Agent"
    ]
  },
  "Confidence/Escalation Service": {
    "name": "Confidence/Escalation Service",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Business SME",
      "UX Designer"
    ],
    "agents": [
      "Business SME \u2014 Domain Knowledge Curator Agent",
      "Business SME \u2014 Operational Exception Discovery Agent",
      "UX Designer \u2014 User Research Synthesis Agent"
    ]
  },
  "Policy Gate": {
    "name": "Policy Gate",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Business SME",
      "Data Architect",
      "Deployment Manager",
      "DevOps Engineer",
      "Developer",
      "Platform Admin",
      "QA Engineer",
      "Security Reviewer",
      "Technical Lead",
      "UX Designer"
    ],
    "agents": [
      "Business SME \u2014 Business Rule Validation Agent",
      "UX Designer \u2014 Accessibility Review Agent",
      "UX Designer \u2014 Design System Conformance Agent",
      "Data Architect \u2014 Schema & SQL Quality Agent",
      "Security Reviewer \u2014 Code & Dependency Security Analyzer Agent",
      "Technical Lead \u2014 Code-Quality Analyzer Agent",
      "Developer \u2014 Spec-to-Code Generation Agent",
      "Developer \u2014 Refactoring & Code-Quality Agent",
      "QA Engineer \u2014 Test Automation Agent",
      "DevOps Engineer \u2014 CI/CD Pipeline Generation Agent",
      "DevOps Engineer \u2014 Configuration & Secret Security Agent",
      "Deployment Manager \u2014 Environment Readiness Agent",
      "Deployment Manager \u2014 Smoke Test & Health Verification Agent",
      "Platform Admin \u2014 Workflow & Gate Configuration Agent"
    ]
  },
  "Exception Catalog": {
    "name": "Exception Catalog",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Business SME"
    ],
    "agents": [
      "Business SME \u2014 Operational Exception Discovery Agent"
    ]
  },
  "Canonical Artifact Model": {
    "name": "Canonical Artifact Model",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Business SME",
      "Data Architect",
      "Delivery Manager",
      "Deployment Manager",
      "Platform Admin",
      "Release Manager"
    ],
    "agents": [
      "Business SME \u2014 Business Data Semantics Agent",
      "Delivery Manager \u2014 Dependency & Impediment Agent",
      "Data Architect \u2014 Metadata & Lineage Agent",
      "Release Manager \u2014 Release Calendar & Collision Agent",
      "Deployment Manager \u2014 Environment Readiness Agent",
      "Platform Admin \u2014 Connector & Integration Health Agent"
    ]
  },
  "AI Eval Harness": {
    "name": "AI Eval Harness",
    "desc": "Continuous AI evaluation framework running benchmark datasets, rubric scoring, and tool-call correctness checks.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Business Analyst",
      "Data Architect",
      "Delivery Manager",
      "Developer",
      "Platform Admin",
      "QA Engineer",
      "Release Manager",
      "Security Reviewer",
      "Solution Architect",
      "Technical Lead"
    ],
    "agents": [
      "Business Analyst \u2014 Requirement Quality Analyzer Agent",
      "Delivery Manager \u2014 Team Effectiveness Insight Agent",
      "Solution Architect \u2014 Solution Option & Trade-off Agent",
      "Data Architect \u2014 Schema & SQL Quality Agent",
      "Security Reviewer \u2014 Code & Dependency Security Analyzer Agent",
      "Technical Lead \u2014 Code-Quality Analyzer Agent",
      "Technical Lead \u2014 Remediation Support Analyzer Agent",
      "Developer \u2014 Unit & Integration Test Agent",
      "QA Engineer \u2014 Test Automation Agent",
      "Release Manager \u2014 Change Risk Assessment Agent",
      "Platform Admin \u2014 Platform Operations & User Support Agent",
      "Auditor \u2014 Control Testing & Anomaly Agent",
      "Auditor \u2014 AI Governance Audit Agent"
    ]
  },
  "Spec Registry": {
    "name": "Spec Registry",
    "desc": "Authoritative machine-readable repository storing specifications (Markdown/YAML/OpenAPI) as the single source of truth across the lifecycle.",
    "priority": "P0",
    "personas": [
      "Business Analyst",
      "Data Architect",
      "DevOps Engineer",
      "Developer",
      "QA Engineer",
      "Release Manager",
      "Security Reviewer",
      "Solution Architect",
      "Technical Lead",
      "UX Designer"
    ],
    "agents": [
      "Business Analyst \u2014 Story-to-Spec Decomposition Agent",
      "Business Analyst \u2014 Spec Baseline & Clarification Agent",
      "UX Designer \u2014 Persona & Journey Modeling Agent",
      "UX Designer \u2014 Wireframe & Prototype Generation Agent",
      "Solution Architect \u2014 Architecture Driver Extraction Agent",
      "Solution Architect \u2014 API & Integration Contract Agent",
      "Data Architect \u2014 Data Model Generation Agent",
      "Security Reviewer \u2014 Security Requirement Agent",
      "Technical Lead \u2014 Technical Task Decomposition Agent",
      "Technical Lead \u2014 PR Review & Spec Conformance Agent",
      "Developer \u2014 Spec & Repository Context Agent",
      "Developer \u2014 Spec-to-Code Generation Agent",
      "QA Engineer \u2014 Risk-Based Test Strategy Agent",
      "DevOps Engineer \u2014 CI/CD Pipeline Generation Agent",
      "Release Manager \u2014 Release Scope Assembly Agent"
    ]
  },
  "Artifact Versioning Service": {
    "name": "Artifact Versioning Service",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Business Analyst",
      "DevOps Engineer",
      "Solution Architect",
      "UX Designer"
    ],
    "agents": [
      "Business Analyst \u2014 Story-to-Spec Decomposition Agent",
      "UX Designer \u2014 Wireframe & Prototype Generation Agent",
      "Solution Architect \u2014 ADR & Architecture Documentation Agent",
      "DevOps Engineer \u2014 CI/CD Pipeline Generation Agent"
    ]
  },
  "Event Bus": {
    "name": "Event Bus",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Delivery Manager",
      "Platform Admin",
      "Release Manager"
    ],
    "agents": [
      "Delivery Manager \u2014 Ceremony & Action Management Agent",
      "Release Manager \u2014 Release Calendar & Collision Agent",
      "Platform Admin \u2014 Connector & Integration Health Agent"
    ]
  },
  "Drift/Regression Monitor": {
    "name": "Drift/Regression Monitor",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Data Architect",
      "Delivery Manager",
      "Developer",
      "QA Engineer"
    ],
    "agents": [
      "Delivery Manager \u2014 Flow & Delivery Health Agent",
      "Data Architect \u2014 Data Quality & Anomaly Agent",
      "Developer \u2014 Refactoring & Code-Quality Agent",
      "QA Engineer \u2014 Test Automation Agent",
      "Auditor \u2014 Control Testing & Anomaly Agent"
    ]
  },
  "Exception Manager": {
    "name": "Exception Manager",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Delivery Manager",
      "Platform Admin",
      "Release Manager",
      "Security Reviewer"
    ],
    "agents": [
      "Delivery Manager \u2014 Lifecycle Gate Coordination Agent",
      "Security Reviewer \u2014 Risk Exception & Approval Agent",
      "Release Manager \u2014 Approval & Evidence Readiness Agent",
      "Platform Admin \u2014 Workflow & Gate Configuration Agent",
      "Auditor \u2014 Finding & Remediation Tracking Agent"
    ]
  },
  "NFR Agent": {
    "name": "NFR Agent",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "QA Engineer",
      "Solution Architect",
      "UX Designer"
    ],
    "agents": [
      "UX Designer \u2014 Accessibility Review Agent",
      "Solution Architect \u2014 Architecture Driver Extraction Agent",
      "Solution Architect \u2014 NFR & Risk Conformance Agent",
      "QA Engineer \u2014 Risk-Based Test Strategy Agent"
    ]
  },
  "Policy Engine": {
    "name": "Policy Engine",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Data Architect",
      "DevOps Engineer",
      "Platform Admin",
      "QA Engineer",
      "Security Reviewer",
      "Solution Architect",
      "Technical Lead",
      "UX Designer"
    ],
    "agents": [
      "UX Designer \u2014 Accessibility Review Agent",
      "Solution Architect \u2014 NFR & Risk Conformance Agent",
      "Data Architect \u2014 Data Quality & Anomaly Agent",
      "Data Architect \u2014 Data Privacy & Retention Agent",
      "Security Reviewer \u2014 Security Requirement Agent",
      "Security Reviewer \u2014 Threat Modeling Agent",
      "Technical Lead \u2014 Security Analyzer Agent",
      "QA Engineer \u2014 Risk-Based Test Strategy Agent",
      "QA Engineer \u2014 Test Data & Environment Agent",
      "DevOps Engineer \u2014 Infrastructure-as-Code Agent",
      "DevOps Engineer \u2014 Software Supply-Chain Assurance Agent",
      "Platform Admin \u2014 RBAC & Segregation-of-Duties Analyzer Agent"
    ]
  },
  "Runtime Evidence Collector": {
    "name": "Runtime Evidence Collector",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Data Architect",
      "Deployment Manager",
      "DevOps Engineer",
      "Developer",
      "Platform Admin",
      "QA Engineer",
      "Release Manager",
      "UX Designer"
    ],
    "agents": [
      "UX Designer \u2014 UX Implementation Review Agent",
      "Data Architect \u2014 Migration & Reconciliation Agent",
      "Developer \u2014 Debugging & Root-Cause Agent",
      "QA Engineer \u2014 Test Data & Environment Agent",
      "DevOps Engineer \u2014 Build & Deployment Failure Analyst Agent",
      "Release Manager \u2014 Rollback & Post-Release Learning Agent",
      "Deployment Manager \u2014 Environment Readiness Agent",
      "Deployment Manager \u2014 Smoke Test & Health Verification Agent",
      "Deployment Manager \u2014 Rollback Decision Support Agent",
      "Platform Admin \u2014 Platform Operations & User Support Agent"
    ]
  },
  "AST/Schema Validator": {
    "name": "AST/Schema Validator",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Data Architect",
      "Developer",
      "Security Reviewer",
      "Solution Architect",
      "Technical Lead"
    ],
    "agents": [
      "Solution Architect \u2014 API & Integration Contract Agent",
      "Data Architect \u2014 Schema & SQL Quality Agent",
      "Security Reviewer \u2014 Code & Dependency Security Analyzer Agent",
      "Technical Lead \u2014 Code-Quality Analyzer Agent",
      "Technical Lead \u2014 Security Analyzer Agent",
      "Developer \u2014 Spec-to-Code Generation Agent",
      "Developer \u2014 Refactoring & Code-Quality Agent"
    ]
  },
  "Threat Model Agent": {
    "name": "Threat Model Agent",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Security Reviewer",
      "Solution Architect"
    ],
    "agents": [
      "Solution Architect \u2014 NFR & Risk Conformance Agent",
      "Security Reviewer \u2014 Threat Modeling Agent"
    ]
  },
  "Privacy/Compliance Agent": {
    "name": "Privacy/Compliance Agent",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Data Architect",
      "Security Reviewer",
      "Solution Architect"
    ],
    "agents": [
      "Solution Architect \u2014 NFR & Risk Conformance Agent",
      "Data Architect \u2014 Data Privacy & Retention Agent",
      "Security Reviewer \u2014 Security Requirement Agent"
    ]
  },
  "Rollback Validator": {
    "name": "Rollback Validator",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Data Architect",
      "Deployment Manager",
      "DevOps Engineer",
      "Release Manager"
    ],
    "agents": [
      "Data Architect \u2014 Migration & Reconciliation Agent",
      "DevOps Engineer \u2014 Delivery Performance & Release Safety Agent",
      "Release Manager \u2014 Rollback & Post-Release Learning Agent",
      "Deployment Manager \u2014 Deployment Plan Validator Agent",
      "Deployment Manager \u2014 Rollback Decision Support Agent"
    ]
  },
  "Data Classification & Redaction": {
    "name": "Data Classification & Redaction",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Data Architect",
      "DevOps Engineer",
      "Platform Admin",
      "QA Engineer"
    ],
    "agents": [
      "Data Architect \u2014 Data Privacy & Retention Agent",
      "QA Engineer \u2014 Test Data & Environment Agent",
      "DevOps Engineer \u2014 Configuration & Secret Security Agent",
      "Platform Admin \u2014 AI Governance & Evidence Agent",
      "Auditor \u2014 AI Governance Audit Agent"
    ]
  },
  "Agent Permission Policy": {
    "name": "Agent Permission Policy",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Data Architect",
      "Deployment Manager",
      "DevOps Engineer",
      "Platform Admin",
      "Security Reviewer"
    ],
    "agents": [
      "Data Architect \u2014 Data Privacy & Retention Agent",
      "Security Reviewer \u2014 Compliance & AI Security Evidence Agent",
      "DevOps Engineer \u2014 Configuration & Secret Security Agent",
      "Deployment Manager \u2014 Bounded Production Execution Agent",
      "Platform Admin \u2014 Access Provisioning Agent",
      "Platform Admin \u2014 RBAC & Segregation-of-Duties Analyzer Agent",
      "Auditor \u2014 AI Governance Audit Agent"
    ]
  },
  "Model Gateway/Router": {
    "name": "Model Gateway/Router",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Platform Admin",
      "Security Reviewer"
    ],
    "agents": [
      "Security Reviewer \u2014 Compliance & AI Security Evidence Agent",
      "Platform Admin \u2014 AI Governance & Evidence Agent",
      "Auditor \u2014 Risk-Based Audit Planning Agent",
      "Auditor \u2014 AI Governance Audit Agent"
    ]
  },
  "Golden Dataset Manager": {
    "name": "Golden Dataset Manager",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Auditor",
      "Developer"
    ],
    "agents": [
      "Developer \u2014 Unit & Integration Test Agent",
      "Auditor \u2014 Control Testing & Anomaly Agent"
    ]
  },
  "Secret Vault": {
    "name": "Secret Vault",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "DevOps Engineer"
    ],
    "agents": [
      "DevOps Engineer \u2014 Configuration & Secret Security Agent"
    ]
  },
  "Deployment Gatekeeper": {
    "name": "Deployment Gatekeeper",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Deployment Manager",
      "DevOps Engineer"
    ],
    "agents": [
      "DevOps Engineer \u2014 Delivery Performance & Release Safety Agent",
      "Deployment Manager \u2014 Deployment Plan Validator Agent",
      "Deployment Manager \u2014 Bounded Production Execution Agent"
    ]
  },
  "Canary/Blast-Radius Controller": {
    "name": "Canary/Blast-Radius Controller",
    "desc": "Stores tamper-evident evidence and operational assets linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.",
    "priority": "P0",
    "personas": [
      "Deployment Manager",
      "DevOps Engineer"
    ],
    "agents": [
      "DevOps Engineer \u2014 Delivery Performance & Release Safety Agent",
      "Deployment Manager \u2014 Bounded Production Execution Agent"
    ]
  }
};

// ALIAS MAPPING FOR 27 FLOWCHART COMPONENT IDS TO SDD COMPONENT NAMES
window.SDLC_FLOWCHART_ID_MAP = {
  'comp-supervisor-orchestrator': 'Supervisor / Workflow Orchestrator',
  'comp-persona-agents': 'Persona Agents',
  'comp-model-gateway': 'Model Gateway / Router',
  'comp-tool-adapters': 'Tool Adapters',
  'comp-permission-aware-rag': 'Permission-Aware RAG',
  'comp-spec-registry': 'Spec Registry',
  'comp-baseline-manager': 'Baseline Manager',
  'comp-artifact-graph': 'Artifact Graph',
  'comp-change-impact': 'Change Impact Agent',
  'comp-staleness-detector': 'Staleness Detector',
  'comp-canonical-artifact-model': 'Canonical Artifact Model',
  'comp-ai-eval-harness': 'AI Eval Harness',
  'comp-golden-datasets': 'Golden Datasets',
  'comp-rubric-evaluators': 'Rubric Evaluators',
  'comp-safety-tests': 'Safety Tests',
  'comp-conformance-agent': 'Conformance Agent',
  'comp-drift-monitor': 'Drift / Regression Monitor',
  'comp-agent-registry': 'Agent Registry',
  'comp-rbac-sod': 'RBAC/SoD Service',
  'comp-approval-gate-engine': 'Approval Gate Engine',
  'comp-policy-engine': 'Policy Engine',
  'comp-data-classification': 'Data Classification / Redaction',
  'comp-evidence-ledger': 'Evidence Ledger',
  'comp-decision-log': 'Decision Log',
  'comp-audit-export': 'Audit Export Service',
  'comp-sdlc-metrics-store': 'SDLC Metrics Store',
  'comp-value-dashboard': 'Value Dashboard'
};

// GLOBAL SIDEBAR TOGGLE FUNCTION
window.toggleSDLCSidebar = function () {};

// GLOBAL MODAL OPEN & CLOSE FUNCTIONS WITH EXACT SDD COMPONENT CARD DETAILS
window.openSDLCModal = function (compId, compName) {
  const backdrop = document.getElementById('component-modal-backdrop');
  const cardContainer = document.getElementById('sdd-modal-card-content');
  if (!backdrop || !cardContainer) return;

  const catalog = window.SDD_COMPONENTS_DATA || {};
  const idMap = window.SDLC_FLOWCHART_ID_MAP || {};

  let lookupName = compName || idMap[compId] || compId;
  let info = catalog[lookupName];

  if (!info) {
    const keyMatch = Object.keys(catalog).find(k => k.toLowerCase() === lookupName.toLowerCase());
    if (keyMatch) info = catalog[keyMatch];
  }

  if (!info) {
    info = {
      name: lookupName || 'SDLC Component Capability',
      desc: 'Stores tamper-evident evidence linking source inputs, AI actions, human reviews, approvals, tests and deployment outcomes.',
      priority: 'P0',
      personas: ['Auditor', 'Business Analyst', 'Business SME', 'Business Sponsor', 'Data Architect', 'Delivery Manager', 'Deployment Manager', 'DevOps Engineer', 'Developer', 'Platform Admin', 'Product Owner', 'QA Engineer', 'Release Manager', 'Security Reviewer', 'Solution Architect', 'Technical Lead', 'UX Designer'],
      agents: [
        'Business Sponsor — Business Case & Value Analyst Agent',
        'Business Sponsor — Executive Status & Evidence Synthesis Agent',
        'Product Owner — Product Discovery & Insight Agent',
        'Product Owner — Product Decision Traceability Agent'
      ]
    };
  }

  const personaCount = info.personas ? info.personas.length : 0;
  const agentCount = info.agents ? info.agents.length : 0;
  const prio = info.priority || 'P0';
  const prioClass = prio === 'P0' ? 'badge-p0' : 'badge-p1';

  cardContainer.innerHTML = `
    <div class="sdd-modal-card">
      <div class="sdd-modal-header">
        <h3 class="sdd-modal-title">${info.name}</h3>
        <p class="sdd-modal-desc">${info.desc}</p>
        <div class="sdd-modal-badges">
          <span class="sdd-badge ${prioClass}">${prio}</span>
          <span class="sdd-badge badge-personas">${personaCount} personas</span>
          <span class="sdd-badge badge-agents">${agentCount} agent links</span>
        </div>
      </div>

      <div class="sdd-modal-section">
        <h4 class="sdd-section-title">TAGGED PERSONAS</h4>
        <div class="sdd-persona-chips">
          ${info.personas.map(p => `<span class="sdd-chip">${p}</span>`).join('')}
        </div>
      </div>

      <div class="sdd-modal-section">
        <h4 class="sdd-section-title">AGENTS NEEDING IT</h4>
        <div class="sdd-agent-links-list">
          ${info.agents.map(a => {
            const parts = a.split(' — ');
            if (parts.length > 1) {
              return `<div class="sdd-agent-link-item"><strong>${parts[0]}</strong> — ${parts.slice(1).join(' — ')}</div>`;
            }
            return `<div class="sdd-agent-link-item">${a}</div>`;
          }).join('')}
        </div>
      </div>
    </div>
  `;

  backdrop.classList.add('active');
};

window.closeSDLCModal = function () {
  const backdrop = document.getElementById('component-modal-backdrop');
  if (backdrop) backdrop.classList.remove('active');
};

// MAIN APPLICATION ENGINE
(function () {
  function getSDLCData() {
    return window.SDLC_DATA || {
      TARGET_ARCHITECTURE_LAYERS: [],
      PERSONA_COLORS: {},
      PERSONA_FLOW_SEQUENCES: {},
      PERSONAS: []
    };
  }

  const state = {
    activeTab: 'requirements',
    activePersonaName: 'Sponsor',
    diagramZoomScale: 0.72,
    circuitZoomScale: 0.72,
    isCircuitSwitchClosed: true
  };

  let masterTabBtns;
  let tabPanes;
  let viewTitleEl;
  let viewSubtitleEl;
  let canvasViewportEl;

  function initApp() {
    masterTabBtns = document.querySelectorAll('.master-tab-btn');
    tabPanes = document.querySelectorAll('.tab-pane');

    viewTitleEl = document.getElementById('view-title');
    viewSubtitleEl = document.getElementById('view-subtitle');
    canvasViewportEl = document.getElementById('canvas-viewport');

    setupMasterTabs();
    setupZoomControlsDelegation();
    setupModalKeyboardAndBackdrop();
    renderDiagramReplicaView();
    renderSchematicCircuitView();

    window.addEventListener('resize', () => {
      if (state.activeTab === 'circuit') {
        renderSchematicCircuitView();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

  function setupMasterTabs() {
    masterTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        switchTab(targetTab);
      });
    });
  }

  function switchTab(tabId) {
    state.activeTab = tabId;

    masterTabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === tabId));
    tabPanes.forEach(pane => pane.classList.toggle('active', pane.id === `tab-${tabId}`));

    if (tabId === 'flowchart') {
      renderDiagramReplicaView();
      setTimeout(() => {
        applyDiagramScale(state.diagramZoomScale);
      }, 40);
    } else if (tabId === 'circuit') {
      renderSchematicCircuitView();
      setTimeout(() => {
        applyCircuitScale(state.circuitZoomScale);
      }, 40);
    }
  }

  function setupZoomControlsDelegation() {
    document.addEventListener('click', (e) => {
      const zoomBtn = e.target.closest('.zoom-btn:not(.circuit-zoom-btn)');
      if (zoomBtn && zoomBtn.dataset.scale) {
        const scaleVal = parseFloat(zoomBtn.dataset.scale);
        state.diagramZoomScale = scaleVal;

        document.querySelectorAll('.zoom-btn:not(.circuit-zoom-btn)').forEach(b => {
          const bScale = parseFloat(b.dataset.scale);
          b.classList.toggle('active', Math.abs(bScale - scaleVal) < 0.02);
        });

        applyDiagramScale(scaleVal);
        return;
      }

      const circuitZoomBtn = e.target.closest('.circuit-zoom-btn');
      if (circuitZoomBtn && circuitZoomBtn.dataset.circuitScale) {
        const scaleVal = parseFloat(circuitZoomBtn.dataset.circuitScale);
        state.circuitZoomScale = scaleVal;

        document.querySelectorAll('.circuit-zoom-btn').forEach(b => {
          const bScale = parseFloat(b.dataset.circuitScale);
          b.classList.toggle('active', Math.abs(bScale - scaleVal) < 0.02);
        });

        applyCircuitScale(scaleVal);
      }
    });
  }

  function applyDiagramScale(scaleVal) {
    const container = document.querySelector('.diagram-replica-container');
    if (!container) return;
    container.className = 'diagram-replica-container';
    container.style.transform = 'none';
    container.style.marginBottom = '0px';
  }

  function applyCircuitScale(scaleVal) {
    const wrapper = document.getElementById('schematic-wrapper');
    if (!wrapper) return;
    wrapper.style.transform = 'none';
    wrapper.style.marginBottom = '0px';
  }

  function setupModalKeyboardAndBackdrop() {
    const backdrop = document.getElementById('component-modal-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) window.closeSDLCModal();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') window.closeSDLCModal();
    });
  }

  function renderDiagramReplicaView() {
    if (!canvasViewportEl) return;
    const data = getSDLCData();
    const personas = data.PERSONAS || [];
    const layers = data.TARGET_ARCHITECTURE_LAYERS || [];

    const activeView = window.currentSolutionView || 'target-state';

    if (activeView === 'ba-platform') {
      if (viewTitleEl) viewTitleEl.textContent = "Solution Component — Business Analysis Intelligence & Traceability Platform";
      if (viewSubtitleEl) viewSubtitleEl.textContent = "AI Assists ➔ Humans Approve ➔ Every requirement has evidence ➔ Every release links to value";
    } else {
      if (viewTitleEl) viewTitleEl.textContent = "Solution Component — Target-State SDLC AI Agent Framework Architecture";
      if (viewSubtitleEl) viewSubtitleEl.textContent = "All 27 SDLC capability components displayed. Click any component box to view its SDD Agent Studio details!";
    }

    let html = `
      <!-- View 1: Target-State SDLC AI Agent Framework Architecture -->
      <div id="solution-view-target-state" style="width:100%; height:100%; display:${activeView === 'target-state' ? 'flex' : 'none'}; flex-direction:column;">
        <div class="persona-pills-bar">
          ${personas.map(p => `
            <button class="persona-pill-btn" style="background:${p.color};" onclick="window.selectPersonaFlow('${p.name}')">
              <i class="fa-solid ${p.icon}"></i> ${p.name}
            </button>
          `).join('')}
        </div>

        <div class="diagram-replica-container">
          <div class="diagram-arrow-bar"><i class="fa-solid fa-arrows-up-down"></i> Work Requests & Approvals <i class="fa-solid fa-arrows-up-down"></i></div>
          ${layers.map(layer => `
            <div class="diagram-layer-card" style="border-left:4px solid ${layer.color};">
              <div class="diagram-layer-header">
                <div class="diagram-layer-title" style="color:${layer.color};">
                  <i class="fa-solid ${layer.icon}"></i> ${layer.title}
                </div>
                <span class="badge-tag" style="background:${layer.color}15; color:${layer.color}; border:1px solid ${layer.color}44; font-size:0.62rem; padding:1px 5px; border-radius:4px; font-weight:600;">
                  ${layer.subtitle}
                </span>
              </div>
              <div class="components-grid">
                ${layer.components.map(comp => `
                  <div class="comp-box" id="${comp.id}" data-comp-id="${comp.id}" data-comp-name="${comp.name}" 
                       style="background-color:${layer.color} !important; cursor:pointer; opacity:1 !important; filter:none !important;" 
                       onclick="window.openSDLCModal('${comp.id}', '${comp.name}')" 
                       title="Click to view SDD Agent Studio component details">
                    <i class="fa-solid fa-cubes"></i> ${comp.name}
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="diagram-arrow-bar"><i class="fa-solid fa-arrows-up-down"></i> ${layer.subtitle} <i class="fa-solid fa-arrows-up-down"></i></div>
          `).join('')}
        </div>
      </div>

      <!-- View 2: Business Analysis Intelligence & Traceability Platform (AI Assists) -->
      <div id="solution-view-ba-platform" class="ba-canvas-card" style="display:${activeView === 'ba-platform' ? 'flex' : 'none'}; width:100%; height:100%; flex-direction:column; justify-content:space-between;">
        <!-- Top AI Assists Agents Row -->
        <div style="text-align:center; font-size:0.75rem; font-weight:800; color:#475569; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:6px;">
          <i class="fa-solid fa-microchip me-1" style="color:#2563eb;"></i> ── AI ASSISTS (PERSONA AGENT CO-PILOTS) ──
        </div>
        <div class="ba-agents-top-bar">
          <div class="ba-agent-chip" style="border-color:#d97706; background:#fffbeb;">
            <i class="fa-solid fa-user-gear" style="color:#d97706;"></i> BA Agent
          </div>
          <div class="ba-agent-chip" style="border-color:#f59e0b; background:#fffbe3;">
            <i class="fa-solid fa-user-astronaut" style="color:#f59e0b;"></i> SME Agent
          </div>
          <div class="ba-agent-chip" style="border-color:#eab308; background:#fef9c3;">
            <i class="fa-solid fa-list-check" style="color:#ca8a04;"></i> Product Owner Agent
          </div>
          <div class="ba-agent-chip" style="border-color:#10b981; background:#ecfdf5;">
            <i class="fa-solid fa-drafting-compass" style="color:#10b981;"></i> Architect Agent
          </div>
          <div class="ba-agent-chip" style="border-color:#0284c7; background:#f0f9ff;">
            <i class="fa-solid fa-shield-halved" style="color:#0284c7;"></i> Compliance Agent
          </div>
          <div class="ba-agent-chip" style="border-color:#f43f5e; background:#fff1f2;">
            <i class="fa-solid fa-vial-circle-check" style="color:#f43f5e;"></i> QA Agent
          </div>
          <div class="ba-agent-chip" style="border-color:#8b5cf6; background:#f3e8ff;">
            <i class="fa-solid fa-chart-line" style="color:#8b5cf6;"></i> Value Agent
          </div>
        </div>

        <!-- Downward Arrow Indicator -->
        <div style="text-align:center; color:#2563eb; font-size:1.1rem; margin:-4px 0 6px 0;">
          <i class="fa-solid fa-circle-arrow-down"></i>
        </div>

        <!-- Main 3-Column Lifecycle Layout Grid -->
        <div class="ba-flow-grid">
          <div class="ba-sources-column">
            <div style="font-size:0.68rem; font-weight:800; color:#475569; text-transform:uppercase; text-align:center; margin-bottom:4px;">
              <i class="fa-solid fa-inbox me-1"></i> SOURCES
            </div>
            <div class="ba-source-card"><i class="fa-solid fa-users-rectangle me-1" style="color:#2563eb;"></i> Meetings</div>
            <div class="ba-source-card"><i class="fa-solid fa-envelope me-1" style="color:#0284c7;"></i> Emails</div>
            <div class="ba-source-card"><i class="fa-solid fa-comments me-1" style="color:#10b981;"></i> Chats</div>
            <div class="ba-source-card"><i class="fa-solid fa-file-contract me-1" style="color:#d97706;"></i> Policies</div>
            <div class="ba-source-card"><i class="fa-solid fa-ticket me-1" style="color:#7c3aed;"></i> Tickets</div>
            <div class="ba-source-card"><i class="fa-solid fa-file-pdf me-1" style="color:#e11d48;"></i> Documents</div>
            <div class="ba-source-card"><i class="fa-solid fa-user-tie me-1" style="color:#475569;"></i> Stakeholder views</div>
            <div class="ba-source-card"><i class="fa-solid fa-comment-dots me-1" style="color:#059669;"></i> Customer Feedback</div>
          </div>

          <div class="ba-pillars-row">
            <div class="ba-pillar-card">
              <div class="ba-pillar-header" style="background:#1e40af;">1 Discover</div>
              <div class="ba-pillar-body" style="background:#eff6ff;">
                <div style="font-weight:800; color:#1e40af; margin-bottom:4px;">Evidence Extraction</div>
                <div>Source Citations & Semantic Grounding</div>
              </div>
            </div>
            <div class="ba-pillar-card">
              <div class="ba-pillar-header" style="background:#d97706;">2 Challenge</div>
              <div class="ba-pillar-body" style="background:#fffbe3;">
                <div style="font-weight:800; color:#b45309; margin-bottom:4px;">Ambiguity & Conflicts</div>
                <div>Missing Stakeholders & Policy Questions</div>
              </div>
            </div>
            <div class="ba-pillar-card">
              <div class="ba-pillar-header" style="background:#2563eb;">3 Structure</div>
              <div class="ba-pillar-body" style="background:#f0f9ff;">
                <div style="font-weight:800; color:#1d4ed8; margin-bottom:2px;">Decomposition Chain:</div>
                <div style="font-size:0.68rem; line-height:1.4; color:#334155;">
                  Objective ➔ Capability<br>➔ Feature ➔ Epic<br>➔ Story ➔ Requirement<br>➔ Acceptance Criteria
                </div>
              </div>
            </div>
            <div class="ba-pillar-card">
              <div class="ba-pillar-header" style="background:#16a34a;">4 Trace</div>
              <div class="ba-pillar-body" style="background:#ecfdf5;">
                <div style="font-weight:800; color:#15803d; margin-bottom:2px;">Artifact Graph Lineage:</div>
                <div style="font-size:0.68rem; line-height:1.4; color:#166534;">
                  Evidence ➔ Design<br>➔ Code ➔ Test<br>➔ Release
                </div>
              </div>
            </div>
            <div class="ba-pillar-card">
              <div class="ba-pillar-header" style="background:#7c3aed;">5 Value</div>
              <div class="ba-pillar-body" style="background:#f3e8ff;">
                <div style="font-weight:800; color:#6d28d9; margin-bottom:4px;">Outcome Dashboard</div>
                <div>KPI Baseline / Target / Actual Tracking</div>
              </div>
            </div>
          </div>

          <div class="ba-integrations-column">
            <div style="font-size:0.68rem; font-weight:800; color:#475569; text-transform:uppercase; text-align:center; margin-bottom:4px;">
              <i class="fa-solid fa-plug me-1"></i> INTEGRATIONS
            </div>
            <div class="ba-integration-card" style="background:#1d4ed8;"><i class="fa-solid fa-cube me-1"></i> Jira / Azure DevOps</div>
            <div class="ba-integration-card" style="background:#dc2626;"><i class="fa-solid fa-vial me-1"></i> Test Tools</div>
            <div class="ba-integration-card" style="background:#16a34a;"><i class="fa-solid fa-code-branch me-1"></i> CI / CD</div>
            <div class="ba-integration-card" style="background:#7c3aed;"><i class="fa-solid fa-box-archive me-1"></i> Release Evidence</div>
          </div>
        </div>

        <div class="ba-foundation-bar">
          <i class="fa-solid fa-cubes-stacked me-2" style="color:#60a5fa;"></i> SHARED CONTROL PLATFORM: &nbsp; Spec Registry &nbsp;|&nbsp; Evidence Ledger &nbsp;|&nbsp; AI Eval Harness &nbsp;|&nbsp; Approval Gates &nbsp;|&nbsp; RBAC / SoD &nbsp;|&nbsp; Decision Log
        </div>

        <div class="ba-approval-loop-row">
          <div style="color:#0284c7;"><i class="fa-solid fa-magnifying-glass me-1"></i> Every requirement has evidence</div>
          <div style="color:#dc2626; font-size:0.8rem; background:#fee2e2; padding:3px 12px; border-radius:20px; border:1px solid #f87171;">
            <i class="fa-solid fa-user-check me-1"></i> <strong>Humans approve</strong> (OWASP Enforced)
          </div>
          <div style="color:#7c3aed;"><i class="fa-solid fa-award me-1"></i> Every release links to value</div>
        </div>
      </div>
    `;

    canvasViewportEl.innerHTML = html;

    const selectEl = document.getElementById('solution-view-select');
    if (selectEl) selectEl.value = activeView;
  }

  function selectPersonaFlow(personaName) {
    state.activePersonaName = personaName;

    document.querySelectorAll('.persona-pill-btn').forEach(b => b.classList.remove('active'));

    const matchPill = Array.from(document.querySelectorAll('.persona-pill-btn')).find(
      btn => btn.textContent.trim().includes(personaName)
    );
    if (matchPill) matchPill.classList.add('active');

    const allCompBoxes = document.querySelectorAll('.comp-box');
    allCompBoxes.forEach(box => {
      box.classList.remove('highlighted', 'dimmed');
    });
  }

  function renderSVGConnectors() {
    const svgEl = document.getElementById('flowchart-svg-overlay');
    if (svgEl) svgEl.innerHTML = '';
  }

  window.renderSVGConnectors = renderSVGConnectors;

  function renderSchematicCircuitView() {
    const canvasBox = document.getElementById('schematic-canvas-box');
    const selectEl = document.getElementById('schematic-persona-select');
    if (!canvasBox) return;

    const data = getSDLCData();
    const personas = data.PERSONAS || [];
    const personaFlows = data.PERSONA_FLOW_SEQUENCES || {};
    const personaColors = data.PERSONA_COLORS || {};

    if (selectEl) {
      selectEl.innerHTML = personas.map(p => `
        <option value="${p.name}" ${state.activePersonaName === p.name ? 'selected' : ''}>
          👤 ${p.fullName} (${p.category})
        </option>
      `).join('');

      selectEl.onchange = (e) => {
        state.activePersonaName = e.target.value;
        renderSchematicCircuitView();
      };
    }

    const pName = state.activePersonaName;
    const isClosed = state.isCircuitSwitchClosed;

    const flowSeq = personaFlows[pName] || personaFlows["Sponsor"] || [];
    const pColor = personaColors[pName] || '#4f46e5';

    function getLayerInfo(compId) {
      if (!compId) return { color: '#4f46e5', badge: 'Persona' };
      const lower = compId.toLowerCase();
      if (lower.includes('spec') || lower.includes('base') || lower.includes('artifact') || lower.includes('impact') || lower.includes('stale') || lower.includes('canonical')) {
        return { color: '#dc2626', badge: 'L2 Spec' };
      }
      if (lower.includes('eval') || lower.includes('golden') || lower.includes('rubric') || lower.includes('safety') || lower.includes('conformance') || lower.includes('drift')) {
        return { color: '#16a34a', badge: 'L3 Quality' };
      }
      if (lower.includes('gate') || lower.includes('approval') || lower.includes('rbac') || lower.includes('policy') || lower.includes('reg') || lower.includes('redact')) {
        return { color: '#1d4ed8', badge: 'L4 Governance' };
      }
      if (lower.includes('evidence') || lower.includes('decision') || lower.includes('audit') || lower.includes('metrics') || lower.includes('value')) {
        return { color: '#d97706', badge: 'L5 Evidence' };
      }
      return { color: '#2563eb', badge: 'L1 Agent' };
    }

    const circuitNodes = [
      {
        id: 'node-persona',
        title: pName,
        sub: 'Persona Input',
        icon: 'fa-user',
        layerColor: pColor,
        layerBadge: 'Persona',
        isGate: false
      },
      ...flowSeq.map(s => {
        const isApprovalGate = s.title.toLowerCase().includes('gate') || s.title.toLowerCase().includes('approval');
        const layerInfo = getLayerInfo(s.compId);
        return {
          id: s.compId,
          title: s.title,
          sub: `Step ${s.step}`,
          icon: isApprovalGate ? 'fa-lock' : 'fa-cubes',
          layerColor: isApprovalGate ? '#dc2626' : layerInfo.color,
          layerBadge: layerInfo.badge,
          isGate: isApprovalGate
        };
      })
    ];

    const totalNodes = circuitNodes.length;
    const topCount = Math.ceil(totalNodes / 2);

    // Dynamic width calculation so nodes NEVER overlap horizontally regardless of count
    const minStepX = 185; // 140px box width + 45px clean gap
    const marginX = 110;
    const W = Math.max(1080, marginX * 2 + (topCount - 1) * minStepX);
    const topY = 85;
    const bottomY = 295;
    const stepX = topCount > 1 ? (W - 2 * marginX) / (topCount - 1) : 0;

    const nodePositions = circuitNodes.map((node, i) => {
      let x, y;
      if (i < topCount) {
        x = marginX + i * stepX;
        y = topY;
      } else {
        const bIdx = i - topCount;
        const bottomCount = totalNodes - topCount;
        const bStepX = bottomCount > 1 ? (W - 2 * marginX) / (bottomCount - 1) : 0;
        x = (W - marginX) - bIdx * bStepX;
        y = bottomY;
      }
      return { ...node, x, y };
    });

    let forwardWireD = `M ${nodePositions[0].x} ${nodePositions[0].y}`;
    for (let i = 1; i < topCount; i++) {
      forwardWireD += ` L ${nodePositions[i].x} ${nodePositions[i].y}`;
    }
    if (topCount < totalNodes) {
      forwardWireD += ` L ${nodePositions[topCount].x} ${nodePositions[topCount].y}`;
    }

    let returnWireD = `M ${nodePositions[topCount].x} ${nodePositions[topCount].y}`;
    for (let i = topCount + 1; i < totalNodes; i++) {
      returnWireD += ` L ${nodePositions[i].x} ${nodePositions[i].y}`;
    }
    returnWireD += ` L ${nodePositions[0].x} ${nodePositions[0].y}`;

    canvasBox.innerHTML = `
      <svg class="schematic-svg" viewBox="0 0 ${W} 390" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f8fafc" stroke-width="1"/>
          </pattern>

          <marker id="forwardArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a" />
          </marker>
          <marker id="returnArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ea580c" />
          </marker>

          <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="${pColor}" flood-opacity="0.25"/>
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#gridPattern)" />

        <path d="${forwardWireD}" class="${isClosed ? 'wire-path-forward' : 'wire-path-off'}" 
              marker-end="${isClosed ? 'url(#forwardArrow)' : 'none'}" />

        <path d="${returnWireD}" class="${isClosed ? 'wire-path-return' : 'wire-path-off'}" 
              marker-end="${isClosed ? 'url(#returnArrow)' : 'none'}" />

        <text x="${W / 2}" y="26" font-family="Inter" font-weight="800" font-size="12" fill="#16a34a" text-anchor="middle">
          🟩 FORWARD REQUEST STREAM ➔➔
        </text>
        <text x="${W / 2}" y="365" font-family="Inter" font-weight="800" font-size="12" fill="#ea580c" text-anchor="middle">
          ⬅⬅ RETURN EVIDENCE & AUDIT STREAM 🟧
        </text>

        ${nodePositions.map((n, idx) => {
          const isGateNode = n.isGate;
          const bgFill = isGateNode && !isClosed ? '#fef2f2' : '#ffffff';
          const outerBorder = n.layerColor;

          return `
            <g transform="translate(${n.x}, ${n.y})" class="circuit-node-box" id="node-group-${idx}">
              <rect class="outer-rect" x="-70" y="-32" width="140" height="64" rx="9" ry="9" 
                    fill="${n.layerColor}15" stroke="${outerBorder}" stroke-width="3.5" 
                    filter="url(#nodeGlow)" />

              <rect x="-66" y="-28" width="132" height="56" rx="7" ry="7" 
                    fill="${bgFill}" stroke="${outerBorder}" stroke-width="1.5" />

              <circle cx="-44" cy="0" r="15" fill="${n.layerColor}" />
              <text x="-44" y="5" font-family="FontAwesome" font-size="11" fill="#ffffff" text-anchor="middle">
                ${n.icon === 'fa-user' ? '👤' : (n.icon === 'fa-lock' ? '🔒' : '⚙️')}
              </text>

              <text x="-22" y="-7" font-family="Outfit" font-weight="800" font-size="10.5" fill="#0f172a">
                ${n.title.length > 14 ? n.title.substring(0, 13) + '…' : n.title}
              </text>

              <rect x="-22" y="1" width="58" height="14" rx="3" fill="${n.layerColor}22" stroke="${n.layerColor}" stroke-width="0.8"/>
              <text x="7" y="11" font-family="Inter" font-weight="700" font-size="8" fill="${n.layerColor}" text-anchor="middle">
                ${n.layerBadge}
              </text>

              ${isGateNode ? `
                <g transform="translate(45, -20)" id="schematic-switch-group" style="cursor:pointer;">
                  <circle cx="0" cy="0" r="5" fill="#dc2626"/>
                  <line x1="0" y1="0" x2="${isClosed ? '15' : '10'}" y2="${isClosed ? '0' : '-12'}" 
                        stroke="${isClosed ? '#16a34a' : '#dc2626'}" stroke-width="3" stroke-linecap="round"/>
                </g>
              ` : ''}
            </g>
          `;
        }).join('')}

        <text x="${W / 2}" y="180" font-family="Outfit" font-weight="800" font-size="17" fill="#0f172a" text-anchor="middle">
          ⚡ ${pName} Dual-Directional Circuit Flow
        </text>
        <text x="${W / 2}" y="198" font-family="Inter" font-weight="600" font-size="11" fill="#64748b" text-anchor="middle">
          ${isClosed ? 'APPROVAL GATE CLOSED — CURRENT FLOWING (Execution & Evidence Active)' : 'APPROVAL GATE OPEN — CIRCUIT HALTED (Human Sign-off Required)'}
        </text>
      </svg>
    `;

    const switchGroup = document.getElementById('schematic-switch-group');
    if (switchGroup) {
      switchGroup.onclick = (e) => {
        e.stopPropagation();
        state.isCircuitSwitchClosed = !state.isCircuitSwitchClosed;
        renderSchematicCircuitView();
      };
    }

    applyCircuitScale(state.circuitZoomScale);
  }
})();

// GLOBAL TAB 6 VIEW SWITCHER (INTERACTIVE VS IMAGE VIEW)
window.switchBAView = function(viewMode) {
  const interactiveContainer = document.getElementById('ba-view-interactive-container');
  const imageContainer = document.getElementById('ba-view-image-container');
  const btnInteractive = document.getElementById('btn-ba-interactive');
  const btnImage = document.getElementById('btn-ba-image');

  if (viewMode === 'image') {
    if (interactiveContainer) interactiveContainer.style.display = 'none';
    if (imageContainer) imageContainer.style.display = 'block';
    if (btnInteractive) btnInteractive.classList.remove('active');
    if (btnImage) btnImage.classList.add('active');
  } else {
    if (interactiveContainer) interactiveContainer.style.display = 'block';
    if (imageContainer) imageContainer.style.display = 'none';
    if (btnInteractive) btnInteractive.classList.add('active');
    if (btnImage) btnImage.classList.remove('active');
  }
};

// SOLUTION COMPONENT VIEW SWITCHER (TAB 4 DROPDOWN)
window.switchSolutionComponentView = function(selectedView) {
  window.currentSolutionView = selectedView;
  const vTarget = document.getElementById('solution-view-target-state');
  const vBA = document.getElementById('solution-view-ba-platform');
  const viewTitleEl = document.getElementById('view-title');
  const viewSubEl = document.getElementById('view-subtitle');

  if (selectedView === 'ba-platform') {
    if (vTarget) vTarget.style.display = 'none';
    if (vBA) vBA.style.display = 'flex';
    if (viewTitleEl) viewTitleEl.textContent = 'Solution Component — Business Analysis Intelligence & Traceability Platform';
    if (viewSubEl) viewSubEl.textContent = 'AI Assists ➔ Humans Approve ➔ Every requirement has evidence ➔ Every release links to value';
  } else {
    if (vTarget) vTarget.style.display = 'flex';
    if (vBA) vBA.style.display = 'none';
    if (viewTitleEl) viewTitleEl.textContent = 'Solution Component — Target-State SDLC AI Agent Framework Architecture';
    if (viewSubEl) viewSubEl.textContent = 'All 27 SDLC capability components displayed. Click any component box to view its SDD Agent Studio details!';
  }
};


// TAB 1 VIEW SWITCHER (INTERACTIVE GLASSMORPHISM VS INFOGRAPHIC IMAGE)
window.switchTab1View = function(viewMode) {
  const interactiveContainer = document.getElementById('tab1-view-interactive-container');
  const imageContainer = document.getElementById('tab1-view-image-container');
  const btnInteractive = document.getElementById('btn-tab1-interactive');
  const btnImage = document.getElementById('btn-tab1-image');

  if (viewMode === 'image') {
    if (interactiveContainer) interactiveContainer.style.display = 'none';
    if (imageContainer) imageContainer.style.display = 'block';
    if (btnInteractive) btnInteractive.classList.remove('active');
    if (btnImage) btnImage.classList.add('active');
  } else {
    if (interactiveContainer) interactiveContainer.style.display = 'block';
    if (imageContainer) imageContainer.style.display = 'none';
    if (btnInteractive) btnInteractive.classList.add('active');
    if (btnImage) btnImage.classList.remove('active');
  }
};

// SLIDE 8 INTERACTIVE PHASE HIGHLIGHTING
document.addEventListener('DOMContentLoaded', function() {
  const phaseElements = document.querySelectorAll('[data-phase]');
  phaseElements.forEach(el => {
    el.addEventListener('mouseenter', function() {
      const phase = this.getAttribute('data-phase');
      if (!phase) return;
      document.querySelectorAll('[data-phase]').forEach(item => {
        if (item.getAttribute('data-phase') === phase) {
          item.classList.add('active-phase');
          item.style.opacity = '1';
        } else {
          item.style.opacity = '0.45';
        }
      });
    });

    el.addEventListener('mouseleave', function() {
      document.querySelectorAll('[data-phase]').forEach(item => {
        item.classList.remove('active-phase');
        item.style.opacity = '1';
      });
    });
  });
});

// SLIDE 8 TRUE HORIZONTAL CAROUSEL CONTROLLER
window.currentSlide8CardIdx = 0;
const totalSlide8Cards = 4;

window.goToSlide8Card = function(cardIdx) {
  window.currentSlide8CardIdx = cardIdx;
  const track = document.getElementById('slide8-slider-track');
  if (track) {
    track.style.transform = `translateX(-${cardIdx * 25}%)`;
  }
  document.querySelectorAll('.iv-carousel-tab').forEach((tab, i) => {
    if (i === cardIdx) {
      tab.classList.add('active-carousel-tab');
    } else {
      tab.classList.remove('active-carousel-tab');
    }
  });
};

window.navSlide8Carousel = function(direction) {
  let nextIdx = (window.currentSlide8CardIdx + direction + totalSlide8Cards) % totalSlide8Cards;
  window.goToSlide8Card(nextIdx);
};

window.prevSlide8Card = function() { window.navSlide8Carousel(-1); };
window.nextSlide8Card = function() { window.navSlide8Carousel(1); };

// POPUP MODAL FOR SLIDE 8 COMPONENTS
window.openSlide8Modal = function(title, subtitle, iconClass, colorHex, detailsList) {
  const modal = document.getElementById('iv-detail-modal');
  const modalBody = document.getElementById('iv-modal-body');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.85rem; margin-bottom: 1rem;">
      <div style="width: 44px; height: 44px; border-radius: 50%; background: ${colorHex}22; border: 2px solid ${colorHex}; color: ${colorHex}; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; box-shadow: 0 0 20px ${colorHex}55;">
        <i class="${iconClass}"></i>
      </div>
      <div>
        <h3 style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 800; color: #ffffff; margin: 0;">${title}</h3>
        <p style="font-size: 0.72rem; color: #94a3b8; margin: 0.2rem 0 0 0;">${subtitle}</p>
      </div>
    </div>
    <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 1rem; margin-top: 0.8rem;">
      <div style="font-size: 0.72rem; font-weight: 800; color: ${colorHex}; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.6rem;">Key Agent Capabilities &amp; Value Delivered</div>
      <ul style="margin: 0; padding-left: 1.2rem; color: #cbd5e1; font-size: 0.74rem; display: flex; flex-direction: column; gap: 0.4rem;">
        ${detailsList.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `;

  modal.classList.add('open');
};

// END-TO-END OUTCOME FULL STEPPER CAROUSEL MODAL CONTROLLER
window.endToEndStepsData = [
  { step: 1, name: "IDEA / NEED", phase: "DISCOVER", color: "#60a5fa", hex: "#3b82f6", icon: "fa-solid fa-lightbulb", desc: "Initial business concept, problem framing, and raw stakeholder intent captured from fragmented signals." },
  { step: 2, name: "UNDERSTOOD & APPROVED", phase: "ALIGN", color: "#38bdf8", hex: "#06b6d4", icon: "fa-solid fa-users", desc: "Framed business intent validated against enterprise architecture with formal stakeholder alignment and sign-off." },
  { step: 3, name: "STRUCTURED REQUIREMENTS", phase: "STRUCTURE", color: "#34d399", hex: "#10b981", icon: "fa-solid fa-box-archive", desc: "Machine-readable specification control, canonical schema mapping, and unambiguous requirement baseline." },
  { step: 4, name: "DELIVERY & TEST", phase: "BUILD", color: "#fbbf24", hex: "#f59e0b", icon: "fa-solid fa-gears", desc: "AI-assisted code synthesis, risk-based automated testing execution, and continuous integration verification." },
  { step: 5, name: "ACCEPTED", phase: "ACCEPT", color: "#c084fc", hex: "#8b5cf6", icon: "fa-solid fa-circle-check", desc: "Tamper-evident audit ledger verification, automated conformance checks, and formal release acceptance." },
  { step: 6, name: "MEASURED VALUE", phase: "VALUE", color: "#60a5fa", hex: "#3b82f6", icon: "fa-solid fa-chart-line", desc: "Quantified production ROI, operational velocity improvement tracking, and post-deployment impact measurement." }
];

window.currentEndToEndStepIdx = 0;

window.openEndToEndCarouselModal = function(stepIdx) {
  if (stepIdx !== undefined) window.currentEndToEndStepIdx = stepIdx;
  window.renderEndToEndCarouselModal();
  const modal = document.getElementById('iv-detail-modal');
  if (modal) modal.classList.add('open');
};

window.renderEndToEndCarouselModal = function() {
  const modalBody = document.getElementById('iv-modal-body');
  if (!modalBody) return;

  const data = window.endToEndStepsData[window.currentEndToEndStepIdx];

  modalBody.innerHTML = `
    <div style="text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.8rem; margin-bottom: 1rem;">
      <div style="font-size: 0.7rem; font-weight: 800; color: ${data.color}; letter-spacing: 0.1em; text-transform: uppercase;">
        End-to-End Outcome Stepper — Carousel Mode
      </div>
      <div style="font-size: 0.72rem; color: #94a3b8; margin-top: 0.2rem;">
        Step ${data.step} of 6: <span style="color: #ffffff; font-weight: 700;">${data.phase} PHASE</span>
      </div>
    </div>

    <!-- CAROUSEL ITEM DISPLAY -->
    <div style="background: rgba(15, 23, 42, 0.9); border: 2px solid ${data.hex}; border-radius: 16px; padding: 1.2rem; display: flex; flex-direction: column; gap: 0.8rem; box-shadow: 0 0 30px ${data.hex}44; transition: all 0.3s ease;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div style="width: 48px; height: 48px; border-radius: 50%; background: ${data.hex}25; color: ${data.color}; border: 2px solid ${data.hex}; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; box-shadow: 0 0 20px ${data.hex}66;">
            <i class="${data.icon}"></i>
          </div>
          <div>
            <h3 style="font-family: var(--font-heading); font-size: 1.2rem; font-weight: 800; color: ${data.color}; margin: 0;">${data.step}. ${data.name}</h3>
            <span style="font-size: 0.65rem; font-weight: 700; color: #94a3b8;">${data.phase} STAGE</span>
          </div>
        </div>
        <div style="background: ${data.hex}22; color: ${data.color}; border: 1px solid ${data.hex}; border-radius: 20px; padding: 0.3rem 0.8rem; font-size: 0.7rem; font-weight: 800;">
          Step 0${data.step}
        </div>
      </div>
      <p style="font-size: 0.82rem; color: #e2e8f0; line-height: 1.4; margin: 0; background: rgba(0,0,0,0.3); padding: 0.8rem; border-radius: 10px; border-left: 3px solid ${data.hex};">
        ${data.desc}
      </p>
    </div>

    <!-- CAROUSEL NAVIGATION BUTTONS -->
    <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 1.2rem;">
      <button onclick="navEndToEndModal(-1)" style="background: rgba(30,41,59,0.9); border: 1px solid rgba(255,255,255,0.2); color: #ffffff; padding: 0.5rem 1rem; border-radius: 10px; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
        <i class="fa-solid fa-chevron-left"></i> Previous Step
      </button>

      <!-- STEP DOTS -->
      <div style="display: flex; align-items: center; gap: 0.4rem;">
        ${window.endToEndStepsData.map((item, idx) => `
          <div onclick="openEndToEndCarouselModal(${idx})" style="width: ${idx === window.currentEndToEndStepIdx ? '24px' : '10px'}; height: 10px; border-radius: 5px; background: ${idx === window.currentEndToEndStepIdx ? item.hex : 'rgba(255,255,255,0.2)'}; cursor: pointer; transition: all 0.3s ease;" title="Jump to ${item.name}"></div>
        `).join('')}
      </div>

      <button onclick="navEndToEndModal(1)" style="background: rgba(30,41,59,0.9); border: 1px solid rgba(255,255,255,0.2); color: #ffffff; padding: 0.5rem 1rem; border-radius: 10px; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
        Next Step <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  `;
};

window.navEndToEndModal = function(direction) {
  const total = window.endToEndStepsData.length;
  window.currentEndToEndStepIdx = (window.currentEndToEndStepIdx + direction + total) % total;
  window.renderEndToEndCarouselModal();
};

window.closeSlide8Modal = function(event) {
  const modal = document.getElementById('iv-detail-modal');
  if (modal) modal.classList.remove('open');
};

// ATTACH CLICK LISTENERS TO ALL SLIDE 8 CARDS & PILLS
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.journey-card, .align-row, .trace-flow-node, .stepper-item').forEach(el => {
    el.addEventListener('click', function() {
      const title = this.querySelector('.journey-card-title, .align-row-title, .trace-node-label, .stepper-text')?.textContent.trim() || 'Component Detail';
      const subtitle = this.querySelector('.journey-card-desc, .align-row-desc')?.textContent.trim() || 'Part of the SDLC Agent Architecture';
      const icon = this.querySelector('i')?.className || 'fa-solid fa-circle-check';
      const color = this.querySelector('.journey-card-title, .align-row-title')?.style.color || '#3b82f6';
      
      const sampleDetails = [
        "Connects directly with persona agents across the SDLC workflow.",
        "Ensures 100% tamper-evident traceability from business intent to deployment.",
        "Reduces manual audit overhead and eliminates requirement fragmentation."
      ];

      window.openSlide8Modal(title, subtitle, icon, color, sampleDetails);
    });
  });
});
