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
