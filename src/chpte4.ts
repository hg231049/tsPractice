//  타입과 인덱스 시그니처
//  : 객체와 프로퍼티스의 수가 많아 질 때 사용. 특히 실제 서비스에서 유저 정보 등

// 타입 별칭 : 타입을 변수처럼 사용
// 타입별칭은 중복되면 x
type User = {
    id:number;
    name:string;
    nickname:string;
    birth:string;
    bio:string;
    location:string;
}

let user: User = {
    id:1,
    name:"이은서",
    nickname:"eunseo.lee",
    birth:"1998.01.22",
    bio:"공부중",
    location:"김포",
}

//  인덱스 시그니처
// : 키와 벨류의 규칙을 기준으로 객체의 타입을 정의
type CountryNumberCode = {
    [key : string] : number; // 빈 객체인 경우 규칙을 위반 할 프로퍼티가 없기 때문에 오류가 안날수있다
    Korea:number; // 반드시 들어가야 할 프로퍼티가 있을 경우 아래에 정의 해줘야함

}
let countryCodes: CountryNumberCode = {
     Korea:410,
    // UnitedState:810,
    // UnitedKingdon:25,
}