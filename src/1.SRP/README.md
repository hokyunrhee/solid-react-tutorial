# 단일 책임 원칙(single responsibility principle)

다음과 같은 앱이 있습니다.

<p align="center">
  <img src="https://raw.githubusercontent.com/hokyunrhee/solid-react-tutorial/main/media/s_thinking-in-react_ui.png?raw=true" alt="react ui" width="300" />
</p>

어떤 것이 컴포넌트가 되어야 할지 어떻게 알 수 있을까요? 한 가지 테크닉은 단일 책임 원칙입니다. 이는 하나의 컴포넌트는 한 가지 역할을 하는게 이상적이라는 원칙입니다. 어떤 컴포넌트는 한가지 역할을 하기 때문에, 변경하려는 이유 또한 단 한가지를 갖습니다. 하나의 컴포넌트가 커지게 된다면 이는 보다 작은 하위 컴포넌트로 분리되어야 합니다.

이 앱에는 다섯 가지 구성 요소가 있습니다.

<p align="center">
  <img src="https://raw.githubusercontent.com/hokyunrhee/solid-react-tutorial/main/media/s_thinking-in-react_ui_outline.png?raw=true" alt="react ui" width="500" />
</p>

1. **FilterableProductTable(회색)**: 전체 화면을 포함합니다.
2. **SearchBar(파란색)**: 사용자 입력을 받습니다.
3. **ProductTable(라벤더)**: 사용자 입력에 따라 데이터 콜렉션을 필터링해서 보여줍니다.
4. **ProductCategoryRow(녹색)**: 각 카테고리 헤더를 보여줍니다.
5. **ProductRow(노란색)**: 각 제품의 행을 보여줍니다.

컴포넌트를 확인했습니다. 이를 계층 구조로 나열하면 아래와 같습니다.

- FilterableProductTable
  - SearchBar
  - ProductTable
    - ProductCategoryRow
    - ProductRow

이제 컴포넌트 계층구조가 만들어졌으니 앱을 구현해보겠습니다.

## How to take the tutorial

하나의 컴포넌트로 전체 앱을 구현해 두었습니다. `src/components/one-large-component.tsx` 열어 확인합니다. 이 컴포넌트를 5가지의 컴포넌트로 나누어 주세요.

테스트가 통과되면 성공한 것입니다.

## Thanks to

SRP 연습 문제는 [thinking-in-react](https://beta.reactjs.org/learn/thinking-in-react)를 바탕으로 만들어졌습니다.
