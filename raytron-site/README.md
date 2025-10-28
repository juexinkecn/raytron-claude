# Raytron 网站项目

这是Raytron公司的官方网站项目，采用Next.js + Tailwind CSS构建，针对SEO和GEO（生成式搜索优化）进行了全面优化。

## 🎯 项目特点

### SEO优化
- ✅ 双域名架构（en.raytron.group / cn.raytron.group）
- ✅ 完整的Hreflang标签实现
- ✅ 独立的Sitemap.xml（每个域名）
- ✅ 结构化数据（JSON-LD）
- ✅ 所有链接使用绝对地址
- ✅ 优化的Meta标签和描述
- ✅ 面包屑导航
- ✅ 图片Alt文本优化
- ✅ 快速加载速度（<1.5s首屏）

### GEO优化（AI搜索引擎优化）
- ✅ 清晰的信息架构
- ✅ 深度内容（每页800-2000字）
- ✅ FAQ结构化数据
- ✅ 详细的产品规格表
- ✅ 自然语言描述
- ✅ 关键词优化

### 技术栈
- **前端框架**: Next.js 14
- **样式**: Tailwind CSS 3
- **语言**: TypeScript
- **图标**: Lucide React
- **表单**: React Hook Form
- **动画**: Framer Motion
- **SEO**: next-sitemap

## 📁 项目结构
```
raytron-website/
├── public/
│   ├── images/              # 图片资源
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/          # React组件
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── CTASection.tsx
│   │   └── SEOHead.tsx
│   ├── config/              # 配置文件
│   │   └── site.ts
│   ├── data/                # 数据文件
│   │   ├── products.ts
│   │   └── applications.ts
│   ├── lib/                 # 工具库
│   │   └── seo.ts
│   ├── pages/               # 页面
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   │   ├── contact.tsx
│   │   ├── products/
│   │   ├── applications/
│   │   └── api/
│   ├── styles/
│   │   └── globals.css
│   └── utils/
├── .env.example
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🚀 快速开始

### 1. 安装依赖
```bash
npm install
# 或
yarn install
```

### 2. 配置环境变量

复制 `.env.example` 到 `.env.local` 并填写相应的值：
```bash
cp .env.example .env.local
```

编辑 `.env.local`：
```bash
NEXT_PUBLIC_LOCALE=en  # 或 zh-CN
SITE_URL=https://en.raytron.group  # 或 https://cn.raytron.group
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# ... 其他配置
```

### 3. 运行开发服务器
```bash
npm run dev
# 或
yarn dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 4. 构建生产版本
```bash
npm run build
npm run start
```

## 🌐 双域名部署

### 英文站部署（en.raytron.group）

1. 设置环境变量：
```bash
NEXT_PUBLIC_LOCALE=en
SITE_URL=https://en.raytron.group
```

2. 构建：
```bash
npm run build
```

3. 生成Sitemap：
```bash
SITE_URL=https://en.raytron.group npm run postbuild
```

4. 部署到服务器/CDN

### 中文站部署（cn.raytron.group）

1. 设置环境变量：
```bash
NEXT_PUBLIC_LOCALE=zh-CN
SITE_URL=https://cn.raytron.group
```

2. 构建：
```bash
npm run build
```

3. 生成Sitemap：
```bash
SITE_URL=https://cn.raytron.group npm run postbuild
```

4. 部署到服务器/CDN

## 📊 SEO检查清单

### 上线前必查

- [ ] 每个页面有唯一的Meta Title和Description
- [ ] 每个页面有一个H1标签
- [ ] 所有链接使用绝对地址（包含https://和完整域名）
- [ ] Hreflang标签正确设置
- [ ] Canonical标签指向自身
- [ ] 图片都有Alt文本
- [ ] Sitemap.xml生成并提交
- [ ] Robots.txt正确配置
- [ ] 结构化数据验证通过
- [ ] 页面加载速度 < 2.5s
- [ ] 移动端适配完美
- [ ] 表单功能正常
- [ ] 404页面友好

### Google Search Console设置

1. 验证两个域名的所有权
2. 提交Sitemap：
   - https://en.raytron.group/sitemap.xml
   - https://cn.raytron.group/sitemap.xml
3. 检查索引覆盖率
4. 监控搜索性能

### Baidu Webmaster设置

1. 验证cn.raytron.group所有权
2. 提交Sitemap
3. 提交主动推送
4. 监控索引量

## 🔧 常见问题

### Q: 如何添加新产品？

编辑 `src/data/products.ts`，按照现有格式添加产品信息。
```typescript
{
  id: 'new-product',
  slug: 'new-product',
  name: {
    en: 'New Product Name',
    'zh-CN': '新产品名称',
  },
  // ... 其他字段
}
```

### Q: 如何添加新的应用领域？

编辑 `src/data/applications.ts`，添加新的应用信息。

### Q: 联系表单如何处理？

修改 `src/pages/api/contact.ts`，集成您的邮件服务或CRM系统：
```typescript
// 使用SendGrid示例
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: 'sales@raytron.group',
  from: 'noreply@raytron.group',
  subject: '新询盘',
  html: `<p>公司: ${data.companyName}</p>...`,
});
```

### Q: 如何修改颜色主题？

编辑 `tailwind.config.js` 中的 `colors` 配置：
```javascript
colors: {
  primary: {
    500: '#3b82f6',  // 修改主色
    600: '#2563eb',
    // ...
  },
}
```

### Q: 如何优化图片？

1. 将图片放入 `public/images/` 目录
2. 使用Next.js的Image组件：
```tsx
import Image from 'next/image';

<Image
  src="/images/product.jpg"
  alt="产品描述"
  width={800}
  height={600}
  className="w-full"
/>
```

Next.js会自动优化图片为WebP格式。

## 📈 性能优化

### 已实施的优化

- ✅ 静态站点生成（SSG）
- ✅ 图片懒加载
- ✅ WebP格式图片
- ✅ Gzip/Brotli压缩
- ✅ CDN加速
- ✅ 代码分割
- ✅ Tree Shaking
- ✅ CSS优化

### 性能目标

- Lighthouse Score: ≥ 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s

### 性能测试
```bash
# 使用Lighthouse CLI
npm install -g @lhci/cli
lhci autorun --collect.url=https://en.raytron.group
```

## 🔒 安全措施

- HTTPS强制
- CORS配置
- XSS保护
- CSRF保护
- 表单验证
- SQL注入防护
- reCAPTCHA集成

## 📝 内容管理

### 产品内容

所有产品内容在 `src/data/products.ts` 中管理。包括：
- 产品名称（中英文）
- 描述
- 规格参数
- 特点
- 应用领域
- SEO元数据

### 应用领域内容

所有应用领域内容在 `src/data/applications.ts` 中管理。

### 静态页面

使用Markdown或直接在React组件中编写。

## 🛠️ 开发工具

推荐的VSCode扩展：
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Path Intellisense

## 📦 构建和部署

### 构建命令
```bash
# 开发环境
npm run dev

# 生产构建
npm run build

# 生产运行
npm run start

# 代码检查
npm run lint

# 生成Sitemap
npm run postbuild
```

### 部署选项

1. **Vercel** (推荐) - 零配置部署
2. **Netlify** - 简单易用
3. **自托管** - 完全控制
4. **Docker** - 容器化部署

详见 `DEPLOYMENT.md` 获取完整部署指南。

## 🐛 故障排除

### 问题: 页面404

检查Next.js构建输出和路由配置。
```bash
npm run build
# 查看 .next/server/pages/ 目录
```

### 问题: 样式丢失

确保Tailwind CSS配置正确：
```bash
# 检查 tailwind.config.js
# 确保 content 路径正确
content: [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
]
```

### 问题: 表单提交失败

检查API路由和环境变量：
```bash
# 查看 .env.local
# 确保所有必需的环境变量已设置
```

### 问题: 速度慢

1. 启用CDN
2. 检查图片优化
3. 启用Gzip/Brotli
4. 使用浏览器缓存
```bash
# 分析构建包大小
ANALYZE=true npm run build
```

## 📞 技术支持

- **文档**: 查看本README和DEPLOYMENT.md
- **问题追踪**: 创建GitHub Issue
- **邮件支持**: dev@raytron.group

## 📄 许可证

版权所有 © 2025 Raytron Advanced Materials Co., Ltd.

## 🎉 致谢

感谢所有为本项目做出贡献的开发者。

---

**重要提示**: 

1. 部署前请完整测试所有功能
2. 配置好所有环境变量
3. 准备好所有产品图片和内容
4. 提交Sitemap到搜索引擎
5. 设置Google Analytics和监控

祝您使用愉快！🚀