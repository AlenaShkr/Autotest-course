import { sum } from './src/js/sum.js';


// сложение
sum('a', true);
sum(true, 'a');
sum('a', 1);
sum(1, 'a');
sum(1, true);
sum(true, 1);
sum(true, false);
sum(1, 2);
sum(undefined, 1);
sum(undefined, undefined);
sum(NaN, 1);
sum(NaN, true);
sum('a', NaN);
sum(NaN, NaN);
sum('a', undefined);
