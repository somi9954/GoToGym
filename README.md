# 📚 프로젝트 소개
## 1. 개요
- 프로젝트명 : GoToGym
- 개발 기간 : 2023.11.15 ~ 2023.11.28
- 개발 인원 : 4명

## 2. ⚙️기술 스택 
### ✔️Frond-end
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/Css-1572B6?style=for-the-badge&logo=Css&logoColor=white"><img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"><img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/thymeleaf-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white">

### ✔️Back-end
 <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"><img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=green"><img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=yellow"><img src="https://img.shields.io/badge/oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white"> 

## 🦹‍ Team
|김대영|목진혁|조소미|
|:---:|:---:|:---:|
|[daeyounggg](https://github.com/daeyounggg)|[MJinHyuk](https://github.com/MJinHyuk)|[somi9954](https://github.com/somi9954)|
|![](https://avatars.githubusercontent.com/u/137499608?v=4)|![](https://avatars.githubusercontent.com/u/147026593?v=4)|![](https://avatars.githubusercontent.com/u/137499604?v=4)|


# 📋 기능 명세서
## 1. 관리자 페이지
### 기본 설정

### 회원관리
- 회원 전체 조회
- 아이디 찾기
- 비밀번호 찾기

![image](https://github.com/daeyounggg/GoToGym/assets/137499604/f16a5ab9-73e9-4be7-b0a9-9c6ce0361ce1)


## 2. 회원
### 로그인
- 로그인
### 회원가입
- 회원가입 시 암호화(hashing)화 되어 DB에 저장.
- Id(email) : email 형식의 아이디. 필수 항목.
- Pw : 최대 길이 40. 필수 항목.
- 회원명 : 최대 길이 40. 필수 항목.
- 휴대전화번호 : 최대 길이 11. 필수 항목 정규표현식 사용.
- 주소 : 최대 길이 100. 필수 항목
- 나머지 주소

### 아이디(email) 찾기
- 아이디(email), 회원명으로 조회
- 성공시 정보 출력 후 로그인 페이지로 이동.
- 실패시 재입력 요구.

### 비밀번호 찾기
- 아이디(email), 회원명으로 조회
- 성공시 정보 출력 후 로그인 페이지로 이동.
- 실패시 재입력 요구.

### 마이페이지
- 개인정보 수정, 회원탈퇴

## 3. 게시글
### 게시판 관리
- 게시판 목록
- 게시판 등록/수정
- 게시글 관리
![image](https://github.com/daeyounggg/GoToGym/assets/137499604/297a9c70-e791-4ed2-a031-e75f7cb4ce2c)
![image](https://github.com/daeyounggg/GoToGym/assets/137499604/3b42801f-efb1-4065-882f-9337f72e3e0e)


## 4. 다이어리
### 캘린더
- 캘린더 목록
- 등록/수정
- 식단작성을 통한 칼로리 조절
- 회원권한, 관리
  ![image](https://github.com/daeyounggg/GoToGym/assets/137499604/ce421055-6c35-4911-a890-2165a2d4ee54)
 ![image](https://github.com/daeyounggg/GoToGym/assets/137499604/3b238dab-c7e4-43f9-8424-0da14a9c46c3)


# 💡 담당 파트
- 관리자, 회원 : 목진혁
- 게시판 관리 :  조소미
- 다이어리 : 김대영
