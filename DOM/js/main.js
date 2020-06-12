'use strict';

{
	document.querySelector('button').addEventListener('click', () => {
		const item0 = document.querySelectorAll('li')[0];
		const copy = item0.cloneNode(true);				// cloneNodeは中身を複製するもの ※falseにすると複製しない

		const ul = document.querySelector('ul');
		const item2 = document.querySelectorAll('li')[2];
		ul.insertBefore(copy, item2);							// insertBeforeにより、先ほどcopyで複製したものをitem2の前に貼り付ける
	});
}