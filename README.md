<h1 align=center>Rolling</h2>

> 추억의 롤링 페이퍼를 웹 상에서도 즐겨보세요 !

<img width="1200" alt="image" src="https://github.com/Dev-Duke-Seo/rolling_team1/assets/127701092/88489d5a-17dd-470b-b03d-5608c7270e4b">

<br/>

다른 사람들의 롤링페이퍼에 메시지와 이모티콘 리액션을 남길 수 있고, <br/>
자기만의 롤링페이퍼를 만들어 다른사람에게 공유할 수 있는 서비스

<br/><br/>

## 설치 방법

1. 소스 파일 설치

```bash
git clone https://github.com/Dev-Duke-Seo/rolling_team1.git
cd rolling_team1
```

2. 패키지 설치

```bash
npm install
```

3. `.env` 파일 생성

```
REACT_APP_BASE_URL = 'BASE_URL'
REACT_APP_API_KEY = 'KAKAO_API_KEY'
```

4. 실행

```bash
npm run start
```

<br/><br/>

## 🫂 팀원 소개

<table>
    <tr align="center">
        <td><img width="150" src="https://avatars.githubusercontent.com/u/127701092?v=4"></td>
        <td><img width="150" src="https://avatars.githubusercontent.com/u/152264841?v=4"></td>
        <td><img width="150" src="https://avatars.githubusercontent.com/u/37208116?v=4"></td>
        <td><img width="150" src="https://avatars.githubusercontent.com/u/127701344?v=4"></td>
        <td><img width="150" src="https://avatars.githubusercontent.com/u/122016324?v=4"></td>
    </tr>
    <tr align="center">
      <td><a href="https://github.com/yuyoni">이유연</a></td>
      <td><a href="https://github.com/kimsuns">김선영</a></td>
      <td><a href="https://github.com/yulmai999">김율민</a></td>
      <td><a href="https://github.com/Dev-Duke-Seo">서인덕</a></td>
      <td><a href="https://github.com/Crack-Egg">이재명</a></td>
    </tr>
    <tr align="center">
      <td>팀장</td>
      <td>팀원</td>
      <td>팀원</td>
      <td>팀원</td>
      <td>팀원</td>
    </tr>
</table>

<br/><br/>

## 🗓️ 개발 일정

2024.01.17 ~ 2024.02.01 (2주)

<br/><br/>

## 🔨 사용 기술 및 도구

### 배포

![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white)

### 개발

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### 협업

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=eslint&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white) ![Notion](https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white)

<br/>

## 📁 폴더 구조

```bash
src
├── assets
│   └─ fonts
│   └─ images
├── apis
├── components
│   └─ Post
│       └── Card.jsx
│       └── Card.style.js
│   └─ List
├── contexts
├── constants
├── pages
├── utils
├── hooks
├── router
├── App.jsx
├── GlobalStyle.css
└── index.jsx
```

<br/><br/>

## 🔗 배포 링크

[Rolling - 바로가기](https://rolling-team1.netlify.app/)

<br/><br/>

## ✨ 서비스 주요 기능

<br/>

### 📄 메인 페이지

- 플랫폼에 대한 간단한 설명과 페이지 이동 버튼

### 📄 롤링페이퍼 만들기 페이지

- 이름과 배경색상 or 이미지를 골라 페이퍼를 생성하는 기능

### 📄 롤링페이퍼 리스트 구경하기 페이지

- 이모티콘 리액션, 최신순으로 정렬된 캐러셀 UI의 롤링페이퍼 리스트
- 하나 클릭 시 해당하는 사용자의 롤링페이퍼로 이동

### 📄 롤링페이퍼 페이지

- 이모지 리액션을 남길 수 있는 기능
- 이 롤링페이퍼를 공유할 수 있는 기능
- 롤링페이퍼에 남겨진 메시지들을 무한 스크롤 방식으로 볼 수 있는 기능
- 메시지 카드는 클릭 시 모달로 자세히 볼 수 있는 기능
- 편집버튼을 눌러 메시지 카드 삭제 기능 활성화
- 플러스 버튼을 눌러서 롤링페이퍼 주인에게 메시지 남기기 기능

### 📄 메시지 생성하기 페이지

- 메시지 이름, 프로필 이미지, 내용, 폰트를 선택 및 작성 할 수 있는 기능

<br/><br/>

# ✨ 추가 기능

- 사용자 경험을 개선하기 위한 스켈레톤 UI
- 데이터가 없는 페이지를 위해 404페이지 생성
- SEO 향상을 위해 react-helmet 라이브러리를 활용한 페이지 별 메타태그 작성
- 무한 스크롤 기능이 있는 점을 감안해 사용자 경험을 개선하기 위해 페이지 상단으로 이동할 수 있는 버튼 추가

<br/><br/><br/>

# 💡 문제 및 해결

<br/>

### 1️⃣ 무한 스크롤 기능 구현을 위해 스크롤 이벤트를 이용했을 때

<img width="400" src="https://github.com/Dev-Duke-Seo/rolling_team1/assets/127701092/8272853b-e37e-4363-a22b-4b675fa10904"><br/>

- 스크롤 이벤트로 무한 스크롤을 구현했을 때, 리플로우에 의해 렌더링 성능이 좋지 않음 + 의도한대로 동작하지 않는 문제점 발생 <br/><br/>

<img width="400" src="https://github.com/Dev-Duke-Seo/rolling_team1/assets/127701092/c9e64594-2448-4869-a88a-a2ad9f09025a"><br/>

⇒ Intersection Observer API의 기본 기능 중 하나인 브라우저 Viewport와 Target으로 설정한 요소의 교차점을 관찰하여 Target이 Viewport에 포함되는지를 구별하는 기능을 이용해 해결

<br/><br/>

### 2️⃣ react-quill 라이브러리를 이용해 편집기에서 작성한 내용을 그대로 전송했을 때

<img width="300" src="https://github.com/Dev-Duke-Seo/rolling_team1/assets/127701092/30e5044b-5eb7-4ef2-bc52-c5e19fe51dd0"><br/>

react-quill 라이브러리를 이용해 편집기에서 작성한 내용을 메시지 카드에 보여줄 때 html형식의 값이 그대로 보여지게 되는 문제점 발생

<br/>

<img width="300" alt="image" src="https://github.com/Dev-Duke-Seo/rolling_team1/assets/127701092/bfb0cdde-9650-47c6-a3e8-d00f98ede1db"><br/>

⇒ dangerouslySetInnerHTML을 이용해 string을 html로 파싱해서 DOM에 추가하는 방식으로 해결 <br/>
but, 웹페이지에 악성 스크립트를 삽입할 수 있는 취약점이 있어서 사용자의 입력 값을 검사하고 사용하는 식으로 보완하면 좋을 듯

<br/><br/>

### 3️⃣ SEO 향상을 위한 react-helmet 적용했을 때

<img width="300" alt="image" src="https://github.com/Dev-Duke-Seo/rolling_team1/assets/127701092/200d29b5-52dd-4c77-ac78-473738287b15"><br/>

react-helmet 을 이용해 동적으로 생성한 메타태그가 title만 바뀌고 url공유 시 적용되지 않는 문제가 발생

<br/>

<img width="300" alt="image" src="https://github.com/Dev-Duke-Seo/rolling_team1/assets/127701092/0734dd4e-e771-426f-9700-2a9d3f1759ce"><br/>

=> 기본적으로 크롤러는 html 문서를 로딩한 뒤 자바스크립트를 실행함. 그래서 정적 html로 미리 렌더링해서 크롤러에게 전달해줄 수 있는 방식으로 문제를 해결하기 위해 react-snap을 사용 (CSR 기반에서 Pre-rendering을 가능하게 해주는 라이브러리)

<br/><br/>

### 4️⃣ 컨벤션? 컨벤션! 컨벤션!!

초기 여러 자료나 멘토님 조언을 참고해 컨벤션 룰을 셋팅하였으나 실제 협업에 들어가니 각자 생각하는 개념의 넓이나 범위가 달라 컨벤션을 정했음에도 코드의 통일성이 떨어지는 문제 발생<br/>

<img width="300" src="https://github.com/Dev-Duke-Seo/rolling_team1/assets/127701092/a8ed675b-decf-4def-844b-b10dad911a3f">

=> 지루하고 귀찮지만 컨벤션에 관한 회의를 여러번 해가며 명확한 기준을 세워 후반으로 갈수록 혼선을 빚는 일이 줄어들 수 있었음
<br/><br/>

# Q & A

<img width="1200" alt="image" src="https://github.com/Dev-Duke-Seo/rolling_team1/assets/127701092/6fc485b1-060d-4b84-ad74-ad289aec1558">
