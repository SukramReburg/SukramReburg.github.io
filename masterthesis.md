---
layout: default
title: Random Forest Research
description: Master thesis work on improving random forest models for credit risk prediction.
---

<section class="detail-grid">
  <aside class="detail-side">
    <div class="detail-panel">
      <div class="detail-panel__label">Resources</div>
      <a href="{{ '/assets/pdf/Master_thesis_GruberM_06-11-2024.pdf' | relative_url }}">Master thesis PDF</a>
      <a href="{{ '/assets/pdf/Presentation%20Defensio.pdf' | relative_url }}">Defense presentation</a>
      <a href="https://github.com/SukramReburg/randomForest/tree/038023d830d7f670c114ab3946cb4cc57eeae0b2">Repository / notebooks</a>
    </div>

    <div class="detail-panel detail-panel--frame">
      <div class="detail-panel__label">Structure Preview</div>
      <iframe
        src="{{ '/assets/pdf/DA_structur.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH' | relative_url }}"
        class="detail-frame"
        tabindex="-1"
        title="Master thesis structure preview"
      ></iframe>
    </div>
  </aside>

  <div class="detail-main">
    <div class="detail-intro">
      <div class="eyebrow">Master Thesis · Credit Risk Modeling</div>
      <p>
        This thesis investigates how random forest models can be adapted for credit risk prediction when predictive quality, class imbalance,
        and interpretability all matter at the same time. The emphasis is not only on methodology, but on what survives contact with practical decision settings.
      </p>
    </div>

    <section class="detail-section">
      <h2>Key Contributions</h2>
      <ul class="detail-list">
        <li>Researched methodological extensions that can improve random forest behavior in credit risk contexts.</li>
        <li>Connected those extensions back to the theoretical structure of the model rather than treating them as isolated heuristics.</li>
        <li>Implemented the full workflow on top of the established `randomForest` package in R.</li>
      </ul>
    </section>

    <section class="detail-section">
      <h2>Research Summary</h2>
      <p>
        Credit risk assessment remains a central financial modeling problem, but conventional methods can struggle when data becomes nonlinear,
        high-dimensional, or imbalanced. Random forests offer useful robustness in these settings, yet their default form does not automatically solve the practical issues that matter in production contexts.
      </p>
      <p>
        The work evaluates enhancements spanning sampling approaches, feature selection, and adjusted voting mechanisms. These are studied with attention to both predictive performance and the regulatory expectation that model behavior remains explainable and defensible.
      </p>
    </section>
  </div>
</section>
