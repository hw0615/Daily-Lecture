function mystery() {
    var secret = 6;
    function mystery2(multiplier) {
        multiplier *= 3;
        return secret * multiplier;
    }
    return mystery2;
}

var hidden = mystery();
var result = hidden(3);

/*
1) 
`warningMaker`라는 함수와 `monster`이라는 이름의 매개변수를 만든다. 이 함수 내에서는 특정 `monster`를 마주쳤을 때에 기반하여 
특정한 `alert` 메시지를 보여주는 익명함수를 반환한다. 메시지 형식은 "Beware! There have been <monster> sightings in Seoul today!"로 한다.
참고: `warningMaker` 함수를 호출할 필요는 없음.
*/

// function warningMaker(monster){
//     if( monster === true ){
//         alert("Beware! There have been <monster> sightings in Seoul today!")
//     } return monster
// }

function warningMaker(monster) {
    return function() {
        alert("Beware! There have been "+ monster +" sightings in Seoul today!")        
    }
}


/* 
2) 
서울에서 오크가 발견되었다는 보고가 있었다.

1번의 함수에 더하여,

- "Ork"를 매개변수 `monster`로 받아, `warningMaker` 함수에 인자로 전달하여 경고 메시지를 출력한다.
- 결과값은 `orkAlert`라는 새로운 변수에 저장한다.
- `orkAlert` 함수를 호출해 경고 메시지를 확인한다.

참고: `warningMaker` 함수를 변경하지 않는다.
*/

var orkAlert = warningMaker('ork');
orkAlert();



/*
3)
`warningMaker` 함수를 변경하여 아래 조건을 경고 메시지 안에 반영해본다.

- 괴물(monster)의 수. 이건 무조건 첫 번째 매개변수여야 함.
- 괴물(monster)이 발견된 특정 위치. 이건 무조건 두 번째 매개변수여야 함.

즉, 특정한 숫자와 위치를 함수에 전달하고, 해당 값들을 `warningMaker` 함수에 전달되는 `alert` 메시지에 포함되도록 한다.

`warningMaker` 함수를 업데이트하여, 메시지 형식은 아래와 같이 한다. 매개변수를 사용해 중괄호({}) 부분을 수정한다.

"Beware! There have been <monster> sightings in Seoul today!
<number> have been spotted at the <location>!" 

참고: 공백에 주의하라. `warningMaker` 함수를 수정할 필요는 없다.
*/

function warningMaker(monster) {
    return function(number, location){
        alert( 'Beware! There have been' + monster + 'sightings in Seoul today!\n' 
        + number + 'have been spotted at the'+ location + '!' )
    }
}

/*
4)
아래와 같은 경고 생성기를 몇 개 더 만들었고 갑자기 발생하는 위험에 대비하기로 했다.

	Mayday, mayday!

	I've got `6` green hulks near "Gwanghwa-mun"!

	And `1` snow yeti across "Nam San"!

	Over and out!

위와 같이 이미 만들어진 경고 메시지를 검토하고, 이 상황에 맞는 적절한 함수를 호출해라. 적절한 매개변수를 넣는 것 또한 잊지 마라. 딱 코드 두 줄이면 된다.
*/

var greenHulkAlert      = warningMaker("green hulk");
var xManAlert           = warningMaker("x man");
var orkAlert            = warningMaker("ork");
var flashBlizzardAlert  = warningMaker("flash blizzard");
var snowYetiAlert       = warningMaker("snow yeti"); 


greenHulkAlert(6, "Gwanghwa-mun")
snowYetiAlert(1, "Nam San")

/*
5)
위와 같은 함수에서는, 어떤 괴물은 여러 번 경고를 하지만 다른 것들은 그렇지 못하다.

`warningMaker` 함수를 수정해서 특정 경고가 발현된 횟수를 내부적으로 세는 방향으로 수정해 본다.

이를 위해서는, `count` 변수를 설정하고 함수 문맥(context) 내에서 이를 적절하게 증가시키는 방법을 알아내야 한다.

마지막으로 `count`를 `alert` 메시지에 넣는다. 메시지 형식은 아래와 같아야 한다.

Beware! There have been <monster> sightings in Seoul today!
<number> have been spotted at the <location>!
This is alert #<count> today for <monster> danger.
*/

function warningMaker(monster) {
    var count = 0;
  return function(number, location) {
    count++;
    alert("Beware! There have been " + monster +
          " sightings in Seoul today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert "+ count + "today for" +monster+ "danger."
    );
  };
}


/*
6)
각각의 `location`을 저장해서, 새로운 경고 메시지가 뜰 때마다 `monster`에 대한 위험지역이 리스트 형태로 나오게 만들어라.

`warningMaker` 함수 내부에는
- 각각의 `location`을 `zone`이라는 배열 안에 저장한다.
- `zone`을 `list` 문자열 안에 추가한다.
- `alert` 메시지 안에 위험지역에 대한 `list`가 뜰 수 있도록 한다. 포맷은 아래와 같다.

Beware! There have been <monster> sightings in Seoul today!
<number> have been spotted at the <location>!
This is alert #<count> today for <monster> danger.
Current danger zones are:
<zone1>
<zone2>
<zone3>
...
*/


function warningMaker(monster) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    // add each location to the zones array
    zones.push(location)
    // add each zone to the list string
    for (var i = 0, l = zones.length; i < l ; i++){
        list += zones[i] + '\n';
    }
    // 간단한 방법
    // zones.join('\n')

    alert("Beware! There have been " + monster +
          " sightings in Seoul today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + monster + " danger.\n" +
          // finish the warning message here
          "Current danger zones are:\n" + list);
  };
}
var wm = warningMaker()  
orkAlert (2, "우리집")
orkAlert (100, "너네집")


/*
7)
위험지역을 피하는 게 아니라, 스릴을 즐기고 싶은 사람이 있을 수도(!) 있다. 실제로 괴물이 많은 지역을 한번 구경하기를 원하는 사람도 있을 것이다.

위험지역 목록을 가지고 있으니, 한번 각 위치 옆에 `number`을 추가해보자.

- `zones` 배열을 사용해서, `monster`에 대한 `location`과 `number`가 모두 포함된 하위 배열을 `push`한다.
- `for`문 안에서 `zones` 배열 값에 접근하여 이를 `list` 문자열에 더하는 방법을 찾아본다.
- 최종 `alert`는 아래와 같은 형태로 나와야 한다.

Beware! There have been <monster> sightings in Seoul today!
<number> have been spotted at the <location>!
This is alert #<count> today for <monster> danger.
Current danger zones are:
<zone1> (<number1>)
<zone2> (<number2>)
<zone3> (<number3>)
...

참고: `alert` 메시지를 바꿀 필요가 없다. `zones` 배열을 바꾸고 `for`문을 수정해서 `list` 문자열에 제대로 된 값이 들어갈 수 있도록 만들면 된다.
*/

function warningMaker(monster) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    // push an array with location and number
    zones.push([number, location]);
    for (var i = 0; i < zones.length; i++) {
      // replace location and number with appropriate code
      list += zones[i][1] + " (" + zones[i][0] + ")" + "\n";
    }
    alert("Beware! There have been " + monster +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + monster + " danger.\n" +
          "Current danger zones are:\n" +
          list);
  };
}






var flowerList = ['장미', '목련꽃', '매화', '라넌큘러스', '국화', '할미꽃', '민들레', '양귀비'];

function assignFlower(students, flowerList) {
    return function() {
    alert("안녕하세요, " + student + "님!\n" +
    "강의장에 오시면 " +
    flowerList[i] + " 을/를 선물로 드릴게요.");
    };
  return classroomAssignment;
}