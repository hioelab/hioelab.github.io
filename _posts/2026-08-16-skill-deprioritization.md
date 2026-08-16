---
layout: post
title: "After ChatGPT, Which Managerial Skills Did Firms Stop Asking for First?"
title_ko: "ChatGPT 이후 기업은 어떤 관리 능력부터 덜 찾게 되었나"
date: 2026-08-16 00:00:03 +0900
category: blog
excerpt_en: "Devigili et al. (2026) · Management Science"
excerpt_ko: "Devigili et al. (2026) · Management Science"
contributor: "Hyunyul Moon"
contributor_ko: "문현율"
editor: "Jiyoung Song"
editor_ko: "송지영"
---

<div class="lang-en" markdown="1">

<a class="linkcard" href="https://doi.org/10.1287/mnsc.2025.01859" target="_blank" rel="noopener"><span class="lc-main"><span class="lc-title">Skill Deprioritization: Reorganizing in the Age of Generative Artificial Intelligence | Management Science</span><span class="lc-desc">How does generative artificial intelligence (GenAI) reshape the skills that organizations seek as they adapt to a new general-purpose technology? GenAI effectively retrieves data, performs analysis...</span><span class="lc-url">🔗 doi.org/10.1287/mnsc.2025.01859</span></span><span class="lc-side">Skill Deprioritization</span></a>

> Devigili, M., Yilmaz, E. D., Gaba, V., & Greve, H. (2026). Skill Deprioritization: Reorganizing in the Age of Generative Artificial Intelligence. *Management Science*, 0(0).

## ✔️ Introduction and Summary

This issue covers a paper that empirically examines which managerial skills firms stopped looking for once generative AI arrived.

"AI will take our jobs" is a familiar line by now, but it blurs together two very different questions: if a company hires less, is it cutting specific skills first, and if so, why those particular ones? This paper sets out to answer both. The authors call the phenomenon *skill deprioritization* — a systematic reduction in firms' demand for human skills that GenAI can effectively substitute for.

Two things matter about this definition. First, what the paper measures is job postings, not headcount — not who got let go, but what companies stop asking for when they hire. Second, the consequence of skill deprioritization isn't unemployment; it's a shift in job posting requirements. Take an example: recruiter postings used to routinely list "familiar with maps" as a requirement. Once navigation apps became standard, that line quietly disappeared. It's not that the people who once knew this skill were let go — it's that companies stopped requiring it in new postings. That's the kind of change this paper is about.

To position this paper within the field, it's worth situating it against two existing streams of AI-and-work research. Most existing work on AI and work has focused on augmentation (does the AI make a person better at their job) and reskilling (what new skills does a person need to work alongside AI). Both center on the individual — how much more productive someone becomes using AI, or how their judgment gets reinforced or replaced by it. The authors flip this framing and ask instead: what does the organization no longer need?

The paper answers this through three streams of research working together. First, it borrows organization theory to split what a manager does into ten distinct categories. Second, it borrows queuing theory from industrial engineering to predict which of those ten categories will shrink first. Third, it takes ChatGPT's release as a natural experiment and applies difference-in-differences to 1,820 U.S. publicly listed firms' hiring postings — 11.15 million of them — checking whether that prediction actually held, using GPT-4o to build its measures.

The headline finding: after ChatGPT, firms in industries with high GenAI exposure cut job postings requiring skills that break down and sequence work by 23%, skills that convey information by roughly 18–21%, skills that observe and evaluate performance by roughly 23%, and skills that handle operational problems by roughly 19%, relative to firms in low-exposure industries. Postings requiring the skill to hire and place people, to design reward systems, or to resolve conflict, on the other hand, showed no statistically significant change.

## ✔️ Research Content and Logic

### Where existing research stood

Existing research on AI and work has largely operated at the level of the task. Can AI substitute for a given task, how quickly can a person be replaced doing it, how accurately — task-level units have clean boundaries, which makes them easy to measure and compare in experiments. The authors argue a different lens is needed. A general-purpose technology changes how an organization is structured, not just individual task speed. The example the authors lean on is electricity. David (1990) found that simply installing electric motors in a factory didn't raise productivity — the productivity gains only showed up once the factory floor was redesigned and reorganized around the new technology. A similar case is made for how the steam engine reshaped the location of production facilities (Rosenberg and Trajtenberg 2004). Applying that logic directly, looking only at how fast GenAI can process an individual task tells you nothing about the change happening at the organizational level. The authors instead built a lens for observing organization-level change — the firm's demand for labor, or hiring demand.

### How to break down what a manager does

This paper uses a different classification scheme than the ones commonly used elsewhere. Much prior research groups work by the content of the task — the explicit/tacit task distinction from Autor et al. (2003), or the skill cluster analysis of Deming and Kahn (2018), are representative examples. These group tasks by how similar the nature of the work is.

What the authors use instead is a different kind of classification. They borrow Puranam's (2018) *problems of organizing* framework. Rather than the content of the work, this framework classifies by "what needs solving when multiple people work together." It's an old distinction that traces back to March and Simon (1958), splitting broadly into two.

One is division of labor: clarifying an organization's goals, breaking them into pieces, and assigning those pieces to people.

- **Task division** — breaking a large goal into executable pieces, sequencing them, and setting priorities.
- **Task allocation** — deciding who gets which piece. This further splits into two: staffing (newly hiring and placing someone) and mapping (assigning an existing person or tool to a role).

The other is integration of effort: the process of bringing the divided work back together.

- **Information provision** — the flow of information that different people need from one another. This splits into three: coordination (aligning across departments), synchronous communication (real-time, like meetings and calls), and asynchronous communication (not real-time, like reports, documents, and wikis).
- **Reward distribution** — motivating people to act in line with goals. This splits into monitoring (observing and evaluating performance) and incentives (designing reward systems).
- **Exception management** — handling things that didn't go as expected. This splits into conflict (resolving disputes between people) and operational (handling operational problems).

These five branches split further into ten sub-items. The authors give two reasons for going this granular. First, it enables more concrete predictions — something like "GenAI will affect operations but not conflict resolution" becomes possible. Second, on the measurement side, it improves precision by defining categories that don't overlap with each other and are independently defined.

### Predicting with queuing theory

Now the moment to predict "of these ten items, which shrinks first?" The tool the authors borrow for this is queuing theory, an industrial-engineering tool for problems of waiting in line — the kind of situation where you're figuring out how fast customers arrive, how long it takes one staff member to process each one, and how irregular that processing time is, in order to calculate the expected wait time.

Glynn et al. (2020) applied this queuing model to organizations. A firm's problems (decisions requiring judgment) arrive at random, and the people who process them can be thought of as the staff behind the counter. Whether people work in teams, a superior approves a subordinate's proposal, or a problem gets routed to the relevant specialist — all of these can be expressed as different forms of the same kind of queue. Here, the authors ask: what changes when the person processing that problem starts using GenAI?

The simplest, blunt-force answer is that one person can now process problems faster and get through the same workload with fewer people. But the authors say this simple efficiency argument on its own isn't enough. This effect would apply roughly equally across all ten categories, and it can't explain "which category is relatively more vulnerable."

So the authors offer three more concrete predictions.

<div class="sysbox" markdown="1">

<span class="sysnum">1</span> **Task division and scheduling become simpler**

Someone using AI doesn't just solve problems faster — they can also draw on a broader range of knowledge to handle a wider spectrum of problems on their own. That reduces the need to split up work and hand pieces off to others. The authors' example here is the project management software Jira's built-in generative AI feature. This feature automatically turns a plain-language goal into a work breakdown of subtasks and dependencies. And because task division is complete from the start, it also reduces the need for the operational exception management that arises from catching and fixing problems later.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">2</span> **Gathering and interpreting information gets easier**

Until now, an organization's typical model has been to compile the information a person needs and push it to them (push). But with GenAI available, whoever needs information can pull it themselves in the moment (pull). That reduces the headcount previously tied to organizing and pushing out information. The authors' example is the U.S. State Department, which reportedly deployed an internal GenAI chatbot for 1,000 staff in 2024 and has used it for summarizing policy documents and translation.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">3</span> **Observing and evaluating performance gets automated**

An interesting point the authors raise is that technology for recording performance — like attendance systems automatically collecting metrics — had already existed for a long time. What still required a person was turning that data into judgment. GenAI fills exactly that gap. The authors' example is the HR analytics tool Culture Amp, which ran an experiment using ChatGPT to automatically compile several months of Slack kudos, customer comments, and peer feedback into a performance summary.

</div>

### Where the case for a decline is weaker

The authors are equally clear about which categories have a weaker case for shrinking. Three areas: task allocation (deciding who to newly hire and who to assign work to), incentive design, and conflict resolution. The reasoning: even once a person is using AI, the nature of selecting the right person and motivating them doesn't itself change. That said, the possibility of a second-order effect remains. Only if the organization's structure itself gets redesigned would that second-order effect kick in. But second-order effects take time to experiment with, learn from, and implement, so the authors expect them to be unlikely to show up in this paper's observation window right after ChatGPT's launch.

### Why this counts as "reorganizing" — the span-of-control story

The back half of the paper's title is "Reorganizing." How does a decline in hiring demand for a few technical skills connect to the firm redesigning itself? The authors bridge this gap with the concept of span of control — the number of subordinates a manager directly supervises.

Span of control is conventionally determined by two things: (i) how often the manager must approve a decision — how often decisions come up — and (ii) how variable the time it takes to process one decision is (i.e., how unpredictable processing time is).

What the authors focus on here is (ii). There's a result in queuing theory that parallels this: expected wait time is proportional to the variance of processing time. That is, wait time shortens not because processing gets shorter, but because processing time becomes more predictable (its variability falls) in its own right. As GenAI takes over a share of coordination work, the variability in the manager's remaining processing time falls. That shortens the wait, and that same slack lets one manager take on more subordinates without increasing their wait time. The authors use this as their basis for arguing that a fall in demand for coordination and monitoring staff leads to a thinning of the managerial layer. The math behind this part is explained together in "Data and Methodology" below.

<div class="diagram-box" markdown="1">

![The manager as a service desk — why one person can now oversee more](/assets/img/skill-deprioritization_fig1-queuing-en.png)

*Figure 1. Viewing the manager as a service desk — decisions raised by subordinates queue up at the manager. GenAI takes over a share of the coordination work, which shrinks the variability in the time it takes to process what's left. Even with the average unchanged, that alone shortens the queue, and the resulting slack lets one manager take on more people.*
{: .caption}

</div>

## ✔️ Data and Methodology

### What was collected, and from where

The sample is 1,820 U.S. publicly listed firms, 40,465 firm-month observations. Three data sources were combined.

- **Lightcast** — a database that collects U.S. job postings daily. Every posting is tagged with which skills it requires. All of this paper's dependent variables come from here.
- **Compustat** — quarterly financial data. Used as control variables.
- **Revelio** — monthly headcount data by firm. Used to control for workforce changes.

The observation window is set at ±12 months around ChatGPT's public release on November 30, 2022. The pre-period runs from December 2021 through November 2022; the post-period runs from December 2022 through November 2023. The authors explain their reasoning for this window as follows: the pre-period needs to be long enough to establish a comparison baseline, but recent enough to be unaffected by earlier AI developments. The post-period needs to give firms enough time to react, but not be so long that other events get mixed in.

### How "high-exposure industries" was defined

This paper's treated group is not "firms that actually adopted AI." This is where confusion is easy to slip in. What the authors write is AI Occupational Exposure (AIOE), a measure proposed by Felten et al. (2021, 2023). The U.S. Department of Labor's O*NET database organizes how 52 human abilities connect to specific occupations. This paper cross-multiplies matrices asking "how exposed is each of these 52 abilities to a given AI capability" and picks out exposure specific to the "language modeling" AI capability alone.

<div class="formula">\[AIOE_k = \frac{\sum_{j=1}^{52} A_j \times L_{jk} \times I_{jk}}{\sum_{j=1}^{52} L_{jk} \times I_{jk}}\]</div>

| Symbol | Meaning |
|---|---|
| <span class="mvar">k</span> | An occupation |
| <span class="mvar">j</span> | One of the 52 abilities |
| <span class="mvar">A</span> | How exposed ability <span class="mvar">j</span> is to language-modeling AI |
| <span class="mvar">L, I</span> | How important ability <span class="mvar">j</span> is to occupation <span class="mvar">k</span>, and how frequently it's used |
| <span class="mvar">n</span> | An industry |
| <span class="mvar">S<sub>nk</sub></span> | The share of occupation <span class="mvar">k</span> within industry <span class="mvar">n</span> |

Up to this point, the value is at the occupation level. To roll this up to the industry level, the authors use Lightcast to tally monthly job postings by four-digit NAICS industry and occupation, find each occupation's share within its industry, and weight accordingly.

<div class="formula">\[GenAI\ Exposure_n = \sum_k AIOE_k \times S_{nk}\]</div>

Finally, the industry-level exposure value is averaged monthly over the pre-ChatGPT period, and firms in industries whose exposure exceeds the sample average are classified as treated. The result was 966 treated firms and 854 control firms — a near-even split. To put it precisely, what this paper's criterion sorts on is not "did this firm adopt AI" but "how exposed is this firm's occupational mix to language models."

### Sorting 33,832 skills in job postings into ten categories

This is where the paper's most labor-intensive work happened. Lightcast's skill taxonomy (version 9.25) contains 33,832 individual skills, each with a roughly 70-word description of its function. The authors classified these into the ten categories defined above. The sequence:

<div class="sysbox" markdown="1">

<span class="sysnum">1</span> **Narrow the field with topic modeling**

They fit Latent Dirichlet Allocation (LDA) models, sweeping the number of topics from 5 to 100 in steps of 5. They evaluated the resulting models by coherence scores, top keywords, and skill descriptions together, landed on a 65-topic solution as giving the best discrimination for their purposes, and pulled out 1,765 candidate skills from the four topics most closely tied to the organizing categories.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">2</span> **A human reads them directly**

The authors read the descriptions of these 1,765 skills directly and assigned one of the ten labels. Of these, 397 matched one of the categories and 1,368 didn't.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">3</span> **Check agreement with another person's classification**

A research assistant independently classified the same 1,765 skills. Precision came out to 0.83, recall to 0.81, F1 to 0.83, and Cohen's kappa — the metric for how much two people's classifications agree — came out to 0.7928. Cases of disagreement were discussed separately to sharpen the label definitions.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">4</span> **Scale up with GPT-4o**

They applied the classification to the full 33,832 skills. Three independent GPT-4o agents labeled each skill, and a label was adopted if at least two of the three agreed. Validating this two-step handoff against the manual classification produced 93% accuracy, 86% recall, and 89% F1. 1,369 skills were left as candidates from the full dataset.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">5</span> **A human does the final check**

These 1,369 were manually re-checked by hand, confirming 657 skills; because one skill can span multiple categories, this produced 719 total skill-label connections.

</div>

Applying this classification to the actual postings yielded 11,154,915 job postings that were processed. Since one posting can span multiple categories, the counts across categories are not mutually exclusive.

### The math of the queuing model

The control-range portion held over from "Research Content and Logic" above. Suppose problems arrive at a manager at an average frequency of <span class="mvar">λ</span>, and processing time follows a distribution with mean <span class="mvar">1/μ</span> and variance <span class="mvar">σ²</span>. If GenAI takes over a share <span class="mvar">φ</span> of coordination work, the remaining variance is:

<div class="formula">\[\sigma^2_{\text{post-GenAI}} = (1-\varphi) \times \sigma^2_{\text{pre-GenAI}}\]</div>

For a queue of this form (M/G/1), the expected wait time is:

<div class="formula">\[E[W] = \frac{\lambda\sigma^2}{2(1-\rho)}, \quad \rho = \lambda/\mu\]</div>

| Symbol | Meaning |
|---|---|
| <span class="mvar">λ</span> | Average frequency at which decisions reach the manager |
| <span class="mvar">1/μ</span> | Average time to process one decision |
| <span class="mvar">σ²</span> | Variance of processing time — how irregular processing time is |
| <span class="mvar">ρ</span> | Utilization. The closer to 1, the more saturated the manager |
| <span class="mvar">φ</span> | Share of coordination work handed off to AI (0 < φ ≤ 1) |
| <span class="mvar">E[W]</span> | Expected wait time |

What's worth noting is that <span class="mvar">σ²</span> sits in the numerator. So it isn't only that processing time gets shorter — a fall in the variability of processing time by itself shortens the wait. That means as <span class="mvar">φ</span> grows, wait time falls, and that slack lets the manager take on more subordinates. The additional headcount the authors work out is as follows.

<div class="formula">\[\Delta n \approx \frac{\varphi}{1-\rho} \times \frac{\sigma^2_{\text{pre-GenAI}}}{\bar\lambda}\]</div>

Here <span class="mvar">Δn</span> is the number of additional subordinates that can be added without extending wait time, and <span class="mvar">λ̄</span> is the average arrival rate generated by one subordinate — a distinct quantity from the <span class="mvar">λ</span> above, which is the manager's total arrival rate. Looking at the shape of the formula, the effect is larger for organizations that originally had more variable processing times (larger <span class="mvar">σ²</span>) and for organizations where the manager was already closer to saturation (<span class="mvar">ρ</span> closer to 1).

### How the estimation was done

The authors used difference-in-differences (DiD) — the method of subtracting out the change experienced by firms in low-exposure industries from the change experienced by firms in high-exposure industries, before versus after ChatGPT. This cancels out any factor that acted equally on all firms over the period (the business cycle, the overall hiring market trend). PostGPT and Treated were not entered as separate terms because they're collinear with the time and firm fixed effects.

<div class="formula">\[y_{it} = \alpha_{it} + \beta(PostGPT_t \times Treated_i) + \theta X_{it} + \delta_i + \delta_t + \varepsilon_{it}\]</div>

| Symbol | Meaning |
|---|---|
| <span class="mvar">y</span> | Count of firm <span class="mvar">i</span>'s postings in month <span class="mvar">t</span> requiring the given skill |
| <span class="mvar">Treated</span> | 1 if in a high-exposure industry |
| <span class="mvar">PostGPT</span> | 1 from December 2022 onward |
| <span class="mvar">β</span> | The value this paper is trying to pin down |
| <span class="mvar">X</span> | Control variables |
| <span class="mvar">δ<sub>i</sub>, δ<sub>t</sub></span> | Firm fixed effects, year-month fixed effects |

Estimation used Poisson Pseudo-Maximum Likelihood (PPML). The authors give three reasons for choosing this method: (i) it handles count variables with many zero values without a problematic transformation, (ii) it gives consistent estimates even when the data doesn't strictly follow a Poisson distribution, and (iii) it holds up even when variance isn't constant. Standard errors were clustered at the firm level.

Control variables are: size (log total assets), ROA, leverage, R&D over total assets, an R&D dummy, capital expenditure over total assets, and workforce change rate.

<div class="formula">\[\text{Workforce Change Rate} = \frac{\text{This month's headcount} - \text{Last month's headcount}}{\text{Last month's headcount}}\]</div>

The reason workforce change is included: a firm going through large-scale layoffs might see fewer postings overall for reasons unrelated to GenAI.

<div class="diagram-box" markdown="1">

![Difference-in-differences — isolating ChatGPT's share by comparing two groups](/assets/img/skill-deprioritization_fig2-did-en.png)

*Figure 2. How this paper set up its difference-in-differences design — plotting job postings for high- versus low-exposure industries over 24 months. The two lines should move roughly in parallel before treatment, and the gap that opens after is β. The treated group is not "firms that adopted AI" but firms in industries whose occupational mix is more exposed to language models. The line shapes are drawn to illustrate the method; they are not the paper's actual estimated-coefficient plot.*
{: .caption}

</div>

### Seven strands of validation

The ways the authors checked their results are as follows. Each result is addressed one by one in "Findings" below.

- Baseline DiD estimate — without controls, with controls
- Dynamic DiD — estimated separately by month, to check the parallel-trends assumption
- Re-estimated by dissolving the treatment/control binary into continuous exposure
- Estimated separately for the GPT-3.5 period and the GPT-4 period
- Placebo tests and falsification tests
- Replication while varying estimation method, skill classification, and sample composition
- Supplementary analysis — results after controlling for total hiring demand, and change in the share of managerial hiring

## ✔️ Findings

### What skills were firms originally looking for?

First, the baseline: average postings per firm-month.

| Item | Avg. postings |
|---|---|
| Task division | 89.3 |
| Information provision (synchronous) | 75.5 |
| Exception management (operational) | 63.6 |
| Information provision (asynchronous) | 60.1 |
| Information provision (coordination) | 52.9 |
| Reward distribution (monitoring) | 24.6 |
| Exception management (conflict) | 13.7 |
| Task allocation (mapping) | 13.0 |
| Task allocation (staffing) | 5.1 |
| Reward distribution (incentives) | 1.4 |

Postings related to task division dominate overwhelmingly, while postings related to incentive design are barely posted at all. Fifty-three percent of sample firms were classified as belonging to high-exposure industries; the average firm has a log total assets of 7.87, a leverage ratio of 0.30, and 42% report R&D expenditure.

### <span class="sysnum" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;flex-shrink:0;border-radius:50%;background:var(--ink);color:#fff;font-weight:800;font-size:13px;">1</span> Baseline results — what shrank
{: style="display:flex;align-items:center;gap:10px;"}

The coefficients below are on a log scale and shouldn't be read as-is; the actual rate of change is exp(β) − 1. The baseline estimate without control variables is as follows.

| Item | Coefficient | % change | Significance |
|---|---|---|---|
| Task division | −0.261 | −23.0% | p<0.001 |
| Reward distribution (monitoring) | −0.264 | −23.2% | p<0.001 |
| Information provision (asynchronous) | −0.241 | −21.4% | p<0.01 |
| Information provision (coordination) | −0.240 | −21.3% | p<0.01 |
| Exception management (operational) | −0.211 | −19.0% | p<0.01 |
| Information provision (synchronous) | −0.204 | −18.5% | p<0.05 |
| Exception management (conflict) | −0.224 | — | Not significant |
| Reward distribution (incentives) | −0.150 | — | Not significant |
| Task allocation (mapping) | −0.097 | — | Not significant |
| Task allocation (staffing) | +0.162 | — | Not significant |

All three of the theory's predictions were confirmed in the data. Task division, and all three sub-items of information provision (coordination, synchronous, asynchronous), declined, and operational exception management — which was predicted to follow along with task division — declined as well. Monitoring within reward distribution declined too. By contrast, there was no significant change in task allocation (both staffing and mapping), incentives, or conflict resolution.

That said, conflict resolution needs a careful read. The coefficient itself (−0.224) is a similar magnitude to the other categories that did come out significant, but its standard error at 0.131 was large enough to miss the significance threshold — closer to "the data can't tell us whether there was a change" than "there was no change." Adding control variables leaves the results largely intact (task division −22.9%, coordination −21.1%, synchronous −18.5%, asynchronous −21.6%, monitoring −22.8%, operational exception −18.9%).

<div class="diagram-box" markdown="1">

![Breaking managerial work into ten pieces — which ones shrank?](/assets/img/skill-deprioritization_fig3-table-en.png)

*Figure 3. Breaking managerial work into ten pieces and asking which shrank — the twelve months before and after ChatGPT's release, comparing postings for firms in high- versus low-exposure industries with controls omitted, exp(β)−1 basis. Conflict resolution's estimate is a similar magnitude to the significant items but missed the significance threshold because of a large standard error (see "Note" below). The three unaffected items are the ones firms did not significantly reduce hiring for. The category framework follows Puranam (2018); the table redraws the paper's own Table 3.*
{: .caption}

</div>

### <span class="sysnum" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;flex-shrink:0;border-radius:50%;background:var(--ink);color:#fff;font-weight:800;font-size:13px;">2</span> Did parallel trends hold?
{: style="display:flex;align-items:center;gap:10px;"}

Difference-in-differences rests on the assumption that "the two groups would have moved in parallel had ChatGPT not happened." This assumption can't be checked directly, so instead the authors confirm whether the two groups actually did move in parallel during the pre-treatment period. They didn't lump the pre-period into a single point but instead re-estimated it broken out by month (the reference point being November 2022, the month just before treatment), then used a chi-square test to confirm that all the pre-treatment coefficients were jointly zero. For most items this assumption was not rejected. There is one exception, though: task allocation (staffing), where the two groups were already moving differently in the pre-treatment period, and this difference was significant at the 5% level. This means the earlier "staffing showed no change" result rests on weaker footing than the other items, and the authors acknowledge this themselves.

### <span class="sysnum" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;flex-shrink:0;border-radius:50%;background:var(--ink);color:#fff;font-weight:800;font-size:13px;">3</span> What happens if exposure is treated as continuous?
{: style="display:flex;align-items:center;gap:10px;"}

Instead of the treated/control binary, the authors re-estimated using the industry's exposure value as of November 2022 directly. The results broadly held in the same direction: task division −0.349 (p<0.01), coordination −0.311 (p<0.05), asynchronous −0.343 (p<0.01), monitoring −0.321 (p<0.05), operational exception −0.293 (p<0.05) all remained significant. One item differed: information provision (synchronous, real-time communication) stopped being significant in this analysis. This is a signal that among the three information-provision sub-items, synchronous communication is the least stable in its results, and its significance wavers repeatedly in the additional robustness checks that follow as well.

### <span class="sysnum" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;flex-shrink:0;border-radius:50%;background:var(--ink);color:#fff;font-weight:800;font-size:13px;">4</span> Splitting the GPT-3.5 period from the GPT-4 period
{: style="display:flex;align-items:center;gap:10px;"}

This paper's premise is that "managers used ChatGPT and updated their beliefs about what AI can do." If so, that effect should have strengthened as AI capability genuinely improved. The authors re-estimated by splitting the treatment period into the GPT-3.5 period (December 2022 – February 2023) and the GPT-4 period (from March 2023 onward).

| Item | GPT-3.5 period | GPT-4 period |
|---|---|---|
| Reward distribution (monitoring) | −0.164 (not sig.) | −0.291 (p<0.001) |
| Exception management (operational) | −0.150 (not sig.) | −0.230 (p<0.01) |
| Information provision (asynchronous) | −0.220 (p<0.05) | −0.250 (p<0.01) |
| Task division | −0.262 (p<0.01) | −0.260 (p<0.001) |
| Information provision (coordination) | −0.272 (p<0.05) | −0.225 (p<0.01) |

The most striking shift is monitoring. Not significant during the GPT-3.5 period, it becomes significant during the GPT-4 period, with both a larger coefficient and the highest significance level (p<0.001) of any item. Operational exception management shows a similar pattern. Two other items should be read differently, though: task division's coefficient magnitude is nearly unchanged with just a more precise significance level, while coordination's coefficient actually shrank in magnitude. The authors describe both of these as cases where "only the significance level rose."

The authors see this result as letting them choose between two possible explanations: (1) if simply the fact that ChatGPT existed changed managers' perceptions, the effect should have been tied to the timing of the initial release; (2) if actual improvement in AI capability was the driver, the effect should be larger during the more-capable GPT-4 period. The results align with (2) — it was actual capability improvement, not novelty or hype, that moved firms' hiring behavior.

### <span class="sysnum" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;flex-shrink:0;border-radius:50%;background:var(--ink);color:#fff;font-weight:800;font-size:13px;">5</span> Placebo tests and falsification tests
{: style="display:flex;align-items:center;gap:10px;"}

A placebo test repeats the same analysis using a fake event date when nothing actually happened; a genuine effect should produce no result at the fake date. The authors ran this with fake dates set 6, 9, and 12 months before ChatGPT's actual release. No significant results emerged at 9 or 12 months prior. At 6 months prior, one coefficient came out significant, but it was smaller in magnitude and lower in significance level.

A falsification test comes in two forms. The first analyzed GitHub Copilot's release (June 21, 2022) the same way. Copilot's user base skews heavily toward developers, so if this paper's logic holds, it shouldn't have had an effect on organizing skills comparable to ChatGPT's. That's exactly what the results showed. The second used a broader AI exposure measure from Felten et al. (2021) that isn't limited to language models. Task division, monitoring, and operational exception produced results similar to this paper's original findings, but a new significant effect emerged for task allocation (staffing) — a writing-related domain the original narrower measure did not capture well. The authors report this as a possible influence from other types of generative AI beyond language models, and leave it as a topic for future research.

### <span class="sysnum" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;flex-shrink:0;border-radius:50%;background:var(--ink);color:#fff;font-weight:800;font-size:13px;">6</span> Re-running with different estimation methods, classifications, and samples
{: style="display:flex;align-items:center;gap:10px;"}

The robustness checks the authors ran are as follows.

- **Sensitivity to violations of the parallel-trends assumption** — using Rambachan and Roth's (2023) method, checking how far the results hold up as the parallel-trends assumption is allowed to be violated.
- **A different estimator** — re-estimating using Wooldridge's (2023) extended two-way fixed effects (ETWFE).
- **Reproducing without topic-based classification** — reconstructing the dependent variables via a keyword-dictionary approach instead.
- **Excluding tech firms the model might already have known about** — excluding industries under NAICS 51 (Information) and 54 (Professional, Scientific, and Technical Services).
- **Classifying the treatment group by a different criterion** — re-splitting the sample using Jaimovich and Siu's (2012) 50% nonroutine-cognitive-occupation-share threshold (1,052 treated firms, 768 control).
- **Matching similar firms before comparing** — pairing on pre-treatment characteristics via Coarsened Exact Matching (CEM), re-estimating on 397 treated and 397 control firms.
- **Others** — a seemingly-unrelated regression (SUR) approach, an OLS specification with a log transform, running GPT-3.5 and GPT-4 as separate models, and more.

Four items held significance across every check: task division, information provision (asynchronous), monitoring, and operational exception. These are this paper's most solid findings. Some items wobbled in significance depending on the check. Information provision (synchronous, real-time communication) came out not significant in the continuous-exposure analysis, the alternative skill/firm classification, and the CEM analysis alike. Monitoring also lost significance once, in the CEM analysis. And the conflict-resolution result described earlier as "no change possible" turns out to decline significantly once the treatment group is redefined by the nonroutine-cognitive-occupation criterion — meaning the conclusion on conflict resolution shifts depending on how the treatment group is defined.

One more result worth noting: when the ten sub-items are collapsed back into their original five broad categories, task division, task allocation, and information provision keep the same conclusions, but reward distribution and exception management have the gap between their sub-items canceled out the moment they're merged. For instance, reward distribution's monitoring component shrank while its incentives component didn't — but merge the two together and that gap disappears from view. This is exactly why the paper insisted on breaking things down into ten fine-grained categories in the first place.

### <span class="sysnum" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;flex-shrink:0;border-radius:50%;background:var(--ink);color:#fff;font-weight:800;font-size:13px;">7</span> Supplementary analysis — was this just an overall cut to hiring?
{: style="display:flex;align-items:center;gap:10px;"}

One natural objection arises here: rather than cutting specific skills, did the firm just cut hiring overall? To answer this, the authors controlled for total hiring demand and re-estimated. The declines in coordination and task division held up unchanged. This means, independent of whether firms hired less overall, they leaned relatively harder into cutting these specific skills.

There's another result worth pairing with the control-range theory. Comparing managerial job postings against nonmanagerial ones, the higher a firm's exposure, the relatively more its share of managerial postings shrank. This matches the direction of the control-range logic explained earlier: once a manager can oversee more people, the organization needs fewer managers. At the same time, this result is also evidence that the treatment and control groups were correctly separated. Postings requiring GenAI-related skills, in fact, rose sharply, and that increase was led by high-exposure firms.

## ✔️ Conclusion

To sum up: over the year following ChatGPT's release, U.S. publicly listed firms in high-exposure industries cut postings requiring skills that break down and organize work (−23%), convey information (−18–21%), observe performance (−23%), and handle operational problems (−19%), relative to firms in low-exposure industries. Postings requiring the skill to hire and place people, to design reward systems, or to resolve conflict did not change in a statistically meaningful way.

The significance of this result is that it was set up before the predicting data was even collected. The authors built the queuing model first, predicted "which functions will demand fewer people as AI reduces the variability of processing time," and only then checked the data — and the actual result matched the direction of that prediction. The authors don't claim firms are behaving fully optimally, but they argue this paper shows the queuing model is a good first approximation for explaining the initial reaction.

There are two limits the authors themselves acknowledge. First, treatment was defined at the industry level, not the individual firm. Even within the same industry, firms differ in how fast they actually adopt AI, and that difference wasn't captured. The authors see this as more likely to have led to an underestimate rather than an overestimate of the true effect (since control groups likely include some firms that actually use AI mixed in). Second, the observation window covers only 12 months after ChatGPT's release, so it wasn't possible to observe the stage where firms actually redesign their organizational structure. What's confirmed here is the first-order reaction visible in job postings; the second-order effect — the organizational structure itself changing — is something the authors themselves expect to unfold over the coming years.

What this paper contributes is clear. Until now, "AI will take our jobs" was mostly discussed at the level of occupation titles. This paper shifted that lens down one level, to the kinds of managerial work done within a job. It's also a useful lens for those preparing their careers — a question less like "which job should I choose" and more like "which kind of judgment within that job should I take responsibility for" may become the more pertinent one going forward. The authors themselves see this paper as laying the groundwork for the next step: re-measuring that second-order effect using the same methodology, at the level of the firm rather than the industry.

## ✔️ References

- [Queuing theory](https://en.wikipedia.org/wiki/Queueing_theory) — the industrial-engineering tool for problems of waiting in line. The backbone of this paper's theory.
- [Difference-in-differences](https://en.wikipedia.org/wiki/Difference_in_differences) — this paper's primary estimation method.
- [O*NET](https://www.onetonline.org/) — the U.S. Department of Labor's occupation-ability database. The starting point for measuring exposure.
- [Felten, E. W., Raj, M., & Seamans, R. (2021). Occupational, industry, and geographic exposure to artificial intelligence: A novel dataset and its potential uses. *Strategic Management Journal*, 42(12), 2195–2217.](https://doi.org/10.1002/smj.3286) — the original paper behind AI Occupational Exposure (AIOE).
- [Latent Dirichlet Allocation (LDA)](https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation) — the topic model used to narrow down skill candidates.
- [Cohen's kappa](https://en.wikipedia.org/wiki/Cohen%27s_kappa) — the metric for how much two people's classifications agree.
- [Lightcast](https://lightcast.io/) — the job-postings database.
- [Atlassian, "AI-powered project management"](https://www.atlassian.com/platform/artificial-intelligence) — the product page introducing Jira's built-in generative AI feature, describing how it automatically breaks a plain-language goal down into subtasks and dependencies. (Source for the task division example.)
- [TechCircle, "11 companies using GPT-4 in consumer products" (March 16, 2023)](https://www.techcircle.in/2023/03/16/11-companies-using-gpt-4-in-consumer-products) — an article covering 11 companies that applied GPT-4 to their products, including Stripe's use of it internally to scan documents and code and flag error patterns. (Source for the operational exception management example.)
- [FedScoop, "State Department encouraging workers to use ChatGPT"](https://fedscoop.com/state-department-encouraging-workers-to-use-chatgpt) — an article reporting that the U.S. State Department deployed an internal GenAI chatbot for 1,000 staff in 2024, used for summarizing policy documents and translation. (Source for the information provision example.)
- [SHRM, "How HR is using generative AI for performance management"](https://www.shrm.org/topics-tools/news/technology/how-hr-is-using-generative-ai-performance-management) — an article covering the HR analytics tool Culture Amp's experiment using ChatGPT to compile Slack kudos, customer comments, and peer feedback into a performance summary. (Source for the monitoring example.)
{: .reflist}

</div>

<div class="block lang-ko" markdown="1">

<a class="linkcard" href="https://doi.org/10.1287/mnsc.2025.01859" target="_blank" rel="noopener"><span class="lc-main"><span class="lc-title">Skill Deprioritization: Reorganizing in the Age of Generative Artificial Intelligence | Management Science</span><span class="lc-desc">How does generative artificial intelligence (GenAI) reshape the skills that organizations seek as they adapt to a new general-purpose technology? GenAI effectively retrieves data, performs analysis...</span><span class="lc-url">🔗 doi.org/10.1287/mnsc.2025.01859</span></span><span class="lc-side">Skill Deprioritization</span></a>

> Devigili, M., Yilmaz, E. D., Gaba, V., & Greve, H. (2026). Skill Deprioritization: Reorganizing in the Age of Generative Artificial Intelligence. *Management Science*, 0(0).

## ✔️ 소개 및 요약

이번 이슈에서 다룰 논문은 생성형 AI가 등장한 뒤 기업이 어떤 관리 인력을 덜 찾게 되는지를 실증적으로 분석한다.

"AI가 일자리를 없앤다"는 말은 이제 흔하다. 하지만 이 말은 두 가지를 흐린다. 기업이 채용을 줄인다면 정확히 어떤 능력부터 줄일 것인가, 그리고 왜 하필 그 능력부터인가. 이 논문은 이 두 질문에 답을 시도한다. 저자들은 이 현상을 기술 우선순위 하락(skill deprioritization)이라 부른다. 정의는 이렇다 — 생성형 AI가 충분히 대신할 수 있는 인간의 능력에 대해, 기업의 채용 수요가 체계적으로 줄어드는 것.

이 정의에서 중요한 것은 두 가지다. 첫째, 이 논문이 측정하는 것은 채용 공고이지 고용 인원이 아니다. 이미 일하고 있는 사람이 몇 명 줄었는지가 이 논문의 데이터로는 알 수 없다. 둘째, 기술 우선순위 하락의 결과는 해고가 아니라 채용 공고에서 그 능력 조건이 빠지는 것이다. 예를 들어 예전에는 영업직이나 배달직 채용 공고에 "지리에 밝은 사람"이라는 조건이 흔히 붙었다. 내비게이션 앱이 보편화된 뒤 이 조건은 공고에서 점차 사라졌다. 이때 기업이 한 일은 이미 이 사람을 내보낸 것이 아니라, 새로 뽑을 때 그 조건을 요구하지 않게 된 것이다. 이 논문이 다루는 변화가 바로 이런 종류다.

이 논문이 대비시키는 기존 연구 흐름을 짚어 둘 필요가 있다. AI와 일에 관한 기존 연구는 주로 역량 보강(augmentation)과 재교육(reskilling)을 다뤘다. AI를 쓰는 사람이 일을 얼마나 더 잘하게 되는지, 그래서 사람이 어떤 능력을 새로 길러야 하는지에 대한 논의였다. 저자들은 이와 반대로 질문, 즉 "기업이 무엇을 더 이상 찾지 않는지"를 다뤘다고 본다.

이 논문은 세 가지 연구 흐름을 결합해 이 질문에 답한다. 첫째, 조직이론에서 관리자가 하는 일을 열 갈래로 나누는 분류 체계를 가져왔다. 둘째, 산업공학의 대기행렬 이론(queuing theory)으로 "그 다섯 갈래 중 어느 것이 먼저 줄어들지" 예측했다. 셋째, ChatGPT 출시를 자연실험으로 삼아 이중차분법(difference-in-differences)을 적용하고, 미국 상장기업의 채용 공고 1,115만 4,915건에서 그 예측이 맞는지 검증했다. 이때 채용 공고를 분류하는 데 GPT-4o를 활용했다.

결과를 요약하면, ChatGPT 출시 뒤 생성형 AI 노출도가 높은 산업에 속한 기업들은, 노출도가 낮은 산업의 기업들과 비교했을 때, 업무를 세분화하고 순서를 정리하는 능력을 요구하는 공고가 23% 줄었다. 정보를 전달하는 능력(약 18~21%)과 성과를 관찰·평가하는 능력(약 23%), 운영상의 문제를 수습하는 능력(약 19%)을 요구하는 공고도 함께 줄었다. 반면 사람을 뽑아 자리에 앉히는 능력, 보상 제도를 설계하는 능력, 갈등을 조정하는 역할을 요구하는 공고는 통계적으로 의미 있게 변하지 않았다.

## ✔️ 연구 내용 및 논리

### 기존 연구는 어디까지 와 있었나

AI와 일에 대한 기존 연구는 대체로 과업(task) 단위로 진행되어 왔다. 특정 과업을 AI가 대신할 수 있는가, 사람이 AI를 쓰면 그 과업을 얼마나 빨리, 얼마나 정확하게 하는가를 다뤘다. 과업 단위는 경계가 분명해서 측정이 깔끔하고 실험으로 비교하기도 좋다는 장점이 있다. 저자들은 여기에 다른 한 가지 관점이 더 필요하다고 본다. 범용 기술(general-purpose technology)은 조직 자체를 함께 바꿔야 효과가 나는 것이다. 저자들이 드는 예는 전기다. 데이비드(David 1990)의 연구에 따르면, 공장에 전기 모터를 들여놓는 것만으로는 생산성이 오르지 않았고, 공장 배치를 다시 설계하고 나서야 생산성 향상이 나타났다. 증기기관이 생산 시설의 입지를 바꾼 것도 비슷한 사례로 언급된다(Rosenberg and Trajtenberg 2004). 이 논리를 그대로 적용하면, 생성형 AI가 개별 과업의 처리 속도를 얼마나 높이는지만 봐서는 조직 차원에서 일어나는 변화를 알 수 없다. 저자들이 조직 차원의 변화를 관찰할 창구로 고른 것이 기업의 인력 수요, 곧 채용 수요다.

### 관리자가 하는 일을 어떻게 나눌 것인가

이 논문은 기존에 널리 쓰이던 스킬 분류 방식과 다른 틀을 쓴다. 기존 연구에서 많이 쓰인 것은 일의 내용을 기준으로 묶는 방식이다. 오터 외(Autor et al. 2003)의 정형/비정형 업무 구분, 데밍과 칸(Deming and Kahn 2018)의 스킬 군집 분석이 대표적이다. 이들은 하는 일의 성격이 비슷한 것끼리 모으는 방식이다.

저자들이 쓴 것은 다른 종류의 분류다. 퍼라남(Puranam 2018)이 제시한 조직화 문제(problems of organizing)의 틀을 가져왔다. 이 틀은 일의 내용이 아니라 "여러 사람이 함께 일하려면 무엇을 해결해야 하는가"를 기준으로 나눈다. 마치와 사이먼(March and Simon 1958)까지 거슬러 올라가는 오래된 구분으로, 크게 둘로 나뉜다. 하나는 분업(division of labor)이다. 기업의 목표를 잘게 나누고, 나눈 조각을 사람에게 배정하는 일이다.

- **과업 분할(task division)** — 큰 목표를 실행 가능한 조각으로 쪼개고, 순서를 잡고, 우선순위를 매기는 일.
- **과업 배분(task allocation)** — 그 조각을 누구에게 줄지 정하는 일. 다시 두 가지로 나뉜다. 사람을 새로 구해 앉히는 충원(staffing)과, 이미 있는 사람이나 도구를 자리에 배정하는 매핑(mapping)이다.

다른 하나는 노력의 통합(integration of effort)이다. 나누어 놓은 일을 다시 하나로 모으는 과정이다.

- **정보 제공(information provision)** — 서로 필요한 정보가 흐르게 하는 일. 부서 간 조율을 뜻하는 조정(coordination), 회의·통화처럼 실시간으로 이루어지는 동기적 소통(synchronous), 보고서·문서·위키처럼 비실시간으로 이루어지는 비동기적 소통(asynchronous) 셋으로 나뉜다.
- **보상 분배(reward distribution)** — 사람들이 목표에 맞게 움직이도록 이끄는 일. 성과를 관찰·평가하는 모니터링(monitoring)과 보상 제도를 설계하는 인센티브(incentives) 설계로 나뉜다.
- **예외 관리(exception management)** — 예상하지 못한 일이 벌어졌을 때 수습하는 일. 사람 사이의 다툼을 다루는 갈등 조정(conflict)과 업무상의 문제를 다루는 운영 예외 관리(operational)로 나뉜다.

이렇게 다섯 갈래가 다시 열 개의 하위 항목으로 나뉜다. 저자들이 이 정도로 세분화한 이유는 두 가지다. 첫째, "생성형 AI가 운영상의 영향을 주지만 갈등 조정에는 영향을 주지 않을 것"처럼 더 구체적인 예측이 가능해진다. 둘째, 측정 면에서 각 항목이 서로 겹치지 않고 독립적으로 정의된다.

### 대기행렬 이론으로 예측하기

이제 "이 열 개 항목 중 어느 것이 먼저 줄어들 것인가"를 예측할 차례다. 저자들이 빌려온 도구는 대기행렬 이론(queuing theory)이다. 이는 줄 서는 상황을 다루는 산업공학 이론으로, 손님이 도착하는 속도, 창구 직원이 한 명을 처리하는 데 걸리는 평균 시간, 그리고 그 처리 시간이 얼마나 일정하지 않은지를 알면 평균 대기 시간을 계산할 수 있다.

글린 외(Glynn et al. 2020)는 이 대기행렬 모형을 조직에 적용했다. 기업에 문제(의사결정이 필요한 사안)가 무작위로 도착하고, 문제를 처리하는 사람들을 창구 직원으로 볼 수 있다는 것이다. 사람들이 팀으로 일하거나, 상사가 부하 직원의 안을 승인하거나, 전문 분야별로 문제를 배정받는 것도 모두 서로 다른 형태의 대기 행렬로 표현될 수 있다. 저자들은 여기에 "그 문제 처리자가 생성형 AI를 쓰게 되면 무엇이 달라지는가"를 묻는다.

가장 단순한 답은, 한 사람이 문제를 더 빨리 처리하니 같은 일을 더 적은 인원으로 해낼 수 있다는 것이다. 그러나 저자들은 이 일반적 효과만으로는 부족하다고 말한다. 이 효과는 열 개 항목 모두에 비슷하게 적용되기 때문에, "어느 항목이 상대적으로 더 취약한가"를 가려내지 못하기 때문이다.

그래서 저자들은 더 구체적인 예측 세 가지를 제시한다.

<div class="sysbox" markdown="1">

<span class="sysnum">1</span> **과업 분할과 일정 조율이 간단해진다**

AI를 쓰는 사람은 문제를 더 빨리 풀 뿐 아니라, AI가 가진 지식에 기대어 더 넓은 범위의 문제를 혼자 다룰 수 있다. 그러면 일을 잘게 쪼개 여러 사람에게 나눠 줄 필요가 줄어든다. 저자들이 드는 예는 프로젝트 관리 소프트웨어 Jira에 탑재된 생성형 AI 기능이다. 이 기능은 평범한 문장으로 적은 목표를 넣으면 하위 작업과 의존 관계를 자동으로 만들어준다. 그리고 과업 분할이 처음부터 자동으로 잘 이루어지면, 그것을 지켜보다가 문제가 생겼을 때 수습하는 운영 예외 관리의 필요성도 함께 줄어든다.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">2</span> **정보를 모으고 해석하는 일이 쉬워진다**

지금까지 조직이 필요한 정보를 정리해서 구성원에게 밀어주는 방식(push)이 일반적이었다. 그런데 생성형 AI가 있으면 필요한 사람이 그때그때 직접 끌어올(pull) 수 있다. 그러면 정보를 정리해서 밀어주는 역할에 붙어 있던 인력이 덜 필요해진다. 저자들이 드는 예는 미국 국무부다. 국무부는 2024년 직원 1,000명을 대상으로 내부 생성형 AI 챗봇을 도입했고, 정책 문서 요약과 번역에 활용하고 있다고 보고되었다.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">3</span> **성과를 관찰하고 평가하는 일이 자동화된다**

저자들이 짚은 흥미로운 지점은, 근태 시스템처럼 자동으로 성과를 기록하는 기술은 이미 오래전부터 갖춰져 있었다는 것이다. 그러나 그 데이터를 읽어서 판단으로 바꾸는 역할은 여전히 사람이 맡고 있었다. 생성형 AI는 바로 이 빈틈을 메운다. 저자들이 드는 예는 HR 분석 도구 Culture Amp다. 이 도구는 ChatGPT를 이용해 Slack의 칭찬 기록, 고객 코멘트, 동료 피드백을 몇 달 치 모아 성과 요약을 자동으로 만드는 실험을 했다.

</div>

### 반대로 줄어들 근거가 약한 것은 무엇인가

저자들은 줄어들 근거가 약한 항목도 분명히 밝혀 둔다. 과업 배분(누구를 새로 뽑고 누구에게 일을 맡길지 정하는 일), 인센티브 설계, 갈등 조정 세 가지다. 이유는 이렇다. 사람이 AI를 쓰게 되었다고 해서 적합한 사람을 고르고 동기를 부여하는 일 자체의 성격이 바뀌지는 않는다. 다만 2차 효과가 일어날 가능성도 그대로 남는다. 조직 구조 자체를 다시 짜는 2차 효과가 일어난다면 그렇다. 그러나 2차 효과는 실험하고 배우고 실행하는 데 시간이 걸리므로, ChatGPT 출시 직후인 이 논문의 관찰 기간에는 나타나기 어려울 것이라는 게 저자들의 예상이다.

### 왜 이것이 "재조직"인가 — 통제 범위 이야기

논문 제목의 뒷부분은 "Reorganizing(재조직)"이다. 몇 가지 기술의 채용 수요가 줄어드는 것이 왜 조직을 다시 짜는 일과 연결되는가. 저자들은 이 연결 고리를 통제 범위(span of control)로 설명한다. 통제 범위란 관리자 한 명이 직접 관리하는 부하 직원의 수를 말한다.

통제 범위는 기존 연구에 따르면 두 가지로 정해진다. (i) 관리자가 승인해야 할 결정이 얼마나 자주 올라오는가, (ii) 결정 하나를 처리하는 데 걸리는 시간이 얼마나 변동성이 큰가(즉 처리 시간이 얼마나 들쭉날쭉한가)이다.

여기서 저자들이 주목하는 것이 (ii)다. 대기행렬 이론에는 다음과 같은 결과가 있다 — 평균 대기 시간은 처리 시간의 분산에 비례한다. 즉 처리 시간이 짧아지는 것이 아니라, 처리 시간이 일정해지는(변동성이 줄어드는) 것 자체가 대기 시간을 줄인다. 생성형 AI가 조정 업무를 가져가면 관리자에게 남는 일의 처리 시간 변동성이 줄어든다. 그러면 대기 시간이 줄고, 그 여유만큼 관리자 한 명이 더 많은 부하 직원을 받을 수 있게 된다. 저자들은 이를 근거로, 조정과 모니터링 인력을 덜 뽑는 것이 곧 관리 계층이 얇아지는 방향으로 이어진다고 본다. 이 부분의 수식은 「데이터 및 방법론」에서 함께 설명한다.

<div class="diagram-box" markdown="1">

![관리자를 창구로 보면 — 왜 한 명이 더 많은 사람을 볼 수 있게 되나](/assets/img/skill-deprioritization_fig1-queuing-ko.png)

*그림 1. 관리자를 창구로 보면 — 부하 직원이 올린 결정이 관리자에게 줄을 선다. 생성형 AI가 조정 업무의 일부를 가져가면, 남은 일에 걸리는 시간의 들쭉날쭉함이 줄어든다. 평균이 그대로여도 그것만으로 줄이 짧아지고, 그 여유만큼 관리자 한 명이 더 많은 사람을 볼 수 있게 된다.*
{: .caption}

</div>

## ✔️ 데이터 및 방법론

### 무엇을 어디서 모았나

표본은 미국 상장기업 1,820곳이며, 기업-월 단위로 40,465개 관측치다. 세 곳의 데이터를 결합했다.

- **Lightcast** — 미국 채용 시장을 매일 수집하는 채용 공고 데이터베이스. 공고 한 건마다 어떤 스킬을 요구하는지가 태그로 붙어 있다. 이 논문의 종속변수는 모두 여기서 나온다.
- **Compustat** — 분기 재무 데이터. 통제변수로 사용한다.
- **Revelio** — 기업별 월별 인원 수 데이터. 인력 변화를 통제하는 데 썼다.

관찰 기간은 ChatGPT가 공개된 2022년 11월 30일을 기준으로 전후 각 12개월이다. 이전 기간은 2021년 12월부터 2022년 11월까지, 이후 기간은 2022년 12월부터 2023년 11월까지다. 저자들은 이 기간을 고른 이유를 이렇게 밝힌다. 이전 기간은 비교 기준선을 잡을 만큼은 길고, 그 이전의 AI 발전에 영향을 받지 않을 만큼은 최근이어야 한다. 이후 기간은 기업이 반응할 시간이 충분하되, 다른 사건이 끼어들 만큼 길어서는 안 된다.

### "노출도 높은 산업"은 어떻게 정했나

이 논문의 처리군(treated group)은 AI를 실제로 도입한 기업이 아니다. 이 점이 헷갈리기 쉬운 대목이다. 저자들이 쓴 것은 펠튼 외(Felten et al. 2021, 2023)가 제시한 AI 직업 노출도(AIOE, AI Occupational Exposure)다. 미국 노동부의 O*NET 데이터베이스에는 800개가 넘는 직업이 52가지인 능력과 어떻게 연결되는지가 정리돼 있다. 여기에 "이 52가지 능력이 특정 AI 기능에 얼마나 노출돼 있는가"를 설문조사로 물어 만든 행렬을 곱해 직업별 노출도를 계산한다. 이 논문은 그중 "언어 모델링(language modeling)" AI 기능에 대한 노출도만 골라 썼다.

<div class="formula">\[AIOE_k = \frac{\sum_{j=1}^{52} A_j \times L_{jk} \times I_{jk}}{\sum_{j=1}^{52} L_{jk} \times I_{jk}}\]</div>

| 기호 | 뜻 |
|---|---|
| <span class="mvar">k</span> | 직업 |
| <span class="mvar">j</span> | 52가지 능력 중 하나 |
| <span class="mvar">A</span> | 능력 <span class="mvar">j</span>가 언어 모델링 AI에 얼마나 노출돼 있는가 |
| <span class="mvar">L, I</span> | 직업 <span class="mvar">k</span>에서 능력 <span class="mvar">j</span>가 얼마나 중요한지, 얼마나 자주 쓰이는지 |
| <span class="mvar">n</span> | 산업 |
| <span class="mvar">S<sub>nk</sub></span> | 산업 <span class="mvar">n</span>에서 직업 <span class="mvar">k</span>가 차지하는 비중 |

여기까지는 직업 단위 값이다. 이를 산업 단위로 올리기 위해, Lightcast로 4자리 NAICS 산업별·직업별 월간 공고 수를 집계하고, 각 산업 안에서 각 직업이 차지하는 비중을 구한 뒤 가중했다.

<div class="formula">\[GenAI\ Exposure_n = \sum_k AIOE_k \times S_{nk}\]</div>

마지막으로 ChatGPT 이전 기간의 월별 값을 평균 내 산업별 노출도를 정하고, 그 값이 표본 평균을 넘으면 처리군으로 분류했다. 결과는 처리군 966곳, 대조군 854곳으로 거의 반반으로 갈렸다. 정리하면, 이 논문이 가른 기준은 "이 기업이 AI를 도입했는가"가 아니라 "이 기업이 속한 산업의 직업 구성이 언어 모델에 얼마나 물려 있는가"다.

### 채용 공고 속 33,832개 기술을 열 갈래로 분류하는 일

이 논문에서 손이 가장 많이 간 대목이다. Lightcast의 기술 분류 체계(9.25판)에는 33,832개의 개별 기술(skill)이 있고, 각각에 70단어 남짓한 설명이 붙어 있다. 저자들은 이 기술들을 앞서 정한 열 개 항목으로 분류해 냈다. 순서는 다음과 같다.

<div class="sysbox" markdown="1">

<span class="sysnum">1</span> **토픽 모델로 후보를 좁힌다**

잠재 디리클레 할당(LDA, Latent Dirichlet Allocation) 모형을 토픽 수 5개부터 100개까지 5개씩 늘려 가며 20종 돌렸다. 응집도 점수와 대표 단어, 기술 설명을 함께 검토해 65개 토픽짜리 모형을 골랐고, 그중 조직화 항목과 관련 있는 토픽 4개에서 1,765개의 기술을 후보로 뽑았다.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">2</span> **사람이 직접 읽는다**

저자들이 이 1,765개의 설명을 직접 읽고 열 개 라벨을 정했다. 이 중 397개가 어느 한 항목에 해당했고, 1,368개는 해당하지 않았다.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">3</span> **다른 사람에게도 맡겨 일치도를 확인한다**

연구 보조원이 같은 1,765개를 독립적으로 분류했다. 정밀도 0.83, 재현율 0.81, F1 0.83이 나왔고, 두 사람의 분류가 얼마나 일치하는지 재는 지표인 코헨의 카파(Cohen's kappa)는 0.7928이었다. 어긋난 사례는 따로 논의해 라벨 정의를 다듬었다.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">4</span> **GPT-4o로 전체 33,832개에 확대 적용한다**

기술 하나마다 GPT-4o 에이전트 세 개가 독립적으로 라벨을 붙이고, 그중 둘 이상이 동의한 라벨을 채택했다. 2단계의 손 분류 결과를 기준으로 검증하니 정확도 93%, 재현율 86%, F1 89%였다. 전체 데이터에서 1,369개의 기술이 후보로 남았다.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">5</span> **다시 사람이 최종 확인한다**

그 1,369개를 손으로 다시 확인해 657개의 기술을 확정했고, 기술 하나가 여러 항목에 걸릴 수 있어 총 719개의 기술-라벨 연결이 만들어졌다.

</div>

이 분류를 적용해 처리한 공고가 1,115만 4,915건이다. 공고 하나가 여러 항목에 걸릴 수 있으므로 항목별 건수는 서로 배타적이지 않다.

### 대기행렬 모형의 수식

앞서 「연구 내용 및 논리」에서 미뤄 둔 통제 범위 부분이다. 문제가 관리자에게 평균 빈도 <span class="mvar">λ</span>로 도착하고, 처리 시간은 평균 <span class="mvar">1/μ</span>, 분산 <span class="mvar">σ²</span>인 분포를 따른다고 하자. 생성형 AI가 조정 업무 중 <span class="mvar">φ</span>만큼을 가져가면 남는 분산은 다음과 같다.

<div class="formula">\[\sigma^2_{\text{AI 이후}} = (1-\varphi) \times \sigma^2_{\text{AI 이전}}\]</div>

이런 형태의 대기행렬(M/G/1)에서 평균 대기 시간은 다음과 같다.

<div class="formula">\[E[W] = \frac{\lambda\sigma^2}{2(1-\rho)}, \quad \rho = \lambda/\mu\]</div>

| 기호 | 뜻 |
|---|---|
| <span class="mvar">λ</span> | 결정이 관리자에게 올라오는 평균 빈도 |
| <span class="mvar">1/μ</span> | 결정 하나를 처리하는 평균 시간 |
| <span class="mvar">σ²</span> | 처리 시간의 분산 — 처리 시간이 얼마나 일정하지 않은가 |
| <span class="mvar">ρ</span> | 가동률. 1에 가까울수록 관리자가 포화 상태 |
| <span class="mvar">φ</span> | 조정 업무 중 AI에게 넘어간 비율 (0 < φ ≤ 1) |
| <span class="mvar">E[W]</span> | 평균 대기 시간 |

유념할 것은 분자에 <span class="mvar">σ²</span>가 있다는 점이다. 처리 시간이 짧아지는 것만이 아니라, 처리 시간의 변동성이 줄어드는 것 자체가 대기 시간을 줄인다. 그래서 <span class="mvar">φ</span>가 커지면 대기 시간이 줄고, 그 여유만큼 부하 직원을 더 받을 수 있다. 저자들이 정리한 추가 수용 가능 인원은 다음과 같다.

<div class="formula">\[\Delta n \approx \frac{\varphi}{1-\rho} \times \frac{\sigma^2_{\text{AI 이전}}}{\bar\lambda}\]</div>

여기서 <span class="mvar">Δn</span>은 대기 시간을 늘리지 않고 더 받을 수 있는 부하 직원 수이고, <span class="mvar">λ̄</span>는 부하 직원 한 명이 만들어 내는 평균 도착률로, 앞의 <span class="mvar">λ</span>(관리자 전체에 올라오는 도착 빈도)와는 다른 값이다. 식의 모양을 보면, 원래 처리 시간의 변동성이 심했던 조직일수록(<span class="mvar">σ²</span>가 클수록), 그리고 관리자가 이미 포화 상태에 가까웠던 조직일수록(<span class="mvar">ρ</span>가 1에 가까울수록) 효과가 크다.

### 어떻게 추정했나

이중차분법(difference-in-differences, DiD)을 썼다. 노출도가 높은 산업에 속한 기업의 ChatGPT 이후 – 이전 변화에서, 노출도가 낮은 산업에 속한 기업의 같은 변화를 빼는 방법이다. 이렇게 하면 해당 기간에 모든 기업에 공통으로 작용한 요인(경기, 채용 시장 전반의 흐름)이 상쇄된다. PostGPT와 Treated를 각각 별도 변수로 넣지 않은 것은 이 둘이 시간 고정효과·기업 고정효과와 겹치기 때문이다.

<div class="formula">\[y_{it} = \alpha_{it} + \beta(PostGPT_t \times Treated_i) + \theta X_{it} + \delta_i + \delta_t + \varepsilon_{it}\]</div>

| 기호 | 뜻 |
|---|---|
| <span class="mvar">y</span> | 기업 <span class="mvar">i</span>가 <span class="mvar">t</span>월에 올린 공고 중 해당 기술을 요구하는 건수 |
| <span class="mvar">Treated</span> | 노출도 높은 산업에 속하면 1 |
| <span class="mvar">PostGPT</span> | 2022년 12월 이후면 1 |
| <span class="mvar">β</span> | 이 논문이 확인하려는 값 |
| <span class="mvar">X</span> | 통제변수 |
| <span class="mvar">δ<sub>i</sub>, δ<sub>t</sub></span> | 기업 고정효과, 연-월 고정효과 |

추정은 포아송 유사최대우도(PPML, Poisson Pseudo-Maximum Likelihood)로 했다. 저자들이 이 방법을 고른 이유는 세 가지다. (i) 종속변수가 0이 많은 건수 자료인데, 로그 변환처럼 무리한 처리 없이 다룰 수 있다. (ii) 자료가 실제로 포아송 분포를 따르지 않아도 일관된 추정치를 준다. (iii) 분산이 고르지 않은 상황에도 견딘다. 표준오차는 기업 단위로 묶어(clustered) 계산했다.

통제변수는 규모(총자산 로그), ROA, 부채비율, 총자산 대비 R&D, R&D 지출 여부 더미, 총자산 대비 설비투자, 그리고 인력 변화율이다.

<div class="formula">\[\text{인력 변화율} = \frac{\text{이번 달 인원} - \text{지난달 인원}}{\text{지난달 인원}}\]</div>

인력 변화율을 넣은 이유는, 대규모 정리해고를 진행 중인 기업은 AI와 무관하게 공고 자체가 줄어들 수 있기 때문이다.

<div class="diagram-box" markdown="1">

![이중차분법 — 두 집단의 변화를 견줘서 ChatGPT의 몫만 떼어내기](/assets/img/skill-deprioritization_fig2-did-ko.png)

*그림 2. 이중차분법을 이 논문에서는 어떻게 썼나 — 노출도 높은 산업과 낮은 산업의 공고 수를 24개월에 걸쳐 그린 것. ChatGPT 이전에는 두 선이 나란해야 하고, 이후에 벌어진 폭이 β다. 처리군은 "AI를 도입한 회사"가 아니라 직업 구성이 언어 모델에 많이 물린 산업의 회사를 말한다. 선의 모양은 방법을 설명하려고 그린 것이고 논문의 실제 계수 그림이 아니다.*
{: .caption}

</div>

### 검증은 일곱 갈래로

저자들이 결과를 확인한 방식은 다음과 같다. 각각의 결과는 「연구 결과」에서 하나씩 짚는다.

- 기본 이중차분 추정 — 통제변수 없이 한 번, 넣고 한 번
- 동적 이중차분 — 월별로 나눠 추정해 평행 추세 가정을 확인
- 처리/대조 이분법을 풀고 연속형 노출도로 다시 추정
- GPT-3.5 기간과 GPT-4 기간을 나눠서 추정
- 위약 검정(placebo test)과 반증 검정(falsification test)
- 추정 방법·기술 분류·표본 구성을 바꿔 가며 재현
- 보조 분석 — 전체 채용 수요를 통제했을 때의 결과, 그리고 관리직 채용 비중의 변화

## ✔️ 연구 결과

### 기업들은 원래 어떤 기술을 얼마나 찾고 있었나

먼저 기준선을 보자. 기업-월당 평균 공고 건수다.

| 항목 | 평균 공고 수 |
|---|---|
| 과업 분할 | 89.3 |
| 정보 제공 (동기) | 75.5 |
| 예외 관리 (운영) | 63.6 |
| 정보 제공 (비동기) | 60.1 |
| 정보 제공 (조정) | 52.9 |
| 보상 분배 (모니터링) | 24.6 |
| 예외 관리 (갈등) | 13.7 |
| 과업 배분 (매핑) | 13.0 |
| 과업 배분 (충원) | 5.1 |
| 보상 분배 (인센티브) | 1.4 |

과업 분할 관련 공고가 압도적으로 많고, 인센티브 설계 관련 공고는 거의 나오지 않는다. 표본 기업의 53%가 노출도 높은 산업으로 분류됐고, 평균 규모는 총자산 로그 7.87, 부채비율 0.30이며 42%가 R&D 지출을 보고했다.

### <span class="sysnum" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;flex-shrink:0;border-radius:50%;background:var(--ink);color:#fff;font-weight:800;font-size:13px;">1</span> 기본 결과 — 무엇이 줄었나
{: style="display:flex;align-items:center;gap:10px;"}

아래 계수는 로그 눈금이라 그대로 읽으면 안 된다. exp(β) − 1이 실제 변화율이다. 통제변수를 넣지 않은 기본 추정 결과는 다음과 같다.

| 항목 | 계수 | 변화율 | 유의성 |
|---|---|---|---|
| 과업 분할 | −0.261 | −23.0% | p<0.001 |
| 보상 분배 (모니터링) | −0.264 | −23.2% | p<0.001 |
| 정보 제공 (비동기) | −0.241 | −21.4% | p<0.01 |
| 정보 제공 (조정) | −0.240 | −21.3% | p<0.01 |
| 예외 관리 (운영) | −0.211 | −19.0% | p<0.01 |
| 정보 제공 (동기) | −0.204 | −18.5% | p<0.05 |
| 예외 관리 (갈등) | −0.224 | — | 유의하지 않음 |
| 보상 분배 (인센티브) | −0.150 | — | 유의하지 않음 |
| 과업 배분 (매핑) | −0.097 | — | 유의하지 않음 |
| 과업 배분 (충원) | +0.162 | — | 유의하지 않음 |

이론에서 예측한 세 가지 모두 데이터로 확인됐다. 과업 분할, 정보 제공(조정·동기·비동기 세 하위 항목 모두), 모니터링이 줄었고, 과업 분할에 따라붙는다고 예측했던 운영 예외 관리도 함께 줄었다. 반대로 과업 배분(충원·매핑 모두), 인센티브, 갈등 조정에서는 유의한 변화가 없다.

다만 갈등 조정은 조심스럽게 읽을 필요가 있다. 계수 자체(−0.224)는 유의하게 나온 다른 항목들과 비슷한 크기이지만, 표준오차가 0.131로 커서 유의성 문턱을 넘지 못했다. 즉 "변화가 없었다"라기보다 "변화가 있었는지 이 데이터로는 가려낼 수 없다"에 가까운 결과다. 통제변수를 넣어도 결과는 거의 그대로 유지된다(과업 분할 −22.9%, 조정 −21.1%, 동기 −18.5%, 비동기 −21.6%, 모니터링 −22.8%, 운영 예외 −18.9%).

<div class="diagram-box" markdown="1">

![관리자가 하는 일을 열 갈래로 쪼개면, 무엇이 줄었나](/assets/img/skill-deprioritization_fig3-table-ko.png)

*그림 3. 관리자가 하는 일을 열 갈래로 쪼개면, 무엇이 줄었나 — ChatGPT 출시 전후 각 12개월, 노출도가 높은 산업의 기업이 낮은 산업의 기업과 견줘 채용 공고(통제변수 미포함 기본 추정, exp(β)−1 기준)를 얼마나 줄였는지. 갈등 조정은 계수 크기는 비슷하지만 표준오차가 커 유의성 문턱을 넘지 못한 것으로, 문항 기준을 바꾸면 유의하게 줄어든다(「검증」 절 참고). 셋은 채용 공고가 줄어들지 않은 항목이다. 분류 기준은 Puranam(2018)의 틀을 따랐고, 표는 논문 Table 3을 새로 작도했다.*
{: .caption}

</div>

### <span class="sysnum" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;flex-shrink:0;border-radius:50%;background:var(--ink);color:#fff;font-weight:800;font-size:13px;">2</span> 평행 추세는 성립했나
{: style="display:flex;align-items:center;gap:10px;"}

이중차분법은 "만약 ChatGPT가 없었다면 두 집단이 나란히 움직였을 것"이라는 가정 위에 있다. 이 가정은 직접 확인할 수 없으므로, 대신 처리 이전 기간에서 실제로 두 집단이 나란히 움직였는지를 확인한다. 저자들은 사후 시점을 하나로 뭉치지 않고 월별 더미로 풀어서 다시 추정했다(기준 시점은 처리 직전인 2022년 11월). 그리고 처리 이전 계수들이 모두 0인지를 카이제곱 검정으로 확인했다. 대부분의 항목에서 이 가정은 기각되지 않았다. 다만 예외가 하나 있다. 과업 배분(충원)은 처리 이전 기간에 두 집단이 이미 다르게 움직이고 있었고, 이 차이가 5% 수준에서 유의했다. 그러니 앞서 "충원은 변화가 없었다"고 한 결과는 다른 항목들보다 근거가 약하다. 저자들도 이 점을 그대로 인정한다.

### <span class="sysnum" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;flex-shrink:0;border-radius:50%;background:var(--ink);color:#fff;font-weight:800;font-size:13px;">3</span> 노출도를 연속형으로 바꾸면
{: style="display:flex;align-items:center;gap:10px;"}

처리군/대조군으로 이분화하는 대신, 2022년 11월 시점의 산업별 노출도 값을 그대로 곱해 추정했다. 결과는 대체로 같은 방향을 유지했다. 과업 분할 −0.349(p<0.01), 조정 −0.311(p<0.05), 비동기 −0.343(p<0.01), 모니터링 −0.321(p<0.05), 운영 예외 −0.293(p<0.05)로 모두 유의성을 유지했다. 한 군데만 다르다. 정보 제공(동기, 즉 실시간 소통) 항목은 이 분석에서 유의하지 않게 된다. 이는 실시간 소통 하위 항목이 세 하위 항목 중 결과가 가장 불안정하다는 뜻이며, 뒤에 나오는 여러 견고성 검증에서도 이 항목은 반복해서 유의성이 흔들린다.

### <span class="sysnum" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;flex-shrink:0;border-radius:50%;background:var(--ink);color:#fff;font-weight:800;font-size:13px;">4</span> GPT-3.5 때와 GPT-4 때를 나누면
{: style="display:flex;align-items:center;gap:10px;"}

이 논문의 전제는 "관리자들이 ChatGPT를 써 보고 AI로 무엇이 가능한지에 대한 생각을 바꿨다"는 것이다. 그렇다면 AI 성능이 확연히 좋아졌을 때 그 효과도 함께 커져야 한다. 저자들은 처리 기간을 GPT-3.5 기간(2022년 12월~2023년 2월)과 GPT-4 기간(2023년 3월 이후)으로 나눠 다시 추정했다.

| 항목 | GPT-3.5 기간 | GPT-4 기간 |
|---|---|---|
| 보상 분배 (모니터링) | −0.164 (유의하지 않음) | −0.291 (p<0.001) |
| 예외 관리 (운영) | −0.150 (유의하지 않음) | −0.230 (p<0.01) |
| 정보 제공 (비동기) | −0.220 (p<0.05) | −0.250 (p<0.01) |
| 과업 분할 | −0.262 (p<0.01) | −0.260 (p<0.001) |
| 정보 제공 (조정) | −0.272 (p<0.05) | −0.225 (p<0.01) |

가장 뚜렷하게 달라진 것은 모니터링이다. GPT-3.5 기간에는 유의하지 않다가 GPT-4 기간에는 계수 크기도 커지고 유의 수준도 가장 높은 수준(p<0.001)까지 올라간다. 운영 예외 관리도 비슷한 패턴을 보인다. 다만 아래 두 항목은 다르게 읽어야 한다. 과업 분할은 계수 크기는 거의 그대로이고 유의 수준만 더 정밀해졌다. 정보 제공(조정)은 오히려 계수 크기가 줄었다. 저자들은 이 둘에 대해 "유의 수준이 올라갔을 뿐"이라고 설명한다.

저자들은 이 결과가 두 가지 가능한 설명 중 하나를 고를 수 있게 해 준다고 본다. (1) ChatGPT가 나왔다는 사실 자체가 관리자의 인식을 바꾼 것이라면, 효과는 최초 출시 시점에 몰려 있어야 한다. (2) 실제 AI 성능이 좋아진 것이 원인이라면, 성능이 더 좋아진 GPT-4 시기에 효과가 더 커져야 한다. 결과는 (2)에 가깝다. 즉 화제성이나 신기함이 아니라 실제 성능 향상이 기업의 채용 행태를 움직인 것이다.

### <span class="sysnum" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;flex-shrink:0;border-radius:50%;background:var(--ink);color:#fff;font-weight:800;font-size:13px;">5</span> 위약 검정과 반증 검정
{: style="display:flex;align-items:center;gap:10px;"}

위약 검정(placebo test)은 아무 일도 일어나지 않았던 시점을 가짜 사건일로 잡고 같은 분석을 반복하는 것이다. 진짜 효과라면 가짜 시점에서는 결과가 나오지 말아야 한다. 저자들은 ChatGPT 실제 출시일 6개월, 9개월, 12개월 전을 각각 가짜 시점으로 잡았다. 9개월 전과 12개월 전에서는 유의한 결과가 나오지 않았다. 6개월 전에서는 계수 하나가 유의하게 나왔지만, 크기가 작고 유의 수준도 낮았다.

반증 검정(falsification test)은 두 가지다. 첫째는 GitHub Copilot(2022년 6월 21일 공개)을 같은 방식으로 분석한 것이다. Copilot은 개발자 위주로 쓰임새가 좁아서, 이 논문의 논리대로라면 조직화 기술 수요에 ChatGPT와 비슷한 영향을 주지 않아야 한다. 실제로 그런 결과가 나왔다. 둘째는 펠튼 외(2021)가 제시한, 언어 모델에 국한하지 않는 더 넓은 AI 노출도 측정치로 바꿔 본 것이다. 과업 분할·모니터링·운영 예외에서는 이 논문의 원래 결과와 비슷한 결과가 나왔지만, 글쓰기 관련 영역처럼 이 좁은 측정치에 잘 잡히지 않았던 과업 배분(매핑)에서 유의한 효과가 새로 나타났는데, 저자들은 이를 언어 모델이 아닌 다른 종류의 생성형 AI가 자원 배치에 미치는 영향일 수 있다고 보고 후속 연구 과제로 남겨 두었다.

### <span class="sysnum" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;flex-shrink:0;border-radius:50%;background:var(--ink);color:#fff;font-weight:800;font-size:13px;">6</span> 추정 방법과 분류, 표본을 바꿔 가며
{: style="display:flex;align-items:center;gap:10px;"}

저자들이 확인한 견고성 검증은 다음과 같다.

- 평행 추세 가정의 위반 정도에 대한 민감도 분석 — 램바찬과 로스(Rambachan and Roth 2023)의 방법으로, 평행 추세 가정이 어느 정도 어긋나도 결과가 버티는지 확인
- 다른 추정량 사용 — 울드리지(Wooldridge 2023)의 확장 양방향 고정효과(ETWFE) 추정량으로 재추정
- 토픽 기반 분류를 쓰지 않고 재현 — 키워드 사전 방식으로 종속변수를 다시 만들어 재현
- AI를 미리 알고 있었을 법한 기술 기업을 표본에서 제외 — NAICS 51(정보)·54(전문·과학·기술서비스) 업종을 뺀 재추정
- 처리군을 다른 기준으로 분류 — 하이모비치와 시우(Jaimovich and Siu 2012)의 비정형 인지 직업 비중 50% 기준으로 처리군(1,052곳)·대조군(768곳)을 다시 나눠 재추정
- 비슷한 기업끼리 짝지어 비교 — 성긴 정확 매칭(CEM, Coarsened Exact Matching)으로 처리군 397곳·대조군 397곳을 사전 특성이 비슷하도록 맞춰 재추정
- 그 외 — 겉보기 무관 회귀(SUR), 로그 변환 후 OLS, 음이항 회귀, GPT-3.5와 GPT-4를 각각 별도 모형으로 돌리는 방식 등

어느 검증에서도 유의성이 유지된 항목은 넷이다. 과업 분할, 정보 제공(비동기), 모니터링, 운영 예외 관리. 이 논문이 가장 견고한 결과로 꼽는 항목이다. 반대로 유의성이 검증에 따라 흔들리는 항목도 있다. 정보 제공(동기, 실시간 소통)은 연속형 노출도 분석, 기술·기업 재분류, CEM 분석 모두에서 유의하지 않게 나온다. 모니터링도 CEM 분석에서 한 번 유의하지 않게 나온다. 그리고 앞서 "가릴 수 없다"고 했던 갈등 조정은, 비정형 인지 직업 기준으로 처리군을 다시 나누면 유의하게 감소한 것으로 나온다. 이는 처리군을 정의하는 방식에 따라 갈등 조정 항목의 결론이 달라질 수 있다는 뜻이다.

한 가지 더 눈여겨볼 결과가 있다. 열 개 하위 항목을 다시 다섯 개 대분류로 합쳐 보면, 과업 분할·과업 배분·정보 제공의 결과는 그대로 유지되지만, 보상 분배와 예외 관리는 합치는 순간 안쪽의 차이가 지워진다. 예를 들어 보상 분배는 모니터링은 줄고 인센티브는 줄지 않았는데, 둘을 합치면 이 차이가 뭉개져 보이지 않게 된다. 이 논문이 굳이 열 개로 세분화한 이유가 여기서 드러난다.

### <span class="sysnum" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;flex-shrink:0;border-radius:50%;background:var(--ink);color:#fff;font-weight:800;font-size:13px;">7</span> 보조 분석 — 그냥 채용을 줄인 것은 아닌가
{: style="display:flex;align-items:center;gap:10px;"}

여기서 자연스럽게 나오는 반문이 하나 있다. 기업이 특정 기술만 찾은 것이 아니라 그냥 채용 자체를 줄인 것은 아닌가? 저자들은 이에 답하기 위해 전체 채용 수요를 통제하고 재추정했다. 그 결과 조정과 과업 분할의 감소는 그대로 남았다. 전체적으로 채용을 덜 한 것과는 별개로, 이 기술들이 상대적으로 더 밀려났다는 뜻이다.

통제 범위 이론과 이어지는 결과도 하나 있다. 관리직 공고를 비관리직 공고와 비교해 보면, 노출도가 높은 기업일수록 관리직 비중이 상대적으로 더 줄었다. 이는 앞서 설명한 통제 범위 논리와 방향이 맞는다. 관리자 한 명이 더 많은 사람을 볼 수 있게 되면 관리자 자체를 덜 뽑게 되기 때문이다. 동시에 이 결과는, 처리군과 대조군을 제대로 갈랐다는 방증이기도 하다. 실제로 생성형 AI 관련 기술을 요구하는 공고는 가파르게 늘었고, 그 증가는 노출도 높은 기업들이 이끌었다.

## ✔️ 결론

정리하면, ChatGPT가 나온 뒤 1년 동안 미국 상장기업 중 노출도가 높은 산업의 기업들은, 노출도가 낮은 산업의 기업들과 비교했을 때, 업무를 세분화·정리하는 능력(−23%), 정보를 전달하는 능력(−18~21%), 성과를 관찰하는 능력(−23%), 운영상의 문제를 수습하는 능력(−19%)을 요구하는 공고를 줄였다. 반면 사람을 뽑아 자리에 앉히는 능력, 보상 제도를 설계하는 능력, 갈등을 조정하는 역할을 요구하는 공고는 통계적으로 의미 있게 변하지 않았다.

이 결과의 의의는, 이 예측이 데이터를 보기 전에 이미 세워져 있었다는 점이다. 저자들은 조직을 대기행렬로 놓고 "AI가 처리 시간의 변동성을 줄이는 업무부터 인력 수요가 줄어든다"라는 예측을 먼저 세운 뒤 데이터를 확인했고, 실제 결과가 그 예측과 방향이 일치했다. 저자들 스스로 기업이 완전히 최적으로 움직인다고 주장하지는 않지만, 대기행렬 모형이 초기 반응을 설명하는 첫 근사치로는 이 논문이 보여준 바다.

저자들 스스로 밝힌 한계는 두 가지다. 첫째, 처리군이 개별 기업이 아니라 산업 단위로 정해졌다는 점이다. 같은 산업 안에도 AI 도입 속도가 서로 다른 기업이 섞여 있는데, 이 차이가 반영되지 않았다. 저자들은 이 때문에 오히려 실제 효과보다 추정치가 작게 나왔을 가능성이 있다고 본다(대조군에 실질적으로 AI를 쓰는 기업이 섞여 있을수록 처리군과 대조군의 차이가 줄어들기 때문이다). 둘째, 관찰 기간이 ChatGPT 출시 후 12개월에 불과해, 기업이 조직 구조 자체를 실제로 다시 짜는 단계까지는 관찰하지 못했다는 점이다. 지금 확인한 것은 채용 공고에 나타난 1차 반응이며, 조직 구조 자체가 바뀌는 2차 효과는 앞으로 몇 년에 걸쳐 나타날 것이라는 게 저자들의 예상이다.

그럼에도 이 논문의 쓸모는 분명하다. 지금까지 "AI가 일자리를 없앤다"는 말은 대체로 직업 이름 단위로 오갔다. 이 논문은 그 눈금을 한 단계 낮춰, 직업 안의 관리 업무의 종류로 바꿨다. 이는 커리어를 준비하는 입장에서 "무슨 직무를 고를까"보다 "그 직무 안에서 어떤 종류의 판단을 맡을까"가 더 중요한 질문이 될 수 있는 뜻이기도 하다. 저자들은 이 논문이 그 다음 단계, 즉 2차 효과를 같은 방법으로 기업 단위에서 다시 측정할 수 있는 기준선을 마련한 것이라고 본다.

## ✔️ 참고 자료

- **대기행렬 이론(Queuing theory)** — 줄을 서서 기다리는 문제를 다루는 산업공학 도구로, 이 논문 이론의 뼈대다. [위키백과에서 보기](https://en.wikipedia.org/wiki/Queueing_theory).
- **이중차분법(Difference-in-differences)** — 이 논문의 주요 추정 방법이다. [위키백과에서 보기](https://en.wikipedia.org/wiki/Difference_in_differences).
- **O\*NET** — 미국 노동부의 직업-능력 데이터베이스로, 노출도 측정의 출발점이다. [O\*NET 바로가기](https://www.onetonline.org/).
- **AI 직업 노출도(AIOE)** — Felten, Raj, & Seamans (2021), *Strategic Management Journal*에 실린, 이 논문이 쓰는 AIOE 지표의 원 논문이다. [논문 보기](https://doi.org/10.1002/smj.3286).
- **잠재 디리클레 할당(LDA)** — 기술 후보를 추려내는 데 쓰인 토픽 모델이다. [위키백과에서 보기](https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation).
- **코헨의 카파(Cohen's kappa)** — 두 사람의 분류가 얼마나 일치하는지 나타내는 지표다. [위키백과에서 보기](https://en.wikipedia.org/wiki/Cohen%27s_kappa).
- **Lightcast** — 이 논문의 데이터셋을 구축한 채용 공고 데이터베이스다. [Lightcast 바로가기](https://lightcast.io/).
- **과업 분할 사례: Atlassian** — Jira의 생성형 AI 기능은 평문으로 적은 목표를 하위 과업과 의존관계로 자동으로 쪼갠다. [제품 페이지 보기](https://www.atlassian.com/platform/artificial-intelligence).
- **운영 예외 처리 사례: Stripe** — Stripe는 내부적으로 GPT-4를 활용해 문서와 코드를 검토하고 오류 패턴을 찾아냈다. [TechCircle 기사 보기](https://www.techcircle.in/2023/03/16/11-companies-using-gpt-4-in-consumer-products)(2023년 3월 16일).
- **정보 제공 사례: 미국 국무부** — 국무부는 2024년 직원 1,000명을 대상으로 내부 생성형 AI 챗봇을 도입해 정책 문서 요약과 번역에 활용했다. [FedScoop 기사 보기](https://fedscoop.com/state-department-encouraging-workers-to-use-chatgpt).
- **모니터링 사례: Culture Amp** — 이 HR 분석 도구는 ChatGPT를 활용해 슬랙 칭찬, 고객 코멘트, 동료 피드백을 성과 요약으로 정리했다. [SHRM 기사 보기](https://www.shrm.org/topics-tools/news/technology/how-hr-is-using-generative-ai-performance-management).
{: .reflist}

</div>
