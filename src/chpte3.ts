// 객체리터럴 타입 : {} 중괄호를 이용해 타입을 정의
// 구조적 타입 시스템(Property Based TS) : 객체를 이루는 구조를 기준으로 타입을 정의
let user: {
    // 선택적 프로포티 : 이름 뒤에 ? 추가하면 해당 프로포티가 있어도 되고 없어도 된다.
    id?:number;
    name:string;
} = {
    name:"이은서",
}

let dog: {
    name:string;
    color:string;
} = {
    name:"홍조",
    color:"brown",
}

let config: {
    // readonly : 프로포티의 값을 변경하는 걸 막아줌
   readonly apiKey:string;
} = {
    apiKey: "My API KEY",
};

user.id;
dog.name;
config.apiKey = "test";