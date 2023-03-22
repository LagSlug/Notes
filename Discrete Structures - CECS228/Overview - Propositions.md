# Overview - Propositions

### Operators

| Symbol | Name                  | Word | Example                                   |
|:------:|:--------------------- |:----:|:----------------------------------------- |
|  `¬`   | Negation              | NOT  | ¬p means "not p"                          |
|  `∧`   | Conjunction           | AND  | p ∧ q means "p and q"                     |
|  `∨`   | Disjunction           |  OR  | p ∨ q means "p or q"                      |
|  `⟶`   | Implication           |  IF  | p ⟶ q means "if p, then q"                |
|  `⟷`   | Bi&#x2011;Implication | IIF  | p ⟷ q means "p if and only if q"          |
|  `⊕`   | Exclusive OR          | XOR  | p ⊕ q means "either p or q, but not both" |

- These operators are also called "propositional connectives".
  
### Precedence of Operators

- Operators must be applied according to precedence.
- When two operators conflict, the operator with the lower precedence value is applied first.
- Parenthesis are always applied before operators.

| Operator | Precedence |
| --- | --- |
| `¬` | 1 |
| `∧` | 2 |
| `∨` | 3 |
| `⇒` | 4 |
| `⇔` | 5 |
| `⊕` | 6 |

### Truth Tables
#### Negation

| p   | ¬p  |
| --- |:---:|
| T   |  F  |
| F   |  T  |

```
p = "The weather is good"

Example expression:
¬p

i.e. "NOT p"

e.g. "The weather is not good."
```

#### Conjunction

|  p  | q   | p ∧ q |
|:---:| --- |:-----:|
|  T  | T   |   T   |
|  T  | F   |   F   |
|  F  | T   |   F   |
|  F  | F   |   F   |

```
p = "The sky is clear"
q = "It is warm"

Example expression:
p ∧ q

i.e. "p AND q"

e.g. "The sky is clear and it is warm."
```

#### Disjunction

|  p  | q   | p ∨ q |
|:---:| --- |:-----:|
|  T  | T   |   T   |
|  T  | F   |   T   |
|  F  | T   |   T   |
|  F  | F   |   F   |

```
p = "The music is playing"
q = "The guests are talking"

Example expression:
p ∨ q

i.e. "p OR q"

e.g. "The music is playing or the guests are talking"
```

#### Implication

| p   | q   | p → q |
| --- | --- |:-----:|
| T   | T   |   T   |
| T   | F   |   F   |
| F   | T   |   T   |
| F   | F   |   T   |

```
p = "It is pouring"
r = "The old man is snoring"

Example expression: 
p → r

i.e. "If p, then r."

e.g. "If it is pouring, then the old man is snoring."
```


#### Bi-Implication

|  p  | q   | p ↔ q |
|:---:| --- |:-----:|
|  T  | T   |   T   |
|  T  | F   |   F   |
|  F  | T   |   F   |
|  F  | F   |   T   |

```
p = "A triangle has three equal sides"
q = "The triangle is equilateral"

Example expression: 
p ⇔ q

i.e. "p IFF q"

e.g. "A trinangle has three equal sides, if and only if the triangle is equilateral."
```

#### Exclusive OR

|  p  |  q  | p ⊕ q |
|:---:|:---:|:-----:|
|  T  |  T  |   F   |
|  T  |  F  |   T   |
|  F  |  T  |   T   |
|  F  |  F  |   F   |

```
p = "The light is green"
q = "The light is red"

Example expression:
p ⊕ q

i.e. "p XOR q"

e.g. "The light is green or the light is red, but not both."
```

### Laws

| Law             | Formula                                                                | Law of                                                |
|:--------------- | ---------------------------------------------------------------------- |:----------------------------------------------------- |
| Idempotent      | p ∧ p = p <br /> p ∨ p = p                                             | Conjunction <br /> Disjunction                        |
| Commutative     | p ∧ q = q ∧ p <br /> p ∨ q = q ∨ p                                     | Conjunction <br /> Disjunction                        |
| Associative     | (p ∧ q) ∧ r = p ∧ (q ∧ r) <br /> (p ∨ q) ∨ r = p ∨ (q ∨ r)             | Conjunction <br /> Disjunction                        |
| Distributive    | p ∧ (q ∨ r) = (p ∧ q) ∨ (p ∧ r) <br /> p ∨ (q ∧ r) = (p ∨ q) ∧ (p ∨ r) | And over Or <br />  Or over And                       |
| De Morgans      | ¬ (p ∧ q) = ¬ p ∨ ¬ q <br /> ¬ (p ∨ q) = ¬ p ∧ ¬ q                     | *First* <br /> *Second*                               |
| De Morgans (II) | ¬∀x P(x)   ≡   ∃x ¬P(x) <br /> ¬∃x P(x)   ≡   ∀x ¬P(x)                 |                                                       |
| Identity        | p ∧ T = p <br /> p ∨ F = p                                             | Conjunction <br /> Disjunction                        |
| Domination      | p ∧ F = F <br /> p ∨ T = T                                             | Conjunction <br /> Disjunction                        |
| Negation        | p ∧ ¬p = F <br /> p ∨ ¬p = T                                           | *Contradiction* <br /> *Tautology*                    |
| Double Negation | ¬ (¬ p) = p                                                            | *Involution Law*                                      |
| Contrapositive  | p → q ≡ ¬ q → ¬ p                                                      |                                                       |
| Absorption      | p ∨ ( p ∧ q ) ≡ p <br /> p ∧ ( p ∨ q ) ≡ p                             | *Left Absorption Law* <br/> *Right Absorption Law*    |
| Implication     | p → q ≡ ¬p ∨ q  <br /> ¬(p → q) ≡ p ∧ ¬q                               | *Conditional Law*  <br /> Negation of *Conditional Law* | 
| Bi-Implication  | p ↔ q ≡ ( p → q ) ∧ ( q → p )                                          | *Bi-Conditional Law*                                  |
|                 |                                                                        |                                                       |

#### Non Equivalances

| Law      | Conditional Non-Equivalence | Description                       | 
| -------- | --------------------------- | --------------------------------- |
| Converse | p → q ≠ q → p               | Order of conditional is reversed  |
| Inverse  | p → q ≠ ¬q → ¬p             | Negation of both sides of inverse |


#### De Morgans Law

- When a negation "passes" over a quantifier, it causes the quantifier to "flip".
- Existential becomes Universal, and Universal becomes Existential

$$
	¬∃x∀y ( P(x) + Q(y) = 0 ) ≡ ∀x∃y¬( P(x) + Q(y) = 0 )
$$

- Note: the negation can be applied to the expression, converting the "=" operator to "≠".

$$
	∀x∃y¬( P(x) + Q(y) = 0 ) ≡ ∀x∃y( P(x) + Q(y) ≠ 0 )
$$


### Tautology and Contradiction

- A compound proposition is a <u>tautology</u> if the proposition is always true.
- A compound proposition is a <u>contradiction</u> if the proposition is always false

##### Tautology truth table:

|  p  | ¬p  | p ∨ ¬p |
|:---:|:---:|:------:|
|  T  |  F  |   T    |
|  F  |  T  |   T    |

##### Contradiction truth table:

|  p  | ¬p  | p ∧ ¬p |
|:---:|:---:|:------:|
|  T  |  F  |   F    |
|  F  |  T  |   F    |

##### Conditional Statements

| Proposition:    | <span style="white-space: nowrap;">p → q</span>   | Ex: If it is raining today, the game will be cancelled.         |
| --------------- | ------- | --------------------------------------------------------------- |
| Converse:       | <span style="white-space: nowrap;">q → p</span>   | Ex: If the game is cancelled, it is raining today.              |
| Contrapositive: | <span style="white-space: nowrap;">¬q → ¬p</span> | Ex: If the game is not cancelled, then it is not raining today. |
| Inverse:        | <span style="white-space: nowrap;">¬p → ¬q</span> | Ex: If it is not raining today, the game will not be cancelled. |

