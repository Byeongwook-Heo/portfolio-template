export interface CareerHighlight {
  title: string;
  titleEn: string;
  items: string[];
  itemsEn: string[];
}

export const careerOverview = {
  ko: "2018년부터 엔터프라이즈 B2B 환경에서 프리세일즈와 고객 성공 역할을 수행해 왔습니다. 고객 요구사항을 기술 언어로 해석하고, 영업·기술 조직을 연결해 도입 성과와 장기 고객 가치를 동시에 만드는 데 집중합니다.",
  en: "Since 2018, I have worked across pre-sales and customer success roles in enterprise B2B environments. I translate customer requirements into technical execution and connect sales and engineering teams to drive both adoption outcomes and long-term customer value.",
};

export const careerHighlights: CareerHighlight[] = [
  {
    title: "IBM HashiCorp 고객 성공 운영",
    titleEn: "Customer Success at IBM HashiCorp",
    items: [
      "엔터프라이즈 고객의 온보딩 및 활성화 프로세스 리드",
      "QBR 중심으로 고객 목표와 제품 사용 성과를 연결",
      "리뉴얼 및 확장 기회를 발굴하는 계정 전략 수립",
    ],
    itemsEn: [
      "Led onboarding and adoption workflows for enterprise customers",
      "Connected customer objectives with product outcomes through QBR operations",
      "Developed account strategies for renewal and expansion opportunities",
    ],
  },
  {
    title: "안랩 금융 프리세일즈",
    titleEn: "Financial Pre-sales at AhnLab",
    items: [
      "금융권 고객 대상 기술 제안, 데모, PoC 중심 프리세일즈 수행",
      "고객 요구사항 분석 기반의 제안 아키텍처와 기술 문서 작성",
      "영업/기술 협업을 통해 수주 가능성 제고",
    ],
    itemsEn: [
      "Delivered pre-sales support with technical proposals, demos, and PoCs for financial customers",
      "Produced proposal architectures and technical documentation based on requirement analysis",
      "Improved deal readiness through close sales-engineering collaboration",
    ],
  },
  {
    title: "오픈베이스 엔터프라이즈 프리세일즈",
    titleEn: "Enterprise Pre-sales at OpenBase",
    items: [
      "엔터프라이즈 고객 대상 네트워크/보안 솔루션 프리세일즈",
      "고객 과제 맞춤형 기술 시나리오와 데모 전략 설계",
      "제안 경쟁력 강화를 위한 내부 기술 지원 체계화",
    ],
    itemsEn: [
      "Provided enterprise pre-sales for network and security solutions",
      "Designed tailored technical scenarios and demo strategies around customer challenges",
      "Systematized internal technical support to improve proposal competitiveness",
    ],
  },
];

export const selfDevelopedTools = [
  { ko: "QBR 진행 템플릿", en: "QBR Facilitation Template" },
  { ko: "PoC 준비 체크리스트", en: "PoC Readiness Checklist" },
  { ko: "제안 아키텍처 시트", en: "Proposal Architecture Sheet" },
];

export const coreCompetencies = [
  {
    ko: "엔터프라이즈 고객 온보딩 및 활성화 운영",
    en: "Enterprise customer onboarding and adoption operations",
  },
  {
    ko: "프리세일즈 관점의 요구사항 분석, 데모, PoC 설계",
    en: "Pre-sales requirement analysis, demo strategy, and PoC design",
  },
  {
    ko: "고객·기술·영업 조직 간 이해관계 조율",
    en: "Cross-functional alignment across customer, technical, and sales teams",
  },
  {
    ko: "리뉴얼/확장 연계형 장기 고객 가치 창출",
    en: "Long-term customer value creation linked to renewals and expansion",
  },
];
