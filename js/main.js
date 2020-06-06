'use strict'

{
  const scores = [80, 90, 40, 70];

  // splice(変化が開始する位置, 削除数)
  // splice(変化が開始する位置, 削除数, 追加する要素, ・・・)
  scores.splice(1, 1, 40, 50);
  // 配列の1番目を削除して、40点と50点を追加する

  for (let i=0; i<scores.length; i++) {
    console.log(`Score ${i+1}: ${scores[i]}`);
  }
}