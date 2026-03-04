export interface Experience {
  company: string;
  companyEn: string;
  role: string;
  roleEn: string;
  team: string;
  teamEn: string;
  period: string;
  periodEn: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  descriptionEn: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    company: "IBM",
    companyEn: "IBM",
    role: "Customer Success Manager",
    roleEn: "Customer Success Manager",
    team: "HashiCorp",
    teamEn: "HashiCorp",
    period: "2024.04. ~ 현재",
    periodEn: "Apr 2024 — Present",
    startDate: "2024-04",
    endDate: null,
    description: [
      "HashiCorp 솔루션 도입 고객의 온보딩, 활성화, 정착 과정을 리드",
      "기술팀·영업팀과 협업하여 고객별 확장 기회와 리뉴얼 전략 수립",
      "분기별 비즈니스 리뷰(QBR) 운영으로 고객 목표와 사용 성과를 정렬",
    ],
    descriptionEn: [
      "Led onboarding, adoption, and stabilization for customers adopting HashiCorp solutions",
      "Partnered with technical and sales teams to shape account expansion and renewal strategies",
      "Operated quarterly business reviews (QBRs) to align customer goals and usage outcomes",
    ],
    tags: ["Customer Success", "HashiCorp", "Enterprise", "QBR", "Renewal"],
  },
  {
    company: "안랩",
    companyEn: "AhnLab",
    role: "프리세일즈",
    roleEn: "Pre-sales Consultant",
    team: "금융영업본부",
    teamEn: "Financial Sales Division",
    period: "2022.02. ~ 2024.03.",
    periodEn: "Feb 2022 — Mar 2024",
    startDate: "2022-02",
    endDate: "2024-03",
    description: [
      "금융권 고객 대상 보안 솔루션 기술 제안 및 프리세일즈 지원 수행",
      "고객 요구사항 분석, 데모/PoC 설계, 제안서 기술 파트 작성 주도",
      "영업·엔지니어링 조직과 협업해 수주 가능성을 높이는 제안 전략 실행",
    ],
    descriptionEn: [
      "Provided technical solution proposals and pre-sales support for financial-sector customers",
      "Led requirement analysis, demo/PoC design, and technical proposal documentation",
      "Collaborated with sales and engineering teams to execute higher-win-rate proposal strategies",
    ],
    tags: [
      "Pre-sales",
      "Financial Industry",
      "PoC",
      "Technical Proposal",
      "Security Solutions",
    ],
  },
  {
    company: "오픈베이스",
    companyEn: "OpenBase",
    role: "프리세일즈",
    roleEn: "Pre-sales Consultant",
    team: "기업영업본부",
    teamEn: "Enterprise Sales Division",
    period: "2018.10. ~ 2022.01.",
    periodEn: "Oct 2018 — Jan 2022",
    startDate: "2018-10",
    endDate: "2022-01",
    description: [
      "엔터프라이즈 고객 대상 네트워크/보안 솔루션 프리세일즈 수행",
      "고객 과제 기반 기술 아키텍처 제안과 데모 시나리오 설계",
      "영업 조직과 공동으로 제안 경쟁력 강화를 위한 기술 지원 체계 운영",
    ],
    descriptionEn: [
      "Delivered pre-sales support for network and security solutions in enterprise accounts",
      "Designed technical architecture proposals and demo scenarios based on customer challenges",
      "Operated a technical support model with sales teams to strengthen proposal competitiveness",
    ],
    tags: [
      "Pre-sales",
      "Enterprise",
      "Solution Architecture",
      "Demo",
      "Technical Support",
    ],
  },
];
