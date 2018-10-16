# 빅데이터 아카데미 16기 1조

Local 개발환경

 - OS : OSX
 - JDK : oracle 1.8
 - IDE : Netbean 8.2
 - npm : 6.4.1
 - Node : v10.11.0
 - express : 4.16.0
 
사용된 기술
 - Bootstrap (https://startbootstrap.com/template-categories/all/)
 - D3.js
 - 네이버 지도
 
# 개발환경 설정

#1. Netbean 환경설정
 - NodeJS Plugin File Download
   - URL : http://plugins.netbeans.org/plugin/36653/nodejs
 - Netbean 상단메뉴 > Tools > Plugins
   - Add Plugins 버튼 클릭후 NodeJS Plugin File 열기
 - NodeJS Plugin 설치
 - Netbean 환경설정에서 npm, node, express 경로 설정

#2. Git Clone [프로젝트 다운로드]
 - Netbean 상단메뉴 >Team > Git > Clone
 - URL 입력
   - https://github.com/leeyonghe/bigdata_team.git
 - 다음 > 다음 > 완료 클릭
 
#3. 프로젝트 생성 완료
 ![screenshot_20171221-151714](https://github.com/leeyonghe/bigdata_team/blob/master/ScreenShot/screenshot.png)
 
#4. 브라우저 실행
 - http://localhost:3000
 
# 이슈
 - 소스 Check-Out 후 서버 실행시 에러가 발생할 경우
   - node_modules 폴더 및 파일 삭제
   - npm install 실행
