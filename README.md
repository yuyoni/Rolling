# Daily Routine
1) 작업 시작전에 pull/fetch? -> 질문
2) To-do List작성 (Git/Notion)
3) 문제가 발생시 반드시 Notion 트러블슈팅 작성
4) **문제가 있으면 앓지말고 반드시 팀과 공유**
5) 스크럼 기록순서: 인덕-유연-재명-선영-율민

# PR_Rules
1) dev 브랜치에 직접 merge 할 수 없습니다.
   => dev 하위에 새로운 브랜치를 생성하여 작업 후 PR을 요청합니다.
2) PR은 최소 3명 이상의 리뷰어의 승인 후 dev 브랜치로 머지 될 수 있습니다.
3) 마지막으로 리뷰한 리뷰어는(3번째) merge해 주어야 합니다.
3) 모든 구성원은 요청되는 PR에 대해 24시간 내에 리뷰합니다.
4) fetch/rebase후의 충돌은 로컬에서 해결후 commit하여 구성원들의 리뷰를 받습니다.

# Coding Naming Guide
1. Component: PascalCase
2. Variable: camelCase
3. Function: camelCase
4. File/Folder: kebab-case
5. Class: PascalCase
6. 변수와, 함수의 이름은 가급적 약자를 사용하지 않습니다.
7. Container/ Wrapper / box / item

Container는 주로 데이터를 관리하거나 상태를 갖는 부모 컴포넌트를 나타냅니다. 비즈니스 로직이나 상태 관리에 중점을 둔 컴포넌트일 수 있습니다. 예를 들면, Redux와 같은 상태 관리 라이브러리와 통합되어 전역 상태를 관리하는 역할을 하는 경우에 사용될 수 있습니다.

Wrapper는 주로 스타일이나 레이아웃을 담당하는 부분을 나타냅니다. 일반적으로 자식 컴포넌트를 감싸서 스타일을 적용하거나 레이아웃을 제어하는 역할을 합니다.

Box는 주로 레이아웃을 구성하는 데 사용됩니다. 스타일을 포함하면서도 비즈니스 로직이나 상태 관리에 직접적으로 관여하지 않는 레이아웃 구성을 위한 컴포넌트입니다.

Item은 목록이나 그리드와 같은 레이아웃에서 각 항목을 나타냅니다. 자식 컴포넌트의 각 인스턴스에 해당할 수 있습니다.

# Service Naming Guide
1. 롤링페이퍼: paper
2. 롤링페이퍼 내에 메세지: card
3. 롤링페이퍼 주인 : recipient
4. 메시지 보내는 사람: sender
