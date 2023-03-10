

### Every perfect square is either a multiple of 4 or a multiple of 4 plus 1

$$
\bbox[border: 1px solid; padding: 30px;]{\style{}{
\displaylines{
	\class{mathjax--left-align}{
		\text{Theorem}
	} \\ 
	\class{mathjax--left-align}{
		\text{Every perfect square is either a multiple of 4 or a multiple of 4 plus 1.}
	} \\
	\\ 
	\class{mathjax--left-align}{
		\text{Known}
	} \\
	\class{mathjax--left-align}{
		\text{Every perfect square can be expressed as $n^2$ for some integer $n$.}
	} \\
	\\
	\class{mathjax--hr}{} \\
		
	%% cases %%
	\class{mathjax--left-align}{
		\text{Consider two cases.}
	} \\ \\
	%%case 1%%
	\class{mathjax--left-align}{
		\text{Case 1: $n$ is even. }
	} \\
	\class{mathjax--left-align}{
		\text{If $n$ is even, then $n$ can be expressed as 2k, for some integer k.} 
	} 
	\\
	∴ ~~ n^2 = 2k^2 = 4k^2	
	\\ \\
	\class{mathjax--left-align}{
		\text{Since $k^2$ is an integer, we can conclude that if $n$ is even,}
	} \\
	\class{mathjax--left-align}{
		\text{then $n^2$ is a multiple of $4$.}
	} \\
	
	
	%% case 2 %%
	\class{mathjax--left-align}{
		\text{}
	} \\
	\class{mathjax--left-align}{
		\text{Case 2: $n$ is odd.}
	} \\
	
	\class{mathjax--left-align}{
		\text{If $n$ is odd, then $n$ can be expressed as $2k+1$, for some integer $k$.}
	} \\
	\begin{aligned}
		∴ ~~ n^2 &= (2k + 1)^2 \\
		&= 4k^2 + 4k + 1 \\
		&= 2(2k^2 +2k) + 1 \\
		&= 2m + 1 && \text{$m$ is an integer}
	\end{aligned} \\
	\\
	\class{mathjax--left-align}{
		\text{Since 2m+1 is an integer, we can conclude that if n is C,}
	} \\
	\class{mathjax--left-align}{
		\text{then $n^2$ is a multiple of 4 plus 1.  ■}
	} \\
	\\
	∴ ~~ \text{Bird culture.} ~~■
}}}
$$


### If $xy$ is not an integer multiple of 5, then neither x nor y is an integer multiple of $5$

<u>Prove</u>
Let $x$ and $y$ be two integers. If $xy$ is not an integer multiple of 5, then neither x nor y is an integer multiple of $5$.

<u>Contrapositive</u>
If $x$ or $y$ is an integer multiple of $5$, then $xy$ is a multiple integer of $5$.

#### Using 2 cases
Case 1: $x$ is an integer multiple of $5$.

Assume that $x$ is an integer multiple of $5$. Then $x = 5a$ for some integer $a$. 
$$
	∴ ~~xy = (5a)y = 5(ay)
$$

Since $ay$ is an integer, it follows that $xy$ is an integer multiple of $5$.

Case 2: $y$ is an integer multiple of $5$.

Assume that $y$ is an integer multiple of $5$. Then $y = 5b$ for some integer $b$. 
$$
∴ ~~ xy = x(5b) = 5(xb)
$$

Since $xb$ is an integer, it follows that $xy$ is an integer multiple of $5$.

Since $xy$ is an integer multiple of $5$ in both cases, it follows that if either $x$ or $y$ is an integer multiple of $5$, then $xy$ is an integer multiple of $5$. ■

#### Using "With loss of generality" and a single case

Without loss of generality, assume that $x$ is an integer multiple of $5$. 
Then  $x = 5a$ for some integer $a$. 
$$ 
	∴ ~~ xy = (5a)y = 5(ay)
$$

Since $ay$ is an integer, it follows that $xy$ is an integer multiple of $5$. Therefore, if either $x$ or $y$ is an integer multiple of $5$, then $xy$ is an integer multiple of $5$. This completes the proof using WLOG.



### For any real number $x$, $|x-6| + x \gt 3$

Case 1:  $x \geq 6$
Since $x \geq 6$, $|x-6|$ is a non-negative number.
$$
\displaylines{
	∴  |x-6| = x-6 \\ \\
	\begin{aligned}
		|x-6| + x &> 3 \\
		(x-6) + x &> 3 \\
		2x &> 9 \\
		x &> \frac 9 2 && \text{The inequality holds for all x ≧ 6}\\
	\end{aligned}
}
$$

Case 2: $x < 6$
Since $x < 6$, $|x-6|$ is a negative number.
$$
 \displaylines{
	 ∴ ~~~|x-6| = -(x-6) \\ \\
	 \begin{aligned}
		-(x-6) + x &> 3 \\
		-x + 6 + x &> 3 \\
		6 &> 3 && \text{The inequality holds for all x < 6}
	 \end{aligned}
 }
$$
∴ Since both cases hold true, the claim must be true. ■
