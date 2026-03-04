export interface Project {
  title: string;
  titleEn: string;
  period: string;
  periodEn: string;
  goals: string[];
  goalsEn: string[];
  contents: string[];
  contentsEn: string[];
  results: string[];
  resultsEn: string[];
  tags: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    title: "엔터프라이즈 온보딩 표준화",
    titleEn: "Enterprise Onboarding Standardization",
    period: "2024.04. ~ 현재",
    periodEn: "Apr 2024 — Present",
    goals: [
      "신규 고객의 초기 정착 속도 개선",
      "고객별 온보딩 품질 편차 최소화",
    ],
    goalsEn: [
      "Improve time-to-value for new customers",
      "Reduce onboarding quality variance across accounts",
    ],
    contents: [
      "고객 유형별 온보딩 체크리스트와 진행 단계 정의",
      "CS, Sales, SE 협업 방식에 맞춘 커뮤니케이션 포맷 구축",
      "초기 리스크 신호를 조기에 식별하는 운영 기준 정립",
    ],
    contentsEn: [
      "Defined onboarding stages and checklists by customer segment",
      "Built communication formats aligned for CS, Sales, and SE collaboration",
      "Established operational criteria to detect early risk signals",
    ],
    results: [
      "초기 고객 이슈 대응 속도와 투명성 개선",
      "온보딩 단계별 책임 구분이 명확해져 내부 협업 효율 향상",
      "리뉴얼 기반 고객 관리 체계의 기초 마련",
    ],
    resultsEn: [
      "Improved speed and clarity of early customer issue response",
      "Increased collaboration efficiency through clearer phase ownership",
      "Built a stronger foundation for renewal-oriented customer operations",
    ],
    tags: ["Customer Success", "Onboarding", "Enterprise", "Collaboration"],
  },
  {
    title: "금융권 보안 솔루션 프리세일즈",
    titleEn: "Financial Security Solution Pre-sales",
    period: "2022.02. ~ 2024.03.",
    periodEn: "Feb 2022 — Mar 2024",
    goals: [
      "금융권 고객 요구사항에 맞는 기술 제안 체계 확립",
      "데모/PoC 중심의 기술 검증 프로세스 고도화",
    ],
    goalsEn: [
      "Establish a technical proposal model tailored to financial customer requirements",
      "Improve validation workflows centered on demos and PoCs",
    ],
    contents: [
      "요구사항 분석 기반 제안 아키텍처와 기술 문서 표준화",
      "고객 시나리오 기반 데모 및 PoC 계획 수립",
      "영업 조직과 협업한 수주 전략 수립",
    ],
    contentsEn: [
      "Standardized proposal architectures and technical documents based on requirement analysis",
      "Designed customer-scenario-based demo and PoC plans",
      "Co-developed win strategies with sales teams",
    ],
    results: [
      "프리세일즈 대응 품질 일관성 향상",
      "기술 검증 단계의 커뮤니케이션 효율 개선",
      "제안 준비 리드타임 단축",
    ],
    resultsEn: [
      "Improved consistency in pre-sales response quality",
      "Increased communication efficiency during technical validation phases",
      "Reduced proposal preparation lead time",
    ],
    tags: ["Pre-sales", "Financial", "PoC", "Technical Proposal"],
  },
  {
    title: "엔터프라이즈 네트워크/보안 프리세일즈",
    titleEn: "Enterprise Network/Security Pre-sales",
    period: "2018.10. ~ 2022.01.",
    periodEn: "Oct 2018 — Jan 2022",
    goals: [
      "기업 고객별 환경에 맞는 기술 제안 정확도 향상",
      "영업-기술 협업 기반의 제안 경쟁력 강화",
    ],
    goalsEn: [
      "Improve technical proposal accuracy across enterprise environments",
      "Strengthen proposal competitiveness through sales-engineering collaboration",
    ],
    contents: [
      "고객 과제별 기술 아키텍처 및 데모 시나리오 설계",
      "기술 검토와 제안 단계 연계 프로세스 운영",
      "고객 피드백 기반 제안 전략 지속 개선",
    ],
    contentsEn: [
      "Designed technical architectures and demo scenarios by customer challenge",
      "Operated workflows linking technical validation to proposal delivery",
      "Continuously refined proposal strategies using customer feedback",
    ],
    results: [
      "고객 대응 신뢰도 향상",
      "제안 단계의 내부 협업 속도 개선",
      "반복 가능한 프리세일즈 운영 체계 확보",
    ],
    resultsEn: [
      "Improved trust in customer-facing technical engagement",
      "Increased internal collaboration speed during proposal phases",
      "Established a repeatable pre-sales operating model",
    ],
    tags: ["Pre-sales", "Enterprise", "Demo", "Solution Architecture"],
  },
];
