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

| Operation              |  Notation  |  Description                     |
|------------------------|:----------:|----------------------------------|
|  Intersection          |    A ∩ B   |  { x : x ∈ A and x ∈ B }         |
|  Union                 |    A ∪ B   |  { x : x ∈ A or x ∈ B or both }  |
|  Difference            |    A - B   |  { x : x ∈ A and x ∉ B }         |
|  Symmetric difference  |    A ⊕ B   |  { x : x ∈ A - B or x ∈ B - A }  |
|  Complement            |      <span style="text-decoration: overline;">A</span>     |  { x : x ∉ A }                   |

# Set Identities

### Intersection, Union, and Element Of

<div style="display: inline-block; border: 1px solid; padding: 0px 40px 0px 10px; ">
	<div style="white-space: pre;">
		<u>Intersection</u>
    x ∈ A ∩ B  ↔  (x ∈ A) ∧ (x ∈ B)
		
		<u>Union</u>
    x ∈ A ∪ B  ↔  (x ∈ A) ∨ (x ∈ B)
		
		<u style="display: inline-block; padding-bottom: 5px;">Element of</u>
		x ∈ <span style="text-decoration: overline;">A</span>  ↔  ¬(x ∈ A)
    	</div>
</div>

### True and False

- True and false correspond with the universal and empty sets.

<div style="display: inline-block; border: 1px solid; padding: 0px 40px 0px 10px; ">
	<div style="white-space: pre;">
		<u>Something exists in the universal set</u>
    x ∈ U   ↔   T
    
		<u>Nothing exists in the empty set</u>
    x ∈ ∅   ↔   F    
	</div>
</div>

### Table of Set Identities
<table class="lined td-padding grayscale no-wrap">
  <thead>
    <tr>
      <th>Name</th>
      <th colspan="2">Identities</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Idempotent laws</td>
      <td>A ∪ A = A</td>
      <td>A ∩ A = A</td>
    </tr>
    <tr>
      <td>Associative laws</td>
      <td>(A ∪ B) ∪ C = A ∪ (B ∪ C)</td>
      <td>(A ∩ B) ∩ C = A ∩ (B ∩ C)</td>
    </tr>
    <tr>
      <td>Commutative laws</td>
      <td>A ∪ B = B ∪ A</td>
      <td>A ∩ B = B ∩ A</td>
    </tr>
    <tr>
      <td>Distributive laws</td>
      <td>A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)</td>
      <td>A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</td>
    </tr>
    <tr>
      <td>Identity laws</td>
      <td>A ∪ ∅ = A</td>
      <td>A ∩ U = A</td>
    </tr>
    <tr>
      <td>Domination laws</td>
      <td>A ∩ ∅ = ∅</td>
      <td>A ∪ U = U</td>
    </tr>
    <tr>
      <td>Double complement law</td>
      <td colspan="2" style="text-align: left;">
        <span style="border-top: 1px solid; margin-top: 5px; display: inline-block;">
          <span style="text-decoration: overline; margin-top: 5px; display: inline-block;">A</span>
        </span> = A
      </td>
    </tr>
    <tr>
      <td>Complement laws</td>
      <td>
        A ∩ <span style="text-decoration: overline;">A</span> = ∅
        <div style="height: 10px;"></div>
        <span style="text-decoration: overline;">U</span> = ∅</td>
      <td>
        A ∪ <span style="text-decoration: overline;">A</span> = U<div />
        <div style="height: 10px;"></div>
        <span style="text-decoration: overline;">∅</span> = U
      </td>
    </tr>
    <tr>
      <td>De Morgan's laws</td>
      <td>
	      <span style="text-decoration: overline;">A ∪ B</span> 
	      = <span style="text-decoration: overline;">
	      A</span> ∩ <span style="text-decoration: overline;">B</span>
			</td>
      <td>
	      <span style="text-decoration: overline;">A ∩ B</span> 
	      = <span style="text-decoration: overline;">
	      A</span> ∪ <span style="text-decoration: overline;">B</span>
			</td>
    </tr>
    <tr>
      <td>Absorption laws</td>
      <td>A ∪ (A ∩ B) = A</td>
      <td>A ∩ (A ∪ B) = A</td>
    </tr>
  </tbody>
</table>
