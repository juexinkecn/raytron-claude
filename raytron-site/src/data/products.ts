export interface ProductSpec {
  name: string;
  value: string;
  unit?: string;
}

export interface ProductItem {
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
  image: string;
  gallery?: string[];
  specifications: {
    en: ProductSpec[];
    'zh-CN': ProductSpec[];
  };
  features: {
    en: string[];
    'zh-CN': string[];
  };
  applications: {
    en: string[];
    'zh-CN': string[];
  };
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

export interface ProductCategory {
  id: string;
  slug: string;
  name: {
    en: string;
    'zh-CN': string;
  };
  description: {
    en: string;
    'zh-CN': string;
  };
  icon: string;
  products: ProductItem[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'copper',
    slug: 'copper',
    name: {
      en: 'Copper Products',
      'zh-CN': '铜产品',
    },
    description: {
      en: 'High-purity copper wires, strips, foils and specialty forms for electrical and industrial applications.',
      'zh-CN': '高纯度铜线、铜带、铜箔及特殊形态产品，适用于电气和工业应用。',
    },
    icon: 'copper',
    products: [
      {
        id: 'copper-round-wire',
        slug: 'copper-round-wire',
        name: {
          en: 'Copper Round Wire',
          'zh-CN': '铜圆线',
        },
        shortDescription: {
          en: 'High-conductivity oxygen-free copper wire for electrical applications',
          'zh-CN': '高导电无氧铜圆线，适用于电气应用',
        },
        fullDescription: {
          en: 'Our copper round wires are manufactured from 99.99% pure oxygen-free copper, offering exceptional electrical conductivity and mechanical properties. Available in diameters from 0.1mm to 10mm, these wires are ideal for electrical wiring, cable manufacturing, and transformer windings.',
          'zh-CN': '我们的铜圆线采用99.99%纯度的无氧铜制造，具有卓越的导电性和机械性能。直径范围从0.1mm到10mm，非常适合电气布线、电缆制造和变压器绕组。',
        },
        image: '/images/products/copper-round-wire.jpg',
        gallery: [
          '/images/products/copper-round-wire-1.jpg',
          '/images/products/copper-round-wire-2.jpg',
        ],
        specifications: {
          en: [
            { name: 'Material', value: 'Oxygen-Free Copper (OFC)' },
            { name: 'Purity', value: '99.99%' },
            { name: 'Diameter Range', value: '0.1 - 10', unit: 'mm' },
            { name: 'Conductivity', value: '≥100%', unit: 'IACS' },
            { name: 'Tensile Strength', value: '200-400', unit: 'MPa' },
          ],
          'zh-CN': [
            { name: '材料', value: '无氧铜 (OFC)' },
            { name: '纯度', value: '99.99%' },
            { name: '直径范围', value: '0.1 - 10', unit: 'mm' },
            { name: '导电率', value: '≥100%', unit: 'IACS' },
            { name: '抗拉强度', value: '200-400', unit: 'MPa' },
          ],
        },
        features: {
          en: [
            'Excellent electrical conductivity (>100% IACS)',
            'Superior ductility and formability',
            'Consistent diameter tolerance ±0.01mm',
            'Available in soft, semi-hard, and hard tempers',
            'Suitable for subsequent enameling or tinning',
          ],
          'zh-CN': [
            '优异的导电性 (>100% IACS)',
            '卓越的延展性和成型性',
            '恒定的直径公差 ±0.01mm',
            '提供软态、半硬态和硬态',
            '适合后续漆包或镀锡处理',
          ],
        },
        applications: {
          en: [
            'Power cables and electrical wiring',
            'Motor and transformer windings',
            'Enameled wire production',
            'Stranded cable cores',
            'Electrical connectors',
          ],
          'zh-CN': [
            '电力电缆和电气布线',
            '电机和变压器绕组',
            '漆包线生产',
            '绞线电缆芯',
            '电气连接器',
          ],
        },
        metaTitle: {
          en: 'Copper Round Wire | High Purity OFC Wire - Raytron',
          'zh-CN': '铜圆线 | 高纯度无氧铜线 - Raytron',
        },
        metaDescription: {
          en: 'Premium copper round wire (0.1-10mm) with 99.99% purity and >100% IACS conductivity. Ideal for electrical cables, motor windings, and enameled wire production.',
          'zh-CN': '优质铜圆线 (0.1-10mm)，纯度99.99%，导电率>100% IACS。适用于电气电缆、电机绕组和漆包线生产。',
        },
        keywords: {
          en: [
            'copper round wire',
            'oxygen free copper wire',
            'OFC wire',
            'electrical copper wire',
            'high conductivity copper',
          ],
          'zh-CN': [
            '铜圆线',
            '无氧铜线',
            'OFC铜线',
            '电气铜线',
            '高导电铜',
          ],
        },
      },
    ],
  },
  {
    id: 'copper-clad-aluminum',
    slug: 'copper-clad-aluminum',
    name: {
      en: 'Copper Clad Aluminum (CCA)',
      'zh-CN': '铜包铝 (CCA)',
    },
    description: {
      en: 'Lightweight bimetal composites combining copper conductivity with aluminum cost-effectiveness.',
      'zh-CN': '轻量化双金属复合材料，结合铜的导电性与铝的成本优势。',
    },
    icon: 'layers',
    products: [
      {
        id: 'cca-round-wire',
        slug: 'copper-clad-aluminum-round-wire',
        name: {
          en: 'Copper Clad Aluminum Round Wire',
          'zh-CN': '铜包铝圆线',
        },
        shortDescription: {
          en: 'Lightweight CCA wire with excellent conductivity for cable applications',
          'zh-CN': '轻量化铜包铝圆线，导电性能优异，适用于电缆应用',
        },
        fullDescription: {
          en: 'Copper Clad Aluminum (CCA) round wire features an aluminum core with a metallurgically bonded copper layer. This bimetal composite offers 30-40% weight reduction compared to pure copper while maintaining good electrical performance, making it ideal for cable and wire applications where weight and cost are critical factors.',
          'zh-CN': '铜包铝(CCA)圆线由铝芯和冶金结合的铜层组成。这种双金属复合材料相比纯铜减重30-40%，同时保持良好的电气性能，非常适合对重量和成本敏感的电缆和线材应用。',
        },
        image: '/images/products/cca-round-wire.jpg',
        specifications: {
          en: [
            { name: 'Core Material', value: 'Aluminum 1350' },
            { name: 'Cladding Material', value: 'Copper (C11000)' },
            { name: 'Copper Ratio', value: '10-15%', unit: 'by weight' },
            { name: 'Diameter Range', value: '0.5 - 5.0', unit: 'mm' },
            { name: 'Conductivity', value: '55-65%', unit: 'IACS' },
            { name: 'Density', value: '3.6', unit: 'g/cm³' },
          ],
          'zh-CN': [
            { name: '芯材', value: '铝 1350' },
            { name: '包覆材料', value: '铜 (C11000)' },
            { name: '铜比例', value: '10-15%', unit: '按重量' },
            { name: '直径范围', value: '0.5 - 5.0', unit: 'mm' },
            { name: '导电率', value: '55-65%', unit: 'IACS' },
            { name: '密度', value: '3.6', unit: 'g/cm³' },
          ],
        },
        features: {
          en: [
            '30-40% lighter than pure copper',
            'Excellent corrosion resistance',
            'Good mechanical strength',
            'Cost-effective alternative to copper',
            'Suitable for high-frequency applications',
          ],
          'zh-CN': [
            '比纯铜轻30-40%',
            '优异的耐腐蚀性',
            '良好的机械强度',
            '铜的经济替代方案',
            '适用于高频应用',
          ],
        },
        applications: {
          en: [
            'Coaxial cables and RF cables',
            'Network cables (Cat5e, Cat6)',
            'CATV and broadcast cables',
            'Power distribution cables',
            'Telecommunication cables',
          ],
          'zh-CN': [
            '同轴电缆和射频电缆',
            '网络电缆 (Cat5e, Cat6)',
            '有线电视和广播电缆',
            '配电电缆',
            '电信电缆',
          ],
        },
        metaTitle: {
          en: 'Copper Clad Aluminum Wire (CCA) | Lightweight Conductor - Raytron',
          'zh-CN': '铜包铝线 (CCA) | 轻量化导体 - Raytron',
        },
        metaDescription: {
          en: 'High-quality CCA wire (0.5-5mm) combining copper conductivity with aluminum lightweight design. 30-40% weight reduction for cable manufacturing and RF applications.',
          'zh-CN': '优质铜包铝线 (0.5-5mm)，结合铜的导电性和铝的轻量化设计。减重30-40%，适用于电缆制造和射频应用。',
        },
        keywords: {
          en: [
            'copper clad aluminum',
            'CCA wire',
            'lightweight conductor',
            'CCA round wire',
            'bimetal wire',
          ],
          'zh-CN': [
            '铜包铝',
            'CCA线',
            '轻量化导体',
            '铜包铝圆线',
            '双金属线',
          ],
        },
      },
    ],
  },
];

export function getProductBySlug(slug: string): ProductItem | undefined {
  for (const category of productCategories) {
    const product = category.products.find((p) => p.slug === slug);
    if (product) return product;
  }
  return undefined;
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}

export function getAllProducts(): ProductItem[] {
  return productCategories.flatMap((c) => c.products);
}

export function getAllProductSlugs(): string[] {
  return getAllProducts().map((p) => p.slug);
}
