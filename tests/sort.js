'use strict';

QUnit.module('Тестируем функцию sort', function () {
	QUnit.test('Проверка работы с пустой строкой', function(assert) {
		assert.strictEqual(sort(''), '', 'Корректная обработка пустой строки')
	});
	QUnit.test('Проверка сортировки букв в слове', function (assert) {
		assert.strictEqual(sort('дгвба'), 'Абвгд', 'дгвба => Абвгд');
		assert.strictEqual(sort('фыва'), 'Авфы', 'фыва => Авфы');
		assert.strictEqual(sort('аааа'), 'Аааа', 'aaaa => Aaaa');
		assert.strictEqual(sort('edcba'), 'Abcde', 'edcba => Abcde');
		assert.strictEqual(sort('asdf'), 'Adfs', 'asdf => Adfs');
		assert.strictEqual(sort('zzzz'), 'Zzzz', 'zzzz => Zzzz');
	});


	QUnit.test('Проверка сортировки слов в предложении', function (assert) {
		assert.strictEqual(sort('д г в б а'), 'А Б В Г Д', 'д г в б а => А Б В Г Д');
		assert.strictEqual(sort('ф ы в а'), 'А В Ф Ы', 'ф ы в а => А В Ф Ы');
		assert.strictEqual(sort('а а а а'), 'А А А А', 'а а а а => А А А А');
		assert.strictEqual(sort('e d c b a'), 'A B C D E', 'e d c b a => A B C D E');
		assert.strictEqual(sort('a s d f'), 'A D F S', 'a s d f => A D F S');
		assert.strictEqual(sort('z z z z'), 'Z Z Z Z', 'z z z z => Z Z Z Z');
	});

	QUnit.test('Проверка замены первой буквы на прописную, а остальных на строчные', function (assert) {
		assert.strictEqual(sort('АбБА'), 'Аабб', 'АбБА => Аабб');
		assert.strictEqual(sort('AbBA'), 'Aabb', 'AbBA => Aabb');
	});

	QUnit.test('Проверка работы с несколькими словами из нескольких букв', function (assert) {
		assert.strictEqual(sort('ААА вВв Ббб'), 'Ааа Ббб Ввв', 'ААА вВв Ббб => Ааа Ббб Ввв');
		assert.strictEqual(sort('AAA cCc Bbb'), 'Aaa Bbb Ccc', 'AAA cCc Bbb => Aaa Bbb Ccc');
	});


	QUnit.test('Проверка работы функции на осмысленных предложениях', function (assert) {
		assert.strictEqual(sort('мама мыла раму'), 'Аамм Алмы Амру', );
		assert.strictEqual(sort('Съешь еще этих мягких французских булок да выпей же чаю'), 
		'Ад Азикнрсуфхц Ачю Бклоу Вейпы Гикмхя Еещ Еж Есшъь Итхэ');
		assert.strictEqual(sort('hello world'), 'Dlorw Ehllo');
		assert.strictEqual(sort('The quick brown fox jumps over the lazy dog'), 
		'Alyz Bnorw Cikqu Dgo Eht Eht Eorv Fox Jmpsu')
	});
});
