### Rules:

1. The number of columns in the first matrix must equal the number of rows in the second matrix. If matrix A has dimensions $m \times n$ and matrix B has dimensions $p \times q$, then $n$ must be equal to $p$ in order to multiply $A$ by $B$.
    
2. The resulting matrix will have dimensions $m \times q$. In other words, the number of rows from the first matrix and the number of columns from the second matrix.
    
3. Matrix multiplication is associative: $(AB)C = A(BC)$, but not commutative: 
   $AB ≠ BA$ (in general).
    
4. The distributive property holds for matrix multiplication: 
   $A(B + C) = AB + AC$ and $(A + B)C = AC + BC$.
    
5. The product of the identity matrix and any matrix is the matrix itself: 
   $AI = A$ and $IA = A$, where $I$ is the identity matrix.
    

### Step-by-step guide:

1. Check that the number of columns in the first matrix equals the number of rows in the second matrix.
    
2. Initialize a resulting matrix with the dimensions $m \times q$, where $m$ is the number of rows in the first matrix and $q$ is the number of columns in the second matrix.
    
3. For each element in the resulting matrix, perform the dot product of the corresponding row from the first matrix and the corresponding column from the second matrix.
    
4. Place the result of the dot product in the corresponding position in the resulting matrix.
    

**Example:**

$$
\left.
	\begin{aligned}
		% row 1 x column 1
		
		&
		\begin{bmatrix} 
			\textcolor{red}{2} & \textcolor{red}{3} \\ 
			1 & 0 
		\end{bmatrix} 
		\times
		\begin{bmatrix} 
			\textcolor{magenta}{4} & 1 \\ 
			\textcolor{magenta}{3} & -1 
		\end{bmatrix}
		&&
			C_{1,1}= \textcolor{red}{2} \times \textcolor{magenta}{4} 
			+ \textcolor{red}{3} \times \textcolor{magenta}{3} &&&= 17
		\\
		% row 1 x column 2
		
		&\begin{bmatrix} 
			\textcolor{red}{2} & \textcolor{red}{3} \\ 
			1 & 0 
		\end{bmatrix} 
		\times
		\begin{bmatrix} 
			4 & \textcolor{magenta}{1} \\ 
			3 & \textcolor{magenta}{-1} 
		\end{bmatrix} 
		&&
			C_{1,2}= \textcolor{red}{2} \times \textcolor{magenta}{1} 
			+ \textcolor{red}{3} \times \textcolor{magenta}{(-1)} &&&= -1
		\\
		% row 2 x column 1
		
		&
		\begin{bmatrix} 
			2 & 3 \\ 
			\textcolor{red}{1} & \textcolor{red}{0} 
		\end{bmatrix} 
		\times
		\begin{bmatrix} 
			\textcolor{magenta}{4} & 1 \\ 
			\textcolor{magenta}{3} & -1 
		\end{bmatrix}
		&&
			C_{2,1}= \textcolor{red}{1} \times \textcolor{magenta}{4} 
			+ \textcolor{red}{0} \times \textcolor{magenta}{3} &&&= 4
		\\
		% row 2 x column 2
		
		&\begin{bmatrix} 
			2 & 3 \\ 
			\textcolor{red}{1} & \textcolor{red}{0} 
		\end{bmatrix} 
		\times
		\begin{bmatrix} 
			4 & \textcolor{magenta}{1} \\ 
			3 & \textcolor{magenta}{-1} 
		\end{bmatrix} 
		&&
			C_{2,2}= \textcolor{red}{1} \times \textcolor{magenta}{1} 
			+ \textcolor{red}{0} \times \textcolor{magenta}{(-1)} &&&= 1
	\end{aligned}
	~~~~
\right\}
\begin{bmatrix} 
			17 & -1 \\ 
			4 & 1 
		\end{bmatrix} 
$$

