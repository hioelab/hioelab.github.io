# GitHub Pages로 홈페이지 올리기 (설치 없이, 웹에서)

이 폴더(`cowork_webpage`)의 파일들을 그대로 무료로 게시하는 방법입니다.
프로그램 설치 없이 웹브라우저만으로 가능합니다. 약 10분 소요.

---

## 0. 준비

올릴 파일 목록 (이미 이 폴더에 있음):

- `index.html`, `professor.html`, `members.html`, `research.html`,
  `projects.html`, `publications.html`, `news.html`, `contact.html`, `people.html`
- `style.css`, `app.js`
- `kim.jpg`, `CV_Seungbeom_Kim.pdf`
- (추가할 사진) `proj1.jpg`, `proj2.jpg` … 및 구성원 사진

> 팁: 먼저 사진들을 이 폴더에 다 넣어두고 한 번에 올리면 편합니다.

---

## 1. GitHub 계정 만들기 (무료)

1. https://github.com 접속 → **Sign up**
2. 이메일·비밀번호·사용자이름(username) 입력
   - username은 주소에 쓰입니다. 예: username이 `sbkim`이면 사이트 주소가
     `https://sbkim.github.io/...` 형태가 됩니다.
3. 이메일 인증 완료

---

## 2. 저장소(Repository) 만들기

1. 로그인 후 오른쪽 위 **+** → **New repository**
2. **Repository name** 입력
   - **방법 A (추천): `사용자이름.github.io`** 로 지으면
     주소가 깔끔하게 `https://사용자이름.github.io` 가 됩니다.
     예: `sbkim.github.io`
   - 방법 B: 아무 이름(예: `lab-website`)으로 지으면
     주소는 `https://사용자이름.github.io/lab-website/` 가 됩니다.
     (우리 사이트는 링크가 모두 상대경로라 두 방법 다 정상 작동)
3. **Public** 선택 (무료 Pages는 공개 저장소여야 함)
4. **Create repository** 클릭

---

## 3. 파일 업로드

1. 만든 저장소 화면에서 **uploading an existing file** 링크 클릭
   (또는 **Add file → Upload files**)
2. `cowork_webpage` 폴더를 열고, **폴더 안의 파일들을 전부 선택**해서
   브라우저 업로드 영역으로 **드래그**
   - ⚠️ 폴더 자체가 아니라 *폴더 안의 파일들*을 올려야 `index.html`이 최상위에 옵니다.
   - 사진·PDF도 함께 드래그하면 됩니다.
3. 아래 **Commit changes**(초록 버튼) 클릭

---

## 4. GitHub Pages 켜기

1. 저장소 상단 메뉴에서 **Settings** 클릭
2. 왼쪽 메뉴에서 **Pages** 클릭
3. **Build and deployment → Source** 를 **Deploy from a branch** 로 둠
4. **Branch** 를 **main** / 폴더는 **/(root)** 로 선택 → **Save**
5. 잠시(1~2분) 기다리면 상단에 게시 주소가 표시됩니다:
   - 방법 A: `https://사용자이름.github.io`
   - 방법 B: `https://사용자이름.github.io/lab-website/`

주소를 클릭하면 홈페이지가 열립니다. (`index.html`이 자동으로 첫 화면)

---

## 5. 나중에 내용 수정·사진 추가하기

1. 이 폴더에서 파일을 수정하거나 새 사진을 추가
2. GitHub 저장소 → **Add file → Upload files** → 바뀐/새 파일 드래그
   - 같은 이름으로 올리면 덮어쓰기 됩니다.
3. **Commit changes** → 1~2분 후 사이트에 반영

---

## 6. (선택) 직접 산 도메인 연결

- 대학/개인 도메인이 있으면 Settings → Pages → **Custom domain** 에 입력하고,
  도메인 업체에서 DNS(CNAME)를 `사용자이름.github.io` 로 설정하면 됩니다.
- 없으면 기본 `github.io` 주소를 그대로 써도 무방합니다.

---

## 참고 (무료 한도)

- 사이트 용량 1GB 권장 / 트래픽 월 100GB(소프트) — 랩 홈페이지엔 충분.
- 더 간단히 올리고 싶으면 **Netlify Drop**(netlify.com): 폴더를 창에 끌어다 놓으면 즉시 게시.

문의나 막히는 부분 있으면 알려주세요.
