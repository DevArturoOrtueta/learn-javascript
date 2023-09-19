// Assigment

// Assignment	x = f()	x = f()
// Addition assignment	x += f()	x = x + f()
// Subtraction assignment	x -= f()	x = x - f()
// Multiplication assignment	x *= f()	x = x * f()
// Division assignment	x /= f()	x = x / f()
// Remainder assignment	x %= f()	x = x % f()
// Exponentiation assignment	x **= f()	x = x ** f()
// Left shift assignment	x <<= f()	x = x << f()
// Right shift assignment	x >>= f()	x = x >> f()
// Unsigned right shift assignment	x >>>= f()	x = x >>> f()
// Bitwise AND assignment	x &= f()	x = x & f()
// Bitwise XOR assignment	x ^= f()	x = x ^ f()
// Bitwise OR assignment	x |= f()	x = x | f()
// Logical AND assignment	x &&= f()	x && (x = f())
// Logical OR assignment	x ||= f()	x || (x = f())
// Nullish coalescing assignment	x ??= f()	x ?? (x = f())

// Asignacion de propiedades

const obj = {};

obj.x = 3;
console.log(obj.x); // Prints 3.
console.log(obj); // Prints { x: 3 }.

const key = "y";
obj[key] = 5;
console.log(obj[key]); // Prints 5.
console.log(obj); // Prints { x: 3, y: 5 }.

// Destructuracion

const foo = ["one", "two", "three"];

const one = foo[0];
const two = foo[1];
const three = foo[2];

const persona = {
    nombre: 'Arturo',
    apellido: 'Ortueta',
    edad: 27
}

const {nombre, apellido, edad} = persona;

// Comparison operators
// Equal (==)	Returns true if the operands are equal.	3 == var1
// "3" == var1

// 3 == '3'
// Not equal (!=)	Returns true if the operands are not equal.	var1 != 4 var2 != "3"
// Strict equal (===)	Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS.	3 === var1
// Strict not equal (!==)	Returns true if the operands are of the same type but not equal, or are of different type.	var1 !== "3" 3 !== '3'
// Greater than (>)	Returns true if the left operand is greater than the right operand.	var2 > var1 "12" > 2
// Greater than or equal (>=)	Returns true if the left operand is greater than or equal to the right operand.	var2 >= var1 var1 >= 3
// Less than (<)	Returns true if the left operand is less than the right operand.	var1 < var2 "2" < 12
// Less than or equal (<=)	Returns true if the left operand is less than or equal to the right operand.	var1 <= var2 var2 <= 5

// Arithmetic operators
// Remainder (%)	Binary operator. Returns the integer remainder of dividing the two operands.	12 % 5 returns 2.
// Increment (++)	Unary operator. Adds one to its operand. If used as a prefix operator (++x), returns the value of its operand after adding one; if used as a postfix operator (x++), returns the value of its operand before adding one.	If x is 3, then ++x sets x to 4 and returns 4, whereas x++ returns 3 and, only then, sets x to 4.
// Decrement (--)	Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator.	If x is 3, then --x sets x to 2 and returns 2, whereas x-- returns 3 and, only then, sets x to 2.
// Unary negation (-)	Unary operator. Returns the negation of its operand.	If x is 3, then -x returns -3.
// Unary plus (+)	Unary operator. Attempts to convert the operand to a number, if it is not already.	
// +"3" returns 3.

// +true returns 1.

// Exponentiation operator (**)	Calculates the base to the exponent power, that is, base^exponent	2 ** 3 returns 8.
// 10 ** -1 returns 0.1.

// Bitwise Operators
// Bitwise AND	a & b	Returns a one in each bit position for which the corresponding bits of both operands are ones.
// Bitwise OR	a | b	Returns a zero in each bit position for which the corresponding bits of both operands are zeros.
// Bitwise XOR	a ^ b	Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.]
// Bitwise NOT	~ a	Inverts the bits of its operand.
// Left shift	a << b	Shifts a in binary representation b bits to the left, shifting in zeros from the right.
// Sign-propagating right shift	a >> b	Shifts a in binary representation b bits to the right, discarding bits shifted off.
// Zero-fill right shift	a >>> b	Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in zeros from the left.

// Bitwise logical operators
// 15 & 9	9	1111 & 1001 = 1001
// 15 | 9	15	1111 | 1001 = 1111
// 15 ^ 9	6	1111 ^ 1001 = 0110
// ~15	-16	~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000
// ~9	-10	~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110

// Bitwise shift operators
// Left shift(<<)	This operator shifts the first operand the specified number of bits to the left. Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right.	9<<2 yields 36, because 1001 shifted 2 bits to the left becomes 100100, which is 36.
// Sign-propagating right shift (>>)	This operator shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Copies of the leftmost bit are shifted in from the left.	9>>2 yields 2, because 1001 shifted 2 bits to the right becomes 10, which is 2. Likewise, -9>>2 yields -3, because the sign is preserved.
// Zero-fill right shift (>>>)	This operator shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Zero bits are shifted in from the left.	19>>>2 yields 4, because 10011 shifted 2 bits to the right becomes 100, which is 4. For non-negative numbers, zero-fill right shift and sign-propagating right shift yield the same result.

// Logical operators
// Logical AND (&&)	expr1 && expr2	Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.
// Logical OR (||)	expr1 || expr2	Returns expr1 if it can be converted to true; otherwise, returns expr2. Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.
// Logical NOT (!)	!expr	Returns false if its single operand that can be converted to true; otherwise, returns true.
// Examples of expressions that can be converted to false 
