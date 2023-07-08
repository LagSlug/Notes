
### Definition

- The trace of a matrix is the sum of elements diagonally, from top-left to bottom-right.
$$
\begin{bmatrix} 
			\textcolor{magenta}{a_{1,1}} & a_{1,2} &\cdots & a_{1,n} \\
			a_{2,1} & \textcolor{magenta}{a_{2,2}} &\cdots & a_{2,n} \\
			\cdots & \cdots &\textcolor{magenta}{\cdots} & \cdots \\
			a_{n,1} & a_{n,2} &\cdots & \textcolor{magenta}{a_{n,n}}
		\end{bmatrix} 
$$

### Formula
$$
\text{Trace}(A) = \sum_{i=1}^{n} a_{i,i} 
= \left\{ a_{1,1}+a_{2,2}+\cdots + a_{n,n}\right\}
$$
### Example

$$
\begin{aligned}
A &= \begin{bmatrix}    
	\textcolor{magenta}1 & 2 & 3 \\    
	4 & \textcolor{magenta}5 & 6 \\    
	7 & 8 & \textcolor{magenta}9
\end{bmatrix}
\\ \\

Trace(A) &= 1 + 5 + 9 \\ 
&= 15
\end{aligned}
$$
