# 推送代码到 GitHub 指南

按照以下步骤将您的 Synthoframe 展示网站代码推送到 GitHub：

## 步骤 1: 在 GitHub 上创建新仓库

1. 访问 [GitHub](https://github.com/) 并登录您的账户
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 为您的仓库设置一个名称（例如：synthoframe-showcase）
4. 选择仓库的可见性（公共或私有）
5. **重要**: 不要初始化 README、.gitignore 或许可证
6. 点击 "Create repository"

## 步骤 2: 将本地仓库与 GitHub 仓库关联

1. 复制新创建的 GitHub 仓库的 URL（例如：https://github.com/您的用户名/仓库名.git）
2. 在项目根目录打开终端
3. 运行以下命令将本地仓库与远程仓库关联：
   ```bash
   git remote add origin https://github.com/您的用户名/仓库名.git
   ```

## 步骤 3: 推送代码到 GitHub

1. 确保您在主分支上：
   ```bash
   git branch -M main
   ```
2. 推送代码到 GitHub：
   ```bash
   git push -u origin main
   ```

## 验证推送结果

刷新 GitHub 仓库页面，您应该能看到所有推送的文件。

## 故障排除

如果遇到任何问题：

1. 检查网络连接
2. 确认 GitHub 凭据正确
3. 如果提示分支名称冲突，可以使用：
   ```bash
   git push -u origin master
   ```