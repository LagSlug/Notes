
1.

$$
\displaylines{

=\frac{n!}{\textcolor{red}{(0)!}(n-0)!}
a^{n}b^0 
+ \frac{n!}{\textcolor{red}{(1)!}
(n-1)!}a^{n-1}b^1 
+ \cdots 
+ \frac{n!}{\textcolor{red}{(n-1)!}(1!)}
a^{1}b^{n-1} 
+ \frac{n!}{\textcolor{red}{(n)!}(0)}
a^{0}b^n
}
$$

$$
\displaylines{
\begin{align}
   &=\frac{n!}{0!(n-0)!}a^{n}b^0 \\ 
   &+ \frac{n!}{1!(n-1)!}a^{n-1}b^1\ + \cdots \\ 
   &+ \frac{n!}{(n-1)!1!}a^{1}b^{n-1} \\ 
   &+ \frac{n!}{n!}a^{0}b^n
   
\end{align}
}
$$



## another

proof that shows how to construct the multiplication operation using only the NAND operation in boolean logic, using LaTeX:

We start by defining the NAND operation as:

$$
\begin{equation} A \uparrow B \equiv \neg (A \land B) \end{equation}
$$

where $\neg$ represents the logical NOT operator, $\land$ represents the logical AND operator, and $\uparrow$ represents the NAND operator.

Next, we can use the NAND operation to construct the logical NOT operator as follows:

$\begin{equation} \neg A \equiv A \uparrow A \end{equation}$

That is, the complement of a proposition $A$ is equivalent to the NAND operation of $A$ with itself.

Using the logical NOT operator, we can construct the logical OR operator as follows:

$\begin{equation} A \lor B \equiv \neg (\neg A \land \neg B) \end{equation}$

That is, the disjunction (OR) of two propositions $A$ and $B$ is equivalent to the NAND operation of the complements of $A$ and $B$.

Finally, we can use the logical NOT and OR operators to construct the multiplication operation as follows:

$\begin{equation} A \times B \equiv \neg (\neg A \lor \neg B) \end{equation}$

That is, the product of two binary digits $A$ and $B$ is equivalent to the NAND operation of the complements of $A$ and $B$.

Therefore, we have shown that it is possible to construct the multiplication operation using only the NAND operation in boolean logic.