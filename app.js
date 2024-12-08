// Conditions

// 3 < 8 && 5 > 4 || 10 - 5 === 5 && 'hello' === 'hello' || 4 !== 4
// 7 === 7 || 9 * 2 < 20 && 5 + 5 === 10 || 6 !== '6'
// 15 >= 10 && 8 < 10 || 6 * 6 === 36 && 'abc' !== 'ABC' || 12 > 5
// 4 <= 5 && 6 * 2 === 12 || 'cat' === 'dog' && 7 === 7 || 5 !== '5'
// 20 / 4 === 5 && 9 > 7 || 3 !== '3' && 5 * 2 === 10 || 'A' === 'a'
// 6 + 4 === 10 && 8 > 5 || 'apple' !== 'orange' && 7 === 7 || 0 < 1
// 2 !== 2 && 4 < 5 || 'test' === 'test' && 10 >= 9 || 9 * 2 === 18

// 3 > 2 && 7 === 7 || 4 * 2 !== 9 && 'yes' !== 'no' || 6 === 6
// 5 < 10 && 3 !== 3 || 'hello' !== 'world' && 2 * 5 === 10 || 8 > 7
// 8 / 2 === 4 && 3 + 3 === 6 || 5 === 5 && 'green' === 'green' || 10 < 12


// new conditions

// 10 * 2 === 20 && 5 + 3 !== 8 || 7 > 10 && 'apple' === 'orange' || 4 === '4'
// 'cat' !== 'dog' && 5 > 3 || 12 / 4 === 3 && 9 < 4 || 8 === 8
// 15 !== 15 && 8 * 2 !== 20 || 'hello' === 'world' && 10 > 15 || 6 === '6'
// 9 > 8 && 3 + 7 === 11 || 4 !== '4' && 10 - 2 === 8 || 5 * 3 === 15
// 0 === false && 7 * 2 === 14 || 'True' === true && 5 !== '5' || 6 + 6 === 12
// 'a' !== 'A' && 3 * 3 === 9 || 4 < 4 && 10 / 2 === 5 || 8 === '8'
// 100 / 10 === 10 && 7 === 7 || 3 * 2 !== 7 && 'hello' === 'hello' || 9 > 12
// 20 / 4 === 5 && 3 + 5 === 8 || 8 === 8 && 'yes' !== 'YES' || 12 === '12'
// 6 > 5 && 4 * 2 !== 10 || 7 === 6 + 1 && 'no' === 'yes' || 100 !== 100
// 5 === '5' || 8 / 2 !== 5 && 4 + 6 === 11 || 9 === 8 + 1 && 'abc' !== 'ABC'


// true && false || 4 * 2 === 8 && 'hello' === 'hello' || 5 !== '5' && 3 < 5
// false && true || 'red' === 'blue' && 5 + 5 === 10 || 6 === '6' && 9 > 8
// 'dog' === 'dog' && 3 * 3 === 9 || false && 5 === 5 || 7 === '7'
// true || false && 4 * 4 === 16 || 'cat' !== 'dog' && 3 < 5 || 10 / 2 === 5
// false && true || 5 * 3 === 15 || 6 > 8 && 7 + 1 === 8 || 'test' === 'test'
// true && false || 8 / 2 === 4 && 3 + 2 === 5 || 9 !== 9 && 'green' === 'green'
// false && 5 > 10 || 7 === '7' && 4 * 5 === 20 || true && false
// true && 'hello' === 'hello' || 9 * 2 === 18 && 6 + 2 === 8 || false && 7 > 3
// 'apple' === 'apple' && 2 + 3 === 5 || false && true || 10 - 5 === 5 || 5 === '5'



// Solutions

// Condition 1:


// 3 < 8 && 5 > 4 || 10 - 5 === 5 && 'hello' === 'hello' || 4 !== 4

// ture && true || true && true || false
// true || true || false 
// true

// Condition 2:


// 7 === 7 || 9 * 2 < 20 && 5 + 5 === 10 || 6 !== '6'       // 6==='6'

// true || true && true || true
// true || true || true
// true


// Condition 3:


// 15 >= 10 && 8 < 10 || 6 * 6 === 36 && 'abc' !== 'ABC' || 12 > 5

// false && true || true && true || true
//  false || true || true
// true



// Condition 4:

// 4 <= 5 && 6 * 2 === 12 || 'cat' === 'dog' && 7 === 7 || 5 !== '5'

// true && true || false  &&  true || true
// true || false || true 
// true


// Condition 5:

// 20 / 4 === 5 && 9 > 7 || 3 !== '3' && 5 * 2 === 10 || 'A' === 'a'

//true && true || true && true || false
// true || true || false
// true

// Condition 6:

// 6 + 4 === 10 && 8 > 5 || 'apple' !== 'orange' && 7 === 7 || 0 < 1

// true && true || true && true || true
// true || true || true
// true

// Condition 7:

// 2 !== 2 && 4 < 5 || 'test' === 'test' && 10 >= 9 || 9 * 2 === 18

// false && true || true && true || true
// false || true || true
// true 

























// false || true && false || true && false  || 7 > 5 && 'apple' === 'apple'

// false || true && false || true && false  || true && true
// false || false || false || true 
// true