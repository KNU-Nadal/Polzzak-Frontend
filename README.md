# 🐸 폴짝: 환경을 보호하는 산뜻한 움직임
## 서비스 요약
**폴짝** - 플로깅 커뮤니티 형성 및 상권(축제) 활성화 연계 환경 개선 서비스

## 주제 구분 
S타입 대구 시내의 환경 문제를 해결하고 지속가능한 발전을 지원하는 서비스 

## 📱 배포 링크
[http://polzzak.mojan.site](http://polzzak.mojan.site)

## 🌲 나무 타기의 달인
|<img src="https://avatars.githubusercontent.com/u/174276728?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/130034324?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/71973291?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/172799476?v=4" width="150" height="150"/>|
|:-:|:-:|:-:|:-:|
|이동윤<br/>[@heydylee](https://github.com/heydylee)|전창우<br/>[@JEONW00](https://github.com/JEONW00)|심준성<br/>[@MOJAN3543](https://github.com/MOJAN3543)|윤강훈<br/>[@YoonGangHoon](https://github.com/YoonGangHoon)|

## 시연 영상
(필수) Youtube 링크
(선택) Github Repository 페이지에서 바로 볼 수 있도록 넣어주셔도 좋습니다.


## 💬 서비스 소개
### 🔧서비스 개요
이 서비스는 플로깅 커뮤니티를 형성해 플로깅의 접근성을 높이고, 지속적인 이벤트 개최 및 지원으로 플로깅 문화를 활성화합니다. 사용자는 플로깅 팀을 등록하거나 참여할 수 있으며, 공식 행사 정보와 플로깅을 후원하는 상권 정보, 다양한 플로깅 루트 후기를 확인할 수 있습니다.

### 타서비스와의 차별점
1. **플로깅 커뮤니티 활성화** : 사용자가 직접 플로깅 루트를 추천하고, 후기를 작성하는 기능을 통해 플로거들 간의 소통과 활동을 촉진합니다.
2. **행사 연계**: 다양한 축제 및 행사에 플로깅을 접목시켜, 대구 시내에서 발생하는 환경 문제(각종 행사로 발생하는 환경 문제)를 효과적으로 해결할 수 있습니다.
3. **상권 및 축제 활성화** : 플로깅을 지역 상권과 축제에 연계하여, 플로거들이 해당 지역을 방문하도록 유도함으로써 상권과 축제 활성화를 도모합니다.
4. **플로깅에 주력화** : 1365와 다르게 플로깅에 주력화 하여 플로깅 관련 정보를 더욱 간편하게 접근할 수 있다.
5. **플로깅 인식 개선 및 문화 확산** : 플로깅 활동을 통해 플로깅 문화를 널리 퍼트려 지속 가능한 환경 보호의 중요성을 계몽할 수 있습니다. 이를 통해 더 많은 사람들이 플로깅에 참여하고, 환경 보호에 대한 인식을 고취시킵니다.


### 구현 내용 및 결과물
폴짝은 다른 사용자들과 플로깅이라는 주제 하에 자유롭게 상호작용하고, 관련 정보를 얻으며 함께 할 수 있는 플랫폼을 기획했습니다. 해당 플랫폼에서는 기존에 생소했던 플로깅이라는 활동을 팀 활동 및 플로깅 이벤트 조회 서비스를 이용하여 전문적이고 효과적으로 사용할 수 있는 서비스를 제공합니다.
![image](https://github.com/user-attachments/assets/15dfa232-3431-499c-a9aa-c9004d94d028)  
![image](https://github.com/user-attachments/assets/1a10d4c5-9118-4a26-a7d1-762c570f4a7d)


### 구현 방식
프론트 : React(JavaScript)와 Vite, Nginx와 Docker를 이용하여 배포 환경을 구성했고, 해당 배포 환경을 우분투 라즈베리파이 서버에 CD 파이프 라인을 github Action으로 구성하여 쉽고 효과적인 개발 환경을 조성했습니다. 또한 Css-In-JS인 styled-component를 이용하여 더 빠른 개발을 진행 할 수 있었습니다.
벡 : Flask를 이용하여 api 서버를 만들었고,flask-restx를 통해서 swagger와 연동하여 api를 자동으로 명세할 수 있도록 만들었습니다. 자동 명세 과정에서 Namespace를 활용하여 각각의 엔드 포인트마다 테스트를 해 볼 수 있게 제작하였습니다.

### 📚 기술 스택
**이미지 서버** 
<br/>
기술스택
<br/>
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"/> <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=Flask&logoColor=white"/> <img src="https://img.shields.io/badge/githubactions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white"/> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"/> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=nginx&logoColor=white"/>
<br/>
버전
<br/>
<img src="https://img.shields.io/badge/Flask-2.5.1-blue"/>


**벡엔드 서버**<br/>
기술스택 <br/>
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"/> <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=Flask&logoColor=white"/> <img src="https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white"/> <img src="https://img.shields.io/badge/githubactions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white"/> <img src="https://img.shields.io/badge/sqlite-003B57?style=for-the-badge&logo=sqlite&logoColor=white"/> <img src="https://img.shields.io/badge/sqlalchemy-D71F00?style=for-the-badge&logo=sqlalchemy&logoColor=white"/> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"/><br/>
버전<br/>
<img src="https://img.shields.io/badge/Flask-2.3.2-blue"/> <img src="https://img.shields.io/badge/flask--restx-1.3.0-blue"/><img src="https://img.shields.io/badge/Flask--Migrate-4.0.7-blue"/><img src="https://img.shields.io/badge/flask__cors-5.0.0-blue"/><img src="https://img.shields.io/badge/Flask--SQLAlchemy-3.1.1-white"/><img src="https://img.shields.io/badge/SQLAlchemy-2.0.31-white"/><img src="https://img.shields.io/badge/requests-2.32.3-yellow"/><img src="https://img.shields.io/badge/Werkzeug-3.0.1-yellow"/>

**프론트엔드 서버**<br/>
기술스택<br/>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"/> <img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white"/> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=nginx&logoColor=white"/> <img src="https://img.shields.io/badge/githubactions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white"/>
<br/>
버전<br/>
<img src="https://img.shields.io/badge/axios-1.7.7-orange"/><img src="https://img.shields.io/badge/react-18.3.1-blue"/><img src="https://img.shields.io/badge/react--dom-18.3.1-blue"/><img src="https://img.shields.io/badge/react--icons-5.3.0-blue"/><img src="https://img.shields.io/badge/react--router--dom-6.26.2-blue"/><img src="https://img.shields.io/badge/styled--components-6.1.13-pink"/><img src="https://img.shields.io/badge/vite-6.1.13-violet"/>



## 향후 개선 혹은 발전 방안
1. **플로깅 마켓**: 플로깅에 필요한 도구와 용품을 판매하여 자체적인 수익 모델을 구축할 수 있습니다.
2. **공공기관 플로깅 행사 운영**: 공공기관에서 주최하는 플로깅 행사를 플랫폼을 통해 통합 관리함으로써 사회적 기업으로 성장 가능하며, 정부로부터 지원을 받을 수 있습니다.
3. **봉사 시간 인증**: 플로깅 참여자들에게 인증 시스템을 도입하여, 봉사 시간을 인정받을 수 있게 하고, 이를 통해 더 많은 참여를 유도합니다.
4. **활동 포인트 적립**: 플로깅 활동에 따른 포인트를 적립하여, 마켓에서 사용할 수 있도록 해 사용자들의 지속적인 플로깅 참여를 장려합니다.
5. **환경 관련 데이터 수집** : 플로깅 데이터를 통해 데이터 분석을 함으로써 다양한 인사이트를 얻을 수 있습니다. 예를 들어, 해당 지역에 플로깅 데이터가 많을 경우, 두 가지 가능성이 있습니다:
 - 쓰레기가 많은 경우: 해당 지역의 환경 오염 문제가 심각하다는 신호일 수 있으며, 이를 바탕으로 공공기관이 환경 정책을 수립하고 청소 및 관리 대책을 강화할 수 있습니다. 더불어, 시민 참여를 통한 정화 활동을 지속적으로 장려할 수 있습니다.
 - 경치가 좋은 경우: 해당 지역이 자연 경관이 뛰어나 플로깅 활동의 인기 장소라면, 공원이나 조경 단지를 조성하여 환경 보호와 관광 자원으로 활용할 수 있습니다. 이를 통해 환경을 보호하면서도 자연 친화적인 공간을 확대하고, 지역 주민 및 관광객을 유치할 수 있습니다.

## Ohter Repository
[**백엔드 레포지토리**](https://github.com/KNU-Nadal/Polzzak-Backend)  
[**이미지 서버 레포지토리**](https://github.com/KNU-Nadal/Polzzak_Image)
