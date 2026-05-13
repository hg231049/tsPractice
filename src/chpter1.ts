//  원시 타입
//  1. number(숫자를 의미하는 모든 값. 양수,음수,소수,무한대,NAN)
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

num1.toUpperCase();
num2 = "hello";
num3.toFixed();

//  2. string(문자열. )
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

str1 = 123;
str2.toFixed();
str3.toUpperCase();

// 3. bollean(참,거짓. )
let bool1: boolean = true;
let bool2: boolean = false;

bool1 = 123;
bool2.toUpperCase();

// 4. null
let null1: null = null;
null1 = 123;

// 5. undefined
let unde1: undefined = undefined;

// 6. 넣을 데이터가 없을 때 임시로 null값을 할당
let numA:number = null;

// 7. 리터럴 타입(그 값 자체가 타입이 되는)
let numB : 10 = 10;
numB = 12;
