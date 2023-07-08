Discrete Structures - CECS228 - Homework 1

Chapter 4:

-   4.1.2 (B), 4.1.4, 4.1.5 (C, G, i, L)
-   4.2.4
-   4.3.2 (C, i, K), 4.3.4 (B, F, H)
-   4.4.2 (B, E, H, J)
-   4.5.2, 4.5.7

Chapter 6:

-   6.1.3 (A), 6.1.4 (A, E)
-   6.2.1 (B, D, F, G), 6.2.5 (A, B)
-   6.3.2
-   6.4.2 (A, D), 6.4.4
-   6.5.2
-   6.9.4 (A), 6.9.5 (B)

#### 4.1.2 - Draw arrow diagrams 
Draw an arrow diagram for each of the following functions. Give the range of the function using roster notation.

##### (b)
f: {0, 1}<sup>2</sup> → {0, 1}<sup>3</sup>. 
For each x ∈ {0, 1}<sup>2</sup>, f(x) = x0.

![](Discrete%20Structures%20-%20CECS228/Homework/attachments/HW%203%20-%204.1.2%20-%20b%20-%20arrow%20diagram.svg)
$S = \{ 000, 010, 100, 110 \}$, where $S$ is the range of $f$.

#### 4.1.4 - Function of an ordered pair

Let 
	$B = \{0, 1\}$
	$f: B × B → B × B$
	$f(x, y) = (1 - y, 1 - x)$

- Note that (x, y) here is treated as an ordered pair, which might seem obvious, but can be confusing if you were thinking that x and y are non-coupled inputs.

##### (a) 
Give the domain of the function f using roster notation. 
Use ordered pair notation for the Cartesian product.

$f: \textcolor{cyan}{B × B} → B × B$

$\ \textcolor{cyan}{\{0, 1\}~×~\{0, 1\}} = \{ (0,0), (0,1), (1,0), (1,1) \}$

##### (b) 
Draw an arrow diagram for the function $f$.

| (x, y) | f(x, y) = (1 - y, 1 - x)  |
|:------:|:-------------------------:|
| (0, 0) |          (1 , 1)          |
| (0, 1) |           (1, 0)          |
| (1, 0) |           (0, 1)          |
| (1, 1) |           (0, 0)          |

![](Discrete%20Structures%20-%20CECS228/Homework/attachments/HW%203%20-%204.1.4%20-%20b%20-%20arrow%20diagram.svg)


##### (c) 
Give the range of the function f using roster notation. 
Use ordered pair notation for the Cartesian product.

$f: {B × B} → \textcolor{cyan}{B × B}$

$\ {\{0, 1\}~×~\{0, 1\}} = \textcolor{cyan}{\{ (0,0), (0,1), (1,0), (1,1) \}}$


#### 4.1.5 - Range of a function
Express the range of each function using roster notation.

##### (c) 
f: {0,1}<sup>5</sup> → Z
For x ∈ {0,1}<sup>5</sup>, f(x) is the number of times "01" occurs in the string. 

- For example f(01101) = 2 because the string "01" occurs twice in "01101". 
	- The first occurrence starts at the first bit.
	- The second occurrence starts in at the fourth bit.

Domain and solutions of $f$

|       |   |       |   |       |   |       |   |
|:-----:|:-:|:-----:|:-:|:-----:|:-:|:-----:|:-:|
| 00000 | 0 | 00001 | 1 | 00010 | 1 | 00011 | 1 |
| 00100 | 1 | 00101 | 2 | 00110 | 1 | 00111 | 1 |
| 01000 | 1 | 01001 | 2 | 01010 | 2 | 01011 | 2 |
| 01100 | 1 | 01101 | 2 | 01110 | 1 | 01111 | 1 |
| 10000 | 0 | 10001 | 1 | 10010 | 1 | 10011 | 1 |
| 10100 | 1 | 10101 | 2 | 10110 | 1 | 10111 | 1 |
| 11000 | 0 | 11001 | 1 | 11010 | 1 | 11011 | 1 |
| 11100 | 0 | 11101 | 1 | 11110 | 0 | 11111 | 0 |

Range of $f$

$S = \{ 0, 1 ,2 \}$

##### (g)
Let A = {1, 2, 3}.  
f: A × A → **Z**, where f(x,y) = x<sup>y</sup>.

Domain and solutions of $f$
|   |  1  |  2  |  3  |   | x,y | f(x,y) = x<sup>y</sup> | x,y | f(x,y) = x<sup>y</sup> | x,y | f(x,y) = x<sup>y</sup> |
|:-:|:---:|:---:|:---:|---|:---:|:----------------------:|:---:|:----------------------:|:---:|:----------------------:|
| 1 | 1,1 | 1,2 | 1,3 |   | 1,1 |            1           | 1,2 |            1           | 1,3 |            1           |
| 2 | 2,1 | 2,2 | 2,3 |   | 2,1 |            2           | 2,2 |            4           | 2,3 |            8           |
| 3 | 3,1 | 3,2 | 3,3 |   | 3,1 |            3           | 3,2 |            9           | 3,3 |           27           |

Range of $f$

$S = \{ 1, 2, 3, 4, 8, 9, 27 \}$


##### (i)
Let A = {1, 2, 3}
$f: A × A → Z × Z$, where $f(x, y) = (x, y + 1)$

Domain and solutions of $f$

|   |  1  |  2  |  3  |   | x,y | (x, y + 1) | x,y | (x, y + 1) | x,y | (x, y + 1) |
|:-:|:---:|:---:|:---:|---|:---:|:----------:|:---:|:----------:|:---:|:----------:|
| 1 | 1,1 | 1,2 | 1,3 |   | 1,1 |    1, 2    | 1,2 |     1, 3   | 1,3 |    1, 4    |
| 2 | 2,1 | 2,2 | 2,3 |   | 2,1 |    2, 2    | 2,2 |    2, 3    | 2,3 |    2, 4    |
| 3 | 3,1 | 3,2 | 3,3 |   | 3,1 |    3, 2    | 3,2 |    3, 3    | 3,3 |    3, 4    |

Range of $f$

$S = \{ (1, 2), (1, 3), (1, 4), (2, 2), (2, 3), (2, 4), (3, 2), (3, 3), (3, 4) \}$

##### (l)
Let 
	$A = \{1, 2, 3\}$
	$f: P(A) → P(A)$
	For $X ⊆ A, f(X) = X - \{1\}$

Domain of $A$ is the power set of $A$:

$P(A) = \{ ∅, \{ 1 \}, \{ 2 \}, \{ 3 \}, \{ 1, 2 \}, \{ 1, 3 \}, \{ 2, 3 \}, \{ 1, 2, 3 \} \}$

Range of $A$

$S = \{∅, \{2\}, \{3\}, \{2, 3\} \}$

#### 4.2.4 - Proving facts about the floor and ceiling functions
Prove or disprove each statement

##### (a) 
If n is an even integer, then $\left\lfloor \dfrac{n}{2}  \right\rfloor  =  \dfrac{n}{2}$

Let $n = 2k$ where $k$ is an integer

$$
\displaylines{
	\left\lfloor \dfrac{2k}{2}  \right\rfloor  = \dfrac{2k}{2}
	\\
	\left\lfloor k \right\rfloor  = k
	\\
	k  = k 
	\\
}
$$
As shown, the statement holds true when n is an even integer.

##### (b) 
If n is an odd integer, then $\left\lfloor \dfrac{n}{2}  \right\rfloor  =  \dfrac{n-1}{2}$

Let $n = 2k$ + 1 where $k$ is an integer
$$
\begin{aligned}
	\left\lfloor \dfrac{(2k + 1)}{2}  \right\rfloor  
	&= 
	\dfrac{(2k + 1) - 1}{2}
	
	\\
	
	\left\lfloor k + \dfrac{1}{2}  \right\rfloor  
	&= 
	k
	\\
	\left\lfloor k \right\rfloor 
	+
	\left\lfloor \frac{1}{2} \right\rfloor  
	&= 
	k
	\\
	k
	+
	0  
	&= 
	k
	\\
\end{aligned}
$$

As shown, the statement holds true when n is an odd integer.

##### (c) 
For any real number x, $\left\lfloor 2x  \right\rfloor   = 2 \left\lfloor x   \right\rfloor$

False, 
$\text{let }x = \frac 2 3$
$\left\lfloor 2(\frac{2}{3})  \right\rfloor   = 2 \left\lfloor \frac{2}{3}   \right\rfloor$
$\left\lfloor \frac{4}{3}  \right\rfloor   = 2(0)$
$1 ≠ 0$


NOTE: this is not complete
let $x = n + ε$, where $0 ≦ ε < 1$
$$
\displaylines{
	\begin{aligned}
	
	\left\lfloor 2(n + ε)  \right\rfloor 
	&= 
	2 \left\lfloor n + ε   \right\rfloor
	\\
	\left\lfloor 2n  \right\rfloor
	+
	\left\lfloor 2ε  \right\rfloor
	&=
	2n
	\\
	2n
	+
	\left\lfloor 2ε  \right\rfloor
	&=
	2n
	\\
	\left\lfloor 2ε  \right\rfloor
	&=
	0
	\\ \\
	\text{Case 1: } \\
	\text{let} ~~	0 &≦ ε < \frac{1}{2} \\
	0 &≦ 2ε < 1 \\
	\\
	\text{Case 2: } \\
	\text{let} ~~	\frac{1}{2} &≦ ε < 1 \\
	1 &≦ 2ε < 2 \\
	\\

	\end{aligned}	
}
$$
As shown, the statement is false.

##### (d) 
For any real number $x$, $\left\lfloor \left\lceil x  \right\rceil  \right\rfloor   = \left\lceil x  \right\rceil$

Let $x = n + ε$, where $0 ≦ ε < 1$

$$
\begin{aligned}

\left\lfloor \left\lceil n + ε  \right\rceil  \right\rfloor   &= \left\lceil n + ε  \right\rceil
&&\text{Substitution}
\\
\left\lfloor n \right\rfloor   &= n  
&&\text{Ceiling of an integer}
\\
n &= n 
&&\text{Floor of an integer}

\\
\end{aligned}
$$
As shown, the statement holds true for any real number $x$.

##### (e) 
For any real numbers x and y, $\left\lceil x  \right\rceil  \left\lceil y  \right\rceil  = \left\lceil xy  \right\rceil$

Let $y = 1.5$ and $x = 1.5$

$$
\begin{aligned}
\left\lceil 1.5  \right\rceil
\left\lceil 1.5  \right\rceil
&= \left\lceil (1.5) \times(1.5)  \right\rceil
\\
2 \times 2 &= \left\lceil (1.5) \times(1.5)  \right\rceil
\\
4 &= \left\lceil 2.25  \right\rceil
\\
4 &≠ 3

\end{aligned}
$$
As shown, the statement is false.

#### 4.3.2 - Properties of algebraic functions
For each of the functions below, indicate whether the function is onto, one-to-one, neither or both. If the function is not onto or not one-to-one, give an example showing why.

(c) h: **Z** → **Z**. h(x) = x<sup>3</sup>
- One-to-one
- Onto
  
(i) f: **Z** × **Z** → **Z** × **Z**, $f(x,y) = \left( \left\lceil\dfrac{x}{5}\right\rceil, 5y - 2\right)$
- Not one-to-one, (1, 1) and (2, 1) both map to (1, 3).
- Onto

(k) f: **Z**<sup>+</sup> × **Z**<sup>+</sup> → **Z**<sup>+</sup>, f(x, y) = 2<sup>x</sup> + y
- Not one-to-one, (2, 1) and (1, 3) both map to 5.
- Onto
  
#### 4.3.4 - Properties of functions on strings and power sets
For each of the functions below, indicate whether the function is onto, one-to-one, neither or both. If the function is not onto or not one-to-one, give an example showing why.

##### (b) 
f: {0, 1}<sup>3</sup>→{0, 1}<sup>3</sup>

The output of f is obtained by taking the input string and replacing the first bit by 1, regardless of whether the first bit is a 0 or 1. For example, f(001) = 101 and f(110) = 110.

- Not one-to-one, 011 and 111 both map to the same element 111.
- Not onto, there is no input for which 000 will be the output.
  
##### (f)
   $Let$ 
   $A = \{1, 2, 3, 4, 5, 6, 7, 8\}$
	 $f: P(A) → P(A)$
	 $\text{For }X ⊆ A$, $f(X) = A-X$

- Recall that for a finite set $A$, $P(A)$ denotes the power set of $A$ which is the set of all subsets of $A$.

- One-to-one
- Onto

<u>Proof by Example</u>
We can show that A is one-to-one and onto by example, using a smaller set.

Let $B = \{ 1 \}$
$P(B) = \{∅, \{ 1 \}\}$
$B - ∅ = B$
$B - \{ 1 \} = ∅$

All elements in the domain of P(B) map to unique elements in the range of P(B), and every element of the range is related to an element in the domain.

##### (h)
$Let$
   $A = \{a, b, c\}$
   $h: P(A) → P(A)$
   $\text{For }X ⊆ A$, $h(X) = X ⊕ \{ a \}$

- One-to-one
- Onto

<u>Exhaustive Proof</u>

P(A) = { ∅, { a }, { b }, { c }, { a, b }, {a, c}, {b, c}, {a, b, c} }
$$
\begin{aligned}
∅ ⊕ \{ a \} &= \{ a \} \\
\{ a \} ⊕ \{ a \} &= ∅ \\
\{ b \} ⊕ \{ a \} &= \{a, b\} \\
\{ c \} ⊕ \{ a \} &= \{a, c\} \\
\{ a, b \} ⊕ \{ a \} &= \{ b\} \\
\{ a, c \} ⊕ \{ a \} &= \{c\} \\
\{ b, c \} ⊕ \{ a \} &= \{a, b, c\} \\
\{ a, b, c \} ⊕ \{ a \} &= \{b, c\} \\
\end{aligned}
$$

#### 4.4.2 - Finding inverses of functions
For each of the following functions, indicate whether the function has a well-defined inverse. If the inverse is well-defined, give the input/output relationship of $f^{-1}$.

- A function that is onto and one-to-one is bijective.
- A bijective function has an inverse.
  
##### (b)
$f: \mathbb{Z} \rightarrow \mathbb{Z}$
$f(x) = 2x + 34$
$$
\begin{aligned}
	f(f^{-1}(x)) &= x && \text{By definition.}\\ \\
	\text{let } y &= f^{-1}(x) && \text{Define }y. \\ \\
	f(y) &= x && \text{As shown.}\\
	f(y) &= 2y + 34 && \text{As shown.} \\
	x &= 2y + 34 && \text{Consequently.} \\ \\
	x - 34 &= 2y && \text{Solving for } y..\\ \\
	\frac{x-34}{2} &= y && \text{Solved for } y.\\ \\
	\frac{x-34}{2} &= f^{-1}(x) && \text{As shown. }■ \\
\end{aligned}
$$

- The function $f$ has a well defined inverse. The input/output relationship of the inverse function of $f$ is $f^{-1} = \frac{x-34}{2}$.

##### (e) 
Let $A$ be defined to be the set $\{1, 2, 3, 4, 5, 6, 7, 8\}$
$f: P(A) → P(A)$
For $X ⊆ A$, $f(X) = A - X$

- Recall that for a finite set $A$, $P(A)$ denotes the power set of $A$ which is the set of all subsets of $A$.

- $f$ is bijective.

<u>Proof by Example</u>

Let $B = \{ 1, 2 \}$
$P(B) = \{∅, \{ 1 \}, \{ 2 \}, \{1, 2\} \}$

$$
\begin{aligned}
B - ∅ &= B \quad{} \\
B - \{1\} &= \{2\} \\

B - \{2\} &= \{1\} \\
B - \{1,2\} &= ∅ \\
\end{aligned}
~~~~~~~
\begin{aligned}
B ⊕ B &= ∅ \\
\{2\} ⊕ B &= \{1\} \\

\{1\} ⊕ B &= \{2\} \\
∅ ⊕ B &= \{1,2\} \\
\end{aligned}
$$

As shown, the function $f$ has a well defined inverse. The input/output relationship of the inverse function of $f$ is $f^{-1}(X) = X ⊕ A$

##### (h)
$f: \{0, 1\}^3 \rightarrow \{0, 1\}^3$
The output of $f$ is obtained by taking the input string and reversing the bits. For example, $f(011) = 110$

- Reversing a string twice returns the original string.
- The inverse of the reverse string function is itself.

Let $f(x,y,z) = zyx$.

- $f$ is bijective.

- The inverse of $f$ is well defined. The input/output relationship of the inverse function of $f$ is $f^{-1}(x, y, z) = zyx$.

- Many other functions exist that are their own inverse, such as $f(x) = \frac{1}{x}$.

##### (j)
$f: \mathbb{Z} \times \mathbb{Z} \rightarrow \mathbb{Z} \times \mathbb{Z}$
$f(x, y) = (1-y, x)$

- $f$ is bijective.

$$
\begin{aligned}
	f(x, y) &= (1-y, x) \\ \\
	f(f^{-1}(x, y)) &= (x, y) && \text{By definition.}\\ \\
	\text{let } g &= f^{-1}(x, y) && \text{Define ordered pair }g. \\ \\
	f(g) &= (x, y) && \text{As shown.}\\
	f(g_x,g_y) &= (1 - g_y,g_x) && \text{As shown.} \\
	(x, y) &= (1 - g_y,g_x) && \text{Consequently.} \\
	\\
	x &= 1 - g_y \\
	y &= g_x \\ \\
	
	g_x &= y \\
	g_y &= 1 - x \\
	g &=(y, 1-x)
	\\
	\\
	f^{-1}(x, y) &= (y, 1 -x)
	
\end{aligned}
$$

- As shown, the function $f$ has a well defined inverse. The input/output relationship of the inverse function of $f$ is $f^{-1}(x, y) = (y, 1 -x)$.

#### 4.5.2 - Composition of functions on integers

Consider three functions f, g, and h, whose domain and target are ℤ. Let

$$
f(x) = x^2 \quad{}\quad{} 
g(x) = 2^x\quad{}\quad{}
h(x) = \left\lceil \frac x 5 \right\rceil
$$
(a) Evaluate (f ο g)(0)
$$
\begin{aligned}
	f(g(x)) &= (2^x)^2 \\ \\
	f(g(0))&= (2^0)^2 \\
	&= 1
\end{aligned}
$$
(b) Evaluate (f ο h)(52)

$$
\begin{aligned}
f(h(x)) &= (\left\lceil \frac x 5 \right\rceil)^2 \\ \\
f(h(52)) &= (\left\lceil \frac {52}{5} \right\rceil)^2 \\
&= (10)^2 \\
&= 100
\end{aligned}
$$

(c) Evaluate (g ο h ο f)(4)

$$
\begin{aligned}
	g(h(f(x))) &= 2^{\left\lceil \frac {x^2} {5} \right\rceil} 
	\\ \\
	g(h(f(4)))&= 2^{\left\lceil \frac {4^2} {5} \right\rceil} 
	\\
	&= 2^{\left\lceil \frac {16} {5} \right\rceil} 
	\\
	&= 2^{4} \\ 
	&= 16 
\end{aligned}
$$

(d) Give a mathematical expression for h ο f.

$$
\begin{aligned}
	h(f(x)) &= \left\lceil \frac {x^2} {5} \right\rceil
\end{aligned}
$$

(e) Give a mathematical expression for f ο g.

$$
\begin{aligned}
	f(g(x)) &= (2^x)^2 \\ \\
\end{aligned}
$$

#### 4.5.7 - Composition of functions on sets of strings, part 2

Let $d$, $f$, and $g$ be defined as follows.

- $d: \{0, 1\}^4 → \{0, 1\}^4$
  $d(x)$ is obtained from $x$ by removing the second bit and placing it at the end. 
  e.g., $d(1011) = 1110$
  
- $f: \{0, 1\}^4 → \{0, 1\}^4$
  $f(x)$ is obtained from $x$ by replacing the last bit with 1. 
  e.g., $f(1000) = 1001$
  
- $g: \{0, 1\}^4 → \{0, 1\}^3$
  $g(x)$ is obtained from $x$ by removing the first bit. 
  e.g., $g(1000) = 000$

(a) What is $d^{-1}(1001)$?

Let 
	 $d(a, b, c, d) = (a, c, d, b)$
∴ $d^{-1}(a, b, c, d) = (a, d, b, c)$

To reverse $d$, the last bit should be removed, and placed into the second bit position, shifting bits to right to make room.

$d^{-1}(1001) = 1100$

(b) Which of the following functions is not well defined, $f~ο~g$ or $g~o~f$?

$f(a, b, c, d) = (a, b, c, 1)$
$g(a, b, c, d) = (b, c, d)$

Neither $f$ or $g$ is well defined, so their compositions cannot be well defined.

(c) What is the range of $g~o~f$?

Range of $f$ is $\{0, 1\}^3 + \{1\}$, which is the domain for $g$ in $g~o~f$.
So the range of $g$ is $\{0,1\}^2 + \{1\}$ = { 001, 011, 101, 111 }

(d) What is (f ο d)(1011)?

$d(1011) = 1110$
$f(1110) = 1111$

#### 6.1.3 - Matrices and arrow diagrams for relations expressed as sets of pairs
Draw the arrow diagram and the matrix representation for each relation.

##### (a) 
Define sets:
	$A = \{r, o, t, p, c\}$ 
	$B = \{proposition, math, proof, discrete\}$.
Define the relation:
	$R ⊆ A × B$ such that $(letter, word)$ is in the relation if that letter occurs somewhere in the word.

|   | Proposition | Math | Proof | Discrete |
|:-:|:-----------:|:----:|:-----:|:--------:|
| r |      1      |   0  |   1   |     1    |
| o |      1      |   0  |   1   |     0    |
| t |      1      |   1  |   0   |     1    |
| p |      1      |   0  |   1   |     0    |
| c |      0      |   0  |   0   |     1    |

![](Discrete%20Structures%20-%20CECS228/Homework/attachments/HW3%20-%206.1.3%20-%20arrow-diagram-letters-to-words.svg)

#### 6.1.4 - Arrow diagrams for relations on small finite sets
Draw the arrow diagram for each relation.

##### (a) 
- The domain of relation $C$ is $\{0, 1\}^3$. 
- For $x, y ∈ \{0, 1\}^3$, $xCy$ if $y$ can be obtained from $x$ by changing only one 0 to a 1.
- In otherwords, the relationship $xCy$ exists if $x$ and $y$ differ by a single bit.

|     | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 000 |  0  |  1  |  1  |  0  |  1  |  0  |  0  |  0  |
| 001 |  1  |  0  |  0  |  1  |  0  |  1  |  0  |  0  |
| 010 |  1  |  0  |  0  |  1  |  0  |  0  |  1  |  0  |
| 011 |  0  |  1  |  1  |  0  |  0  |  0  |  0  |  1  |
| 100 |  1  |  0  |  0  |  0  |  0  |  1  |  1  |  0  |
| 101 |  0  |  1  |  0  |  0  |  1  |  0  |  0  |  1  |
| 110 |  0  |  0  |  1  |  0  |  1  |  0  |  0  |  1  |
| 111 |  0  |  0  |  0  |  1  |  0  |  1  |  1  |  0  |

![](Discrete%20Structures%20-%20CECS228/Homework/attachments/HW3%20-%206.1.4%20-%20arrow-diagram-binary-1-bit-difference.svg)

##### (e) 
The domain for the relation $P$ is the set $\{2, 4, 8, 10, 16, 64\}$. 
For x, y in the domain, $xPy$ if there is a positive integer $n$ such that $x^n = y$

|    | 2 | 4 | 8 | 10 | 16 | 64 |
|:--:|:-:|:-:|:-:|:--:|:--:|:--:|
|  2 | 1 | 1 | 1 |  0 |  1 |  1 |
|  4 | 0 | 1 | 0 |  0 |  1 |  1 |
|  8 | 0 | 0 | 1 |  0 |  0 |  1 |
| 10 | 0 | 0 | 0 |  1 |  0 |  0 |
| 16 | 0 | 0 | 0 |  0 |  1 |  0 |
| 64 | 0 | 0 | 0 |  0 |  0 |  1 |

![](Discrete%20Structures%20-%20CECS228/Homework/attachments/HW3%20-%206.1.4%20-%20arrow-diagram-powers-svg.svg)

#### 6.2.1 - Identifying properties of relations
For each relation, indicate whether the relation is:
- reflexive, anti-reflexive, or neither
- symmetric, anti-symmetric, or neither
- transitive or not transitive

- Justify your answer
- ℝ is the set of all real numbers
- ℤ is the set of all integers.
  
##### (b) 
The domain of the relation $E$ is $ℝ$.
For $x, y ∈ ℝ$, $xEy$ if $x ≤ y$.
(For any two integers, x and y, xEy if x is less than or equal to y.)

- Reflexive, when $x = y$, $xEy$ exists.
- Anti-symmetric, when x ≠ y if $xEy$ exists, then $yEx$ cannot exit.
- Transitive, if xEy and yEz exist, then xEz must exist.
  e.g. 2 < 4, and 4 < 8, so 2 < 8.  
  
##### (d) 
The domain for the relation $D$ is ℤ.
For $x, y ∈ ℤ$, $xDy$ if $x∣y$.
(For any two integers, $x$ and $y$, $xDy$ if $x$ evenly divides $y$.)

- An integer $x$ evenly divides $y$ if there is another integer $n$ such that $y = xn$. 
- The domain is the set of all integers, not just positive integers.

- Not reflexive or anti-reflexive, $\frac 0 0$ is undefined, and all other integers can divide themselves.
- Anti-symmetric, when x≠y, if xDy exists then yDx cannot exist.
- Transitive, if $xDy$ and $yDz$ exists, then $xDz$ must exist.
  
##### (f) 
The domain for relation $R$ is $ℝ$.
The relation $xRy$ exists if $x - y$ is rational. 

- A real number $r$ is rational if there are two integers $a$ and $b$, such that $b ≠ 0$ and $r = \frac a b$. 
- You can use the fact that the sum of two rational numbers is also rational.

- Reflexive, the difference of a rational number with itself is zero, which is rational.
- Symmetric, the difference between all rational numbers is rational.
- Transitive, if  $x - y$ is rational and  $y - z$ is rational, then  $x - z$ is rational.

##### (g) 
The domain for the relation is $ℤ \times ℤ$. 
$(a, b)$ is related to $(c, d)$ if $a ≤ c$ and $b ≤ d$.

- Reflexive, a point is related to itself.
- Anti-symmetric, no point has a bidirectional relationship with another point.
- Transitive, if point $(a, b)$ is lower in either the $x$ or $y$ plane than $(c,d)$, and $(c,d)$ is lower than $(e, f)$, then $(a, b)$ must be lower than $(e, f)$.

#### 6.2.5 - Identifying properties of relations on a power set

Define
	$X = \{a, b, c, d, e\}$
	$P(X)$ is the power set of $X$. 
	
The domain of all of the relations defined below is $P(X)$.

For each relation, indicate if the relation is:
- Reflexive, anti-reflexive, or neither
- Symmetric, anti-symmetric, or neither
- Transitive or not transitive

##### (a) $A$ is related to $B$ if $|A - B| = 1$

- Anti-reflexive, the difference of a set with itself is an empty set.
  $|A - A| = 0$.
  
- Neither symmetric nor anti-symmetric.
  If $|A - B| = 1$ then it's not necessarily true that $|B - A| = 1$
    e.g. 
    $|\{a, b, c\} - \{b, c\}| = 1$
    $|\{b, c\} - \{a, b, c\}| = 0$
    
    $|\{a, b, c\} - \{b, c, d\}| = 1$
    $|\{b, c, d\} - \{a, b, c\}| = 1$

- Not transitive.
  e.g.
  $|\{a, b, c\} - \{b, c\}| = 1$
  $|\{b, c\} - \{c\}| = 1$
  $|\{a, b, c\} - \{c\}| = 2$


##### (b) $A$ is related to $B$ if $A ∩ B = ∅$

- Anti-reflexive, the intersection of a set with itself is itself.
- Symmetric, the intersection operator is commutative.
  A ∩ B = B ∩ A 
- Not transitive, A ∩ B = E and B ∩ C = E does not imply that A ∩ C = E.
 $\{ a \} ∩ \{ b \} = ∅$
 $\{ b \} ∩ \{ a, c \} = ∅$
 $\{ a \} ∩ \{ a, c \} = \{ a \}$

#### 6.3.2 - Directed graph definitions
The diagram below shoes a directed graph.
![](Discrete%20Structures%20-%20CECS228/Homework/attachments/HW%203%20-%20directed%20graph.png)

##### (a) Is $\langle d, b, c, g, c, f, e, c, d \rangle$ a circuit in the graph? Is it a cycle?

$V = \langle d, b, c, g, c, f, e, c, d \rangle$
$E = \langle (d, b), (b, c), (c, g), (g, c), (c, f), (f, e), (e, c), (c, d) \rangle$

Some verticies are not distinct, so <u>the graph cannot be a cycle</u>.
No directed edge appears more than once, so the graph is a trail.
The endpoints of the graph, $v_0$ and $v_8$ are both $d$, so <u>the graph is a circuit</u>.

##### (b) What is the longest cycle in the graph?
- $a$ cannot be reached, so it cannot be part of the cycle.
- $e$ can be reached and exited, but consumes $c$ and $f$, and including it limits the cycle to 4 verticies.

$C = \langle b, c, g, f, d, b \rangle$
- This cycle has a length of 5.

##### (c) Give an example of a cycle of length 4.

$C = \langle e, c, g, f, e \rangle$

##### (d)Give an example of a path of length 5.

$P = \langle a, g, f, e, c \rangle$

##### (e) Is there a path of length 3 from vertex $d$ to vertex $f$? 
If so, give an example.

$P = \langle d, b, c, f \rangle$

##### (f) Is there a path of length 3 from vertex $a$ to vertex $c$? 
If so, give an example.

No

##### (g) Give an example of an open trail of length 4 that is not a path.

$T = \langle g, c, g , f, e \rangle$

##### (h) Give an example of a circuit of length 5 that is not a cycle.

$C = \langle c, f, e, c, g, c \rangle$

##### (i) Give an example of a circuit of length 6 that is not a cycle.

$C = \langle c, f, d, b, c, g, c \rangle$

##### (j) Is it true that for each pair of vertices there is a path from one to the other?

Yes, but not always a return path.

#### 6.4.2 - Composition of relations on the real numbers
Here are four relations defined on ℝ, the set of real numbers:
- R<sub>1</sub> = { (x, y): x ≤ y }
- R<sub>2</sub> = { (x, y): x > y }
- R<sub>3</sub> = { (x, y): x < y }
- R<sub>4</sub> = { (x, y): x = y }

Describe each relation below. (Hint: each of the answers will be one of the relations R<sub>1</sub> through R<sub>4</sub> or the relation $R \times R$.)

(a) R<sub>1</sub> ο R<sub>2</sub>

- R<sub>1</sub> = { (x, y): x ≤ y }
- R<sub>2</sub> = { (x, y): x > y }

- I'm unsure of the correct answer, because the set $\{ (2,1), (2,2), (3,2), (3, 3) \}$ is possible.

R<sub>1</sub>?

(d) R<sub>3</sub> ο R<sub>1</sub>

- R<sub>1</sub> = { (x, y): x ≤ y }
- R<sub>3</sub> = { (x, y): x < y }

R<sub>3</sub>?

#### 6.4.4 - Composition of relations and arrow diagrams
Below is the arrow diagram for relation $S$ with the domain $\{a, b, c, d\}$. 
Define relation $T$ to be $S \circ S$.

![](Discrete%20Structures%20-%20CECS228/Homework/attachments/HW%203%20-%206.4.4.png)

(a) Express relation $T$ as a set of related pairs.

$T = \{ (a, c), (b, d), (c, a), (d, b) \}$

(b) Draw the arrow diagram for $S \circ T$.

![](Discrete%20Structures%20-%20CECS228/Homework/attachments/HW3%20-%206.4.4%20-%20digraph%20composition.svg)


#### 6.5.2 - Drawing graph powers

This is a graph of $G$

![](Discrete%20Structures%20-%20CECS228/Homework/attachments/HW%203%20-%206.5.2.png)

##### a) Draw G<sup>2</sup>, G<sup>3</sup>, and G<sup>4</sup>
Then take the union of all of the graphs (including G) to get G<sup>+</sup>

![](Discrete%20Structures%20-%20CECS228/Homework/attachments/HW3%20-%206.5.2%20-%20graph%20of%20G+.svg)

#### 6.9.4 - Equivalence relations on strings
$D =\{0, 1\}^{6}$

The following relations have the domain D. 
Determine if the following relations are equivalence relations or not. 
Justify your answers.

##### (a) Define relation R: xRy if y can be obtained from x by swapping any two bits.

- Reflexive, every x can be obtained from x by swapping two bits.
- Transitive, swapping two bits can be done repeatedly
  e.g. 000011, 001100, 110000 can all be produced from any 6 bit string with two flipped bits.
- Symmetric, swapping two bits for x is the same as swapping two bits for y.

Relation R is an equivalence relation.

#### 6.9.5 - Equivalence relations on numbers
The domain of the following relations is ℤ. 
Determine if the following relations are equivalence relations. 
Justify your answers.

##### (b) xRy if $x+y = 3m$ for some integer $m$

- Not reflexive
  1 + 1 = 3 (2/3)
- Symmetric
  1 + 2 = 3(1) 
	2 + 1 = 3(1)
- Not transitive, 
  8 + 1 = 3(3) 
  1 + 2 = 3(1)
  8 + 2 = 3 (10/3) 

The relation R is not an equivalence relation, because it is not reflexive, nor transitive.