const prefecture:string[] = [
    '北海道',
    '青森県',
    '岩手県',
    '宮城県'
];

console.log(prefecture[0]);

// for (let i = 0; i<prefecture.length; i++){
//     console.log(prefecture[i]);
// }

for (let name of prefecture){
    console.log(name);
}
//for of 構文.配列等でしか使えない。配列から１件ずつnameに入れている。

console.table(prefecture);