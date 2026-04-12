"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let dice;
for (let i = 0; i < 100; i++) {
    dice = Math.floor(Math.random() * 6 + 1);
    console.log(dice);
    if (dice === 1) {
        // break;
        // 繰り返し を中断する
        continue;
        //これより下は実行せず、繰り返しに戻る
    }
    console.log('1以外でした');
}
//# sourceMappingURL=break.js.map