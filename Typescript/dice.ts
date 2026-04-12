const random = Math.random();
console.log(random);
// 0から１までの数字

const dice:number = Math.floor(random*6 + 1);
// floor 切り捨てメソッド
console.log(dice);