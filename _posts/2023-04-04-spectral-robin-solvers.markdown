---
layout: post
title:  "Spectral Robin Solvers"
date:   2023-02-26 23:34:51 +0200
categories: multiscale
author: Emanuel
featured: true
thumbnail: "/assets/posts/2023-02-27-hmm_stokes/thumb.png"
description: "Spectral solver for Stokes with non-homogeneous, Robin boundary condition with variable coefficients."
math: true
---



## Spectral solvers with Variable Robin Boundary Conditions.
* [Thesis from KTH Mechanics](), discusses Non homogeneous but not variable coefficients. Erik Boström, thesis. BC for Spec sim of atm. Bound layers
* Spectral element methods: recent dev. applications, perspectives.
* Pip suggested articles: [Imposing D-N-R condition in level-set](https://www.sciencedirect.com/science/article/pii/S0045793015002777?via%3Dihub), constant $\alpha$.[Stress-free bc over deformed bathymetry](https://www.sciencedirect.com/science/article/pii/S146350032100086X) seems more like what we want.


## Wall models for CFD
* Wall $f\colon [0,1] \to \mathbb{R}$ is viewed as a function of a random variable $Y = f(X)$, where $X\sim U[0,1]$. Moments of $f$ will hence be of the form
  $$
        \mathbb{E}[\phi(Y)] = \int_0^1 \phi(f(x))\mathrm{d}x
  $$
  These are interpreted as shape parameters. For example, the moments $\mathbb{E}[|Y|^m]$ are often used. A nice interpretation is that the integer moments are adding information about the measure $\mu_Y = \mu_x \circ f^{-1}$, since
  $$
    \hat p_Y(\omega) = \sum_{n=0}^{\infty} \frac{\mathbb{E}[Y^n]\omega^n}{n!}.
  $$
  However, it does not provide information about the regularity of $f$, such as it's slope characteristics (for example, changing the period does not affect the moments). For such information, one can instead look at the moments of $f'$.
* Reynolds number Re is $\frac{U\cdot L}{\nu}$, where $U$ is characteristic velocity, $L$ is characteristic scale, and $\nu$ is the kinematic viscocity. We see that $Re$ increases if $U$ increases, but also if $L$ increases. For example, flow around a large cylinder has to have lower rate to be laminar than flow around a tiny grain of dust. Wetted surface is the part that is in contact with the flow. 
* [Multi Scale Coupling for Rough Reactive Boundary](https://reader.elsevier.com/reader/sd/pii/S0017931009001483?token=D18FA33E7133CAC9FDE00008F2285AF7483F0C21E931A369B41D29783F67025CAEC49BA0EB1708C37104EE8F58E81D93&originRegion=eu-west-1&originCreation=20230410120744). Calculate an effective wall height where they then put no-slip conditions. This is an alternative way. Note that the computational domain will change.
* [Wall bounded turbulence](https://www.cfd-online.com/Wiki/Introduction_to_turbulence/Wall_bounded_turbulent_flows). Prandtl was first to suggest that the viscous term must persist at the boundary, otherwise no-slip cannot be satisfied. Eulerian flow can satisfy no-penetration, but will necessitate slippage at the boundary.
* [Navier slip condition](https://timreis.org/navier-slip/) states that the tangential velocity is proportional to the normal derivative of the velocity.The constant of proportionality is called the "slip length", we call it $\alpha$. Holds for laminar incompressible flows (Re < 1). This typically holds when the roughness does not protrude into the viscous or turbulent sublayer. Instead, we need to assume that stationary stokes flow holds.
  * [Effective condition viscous (laminar) flow over randomly embossed surface](https://www.sarkarkausik.com/pdf/sar_1235195_6369.pdf). Justify navier slip.
  * [Effective condition laminar flow over rough surface](https://www.sciencedirect.com/science/article/pii/S0021999198960880), Page 198 justify navier slip.
  * [Effective condition laminar flow over periodic rough surface](https://www.igpm.rwth-aachen.de/Download/reports/mueller/DDM-IGPM-395.pdf)
  * [Navier slip derivation](https://aip.scitation.org/doi/pdf/10.1063/1.4982899) laminar flow (steady navier stokes) over rough surface, page 13-14 justify navier slip. Reason is to avoid having to solve macro problem twice, which is not our concern. 
* [Nice blog explaining how wall models are used](https://cfd.blogs.upv.es/turbulence/wall-functions/). For finite volume methods, estimate the flow quantities in a cell at the boundary by extrapolating using known information about the shear stress at the boundary, and finite volume averages.
* [Review on turbulent flow over rough surfaces](https://www.sciencedirect.com/science/article/pii/S266620272100015X) Wall modeling using equivalent grain roughness. Obtained from the distribution of the wall function using different shape related quantities like variance, skewness, kurtosis. GPR has been used to obtain estimates of grain roughness with high accuracy (<10%) for CFD. 
  * Viscous (sub)layer = laminar flow 
  * Buffer layer (neither applies)
  * Log layer = log law
  * Typically cells at the log layer scale?
* [Navier Stokes rough surface book (chapter 12)](https://reader.elsevier.com/reader/sd/pii/B9780124059351000125?token=D085DF58706CE6B176E3595A5259C8D8356EC4AC38E3D8960A323896B7F565D49B3976323F3B82D9A505613D5B13EDD9&originRegion=eu-west-1&originCreation=20230410014418)
