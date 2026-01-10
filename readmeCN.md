<div align="center">

  [EN](./README.md) | 中文

</div>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB.svg?logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/React%20Router-v6-CA4245.svg?logo=reactrouter&logoColor=white" alt="React Router">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E.svg?logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Styling-CSS3-1572B6.svg?logo=css3&logoColor=white" alt="CSS">
  <img src="https://img.shields.io/badge/Hosting-Vercel-000000.svg?logo=vercel&logoColor=white" alt="Vercel">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT">
  <img src ="https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=bootstrap" alt="Bootstrap">
</p>

<div align="center">

# 🍽️ 美食食谱网站 (React)

</div>

这是一个基于 React 构建的现代美食食谱平台，包含用户认证、具有每日促销功能的商店以及动态食谱浏览模块。 本项目是我原有 **[静态美食食谱网站](https://github.com/Dendroculus/Food-Recipe-Website)** 的 全面升级动态版，核心专注于代码重构、可维护性及清晰的系统架构。

在线演示: **[Food Recipe Website](https://food-recipe-website-react.vercel.app/)**

---

## ✨ 功能特性

- 🍲 **食谱浏览** – 专门的 `recipes` 页面用于探索各类美味佳肴。
- 🛒 **购物体验** – `shop` 版块包含商品卡片展示和详情模态框交互。
- 🔐 **认证界面** – 位于 `authentication/` 目录下的登录/注册风格页面，包含完整的前端验证逻辑。
- 💡 **内容页面** – 包含 `home`（主页）、`about-us`（关于我们）、`inspiration`（灵感）、`coming-soon`（敬请期待）和 `payment`（支付）页面，提供完整的网站浏览体验。
- ✅ **表单验证** – 在 `validator/AuthValidator.jsx` 和 `AuthValidator.css` 中集中管理用户认证的验证逻辑。
- 📱 **响应式布局** – 使用可复用组件和原生 CSS 构建，完美适配桌面端、平板和移动端设备。
- 🧱 **组件化架构** – 结构清晰的 `components/` 目录，包含导航栏、加载器、页脚、模态框和商店 UI 组件。
- 🧪 **测试设置** – 基于 Create React App，开箱即用的 Jest + React Testing Library 测试环境。

---

## 🖼️ 界面截图

| | |
| :---: | :---: |
| **主页 (Home Page)** | **食谱主页 (Recipes Main Page)** |
| ![Home Page](./public/assets/screenshots/Home.png) | ![Recipes Page](./public/assets/screenshots/Recipes_Main.png) | 
| **商店页面 (Shopping Page)** | **食谱详情页 (Recipes Page)** |
| ![Shopping Page](./public/assets/screenshots/Shop.png) | ![Recipe Details](./public/assets/screenshots/Recipes.png) |
| **认证页面 (Authentication Page)** | **支付页面 (Payment Page)** |
| ![Authentication Page](./public/assets/screenshots/Authentication.png) | ![Payment Page](./public/assets/screenshots/Payment.png) |
| **灵感页面 (Inspiration Page)** | **关于我们 (About Us Page)** |
| ![Inspiration Page](./public/assets/screenshots/Inspiration.png) | ![About Us Page](./public/assets/screenshots/AboutUs.png) |

---

## 🏗️ 项目结构

```bash
Food-Recipe-Website-React/
├── public/                         # 静态资源 (index.html, favicon 等)
│
├── src/
│   ├── components/
│   │   ├── footer/                 # 页脚组件
│   │   ├── loader/                 # 加载指示器 / 骨架屏
│   │   ├── modals/                 # 通用模态框组件
│   │   ├── navigations/            # 导航栏 / 导航 UI
│   │   └── shop/                   # 商店专用组件
│   │
│   ├── utils/                      # 共享工具函数 / 助手函数
│   │
│   ├── validator/
│   │   ├── AuthValidator.css       # 认证验证样式
│   │   └── AuthValidator.jsx       # 认证验证逻辑 / 组件
│   │
│   ├── pages/
│   │   ├── about-us/               # 关于我们页面
│   │   ├── authentication/         # 登录 / 注册页面
│   │   ├── coming-soon/            # 敬请期待页面
│   │   ├── home/                   # 落地页 / 主页
│   │   ├── inspiration/            # 灵感 / 内容页面
│   │   ├── payment/                # 支付 / 结账体验页面
│   │   ├── recipes/                # 食谱列表 / 详情页面
│   │   └── shop/                   # 商店主页
│   │
│   ├── App.css                     # 全局应用样式
│   ├── App.js                      # 根组件
│   ├── App.test.js                 # App 组件测试文件
│   ├─ index.css                    # 全局 CSS / 重置样式
│   ├── index.js                    # ReactDOM 入口文件
│   ├── logo.svg                    # Logo 资源
│   ├── reportWebVitals.js          # Web 性能指标报告 (CRA 默认)
│   ├── routes.js                   # 使用 React Router 的路由配置
│   └── setupTests.js               # Jest / RTL 测试设置
│
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

## 🧰 技术栈

- **框架:** React 18 (`react`, `react-dom`)
- **路由:** React Router v6 (`react-router-dom`)
- **样式:** 原生 CSS (`App.css`, `index.css`, 以及各功能模块的独立 CSS 如 `AuthValidator.css`)
- **图标:** `react-icons`
- **工具链:** Create React App (`react-scripts`)
- **测试:** Jest + React Testing Library  
  (`@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `@testing-library/dom`)
- **性能:** `web-vitals` (可选报告)

---

## 🚀 快速开始

### 1️⃣ 克隆仓库

```bash
git clone https://github.com/Dendroculus/Food-Recipe-Website-React.git
cd Food-Recipe-Website-React
```

### 2️⃣ 安装依赖

使用 **npm** (CRA 推荐):

```bash
npm install
```

> 你将会看到 `package.json` 中定义的依赖项，如 `react`, `react-scripts`, `react-router-dom`, `react-icons`, `@testing-library/*` 等。

### 3️⃣ 启动开发服务器

```bash
npm start
```

这将会在开发模式下运行应用，访问地址为：

`http://localhost:3000`

当你编辑文件时页面会自动重新加载，Lint 错误也会显示在控制台中。

---

## ▶️ 可用脚本

在项目根目录下，你可以运行：

```bash
# 启动开发服务器
npm start

# 构建生产环境包
npm run build

# 以监听模式运行测试
npm test

# 暴露配置 (不可逆操作)
npm run eject
```

- `npm start` – 通过 `react-scripts start` 启动 **Create React App** 的开发服务器。
- `npm run build` – 将应用构建到 `build` 文件夹，用于生产环境部署。
- `npm test` – 启动交互式监听模式的测试运行器。
- `npm run eject` – 暴露底层的 Webpack/Babel 配置 (仅当你确实需要深度自定义时使用)。

---

## 🌐 部署

本项目已部署在 **Vercel** 上：

- **在线演示:** [Food Recipe Website](https://food-recipe-website-react.vercel.app/)

部署你自己的版本：

1. 将你的代码库推送到 GitHub。
2. 登录 [Vercel](https://vercel.com/) 并点击 **“New Project”**。
3. 导入此 GitHub 仓库。
4. Vercel 会自动检测 Create React App 并使用 `npm run build` 作为构建命令。
5. 点击 **Deploy**。
6. 每次推送到默认分支都会触发新的部署。

---

## 💡 相比原静态版本的改进

本项目是我原有静态美食食谱网站的改进版本：

- 从 **静态 HTML/CSS/JS** 迁移到了 **React SPA (单页应用)**。
- 在 `routes.js` 中使用 React Router v6 集中管理 **路由**。
- 新增了独立的 **认证**、**商店**、**食谱**、**支付** 和 **灵感** 页面。
- 引入了基于 **模态框的用户体验** (`ShopAddModal`, `ShopDetailsModal`) 用于商店交互。
- 集中管理 **认证验证** 逻辑，使表单代码更整洁。
- 开箱即用的 Jest + React Testing Library **测试** 环境。
- 未来更易于集成后端 API 或状态管��。

---

## 🤝 贡献

欢迎提交贡献、想法和反馈！

1. Fork 本仓库。
2. 创建一个新的分支：

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. 提交你的更改：

   ```bash
   git commit -m "Add some feature"
   ```

4. 推送分支：

   ```bash
   git push origin feature/your-feature-name
   ```

5. 提交 Pull Request 到本仓库。

对于较大的功能更新或重构，建议先开启一个 issue 讨论方案。

---

## 📜 许可证

本项目基于 **MIT License** 授权。

详情请参阅 [`LICENSE`](./LICENSE) 文件。