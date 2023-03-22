
# Overview - Sets

### Intersection, Union, and Element Of

<div style="display: inline-block; border: 1px solid; padding: 0px 40px 0px 10px; ">
	<div style="white-space: pre;">
		<u>Intersection</u>
    x ∈ A ∩ B  ↔  (x ∈ A) ∧ (x ∈ B)
		
		<u>Union</u>
    x ∈ A ∪ B  ↔  (x ∈ A) ∨ (x ∈ B)
		
		<u style="display: inline-block; padding-bottom: 5px;">Element of</u>
		x ∈ <span style="text-decoration: overline;">A</span>  ↔  ¬(x ∈ A)
	  
	  <u style="display: inline-block; padding-bottom: 5px;">Not In</u>
	  x ∉ <span style="text-decoration: overline;">A</span> ↔ x ∈ A	  
  </div>  
</div>

### Existential Booleans: True or False, Truth or Dare.

- True and false correspond with the universal and empty sets.

<div style="display: inline-block; border: 1px solid; padding: 0px 40px 0px 10px; ">
	<div style="white-space: pre;">
		<u>Something exists in the universal set</u>
    x ∈ U   ↔   T
    
		<u>Nothing exists in the empty set</u>
    x ∈ ∅   ↔   F    
	</div>
</div>

### Laws

<table class="lined td-padding grayscale no-wrap">
  <thead>
    <tr>
      <th>Name</th>
      <th colspan="2">Identities</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Idempotent</td>
      <td>A ∪ A = A</td>
      <td>A ∩ A = A</td>
    </tr>
    <tr>
      <td>Associative</td>
      <td>(A ∪ B) ∪ C = A ∪ (B ∪ C)</td>
      <td>(A ∩ B) ∩ C = A ∩ (B ∩ C)</td>
    </tr>
    <tr>
      <td>Commutative</td>
      <td>A ∪ B = B ∪ A</td>
      <td>A ∩ B = B ∩ A</td>
    </tr>
    <tr>
      <td>Distributive</td>
      <td>A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)</td>
      <td>A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</td>
    </tr>
    <tr>
      <td>Identity</td>
      <td>A ∪ ∅ = A</td>
      <td>A ∩ U = A</td>
    </tr>
    <tr>
      <td>Domination</td>
      <td>A ∩ ∅ = ∅</td>
      <td>A ∪ U = U</td>
    </tr>
    <tr>
      <td>Double complement</td>
      <td colspan="2" style="text-align: left;">
        <span style="border-top: 2px solid; margin-top: 5px; display: inline-block;">
          <span style="border-top: 2px solid; margin-top: 5px; display: inline-block;">A</span>
        </span> = A
      </td>
    </tr>
    <tr>
      <td>Complement</td>
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
      <td>De Morgan's</td>
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
      <td>Absorption</td>
      <td>A ∪ (A ∩ B) = A</td>
      <td>A ∩ (A ∪ B) = A</td>
    </tr>

  </tbody>
</table>

### Operators

| Operation            |                     Notation                      | Definition                                                                     |  Description                                                     |
| -------------------- |:-------------------------------------------------:| ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Intersection         |                       A ∩ B                       | { x : x ∈ A and x ∈ B }                                                         | The set of elements shared by A and B.                                                      |
| Union                |                       A ∪ B                       | <span style="white-space: nowrap;">{ x : x ∈ A or x ∈ B or both }</span>        | Elements of A and B are joined with no duplicates.    |
| Difference           |                       A - B                       | { x : x ∈ A and x ∉ B }                                                         | Every element shared with B is removed from A.        |
| <span style="white-space: nowrap;">Symmetric Difference</span> |                       A ⊕ B                       | <span style="white-space: nowrap;">{ x : x ∈ A - B or x ∈ B - A }</span>        | Union of unshared elements between A and B.              |
| Complement           | <span style="text-decoration: overline;">A</span> | { x : x ∉ A }                                                                   | Every element in the universal set not in A.          |

### Equivalencies
| Operation            |                     Notation                      |                      Equivalence                      | Symbolic Equivalence |
| -------------------- |:-------------------------------------------------:|:-----------------------------------------------------:|:--------------------:|
| Intersection         |                       A ∩ B                       |                         A - B                         |        A ∧ B         |
| Union                |                       A ∪ B                       |                         A + B                         |        A ∨ B         |
| Difference           |                       A - B                       | A ∩ <span style="text-decoration: overline;">B</span> |        A ∧ ¬B        |
| Symmetric Difference |                       A ⊕ B                       |                 &nbsp;&nbsp;&nbsp;( A - B ) ∪ ( B - A )&nbsp;&nbsp;&nbsp;                 | (A ∧ ¬B) ∨ (B ∧ ¬A)  |
| Compliment                     | <span style="text-decoration: overline;">A</span> |                         U - A                         |          ¬A          |


### Assertions

| Condition     | Notation | Definition                                                                                  | Description                                           |
|:------------- |:--------:|:------------------------------------------------------------------------------------------- |:----------------------------------------------------- |
| Subset        |  A ⊆ B   | ∀x(x ∈ A → x ∈ B)                                                                           | Every element of A is in B.                           |
| <span style="white-space: nowrap;">Proper Subset</span> |  A ⊂ B   | <span style="white-space: nowrap;">∀x(x ∈ A → x ∈ B)<br />&nbsp; ∧ ∃x(x ∈ B ∧ x ∉ A)</span> | Every element of A is in B,  but B has more elements. |
| Not Subset    |  A ⊄ B   | ∀x(x ∈ B → x ∉ A)                                                                           | Every element of A is not in B.                       |



