## ✨ 소개

안녕하세요, 지원자 장다연입니다.<br/>

과제 구현 전반에서 완성도와 코드의 가독성을 신경 쓰며 개발했습니다.<br/>

고민한 내용과 선택의 근거는 아래 Notion 문서에 정리해두었습니다.<br/>

감사합니다.

## ⚙️ 프로젝트 세팅 방법

리포지토리를 클론하고 클론한 디렉토리를 실행합니다.

```
git clone https://github.com/jangdayeon/FE_TASK.git
pnpm i
pnpm dev
```

## 📁 폴더 구조

```
task/
├── components/       # 컴포넌트
│   ├── atoms/
│   ├── molecules/
│   └── types.ts      # 컴포넌트에 대한 타입 정의
├── graphql/          # GraphQL 쿼리, 스키마, 리졸버
├── lib/              # Apollo Client 정의
├── pages/
│   ├── api/          # GraphQL 핸들러
│   ├── _app.tsx
│   └── index.tsx
├── public/           # 이미지, 폰트 파일
│   ├── fonts/
│   └── images/
├── styles/           # 페이지에 대한 module css 파일
├── utiles/           # 복잡하고 재사용 가능한 함수 분리
└── README.md

```

## 💡 기술 스택

- **Next.js**: 12.3.4
- **React**: 17.0.2
- **@apollo/client**: 3.13.8
- **@apollo/server**: 4.12.1
- **GraphQL**: 16.11.0

## 📌 Notion 기록

프로젝트 구현 과정 및 이슈 해결 과정은 아래 노션 문서에 정리했습니다. <br/>
👉 [📖 Notion 문서 바로가기](https://www.notion.so/FE-20541ba258388095b262d7293fb45a31?source=copy_link)
