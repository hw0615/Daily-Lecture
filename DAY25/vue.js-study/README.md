# Vue.js 학습을 위한 프로젝트 템플릿

프로젝트에 사용되는 Pug, Sass, ECMAScript 2015(ES6), 이미지 압축, 라이브 서버 구동을 자동으로 처리.

## 설치

```sh
# 압축을 푼 디렉토리로 이동
$ cd vue-project-template

# NPM 개발 모듈 설치 (package.json 참조)
$ npm install
```

## NPM 스크립트 명령어

프로젝트 초기화 및 서버 실행

```sh
# 이전 진행 개발 컴파일 자료 지움
# 개발 의존 라이브러리 복사/이동
# 이미지 최적화 복사/이동
# pug, sass, babel 구동
# 라이브 서버 구동
$ npm start
```

프로젝트 재실행 (서버 구동)

```sh
# pug, sass, babel 구동
# 라이브 서버 구동
$ npm run dev
```

기타 명령어

```sh
# 라이브 서버 구동
$ npm run serve

# Pug 컴파일
$ npm run pug

# Sass 컴파일
$ npm run sass

# Sass 워치 + 소스맵
$ npm run sass-watch

# Babel 워치 + 소스맵
$ npm run babel

# 이미지 포멧 압축 복사/이동
$ npm run imagemin

# jQuery 라이브러리 복사/이동
$ npm run jquery

# bulma 프레임워크 복사/이동
$ npm run bulma

# font awesome 라이브러리 복사/이동
$ npm run font-awesome

# ESLint 규칙 생성
$ npm run eslint-init

# ESLint 실행(1회)
$ npm run eslint

# ESLint 워치
$ npm run eslint-watch

# 프로젝트 컴파일 데이터 제거
$ npm run clean
```

## 모듈

#### 의존 모듈

- [jQuery](https://jquery.com/)
- [Font Awesome](http://fontawesome.io/)
- [Bulma](http://bulma.io/)

#### 개발 의존 모듈

- pug-cli
- node-sass
- babel-cli
- babel-preset-env
- imagemin-cli
- eslint
- eslint-watch
- live-server
- npm-run-all
