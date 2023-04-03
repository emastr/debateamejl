---
layout: post
title:  "Multi Scale Methods"
date:   2023-02-26 23:34:51 +0200
categories: multiscale
author: Emanuel
featured: true
thumbnail: "/assets/posts/2023-02-27-hmm_stokes/thumb.png"
description: "Summary of multi scale problems and methods."
math: true
---


## Multi Scale problems


Below is a list of useful literature on the subject, along with comments.

#### Literature
   * [Tutorials in multi scale problems by Runborg et al.](https://link.springer.com/book/10.1007/978-3-540-88857-4)
      Some tutorials on Multi Scale Simulations (FMM, Wavelet analysis.) The one on Wavelet analysis is interesting (Runborg.)

   * [Introductory book](https://link.springer.com/book/10.1007/978-0-387-09496-0)  
      Homogenization recap in Appendix B:
      Typically a problem of the form 
      $$
         \nabla \cdot (a(x/\epsilon) \nabla u(x)) + a_0(x/\epsilon) u(x) = f(x), \implies L_\epsilon u = f
      $$
      where $a$ and $a_0$ are 1-periodic functions. Goal is to study the limit as $\epsilon \to 0$. Homogenisation theory is **not** what we are interested in. Instead, we want to minimize error of a low resolution approximation, at a nonzero $\epsilon$. Of course we still want convergence to homogenized solution as $\epsilon \to 0$. The 1-d homogenization consists of taking the harmonic average.

      The standard assumption seems to be periodic multi scale:  
      $$
         u(x) = \tilde{u}(x) + \phi(x/\epsilon),
      $$
      where $\tilde{u}$ and $\phi$ are periodic, and $\tilde{u}$ is band limited to some large scale $>>1/\epsilon$. 


    
    
