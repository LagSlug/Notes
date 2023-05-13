Chapter 8:

- 8.1.2 ( A, B, D ) , 8.1.4 ( D, E, F )
- 8.2.1 ( B, D, F ) , 8.2.3
- 8.3.1 ( E, H ) , 8.3.4 ( C, E ) , 8.3.6
- 8.4.1 , 8.4.2 ( C, E ) , 8.4.3 ( F, G )
- 8.5.1 ( F ) , 8.5.3 ( D )

Chapter 10:

- 10.1.2
- 10.3.1 , 10.3.3
- 10.4.1 ( C ) , 10.4.3
- 10.5.8 ( A, B, C )

#### 8.1.2 - Describing sequence propertiesr

For each of the sequences described below, indicate which of the following properties describes the sequence, keeping in mind that the sequence may have more than one of the properties, or none of the properties:

-   Increasing    
-   Decreasing    
-   Non-increasing    
-   Non-decreasing

Only consider the domain of $~n \geq 1$.

(a) $a_{n} = n^{2} - 2n$
Increasing.

(b) $a_{n} = n^{2} - 3n$
Non-decreasing.
$a_1 = a_2 = -2$

(d) $a_{n} = 2^{n} - n!$
Neither.
$a_1 = 1$
$a_2 = a_3 = 2$
$a_4=-8$

#### 8.1.4 - Arithmetic sequences, geometric sequences and sequence properties

(d) What are the conditions on the common difference $d$ and initial value $a_i$, that would make the resulting arithmetic sequence decreasing?

- $a_i$ is irrelevant.
- $d$ must be negative.

(e) Is it possible to have an arithmetic sequence that is non-decreasing but not increasing?

- Yes, a flat line is both non-decreasing and non-increasing. 
- $d=0$ satistfies this condition.

(f) Is it possible to have a geometric sequence that is non-increasing but not decreasing?

- Yes, a flat line is both non-decreasing and non-increasing. 
- $r=1$ satistfies this condition.

#### 8.2.1 - Evaluating recursively defined sequences
- Give the first six terms of the following sequences.
- Only consider the domain of $~n \geq 3$.

(b) a<sub>1</sub> = 1, a<sub>2</sub> = 5, and a<sub>n</sub> = 2·a<sub>n-1</sub> + 3· a<sub>n-2</sub> 
$$
\begin{aligned}
a_1 &= 1 \\
a_2 &= 5 \\
a_3 &= 2 \cdot (5) + 3 \cdot (1) &&= 13 \\
a_4 &= 2 \cdot (13) + 3 \cdot (5) &&= 41 \\
a_5 &= 2 \cdot (41) + 3 \cdot (13) &&= 121 \\
a_6 &= 2 \cdot (121) + 3 \cdot (41) &&= 365 \\
\end{aligned}
$$

(d) c<sub>1</sub> = 4, c<sub>2</sub> = 5, and c<sub>n</sub> = c<sub>n-1</sub> · c<sub>n-2</sub>
$$
\begin{aligned}
	c_1 &= 4 \\
	c_2 &= 5 \\
	c_3 &= (5) \cdot (4) &&= 20 \\
	c_4 &= (20) \cdot (5) &&= 100\\
	c_5 &= (100) \cdot (20) &&= 2000 \\
	c_6 &= (2000) \cdot (100) &&= 200000 \\
\end{aligned}
$$
(f) d<sub>1</sub> = 1, d<sub>2</sub> = 1, and d<sub>n</sub> = (d<sub>n-1</sub>)<sup>2</sup> + d<sub>n-2</sub>

$$
\begin{aligned}
	d_1 &= 1 \\
	d_2 &= 1 \\
	d_3 &= (1)^2 + (1) &&= 2 \\
	d_4 &= (2)^2 + (1) &&= 5 \\
	d_5 &= (5)^2 + (2) &&= 27 \\
	d_6 &= (27)^2 + (5) &&= 734 \\
\end{aligned}
$$

#### 8.2.3 - A variation on Fibonacci's rabbits

The Fibonacci sequence:
$$
\begin{align} 
	f_0 &= 0 \\ 
	f_1 &= 1 \\
	f_n &= f_{n-1} + f_{n-2}\quad{}\mbox{for } n \ge 2  \\ \\
	\{f_n\} &=[~0, 1, 1, 2, 3, 5, 8, 13, 21, \cdots ~]
\end{align}
$$

(a) Give a recurrence relation for the population of Fibonacci's rabbits if the rabbits must be at least two months old to reproduce.

- The colony starts with one pair of newborn rabbits. 
- Every pair of rabbits gives birth to a new pair of rabbits, over the course of a month. 
- Let $g_n$ denote the number of pairs of rabbits at the end of month $n$. 
- Assume that the first pair of rabbits obtained for the colony are born at the end of month 1.
$$
\begin{align} 
	g_0 &= 0 \\ 
	g_1 &= 1 \\
	g_2 &= 1 \\
	g_n &= g_{n-1} + g_{n-3}\quad{}\mbox{for } n \ge 3  \\ \\
	\{g_n\} &=[~0, 1, 1, 1, 2, 3, 4, 6, 9, 13, \cdots ~]
\end{align}
$$

#### 8.3.1 - Evaluating summations
(e) $\sum_{k=0}^{200}(2+3k)$

Arithmetic Closed Form:

$$
an + \frac{d(n-1)n}{2}
$$

$$
\begin{aligned}
\sum_{k=0}^{200}(2+3k) &=
2\cdot201 + \frac{3 \cdot (200)\cdot 201}{2} \\
 &=402 + 100 \cdot 603 \\
 &=402 + 60300 \\
 &=60702
\end{aligned}
$$

(h) $\sum_{k=0}^{100}3\cdot(1.1)^k$

Geometric Closed Form:

$$
\frac{a(r^n-1)}{r-1}
$$

$$
\begin{aligned}
\sum_{k=0}^{100}3 \cdot (1.1)^k
&=
3 \cdot \frac {(1.1)^{101} - 1} {1.1 - 1}
\\
&= \textasciitilde454730


\end{aligned}
$$

#### 8.3.4 - Variable substitution for indices of summations
(c) Substitute variable i for j, where i = j - 1, in the summation below:

$$
\displaylines{
	\sum_{j=0}^{n+1}(j^2-2j+1) \\
	\begin{aligned}
	 \text{let } i &= j -1 \\
	 j &= i + 1 \\
	\end{aligned} 
	\\

	\underbrace{
		\begin{aligned}
		\text{when }j &=0 \\
		i &= 0 + 1 \\
		i &= 1
		\end{aligned}
	}_{New~Lower~Limit}
	~~~~~
	\underbrace{
		\begin{aligned}
		\text{when }j &=n + 1\\
		i &= n + 1 + 1 \\
		i &= n + 2
		\end{aligned}
	}_{New~Upper~Limit}
	\\
	\begin{aligned}
		\sum_{i=1}^{n+2} i^2 \\
	\end{aligned}	

}
$$

(e) Substitute variable j for k, where j = k + 5, in the summation below:
$$
\displaylines{
	\sum_{k=10}^{20}(6k-4) \\
\begin{aligned}
	 \text{let } j &= k + 5 \\
	 k &= j - 5 \\
	\end{aligned} 
	\\

	\underbrace{
		\begin{aligned}
		\text{when }k &=10 \\
		j &= 10 + 5 \\
		j &= 15
		\end{aligned}
	}_{New~Lower~Limit}
	~~~~~
	\underbrace{
		\begin{aligned}
		\text{when }k &=20 \\
		j &= 20 + 5 \\
		j &= 25
		\end{aligned}
	}_{New~Upper~Limit}
	\\
	\begin{aligned}
		\sum_{j=15}^{25} \left[ 6 (j - 5) - 4 \right] \\
		\sum_{j=15}^{25} \left[ 6j - 34 \right] \\
	\end{aligned}	
}	
$$

#### 8.3.6 - Building a car collection

A Silicon Valley billionaire purchases 3 new cars for his collection at the end of every month. 
- Let $a_n$ denote the number of cars he has after $n$ months. 
- Let $a_0 = 23$.

(a) What is $a_8$?

$$
\begin{aligned}
a_n &= 23 + 3n \\
a_0 &= 23 \\
a_8 &= 23 + 3 \cdot 8 = 47
\end{aligned}
$$

(b) If he pays $50 each month to have each car maintained, what is the total amount that he has paid for maintenance after 2 years? 

- No need to calculate the actual number. 

- Instead give a closed form (without the summation) mathematical expression for the number. 
- Note that he purchases the new cars at the end of each month, so during the first month, he is only maintaining 23 cars.

Summation notation:
$$
\begin{aligned}
\sum_{k=0}^{24} 50 \cdot (23 + 3k) = 73750
\end{aligned}
$$
Closed form formula:
$$
\displaylines{
	\sum_{k=0}^{n-1} (a + kd) = an + \frac{d(n-1)n}{2} \\
	\text{for any integer $n \geq 1$} \\
	\begin{aligned}
		\\
		\sum_{k=0}^{24} 50 \cdot (23 + 3k) 
		&= \sum_{k=0}^{24} (1150 + 150k) \\
		
		&=1150 \cdot 25 + \frac{150 \cdot (24)\cdot 25}{2} \\
		&=73750
	\end{aligned}
}
$$

#### 8.4.1 - Components of an inductive proof
Define $P(n)$ to be the assertion that:
$$
\sum_{j=1}^n j^2 = \frac{n(n+1)(2n+1)}{6}
$$

(a) Verify that P(3) is true.
$$
\displaylines{
	\begin{aligned}
		\sum_{j=1}^3 j^2
		&= 14
		\\ \\
		P(3) = \frac{3(3+1)\cdot(2 \cdot 3+1)}{6} 
		&= 14
	\end{aligned}
}
$$
(b) Express P(k).
$$
\sum_{j=1}^k j^2 = \frac{k(k+1)(2k+1)}{6}
$$
(c) Express P(k + 1).

$$
\begin{aligned}
\sum_{j=1}^{k+1} j^2 
&= \frac{(k + 1)(k + 1 + 1)[2(k + 1) + 1]}{6} \\
&= \frac{(k + 1)(k + 2)(2k + 3)}{6}
\end{aligned}
$$

(d) What must be proven in the base case for the inductive proof that for every positive integer $n$, the following theorem holds true:
$$
\sum_{j=1}^n j^2 = \frac{n(n+1)(2n+1)}{6}
$$
- The base case demonstrates that a theorem holds true for the first value of the sequence, e.g. $n = 1$.
$$
\begin{aligned}
\sum_{j=1}^{1} j^2 &= 1 \quad{}\quad{}\quad{}\quad{}
&&\text{Let }n = 1\\ \\
\frac{n(n+1)(2n+1)}{6}&= \frac{1 \cdot (1+1)(2\cdot 1+1)}{6} = 1 \\ \\
∴ \sum_{j=1}^{1} j^2 &= \frac{1 \cdot (1+1)(2\cdot 1+1)}{6}
\end{aligned}
$$


(e) What must be proven in the inductive step for the inductive proof that for every positive integer $n$, the following theorem holds true:
$$
\sum_{j=1}^n j^2 = \frac{n(n+1)(2n+1)}{6}
$$

- The inductive step demonstrates that if a theorem holds true for $n=k$, then the theorem also holds true for $n = k + 1$.

$$
\begin{aligned}
\text{Show that: } \\
\sum_{j=1}^{k+1} j^2 &= \frac{(k + 1)(k + 2)(2k + 3)}{6} \\
\end{aligned}
$$

(f) What would be the inductive hypothesis in the inductive step from your previous answer?
$$
	\text{For all } k \in ℤ^+, S(k) \text{ implies }S(k+1).
$$

(g) Prove the following theorem by induction, for any positive integer $n$.

$$
\sum_{j=1}^n j^2 = \frac{n(n+1)(2n+1)}{6}
$$
<u>Theorem</u>: For every positive integer $n$,
$$
\sum_{j=1}^n j^2 = \frac{n(n+1)(2n+1)}{6}
$$

<u>Proof</u>.
By induction on n.

<u>Base Case</u>
$n = 1$
$$
\begin{aligned}
 \sum_{j=1}^{1} j^2 &= 1  \\
 \frac{1 \cdot (1+1)(2\cdot 1+1)}{6} &= 1
\\ \\
∴ \sum_{j=1}^{1} j^2 &= \frac{1 \cdot (1+1)(2\cdot 1+1)}{6}
\end{aligned}
$$

<u>Inductive Step</u>
Assume the following identity holds true for positive integer $k$,
$$
\sum_{j=1}^k j^2 = \frac{k(k+1)(2k+1)}{6}
$$
then the following identity must also hold true over the same domain of $k$.
$$
	\sum_{j=1}^{k+1} j^2 = \frac{(k + 1)(k + 2)(2k + 3)}{6}
$$
As it were,
$$
\displaylines{
\begin{aligned}
\sum_{j=1}^{k+1} j^2 
&= \sum_{j=1}^{k} j^2 + (k + 1)^2 
&& \text{Extract final term.} 
\\ \\
&= \frac{k(k+1)(2k+1)}{6} + (k + 1)^2
&& \text{Substitution.}
\\ \\
&= \frac{k(k + 1)(2k + 1)}{6} + \frac {6 (k + 1)^2} {6}\\ \\
&= \frac {[k(2k + 1) + 6(k + 1)](k +1)} {6} \\ \\
&= \frac {[2k^2 + 7k + 6](k + 1)} {6} \\ \\
&= \frac {(2k + 3)(k + 2)(k +1 )} {6}
&& \text{ By algebra.} \\
\end{aligned}
}
$$
Therefore,
$$
	\sum_{j=1}^{k+1} j^2 = \frac{(k + 1)(k + 2)(2k + 3)}{6} ~~~~ ■.
$$

#### 8.4.2 - Proving identities by induction

Prove each of the following statements using mathematical induction.

(c) Prove that for any positive integer n,

$$\sum_{j=1}^nj(j-1) = \frac{n(n^2-1)}3$$

(e) Prove that for any non-negative integer n,
- ==Could not solve==
$$\sum_{j=0}^{n} j \cdot 3^{j} = \frac{3}{4}[ n\cdot3^{n+1} - (n+1)3^n + 1]$$

#### 8.4.3 -Proving inequalities by induction
- ==Skipped==
  
Prove each of the following statements using mathematical induction.

(f) Prove that for any non-negative integer n ≥ 4, 3<sup>n</sup> ≤ (n+1)!
(g) Prove that for any non-negative integer n ≥ 0 and a ≥ 0, (1+na) ≤ (1+a)<sup>n</sup>

#### 8.5.1 - Proving divisibility results by induction
- ==Skipped==
  
(f) Prove that for any positive integer n, 3 evenly divides n<sup>3</sup> - 4n + 6

#### 8.5.3 - Proving explicit formulas for recurrence relations by induction
- ==Skipped==
  
(d) Define the sequence {gn} as follows:
- g<sub>0</sub> = 0
- g<sub>n</sub> = g<sub>n-1</sub> + n + 1 for n ≥ 1

Prove that for any integer n ≥ 0, $g_n = \frac{n(n+3)}{2}$

#### 10.1.2 - Counting passwords made up of letters, digits, and special characters

Consider the following definitions for sets of characters:

-   Digits = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }
-   Letters = { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z }
-   Special characters = { \*, &, $, # }

Compute the number of passwords that satisfy the given constraints.

(a) Strings of length 6. Characters can be special characters, digits, or letters.

(b) Strings of length 7, 8, or 9. Characters can be special characters, digits, or letters.

(c) Strings of length 7, 8, or 9. Characters can be special characters, digits, or letters. The first character cannot be a letter.

#### 10.3.1 - Counting passwords without repeating characters
Consider the following definitions for sets of characters:

-   Digits = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }
-   Letters = { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z }
-   Special characters = { \*, &, $, # }

Compute the number of passwords that satisfy the given constraints.

(a) Strings of length 6. Characters can be special characters, digits, or letters, with no repeated characters.

(b) Strings of length 6. Characters can be special characters, digits, or letters, with no repeated characters. The first character can not be a special character.

#### 10.3.3 - Counting license plate numbers
License plate numbers in a certain state consists of seven characters. The first character is a digit (0 through 9). The next four characters are capital letters (A through Z) and the last two characters are digits. Therefore, a license plate number in this state can be any string of the form:

Digit-Letter-Letter-Letter-Letter-Digit-Digit

(a) How many different license plate numbers are possible?

(b) How many license plate numbers are possible if no digit appears more than once?

(c) How many license plate numbers are possible if no digit or letter appears more than once?

#### 10.4.1 - Counting functions from a set to itself

Count the number of different functions with the given domain, target and additional properties.

(c) f: {0,1}<sup>5</sup> → {0,1}<sup>7</sup>

#### 10.4.3 - Lining up club members for a photo

Ten members of a club are lining up in a row for a photograph. The club has one president, one VP, one secretary, and one treasurer.

(a) How many ways are there to line up the ten people?

(b) How many ways are there to line up the ten people if the VP must be beside the president in the photo?

(c) How many ways are there to line up the ten people if the president must be next to the secretary and the VP must be next to the treasurer?


#### 10.5.8 - Counting five-card poker hands

This question refers to a standard deck of playing cards. If you are unfamiliar with playing cards, there is an explanation in "Probability of an event" section under the heading "Standard playing cards." A five-card hand is just a subset of 5 cards from a deck of 52 cards.

(a) How many different five-card hands are there from a standard deck of 52 playing cards?

(b) How many five-card hands have exactly two hearts?

(c) How many five-card hands are made entirely of hearts and diamonds?
