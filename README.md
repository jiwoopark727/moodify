# 🎵 Moodify – 감정 기반 음악 추천 플랫폼

> **2025.06 ~ 2025.07 (개인 프로젝트)**  
> 날씨와 감정을 기반으로 음악 키워드를 생성하여 Spotify 및 YouTube 음악을 추천하는 감성 큐레이션 웹 앱입니다.

## 📝 프로젝트 개요

Moodify는 사용자의 현재 **날씨**와 **감정 상태**를 기반으로 음악 키워드를 생성하고, 이를 바탕으로 **Spotify 음악 리스트** 및 **YouTube 영상**을 추천하는 감성 큐레이션 플랫폼입니다. 음악을 들으며 느낀 감정을 **메모**로 남기고 **타임라인**에 저장하는 기능도 제공합니다.

---

## ⚙️ 핵심 기능

### ✅ 위치 기반 날씨 감지

- 브라우저 Geolocation API → OpenWeather API를 통해 현재 위치의 날씨 자동 조회

### ✅ 감정 선택 및 키워드 생성

- 이모지 기반 감정 선택 UI
- Zustand 상태 관리 → 감정 + 날씨 조합 기반 키워드 생성

### ✅ 음악 추천

- Spotify API: 키워드로 음악 검색 후 리스트 출력
- YouTube API: preview_url이 없는 경우 자동 대체 영상 임베드

### ✅ 타임라인 기능

- 감정, 날씨, 날짜, 시간, 메모를 로컬스토리지 기반으로 저장
- 같은 날짜는 기존 기록을 덮어쓰기 (중복 방지 로직 적용)
- 메모 기능 추가: 감성 기록 남기기

### ✅ 모바일 UI 최적화

- 450px 기준 카드형 반응형 디자인
- Tailwind CSS 활용한 직관적인 레이아웃

### ✅ PWA 지원

- 모바일 및 데스크탑 브라우저에서 앱처럼 설치 가능
- 홈 화면 추가 및 Splash 화면 적용
- next-pwa를 사용해 서비스 워커 설정, 캐시 전략 최적화
- 오프라인 환경에서도 기본 UI 자산 접근 가능

---

## 💻 기술 스택

| 역할      | 기술                                                                  |
| --------- | --------------------------------------------------------------------- |
| Frontend  | **React 19**, **Next.js 15 (App Router)**, **TypeScript**             |
| Styling   | **Tailwind CSS**, **Emotion**                                         |
| 상태 관리 | **Zustand** (+ persist middleware)                                    |
| API 활용  | **Spotify API**, **YouTube Data API**, **OpenWeather API**            |
| 배포      | **Vercel**                                                            |
| PWA       | **next-pwa** 기반의 Progressive Web App 기능 지원 (설치형 웹 앱 구현) |

---

## 🚀 주요 문제 해결 경험

- **Hydration Error**  
  Next.js 15 + React 19 환경에서 클라이언트 전용 컴포넌트 분리로 해결

- **Recoil → Zustand 마이그레이션**  
  Geolocation과 API 통신 시점 불일치 해결을 위해 상태 관리 도구 전환

- **API Route 설계**  
  클라이언트에서 직접 접근하지 않고 Next.js API Route를 통해 Spotify, YouTube 통신

- **타임라인 저장 최적화**  
  같은 날짜에 여러 감정 기록 방지 → 날짜 기반으로 기존 데이터 덮어쓰기

---

## 📌 배운 점 및 성과

- 상태 관리 흐름, API 인증 처리, UI 구성 등 프론트엔드 실무 경험 강화
- Zustand + LocalStorage를 활용한 사용자 감정 기록 기능 구현
- 사용자의 맥락을 기반으로 한 음악 추천 로직 설계 및 적용
- 음악 감상 → 감정 기록 → 타임라인 저장까지의 자연스러운 UX 구성

---

<br/>

## 🎬 데모 배포 사이트 및 스크린샷

🚀 <a href="https://pjw-moodify.vercel.app" target="_blank" rel="noopener noreferrer"><strong>[Moodify 배포 사이트]</strong></a>

<table>
  <tr>
    <td align="center">
      <p><홈(초기) 화면></p>
      <img src="https://raw.githubusercontent.com/jiwoopark727/Moodify/main/public/assets/images/moodify_home.png" height="500" alt="홈 화면">
    </td>
    <td align="center">
      <p><플레이리스트(생성 완료 시) 완료 화면></p>
      <img src="https://raw.githubusercontent.com/jiwoopark727/Moodify/main/public/assets/images/moodify_playlist.png" height="500" alt="플레이리스트 화면">
    </td>
    <td align="center">
      <p><트랙(음악 선택 시) 화면></p>
      <img src="https://raw.githubusercontent.com/jiwoopark727/Moodify/main/public/assets/images/moodify_track.png" height="500" alt="트랙 화면">
    </td>
  </tr>
  <tr>
    <td align="center">
      <p><트랙(메모 입력) 화면></p>
      <img src="https://raw.githubusercontent.com/jiwoopark727/Moodify/main/public/assets/images/moodify_memo.png" height="500" alt="트랙_메모 화면">
    </td>
    <td align="center">
      <p>타임라인 화면</p>
      <img src="https://raw.githubusercontent.com/jiwoopark727/Moodify/main/public/assets/images/moodify_timeline.png" height="500" alt="타임라인 화면">
    </td>
  </tr>
</table>

<br/>

## 🏗 폴더 구조

````plaintext
📦 app/
├── home/
│   ├── layout.tsx
│   └── page.tsx
├── playlist/
│   ├── layout.tsx
│   ├── page.tsx
│   └── [track]/
│       ├── layout.tsx
│       └── page.tsx
├── timeline/
│   ├── layout.tsx
│   └── page.tsx
├── api/
│   ├── spotify/
│   │   └── search/
│   │       └── route.ts
│   └── youtube/
│       └── search/
│           └── route.ts
├── components/
│   ├── EmotionSelector.tsx
│   ├── GenerateButton.tsx
│   ├── Header.tsx
│   ├── Playlist.tsx
│   └── ...
├── hooks/
│   ├── generateMusicKeyword.ts
│   ├── useFetchWeather.ts
│   └── ...
├── lib/
│   ├── fontawesome.ts
│   ├── spotify.ts
│   └── ...
├── stores/
│   ├── useEmotionStore.ts
│   ├── useGeolocationStore.ts
│   ├── useKeywordStore.ts
│   └── ...
├── types/
│   ├── spotify.ts
│   ├── youtube.ts
│   └── ...
├── layout.tsx
├── page.tsx



## 🔧 설치 및 실행 방법

```bash
# 레포지토리 클론
git clone [https://github.com/jiwoopark727/moodify.git](https://github.com/jiwoopark727/moodify.git)
cd moodify

# 패키지 설치
npm install

# 환경 변수 설정 (.env 파일 생성 후 환경 변수 추가)
(생략... 필요시 문의 메일 부탁드립니다)

# 개발 서버 실행
npm run dev
````

<br/>

## 📜 라이선스

본 프로젝트는 **MIT 라이선스**를 따릅니다.
