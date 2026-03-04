export interface SubSection {
  title: string;
  titleEn: string;
  items: CareerDetailItem[];
}

export interface CareerDetailItem {
  text: string;
  textEn: string;
  subItems?: { text: string; textEn: string }[];
}

export interface CareerDetailSection {
  id: string;
  title: string;
  titleEn: string;
  background: CareerDetailItem[];
  role: SubSection[];
  results: CareerDetailItem[];
  lessons: CareerDetailItem[];
}

export const careerDetailSections: CareerDetailSection[] = [
  {
    id: "ibm-hashicorp",
    title: "IBM HashiCorp | Customer Success Manager",
    titleEn: "IBM HashiCorp | Customer Success Manager",
    background: [
      {
        text: "엔터프라이즈 고객이 솔루션을 도입한 이후 실제 사용 성과로 이어지기까지의 여정을 체계화할 필요가 있었습니다.",
        textEn:
          "There was a need to systematize the post-purchase journey so enterprise customers could realize measurable product outcomes.",
      },
      {
        text: "초기 도입 단계에서 고객별 성숙도 차이가 커서, 온보딩과 활성화 기준을 표준화하는 것이 핵심 과제였습니다.",
        textEn:
          "Because customer maturity varied significantly at early stages, standardizing onboarding and adoption criteria became a key priority.",
      },
    ],
    role: [
      {
        title: "고객 성공 운영",
        titleEn: "Customer Success Operations",
        items: [
          {
            text: "계정별 목표와 사용 현황을 연결해 고객 성공 계획을 수립했습니다.",
            textEn:
              "Built account-level success plans by linking business goals with product usage trends.",
            subItems: [
              {
                text: "온보딩 단계별 체크포인트를 정의해 고객 상태를 일관되게 관리했습니다.",
                textEn:
                  "Defined onboarding checkpoints to manage customer status consistently.",
              },
              {
                text: "리스크 계정은 조기 식별 후 기술/영업 조직과 공동 대응했습니다.",
                textEn:
                  "Identified at-risk accounts early and responded jointly with technical and sales teams.",
              },
            ],
          },
        ],
      },
      {
        title: "리뉴얼 및 확장 전략",
        titleEn: "Renewal and Expansion Strategy",
        items: [
          {
            text: "QBR을 통해 고객의 우선순위를 정렬하고 리뉴얼과 확장 논의를 구조화했습니다.",
            textEn:
              "Structured renewal and expansion conversations by aligning priorities through QBR sessions.",
          },
        ],
      },
    ],
    results: [
      {
        text: "온보딩과 활성화 프로세스가 표준화되어 고객 커뮤니케이션 일관성이 높아졌습니다.",
        textEn:
          "Standardized onboarding and adoption processes improved consistency in customer communication.",
      },
      {
        text: "리스크 계정 대응 속도가 개선되고 리뉴얼 기반 운영 체계가 강화되었습니다.",
        textEn:
          "At-risk account response speed improved, strengthening renewal-focused account operations.",
      },
    ],
    lessons: [
      {
        text: "고객 성공은 단일 팀의 역할이 아니라 기술·영업·고객 이해관계자를 조율하는 운영 설계라는 점을 재확인했습니다.",
        textEn:
          "I reaffirmed that customer success is not a single-team function, but an operating model that aligns technical, sales, and customer stakeholders.",
      },
    ],
  },
  {
    id: "ahnlab-finance",
    title: "안랩 금융영업본부 | 프리세일즈",
    titleEn: "AhnLab Financial Sales Division | Pre-sales Consultant",
    background: [
      {
        text: "금융권 고객은 보안 요구 수준이 높고 의사결정 단계가 복잡해, 기술 검증 중심의 프리세일즈 대응이 필수적이었습니다.",
        textEn:
          "Financial-sector customers had high security standards and complex decision flows, requiring technically rigorous pre-sales engagement.",
      },
    ],
    role: [
      {
        title: "기술 제안 및 PoC 운영",
        titleEn: "Technical Proposal and PoC Delivery",
        items: [
          {
            text: "고객 요구사항을 분석해 제안 아키텍처와 기술 문서를 설계했습니다.",
            textEn:
              "Analyzed customer requirements and designed proposal architectures with technical documentation.",
            subItems: [
              {
                text: "고객 시나리오 기반 데모와 PoC 계획을 수립해 검증 과정을 주도했습니다.",
                textEn:
                  "Led validation through customer-scenario-based demos and PoC planning.",
              },
              {
                text: "영업 조직과 협업하여 기술 메시지를 비즈니스 가치로 연결했습니다.",
                textEn:
                  "Worked with sales teams to connect technical positioning to business value.",
              },
            ],
          },
        ],
      },
      {
        title: "수주 경쟁력 강화",
        titleEn: "Proposal Competitiveness Improvement",
        items: [
          {
            text: "RFP 대응 과정에서 기술 리스크를 사전 관리해 제안 완성도를 높였습니다.",
            textEn:
              "Improved proposal completeness by proactively managing technical risks during RFP responses.",
          },
        ],
      },
    ],
    results: [
      {
        text: "금융권 고객 대응에서 기술 검증 중심의 프리세일즈 체계를 안정적으로 운영했습니다.",
        textEn:
          "Operated a reliable pre-sales model centered on technical validation for financial accounts.",
      },
      {
        text: "내부 협업 속도가 개선되어 제안 준비와 고객 대응 리드타임이 단축되었습니다.",
        textEn:
          "Improved internal collaboration speed, reducing proposal preparation and customer response lead time.",
      },
    ],
    lessons: [
      {
        text: "프리세일즈의 핵심은 기능 설명이 아니라 고객 의사결정 구조에 맞춘 검증 시나리오 설계라는 점을 배웠습니다.",
        textEn:
          "I learned that effective pre-sales is less about feature explanation and more about designing validation scenarios that match customer decision structures.",
      },
    ],
  },
  {
    id: "openbase-enterprise",
    title: "오픈베이스 기업영업본부 | 프리세일즈",
    titleEn: "OpenBase Enterprise Sales Division | Pre-sales Consultant",
    background: [
      {
        text: "엔터프라이즈 고객 대상 네트워크/보안 솔루션 제안에서 고객 환경별 기술 적합성을 빠르게 검증하는 역량이 중요했습니다.",
        textEn:
          "In enterprise network and security proposals, quickly validating technical fit by customer environment was critical.",
      },
    ],
    role: [
      {
        title: "기술 아키텍처 제안",
        titleEn: "Technical Architecture Proposals",
        items: [
          {
            text: "고객 과제에 맞춘 기술 시나리오를 설계하고 제안 단계의 기술 검토를 주도했습니다.",
            textEn:
              "Designed challenge-specific technical scenarios and led technical validation during proposal stages.",
          },
        ],
      },
      {
        title: "데모 및 기술 지원 체계",
        titleEn: "Demo and Technical Support Model",
        items: [
          {
            text: "영업 조직과 공동으로 데모 전략을 운영해 제안 경쟁력을 강화했습니다.",
            textEn:
              "Ran joint demo strategies with sales teams to strengthen proposal competitiveness.",
          },
        ],
      },
    ],
    results: [
      {
        text: "고객 환경 맞춤형 기술 제안 역량을 체계화해 제안 품질 일관성을 확보했습니다.",
        textEn:
          "Systematized tailored technical proposal capabilities and improved consistency in proposal quality.",
      },
      {
        text: "기술팀-영업팀 협업 모델 정착으로 고객 대응 정확도와 속도를 개선했습니다.",
        textEn:
          "Improved customer response quality and speed by establishing a stable collaboration model between technical and sales teams.",
      },
    ],
    lessons: [
      {
        text: "프리세일즈는 제품을 판매하는 단계가 아니라 고객 문제를 기술적으로 해석해 신뢰를 구축하는 과정이라는 점을 실무에서 체득했습니다.",
        textEn:
          "In practice, I learned pre-sales is not just about selling products, but about translating customer problems into technical confidence.",
      },
    ],
  },
];
