// 지금부턴, function 키워드가 아닌, 새로운 방식으로 함수를 만들어 볼 것
// (코드)
function sayHello(name: string, age: number) {
    return `안녕, ${name}. 나이는 ${age}세.`;
}

const a = sayHello('조교행님', 28);

console.log(a);
// 저번에 배웠던 sayHello 함수를 새로운 방식으로 변형해보겠다.
// 주석처리하고,

const sayHello = (name: string, age: number) => {
    return `안녕, ${name}. 나이는 ${age}세.`;
}

// 차이점을 비교해보자.
// 먼저, function 키워드가 없다.
// 함수를 변수 선언하듯 const로 선언했고, 이콜기호를 통해, 값을 집어 넣는다.
// 그래서 이콜 뒷부분을 블록지정해보면,
// 변수 선언한것이랑 똑같이 생긴것을 알 수 있다.
// 화살표가 생겼다.

// 그리고 더 짧게 줄일 수 있습니다.
// 리턴이 한 줄이기 때문에,
// 중괄호를 지우고,
// 리턴도 떼버릴 수 있다.
// 짧게 쓸 수 있죠

// 문법이 줄어들었다고 화살표함수를 쓰는 게 아닙니다.
// 아마 자바스크립트 배우면서 가장 중요한 순간일텐데,
// 주석으로 써주겠어요.
// (아래를 주석으로 붙여넣는다)
// JavaScript 에선, 
// 다른 메이져 언어들(C, C++, C#, Python, Java)과는 달리,
// 함수는 변수이고, 데이터이고, 타입이다.

// 함수가 변수이기때문에, 다른 함수의 파라미터로도 쓰이고, 리턴으로도 쓰입니다.
// 화살표 함수는, 자바스크립트의 정체성을 확실히 보여주는 문법입니다.
// 자바스크립트에선 그래서, 함수형 프로그래밍이라는 기법이 흔하게 사용됩니다.
// 함수형 프로그래밍을 설명하면 너무 길어지기도 하고
// 강의가 계속될수록 map 함수라던지, 리액트의 hook 이라던지를 써보면서
// 자연스럽게 익히게 될 것이므로 생략하겠습니다.
// 대신, 함수형 프로그래밍을 쓰면 다음과 같은 것이 가능합니다.
const adder = (x: number) => (y: number) => x + y;
const add5 = adder(5);
console.log(add5(1));
// 자세히 보면, 리턴값이 뭡니까?
// 함수다. 블록으로 표시해볼게요
// adder 의 리턴값은, y 를 들여와서 x + y를 더하는 함수다.
// 그래서 두번째 함수 호출부에 보면, 5가 들어가서 생긴 add5 는 뭡니까?
// 새로운 함수다.
// 그 애더5라는 함수에 1을 집어넣었더니 결과는 뭐가 나올까요?
// 기존의 5가 x가 되버려서, 
// 컨트롤 엔터, 6이 되었습니다.
// 즉, 다음과 같은 코드가 된 겁니다.
const adder = (x: number) => (y: number) => x + y;
// const add5 = (y: number) => 5 + y;
const add5 = adder(5);
console.log(add5(1));
// 화살표 함수는 2015년에 새로 추가된 기능인데,
// 그 전의 function 키워드때도 함수는 변수였지만
// 이런걸 구현하려면 상당히 코드를 길게 쳤어야했다.
// 화살표함수는 함수형 프로그래밍의 구문을 간단하게 만들어준다.
// 지금 당장 이해가 안 되어도 좋다. 그냥 함수형 프로그래밍을 미리 구경했다고 생각하면 됩니다.

const myCal = {
    add: function(a: number, b: number) {
        return a + b;
    },
    subtract: function(a: number, b: number) {
        return a - b;
    },
    multiply: function(a: number, b: number) {
        return a * b;
    },
    devide: function(a: number, b: number) {
        return a / b;
    }
};

console.log(myCal.add(5, 2));
console.log(myCal.subtract(10, 3));
console.log(myCal.multiply(10, 2));
console.log(myCal.devide(30, 2));
// 이제 지금까지 배운 지식들로, 계산기를 만들어봤어요
// 먼저 function 키워드를 이용해서 만들어보겠습니다.
// 함수도 자료형이기때문에, 당연히 객체의 프로퍼티로 쓸 수 있어요
// 이렇게 객체 안에 정의된 함수를 메소드라고 합니다. 메소드.
// 화살표 함수를 써서 이 코드를 줄여볼까요?
// 비디오 멈추고 직접 한 번 해보세요.
// 해봤나요?
// 이렇게 됩니다.

const myCal = {
    add: (a:number, b:number) => a + b,
    subtract: (a:number, b:number) => a - b,
    multiply: (a:number, b:number) => a * b,
    devide: (a:number, b:number) => a / b
};

console.log(myCal.add(5, 2));
console.log(myCal.subtract(10, 3));
console.log(myCal.multiply(10, 2));
console.log(myCal.devide(30, 2));

// 문법이 훨씬 간단해졌죠?
// 이번장 마치기전에 주의사항 하나만 집고 끝낼게요 
// 화살표함수에서 객체를 리턴할때는 꼭 소괄호로 감싸야합니다.
// 객체의 중괄호랑 함수의 중괄호랑 뜻이 겹치기 때문이에요
const test = () => ({job: '개발자'});
// 안그러면 예상치못한 에러가 날 수도 있어요

// (ppt)
// 핵심정리
// JavaScript에서는 함수는 변수이며, 하나의 자료형이다. 
// 함수가 변수이기 때문에, 다른 함수의 parameter 로도 쓰이고, return 으로도 쓰인다.
// return 이 한 줄인 함수의 경우, 중괄호를 생략하고 return 도 생략 가능하다.
// 중괄호 { } 와 return을 생략할 경우, 객체를 return 할 때는 꼭 소괄호 ( ) 로 감싸줘야 한다. 
// 함수에서 중괄호 { } 는 함수 내용을 의미하기 때문이다.