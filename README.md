# 🔥 Logmin Project 🔥

## ✨ 프로젝트 소개

다양한 인증 방식을 한눈에 비교하고 경험할 수 있는 통합 로그인 데모 프로젝트입니다.  
사용자 인증에 필요한 주요 기술과 흐름을 React 기반 UI로 구현하여 실제 서비스 설계에 도움을 줄 수 있도록 구성되었습니다.

![image](https://github.com/user-attachments/assets/6e138707-7faa-41ba-8fdd-7f24dda1153d)
![image](https://github.com/user-attachments/assets/7350effc-a147-4560-b67c-c06cd60082c0)
![image](https://github.com/user-attachments/assets/a43179d1-a9eb-4c32-ab43-d6459b46d30f)

---

## 🛠️ 기술 스택

- **Frontend:** React + TypeScript + Vite
- **Routing:** React Router v6
- **패키지 관리:** npm
- **코드 스타일:** ESLint, Prettier

---

## 🌟 주요 기능

| 인증 방식         | 설명                                                                 |
|------------------|----------------------------------------------------------------------|
| **세션 로그인**      | 전통적인 방식의 세션 기반 로그인. 서버에서 세션을 생성하고 관리.                |
| **JWT 로그인**      | 토큰 기반 인증. 확장성과 클라이언트 중심 보안 유지에 적합.                   |
| **소셜 로그인**     | Google, Kakao, GitHub, Naver 등 외부 서비스와 연동한 OAuth 로그인.       |
| **Passwordless** | 비밀번호 없는 인증 방식. Magic Link, OTP, 생체 인증 기반 UX 개선에 효과적. |

---

## 🚀 시작 방법

```bash
# 1. 레포지토리 클론
git clone https://github.com/your-username/login-project.git

# 2. 패키지 설치
npm install

# 3. 개발 서버 실행
npm start
```

---

## 📂 폴더 구조 요약

```
logmin_client/
├── public/               # 정적 파일 (아이콘, HTML)
├── src/
│   ├── api/              # axios 및 API 모듈
│   ├── components/       # 로그인 컴포넌트 모듈별 디렉토리
│   ├── contexts/         # 글로벌 상태 관리
│   ├── pages/            # 주요 페이지 (홈, 옵션, 에러)
│   ├── routes/           # 라우터 설정
│   ├── styles/           # 전역 스타일
│   └── utils/            # 유틸 함수
```

---

## 📌 참고 자료

- (추가 예정)

---

## 👨‍💻 기여자

- Roh JunSeok

---

## 📝 라이선스

- MIT License
