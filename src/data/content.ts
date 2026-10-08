import { EcosystemDirection, RoadmapStage, ContributorPath, FaqItem, LifecycleStep } from '../types';

export const ECOSYSTEM_DIRECTIONS: EcosystemDirection[] = [
  {
    id: 'infra',
    number: '01',
    title: 'Experimental Infrastructure',
    tags: ['COMPUTE', 'DISTRIBUTED SYSTEMS', 'RESILIENCE'],
    category: 'DISTRIBUTED SYSTEMS',
    description: 'Explore the foundations that help ambitious systems run: distributed components, deployment patterns, and new infrastructure primitives. Start with bounded experiments rather than a promise of scale.',
    guidingQuestion: 'How could infrastructure invite experimentation and become more understandable as it grows?',
    explorationDetail: 'Investigate failure modes, resource trade-offs, and reproducible environments. Make the constraints as visible as the design.',
    connections: ['systems', 'tooling']
  },
  {
    id: 'tooling',
    number: '02',
    title: 'Developer Tooling',
    tags: ['WORKFLOWS', 'DEBUGGING', 'OBSERVABILITY'],
    category: 'DEVELOPER EXPERIENCE',
    description: 'Investigate tools that reduce friction between an idea and a working implementation. The aim is not another tool for its own sake, but a clearer development loop for people doing difficult work.',
    guidingQuestion: 'What gets in the way of building well?',
    explorationDetail: 'Study setup, feedback, and debugging. Test whether a small intervention helps a developer understand a system or recover from a mistake.',
    connections: ['architecture', 'infra']
  },
  {
    id: 'architecture',
    number: '03',
    title: 'Framework Architecture',
    tags: ['COMPOSITION', 'INTERFACES', 'EXTENSIBILITY'],
    category: 'COMPOSABLE FOUNDATIONS',
    description: 'Examine reusable structures and interfaces that make complex applications easier to reason about, extend, and maintain. Explore where shared patterns help—and where they hide important choices.',
    guidingQuestion: 'Which abstractions are worth keeping?',
    explorationDetail: 'Compare composability with complexity. Describe the boundaries, escape hatches, and costs of a proposed architectural pattern.',
    connections: ['tooling', 'systems']
  },
  {
    id: 'ecosystems',
    number: '04',
    title: 'Open Source Ecosystems',
    tags: ['DISCOVERY', 'CONTRIBUTION', 'STEWARDSHIP'],
    category: 'COLLECTIVE KNOWLEDGE',
    description: 'Think beyond individual repositories: shared conventions, contribution pathways, and the relationships that sustain open work without making every project follow the same model.',
    guidingQuestion: 'How can people find a useful way to participate?',
    explorationDetail: 'Look at project discovery, documentation, and handoffs. Consider the needs of both newcomers and people caring for the work over time.',
    connections: ['research', 'architecture']
  },
  {
    id: 'systems',
    number: '05',
    title: 'Systems Engineering',
    tags: ['PERFORMANCE', 'RELIABILITY', 'TRADE OFFS'],
    category: 'RELIABILITY & PERFORMANCE',
    description: 'Investigate correctness, reliability, and performance at the boundaries of software systems. Ground experiments in explicit constraints so results can be understood, challenged, and reproduced.',
    guidingQuestion: 'Can we make the trade-offs easier to see?',
    explorationDetail: 'Define a workload, identify assumptions, and compare alternatives. Explain what a result does not tell us, as carefully as what it does.',
    connections: ['infra', 'research']
  },
  {
    id: 'research',
    number: '06',
    title: 'Research Driven Development',
    tags: ['METHODS', 'EVIDENCE', 'REPRODUCIBILITY'],
    category: 'INQUIRY INTO PRACTICE',
    description: 'Connect inquiry to implementation through focused prototypes and reproducible experiments. Let research change the direction of development instead of merely validating a solution already chosen.',
    guidingQuestion: 'What should we test before we commit?',
    explorationDetail: 'Frame a falsifiable question, select an appropriate method, and share the evidence. A useful negative result is still shared knowledge.',
    connections: ['ecosystems', 'systems']
  }
];

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    number: '01',
    title: 'Find the questions',
    summary: 'Frame the problems worth exploring. Gather context, document assumptions, and invite alternative perspectives.',
    badge: 'STAGE INTENTION / NO COMPLETION CLAIM',
    outputs: 'Problem statements · Research notes',
    description: 'A useful problem statement could make the need, existing approaches, and unknowns explicit. Research notes could preserve the context that led to the question, including perspectives that disagree.',
    dependsOn: 'People willing to share real constraints, relevant research, and a clear account of who the problem affects.',
    guidingQuestion: 'Which questions are important enough—and bounded enough—to investigate first?'
  },
  {
    number: '02',
    title: 'Build the foundations',
    summary: 'Develop small experiments and shared technical patterns. Let evidence guide what deserves a larger commitment.',
    badge: 'STAGE INTENTION / NO COMPLETION CLAIM',
    outputs: 'Prototypes · Architecture discussions',
    description: 'A prototype could test a specific assumption without implying product readiness. Architecture discussions could compare alternatives, surface trade-offs, and explain what should remain provisional.',
    dependsOn: 'A framed question, a testable method, and enough context to judge the result. Larger commitments depend on evidence, not enthusiasm alone.',
    guidingQuestion: 'Which patterns are useful across experiments, and which should stay local?'
  },
  {
    number: '03',
    title: 'Connect the ecosystem',
    summary: 'Work toward a public platform that makes projects, knowledge, and contribution pathways easier to discover.',
    badge: 'STAGE INTENTION / NO COMPLETION CLAIM',
    outputs: 'Project discovery · Contributor experience',
    description: 'Discovery could help people understand what a project explores and where they might participate. The contributor experience could connect context, guidance, and review without assuming one process fits every project.',
    dependsOn: 'Work that can be described honestly, understandable participation guidance, and clarity about stewardship and availability.',
    guidingQuestion: 'What should the public platform make easier before it tries to do more?'
  },
  {
    number: '04',
    title: 'Learn in the open',
    summary: 'Review what works, retire what does not, and strengthen stewardship as the ecosystem grows.',
    badge: 'STAGE INTENTION / NO COMPLETION CLAIM',
    outputs: 'Feedback · Maintenance practices',
    description: 'Feedback could lead to a revised experiment, a clearer explanation, or a decision to stop. Maintenance practices could make responsibilities and limits visible, rather than treating all work as indefinitely supported.',
    dependsOn: 'Inspectable evidence, thoughtful feedback, and people able to discuss the cost of sustaining the work.',
    guidingQuestion: 'How can we preserve learning when an experiment changes direction or ends?'
  }
];

export const CONTRIBUTOR_PATHS: ContributorPath[] = [
  {
    id: 'code',
    title: 'Code & engineering',
    subtitle: 'Make ideas executable.',
    icon: 'code',
    description: 'Discuss architecture, explore implementation approaches, test assumptions, investigate a failure, and help review the work.',
    startingPoint: 'Choose a bounded technical question. Describe the behavior you expect and the smallest implementation or reproduction that would help examine it.',
    whatToBring: 'A focused change with context, testing notes, and an explanation of trade-offs.',
    sampleQuestion: 'Start with a technical question ↗'
  },
  {
    id: 'docs',
    title: 'Documentation',
    subtitle: 'Make knowledge accessible.',
    icon: 'book',
    description: 'Clarify concepts, improve explanations, capture decisions, and help another person find their first step into the ecosystem.',
    startingPoint: 'Read as a newcomer. Identify one unclear term, missing step, or unexplained assumption and suggest a clearer account for a specific audience.',
    whatToBring: 'A scoped edit with the intended reader, the source of the information, and a reason for the change.',
    sampleQuestion: 'Start with something unclear ↗'
  },
  {
    id: 'design',
    title: 'Design',
    subtitle: 'Make complexity understandable.',
    icon: 'layout',
    description: 'Explore contributor journeys, shape interfaces, and bring accessibility, visual legibility, and systems thinking into the process.',
    startingPoint: 'Describe a person, a task, and the friction they encounter. Sketch a small alternative and explain what you want to learn from it.',
    whatToBring: 'A legible flow or design study with rationale, accessibility considerations, and open questions.',
    sampleQuestion: 'Start with a user experience ↗'
  },
  {
    id: 'research',
    title: 'Research',
    subtitle: 'Make uncertainty useful.',
    icon: 'microscope',
    description: 'Bring a paper, a hypothesis, a benchmark idea, or a reproducible experiment that could guide technical development.',
    startingPoint: 'State the question and what would count as evidence. Explain your method, assumptions, and the limits of any result.',
    whatToBring: 'Research notes or an experiment with sources, reproducible conditions, and clearly stated limitations.',
    sampleQuestion: 'Start with an open question ↗'
  }
];

export const LIFECYCLE_STEPS: LifecycleStep[] = [
  {
    number: '01',
    title: 'Explore the direction',
    description: 'Read the ecosystem area and available project context. Understand the question being explored, the stated limitations, and any relevant license or contribution guidance.',
    leaveWith: 'A question you can explain'
  },
  {
    number: '02',
    title: 'Start a conversation',
    description: 'Share your context, the problem you see, and what you would like to investigate. Ask whether it connects to the intended direction before investing in a substantial change.',
    leaveWith: 'Shared context, not assumed approval'
  },
  {
    number: '03',
    title: 'Agree on a small next step',
    description: 'Discuss scope, alternatives, and what is out of scope. Clarify what evidence or artifact would be useful, who could review it, and what responsibilities might follow.',
    leaveWith: 'A manageable, discussable scope'
  },
  {
    number: '04',
    title: 'Prepare reviewable work',
    description: 'Keep the work focused. Include the rationale, relevant testing or research notes, and instructions needed to understand it. Make remaining uncertainties visible.',
    leaveWith: 'A clear artifact and its context'
  },
  {
    number: '05',
    title: 'Review and refine together',
    description: 'Invite critique, answer questions, and revise with care. Explain disagreements using evidence and constraints. Follow the specific project’s review process when one is published.',
    leaveWith: 'Decisions and unresolved questions documented'
  },
  {
    number: '06',
    title: 'Share the learning and handoff',
    description: 'Summarize what changed and what was learned. Clarify any follow-up or maintenance expectations. A contribution may lead to an accepted change, a revised experiment, or a useful decision not to proceed.',
    leaveWith: 'Knowledge someone else can carry'
  }
];

export const HOME_FAQS: FaqItem[] = [
  {
    question: 'What is undreamt?',
    answer: 'An early-stage Experimental Open Source Ecosystem and community brand. We aim to create tools, systems, infrastructure, and experimental technology with people who want to build and learn in the open.'
  },
  {
    question: 'Can I use the public platform today?',
    answer: 'Not yet. The current status is Public Platform In Development. There is no announced launch date, and the focus areas on this page are directions for work—not released products.'
  },
  {
    question: 'Who is this community for?',
    answer: 'Developers, researchers, designers, creators, and businesses with an interest in experimental technology. You can participate by sharing expertise, asking thoughtful questions, or helping make the work easier to understand.'
  },
  {
    question: 'Do I need to be an experienced developer?',
    answer: 'No. Documentation, design, research, and careful feedback are meaningful contributions. Start with a small question or a clear observation, and discuss the next step before investing in a large piece of work.'
  },
  {
    question: 'Where should I start contributing?',
    answer: 'Explore the directions and choose a contributor path that fits your interests. Use GitHub as the starting point for conversation, then look for the relevant project’s guidance as it becomes available.'
  },
  {
    question: 'How will projects be licensed and governed?',
    answer: 'Check each project’s published license and guidance when available. Ecosystem-wide governance is still to be defined; our intent is transparent decisions, respectful review, and clear stewardship.'
  }
];

export const ROADMAP_FAQS: FaqItem[] = [
  {
    question: 'When will the public platform launch?',
    answer: 'There is no announced public launch date. Public Platform In Development is the current status; the platform is not yet available.'
  },
  {
    question: 'Are any of these stages complete?',
    answer: 'None are presented as complete. The stages express intentions and possible outputs, not a progress report or a list of delivered milestones.'
  },
  {
    question: 'Can the order or scope change?',
    answer: 'Yes. Stages can overlap, change or be revisited. Evidence, community context and the ability to steward the work can change what is worth pursuing.'
  },
  {
    question: 'How can I suggest a different priority?',
    answer: 'Start with the problem and its context. Explain why it matters, what a small experiment could test and which dependencies or risks would need discussion.'
  }
];

export const CONTRIBUTOR_FAQS: FaqItem[] = [
  {
    question: 'Do I need to be an experienced developer?',
    answer: 'No. Documentation, design, research, and thoughtful questions are meaningful ways to contribute. Start with a small scope and be clear about where you need help.'
  },
  {
    question: 'Where should I start contributing?',
    answer: 'Explore the directions, then look for the relevant project’s published contribution guidance and discussion space when available. No live issue list or repository directory is presented here.'
  },
  {
    question: 'Should I build a large change before discussing it?',
    answer: 'Discuss the problem and scope first. A focused proposal helps clarify whether the direction is useful, what evidence is needed, and who could review the work.'
  },
  {
    question: 'Is there one license or approval process?',
    answer: 'No single license or approval process should be assumed across future projects. Check the project’s own guidance when available; formal governance is still to be defined.'
  },
  {
    question: 'Can I use the public platform now?',
    answer: 'Not yet. Its status is Public Platform In Development, and there is no announced public launch date. This guide describes possible participation pathways, not a live submission system.'
  }
];
