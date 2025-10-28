export interface Application {
  id: string;
  slug: string;
  name: {
    en: string;
    'zh-CN': string;
  };
  shortDescription: {
    en: string;
    'zh-CN': string;
  };
  fullDescription: {
    en: string;
    'zh-CN': string;
  };
  icon: string;
  image: string;
  heroImage: string;
  benefits: {
    en: string[];
    'zh-CN': string[];
  };
  recommendedProducts: string[];
  caseStudies?: {
    title: { en: string; 'zh-CN': string };
    description: { en: string; 'zh-CN': string };
    results: { en: string[]; 'zh-CN': string[] };
  }[];
  metaTitle: {
    en: string;
    'zh-CN': string;
  };
  metaDescription: {
    en: string;
    'zh-CN': string;
  };
  keywords: {
    en: string[];
    'zh-CN': string[];
  };
}

export const applications: Application[] = [
  {
    id: 'cable',
    slug: 'cable',
    name: {
      en: 'Cable & Wire Industry',
      'zh-CN': '线缆导体行业',
    },
    shortDescription: {
      en: 'High-performance conductors for power cables, communication cables, and specialty wires.',
      'zh-CN': '用于电力电缆、通信电缆和特种线材的高性能导体。',
    },
    fullDescription: {
      en: 'Our metal composite materials provide the cable and wire industry with cost-effective, lightweight alternatives to traditional copper conductors. Whether for power transmission, telecommunications, or data cables, our copper clad aluminum (CCA) and copper clad steel (CCS) products deliver excellent performance while reducing material costs and cable weight by up to 40%.',
      'zh-CN': '我们的金属复合材料为线缆行业提供经济高效、轻量化的传统铜导体替代方案。无论是电力传输、电信还是数据电缆，我们的铜包铝(CCA)和铜包钢(CCS)产品都能提供卓越性能，同时将材料成本和电缆重量降低多达40%。',
    },
    icon: '🔌',
    image: '/images/applications/cable-industry.jpg',
    heroImage: '/images/applications/cable-hero.jpg',
    benefits: {
      en: [
        '30-40% weight reduction compared to pure copper',
        'Significant cost savings on material',
        'Excellent electrical conductivity for most applications',
        'Superior mechanical strength and flexibility',
        'Ideal for long-distance installations',
        'Reduced transportation and installation costs',
      ],
      'zh-CN': [
        '相比纯铜减重30-40%',
        '材料成本显著节省',
        '大多数应用场景下导电性能优异',
        '卓越的机械强度和柔韧性',
        '适合长距离安装',
        '降低运输和安装成本',
      ],
    },
    recommendedProducts: [
      'copper-clad-aluminum-round-wire',
    ],
    caseStudies: [
      {
        title: {
          en: 'CATV Cable Upgrade Project',
          'zh-CN': '有线电视电缆升级项目',
        },
        description: {
          en: 'Major telecommunications provider replaced traditional copper cables with CCA solutions.',
          'zh-CN': '主要电信运营商用CCA解决方案替换传统铜缆。',
        },
        results: {
          en: [
            '35% reduction in cable weight',
            '28% cost savings on materials',
            'Maintained signal quality standards',
          ],
          'zh-CN': [
            '电缆重量减少35%',
            '材料成本节省28%',
            '保持信号质量标准',
          ],
        },
      },
    ],
    metaTitle: {
      en: 'Cable & Wire Conductors | CCA & CCS Solutions - Raytron',
      'zh-CN': '线缆导体 | 铜包铝和铜包钢解决方案 - Raytron',
    },
    metaDescription: {
      en: 'Lightweight CCA and CCS conductors for power cables, CATV, telecommunications, and data cables. 30-40% weight reduction with excellent performance.',
      'zh-CN': '用于电力电缆、有线电视、电信和数据电缆的轻量化CCA和CCS导体。减重30-40%，性能卓越。',
    },
    keywords: {
      en: [
        'cable conductor',
        'CCA wire for cables',
        'telecommunications conductor',
        'power cable materials',
        'CATV cable',
      ],
      'zh-CN': [
        '电缆导体',
        '铜包铝电缆线',
        '电信导体',
        '电力电缆材料',
        '有线电视电缆',
      ],
    },
  },
  {
    id: 'solar',
    slug: 'solar',
    name: {
      en: 'Solar Energy / Photovoltaic',
      'zh-CN': '光伏/太阳能',
    },
    shortDescription: {
      en: 'PV ribbons and interconnect materials for solar cell and module manufacturing.',
      'zh-CN': '用于太阳能电池和组件制造的光伏焊带和互连材料。',
    },
    fullDescription: {
      en: 'The solar industry demands materials that can withstand extreme conditions while maintaining optimal conductivity. Our photovoltaic ribbons, copper strips, and specialized composite materials are engineered for solar cell interconnection, offering superior solderability, corrosion resistance, and long-term reliability in harsh outdoor environments.',
      'zh-CN': '太阳能行业需要能够承受极端条件同时保持最佳导电性的材料。我们的光伏焊带、铜带和专用复合材料专为太阳能电池互连而设计，在恶劣的户外环境中提供卓越的可焊性、耐腐蚀性和长期可靠性。',
    },
    icon: '☀️',
    image: '/images/applications/solar-energy.jpg',
    heroImage: '/images/applications/solar-hero.jpg',
    benefits: {
      en: [
        'Excellent solderability for automated assembly',
        'High corrosion resistance for 25+ year lifespan',
        'Low contact resistance maximizes efficiency',
        'Compatible with all major solar cell technologies',
        'Available in various widths and thicknesses',
        'Cost-effective without compromising quality',
      ],
      'zh-CN': [
        '优异的可焊性适合自动化组装',
        '高耐腐蚀性确保25年以上使用寿命',
        '低接触电阻最大化效率',
        '兼容所有主流太阳能电池技术',
        '提供多种宽度和厚度',
        '高性价比不妥协质量',
      ],
    },
    recommendedProducts: [],
    metaTitle: {
      en: 'Solar PV Ribbon & Interconnect Materials - Raytron',
      'zh-CN': '光伏焊带和互连材料 - Raytron',
    },
    metaDescription: {
      en: 'High-quality photovoltaic ribbons and conductive materials for solar cell manufacturing. Superior solderability and 25+ year reliability.',
      'zh-CN': '用于太阳能电池制造的高质量光伏焊带和导电材料。卓越的可焊性和25年以上可靠性。',
    },
    keywords: {
      en: [
        'photovoltaic ribbon',
        'solar cell interconnect',
        'PV busbar',
        'solar tabbing wire',
        'PV ribbon manufacturer',
      ],
      'zh-CN': [
        '光伏焊带',
        '太阳能电池互连',
        '光伏汇流条',
        '太阳能焊带',
        '光伏焊带制造商',
      ],
    },
  },
  {
    id: 'battery',
    slug: 'battery',
    name: {
      en: 'Battery & Energy Storage',
      'zh-CN': '电池/储能',
    },
    shortDescription: {
      en: 'Battery tabs, busbars, and conductive foils for lithium-ion and energy storage systems.',
      'zh-CN': '用于锂离子和储能系统的电池极耳、汇流条和导电箔材。',
    },
    fullDescription: {
      en: 'The rapid growth of electric vehicles and energy storage systems demands advanced materials for battery production. Our copper and aluminum foils, nickel-clad materials, and precision strips are designed for battery tabs, current collectors, and busbars, ensuring optimal performance, safety, and longevity in demanding battery applications.',
      'zh-CN': '电动汽车和储能系统的快速增长需要先进的电池生产材料。我们的铜箔和铝箔、镍包覆材料和精密带材专为电池极耳、集流体和汇流条设计，确保在苛刻的电池应用中实现最佳性能、安全性和使用寿命。',
    },
    icon: '🔋',
    image: '/images/applications/battery-storage.jpg',
    heroImage: '/images/applications/battery-hero.jpg',
    benefits: {
      en: [
        'Ultra-thin precision foils down to 6μm',
        'Excellent current carrying capacity',
        'Superior corrosion resistance in electrolyte',
        'High mechanical strength for automated assembly',
        'Low resistance for maximum energy efficiency',
        'Compatible with all battery chemistries',
      ],
      'zh-CN': [
        '超薄精密箔材低至6μm',
        '优异的载流能力',
        '在电解液中卓越的耐腐蚀性',
        '高机械强度适合自动化组装',
        '低电阻实现最大能效',
        '兼容所有电池化学体系',
      ],
    },
    recommendedProducts: [],
    metaTitle: {
      en: 'Battery Materials - Tabs, Foils & Busbars - Raytron',
      'zh-CN': '电池材料 - 极耳、箔材和汇流条 - Raytron',
    },
    metaDescription: {
      en: 'Premium copper and aluminum foils, nickel-clad materials for lithium-ion batteries and energy storage. Ultra-thin precision for optimal performance.',
      'zh-CN': '用于锂离子电池和储能的优质铜箔和铝箔、镍包覆材料。超薄精度实现最佳性能。',
    },
    keywords: {
      en: [
        'battery tab material',
        'lithium ion battery foil',
        'battery current collector',
        'battery busbar',
        'energy storage materials',
      ],
      'zh-CN': [
        '电池极耳材料',
        '锂离子电池箔',
        '电池集流体',
        '电池汇流条',
        '储能材料',
      ],
    },
  },
  {
    id: 'automotive',
    slug: 'automotive',
    name: {
      en: 'Automotive & Electric Vehicles',
      'zh-CN': '汽车/EV',
    },
    shortDescription: {
      en: 'Lightweight conductors for electric vehicles, charging infrastructure, and automotive electronics.',
      'zh-CN': '用于电动汽车、充电基础设施和汽车电子的轻量化导体。',
    },
    fullDescription: {
      en: 'The automotive industry, especially electric vehicles, requires materials that reduce weight while maintaining performance. Our composite conductors provide the ideal solution for EV wiring harnesses, charging cables, battery connections, and automotive electronics, helping manufacturers meet stringent efficiency and weight reduction targets.',
      'zh-CN': '汽车行业，特别是电动汽车，需要在保持性能的同时减轻重量的材料。我们的复合导体为电动汽车线束、充电电缆、电池连接和汽车电子提供理想解决方案，帮助制造商实现严格的效率和减重目标。',
    },
    icon: '🚗',
    image: '/images/applications/automotive-ev.jpg',
    heroImage: '/images/applications/automotive-hero.jpg',
    benefits: {
      en: [
        'Significant vehicle weight reduction',
        'Improved fuel efficiency and EV range',
        'Excellent vibration and thermal resistance',
        'Meets automotive safety standards',
        'Cost-effective for high-volume production',
        'Reduced installation complexity',
      ],
      'zh-CN': [
        '显著减轻车辆重量',
        '提高燃油效率和电动车续航',
        '优异的抗振动和耐热性',
        '符合汽车安全标准',
        '高产量生产的经济性',
        '降低安装复杂度',
      ],
    },
    recommendedProducts: [],
    metaTitle: {
      en: 'Automotive & EV Conductors | Lightweight Solutions - Raytron',
      'zh-CN': '汽车和电动车导体 | 轻量化解决方案 - Raytron',
    },
    metaDescription: {
      en: 'Lightweight CCA and composite conductors for electric vehicles, charging systems, and automotive wiring. Reduce weight while maintaining performance.',
      'zh-CN': '用于电动汽车、充电系统和汽车布线的轻量化CCA和复合导体。在保持性能的同时减轻重量。',
    },
    keywords: {
      en: [
        'automotive conductor',
        'EV wiring harness',
        'electric vehicle materials',
        'charging cable conductor',
        'lightweight automotive wire',
      ],
      'zh-CN': [
        '汽车导体',
        '电动车线束',
        '电动汽车材料',
        '充电电缆导体',
        '轻量化汽车线材',
      ],
    },
  },
];

export function getApplicationBySlug(slug: string): Application | undefined {
  return applications.find((app) => app.slug === slug);
}

export function getAllApplicationSlugs(): string[] {
  return applications.map((app) => app.slug);
}