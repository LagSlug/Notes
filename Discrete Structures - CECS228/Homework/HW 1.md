Discrete Structures - CECS228

#### Exercises

Chapter 1

-   **1.1.4 (B, C, E)**
-   **1.2.3 (E, F), 1.2.4 (D), 1.2.8**
-   **1.3.3 (C), 1.3.4 (C, D), 1.3.6, 1.3.7 (D, E), 1.3.10 (C, F)**
-   **1.4.2 (A), 1.4.3 (C), 1.4.5 (A)**
-   **1.5.1 (A), 1.5.2 (H), 1.5.4**
-   **1.6.1 (F), 1.6.2, 1.6.3**
-   **1.7.1 (B, C, E), 1.7.5 (D, E, F), 1.7.6 (E, F), 1.7.10 (A, B, I)**
-   **1.8.2 (D, E), 1.8.4 (B, C)**
-   **1.9.3 (B, D, H), 1.9.4 (C, D)**
-   **1.10.2 (B, E, F), 1.10.4 (D, H), 1.10.8 (A, F), 1.10.10 (D, E)**

#### 1.1.4 - Truth values for statements with inclusive and exclusive or.

Indicate whether each statement is true or false, assuming that the "or" in the sentence means the inclusive or. Then indicate whether the statement is true or false if the "or" means the exclusive or.

B) The number π is an integer or the sun revolves around the earth.

	F v F -> F
	F ⊕ F -> F

C) 20 nickels are worth one dollar or whales are mammals.
	
	T v T -> T
	T ⊕ T -> F

E) January has exactly 31 days or April has exactly 30 days.

	T v T -> T
	T ⊕ T -> F

#### 1.2.3 - Truth values for compound propositions 

The propositional variables, p, q, and s have the following truth assignments: 
p = T
q = T
s = F

Give the truth value for each proposition.

E)           ¬(q ∧ p ∧ ¬s)
```
	¬(T ∧ T ∧ ¬F)
	¬(T ∧ T ∧ T)
	¬(T)
	=> F
```
F)            ¬(p ∧ ¬(q ∧ s))

```
	¬(T ∧ ¬(T ∧ F))
	¬(T ∧ ¬(F))
	¬(T ∧ T)
	¬(T)
	=> F
```

#### 1.2.4 - Writing truth tables

Write a truth table for each expression.

D)           (r ∨ p) ∧ (¬r ∨ ¬q)

There are 2<sup>3</sup> possible solutions, because there are 3 variables and two possible values for each variable.

|  r  |  p  |  q  | (r ∨ p) | (¬r ∨ ¬q) | (r ∨ p) ∧ (¬r ∨ ¬q) |
|:---:|:---:|:---:|:-------:|:---------:|:-------------------:|
|  T  |  T  |  T  |    T    |     F     |          F          |
|  T  |  T  |  F  |    T    |     F     |          F          |
|  T  |  F  |  T  |    T    |     T     |          T          |
|  T  |  F  |  F  |    T    |     T     |          T          |
|  F  |  T  |  T  |    T    |     T     |          T          |
|  F  |  T  |  F  |    T    |     T     |          T          |
|  F  |  F  |  T  |    F    |     T     |          F          |
|  F  |  F  |  F  |    F    |     T     |          F          |


#### 1.2.8 - Finding truth values to make two logical expressions evaluate to different values

Give truth values for the propositional variables that cause the two expressions to have different truth values.

For example, given p ∨ q and p ⊕ q, the correct answer would be p = q = T, because when p and q are both true, p ∨ q is true but p ⊕ q is false. Note that there may be more than one correct answer.

(a)
	r ∧ (p ∨ q)
	(r ∧ p) ∨ q


| row # |  r  |  p  |  q  | r ∧ (p ∨ q) | (r ∧ p) ∨ q |   Δ   |
|:-----:|:---:|:---:|:---:|:-----------:|:-----------:|:-----:|
|   0   |  T  |  T  |  T  |      T      |      T      |   -   |
|   1   |  T  |  T  |  F  |      T      |      T      |   -   |
|   2   |  T  |  F  |  T  |      T      |      T      |   -   |
|   3   |  T  |  F  |  F  |      F      |      F      |   -   |
|   4   |  F  |  T  |  T  |      F      |      T      | **T** |
|   5   |  F  |  T  |  F  |      F      |      F      |   -   |
|   6   |  F  |  F  |  T  |      F      |      T      | **T** |
|   7   |  F  |  F  |  F  |      F      |      F      |   -   |

   ```
	Rows 4 and 6 show that both expressions have different outputs when:
	
	r = F 
	p = T
	q = T

	and

	r = F 
	p = F
	q = T
	
   ```

(b)
   ¬p ∧ q
   ¬(p ∧ q)

| row # |  p  |  q  | ¬p ∧ q | ¬(p ∧ q) | Δ   |
|:-----:|:---:|:---:|:------:|:--------:| --- |
|   0   |  T  |  T  |   F    |    F     | -   |
|   1   |  T  |  F  |   T    |    T     | T   |
|   2   |  F  |  T  |   T    |    T     | -   |
|   3   |  F  |  F  |   F    |    T     | T   |

   ```
	Rows 1 and 3 show that both expressions have different outputs when:
	
	p = T
	q = F

	and
	
	p = F
	q = F
   ```

(c)
	p ∨ q
	(¬p ∧ q) ∨ (p ∧ ¬q)

| row # |  p  |  q  | p ∨ q | (¬p ∧ q) ∨ (p ∧ ¬q) | Δ   |
|:-----:|:---:|:---:|:-----:|:-------------------:| --- |
|   0   |  T  |  T  |   T   |    (F v F) -> F     | T   |
|   1   |  T  |  F  |   T   |    (F v T) -> T     | -   |
|   2   |  F  |  T  |   T   |    (T v F) -> T     | -   |
|   3   |  F  |  F  |   F   |    (F v F) -> F     | -   |

   ```
	Row 1 shows that both expressions have different outputs when:
	
	p = T
	q = T
   ```

#### 1.3.3 - Truth values for the inverse, contrapositive, and converse of a conditional statement.

State the inverse, contrapositive, and converse of each conditional statement. Then indicate whether the inverse, contrapositive, and converse are true.

(c) If 5 is a negative number, then 3 is a positive number.

| Proposition:    |  p → q  | Ex: If it is raining today, the game will be cancelled.     |
| --------------- |:-------:|:----------------------------------------------------------- |
| Converse        |  q → p  | If the game is cancelled, it is raining today.              |
| Contrapositive: | ¬q → ¬p | If the game is not cancelled, then it is not raining today. |
| Inverse         | ¬p → ¬q | If it is not raining today, the game will not be cancelled. |

Let 
	p = 5 is a negative number
	q = 3 is a postive number

So
	p = T
	q = F
	
Inverse:
	If 5 is not a negative number, then 3 is not a positive number.
	¬p → ¬q
	¬T → ¬F
	F → T => T
	
Contrapositive:
	If 3 is not a positive number, then 5 is not a negative number
	¬q → ¬p
	¬F → ¬T
	T → F => F
	
Converse:
	If 3 is a positive number, then 5 is a negative number
	q → p
	F → T => T

#### 1.3.4 - Truth tables for logical expressions with conditional operations.

Give a truth table for each expression.

Note:
- the <u>biconditional operator</u> (p↔q) is read "p if and only if q",  which can be written "p iff q".
-  The proposition p ↔ q is true when p and q have the same truth value and is false when p and q have different truth values. 
- It is equivalent to negating exclusive-or, as in: 
		¬(p⊕q) == (p↔q)

Truth table for the biconditional operator:

| p   | q   | p↔q |
| --- | --- | --- |
| T   | T   | T   |
| T   | F   | F   |
| F   | T   | F   |
| F   | F   | T   |


(c)           (p ∨ q) ↔ (q → ¬p)

| row # |  p  |  q  | (p ∨ q) | (q → ¬p) | (p ∨ q) ↔ (q → ¬p) |
|:-----:|:---:|:---:|:-------:|:--------:|:------------------:|
|   0   |  T  |  T  |    T    |    F     |         F          |
|   1   |  T  |  F  |    T    |    T     |         T          |
|   2   |  F  |  T  |    T    |    T     |         T          |
|   3   |  F  |  F  |    F    |    T     |         F          |


(d)           (p ↔ q) ⊕ (p ↔ ¬q)

| row # |  p  |  q  | (p ↔ q) | (p ↔ ¬q) | (p ↔ q) ⊕ (p ↔ ¬q) |
|:-----:|:---:|:---:| ------- | -------- |:------------------:|
|   0   |  T  |  T  | T       | F        |         T          |
|   1   |  T  |  F  | F       | T        |         T          |
|   2   |  F  |  T  | F       | T        |         T          |
|   3   |  F  |  F  | T       | F        |         T          |

#### 1.3.6 - Expressing English sentences in if-then form.

Give an English sentence in the form "If...then...." that is equivalent to each sentence.

| Statement              | Phrase                                                       |
| ---------------------- | ------------------------------------------------------------ |
| If p, then q.          | If you mow Mr. Smith's lawn, then he will pay you.           |
| If p, q.               | If you mow Mr. Smith's lawn, he will pay you.                |
| q if p                 | Mr. Smith will pay you if you mow his lawn.                  |
| p implies q.           | Mowing Mr. Smith's lawn implies that he will pay you.        |
| p only if q.           | You will mow Mr. Smith's lawn only if he pays you.           |
| p is sufficient for q. | Mowing Mr. Smith's lawn is sufficient for him to pay you.    |
| q is necessary for p.  | Mr. Smith's paying you is necessary for you to mow his lawn. |

(A) Maintaining a B average is <u>sufficient for</u> Joe to be eligible for the honors program.

	If Joe maintains a B average, then Joe will be eligible for the honors program.

(B) Maintaining a B average is <u>necessary for</u> Joe to be eligible for the honors program.

	If Joe is eligible for the honors program, then Joe must maintain a B average.

(C) Rajiv can go on the roller coaster only if he is at least four feet tall.

	If Rajiv is at least four feet tall, then Rajiv can go on the roller coaster.

(D) Rajiv can go on the roller coaster if he is at least four feet tall.

	If Rajiv is at least four feet tall, then Rajiv can go on the roller coaster

#### 1.3.7 - Expressing conditional statements in English using logic.

Define the following propositions:

    s: a person is a senior
    y: a person is at least 17 years of age
    p: a person is allowed to park in the school parking lot

Express each of the following English sentences with a logical expression:

(D) A person can park in the school parking lot if and only if the person is a senior and at least 17 years of age.
	p ↔ ( s ∧ y )

(E) Being able to park in the school parking lot implies that the person is either a senior or at least 17 years old.
	p → ( y ∨ p )

#### 1.3.10 - Determining if a truth value of a compound expression is known given a partial truth assignment.

The variable p is true, q is false, and the truth value for variable r is unknown. Indicate whether the truth value of each logical expression is true, false, or unknown.

(C)         ( p ∨ r ) ↔ ( q ∧ r )
			( T v r )  ↔ ( F ∧ r )    Domination
			T ↔ F                         Bi-implication
			F
			
(F)         ( p ∧ q ) → r
		    ( T ∧ F ) → r             Conjunction
		    F → r                        Implication
		    T


#### 1.4.2 - Truth tables to prove logical equivalence.
Use truth tables to show that the following pairs of expressions are logically equivalent.

(A)
p ↔ q and (p → q) ∧ (q → p)

| p | q | p ↔ q |
|---|---|-------|
| T | T |   T   |
| T | F |   F   |
| F | T |   F   |
| F | F |   T   |

| p | q | (p → q) | (q → p) | (p → q) ∧ (q → p) |
|---|---|---------|---------|-------------------|
| T | T |    T    |    T    |         T         |
| T | F |    F    |    T    |         F         |
| F | T |    T    |    F    |         F         |
| F | F |    T    |    T    |         T         |

- In both tables the expressions are shown to be equal to one another for every value of p and q.


#### 1.4.3 - Proving two logical expressions are not logically equivalent.
Prove that the following pairs of expressions are not logically equivalent.

(C)
(p → q) ∧ (r → q) and (p ∧ r) → q

| Row # |  p  |  q  |  r  | (p → q) | (r → q) | (p → q) ∧ (r → q) |
|:-----:|:---:|:---:|:---:|:-------:|:-------:|:-----------------:|
|   0   |  T  |  T  |  T  |    T    |    T    |         T         |
|   1   |  T  |  T  |  F  |    T    |    T    |         T         |
|   2   |  T  |  F  |  T  |    F    |    F    |         F         |
|   3   |  T  |  F  |  F  |    F    |    T    |         F         |
|   4   |  F  |  T  |  T  |    T    |    T    |         T         |
|   5   |  F  |  T  |  F  |    T    |    T    |         T         |
|   6   |  F  |  F  |  T  |    T    |    F    |         F         |
|   7   |  F  |  F  |  F  |    T    |    T    |         T         |

| Row # |  p  |  q  |  r  | (p ∧ r) → q |
|:-----:|:---:|:---:|:---:|:-----------:|
|   0   |  T  |  T  |  T  |      T      |
|   1   |  T  |  T  |  F  |      T      |
|   2   |  T  |  F  |  T  |      F      |
|   3   |  T  |  F  |  F  |      T      |
|   4   |  F  |  T  |  T  |      T      |
|   5   |  F  |  T  |  F  |      T      |
|   6   |  F  |  F  |  T  |      T      |
|   7   |  F  |  F  |  F  |      T      |

- Rows 1, 2, and 3 have different values, therefore the expressions are not equivalent.

#### 1.4.5 - Logical equivalence of two English statements.

Define the following propositions:
    j = Sally got the job.
    l = Sally was late for her interview
    r = Sally updated her resume.

Express each pair of sentences using logical expressions. Then prove whether the two expressions are logically equivalent.

(A)
If Sally did not get the job, then she was late for her interview or did not update her resume. 

¬j → ( l ∨ ¬r )

If Sally updated her resume and did not get the job, then she was late for her interview.

(r ∧ ¬j ) → l

| Row # |  j  |  l  |  r  | l ∨ ¬r | ¬j → ( l ∨ ¬r ) |
|:-----:|:---:|:---:|:---:|:------:|:---------------:|
|   0   |  T  |  T  |  T  |   T    |        T        |
|   1   |  T  |  T  |  F  |   T    |        T        |
|   2   |  T  |  F  |  T  |   F    |        T        |
|   3   |  T  |  F  |  F  |   T    |        T        |
|   4   |  F  |  T  |  T  |   T    |        T        |
|   5   |  F  |  T  |  F  |   T    |        T        |
|   6   |  F  |  F  |  T  |   F    |        F        |
|   7   |  F  |  F  |  F  |   T    |        T        |


| Row # |  j  |  l  |  r  | r ∧ ¬j | (r ∧ ¬j ) → l |
|:-----:|:---:|:---:|:---:|:------:|:-------------:|
|   0   |  T  |  T  |  T  |   F    |       T       |
|   1   |  T  |  T  |  F  |   F    |       T       |
|   2   |  T  |  F  |  T  |   F    |       T       |
|   3   |  T  |  F  |  F  |   F    |       T       |
|   4   |  F  |  T  |  T  |   T    |       T       |
|   5   |  F  |  T  |  F  |   F    |       T       |
|   6   |  F  |  F  |  T  |   T    |       F       |
|   7   |  F  |  F  |  F  |   F    |       T       |

- The two expressions are logically equivalent since both expression have the same set of truth values.



#### 1.5.1 - Label the steps in a proof of logical equivalence.
Below are several proofs showing that two logical expressions are logically equivalent. Label the steps in each proof with the law used to obtain each proposition from the previous proposition. The first line in the proof does not have a label.

(A)

| Expression         |          Law         |
|--------------------|:--------------------:|
| (p → q) ∧ (q ∨ p)  |                      |
| (¬p ∨ q) ∧ (q ∨ p) | Conditional Identity |
| (q ∨ ¬p) ∧ (q ∨ p) | Commutative          |
| q ∨ (¬p ∧ p)       | Distributive         |
| q ∨ (p ∧ ¬p)       | Commutative          |
| q ∨ F              | Domination           |
| q                  | Identity             |

#### 1.5.2 - Using the laws of logic to prove logical equivalence.

Use the laws of propositional logic to prove the following:

(H)            p ↔ (p ∧ r) ≡ ¬p ∨ r

| Expression                                  | Law            |
|---------------------------------------------|----------------|
| p ↔ ( p ∧ r )                               |                |
| ( p → ( p ∧ r ) ) ∧ (( p ∧ r ) → p )        | Bi-Conditional |
| ( ¬p ∨ ( p ∧ r ) ) ∧ (( p ∧ r ) → p )       | Conditional    |
| (( ¬p ∨ p ) ∧ (¬p ∨ r )) ∧ (( p ∧ r ) → p ) | Distributive   |
| ( T ∧ (¬p ∨ r )) ∧ (( p ∧ r ) → p )         | Tautology      |
| (¬p ∨ r ) ∧ (( p ∧ r ) → p )                | Identity       |
| (¬p ∨ r ) ∧ (¬( p ∧ r ) ∨ p )               | Conditional    |
| (¬p ∨ r ) ∧ (( ¬p ∨ ¬r ) ∨ p )              | De Morgans     |
| (¬p ∨ r ) ∧ ((p ∨ ( ¬p ∨ ¬r ))              | Commutative    |
| (¬p ∨ r ) ∧ ((p ∨ ¬p) ∨ ¬r )                | Associative    |
| (¬p ∨ r ) ∧ ( T ∨ ¬r )                      | Tautology      |
| (¬p ∨ r ) ∧ T                               | Domination     |
| ¬p ∨ r                                      | Identity       |

#### 1.5.4 - Logical relationships between the inverse, converse, and contrapositive.
Use the laws of propositional logic to prove each of the following assertions. Start by defining a generic conditional statement p → q, and then restate the assertion as the equivalence or non-equivalence of two propositions using p and q. Finally prove that the two propositions are equivalent or non-equivalent.

For example, the statement: "A conditional statement is not logically equivalent to its converse" is proven by showing that p → q is not logically equivalent to q → p.

(a) A conditional statement is not logically equivalent to its converse.

p → q is not logically equivalent to  q → p. This is proven by the Converse Law, which is established by a truth table.

| Row #    | p   | q   | p → q | q → p |
| --- | --- | --- | ----- | ----- |
|  0   | T   | T   | T     | T     |
|  1   | T   | F   | F     | T     |
|  2   | F   | T   | T     | F     |
|  3   | F   | F   | T     | T     |

When p = True and q = False, p → q is not logically equivalent to q → p.

(b) A conditional statement is not logically equivalent to its inverse.
p → q is not logically equivalent to  ¬p → ¬q 

| Row # |  p  |  q  | p → q | ¬p → ¬q |
|:-----:|:---:|:---:|:-----:|:-------:|
|   0   |  T  |  T  |   T   |    T    |
|   1   |  T  |  F  |   F   |    T    |
|   2   |  F  |  T  |   T   |    F    |
|   3   |  F  |  F  |   T   |    T    |

When P=True and q=False, p → q  is not logically equivalent to ¬q → ¬p

(c) A conditional statement is logically equivalent to its contrapositive.
p → q is logically equivalent to ¬q → ¬p

| Row # | p   | q   | p → q | ¬q → ¬p |
| ----- | --- | --- | ----- | ------- |
| 0     | T   | T   | T     | T       |
| 1     | T   | F   | F     | F       |
| 2     | F   | T   | T     | T       |
| 3     | F   | F   | T     | T       |

For all values of p and q, p → q is logically equivalent to ¬q → ¬p.

This can also be demonstrated through a series of transformations.

| Expression | Rule                 |
| ---------- | -------------------- |
| p → q      | Implication Identity |
| ¬p ∨ q     | Commutative          |
| q ∨ ¬p     | Implication          |


(d) The converse and inverse of a conditional statement are logically equivalent.
q → p is logically equivalent to ¬p → ¬q

This can be proven using a truth table:

| Row # | p   | q   | ¬p → ¬q | q → p |
| ----- | --- | --- | ------- | ----- |
| 0     | T   | T   | T       | T     |
| 1     | T   | F   | T       | T     |
| 2     | F   | T   | F       | F     |
| 3     | F   | F   | T       | T     |

And through a series of transformations:

| Expression | Rule        |
| ---------- | ----------- |
| q → p      |             | 
| ¬q ∨ p     | Conditional |
| p ∨ ¬q     | Commutative |
| ¬p → ¬q    | Conditional |


#### 1.6.1 - Which expressions with predicates are propositions?
Predicates P, T, and E are defined below. The domain is the set of all positive integers.

P(x): x is even
T(x, y): 2<sup>x</sup> = y
E(x, y, z): x<sup>y</sup> = z

Indicate whether each logical expression is a proposition. If the expression is a proposition, then give its truth value.

(F)   E(2, y, 8)
	This is not a proposition because the truth of 2<sup>y</sup> = 8 depends on the value of y.

#### 1.6.2 -Truth values for quantified statements about integers.  

In this problem, the domain is the set of all integers. Which statements are true? If an existential statement is true, give an example. If a universal statement is false, give a counterexample.

(a)     ∃x (x + x = 1)

False
$$
\displaylines{
	x + x = 1 \\
	2x = 1 \\
	x = 1/2
}
$$

Reasoning: the only value for x that can satisify this expression is 1/2, and it is not an integer.


(b)     ∃x (x + 2 = 1)

True
$$
\displaylines{
	x + 2 = 1 \\
	x = -1
}
$$
Example: when x = -1 the expression is true.

(c)     ∀x (x<sup>2</sup> − x ≠ 1)

True
$$
\displaylines{

	x^2 - x ≠ 1 \\	
	x(x - 1) ≠ 1 \\
	x ≠ \frac{1}{(x - 1)} \\
	
}
$$

(d)     ∀x (x<sup>2</sup> − x ≠ 0)

False
$$
\displaylines{
	x^2 - x ≠ 0 \\
	x^2 ≠ x
}
$$
Counter-example: when x = 0, the expression is false.

(e)      ∀x (x<sup>2</sup> > 0)

False

Counter-example: When x = 0 the expression evaluates to false.

(f)       ∃x (x<sup>2</sup> > 0)

True

Example: x = 1

#### 1.6.3 - Translating mathematical statements in English into logical expressions.

Consider the following statements in English. Write a logical expression with the same meaning. The domain is the set of all real numbers.

(a) There is a number whose cube is equal to 2.
$$
\displaylines{
	∃x(x^3 = 2)
}
$$
(b) The square of every number is at least 0.
$$
\displaylines{
	∀x(x^2 ≧ 0)
}
$$
(c) There is a number that is equal to its square.
$$
\displaylines{
	∃x(x = x^2)
}
$$
(d) Every number is less than or equal to its square plus 1.
$$
\displaylines{
	∀x(x ≦ x^2 + 1)
}
$$

#### 1.7.1 - Determining whether a quantified statement about the integers is true.

Predicates P and Q are defined below. The domain is the set of all positive integers.

-   P(x): x is prime
-   Q(x): x is a perfect square (i.e., x = y<sup>2</sup>, for some integer y)

Indicate whether each logical expression is a proposition. If the expression is a proposition, then give its truth value.

(b)     ∀x Q(x) ∧ ¬P(x)
Is a proposition, and it is false.
- not every value for x for the expression evaluates to true

| x   | Q(x) | ¬P(x) | Q(x) ∧ ¬P(x) |
| --- | ---- | ----- | ------------ |
| 3   | F    | F     | F            |
| 4   | T    | T     | T             |

(c)     ∀x Q(x) ∨ P(3)
Is a proposition, and is true.
- always true because P(3) is true and dominates the expression

| Expression  | Rule                     |
| ----------- |:------------------------ |
| Q(x) ∨ P(3) |                          | 
| Q(x) ∨ T    | Evaluate P(3)            |
| T           | Domination (Disjunction) |

(e)     ∀x (¬Q(x) ∨ P(x))
Is a proposition, and is false.
- 4 is a perfect square and is not prime

| x   | ¬Q(x) | P(x) | ¬Q(x) ∨ P(x) |
| --- | ---- | ----- | ------------ |
| 3   | T    | T     | T            |
| 4   | F    | F     | F             |

#### 1.7.5 - Translating quantified statements from English to logic, part 4.

A student club holds a meeting. The predicate M(x) denotes whether person x came to the meeting on time. The predicate O(x) refers to whether person x is an officer of the club. The predicate D(x) indicates whether person x has paid his or her club dues. The domain is the set of all members of the club. Give a logical expression that is equivalent to each English statement.

M(x): x came to meeting on time.
O(x): x is an officer of the club.
D(x): x has paid their club dues.

(d) Everyone paid their dues or came on time to the meeting.
$$
\displaylines{
	∀x(D(x) ∨ M(x))
}
$$
(e) At least one person paid their dues and came on time to the meeting.
$$
\displaylines{
	∃x(D(x) ∧ M(x))
}
$$
(f) There is an officer who did not come on time for the meeting.
$$
\displaylines{
	∃x(O(x) ∧ ¬M(x))
}
$$

#### 1.7.6 - Translating quantified statements from logic to English.

In the following question, the domain is the set of employees of a company. Define the following predicates:

-   A(x): x is on the board of directors. (Note: members of the board of directors are also employees.)
-   E(x): x earns more than $100,000
-   W(x): x works more than 60 hours per week

Translate the following logical expressions into English:

(e)∀x (E(x) → (A(x) ∨ W(x)))
Every employee that earns more than $100,000 is on the board of directors or works more than 60 hours per week.

(f) ∃x (A(x) ∧ ¬E(x) ∧ W(x))
There exists an employee that is on the board of directors and does not earn more than $100,000 and works more than 60 hours per week.

#### 1.7.10 - Determining whether a quantified logical statement is true, part 2.

A student club holds a meeting. The predicate M(x) denotes whether person x came to the meeting on time. The predicate O(x) refers to whether person x is an officer of the club. The predicate D(x) indicates whether person x has paid his or her club dues. The domain is the set of all members of the club. The names of the members and their truth values for each of the predicates is given in the following table. Indicate whether each expression is true or false. If a universal statement is not true, give a counterexample. If an existential statement is true, give an example.

M(x): x came to meeting on time.
O(x): x is an officer of the club.
D(x): x has paid their club dues.

|   Name  | M(x) | O(x) | D(x) |
|:-------:|:----:|:----:|:----:|
| Hillary | T    | F    | T    |
|  Bernie | F    | T    | F    |
|  Donald | F    | T    | F    |
|   Jeb   | F    | T    | T    |
|  Carly  | F    | T    | F    |

(a) ∀x ¬(O(x) ↔ D(x))
English translation:
"For all x, it is not the case that being an officer of the club is logically equivalent to having paid club dues."

False

Reason: Jeb has paid their dues, and is an officer.

(b) ∀x ((x ≠ Jeb) → ¬(O(x) ↔ D(x)))
English translation:
"For all x, if x is not Jeb, then it is not the case that being an officer of the club is logically equivalent to having paid club dues."

True

Reason: Jeb is the only officer to have paid their dues.

(i) ∃x (O(x) → M(x))
English translation:
"There exists at least one x such that if x is an officer of the club, then x came to the meeting on time."

False.

Reason: No officer came on time.

#### 1.8.2 - Applying De Morgan's law for quantified statements to English statements.

In the following question, the domain is a set of male patients in a clinical study. Define the following predicates:

-   P(x): x was given the placebo
-   D(x): x was given the medication
-   M(x): x had migraines

Translate each statement into a logical expression. Then negate the expression by adding a negation operation to the beginning of the expression. Apply De Morgan's law until each negation operation applies directly to a predicate and then translate the logical expression back into English.

Sample question: Some patient was given the placebo and the medication.

-   ∃x (P(x) ∧ D(x))
-   Negation: ¬∃x (P(x) ∧ D(x))
-   Applying De Morgan's law: ∀x (¬P(x) ∨ ¬D(x))
-   English: Every patient was either not given the placebo or not given the medication (or both).


(d) Every patient who took the placebo had migraines. (Hint: you will need to apply the conditional identity, p → q ≡ ¬p ∨ q.)
- ∀x (P(x) → M(x))
- ¬∀x (P(x) → M(x))

| Expression          | Operation       |
| ------------------- | --------------- |
| ¬∀x (P(x) → M(x))   |                 | 
| ∃x ¬(P(x) → M(x))   | De Morgans      |
| ∃x ¬(¬P(x) ∨ M(x))  | Conditional     |
| ∃x (¬¬P(x) ∧ ¬M(x)) | De Morgans      |
| ∃x (P(x) ∧ ¬M(x))   | Double Negation |

- There exists a patient who took the placebo and did not have migraines.

(e) There is a patient who had migraines and was given the placebo.

- ∃x (P(x) ∧ M(x))
- ¬∃x (P(x) ∧ M(x))

| Expression         | Operation  |
| ------------------ | ---------- |
| ¬∃x (P(x) ∧ M(x))  |            | 
| ∀x ¬(P(x) ∧ M(x))  | De Morgans |
| ∀x (¬P(x) ∨ ¬M(x)) | De Morgans |

- Every patient was not given a placebo or did not have migraines.

#### 1.8.4 - Using De Morgan's law for quantified statements to prove logical equivalence.

Use De Morgan's law for quantified statements and the laws of propositional logic to show the following equivalences:

(b) ¬∀x (¬P(x) → Q(x)) ≡ ∃x (¬P(x) ∧ ¬Q(x))

| Expression          | Operation       |
| ------------------- | --------------- |
| ¬∀x (¬P(x) → Q(x))  |                 | 
| ∃x ¬(¬P(x) → Q(x))  | De Morgan's     |
| ∃x ¬(¬¬P(x) ∨ Q(x)) | Conditional     |
| ∃x ¬(P(x) ∨ Q(x))   | Double Negation |
| ∃x (¬P(x) ∧ ¬Q(x))  | De Morgan's     |


(c) ¬∃x (¬P(x) ∨ (Q(x) ∧ ¬R(x))) ≡ ∀x (P(x) ∧ (¬Q(x) ∨ R(x)))

| Expression                    | Operation       |
| ----------------------------- | --------------- |
| ¬∃x (¬P(x) ∨ (Q(x) ∧ ¬R(x)))  |                 | 
| ∀x ¬(¬P(x) ∨ (Q(x) ∧ ¬R(x)))  | De Morgan's     |
| ∀x (¬¬P(x) ∧ ¬(Q(x) ∧ ¬R(x))) | De Morgan's     |
| ∀x (P(x) ∧ ¬(Q(x) ∧ ¬R(x)))   | Double Negation |
| ∀x (P(x) ∧ (¬Q(x) ∨ ¬¬R(x)))  | De Morgan's     |
| ∀x (P(x) ∧ (¬Q(x) ∨ R(x)))    | Double Negation |

#### 1.9.3 - Truth values for mathematical expressions with nested quantifiers.

Determine the truth value of each expression below. The domain is the set of all real numbers

(b) ∃x∀y (xy = 0)
	Let x = 0, y = ℝ
	True
	
(d) ∀x∃y∀z (z = (x - y)/3)
	Let x = 0, y = 0, z = 1
	1 = (0 - 0) / 3
	1 ≠ 0
	False
	
(h) ∀x∃y (x < 0 ∨ y<sup>2</sup> = x) 
	Let y = x<sup>1/2</sup>
	True
	
#### 1.9.4 - De Morgan's law and nested quantifiers.

Write the negation of each of the following logical expressions so that all negations immediately precede predicates. In some cases, it may be necessary to apply one or more laws of propositional logic.

(c) ∃x ∀y (P(x, y) → Q(x, y))

| Expression                  | Operation       |
| --------------------------- | --------------- |
| ∃x ∀y (P(x, y) → Q(x, y))   |         |
| ¬∃x ∀y (P(x, y) → Q(x, y))  | Negation     |
| ∀x∃y ¬(P(x, y) → Q(x, y))   | De Morgan's     |
| ∀x∃y ¬(¬P(x, y) ∨ Q(x, y))  | Conditional     |
| ∀x∃y (¬¬P(x, y) ∧ ¬Q(x, y)) | De Morgan's  |
| ∀x∃y (P(x, y) ∧ ¬Q(x, y))   | Double Negation                |

(d) ∃x ∀y (P(x, y) ↔ P(y, x))

| Expression                     | Operation       |
|--------------------------------|-----------------|
| ∃x∀y (P(x, y) ↔ P(y, x))       |                 |
| ¬∃x∀y (P(x, y) ↔ P(y, x))      | Negation        |
| ∀x∃y ¬(P(x, y) ↔ P(y, x))      | De Morgan's     |
| ∀x∃y ¬((p → q) ∧ (q → p))      | Bi-conditional  |
| ∀x∃y (¬(p → q) ∨ ¬(q → p))     | De Morgan's     |
| ∀x∃y (¬(¬p ∨ q) ∨ ¬(¬q ∨ p))   | Conditional     |
| ∀x∃y ((¬¬p ∧ ¬q) ∨ (¬¬q ∧ ¬p)) | De Morgan's     |
| ∀x∃y ((p ∧ ¬q) ∨ (q ∧ ¬p))     | Double Negation |

#### 1.10.2 - Truth values for mathematical statements with nested quantifiers.

The domain for all variables in the expressions below is the set of real numbers. Determine whether each statement is true or false. Justify your answer.

(b) ∃x ∀y (x + y = 0)
	Let x = -y
	True
	
(e) ∀x ∀y ∃z (z = (x + y)/2)
	The range of (x + y) / 2 is the set of all real numbers.
	So there can always be a real number (z) that evaluates to (x + y) / 2
	True
	
(f) ∀x ∃y ∀z (z = (x + y)/2)	
$$
	\displaylines {
		z = (x + y) / 2 \\
		2z = x + y \\
		y = 2z - x
	}
$$
	Let y = 2z - x, and for any value x and z, a y can be found that satisfies the expression.
	True


#### 1.10.4 - Mathematical statements into logical statements with nested quantifiers.

Translate each of the following English statements into logical expressions. The domain is the set of all real numbers.

(d) The ratio of every two positive numbers is also positive.
	∀x∀y ( x / y > 0)
	

(h) Every number other than 0 has a unique multiplicative inverse.
	∀x∃y ( xy = 1 ∧ x ≠ 0)
	- The multiplicative inverse of a non-zero number a is a number a<sup>-1</sup> such that a * a<sup>-1</sup> = 1.
	
#### 1.10.8 - Statements with nested quantifiers: English to logic, part 4.

A student club holds an election for officers. Before the voting, members can nominate each other. It is also possible for a member to nominate himself or herself. Some of the members are new members. Some of the members are currently officers. The domain is the set of members of the club. One of the members of the club is named Sam. Define the following predicates.

-   N(x, y): person x nominated person y for a position.
-   W(x): person x is a new member.
-   O(x): person x is currently an officer.

Give a quantified expression that is logically equivalent to each of the following statements.

(a) All the new members nominated all the officers.

∀x∀y ( ( O(y) ∧ W(x) ) → N(x, y) )
	or
∀x ∀y ( W(x) → O(y) → N(x, y) )

(f) Exactly one person nominated Sam.

∃x ∀y ( N(x, Sam) ∧ (x=y) )

#### 1.10.10 - Statements with nested quantifiers: variables with different domains.

The domain for the first input variable to predicate T is a set of students at a university. The domain for the second input variable to predicate T is the set of Math classes offered at that university. The predicate T(x, y) indicates that student x has taken class y. Sam is a student at the university and Math 101 is one of the courses offered at the university. Give a logical expression for each sentence.

T(x, y): student x has taken class y

(d) There is a student who has taken every math class other than Math 101.

∃x∀y ( T(x, y) ∧ y ≠ Math 101 )

(e) Everyone other than Sam has taken at least two different math classes.

Constrain y and z to have the domain of all math classes.

∀x ∃y ∃z ( ( x ≠ Sam) → (T(x, y) ∧ T(x, z) ) )