# Propositional Operators

| Symbol | Name                  | Word | Example                                   |
|:------:|:--------------------- |:----:|:----------------------------------------- |
|  `¬`   | Negation              | NOT  | ¬p means "not p"                          |
|  `∧`   | Conjunction           | AND  | p ∧ q means "p and q"                     |
|  `∨`   | Disjunction           |  OR  | p ∨ q means "p or q"                      |
|  `⟶`   | Implication           |  IF  | p ⟶ q means "if p, then q"                |
|  `⟷`   | Bi&#x2011;Implication | IIF  | p ⟷ q means "p if and only if q"          |
|  `⊕`   | Exclusive OR          | XOR  | p ⊕ q means "either p or q, but not both" |

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

### Negation

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

### Conjunction

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

### Disjunction

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

### Implication

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


### Bi-Implication

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

### Exclusive OR

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

# Set Operators

| Operation            |                     Notation                      | Definition                                                                     |  Description                                                     |
| -------------------- |:-------------------------------------------------:| ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Intersection         |                       A ∩ B                       | { x : x ∈ A and x ∈ B }                                                         | The set of elements shared by A and B.                                                      |
| Union                |                       A ∪ B                       | <span style="white-space: nowrap;">{ x : x ∈ A or x ∈ B or both }</span>        | Elements of A and B are joined with no duplicates.    |
| Difference           |                       A - B                       | { x : x ∈ A and x ∉ B }                                                         | Every element shared with B is removed from A.        |
| Symmetric difference |                       A ⊕ B                       | <span style="white-space: nowrap;">{ x : x ∈ A - B or x ∈ B - A }</span>        | Union of unshared elements between A and B.              |
| Complement           | <span style="text-decoration: overline;">A</span> | { x : x ∉ A }                                                                   | Every element in the universal set not in A.          |

# Set Assertions

| Condition     | Notation | Definition                                                                                  | Description                                           |
|:------------- |:--------:|:------------------------------------------------------------------------------------------- |:----------------------------------------------------- |
| Subset        |  A ⊆ B   | ∀x(x ∈ A → x ∈ B)                                                                           | Every element of A is in B.                           |
| <span style="white-space: nowrap;">Proper Subset</span> |  A ⊂ B   | <span style="white-space: nowrap;">∀x(x ∈ A → x ∈ B)<br />&nbsp; ∧ ∃x(x ∈ B ∧ x ∉ A)</span> | Every element of A is in B,  but B has more elements. |
| Not Subset    |  A ⊄ B   | ∀x(x ∈ B → x ∉ A)                                                                           | Every element of A is not in B.                       |

