// 함수 두번째 시간
// 지난 장에서 설명 안했지만, 함수에 대해 꼭 알아야하는 개념들에 대해
// 알아보도록 하죠

// (다음)
console.log();
// 우린 console 을 만든적도, log() 를 만든적도 없는데 잘만 쓰고 있었다
// 왜? console은 JavaScript 에서 기본 제공하는 내장객체(빌트인 오브젝트)이기 때문
// 빌트인이라는 단어를 들어봤는지 모르겠는데,
// 아파트에서 많이쓰인다. 빌트인 가전이라는 뜻은 건설사에서 기본제공해주는 가전제품
// 냉장고, 가스렌지, 세탁기, 에어컨
// 따로 살 필요없이 그냥 쓰면 된다
// JavaScript 에서도 우리의 편의를 위해 제공되는 내장객체들이 있다.
// 대표적으로, 현재 웹페이지에 대한 정보를 담고있는 document 객체가 있다.
console.log(document);
// 로케이션, 오리진, 프로토콜, 호스트 등등. 사이트에 대한 정보들이 출력됨
// 원래 자바스크립트는 클릭, 색깔바꾸기, 스크롤내리기, 화면사이즈 조작, 입력 등,
// 사용자의 행동에 따라서 현재 페이지를 조작하기 위해 만들어졌다.
// 이런 여러가지 사용자행동들을 이벤트라고 하고, 
// 이벤트에 따라서 document 객체를 건드려서 페이지를 수정할 수 있다.
// 이를 DOM 조작이라고 한다. 
// 즉, 자바스크립트의 목적은 돔 조작이다. 
// 그러나 우리 코스에선 돔조작 내용을 생략할 것인데,
// 리액트에서 다른 방식을 사용해 돔 조작을 해볼 것이기 때문이다.
// props, state, ref . 나중에 다 배우게 될 것

// 지역변수, 전역변수
// 로컬 베리어블, 글로벌 베리어블

const a = 1, b = 2;

function showResult(a: number, b: number) {
    a = 3;
    b = 4;
    return [a, b];
}

const [resultA, resultB] = showResult(a, b);

console.log(`
    a: ${resultA}
    b: ${resultB}
`);

console.log(`
    a: ${a}
    b: ${b}
`);

// 여러개의 리턴값을 내보낼땐, 리턴값을 배열로 만들어서, 배열로 하나하나 주면 된다.
// 그러면 배열이 생기는 게 아니라, 나름의 타입을 가진 resultA, resultB 변수가 각각 생긴다.
// 질문. a와 b가 함수 showResult 에 들어가서 변경되었다.
// a와 b는 변경되었을까?
// 결과출력
// 첫번째로그는 resultA, resultB의 결과이며, 두번째 로그는 a, b의 결과이다.
// 보다시피, 함수 안에서 값을 변경해도 원래 값은 전혀 영향이 없다.
// 이것을 이해하려면, 함수 바깥에서 선언한 a, b와
// 함수 안에서 쓰는 a, b 가 서로 다른 a, b라고 생각해야 한다.
// ppt
// 함수 바깥에서 선언한 a, b를 전역변수, 글로벌 베리어블 이라고 하고,
// 함수 안에서 쓰인 a, b 를 지역변수, 로컬 베리어블이라고 한다.
// 함수로 변수가 들어가면, 그대로 들어가는것이 아니라 값이 복사되는 것이다.
// 복사된 이후부터, 함수 안에서만 쓰는 지역변수가 된다.
// 함수 안에서 지역변수를 바꾼다고해서 원래 전역변수였던 값이 바뀌진 않는다.
// 전역변수는 코드 어디에나 쓸 수 있어요
// 함수안에서 선언한 적이 없어도 쓸 수 있어요
//(실습)
// let c = 3; 여기선 c를 바꿀것이기때문에 const 가 아닌 let을 썼다.
// showResult안에서 c를 5로 변경하겠다.
// 함수 안에서 c를 선언한적없지만 사용가능. 
// 콘솔로그 다 주석처리한다음에
// c를 콘솔로그로 찍어내보자.
// 3에서 5로 바뀌었다. 전역변수이기때문에 함수 안에서 바꿔도 값이 바뀐것을 볼 수 있다.
// (ppt)
// 하지만, 배열과 객체는 예외다.
// 배열과 객체를 파라미터로 받아 변경하면
// 바깥에 있는 값도 바뀐다.
// (실습)
const menu = ['짜장면', '짬뽕', '탕수육'];

function showResult(menu: string[]) {
    menu[0] = '우동';
    return menu;
}

const result = showResult(menu);
console.log(result);
console.log(menu);
// 배열을 파라미터로 받을 땐, 타입하고 대괄호 괄호를 쳐줘야됨
// 결과
// 첫번째 로그는 showResult(menu) 의 리턴값을 받은 result 의 결과다.
// 두번째 로그는 원래 전역변수였던 menu의 결과다
// 둘이 내용이 일치하는걸 보내, 함수 안에서 바꿨는데도 값이 바뀌었다는걸 알 수 있다.
// 심지어, 함수 안에서 다른 임시변수를 선언해 복사하더라도 소용없다.
// 싹 다 지우고
const menu = ['짜장면', '짬뽕', '탕수육'];

function showResult(menu: string[]) {
    const tempMenu = menu;
    tempMenu[0] = '우동';
    return tempMenu;
}

const result = showResult(menu);
console.log(result);
console.log(menu);
// 임시라는 뜻을 가진 temporary 의 줄임말인 temp 를 menu앞에 붙인 새로운 변수를 만들어
// 복사했다. temp는 코딩할때 자주 쓰는 단어다.
// 결과를 보면,
// 우리는 tempMenu를 새로 만들어 복사했다고 생각했으나,
// 사실은 복사가 아니고 같은 변수를 가리키는 링크가 하나 더 생겼을 뿐이다.

// 싹 다 지우고, 이번엔 객체의 예를 보자.

interface Info {
    name: string,
    age: number
}

const info = {
    name: '조교행님',
    age: 28
};

function showResult(info: Info) {
    info.age = 18;
    return info;
}

const result = showResult(info);
console.log(result);
console.log(info);

// 인터페이스라는 새로운 개념이 나왔는데, 이것은 이 수업 맨 마지막인
// 인터페이스 장에서 다룰 것이다.
// 지금은 이 부분이 없으면 작동안한다는것만 알아두자.
// 결과
// 첫번째 로그는 showResult(info)의 return 값을 받은 result 의 결과다.
// 두번째 로그는 원래 전역변수였던 객체 info 의 결과다.
// 즉, 배열과 객체는 함수 안으로 끌고 와도 전역변수이므로,
// 함수 안에서 변경해도 바깥에 있는 값이 변경된다.
// 초보자가 이해하긴 굉장히 어려운 내용
// 여러분의 지식을 늘려주고싶어서 이런 내용을 알려주는건 아니다.
// 배열과 각체를 함수 안으로 끌과 와서 쓸땐 조심해서 써야된다는 것을 알려주고 싶었다.
// 이 개념을 모르면, 코딩하다가 비슷한 문제가 생겼을 때
// 왜 원하는 결과가 안 나왔는지 한참 고민하게 될 것.

// 지금까지 배운 것에서 알 수 있는 사실은 무엇일까?
// 코드에서 같은 이름으로 쓰였다 하더라도, 어디에 있느냐에 따라서
// 사실 완전히 다른 걸 의미하는 것일 수 있다는 것.
// 대문자 소문자 하나가 다르면 당연히 다른 걸 의미하고,
// 같은이름을 쓰더라도, 어디에 있느냐에 따라서 완전히 다른 것일수도 있다.

// 다음코드
// TypeScript 에선 선택사항으로, 리턴값의 타입지정 가능
function sayHello(name: string, age: number): string {
    return `안녕, ${name}. 나이는 ${age}세.`;
}

const a = sayHello('조교행님', 28);
const b = sayHello('은지', 16);
const c = sayHello('현수', 21);
const d = sayHello('지원', 14);
const e = sayHello('준수', 23);

console.log(`
    ${a}
    ${b}
    ${c}
    ${d}
    ${e}
`);

// 함수의 소괄호 뒤에, 콜론 찍고 타입 써주면 된다.
// 만약 string 이 아닌 다른 타입을 쓰면 무슨 일이 일어날까?
// 에러, type string is not assignable to type number
// string 타입은 number 타입에 assignable 아니다.
// 어싸인은 집어넣는다는 뜻이라고 했죠? able 이 붙으면 뭐뭐 할수 있는
// 즉, string 타입은 number 타입에 집어넣을 수 없다.
// 즉, number 타입만 리턴하겠다고 우리가 강제하는 것

// 다음코드
function sayHello() {
    console.log('안녕 조교행님');
}

sayHello();

// 파리미터와 리턴은 선택사항입니다.
// 지금 코드에 파라미터도 없고 리턴도 없음
// 아무것도 안 받고 안 줄땐 그냥 소괄호만 써주면 됨
// 그리고 리턴 없이 함수 안에서 콘솔로그로 출력시켜버림
// 결과를 볼까요?
// 짠

// 이것으로 함수의 기본 이론을 마치고,
// 사실 이번 장에서 설명한 내용들은 상당히 어려운 내용들이다.
// 전역변수 지역변수를 심도깊게 다루려고 전공 3학년때 따로 배우기도 한다.
// 그러나 지금 가르쳐준것들만 알고 있어도, 코딩하다 생기는 뜻밖의 문제를
// 상당수 해결할 수 있을 것이다.
// (ppt)
// 핵심정리:
// 지역변수: 함수 안에서 복사해 쓰는 변수. 함수 바깥에 영향을 미치지 않는다.
// 전역변수: 함수 바깥에서 선언한 변수. 함수 안에서 선언한 적이 없어도 함수 안에서 쓸 수 있다.
// 그러나, 객체와 배열은 함수 안으로 가져오더라도 전역변수이므로, 함수의 파라미터로 쓸 땐 매우 조심해야한다.
// 코드에서 같은 이름으로 쓰였더라도 사실은 완전히 다른 것을 의미할 수 있다. 
// TypeScript에선 선택사항으로 return 의 타입을 지정할 수 있다. 
// 경우에 따라선, parameter 또는 return 이 필요없는 함수를 만들 수도 있다.
