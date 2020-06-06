'use strict'

{
  const scores = [80, 90, 40, 70];

  scores.push(60, 50);  // scores配列に60と50を追加
  scores.shift();  // 先頭の要素を削除する

  for (let i=0; i<scores.length; i++) {
    console.log(`Score ${i+1}: ${scores[i]}`);
  }
}