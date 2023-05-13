
### Definition

- A <u>reducible representation</u> of a mathematical object can be decomposed into smaller, simpler representations, often referred to as irreducible representations.

$$
\Gamma = \frac{1}{h} \sum_{R} \chi_R^{(rep)} \times \chi_R^{(basis)}
$$
- $\Gamma$ represents the reducible representation
- $h$ is the order of the point group (total number of symmetry operations)
- $R$ represents all symmetry operations that the summation runs over
- $\chi_R^{(rep)}$ is the character of the representation in question
- $\chi_R^{(basis)}$ is the character of the basis functions


### Example $CO_2$

- Identify the point group of molecule.

	Flow Chart Method:
	1. Is the molecule linear? Yes.
	2. Is there a center of inversion? Yes.
	3. Conclusion: $D_{∞h}$

	Logical Method:
	1. Highest (principal) axes of rotation: $C_{∞}$
	2. Rotations $n = ∞$, so there are either $0$ or $nC_2$ axes.
	3. There are $∞C_2$ axes perpendicular to pricipal axes, so the molecule has dihedral symmetry.
	4. Planes of symmetry: $σ_h$, $σ_v$, $σ_d$
	5. There is a horizontal plane of symmetry ($σ_h$), which takes precedence. ( $σ_h > σ_d > σ_v$ ).
	6. Conclusion: $D_{∞h}$

![[Chemistry/Core/attachments/CO2 with labeled point groups.svg]]

- Substitute $D_{∞h}$ with $D_{2h}$
  ($C_{∞h}$ would be substituted with $C_{2h}$)

- Assign x, y , and z axes to molecule - aligning the pricipal axis with the z-axis

![[Chemistry/Core/attachments/CO2 with labeled axes.svg]]

- Find the character table for $D_{2h}$
$$
   \begin{array}{|c|c|c|c|c|c|c|c|c|}
        \hline        
        D_{2h} & 
        ~~E~~ & 
        C_{2}(z) & 
        C_{2}(y) & 
        C_{2}(x) & 
        ~~i~~ & 
        \sigma(xy) & 
        \sigma(xz) & 
        \sigma(yz) \\
        
        \hline
        A_g & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
   
        B_{1g} & 1 & 1 & -1 & -1 & 1 & 1 & -1 & -1 \\
        \hline
        B_{2g} & 1 & -1 & 1 & -1 & 1 & -1 & 1 & -1 \\
        
        B_{3g} & 1 & -1 & -1 & 1 & 1 & -1 & -1 & 1 \\
        \hline
        A_{u} & 1 & 1 & 1 & 1 & -1 & -1 & -1 & -1 \\
        
        B_{1u} & 1 & 1 & -1 & -1 & -1 & -1 & 1 & 1 \\
        \hline
        B_{2u} & 1 & -1 & 1 & -1 & -1 & 1 & -1 & 1 \\
        
        B_{3u} & 1 & -1 & -1 & 1 & -1 & 1 & 1 & -1 \\
        \hline
    \end{array}
$$

- Identify the symmetry operations for $CO_2$
$$
\begin{aligned}
	Identity& &&E \\ 
	Axial~Rotations& &&C_2(x),~C_2(y),~C_2(z) \\
	Inversion~Center& &&i \\
	Planar~Reflections& &&σ(xy),~σ(xz),~σ(yz)
\end{aligned}
$$
- There are $h = 8$ symmetry operations in total.

