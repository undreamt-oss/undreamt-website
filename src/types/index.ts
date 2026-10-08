export type NavPage = 'home' | 'ecosystem' | 'mission' | 'roadmap' | 'community' | 'contribute';

export interface EcosystemDirection {
  id: string;
  number: string;
  title: string;
  tags: string[];
  description: string;
  category: string;
  guidingQuestion: string;
  explorationDetail: string;
  connections: string[];
}

export interface RoadmapStage {
  number: string;
  title: string;
  summary: string;
  badge: string;
  outputs: string;
  description: string;
  dependsOn: string;
  guidingQuestion: string;
}

export interface ContributorPath {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  startingPoint: string;
  whatToBring: string;
  sampleQuestion: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LifecycleStep {
  number: string;
  title: string;
  description: string;
  leaveWith: string;
}
