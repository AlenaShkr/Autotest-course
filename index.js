import { func } from './src/js/func.js';
import { convert } from './src/js/convert-type.js';


// сложение
func('+','a', true);
func('+',' ', true);
func('+', true, 'a');
func('+', true, '');
func('+', true, ' ');
func('+', 'a', 1);
func('+', 1, 'a');
func('+', 1, true);
func('+', true, 1);
func('+', true, false);
func('+', 1, 2);
func('+', undefined, 1);
func('+', undefined, undefined);
func('+', NaN, 1);
func('+', NaN, true);
func('+', 'a', NaN);
func('+', NaN, NaN);
func('+', 'a', undefined);
func('+', Infinity, 1);
func('+', Infinity, 'a');
func('+', Infinity, null);
func('+', Infinity, true);
func('+', null, 1);
func('+', null, 'a');
func('+', null, null);
func('+', null, true);

// умножение
func('*','a', true);
func('*', true, 'a');
func('*', true, '');
func('*', true, ' ');
func('*', 'a', 1);
func('*', 1, 'a');
func('*', 1, true);
func('*', true, 1);
func('*', true, false);
func('*', 1, 2);
func('*', undefined, 1);
func('*', undefined, undefined);
func('*', NaN, 1);
func('*', NaN, true);
func('*', 'a', NaN);
func('*', NaN, NaN);
func('*', 'a', undefined);
func('*', Infinity, 1);
func('*', Infinity, 'a');
func('*', Infinity, null);
func('*', Infinity, true);
func('*', null, 1);
func('*', null, 'a');
func('*', null, null);
func('*', null, true);

// деление

func('/','a', true);
func('/', true, 'a');
func('/', 'a', 1);
func('/', 1, 'a');
func('/', '', '');
func('/', 1, true);
func('/', 1, false);
func('/', true, 1);
func('/', true, false);
func('/', 1, 2);
func('/', undefined, 1);
func('/', undefined, undefined);
func('/', NaN, 1);
func('/', NaN, true);
func('/', 'a', NaN);
func('/', NaN, NaN);
func('/', 'a', undefined);
func('/', Infinity, 1);
func('/', Infinity, 'a');
func('/', Infinity, null);
func('/', Infinity, true);
func('/', null, 1);
func('/', null, 'a');
func('/', null, null);
func('/', null, false);

// явное преобразование
convert('number', '1');
convert('number', 1);
convert('number', 'a');
convert('number', true);
convert('number', false);
convert('number', null);
convert('number', undefined);
convert('number', Infinity);
convert('number', '');
convert('number', ' ');
convert('number', NaN);
convert('number', '12242kkkj');

convert('boolean', '1');
convert('boolean', 1);
convert('boolean', 'a');
convert('boolean', null);
convert('boolean', undefined);
convert('boolean', Infinity);
convert('boolean', '');
convert('boolean', ' ');
convert('boolean', NaN);
convert('boolean', '12242kkkj');

convert('string', '1');
convert('string', 1);
convert('string', null);
convert('string', undefined);
convert('string', Infinity);
convert('string', NaN);

convert('', 1);

