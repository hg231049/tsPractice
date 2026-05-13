// 배열
// 베열의 타입 지정 후 [] 대괄호를 붙여 배열 임을 알림.
let numArr:number[] = [1,2,3];
let strArr:string[] = ["hello",'im','dles'];

// 제네릭 문법 : Array<타입>
let boolArr:Array<boolean> = [true,false,true];
//  유니온 문법 : 배열에 들어가는 요소들이 다양할 경우
let mutiArr: (number|string)[] = [1,"hello"];
// 다차원 배열의 타입을 정의하는 방법
let doubleArr : number[][] = [
    [1,2,3],
    [1,2],
]

//  튜플
// 길이와 타입이 고정된 배열
let tup1:[number,number] = [1,2];
tup1 = [1,2,3]; // x.고정해놓은 배열의 길이를 넘음
tup1 = ["1","2"]; // x. 고정해놓은 배열의 타입이 아님

let tup2:[number,string,boolean] = [1,"2",true];
tup2 = ["2",1,true]; 

const users : [string,number][]= [
   ['이은서',1],
   ['이은성',2],
   ['이은선',3],
   ['이금서',4],
   [5,'최금서'],
]