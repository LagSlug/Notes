Exam 2 - Study Guide

## Unit Cell
![[Chemistry/Inorganic Chemistry/Assignment Set 2/attachments/Unit Cell.svg]]
![[Chemistry/Inorganic Chemistry/Exam 2/attachments/simple-unit-cells.png]]
1. SC - Simple Cubic
	- 1 atom per unit cell
1. BCC - Body-Centered Cubic
	- 2 atoms per unit cell
1. FCC/CCP - Face-Centered Cubic / Cubic Close Packing
	- 4 atoms per unit cell


## Crystal Systems
|   | Crystal System          | Lattice dimensions               | Arity | Required Parameters |
|:-:|-------------------------|----------------------------------|:-----:|---------------------|
| 1 | Cubic                   | a = b = c, α = β = γ = 90°       |   1   | a                   |
| 2 | Tetragonal              | a = b ≠ c, α = β = γ = 90°       |   2   | a, c                |
| 3 | Orthorhombic            | a ≠ b ≠ c, α = β = γ = 90°       |   3   | a, b, c             |
| 4 | Trigonal (Rhombohedral) | a = b = c, α = β = γ ≠ 90°       |   2   | a, α                |
| 5 | Hexagonal               | a = b ≠ c, α = β = 90°, γ = 120° |   2   | a, c                |
| 6 | Monoclinic              | a ≠ b ≠ c, α = γ = 90° ≠ β       |   4   | a, b, c, β          |
| 7 | Triclinic               | a ≠ b ≠ c, α ≠ β ≠ γ ≠ 90°       |   6   | a, b, c, α, β, γ    |

- If the question askes "if the third axis is perpendicular, what crystal system is drawn?", then the answer must be: cubic, tetragonal, orthorhombic, or hexagonal.
- Otherwise, the answer must be rhombohedral, monoclinic, or triclinic.

![[Chemistry/Inorganic Chemistry/Symmetry and Group Points/attachments/crystal systems.svg]]


<div style="page-break-after:always;"></div>


## Density and Radius
- Density is mass over volume
- Avogadro's number: 6.022 x 10<sup>23</sup> atoms per mol
- 1 Å = 10<sup>-10</sup> m
- An element will change density at different temperatures and pressures, causing the crystalline structure to change.
- The radius of a BCC is found by using the body-diagonal of the cube.
- The radius of the CCP is found by using the face-diagonal of the cube.

![[Chemistry/Inorganic Chemistry/Exam 2/attachments/simple-unit-cells-with-diagonals.png]]

<u>Example</u>

At 20°C, Fe is bcc, with a side length of **a = 2.866 Å**. 
At 950 °C, Fe is ccp, with a side length of **a = 3.43 Å**. 

<u>Steps for obtaining density:</u>
1. Start with the atomic mass of Fe in grams per mol.
   Convert to grams per atom by using Avogadro's number.
2. Then to grams per unit cell by using the number of atoms per unit cell.
3. Then to grams per cubic angstrom, by using the cube of the value provided.
   At this point we've found density, but the value isn't in standard units.
4. Convert from cubic anstrom to cubic meters.
5. Convert from grams to kilograms.  

<div style="page-break-after:always;"></div>


<u>Density @ 20°C</u>
  $$
 \frac{55.845~\frac{g}{mol}}
			{6.022 \times 10^{23}~\frac{atoms}{mol}} 
 \times
 \frac{2 \text{ atoms}}{\text{BCC}}
 \times
 \frac{\text{BCC}}{ (2.866~Å)^3}
 \times
 \frac{Å^3}{(10^{-10}~m)^3}
 \times
 \frac{1~kg}{1000 ~g}
 = 7,879 kg / m^3
 
$$
<u>Density @ 950°C</u>
  $$
 \frac{55.845~\frac{g}{mol}}
			{6.022 \times 10^{23}~\frac{atoms}{mol}} 
 \times
 \frac{4 \text{ atoms}}{\text{BCC}}
 \times
 \frac{\text{CCP}}{ (3.43~Å)^3}
 \times
 \frac{Å^3}{(10^{-10}~m)^3}
 \times
 \frac{1~kg}{1000 ~g}
 = 9,192 kg / m^3
 
$$
<u>Radius @ 20°C</u>

- In a cube with a side of length $a$, its body diagonal has length $a \sqrt{3}$.
- There are 4 radii along the length of a body diagonal.
  
$$
	\frac{2.866~Å \times \sqrt{3}}{4 \text{ radii}} = 1.241~Å
$$

<u>Radius @ 950°C</u>

- In a cube with a side of length $a$, its face diagonal has length $a \sqrt{2}$.
- There are 3 radii along the length of a face diagonal.

$$
	\frac{3.43~Å \times \sqrt{2}}{3 \text{ radii}} = 4.85~Å
$$

<div style="page-break-after:always;"></div>


## Point Groups

![[Chemistry/Inorganic Chemistry/Symmetry and Group Points/attachments/Symmetry Analysis Decision Tree.svg|Symmetry Analysis Decision Tree SVG]]

<div style="page-break-after:always;"></div>

1. Is the molecule linear?
    Yes: Is there a center of inversion?
	    Yes: D<sub>∞h</sub> (e.g. Carbon dioxide)
	    No: C<sub>∞h</sub> (e.g. ) (Hydrogen chloride)
2. Are there two or more C'<sub>n</sub> where n > 2?
		Yes: Is there a center of inversion?
		 Yes: Does it have a C<sub>5</sub> element?
			  Yes: I<sub>h</sub> ( e.g. Buckminsterfullerene)
			  No: O<sub>h</sub> ( e.g. Sulfur Hexafluoride, Cubane)
		  No: T<sub>d</sub> (e.g. Methane)
3. Does C<sub>n</sub> exist?
		No: Is there a horiztonal mirror plane (σ<sub>h</sub>)?
		 Yes: C<sub>s</sub>
		 No: Is there a center of inversion?
			 Yes: C<sub>i</sub>
			 No: C<sub>1</sub>
4. Select C<sub>n</sub> with highest n, is there a C<sub>2</sub> axis perpendicular to that C<sub>n</sub>?
		Yes: Is there a horiztonal mirror plane (σ<sub>h</sub>)?
			Yes: D<sub>nh</sub>
			No: Is there a dihedral mirror plane (σ<sub>d</sub>)
				Yes: D<sub>nd</sub>
				No: D<sub>n</sub>
5. Is there a horiztonal mirror plane (σ<sub>h</sub>)
		Yes: C<sub>nh</sub>
6. Is there a vertical mirror plane (σ<sub>v</sub>)?
		Yes: C<sub>nv</sub>
7. Is it S<sub>2n</sub>?
		Yes: S<sub>2n</sub>
		No: C<sub>n</sub>

<div style="page-break-after:always;"></div>


## MO Diagram

- HOMO - highest occupied molecular orbital
- LUMO - lowest unoccupied molecular orbital

#### BH<sub>3</sub>

![[Chemistry/Inorganic Chemistry/Exam 2/attachments/MO Diagram BH3.png]]

BH<sub>3</sub> is an acid because it's LUMO is an unfilled bonding orbital with 1a''<sub>2</sub> symmetry.

<div style="page-break-after:always;"></div>

#### NH<sub>3</sub>

![[Chemistry/Inorganic Chemistry/Exam 2/attachments/MO Diagram NH3.png]]

NH<sub>3</sub> is a base because its HOMO is a filled bonding orbital with 2a<sub>1</sub> symmetry, so it's more willing to donate electrons than it is to accept them.
