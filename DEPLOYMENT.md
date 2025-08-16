# 部署到 Vercel

按照以下步骤将 Synthoframe 展示网站部署到 Vercel：

1. 访问 [Vercel 官网](https://vercel.com/) 并使用您的 GitHub、GitLab 或 Bitbucket 账户登录。

2. 点击 "New Project" 按钮。

3. 选择包含此项目的仓库。

4. Vercel 会自动检测这是一个 Next.js 项目，并配置适当的构建设置。

5. 点击 "Deploy" 按钮开始部署。

6. 部署完成后，Vercel 会为您提供一个 URL 来访问您的网站。

## 手动部署

如果您想通过命令行部署：

1. 安装 Vercel CLI：
   ```bash
   npm install -g vercel
   ```

2. 在项目根目录中运行：
   ```bash
   vercel --prod
   ```

3. 按照提示操作完成部署。

## 环境变量

如果您的项目需要环境变量，请在 Vercel 项目设置的 "Environment Variables" 部分进行配置。