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
1) Breakdown of error discrepancy
   * Data variance, parameterization style (gauss-leg, uniform, arc), model invariance
   * TODO:
     1) Old training, old geometry, old data gen, G-L - RMSE = 
     2) Old training, old geometry, new data gen, G-L - RMSE = 
     3) Old training, old geometry, new data gen, Uni - RMSE = 
     4) Old training, old geometry, new data gen, Arc - RMSE = 
     5) Old training, new geometry, new data gen, G-L - RMSE = 
     6) Old training, new geometry, new data gen, Uni - RMSE = 
     7) New training, new geometry, new data gen, G-L - RMSE = 
     8) New training, new geometry, new data gen, Arc - RMSE = 
    a vs b shows high variance data, b vs c vs d shows parameterization, b vs e shows new geometry,  
2) Second draft
   * Figures are done 
   * Theory
      1) Computational complexity
      2) Stability of iterations
3) New direction
    * Multiscale methods for Fredholm integral equations - Book
    * Homogenization of integral operators on rough surfaces
      * Possible colab with phillip scholl
    * Reinforcement learning, game theory perspective on optimization 
    * Natural gradient boosting (marius, also open to other collab)

