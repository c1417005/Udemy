const today: Date = new Date();
// todayはdateオブジェクトのインスタンス
//オブジェクト（抽象）からインスタンス（具体）へ

console.log(
    today.getFullYear()+
    "年"+
    (today.getMonth() +1) +
    "月"+
    today.getDate()+
    "日"
);

//インスタンスのメソッドを使って色々する。

console.log(today.getFullYear());
console.log(today.getMonth()+1);
console.log(today.getDate());

