Discrete Structures - CECS228 - Homework 2

Chapter 2:

-   2.2.3 (B, C, E), 2.2.5 (C, E, H)
-   2.3.1 (C, D), 2.3.2 (A, C), 2.3.3 (A, B)
-   2.4.2 (D), 2.4.3 (D), 2.4.4 (M, O)
-   2.5.1 (D), 2.5.2 (B), 2.5.5 (E, F)
-   2.6.1 (B), 2.6.5, 2.6.6 (B, H)
-   2.7.1 (D), 2.7.2 (F), 2.7.3 (E)

Chapter 3:

-   3.2.6
-   3.3.2 (B), 3.3.3 (E, F)
-   3.4.3 (B, C, D)
-   3.5.1, 3.5.3 (E), 3.5.4 (D)
-   3.6.6 (dD, E), 3.6.7 (A, D, G), 3.6.8 (B)
-   3.7.3

#### 2.2.3 - Find a counterexample

(b) If n is an integer and n<sup>2</sup> is divisible by 4, then n is divisible by 4.

$$
	\displaylines{
		let\ x=2 \\
		2^2 = 4 \\
		4\ \%\ 4 = 0 \\ 
		2\ \%\ 4 = 2
	}
$$
- when x = 2, n<sup>2</sup> is divisible by 4, but n is not.
- note: the "%" is the modulus operator, which returns the remainder of a / b.

(c) For every positive integer x, x<sup>3</sup> < 2<sup>x</sup>.

$$
	\displaylines{
		let\ x = 3 \\
		3^3 = 27 \\
		2^{3} = 8 \\
		27 < 8 ≡ false
	}
$$
- when x = 3, x<sup>3</sup> is 27 and 2<sup>3</sup> is 8. Since 27 is greater than 8, the statement is false.

(e) The multiplicative inverse of a real number x, is a real number y such that xy = 1. Every real number has a multiplicative inverse.

$$
	\displaylines{
		let\ x = ℝ\ and\ y = 0 \\
		xy = x(0) = 0 \\
		0 = 1 ≡ false
	}
$$
- zero does not have a multiplicative inverse.
  
#### 2.2.5 - Proving existential statements

(c)  There are integers m and n such that:
$$
	\displaylines{
		\sqrt{ m + n} = \sqrt{m} + \sqrt{n}
	}
$$
- when m = 0 and n = 0, both sides become zero, and the expression is true

$$
	\displaylines{
		(\sqrt{m + n})^2 = ( \sqrt{m} + \sqrt{n} )^2 \\
		m + n = m + n + \sqrt{mn} \\
		0 = \sqrt{mn} \\
		0 = mn	
	}
$$
- in fact when either m = 0 or n = 0, the expression is true

(e)  There are three positive integers, x, y, and z, that satisfy x<sup>2</sup> + y<sup>2</sup> = z<sup>2</sup>

- This is the Pythagorean theorem, which describes the sides of a right triangle.
- The question is asking for a "Pythagorean triple", which is a set of positive integers that make the expression true.
- The smallest Pythagorean triple is: 3, 4, 5
$$
	\displaylines{
		3^2 + 4^2 = 5^2 \\
		9 + 16 = 25 \\
		25 = 25 ≡ true
	}
$$

(h)  For every pair of real numbers, x and y, there exists a real number z such that x - z = z - y.

$$
	\displaylines{
		x - z = z - y \\
		x + y = 2z \\
		\frac{ x + y } { 2 } = z
	}
$$
- When z = (x + y) / 2 the expression is always true.

#### 2.3.1 Fill in the words to form a complete proof.

(c)  Theorem: If n is an odd integer, then 4 divides n<sup>2</sup> - 1.

$$
\bbox[border: 1px solid; padding: 30px;]{
\style{ padding: 30px;}{
	\displaylines {
		n = 2k+1 \\
		n^2 - 1 \\ \\
		\class{mathjax--hr}{} \\
		\begin{align}
			&= (2k+1)^2-1 \\ 
			&= (4k^2 + 4k + 1) - 1 \\ 
			&= 4(k^2 + k)
		\end{align}
}}}
$$

(d) Theorem: The sum of the squares of any two consecutive integers is odd.


$$
\bbox[border: 1px solid; padding: 30px;]{\style{}{
\displaylines{
	\class{mathjax--left-align}{
		\text{Proof:}
	} \\
	\class{mathjax--hr}{} \\
	\begin{align}
		&  x^2 + (x+1)^2 \\
		&= x^2 + (x^2 + 2x + 1) \\
		&= 2x^2 + 2x + 1 \\
		&= 2(x^2 +x) + 1
		
	\end{align} \\ \\
	∴ ~~ \text{Bird culture.} ~~■
}}}
$$

#### 2.3.2 Find the mistake in the proof - integer division

**Theorem:** If w, x, y, z are integers where w divides x and y divides z, then wy divides xz.

For each "proof" of the theorem, explain where the proof uses invalid reasoning or skips essential steps.

(a) Proof

Let w, x, y, z be integers such that w divides x and y divides z. Since, by assumption, w divides x, then x = kw for some integer k and w ≠ 0. ==Since, by assumption, y divides z, then z = ky for some integer k and y ≠ 0==. Plug in the expression kw for x and ky for z in the expression xz to get

$xz = (kw)(ky) = (k^2)(wy)$

Since k is an integer, then k<sup>2</sup> is also an integer. Since w ≠ 0 and y ≠ 0, then wy ≠ 0. Since xz equals wy times an integer and wy ≠ 0, then wy divides xz. ■

Answer: the variable k is named twice.

(c) Proof

Let w, x, y, z be integers such that w divides x and y divides z. Since, by assumption, w divides x, then x = kw for some integer k and w ≠ 0. Since, by assumption, y divides z, then z = jy for some integer j and y ≠ 0. Plug in the expression kw for x and jy for z in the expression xz to get

$xz = (kw)(jy)$

Since w ≠ 0 and y ≠ 0, then wy ≠ 0. Since xz equals wy times an integer and wy ≠ 0, then wy divides xz. ■

Answer: left out (wy) from the expression.

$$
\frac{xz}{wy} = \frac{(kw)(jy)}{wy}
$$

#### 2.3.3 Find the mistake in the proof - odd and even numbers

**Theorem:** If n and m are odd integers, then n<sup>2</sup> + m<sup>2</sup> is even

For each "proof" of the theorem, explain where the proof uses invalid reasoning or skips essential steps.

(a) Proof

m = 7 is odd because 7 = 2 · 3+1. 
n = 9 is odd because 9 = 2 · 4 + 1.

$7^2 + 9^2 = 49 + 81 = 130 = 2 \cdot 65$

Since 72 + 92 is equal to 2 times an integer, 72 + 92 is even. 
Therefore the theorem is true. ■

Answer: generalizes from example, and does not establish the definitions for even or odd.

(b) Proof

Let n and m be odd integers. 

Since n is an odd integer, then n = 2k+1. 
Since m is an odd integer, then m = 2j+1. 

Plugging in 2k+1 for n and 2j+1 for m into the expression n<sup>2</sup> + m<sup>2</sup> yeilds
$$
\begin{align}
	n^2 + m^2 &= (2k+1)^2 + (2j+1)^2 \\
	&= 4k^2 + 4k + 1 + 4j^2 + 4j + 1 \\
	&= 2(2k^2 + 2k + 2j^2 + 2j + 1) \\
\end{align}
$$

Since k and j are integers, $2k^2 + 2k + 2j^2 + 2j + 1$ is also an integer. Since n<sup>2</sup> + m<sup>2</sup> is equal to two times an integer, then n<sup>2</sup> + m<sup>2</sup> is an even integer. ■

Answer: did not provide the definition for an even number, 2k, and did not show that $2(2k^2 + 2k + 2j^2 + 2j + 1)$ is of the form 2k, when k is used to subsitute the enclosed polynomial.

#### 2.4.2 Proving statements about rational numbers with direct proofs

Prove each of the following statements using a direct proof.

(d) If x and y are rational numbers then $3x^2 + 2y$ is also a rational number.



$$
\bbox[border: 1px solid; padding: 30px;]{\style{}{
\displaylines{
	\class{mathjax--left-align}{
		\text{Proof:}
	} 
	\\
	\class{mathjax--center-align}{
		\text{x and y are rational, then } 3x^2 + 2y \text{ is also rational.}
	} 
	\\
	\class{mathjax--hr}{} \\
	\class{mathjax--left-align}{
		\text{Assume: }
	} 
	\\
	\class{mathjax--left-align}{
		\quad{}\text{x and y are rational numbers.}
	}
	\\
	\class{mathjax--left-align}{
		\text{By definition: } 
	} 
	\\
	\class{mathjax--left-align}{
		x = \frac{a}{b} \text{ and } y = \frac{c}{d}  
		\text{, where } b ≠ 0 \text{ and } d ≠ 0.
	}
	\\ \\
	\class{mathjax--hr}{} \\
	 \\
	\begin{align}
		3x^2 + 2y 
		&= 3(\frac{a}{b})^2 + 2(\frac{c}{d})
		\\
		&= 3(\frac{a^2}{b^2}) + 2(\frac{c}{d})
		\\
		&= (3a^2d + 2b^2c)\frac{1}{b^2d}
		\\ \\
		\class{mathjax--center-align} {
			\displaylines{
				\text{Since a, b, c, d are integers where }
				b ≠ 0 \text{ and } d ≠ 0, \\
				3a^2d + 2b^2c \text{ and } b^2d \text{ are both rational numbers.}
			}
		} \\ \\ \\
		3x^2 + 2y &= (m)\frac{1}{n}
	
	\end{align} \\
	∴ ~~ \text{Since m and n are rational numbers, } \\
	3x^2 + 2y \text{ must be a rational number.} ~~■
}}}
$$


#### 2.4.3 Proving algebraic statements with direct proofs

- Prove each of the following statements using a direct proof.

(d) If x is a real number such that 0 < x < 1, then $\frac{1}{x(1 - x)} ≧ 4$.

$$
\bbox[border: 1px solid; padding: 30px;]{\style{}{
\displaylines{
	\class{mathjax--left-align}{
		\text{Prove:}
	} \\
	\class{mathjax--center-align}{
		\text{ If x is a real number such that 0 < x < 1, then $\frac{1}{x(1 - x)} ≧ 4$.}
	} \\ \\ 
	\class{mathjax--hr}{} \\
	\begin{align}
		\frac{1}{x(1-x)} &≧ 4 \\
		1 &≧= 4x(1 - x) \\ 
		1 &≧ 4x - 4x^2 \\
		0 &≧ 4x - 4x^2 - 1\\
		0 &≦ 4x^2 - 4x - 1\\
		0 &≦ (2x - 1)^2 \\
		0 &≦ (m)^2 \\
		
	\end{align} \\ \\
	∴ ~~ \text{Since $m^2$ must be non-negative,} \\
	\frac{1}{x(1 - x)} ≧ 4 \text{ must be true.} ~~■
}}}
$$


#### 2.4.4 Showing a statement is true or false by direct proof or counterexample

Determine whether the statement is true or false. If the statement is true, give a proof. If the statement is false, give a counterexample.

(m) If x, y, and z are integers and x|(y+z), then x|y or x|z.

False

Let x = 2, y = 3, and z = 3

2|(3 + 3) = 2|6
2∤3

- 2 divides 3+3, but 2 does not divide 3.

(o)  If x and y are integers and x|y<sup>2</sup>, then x|y.

False

Let x = 4 and y = 2.
4|2<sup>2</sup> = 4|4
4∤2

- 4 divides 4, but 4 does not divide 2.


#### 2.5.1 Proof by contrapositive of statements about odd and even integers

- Prove each statement by contrapositive

(d) For every integer $n$, if $n^2 - 2n +7$ is even, then $n$ is odd.

Define
	Even: for integers k, 2k is even.
	Odd: for integers k, 2k + 1 os odd.

Contrapositive
For every integer $n$, if $n$ is not odd, then $n^2 - 2n +7$ is not even.

Reworded
For every integer $n$, if $n$ is even, then $n^2 - 2n +7$ is odd.


$$
\bbox[border: 1px solid; padding: 30px;]{\style{}{
\displaylines{
	\class{mathjax--left-align}{
		\text{Proof}
	} \\
	\class{mathjax--center-align}{
		\text{For every integer $n$, if $n$ is even, then $n^2 - 2n + 7$ is odd.}
	} \\ \\
	\class{mathjax--left-align}{
		\text{let $n$ = 2k}
	} \\
	\class{mathjax--hr}{} \\
	\begin{align}
		n^2 - 2n +7 &= (2k)^2 - 2(2k) + 7 \\
		&= 4k^2 - 4k + 1 + 6 \\
		&= (2k - 1)^2 + 6 \\
		&= (m)^2 + 2(3)
	\end{align} \\ \\
	\class{mathjax--left-align}{
		∴ 
	}
	\\
	\class{mathjax--left-align}{
		\text{Since m is of the form $2k - 1$, it cannot be even, so it} 
	}
	\\
	\class{mathjax--left-align}{
		\text{must be odd.}
	}
	\\ \\
	\class{mathjax--left-align}{
		\text{Since $2(3)$ is of the form 2k, it must be even.}
	}
	\\ \\
	\class{mathjax--left-align}{
		\text{The sum of an even and an odd number is odd, so the}
	} \\
	\class{mathjax--left-align}{
		\text{expression $n^2 - 2n + 7$ must be odd when $n$ is even.}~~■
	}
}}}
$$



#### 2.5.2 Proof by contrapositive of statements about integer division

Prove each statement by contrapositive

(b) For every pair of real numbers $x$ and $y$ if $x + y$ is irrational, then $x$ is irrational or $y$ is irrational.
		
Define:
	G(n): n is irrational
	R(n): n is rational
	R(n) = ¬G(n)
	
Statement:
	G(x + y) → (G(x) ∨ G(y))

Contrapositive:
	¬(G(x) ∨ G(y)) → ¬G(x + y)
	(¬G(x) ∧ ¬G(y)) → ¬G(x + y)
  (R(x) ∧ R(y)) → R(x + y)

$$
\bbox[border: 1px solid; padding: 40px;]{
\displaylines {
	\class{mathjax--left-align} {
		\text{Theorem:}
	} \\
	\class{mathjax--left-align} {
		\quad{}\text{For every pair of real numbers $x$ and $y$ if $x + y$ is irrational,}
	} \\ 
	\class{mathjax--left-align} {
		\quad{}\text{then $x$ is irrational or $y$ is irrational.}
	} \\
	
	\class{mathjax--hr}{} \\
	\class{mathjax--left-align} {
		\text{Proof:}
	} \\
	\class{mathjax--left-align} {
		\quad{}\text{Assume that x and y are rational numbers. There exist integers a, b, c, d}
	} \\
	\class{mathjax--left-align} {
		\quad{}\text{such that $x = \frac a b$ and $y = \frac c d$, where $b ≠ 0$ and $d ≠ 0$.}
	}
	\\ \\
	\begin{align}
		(x + y) &= \frac a b + \frac c d 
		&& \text{substitution}
		\\ \\
		
		&= \frac{(ad + bc)}{bd} 
		&& \text{factor}
		\\ \\
		&= \frac m n
		&& \text{replacement}
	\end{align}
	\\ \\
	\class{mathjax--left-align} {
		∴ ~\text{Since $a$, $b$, $c$, and $d$ are integers, $ad + bc$ must be some integer $m$.}
	} \\ 
	\class{mathjax--left-align} {
		~~~~~\text{Since $b ≠ 0$ and $d ≠ 0$, $bd$ must be some non-zero integer $n$. }
	} \\ \\
	\class{mathjax--right-align} {
		~~~~\text{As shown, $x + y$ must be rational.} ~~■
	}
}} 


$$

#### 2.5.5 Proving statements using a direct proof or by contrapositive

Prove each statement using a direct proof or proof by contrapositive. One method may be much easier than the other.

(e) If n and m are integers such that n<sup>2</sup>+m<sup>2</sup> is odd, then m is odd or n is odd.

<u>Contrapostive</u>
If $n$ and $m$ are integers such that $m$ is even and $n$ is even, then $n^2 + m^2$ is even.

$$
\bbox[border: 1px solid; padding: 30px;]{\style{}{
\displaylines{
	\class{mathjax--left-align}{
		\text{Proof}
	} \\	\\	
	\class{mathjax--left-align}{
		\text{Let m be even and n be even, then there exist }
	} \\
	\class{mathjax--left-align}{
		\text{integers a and b such that:}
	} \\
	\text{$m = 2a$ and $n = 2b$.} \\ \\

	\class{mathjax--hr}{} \\
	
	\begin{align}
		n^2 + m^2 &= (2b)^2 + (2a)^2 && substitution\\
		&= 4b^2 + 4a^2 && math\\
		&= 2(2b^2 + 2a^2) && more\ math\\
		&= 2(k) && even\ form\\
	\end{align} \\ \\
	∴ ~~ \text{Since $2k$ is even, $n^2 + m^2$ must be even.} ~~■
}}}
$$


(f) If $x$, $y$, and $z$ are integers and $x+z$ and $y+z$ are both even, then $x+y$ is also even.


$$
\bbox[border: 1px solid; padding: 30px;]{\style{}{
\displaylines{
	\class{mathjax--left-align}{
		\text{Direct Proof}
	} \\
	\class{mathjax--center-align}{
		\quad{}\text{Assume $x + z$ and $y + z$ are both even integers.}
	} \\ \\
	\class{mathjax--hr}{} \\
	\begin{align}
		\text{let} \\ 
		x + z &= 2m && by\ definition\\
		y + z &= 2n && by\ definition \\
		x + y + 2z &= 2m + 2n && add\ equations\\
		x + y &= 2m + 2n - 2z && grouping\\
		x + y &= 2(m + n -z) && factor\ 2\\ 
		x + y &= 2(k) && replace\ with\ k
	\end{align} \\ \\
	∴ ~~ \text{Since $2k$ is an even number $x + y$ must be an even number.} ~~■
}}}
$$

#### 2.6.1 Rational and irrational numbers.

You can use the fact that $\sqrt{2}$ is irrational to answer the questions below.

(b) Prove that $2-\sqrt{2}$ is irrational.

$$
\bbox[border: 1px solid; padding: 30px;]{\style{}{
\displaylines{
	\class{mathjax--left-align}{
		\text{Proof by Contradiction}
	} \\
	\class{mathjax--center-align}{
		\text{$2-\sqrt{2}$ is irrational.}
	} \\ \\
	\class{mathjax--center-align}{
	  \text{Assume that $2 - \sqrt{2}$ is rational.} 
	} \\
	\class{mathjax--hr}{} \\
	\begin{align}
		∴ ~~ 2 - \sqrt{2} &= \frac{a}{b} 
		\\
		\sqrt{2} &= 2 - \frac{a}{b}
		\\
		2 &= (2 - \frac{a}{b})^2 
		\\
		2 &= (\frac{c}{d})^2 
		\\
		2 &= \frac{c^2}{d^2}
		\\
		2d^2 &= c^2 && \text{eq \#1}
	\end{align} 
	\\ \\
	\class{mathjax--left-align} {
		~~~~~~ \text{Since $2d^2$ is in the form 2k, $c^2$ is even,} 
	} \\
	\class{mathjax--left-align} {
		~~~~~~ \text{and so $c$ must be even.} 
	} \\
	\class{mathjax--center-align} {
		c^2 = (2k)^2 = 4k^2    \quad{}\quad{} \text{eq \#2}
	}
	\\ \\
	\class{mathjax--center-align} {
		\textcolor{gray}{(eq \#1 + eq \#2)}
	}
	\\
	\class{mathjax--center-align} {
		2d^2 + c^2 = 4k^2 + c^2 
	}
	\\ 
	\class{mathjax--center-align} {
		2d^2 = 4k^2
	}
	\\ 
	\class{mathjax--center-align} {
		d^2 = 2k^2
	}
	\\ \\
	\class{mathjax--left-align} {
		~~~~~~ \text{Since $d^2 = 2k^2$ is in the even form, $d^2$ must be even. } 
	} \\
	\class{mathjax--left-align} {
		~~~~~~ \text{As shown, $d$ and $c$ are both even and divisible by 2.} 
	} \\
	\class{mathjax--left-align} {
		∴ ~~ \text{The fraction $\frac a b$ cannot be in its "lowest terms"}
	}
	\\
	\style{display: block; min-height: 10px;}{}
	\class{mathjax--left-align} {
		~~~~~~ \text{which contradicts our assumption.} ~~■
	} 
	
}}}
$$


#### 2.6.5 Proof by contrapositive vs. proof by contradiction.

For each statement, write what would be assumed and what would be proven in a proof by contrapositive of the statement. Then write what would be assumed and what would be proven in a proof by contradiction of the statement.

(a) If x and y are a pair of consecutive integers, then x and y have opposite parity.

<u>Contrapostive</u>
- If x and y have the same parity, then x and y are not consecutive integers.
- To form this proof, show that x and y are not consecutive.

<u>Contradiction</u>
- The numbers x and y are consecutive integers, and x and y have the same parity.
- To form this proof, show that x and y do not have the same parity.

(b) For all integers $n$, if $n^2$ is odd, then $n$ is also odd.

<u>Contrapositive</u>
- If $n$ is even, then $n^2$ is even.
- To form this proof, show that $n^2$ is even.

<u>Contradiction</u>
- The number $n^2$ is odd and $n$ is even.
- To form this proof, show that $n$ is odd.

#### 2.6.6 Proofs by contradiction.

Give a proof for each statement.

(b) If a person buys at least 400 cups of coffee in a year, then there is at least one day in which the person has bought at least two cups of coffee.

<u>Contradiction</u>
A person can buy 400 cups of coffee in a year, and there is no day in which the person has bought at least two cups of coffee.

Assume that a person buys 400 cups of coffee in a year.

In a leap year, with 366 days, a person must by $\frac {400} {366}$ cups of coffee per day to purchase 400 cups of coffee in a year.

However, since there is no day in which in which a person buys more than 1 cup of coffee, the maximum number of cups they can purchase is 366. This contradicts the assumption that this person bought 400 cups of coffee.

==(h) For all integers== $x$ and $y$, $x^2 - 4y ≠ 2$

- You can use the following fact in your proof:
  If $n^2$ is an even integer, then $n$ is also an even integer.

<u>Contradiction</u>
For all integers x and y, $x^2 - 4y = 2$

$$
\displaylines{
\text{Let $x$ be an even number, such that $x = 2k$} \\ \\
\begin{align}
	x^2 -4y &= 2 \\
	(2k)^2 &= 4y + 2 \\
	4k^2 &= 4y + 2\\
	2k^2 &= 2y + 1 \\
	2m &= 2y + 1 && replace\ k^2\ with\ m\\
\end{align} \\ \\
\class{mathjax--left-align} {
	∴ ~~~ \text{Since $2m$ is an even number, and $2y + 1$ is an odd number,}
}
\\
\class{mathjax--left-align} {
	~~~~~~\text{ there exists a contradiction. ■}
}
}
$$

#### 2.7.1 Proofs by cases - statements about numbers.

Prove each statement.

(d) If x is a real number such that $x^2 - 3x  - 10 \lt 0$, then $-2 \lt x \lt 5$.

$$
\bbox[border: 1px solid; padding: 40px;]{

\displaylines{
\class{mathjax--left-align}{
	\text{Given: }
} \\

\begin{aligned}
x^2 - 3x - 10 &< 0 \\
(x - 5)(x + 2) &< 0
\end{aligned}
\\ \\
\class{mathjax--hr}{} \\
\class{mathjax--left-align}{
	\text{Case 1: $(x-5) < 0$ and $(x + 2) > 0$}
}
\\
\begin{aligned}
	x - 5 &< 0 \\
	x &< 5
\end{aligned}
~~~~~~
\begin{aligned}
	x + 2 &> 0 \\
	x &> -2
\end{aligned} \\
\class{mathjax--left-align}{
∴~\text{According to this case:} -2 < x < 5 
}
\\ \\
\class{mathjax--left-align}{
	\text{Case 2: $(x-5) > 0$ and $(x + 2) < 0$} 
}
\\
\begin{aligned}
	x - 5 &> 0 \\
	x &> 5
\end{aligned}
~~~~~~
\begin{aligned}
	x + 2 &< 0 \\
	x &< -2
\end{aligned} \\
\class{mathjax--left-align}{
∴ ~\text {According to this case: $x > 5$ and $x<-2$},
}\\
\class{mathjax--left-align}{
~\quad{}\text{however there is no real number x that can}
}\\
\class{mathjax--left-align}{
~\quad{}\text{satisfy both inequalities, so this case is invalid.}
}\\ \\
\class{mathjax--hr}{} 
\\
\class{mathjax--left-align}{
	\text{As shown, the only possible values for x, when }
}\\
\class{mathjax--left-align}{
	x^2 - 3x - 10 > 0 \text{, is } -2 < x < 5.~~■
}
}}
$$




#### 2.7.2 Proofs by cases - even/odd integers and divisibility.

Prove each statement.

(f) Let $x$ and $y$ be two integers. if $xy$ is not an integer multiple of 5, then neither x nor y is an integer multiple of $5$.

Without loss of generality, assume that $x$ is an integer multiple of $5$. 
Then  $x = 5a$ for some integer $a$. 
$$ 
	∴ ~~ xy = (5a)y = 5(ay)
$$

Since $ay$ is an integer, it follows that $xy$ is an integer multiple of $5$. Therefore, if either $x$ or $y$ is an integer multiple of $5$, then $xy$ is an integer multiple of $5$. 


#### 2.7.3 Proofs by cases - absolute value.

Prove each statement.

(e) For any real number $x$, $|x-6| + x \gt 3$.

Case 1:  $x \geq 6$
Since $x \geq 6$, $|x-6|$ is a non-negative number.
$$
\displaylines{
	∴  |x-6| = x-6 \\ \\
	\begin{aligned}
		|x-6| + x &> 3 \\
		(x-6) + x &> 3 \\
		2x &> 9 \\
		x &> \frac 9 2 && \text{The inequality holds for all x ≧ 6}\\
	\end{aligned}
}
$$

Case 2: $x < 6$
Since $x < 6$, $|x-6|$ is a negative number.
$$
 \displaylines{
	 ∴ ~~~|x-6| = -(x-6) \\ \\
	 \begin{aligned}
		-(x-6) + x &> 3 \\
		-x + 6 + x &> 3 \\
		6 &> 3 && \text{The inequality holds for all x < 6}
	 \end{aligned}
 }
$$
∴ Since both cases hold true, the claim must be true. ■

#### 3.2.6 Power sets of power sets.
Express each set using roster notation. Then give the cardinality of the set.

<div style="display: inline-block; border: 1px solid;">
	<div style="white-space: pre-line; padding: 40px; padding-top: 0px;">
		<u>Theorem</u>
		Let A be a finite set of cardinality n. 
		The cardinality of the power set of A is 2<sup>n</sup>, 
		or |P(A)|=2<sup>n</sup>.
	</div>
</div>	

- The empty set is defined as a set with no elements.
- The cardinality of the empty set |∅| is zero.
- P({1, 2}) = { ∅, {1}, {2}, {1, 2}}

(a) P(∅) = {∅}
|P(∅)| = 2<sup>0</sup> = 1

(b) P(P(∅)) = P({∅}) = { ∅, {∅} }

|P(P(∅))| = 2<sup>1</sup> = 2

(c) P(P(P(∅)))

P({ ∅, {∅} }) = { 
	∅, 
	{ ∅ }, 
	{ {∅} }, 
	{ ∅, {∅} }
}

|P(P(P(∅)))| = 2<sup>2</sup> = 4

#### 3.3.2 Unions and intersections of sequences of sets.
Use the definition for A<sub>i</sub> to answer the questions.
For i ∈ **Z**<sup>+</sup>, A<sub>i</sub> is the set of all positive integer multiples of i.

(b) Describe the following set using roster notation:
$$ 
\left( \bigcup_{i=2}^5 A_i \right) \cap \{ x \in {\bf Z}: 1 \le x \le 20\}
$$
A = {2, 4, 6, 8, 10 }

{2, 4, 6, 8, 10 } ∩ { 1, 2, 3, ..., 19, 20 }

Answer: {2, 4, 6, 8, 10 } 

#### 3.3.3 Unions and intersections of sequences of sets, part 2.
Use the following definitions to express each union or intersection given. You can use roster or set builder notation in your responses, but no set operations. For each definition, i ∈ **Z**<sup>+</sup>.

$A_i = \{ i^0, i^1, i^2 \}$
$B_i = \{ x \in {\bf R}: -i \le x \le  1/i\}$
$C_i = \{ x \in {\bf R}: -1/i \le x \le  1/i\}$

$$
 \bigcap_{i=1}^n A_i = A_1 \cap A_2 \cap \cdots \cap A_n = \{ x: x \in A_i ~~\mbox{for all}~~i
~~\mbox{such that }~~ 1 \le i \le n \}
$$
$$
\bigcup_{i=1}^n A_i = A_1 \cup A_2 \cup \cdots \cup A_n = \{ x: x \in A_i ~~\mbox{for some}~~i
~~\mbox{such that }~~  1 \le i \le n \}
$$

(e) $\bigcap_{i = 1}^{100} C_i$

= { -1 ≦ x ≦ 1 } ∩ $\cdots$ ∩  { -1/99 ≦ x ≦ 1/99 } ∩ { -1/100 ≦ x ≦ 1/100 }

- Since the range of x is narrowing as $i$ increases, the final intersection must be the smallest possible subset of all sets.

∴ $\bigcap_{i = 1}^{100} C_i$ = {  x ∈ ℝ :  -1/100 ≦ x ≦ 1/100 }

(f) $\bigcup_{i = 1}^{100} C_i$

= { -1 ≦ x ≦ 1 } ∪ $\cdots$ ∪  { -1/99 ≦ x ≦ 1/99 } ∪ { -1/100 ≦ x ≦ 1/100 }

- Since the range of x never expands, and never contracts, the final union must be the largest possible set of all sets.

∴ $\bigcup_{i = 1}^{100} C_i$ = {  x ∈ ℝ :  -1 ≦ x ≦ 1 }

#### 3.4.3 Set operations
Define the following sets.
-   A = {x ∈ **Z**: x is a multiple of 3}
-   B = {3, 5, 7, 9}
-   C = {2, 3, 4, 5}

Indicate whether each statement is true or false.

(b) |A ∩ B| = |A ∩ C|
      |{3, 9}| = |{3}|
              2 = 1
False

(c) A ∩ C ⊆ A ∩ B
         {3} ⊆ {3, 9}
True

(d) C - B ⊆ A
    {2, 4} ⊆ A
False

#### 3.5.1 Name the set identity.
Name the set identity that is used to justify each of the identities given below.

(a)  <span style="display: inline-block;">(B ∩ C) ∪ <span style="text-decoration: overline">B ∩ C</span> = <i>U</i>
</span>
Complement Law


(b)  <span style="text-decoration: overline">A ∪ (A ∩ B)</span> = <span style="text-decoration: overline">A</span>
Absorption Law

(c)  A ∪ (<span style="text-decoration: overline">B ∩ C</span>) = A ∪ (<span style="text-decoration: overline">B</span> ∪ <span style="text-decoration: overline">C</span>)
De Morgan's Law

(d) $(B \cap \overline{\overline{C}}) = B \cap C$
Double Complement Law

(e) (B - A) ∪ (B - A) = (B - A)
Idempotent Law

(f) ((A ⊕ B) - C) ∩ ∅ = ∅
Domination Law

#### 3.5.3 Showing set equations that are not identities.

A set equation is not an identity if there are examples for the variables denoting the sets that cause the equation to be false. 

For example A ∪ B = A ∩ B is not an identity because if A = {1, 2} and B = {1}, then A ∪ B = {1, 2} and A ∩ B = {1}, which means that A ∪ B ≠ A ∩ B.

Show that each set equation given below is not a set identity.

(e) A ∪ B = A ⊕ B
{2} ∪ {2} = {2} ⊕ {2}
{2} = { }
This is a contradiction.

#### 3.5.4 Proving set identities with the set difference operation.

The set subtraction law states that A - B = A ∩ <span style="text-decoration: overline">B</span>. 

Use the set subtraction law as well as the other set identities given in the table to prove each of the following new identities. Label each step in your proof with the set identity used to establish that step.

(d) A - (B - A) = A

A - (B ∩ <span style="text-decoration: overline">A</span>) = A     Set Subtraction Law

A ∩ <span><div style="display: inline; border-top: 2px solid; padding-top: 4px;">(B ∩ <span style="text-decoration: overline">A</span>)</div></span> = A    Set Subtraction Law

A ∩ (<span style="text-decoration: overline;">B</span> ∪ A) = A    De Morgan's Law

A = A                    Absorption Law


#### 3.6.6 Roster notation for sets defined using set builder notation and the Cartesian product.

- Express the following sets using the roster method. 
- Express the elements as strings, not n-tuples.
- Note: xy means the concatination of strings x and y.
  e.g. 
  let x = "ma"
  let y = "lig"
	
	∴ yx = "ligma"
	
(d) { xy: where x ∈ {0} ∪ {0}<sup>2</sup> and y ∈ {1} ∪ {1}<sup>2</sup>}
<div style="display: table; border: 1px solid; padding: 20px; margin: auto;">
	<div style="display: table-row;">
		<div style="display: table-cell; white-space: pre; ">
			Let A = {0}
			A<sup>2</sup> = A x A
			<table style="margin-left: 40px; text-align: center;" border=1>
				<tr><td></td><td>0</td></tr>
				<tr><td>0</td><td>(0,0)</td></tr>								
			</table>
			(0,0) = "00"
			∴  x = { 0, 00 }
		</div>
		<div style="display: table-cell; white-space: pre;">
			Let B = {1}
			B<sup>2</sup> = B x B
			<table style="margin-left: 40px; text-align: center;" border=1>
				<tr><td></td><td>1</td></tr>
				<tr><td>1</td><td>(1,1)</td></tr>								
			</table>
			(1,1) = "11"
			∴   y = {1, 11}
		</div>
	</div>
</div>
- We cannot directly concatinate xy, because they are sets of elements.
- Answer: {xy | x ∈ {0, 00} and y ∈ {1, 11}}

(e) {xy: x ∈ {aa, ab} and y ∈ {a} ∪ {a}<sup>2</sup>}
<div style="display: table; border: 1px solid; padding: 20px; margin: auto;">
	<div style="display: table-row;">
		<div style="display: table-cell; white-space: pre; ">
			Let A = {0}
			A<sup>2</sup> = A x A
			<table style="margin-left: 40px; text-align: center;" border=1>
				<tr><td></td><td>a</td></tr>
				<tr><td>a</td><td>(a, a)</td></tr>								
			</table>
			(a, a) = "a"
			∴  y = { a, aa }
		</div>
	</div>
</div>

x = {aa, ab}
y = {a, aa}

- We cannot directly concatinate xy, because they are sets of elements.
- Answer: {xy | x ∈ {aa, ab} and y ∈ {a, aa}}


#### 3.6.7 Cartesian products, power sets, and set operations.
Use the following set definitions to specify each set in roster notation. Except where noted, express elements of Cartesian products as strings.

-   A = {a}
-   B = {b, c}
-   C = {a, b, d}

(a) A × (B ∪ C)

B ∪ C = {a, b, c, d}

<table border=1 style="text-align: center; ">
	<tr>
		<td style="padding: 10px;"></td>
		<td style="padding: 10px;">a</td>
		<td style="padding: 10px;">b</td>
		<td style="padding: 10px;">c</td>
		<td style="padding: 10px;">d</td>
	</tr>
	<tr>
		<td style="padding: 10px;">a</td>
		<td style="padding: 10px;">aa</td>
		<td style="padding: 10px;">ab</td>
		<td style="padding: 10px;">ac</td>
		<td style="padding: 10px;">ad</td>
	</tr>
</table>

Answer: { aa, ab, ac, ad }

(d) (A × B) ∩ (A × C)

A x B
<table border=1 style="text-align: center; ">
	<tr>
		<td style="padding: 10px;"></td>
		<td style="padding: 10px;">b</td>
		<td style="padding: 10px;">c</td>
	</tr>
	<tr>
		<td style="padding: 10px;">a</td>
		<td style="padding: 10px;">ab</td>
		<td style="padding: 10px;">ac</td>
	</tr>
</table>

(A × C)
<table border=1 style="text-align: center; ">
	<tr>
		<td style="padding: 10px;"></td>
		<td style="padding: 10px;">a</td>
		<td style="padding: 10px;">b</td>
		<td style="padding: 10px;">d</td>
	</tr>
	<tr>
		<td style="padding: 10px;">a</td>
		<td style="padding: 10px;">aa</td>
		<td style="padding: 10px;">ab</td>
		<td style="padding: 10px;">ad</td>
	</tr>
</table>

{ ab, ac } ∩ { aa, ab, ad }

Answer: { ab }


(g) P(A) × P(B). Use ordered pair notation for elements of the Cartesian product.

P(A) = { ∅, {a} }
P(b) = { ∅, {b}, {c}, {b, c}}
<table border=1 style="text-align: center; ">
	<tr>
		<td style="padding: 10px;"></td>
		<td style="padding: 10px;">∅</td>
		<td style="padding: 10px;">{b}</td>
		<td style="padding: 10px;">{c}</td>
		<td style="padding: 10px;">{b, c}</td>
	</tr>
	<tr>
		<td style="padding: 10px;">∅</td>
		<td style="padding: 10px;">(∅,∅)</td>
		<td style="padding: 10px;">(∅,{b})</td>
		<td style="padding: 10px;">(∅,{c})</td>
		<td style="padding: 10px;">(∅,{b,c})</td>
	</tr>
	<tr>
		<td style="padding: 10px;">{a}</td>
		<td style="padding: 10px;">({a},∅)</td>
		<td style="padding: 10px;">({a},{b})</td>
		<td style="padding: 10px;">({a},{c})</td>
		<td style="padding: 10px;">({a},{b,c})</td>
	</tr>
</table>

P(A) × P(B) = { 
	(∅,∅), (∅,{b}), (∅,{c}),(∅,{b,c}), 
	({a},∅), ({a},{b}), ({a},{c}), ({a},{b,c})
}

#### 3.6.8 Proving set identities with Cartesian products.

Use the following three definitions and the laws of logic to prove the two identities given below.

-   Definition of Cartesian product: (x,y) ∈ A × B ↔ (x ∈ A) ∧ (y ∈ B)
-   Definition of intersection: x ∈ A ∩ B ↔ (x ∈ A) ∧ (x ∈ B)
-   Definition of union: x ∈ A ∪ B ↔ (x ∈ A) ∨ (x ∈ B)
  
(b) A × (B ∩ C) = (A × B) ∩ (A × C)

- Initial statement
A × (B ∩ C) 

- Cartesian product
(a ∈ A) ∧ (b ∈ B ∩ C)

- Intersection
(a ∈ A) ∧ (b ∈ B) ∧ (b ∈ C)

- Identity
(a ∈ A) ∧ (b ∈ B) ∧ (a ∈ A) ∧ (b ∈ C)

- Cartesian product
 (A x B) ∧ (A x C)


#### 3.7.3 Recognizing partitions - the real numbers.

Define the sets A, B, C, D, and E as follows:

-   A = {x ∈ **R**: x < -2}
-   B = {x ∈ **R**: x > 2}
-   C = {x ∈ **R**: |x| < 2}
-   D = {x ∈ **R**: |x| ≤ 2}
-   E = {x ∈ **R**: x ≤ -2}

Use the definitions for A, B, C, D, and E to answer the questions.

(a) Do the sets A, B, and C form a partition of **R**? If not, which condition of a partition is not satisfied?

No, the sets are not disjointed.

(b) Do the sets A, B, and D form a partition of **R**? If not, which condition of a partition is not satisfied?

Yes

(c) Do the sets B, D, and E form a partition of **R**? If not, which condition of a partition is not satisfied?

No, D and E are not pairwise disjointed.

