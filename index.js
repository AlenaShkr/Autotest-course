import { func } from './src/js/func.js';


// сложение
func('+','a', true);
func('+', true, 'a');
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

// умножение
func('*','a', true);
func('*', true, 'a');
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

// деление

func('/','a', true);
func('/', true, 'a');
func('/', 'a', 1);
func('/', 1, 'a');
func('/', 1, true);
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
