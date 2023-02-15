| Law             | Formula                                                                | Law of                                             |
|:--------------- | ---------------------------------------------------------------------- |:-------------------------------------------------- |
| Idempotent      | p ∧ p = p <br /> p ∨ p = p                                             | Conjunction <br /> Disjunction                     |
| Commutative     | p ∧ q = q ∧ p <br /> p ∨ q = q ∨ p                                     | Conjunction <br /> Disjunction                     |
| Associative     | (p ∧ q) ∧ r = p ∧ (q ∧ r) <br /> (p ∨ q) ∨ r = p ∨ (q ∨ r)             | Conjunction <br /> Disjunction                     |
| Distributive    | p ∧ (q ∨ r) = (p ∧ q) ∨ (p ∧ r) <br /> p ∨ (q ∧ r) = (p ∨ q) ∧ (p ∨ r) | And over Or <br />  Or over And                    |
| De Morgans      | ¬ (p ∧ q) = ¬ p ∨ ¬ q <br /> ¬ (p ∨ q) = ¬ p ∧ ¬ q                     | *First* <br /> *Second*                            |
| De Morgans (II) | ¬∀x P(x)   ≡   ∃x ¬P(x) <br /> ¬∃x P(x)   ≡   ∀x ¬P(x)                 |                                                    |
| Identity        | p ∧ T = p <br /> p ∨ F = p                                             | Conjunction <br /> Disjunction                     |
| Domination      | p ∧ F = F <br /> p ∨ T = T                                             | Conjunction <br /> Disjunction                     |
| Negation        | p ∧ ¬p = F <br /> p ∨ ¬p = T                                           | *Contradiction* <br /> *Tautology*                 |
| Double Negation | ¬ (¬ p) = p                                                            | *Involution Law*                                   |
| Contrapositive  | p → q ≡ ¬ q → ¬ p                                                      |                                                    |
| Converse        | p → q ≠ q → p                                                          |                                                    |
| Inverse         | p → q ≠ ¬q → ¬p                                                        |                                                    |
| Absorption      | p ∨ ( p ∧ q ) ≡ p <br /> p ∧ ( p ∨ q ) ≡ p                             | *Left Absorption Law* <br/> *Right Absorption Law* |
| Implication     | p → q ≡ ¬p ∨ q                                                         | *Conditional Law*                                  |
| Bi-Implication  | p ↔ q ≡ ( p → q ) ∧ ( q → p )                                          | *Bi-Conditional Law*                               |
|                 |                                                                        |                                                    |

### De Morgans Law
- When a negation "passes" over a quantifier, it causes the quantifier to "flip".
- Existential becomes Universal, and Universal becomes Existential
$$
	¬∃x∀y ( P(x) + Q(y) = 0 )   ≡   ∀x∃y¬( P(x) + Q(y) = 0 )
	
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

