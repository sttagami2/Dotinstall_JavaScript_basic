'use strict';

{
	document.querySelector('button').addEventListener('click', () => {
		const li = document.createElement('li');
		const text = document.querySelector('input');			// 入力されたinput要素を取得
		li.textContent = text.value;											// 入力された値をvalue属性で取得
		document.querySelector('ul').appendChild(li);			// ulに対してliをappendChild()メソッドを使用して追加する

		text.value = '';																	// appendChild()にて追加後空欄にする
		text.focus();																		// 直ぐに入力ができるように空欄にフォーカスさせる
	});
}