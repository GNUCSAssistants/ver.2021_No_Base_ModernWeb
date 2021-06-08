// 배열과 객체, 함수를 잘 다루는건 
// 자바스크립트 개발자로서 꼭 갖추어야 할 덕목
// 알아두면 개발하다 쓸모있는 정보들을 모아뒀다.

// (실습)
// 첫번째, 길이구하기.
const menu = '알리오올리오스파게티';
console.log(menu.length);

const menuArray = ['짜장', '짬뽕', '탕수육'];
console.log(menuArray.length);

// .length는 string 또는 array 의 길이를 구합니다. 쩜 붙여서 씀
// 근데 쩜은 객체에 접근할때 쓴대매? 우린 length를 정의한적없는데?
// 자바스크립트에선 작 자료형은 각 자료형의 객체에 속합니다.
// length는 array 객체와 string 객체에서 제공하는것
// 근데 객체의 길이는 못 구함
const info = {
	name: '조교행님',
	age: 28,
	job: '대학조교'
};

console.log(info.length);

// 에러 읽어보면
// 프로퍼티 length 는 존재하지 않습니다. / 타입 {~~} 에.
// 객체를 총괄하는 객체 프로퍼티에는 length 프로퍼티가 없어요
// 이 코드 역시 자바스크립트에선 정상작동하는데
// 타입스크립트에선 에러에요.
// 그래서 객체의 길이는 좀 다르게 구해야 됨.
console.log(Object.keys(info).length);
// 아니 엄청 긴데 이걸 외우고있어야되나요?
// 코딩은 학교공무하듯이 하지 마세요.
// 제발, 모든걸 외우려고 하지 마세요
// 코딩은 그렇게 하는거 아니에요 구글을 쓰세요
// 검색어 
// object length javascript
// 똑똑한 행님들이 알아서 알려줍니다
// 만약 불신의 아이콘 네이버 블로그같은거를 제외하고 싶다면
// -naver 
// 써주면 됩니다.
// 한국 개발자들은 주로 티스토리 블로그나 
// 개인 사이트에 자기가 공부한걸 많이 올림
// 요새는 medium 이라는 해외 블로그 플랫폼을 좀 쓰는거같은데
// 글씨체가 안이쁜거같아요
// 길이 구하는건 이정도로 하고,

// 실습 두번째. 빈 객체와 빈 배열은 조건문에서 false 아니다.
const a = [];

if (a) {
	console.log('run');
} else {
	console.log('fail');
}

// 둘 다 실행시켜보면 run 잘됨.
// 아래 주석을 붙여넣어주자.

/*
  조건문에서 false 로 인식하는 것들

  false			(boolean) 
  0   			(number)
  ''			(string. 빈 문자열)
  undefined, null

  그러나, 빈 배열 [] 과 빈 객체 {} 는 아니다.
*/

// 실습 세번째
const a = [1, 2, 3];
const b = [1, 2, 3];

if(a === b) {
    console.log('둘은 같다');
} else {
    console.log('둘은 다르다');
}
// 결과는 둘은 다르다고 나옴.
// 객체도 마찬가지. 코드를 지우고,
const a = {
    name: '조교행님',
    age: 28
};
const b = {
    name: '조교행님',
    age: 28
};

if (a === b) {
    console.log('둘은 같다')
} else {
    console.log('둘은 다르다')
}
// 결과, 둘은 다르다. 
// 즉, 두 배열이, 두 객체가 서로 같은지 비교하는 기능은
// JavaScript, TypeScript 에서 제공 안함
// lodash 라고 인기있는 라이브러리가 있는데,
// 그걸 쓰면 편하게 할 수 있다고 알고있어요. 지금은 알 필요는 없어요

// 다음코드
const id = 1;
const a = { id: id };
console.log(a);
// 여기서 두번째라인은 다음과 같이 줄일 수 있음
// 뒤에 붙은 아이디를 떼버림
// 즉, 키의 이름과 일치하면 굳이 뒤에걸 안써도 된다는 뜻
// 응용해보자. 
// 이미 존재하는 두 개의 변수를 하나의 객체로 만드려면 
// 원래는 이렇게 했어야 했다.
const myName = '조교행님';
const age = 28;
const member = {
    myName: myName,
    age: age
}

console.log(member);

// 이젠 이걸 뒤에 떼버리고 이렇게 줄일 수 있다. 코드 지우고
const myName = '조교행님';
const age = 28;
const member = { myName, age };

console.log(member);

// 다음 코드
const data = [2, 5, 8, 52, 83, 96];
const x = data[0];
const y = data[1];
const z = data[2];
const other = [0, 0, 0];
other[0] = data[3];
other[1] = data[4];
other[2] = data[5];

console.log(`
    ${x}
    ${y}
    ${z}
    ${other}
`);
// 이미 존재하는 배열이나 객체를 새로운 배열이나 객체에 넣으려면,
// 원래는 이렇게 했음
// 참고로 텅 빈 배열 선언하면 안되고 첫줄과 같이 초기화해줘야됨
// 데이터가 있고,
// x, y, z, ohter 를 만들어서,
// 그걸 하나하나 집어넣었어야.
// 근데 이걸 간단히 고칠 수 있음
// 데이터와 콘솔로그 빼고 주석처리하고
// 컨트롤 슬래시
const [x, y, z, ...other] = data;
// 무슨 말입니까? x, y, z에 순서대로 2, 3, 8
// 그리고 ... 으로 쓰고 (여기서 ... 도 문법입니다)
// other쓰면 나머지가 다 들어감
// 결과 컨트롤 엔터치면 똑같이나옴
// 여기서 x, y, z는 배열이 아니고 새로만들어진 변수에요
// 궁금하면 타입 찍어보면 되겠죠
console.log(`
    ${typeof x}
    ${typeof y}
    ${typeof z}
    ${typeof other}
`);
// 여기서 넘버넘버넘버 오브젝트. 배열(어레이)는 
// 원래 객체(오브젝트)라고 찍혀서나옴
// 어쨋든 x, y, z는 배열이 아니라, 넘버에요.

// 코드 싹 다 지우고,
// 객체도 가능합니다.
const myInfo = {
    myName: '조교행님',
    age: 28,
    address: '경남 함양군',
    isGirlFriend: true,
    language: ['영어', '한국어', '중국어'],
    skills: {
        frontend: 'React',
        backend: 'GraphQL'
    }
};

const { address, age, myName, skills: { frontend }, ...other } = myInfo;
console.log(`
    ${myName} ${typeof myName}
    ${age} ${typeof age}
    ${address} ${typeof address}
    ${frontend} ${typeof frontend}
`);
console.log(other, typeof other);

// myInfo라는 객체를 작성했고,
// 배열과는 다르게, 여기선 가져오고자 하는것의 이름을 
// 정확히 써줘야. 왜? 인덱스가 따로 없으니깐
// 즉, 순서가 없으니깐 프로퍼티 이름, 즉, 키로 접근해야
// 그래서 13번째라인, 가져올 때 자세히보면
// 순서가 뒤죽박죽이죠? address가 맨 앞에 있고
// 원래 객체는 순서가 없어서 그래요

// 콘솔로그 찍힌거 보면, 더이상 객체(오브젝트)가 아니에요
// 타입까지 찍히도록 써놨죠? 스트링 넘버 스트링 스트링
// 각각의 타입을 가진 변수에요

// 객체 안에 객체의 프로퍼티에 접근해 새로운 변수를 만들려면, 
// 스킬 프론트엔드부분과 같이,
// 객체이름, 프로퍼티명으로 접근해야됩니다.
// 쓰고 남은것은 점점점 붙인 other에 담긴것을
// 콘솔로그 보면 알 수 있습니다.
// isGirlFriend, language는 따로 안 담았으니까요

// 객체와 배열을 다루는 고급기술들을 배워봤는데
// 어려운거 알아요. 근데 리액트 그래프큐엘 가르치면서 
// 한번쯤은 쓸 것이라서 자주쓰는것들을 종합해 알려드려봤습니다.
