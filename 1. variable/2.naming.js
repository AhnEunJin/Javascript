/** 변수 규칙!
 * 라틴문자(0-9, a-z, A-Z,), _
 * 대소문자를 구분함
 * 추천: camelCase (likeThis) ✅
 * 한국어 ❌
 * 예약어 ❌
 * 숫자로 시작 ❌
 * 특수문자 ❌ (_, $ 두가지는 예외)
 * 이모지 ❌
 * 여러개의 변수를 1, 2, 3 숫자로 구분 ❌ -> 최대한 의미있게, 구체적인 이름으로 작성!
 */

// 변수 이름 짓기 - 저장된 값을 잘 나타낼 수 있는 의미 있는 이름
//구체적일수록 좋다 (이 변수에는 어떤 값이 들어 있는가?)

let apple;
let redApple;

// 나쁜예제 💩
// 의미를 파악할 수 없음
let number = 20;

// 좋은예제 ✨
let myAge = 20;

// 나쁜예제 💩
let audio1;
let audio2;

// 좋은예제 ✨
let backgroundAudio;
let windAudio;

// 꿀팁! 🍯
// 공통어를 먼저 쓰는게 좋다
let audioBackground;
let audioWind;

audioBackground;
