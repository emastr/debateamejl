---
layout: post
title:  "Weekly Notes"
date:   2024-08-22 15:33:00 +0200
categories: multiscale
author: Emanuel
featured: true
thumbnail: "/assets/posts/2024-02-27-hmm_stokes/thumb.png"
description: "Weekly Progess Notes."
math: true
---


### 2024

#### Aug 19 - 23

Main goals
* Breakdown of error discrepancy
   * Data variance, parameterization style (gauss-leg, uniform, arc), model invariance
   * TODO:
     * a) Old training, old geometry, old data gen, G-L - RMSE = 1% error
     * b) Old training, old geometry, old data gen, both riesz, G-L - RMSE = 2%
     * c) Old training, old geometry, new data gen, G-L - RMSE = 8%
     * d) Old training, old geometry, new data gen, Arc - RMSE = 7%
     * e) Old training, old geometry, new data gen, Uni - RMSE = 
     * f) Old training, new geometry, new data gen, G-L - RMSE = 
     * g) Old training, new geometry, new data gen, Uni - RMSE = 
     * h) New training, new geometry, new data gen, G-L - RMSE = 
     * i) New training, new geometry, new data gen, Arc - RMSE = 
    a vs c shows high variance data, c vs d vs e shows parameterization, c vs f shows new geometry,  
* Second draft
   * Figures are done 
   * Theory
      * Computational complexity
      * Stability of iterations
* New direction
    * Inversa problem? 
      * Prata med Shervin Bagheri
      * Multiskaligt? 
        * Seismic imaging (elastiska vågekv / elektromagnetism)
        * Vågutbrednin gaussian beams
        * Travel time tomography
      * Vågfrontsmängden
        * Signal och operator som verkar
        * Hur propagerar singulariteter under operatorn
    * <b> Learned Homogenization:</b> 
      * Multiscale methods for Fredholm integral equations - Book
      * Homogenization as an operator learning problem $$A_\epsilon \mapsto \tilde A$$
      * Homogenization of Fredholm integral operators on rough surfaces: $$K_\epsilon (I - K_\epsilon)\sigma_\epsilon \approx \tilde K(I - \tilde K)\tilde\sigma.$$ Reading about wavelets and representations using isometries. Possibly homogenize using sparse wavelet strategy? How to do that without needing to compare on all levels. Reinforcement learning
      * Possible colab with phillip scholl
    * <b> Game theory perspective on optimization </b> 
      * Reinforcement learning
      * Placement of computational boxes in HMM -> Heterogeneous problems
      * Mart
    * <b> Natural gradient boosting (marius, also open to other collab) </b>
      * Finish up the code, is it useful? How to regularize
    * <b> Reading </b>
      * Multiscale methods for Fredholm integral equations - Book

