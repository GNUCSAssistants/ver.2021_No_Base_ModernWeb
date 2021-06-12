// 드디어 자바스크립트, 타입스크립트 마지막 장인 인터페이스입니다.
// 이 문법은 타입스크립트에만 존재해요
// 그래서 제목부터가 파란색입니다.
// 참고로, 인터페이스엔 여러가지 종류가 있는데
// 여기선 객체 인터페이스하고 함수 인터페이스만 다룰거에요
// (코드)

const myInfo = {
    name: '조교행님',
    age: 28
};

const sayHello = (person: object): string => {
    return `안녕, ${person.name}. 나이는 ${person.age}.`;
};

console.log(sayHello(myInfo));
// 객체를 집어넣는다고 치자. 그땐 다음과 같은 에러가 발생한다.
// name과 age는 object 라는 타입에 존재하지 않습니다.
// 대체 뭐가 잘못된걸까? student의 타입은 확실히 object 가 맞는데, 
// TypeScript 는 이를 허용하지 않는다.
// TypeScript에선, 객체를 받을 때는 객체가 정확히 어떻게 생겼는지 써줘야됩니다.
// 즉, 반드시 interface를 정의해줘야됩니다.
// (ppt)
// interface는 쉽게 말하면 내가 만드는 타입이에요
// 지금까지 number, string , 불리언, 어레이, 오브젝트, 펑션 등의 타입을 배웠는데
// 이젠 우리가 직접 타입을 만들어줄거에요
// (코드)
interface Info {
    name: string;
    age: number;
}
// 인터페이스를 맨 위에 써줍니다. 각 프로퍼티들의 타입을 적어주고요
// 인터페이스는 대문자로 시작합니다.
// 여기선 이콜 기호 안씁니다. 그냥 바로 중괄호 쓸거에요
// 프로퍼티 뒤엔 콤마가 아니라 세미콜론 씁니다.
// 그리고 파라미터 타입을 오브젝트가 아니라 Info로 바꿔줍시다.
// 그럼 person 의 타입은 뭡니까? object 가 아니라 Info 이죠.
// 인포는 원래 타입스크립트에 있던 자료형인가요?
// 아니죠. 우리가 interface를 통해 직접 만든 자료형입니다/

// 이렇게 객체를 파라미터로 받을 때 interface를 사용하도록 강제하면 뭐가 좋은 걸까요?
// 자바스크립트에선 객체의 타입을 강제하지 않아서 대체 어떤 문제가 있었던 걸까요?
// 직접 에러를 일으켜가면서 판단해봅시다.

// 상황 1번, 프로퍼티 키 이름인 name을 named로 잘못 썼을 때.
// 상식적으로 당연히 에러가 있을거라고 생각하지 않나요?
// 함수의 리턴값에는 named가 아니라 name을 가져오기때문에 에러를 발생시켜야됩니다.
// 없는 걸 가져오게 되니까요.
// 그러나 우습게도, 
// 타입스크립트가 아닌 javascript는 이 코드를 정상적으로 받아들여 다음을 출력합니다.
// 컨트롤 엔터
// 즉, 이 코드는 자바스크립트에겐 에러가 아닙니다. 
// 언디파인드 문제는 프론트엔드 개발하다보면 정말정말 자주 마주치게 될 문제입니다.
// 이런 종류의 문제는 타입스크립트 없이는 원인도 찾기 힘들어요
// 에러메세지를 안띄워주기 때문이죠
// 개발자에게 가장 무서운 상황은, 분명히 에러인데 에러 문구 없이 멀쩡히 돌아가는경우입니다.
// 그래서 눈에 불을 키고 뒤져가면서, 어디까지 데이터가 들어왔나 콘솔로그 체크하고
// 그렇게 30분 날려먹고 찾은 원인이 철자 하나때문이었다고 생각해보세요
// 엄청 힘빠지죠?
// 타입스크립트는 이 경우엔 에러메세지를 띄워서 우리의 실수를 재빨리 찾도록 도와줍니다.
// 에러 내용 읽기.
// 첫번째문장. 
// 타입 뭐뭐뭐는 할당할수없습니다. info타입의 파라미터에.
// 무슨말입니까? 인포타입의 파라미터에 타입 뭐뭐뭐를 할당할수없다는거죠
// 두번째 줄 읽어볼께요. 첫번째 문장을 구체적으로 설명한겁니다.
// 네임 프로퍼티가 타입 뭐뭐뭐에서 빠졌다. 그러나 인포 타입엔 필요하다.
// 즉, 함수에 집어넣으려면 스튜던트에 네임이 꼭 필요한데, 못찾겠다는 뜻입니다.
// 왜? 우리가 잘못 썼기 때문이죠. 타입스크립트 덕분에 훨씬 빨리 문제를 찾을 수 있었어요.

// 이제 네임드를 네임으로 다시 고쳐놓고,
// 이번엔 받는쪽에서 name을 named 로 잘못 쓴 경우다.
// javascript에선 이게 에러가 아니며 다음 결과를 출력한다.
// 그러나 타입스크립트에선 에러메세지를 재빨리 띄워주어 우리의 실수를 막는다.
// 에러메세지를 보면
// 프로퍼티 네임드는 인포라는 타입에 존재하지 않습니다.
// 그리고 친절하게도, 혹시 네임드가 아니라 네임 아니니 하고 알려주기까지한다.

// 다시 named를 정상적으로 name으로 고쳐놓고,
phone: '010-5555-6666'
// 객체 myInfo에 전화번호를 추가한 경우다.
// 이 상태만으로는 자바스크립트든 타입스크립트든 에러가 아니다. 
// 하지만 실제로 전화번호를 사용하려고 하면 문제가 된다.
// 에러내용: 폰이라는 프로퍼티는 인포타입에 존재하지 않는다
// 우리가 Info 인터페이스를 만들 때 phone 프로퍼티를 만들지 않았기 때문에 에러 발생
// 이 경우, 불만이 생길수도 있다.

// 아니, 좀 쓸수도있지 타입스크립트가 너무 까다로운거 아니야?
// 그러나, 만약 myInfo를 여러개 만든다고 가정해보자. myInfo1, myInfo2, myInfo3
// 그러면 어떤건 폰이 있고, 어떤건 없는채로 쓰는 제멋대로인 상황이 벌어진다.
// 상식적으로, 우리가 만든 타입이라면 모두 똑같은 형태를 가지고 있어야 하지 않을까?
// 타입스크립트를 쓰면 나중에 일어날지도모를, 혹시 모를 혼란을 방지해준다.

// 다시 전화번호부분을 지우고,
// 이제 myInfo에서 age의 타입을 바꿔보겠다. 이런 실수를 할 수 있다.
// 28을 '28'
// Info 타입의 age는 number인데, 객체 myInfo의 age는 string 이다.
// 무슨 에러가 발생했나?
// 맨 마지막줄만 읽어보면, 스트링 타입은 넘버타입에 집어넣을수없다.
// 이 상황 역시 같은 용도로 쓸 객체는 같은 형태를 가져야한다고 TypeScript가 잔소리하는것이다.
// 잔소리는 미래에 혹시모를 에러를 방지해서 결과가 깔끔하게 나오도록 돕는다.

interface Cal {
    // add: Function;
    add: (a: number, b: number) => number;    
}

const myCal = {
    add: (a: number, b: number) => a + b
};

const printAddResult = (myCal:Cal) => {
    console.log(myCal.add(2, 3));
};

printAddResult(myCal);
// 추가로, 객체 안에 함수 프로퍼티가 있을 경우에 대해 알아보도록 하겠습니다.
// 이 때도 타입을 적어줘야되요
// 쉬운방법과 귀찮지만 권장하는 방법이 있는데,
// 쉬운방법. 그냥 대문자 F로 시작하는, Function 이라는 타입을 써주면 됩니다.
// 귀찮지만 권장하는 방법으론, 해당 함수의 파라미터와 리턴값의 타입을 써주면 되요.
// 이 코드는 모범적인 예제라곤 할 수 없는데, 예시를 보기 위해 가져와봤어요
// 코드를 읽을 때 제가 쓰는 팁인데, 순서대로 읽지 마세요. 더 헷갈려요
// 첫줄부터 읽지 말라는 말이에요
// 실행되는 순으로 읽으세요. 예를 들면 이 코드는 15번째 라인부터 읽는거에요
// printAddResult 라는 함수를 실행시킬건데, 뭘 집어넣었습니까?
// myCal 을 집어넣었네요. myCal은 객체에요. 객체 안에 뭐가 있어요?
// 함수 프로퍼티가 있네요.
// 객체가 들어가니깐 인터페이스를 써줘야겠죠?
// 그래서 인터페이스를 봤더니, 아까 말했던 쉬운 방법, 
// 그냥 대문자 F로 시작하는 Function 을 타입으로 쓸 수도 있고
// 귀찮지만 권장하는 방법, 함수의 파라미터와, 리턴값의 타입을 자세하게 써둘수도 있어요.
// 그리고 printAddResult 의 타입은 뭡니까? Cal 이죠.

// 그리고 참고로, 인터페이스는 원래 타입스크립트 공식문서에선 뒤에 세미콜론을 붙여줍니다.
// 제가 강의찍으면서 실수로 콤마를 썼는데 그래도 잘 작동은 하네요
// 객체와는 구분되는 문법을 쓰기 위해 세미콜론을 쓰는거같아요
// 콤마 말고 세미콜론으로 써줍시다.

// (ppt)
// 강의 오티의 중국집으로 돌아가보자.
// 타입스크립트라는 카운터직원을 고용해서, 인터페이스를 강제하면 뭐가 좋은가?
// 메뉴판대로만 주문받는 카운터직원을 고용한것이다.
// 메뉴판이 무엇인가? 장사시작할때부터 우리가 미리 정해놔서,
// 손님들이 그것만 주문할것이라고 믿고있는것이다.
// 타입스크립트는 누군가 중국집에 메뉴판에도 없는 스파게티와 김밥을 시키면,
// 그런 메뉴 없다고 에러를 일으킨다.
// 심지어, 아무 내용도 없는 주문, undefined를 받지도 않는다.
// 주문이 들어오면, 진짜 메뉴판에 있는것과 일치하는지 반드시 확인한다.

// (다음)
// 핵심정리
// interface는 JavaScript엔 없고, TypeScript 에만 있는 개념이다
// interface는 개발자가 직접 만든 타입이다
// 함수의 파라미터로 객체가 들어갔을 경우
// 반드시 interface로 정의해야한다

