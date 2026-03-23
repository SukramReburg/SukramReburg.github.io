---
layout: default
title: Overview
description: Quantitative research, machine learning, and finance-oriented project portfolio of Markus Gruber.
---

<section class="hero section-shell" id="hero">
  <div class="hero__glow"></div>
  <div class="hero__grid">
    <div class="hero__content">
      <div class="eyebrow reveal reveal-delay-1">Quantitative Methods · Machine Learning · Finance</div>
      <h1 class="hero__title reveal reveal-delay-2">Building quantitative models, research-driven tools, and machine learning systems for high-stakes decisions.</h1>
      <p class="hero__lede reveal reveal-delay-3">
        This webpage, opposite to my other projects is severly vibe coded. It serves two purposes.
        Giving you, the reader an overview of my projects and giving me, the creater of this page an idea
        how far AI can bring me in a task (webpagedevelopment and graphic design) I have absolutely zero knowledge about.
      </p>
      <div class="hero__actions reveal reveal-delay-4">
        <a class="button button--primary" href="#work">View Projects</a>
        <a class="button button--ghost" href="#contact">Get in Touch</a>
      </div>
      <ul class="hero__markers reveal reveal-delay-5">
        <li>TU Wien</li>
        <li>Quantitative Analyst</li>
        <li>R / Python</li>
        <li>WUTIS</li>
      </ul>
    </div>

    <div class="hero__visual reveal reveal-delay-4">
      <div class="portrait-card">
        <div class="portrait-card__panel"></div>
        <img src="{{ '/assets/image/profile.jpg' | relative_url }}" alt="Portrait of Markus Gruber" class="portrait-card__image">
        <div class="portrait-card__meta">
          <span>Vienna</span>
          <span>Credit Risk · ML</span>
        </div>
      </div>
      <div class="signal-card">
        <div class="signal-card__label">Current Areas</div>
        <div class="signal-card__items">
          <span>Random Forest Research</span>
          <span>Forecasting & Backtesting</span>
          <span>Statistical Tooling</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section-shell section-block" id="work">
  <div class="section-heading reveal">
    <div class="eyebrow">Selected Work</div>
    <h2>Projects shaped by modeling depth, implementation discipline, and finance context.</h2>
    <p>Featured work spans thesis research, algorithmic trading initiatives, and applied statistical systems built for real constraints rather than toy settings.</p>
  </div>

  <div class="project-grid">
    <a class="project-card project-card--featured reveal" href="{{ '/masterthesis' | relative_url }}">
      <div class="project-card__media project-card__media--thesis"></div>
      <div class="project-card__body">
        <div class="project-card__meta">Research · Credit Risk</div>
        <h3>Random Forest Extensions for Credit Risk Modeling</h3>
        <p>Master thesis focused on improving random forest behavior through sampling, feature handling, and voting modifications under explainability constraints.</p>
        <ul class="project-card__tags">
          <li>R</li>
          <li>Random Forests</li>
          <li>Risk Modeling</li>
          <li>Research</li>
        </ul>
      </div>
    </a>

    <a class="project-card reveal" href="{{ '/wutis1' | relative_url }}">
      <div class="project-card__media project-card__media--wutis">
        <img src="{{ '/assets/image/cropped-WUTIS-Logo_NEW.png' | relative_url }}" alt="WUTIS logo">
      </div>
      <div class="project-card__body">
        <div class="project-card__meta">Systematic Trading · WUTIS</div>
        <h3>Algorithmic Trading Research and Prototype Development</h3>
        <p>Rule-based market research, backtesting logic, and research workflows developed inside WUTIS' algorithmic trading division.</p>
        <ul class="project-card__tags">
          <li>Backtesting</li>
          <li>Signal Research</li>
          <li>Python</li>
          <li>R</li>
        </ul>
      </div>
    </a>

    <a class="project-card reveal" href="{{ '/wutis2' | relative_url }}">
      <div class="project-card__media project-card__media--lab"></div>
      <div class="project-card__body">
        <div class="project-card__meta">Tooling · Research Stack</div>
        <h3>Forecasting, Analytics, and Quant Workflow Infrastructure</h3>
        <p>Supporting project space for data pipelines, experimentation structure, and reusable analytics components across finance-oriented work.</p>
        <ul class="project-card__tags">
          <li>Forecasting</li>
          <li>Data Engineering</li>
          <li>Experimentation</li>
        </ul>
      </div>
    </a>
  </div>
</section>

<section class="section-shell section-block profile-section" id="about">
  <div class="section-heading reveal">
    <div class="eyebrow">Profile</div>
    <h2>A quantitative profile built at the intersection of research and implementation.</h2>
  </div>

  <div class="profile-grid">
    <div class="profile-copy reveal">
      <p>
        Markus Gruber is completing an MSc in Statistics and Mathematics in Economics at TU Wien, with a working focus on predictive modeling,
        machine learning, and finance-related applications where model behavior needs to be both effective and defensible.
      </p>
      <p>
        The work spans formal research, professional credit risk analysis, and project-based exploration through WUTIS. Across these settings,
        the emphasis remains consistent: translate quantitative ideas into usable systems with clear assumptions, measurable performance, and sound implementation.
      </p>
    </div>

    <div class="fact-panel reveal">
      <div class="fact-panel__item">
        <span class="fact-panel__label">Base</span>
        <strong>Vienna, Austria</strong>
      </div>
      <div class="fact-panel__item">
        <span class="fact-panel__label">Current Track</span>
        <strong>MSc Statistics & Mathematics in Economics</strong>
      </div>
      <div class="fact-panel__item">
        <span class="fact-panel__label">Core Domains</span>
        <strong>Credit risk, statistical learning, systematic trading</strong>
      </div>
      <div class="fact-panel__item">
        <span class="fact-panel__label">Collaboration Areas</span>
        <strong>Research support, model prototyping, analytics tooling</strong>
      </div>
    </div>
  </div>
</section>

<section class="section-shell section-block" id="focus">
  <div class="section-heading reveal">
    <div class="eyebrow">Technical Focus</div>
    <h2>Capabilities organized around modeling, systems, and decision context.</h2>
  </div>

  <div class="capability-grid">
    <article class="capability-card reveal">
      <h3>Statistics & Modeling</h3>
      <p>Predictive modeling, sampling design, feature handling, model diagnostics, and methods shaped by noisy real-world data.</p>
      <ul>
        <li>Classification and risk scoring</li>
        <li>Model evaluation under constraints</li>
        <li>Interpretability-aware design</li>
      </ul>
    </article>

    <article class="capability-card reveal">
      <h3>Machine Learning</h3>
      <p>Applied ML with an emphasis on method selection, experimental rigor, and implementation detail rather than generic benchmarking.</p>
      <ul>
        <li>Random forests and ensemble methods</li>
        <li>Feature engineering workflows</li>
        <li>Structured experimentation</li>
      </ul>
    </article>

    <article class="capability-card reveal">
      <h3>Quantitative Finance</h3>
      <p>Finance-facing analysis built around risk, signal logic, and systemized decision rules that can be tested and refined.</p>
      <ul>
        <li>Credit risk applications</li>
        <li>Systematic trading research</li>
        <li>Backtesting and performance review</li>
      </ul>
    </article>

    <article class="capability-card reveal">
      <h3>R / Python / Data Tooling</h3>
      <p>Implementation work from analysis notebooks to reusable project structure, data handling, and reporting workflows.</p>
      <ul>
        <li>R, Python, SQL-oriented workflows</li>
        <li>Research notebooks and scripts</li>
        <li>Reproducible analytics pipelines</li>
      </ul>
    </article>
  </div>
</section>

<section class="section-shell section-block" id="timeline">
  <div class="section-heading reveal">
    <div class="eyebrow">Milestones</div>
    <h2>A compact view of the current trajectory.</h2>
  </div>

  <div class="timeline reveal">
    <div class="timeline__item">
      <span class="timeline__year">TU Wien</span>
      <p>MSc in Statistics and Mathematics in Economics with emphasis on quantitative methods and applied modeling.</p>
    </div>
    <div class="timeline__item">
      <span class="timeline__year">RBI</span>
      <p>Quantitative Analyst role focused on credit risk management and model work inside regulatory and practical constraints.</p>
    </div>
    <div class="timeline__item">
      <span class="timeline__year">WUTIS</span>
      <p>Algorithmic trading division member contributing to research, implementation, and systematic strategy development.</p>
    </div>
    <div class="timeline__item">
      <span class="timeline__year">Thesis</span>
      <p>Research program centered on improving random forest modeling for credit risk prediction.</p>
    </div>
  </div>
</section>

<section class="section-shell section-block contact-section" id="contact">
  <div class="contact-panel reveal">
    <div>
      <div class="eyebrow">Contact</div>
      <h2>Open to technical conversations, research collaboration, and serious project work.</h2>
      <p>If the overlap is quantitative research, modeling, or finance-oriented systems, reach out directly.</p>
    </div>

    <div class="contact-panel__links">
      <a href="mailto:markus.gruber@tuval.at">markus.gruber@tuval.at</a>
      <a href="https://github.com/SukramReburg" target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/markus-gruber-0a49a575/" target="_blank" rel="noreferrer">LinkedIn</a>
    </div>
  </div>
</section>

<footer class="section-shell site-footer">
  <p>© {{ "now" | date: "%Y" }} Markus Gruber. Built with Jekyll and deployed on GitHub Pages.</p>
</footer>
