// 객체리터럴 타입 : {} 중괄호를 이용해 타입을 정의
// 구조적 타입 시스템(Property Based TS) : 객체를 이루는 구조를 기준으로 타입을 정의
let user = {
    name: "이은서",
};
let dog = {
    name: "홍조",
    color: "brown",
};
let config = {
    apiKey: "My API KEY",
};
user.id;
dog.name;
config.apiKey = "test";
export {};
