###### Front-End Develop SCHOOL

# Firebase

[Firebase](https://firebase.google.com/)는 2016년 Google I/O에서 발표한 기술 중
가장 주목 받는 기술로 BaaS(Back-End as a Service)로, 웹/모바일 앱 개발/운영에 필요한
모든 기능을 제공하고 있어 Front-End만 집중하면 되게 만들어 주는 서비스입니다.

### 개발/운영에 필요한 기능

- 인증 (Authentification)
- 실시간 데이터베이스 (Realtime Database)
- 호스팅 (Hosting)

> [Firebase의 모든 기능 살펴보기](https://firebase.google.com/features/)

#### Firebase 이전, 서비스 아키텍쳐

서버 구성(Architecture) 설계, 보안, 인증, DB 설계, API 설계 등
A-Z 까지 서버의 모든 설계/기능 구현을 수행합니다.

```
       ⬈ 프론트엔드 개발 ⬊
기획/설계               테스트/디버그/릴리즈
       ⬊ 서버 구성/개발 ⬈
```

#### Firebase 이후, 서비스 아키텍쳐

Firebase가 서버 개발에 필요한 것을 모두 제공함에 따라
Front-End 개발에만 집중하면 됩니다.

```
       ⬈ 프론트엔드 개발 ⬊
기획/설계               테스트/디버그/릴리즈
       ⬊   Firebase   ⬈
```

#### SPA(Single Page Application) + Firebase 앱 제작

Back-End 개발 단 구성은 Firebase가 수행해줌에 따라 우리는 Front-End 개발에만 집중하면서 멋진 애플리케이션을 개발해봅니다.

---

### 1. Firebase 개발 환경 설정

#### 1.1 계정 생성/로그인

[Firebase](https://firebase.google.com/) 로그인 (Google 계정 활용)

#### 1.2 새 프로젝트 만들기

콘솔로 이동 후, __새 프로젝트 만들기__ (프로젝트 이름/국가 선택)

#### 1.3 인증 설정

1. Authentification 선택 ➡ 로그인 방법 설정
2. 로그인 제공업체 리스트에서 로그인 방법을 제공할 업체를 선택 확성화 (Facebook, Google 등)

#### 1.4 Database 설정

실시간 클라우드 데이터 저장/동기화 되며, JSON으로 데이터 관리

- __데이터__ : 데이터가 저장 내역을 실시간 관리
- __규칙__ : 데이터에 읽기/쓰기 권한 설정
- __백업__ : 데이터 백업
- __사용량__ : 데이터 사용량 확인

---

### 2. 로컬 개발환경 설정

#### 2.1 Node.js 설치

[NVM을 활용한 Node.js 설치](NVM.md)는 이미 수행했으므로 생략합니다.


#### 2.2 Firebase 도구 설치

```sh
$ npm i -g firebase-tools
```

#### 2.3 Firebase 로그인

```sh
# Firebase 로그인 실행 명령어 입력
$ firebase login

# Firebase에 익명의 CLI 사용 정보를 제공하는데 동의하는지 질문에 답변
? Allow Firebase to collect anonymous CLI usage information? (Y/n)

# yes 라고 응답한 경우, 로그인 설정 화면으로 이동 후 인증 대기
Visit this URL on any device to log in:
https://accounts.google.com/o/oauth2/auth?client_id=...

Waiting for authentication...

# 로그인 인증 성공 후, 뜨는 메시지
✔  Success! Logged in as yamoog@gmail.com
```

"Firebase CLI에서 다음을 요청합니다." 화면이 뜨면,
이미 Google 계정으로 로그인되어 있어 허용 버튼을 누르면 됩니다.
허용이 확인 되면 다음과 같은 메시지 화면이 보여집니다.

    Woohoo!

    Firebase CLI Login Successful

    You are logged in to the Firebase Command-Line interface.
    You can immediately close this window and continue using the CLI.

로그아웃 하고자 한다면 다음 명령어를 실행합니다.

```sh
$ firebase logout
```

Firebase CLI에 대한 자세한 사용법은 다음 링크에서 확인합니다.

> [Firebase CLI 도움말 보기](https://firebase.google.com/docs/cli/?hl=ko)


#### 2.4 Firebase 프로젝트 목록

관리 중인 Firebase 프로젝트 목록을 확인하려면 아래 명령을 콘솔에 입력합니다.

```sh
$ firebase list

┌──────────┬───────────────────────┬─────────────┐
│ Name     │ Project ID / Instance │ Permissions │
├──────────┼───────────────────────┼─────────────┤
│ vue-http │ vue-http-d4585        │ Owner       │
└──────────┴───────────────────────┴─────────────┘
```

#### 2.5 Firebase 프로젝트 초기화

```sh
# 1. 파이어베이스 초기화
$ firebase init

🔥🔥🔥🔥🔥🔥🔥🔥 🔥🔥🔥🔥 🔥🔥🔥🔥🔥🔥🔥🔥  🔥🔥🔥🔥🔥🔥🔥🔥 🔥🔥🔥🔥🔥🔥🔥🔥     🔥🔥🔥     🔥🔥🔥🔥🔥🔥  🔥🔥🔥🔥🔥🔥🔥🔥
🔥🔥        🔥🔥  🔥🔥     🔥🔥 🔥🔥       🔥🔥     🔥🔥  🔥🔥   🔥🔥  🔥🔥       🔥🔥
🔥🔥🔥🔥🔥🔥    🔥🔥  🔥🔥🔥🔥🔥🔥🔥🔥  🔥🔥🔥🔥🔥🔥   🔥🔥🔥🔥🔥🔥🔥🔥  🔥🔥🔥🔥🔥🔥🔥🔥🔥  🔥🔥🔥🔥🔥🔥  🔥🔥🔥🔥🔥🔥
🔥🔥        🔥🔥  🔥🔥    🔥🔥  🔥🔥       🔥🔥     🔥🔥 🔥🔥     🔥🔥       🔥🔥 🔥🔥
🔥🔥       🔥🔥🔥🔥 🔥🔥     🔥🔥 🔥🔥🔥🔥🔥🔥🔥🔥 🔥🔥🔥🔥🔥🔥🔥🔥  🔥🔥     🔥🔥  🔥🔥🔥🔥🔥🔥  🔥🔥🔥🔥🔥🔥🔥🔥

You're about to initialize a Firebase project in this directory:

  /Users/yamoo9/Desktop/{프로젝트_디렉토리}

# 2. 현재 디렉토리에 Firebase CLI 기능 중 어떤 설정을 수행할 것인지 질문
? What Firebase CLI features do you want to setup for this folder? (Press <sp
ace> to select)

# 데이터베이스, 함수, 호스팅 모두 선택이 기본 값
# 사용하고 싶지 않은 기능의 경우, 상/하 화살표로 이동 후 스페이스 키로 활성/비활성 설정
❯ ◉ Database: Deploy Firebase Realtime Database Rules
  ◉ Functions: Configure and deploy Cloud Functions
  ◉ Hosting: Configure and deploy Firebase Hosting sites


# 3. 프로젝트 설정
=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

# 기본 프로젝트로 설정을 원하는 Firebase 프로젝트 선택
# 이미 만들어 둔 프로젝트를 선택하고자 할 경우 상/화 화살표로 이동하여 선택
? What Firebase project do you want to associate as default?
  [don't setup a default project]
❯ vue-http (vue-http-d4585)
  [create a new project]


# 4. 데이터베이스 설정
=== Database Setup

Firebase Realtime Database Rules allow you to define how your data should be
structured and when your data can be read from and written to.

# 데이터베이스 규칙으로 사용할 파일 이름 설정
# 기본 값인 database.rules.json 으로 사용
? What file should be used for Database Rules? (database.rules.json)


# 5. 함수 설정
# 기본 값으로 선택하여 수행
=== Functions Setup

A functions directory will be created in your project with a Node.js
package pre-configured. Functions can be deployed with firebase deploy.


# 6. 호스팅 설정
# 기본 값으로 선택하여 수행
=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.


# 초기화 완료 메시지 출력
✔  Firebase initialization complete!
```

#### 2.6 Firebase 서버 실행

```sh
$ firebase serve

Starting Firebase development server...

Project Directory: /Users/yamoo9/Desktop/{프로젝트_디렉토리}
Public Directory: public

Server listening at: http://localhost:5000
```

---

### Firebase 애플리케이션 구성

#### 3.1 Firebase 설정 스크립트

[Firebase 콘솔](http://console.firebase.google.com)으로 이동하여 __웹 앱에 Firebase 추가__ 선택 후, 코드 복사

```html
<script src="https://www.gstatic.com/firebasejs/3.7.5/firebase.js"></script>
<script>
// Firebase 초기화 설정
var config = {
  apiKey            : "AIzaSyByVuY9xUOCnRF5zW-...",
  authDomain        : "{파이어베이스_프로젝트}.firebaseapp.com",
  databaseURL       : "https://{파이어베이스_프로젝트}.firebaseio.com",
  projectId         : "{파이어베이스_프로젝트}",
  storageBucket     : "{파이어베이스_프로젝트}.appspot.com",
  messagingSenderId : "31044..."
};

// config 객체를 사용하여 Firebase 초기화 앱 설정
firebase.initializeApp(config);
</script>
```

#### 3.2 애플리케이션 구현 흐름

1. 인증 뷰(Authentification View)
  - 성공: 성공 페이지 제공
  - 실패: 실패 페이지 제공
1. 애플리케이션 뷰 (Application View)
  - 애플리케이션 데이터 읽기 (GET)
  - 애플리케이션 데이터 쓰기 (POST)
  - 애플리케이션 데이터 수정 (PUT)
  - 애플리케이션 데이터 삭제 (DELETE)


#### 3.3 인증 팝업 띄우기

```js
// 인증(Authentification) 처리를 수행할 변수 선언
var auth;

// 인증 변수에 firebase.auth() 실행 결과 참조
auth = firebase.auth();

// firebase.auth.GoogleAuthProvider 객체 생성 후, authProvider 변수에 참조
var authProvider = new firebase.auth.GoogleAuthProvider();

// auth.signInWithPopup() 메서드에 authProvider 참조 객체 전달
auth.signInWithPopup(authProvider);
```

#### 3.4 인증 여부 확인

```js
auth.onAuthStateChanged(function(user){
  if (user) {
    // 인증 성공
    console.log('Login Successed:', user);
  } else {
    // 인증 실패
  }
});
```

#### 3.5 로그인 인증 여부 기억하도록 코드 변경

`auth.signInWithPopup(authProvider)` 코드를 `else` 블록문으로 이동

```js
// 사용자 정보를 참조할 변수 선언
var user_info;

auth.onAuthStateChanged(function(user){
  // user 데이터가 있을 경우, 로그인 성공으로 감지.
  // 사용자에게 애플리케이션 뷰를 제공
  if (user) {
    // user_info 변수에 사용자 정보 데이터 참조
    user_info = user;
  }
  // user 데이터 값이 전달되지 않은 경우, 로그인 팝업을 띄움
  else {
    auth.signInWithPopup(authProvider);
  }
})
```

#### 3.6 데이터베이스 설정

```js
// 데이터베이스를 참조할 변수 선언
var database;

// database 변수에 데이터베이스 객체 참조
database = firebase.database();
```

#### 3.7 데이터 로드

`dataLoad`, `onChildAdded` 함수 작성

```js

auth.onAuthStateChanged('child_added', function(user){
  if (user) {
    user_info = user;
    dataLoad();
  }
});

function dataLoad() {
  var data_ref = database.ref('{데이터베이스_이름}/' + user_info.uid);
  data_ref.on('child_added', onChildAdded);
}

function onChildAdded(data) {
  var key        = data.key;
  var data_value = data.val();
  console.log('key:', key);
  console.log('data_value:', data_value);
}
```

---

## 참고자료

- [파이어베이스 클라우드 함수](https://developers-kr.googleblog.com/2017/04/introducing-cloud-functions-for-firebase.html)
