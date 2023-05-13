### Definition

- An <u>irreducible representation</u> of a mathematical object cannot be further decomposed into smaller or simpler representations.
- An irreducible representation is <u>non-decomposable</u>, it cannot be expressed as the sum of other representations.

### Notation

- The Greek lowercase gamma $(\gamma)$ can be used to label irreducible representations.

### Conditions


- A representation $\gamma$ is irreducible if and only if, for any non-zero vector $v \in V$ and any non-zero linear transformation $T: V \rightarrow V$, there exists a group element $g \in G$ such that $T(\gamma(g)(v)) \neq 0$.

$$
\begin{aligned}
	
	&\text{There exists}
	&&\text{a group element $g$ such that}
	\\ \\
	& && v_2 = \gamma(g)(v_1) 
	\\ \\
	& && T(v_2) \neq 0 
	\\ \\
	&\text{Where}
	  &&\text{$\gamma$ is an irreducible representation}\\
	&	&&\text{$v_1$ is a non-zero vector}\\
	& &&\text{$T$ is a non-zero linear transformation}
\end{aligned}


$$
Breakdown

1.  **Non-zero vector $v \in V$**: Choose any vector $v$ from the vector space $V$ such that $v \neq 0$.
    
2.  **Non-zero linear transformation $T: V \rightarrow V$**: Choose any linear transformation $T$ from the set of linear transformations on $V$ such that $T \neq 0$.
    
3.  **Group element $g \in G$**: There exists a group element $g$ in the group $G$.
    
4.  **Representation $\gamma(g)$**: $\gamma(g)$ is the linear transformation associated with the group element $g$ in the representation $\gamma$.
    
5.  **Action of $\gamma(g)$ on $v$**: The action of $\gamma(g)$ on the vector $v$ is given by $\gamma(g)(v)$, which results in a new vector in $V$.
    
6.  **Action of $T$ on $\gamma(g)(v)$**: Apply the non-zero linear transformation $T$ to the vector $\gamma(g)(v)$. The result is $T(\gamma(g)(v))$.
    
7.  **Non-zero result**: If $T(\gamma(g)(v)) \neq 0$ for all non-zero $v \in V$ and non-zero linear transformations $T$, then the representation $\gamma$ is irreducible.

