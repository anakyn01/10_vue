🚀 Vite + Vue GitHub Pages 배포 (수동 방식)
✅ 1. vite.config.js 설정
루트에 있는 vite.config.js 또는 vite.config.ts 파일을 열고, base 속성을 추가합니다:

js
복사
편집
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/<리포지토리명>/', // ← 꼭 설정
})
예: 저장소가 https://github.com/username/my-vue-app 라면
base: '/my-vue-app/'

✅ 2. GitHub 저장소 만들기
GitHub에서 새 저장소 생성 (예: my-vue-app)

로컬 프로젝트를 GitHub에 푸시:

bash
복사
편집
git init
git remote add origin https://github.com/username/my-vue-app.git
git add .
git commit -m "init"
git push -u origin main
✅ 3. gh-pages 패키지 설치
bash
복사
편집
npm install --save-dev gh-pages
✅ 4. package.json에 스크립트 추가
json
복사
편집
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
✅ 5. 빌드 및 배포
bash
복사
편집
npm run build
npm run deploy
dist 폴더가 생성되고, 그것이 gh-pages 브랜치로 푸시됩니다.
