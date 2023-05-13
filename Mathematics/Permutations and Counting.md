$$
P(n,r) = \frac{n!}{(n - r)! }
$$

$$
\begin{aligned}
	P(10,1) = \frac{10!}{(10 - 1)! } &= 10 \\
	P(10,2) = \frac{10!}{(10 - 2)! } &= 90 && =9\times P(10,1) \\
	P(10,3) = \frac{10!}{(10 - 3)! } &= 720 && =8\times P(10,2) \\
	P(10,4) = \frac{10!}{(10 - 4)! } &= 5040 && =8\times P(10,3) \\
	P(10,5) = \frac{10!}{(10 - 5)! } &= 30240 && =7\times P(10,4) \\
	P(10,6) = \frac{10!}{(10 - 6)! } &= 151200 && =6\times P(10,5) \\
	P(10,7) = \frac{10!}{(10 - 7)! } &= 604800 && =5\times P(10,6) \\
	P(10,8) = \frac{10!}{(10 - 8)! } &= 1814400 && =4\times P(10,7) \\
	P(10,9) = \frac{10!}{(10 - 9)! } &= 3628800 && =3\times P(10,8) \\
	P(10,10) = \frac{10!}{(10 - 10)! } &= 3628800 && =2\times P(10,9) \\
	30240
\end{aligned}
$$

- The $(n - r)$ term in the denominator removes an incremental amount from each set of permutations.

- In $P(10, 1)$ there are $10$ permutations in the set. These align with counting from 0 to 9.
- In $P(10, 2)$ there are $90$ permutations in the set. These align with counting from 0 to 99, however the numbers 00, 11, 22, 33, 44, 55, 66, 77, 88, 99 will be missing from the set because they are not value permutations.
- In $P(10, 3)$ there are $720$ permutations in the set, because like in $P(10,2)$ a large number of values are not valid permutations (e.g.  $001, 010, 100, 011, 110, 111, 002, 020, \cdots$ ).

