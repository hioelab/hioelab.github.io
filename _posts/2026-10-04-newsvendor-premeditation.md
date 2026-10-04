---
layout: post
title: "What Newsvendor Experiments Reveal about Individual Differences in Ordering Decisions"
title_ko: "뉴스벤더 실험으로 보는 주문 결정의 개인차와 지원 방식"
date: 2026-10-04
category: blog
excerpt_en: "Wu & Seidmann (2026) · Omega"
excerpt_ko: "Wu & Seidmann (2026) · Omega"
contributor: "Jiyoung Song"
contributor_ko: "송지영"
editor: "Jiyoung Song"
editor_ko: "송지영"
---

<div class="lang-en" markdown="1">

<a class="linkcard" href="https://doi.org/10.1016/j.omega.2026.103618" target="_blank" rel="noopener"><span class="lc-main"><span class="lc-title">Born to optimize? Investigating the impact of personality on decision making under uncertainty: An experimental study on the newsvendor game | Omega</span><span class="lc-desc">Across two newsvendor experiments, this paper shows that individuals higher in premeditation order closer to the optimal quantity, and that this advantage narrows under direct decision support or a brief episodic future thinking prompt.</span><span class="lc-url">🔗 doi.org/10.1016/j.omega.2026.103618</span></span><span class="lc-side">Born to Optimize?</span></a>

> Wu, T., & Seidmann, A. (2026). Born to optimize? Investigating the impact of personality on decision making under uncertainty: An experimental study on the newsvendor game. *Omega, 144*, Article 103618. [https://doi.org/10.1016/j.omega.2026.103618](https://doi.org/10.1016/j.omega.2026.103618)

## ✔️ Introduction and Summary

When deciding how much stock to prepare, a firm faces two outcomes it would rather avoid. Ordering too little forfeits sales, while ordering too much leaves surplus inventory that is costly to dispose of. Which of the two calls for more caution differs from product to product, but the underlying difficulty is the same: actual demand is unknown at the moment the order is placed.

The excess inventory problem that the U.S. retailer Target faced in the second quarter of 2022 illustrates how costly this judgment can become. According to the company's official earnings release, markdowns taken in response to weaker-than-expected sales in some categories, together with the costs of managing excess inventory, put pressure on profitability. Its operating income margin rate fell to 1.2%, from 9.8% in the same quarter a year earlier. Other factors, such as rising freight costs, were also at work, so the decline cannot be attributed entirely to poor ordering decisions; nonetheless, it makes clear the burden a firm must absorb when demand and inventory are mismatched.

Would knowing the probability distribution of demand, along with a product's price and costs, be enough to avoid such problems? Newsvendor experiments indicate that the answer is not a simple yes. Even when given the necessary information, people do not simply choose the order quantity that maximizes profit, and the extent to which their choices deviate from the optimal level also varies across individuals.

Wu and Seidmann (2026) link these individual differences to premeditation, the tendency to think about the consequences of an action before engaging in it. The paper examines whether individuals higher in premeditation make better ordering decisions, and whether this difference changes when decision support information is provided or when decision makers are prompted to imagine the outcomes of their orders in advance. What the experiments show is that the same information does not produce the same choices, and that understanding these differences requires considering both the traits of the decision maker and the form of decision support.

## ✔️ Research Content and Logic

### The Basic Newsvendor Model and the Optimal Order Quantity

The newsvendor problem concerns choosing an order quantity for a single selling period before demand is realized. A shop that bakes cupcakes in advance for sale that day offers an intuitive example. The shop must decide how many to prepare without knowing how many customers will buy, and if it cannot reorder during the day, the quantity set at the outset becomes the upper limit on that day's sales.

To express this decision as a model, let <span class="mvar">Q</span> denote the order quantity and <span class="mvar">D</span> the realized demand. Actual sales equal the smaller of the quantity prepared and the quantity customers want, which can be written as <span class="mvar"><span style="font-family:&quot;KaTeX_Main&quot;,Georgia,serif;font-style:normal">min</span>(Q, D)</span>. Letting <span class="mvar">p</span> denote the selling price, <span class="mvar">c</span> the unit purchase cost, and <span class="mvar">s</span> the salvage value of each unsold unit, the profit at the end of the selling period is:

<div class="formula">\[\pi(Q, D) = p\min(Q, D) + s\left[Q - \min(Q, D)\right] - cQ\]</div>

The first term is the revenue from units sold, the second is the amount recovered when leftover units are disposed of, and the last is the purchase cost paid when the order was placed. If all leftover cupcakes must be discarded, then <span class="mvar">s</span> = 0; if part of their value can be recovered, for example through discounted sales, that amount corresponds to <span class="mvar">s</span>.

The difficulty is that <span class="mvar">D</span> is not yet known when the order is placed. Rather than trying to match demand on any particular day, the shop should therefore look for the quantity that yields the greatest profit on average across the possible demand outcomes. This average anticipated profit is called expected profit. In the basic model, the order quantity <span class="mvar">Q<sup>*</sup></span> that maximizes expected profit is determined by the following condition:

<div class="formula">\[F(Q^*) = \frac{p - c}{p - s} = \frac{p - c}{(p - c) + (c - s)}\]</div>

Here, <span class="mvar">F(Q<sup>*</sup>)</span> is the probability that demand does not exceed the optimal order quantity. The right-hand side shows what determines this probability. The term <span class="mvar">p − c</span> is the profit forgone when one more unit could have been sold but was not stocked (the underage cost), and <span class="mvar">c − s</span> is the loss incurred when one more unit was stocked but went unsold (the overage cost). In other words, the optimal order quantity is set by weighing the cost of ordering too little against the cost of ordering too much. This ratio of costs is called the critical ratio (also known as the critical fractile).

### Pull-to-Center Bias

Even when people understand these cost differences, however, they do not simply choose the optimal order quantity. In the experiments of Schweitzer and Cachon (2000), participants tended to order below the optimal level for high-margin products and above it for low-margin products. This tendency for orders to be drawn away from the optimal quantity toward mean demand is known as the pull-to-center bias.

One explanation is anchoring and insufficient adjustment, a judgment pattern in which a salient value serves as the starting point but is not adjusted as far as necessary. If mean demand is 150 units, decision makers first take that quantity as a reference point and then raise or lower their orders according to the margin, but not far enough to reach the optimal level.

Another explanation is a preference for minimizing the gap between the order quantity and realized demand, known as ex-post inventory error. Focusing on reducing leftover units or missed demand can lead to decisions that differ from the choice that maximizes expected profit by reflecting the difference between underage and overage costs. In Schweitzer and Cachon's (2000) experiments, repeated outcome feedback and participants' prior education alone did not sufficiently eliminate this ordering bias.

<div class="diagram-box" markdown="1">

![Mean demand, optimal orders, and pull-to-center bias](/assets/img/newsvendor-premeditation-fig1-pull-to-center-en.png)

*Figure 1. Mean demand, optimal orders, and pull-to-center bias. Even with the same mean demand, the optimal order quantity changes with the underage and overage costs. The arrows indicate the direction of the bias, which pulls orders away from the optimal level toward mean demand. The parameters follow Study 2: a selling price of $12, a salvage value of $0, and normally distributed demand with a mean of 150 units and a standard deviation of 50 units.*
{: .caption}

</div>

### Premeditation and Decision Support

The paper goes a step further and asks why some people move sufficiently away from mean demand while others remain close to it. The authors propose that the extent of adjustment is related to how thoroughly a decision maker considers the consequences of ordering too little and too much. The reasoning is that individuals higher in premeditation compare these two outcomes more carefully and are therefore more likely to adjust their orders in line with the cost structure.

The role of this trait may also depend on how information is presented. Under indirect decision support, which supplies inputs for judgment such as the stockout probability at each order quantity, users must integrate several cues to arrive at an order quantity on their own; under direct decision support, which presents the optimal order quantity itself, the system performs part of that process for them. The authors expected the advantage of premeditation to be more pronounced under indirect support and to weaken under direct support.

The second study examines an approach that, instead of adding information, briefly changes how decision makers think. Participants are prompted to vividly imagine what would happen at the end of the selling period if they ordered too much or too little. Such episodic future thinking (EFT), the capacity to project oneself forward in time and vividly simulate events that might occur in one's personal future, is an approach that aims not to change personality but to prompt consideration of a choice's consequences at the moment of decision.

## ✔️ Data and Methodology

Both studies were conducted as web-based newsvendor games. Participants were given the product's price and costs and the probability distribution of demand, chose an order quantity in each round, and then observed realized demand and their profit. Study 1 was designed to examine differences across forms of information provision, and Study 2 to examine differences arising from a task that prompts future thinking.

### Study 1: Information Phases

Study 1 included 89 participants: 48 in the high-margin condition and 41 in the low-margin condition. Demand followed a lognormal distribution (an asymmetric distribution in which high demand occurs only rarely) with a mean of 150 units. The optimal order quantity was approximately 186 units in the high-margin condition and approximately 90 units in the low-margin condition. Participants placed orders over 75 rounds and received new information every 25 rounds. At first, they received only basic performance information after each round. In the next phase, they were additionally given a service-level chart showing the service level and stockout probability at each order quantity, along with the optimal service level. Here, the service level is the probability that demand does not exceed the order quantity, so that a stockout is avoided. This information helps participants judge which quantity to choose but does not tell them the order quantity itself. In the final phase, direct decision support was provided by adding the optimal order quantity and the range of expected profits to this information.

### Study 2: Episodic Future Thinking Task

Study 2 recruited 135 undergraduate and graduate students at a public university in China; after five participants with missing data were excluded, 130 were included in the analysis. Participants took the role of a cupcake shop manager, and demand followed a normal distribution (a distribution symmetric around the mean) with a mean of 150 units and a standard deviation of 50 units. The price and cost parameters were the same as those illustrated for the basic model above. The experiment comprised four groups formed by crossing margin (high vs. low) with task (EFT vs. control). Participants in the EFT condition were instructed to imagine how ordering too much or too little would affect the situation at the end of the selling period and their final earnings. Participants in the control condition received a neutral instruction to enter the order quantity they considered appropriate based on the given price, cost, and demand information.

### Personality Measurement and Statistical Analysis

Personality traits were measured with the UPPS-P Impulsive Behavior Scale, which assesses multiple facets of impulsivity, and its short form (SUPPS-P). Premeditation scores were coded so that higher scores indicate greater consideration of the consequences of one's actions. In Study 1, participants were divided into high- and low-premeditation groups using a median split, and the authors verified that the results held when the original scores were used. The analyses relied on mixed-effects regression, a statistical model that accounts for both repeated choices by the same individual and differences across individuals. This approach avoids treating dozens of orders as though they were choices made by independent individuals, allowing individual order levels and changes across rounds to be examined together. The main outcome was measured as the deviation from the optimal order quantity, and risk-taking propensity and demographic characteristics were also included in the analyses.

## ✔️ Findings

### Premeditation and Order Bias

Both studies confirmed a tendency to order below the optimal level under high margins and above it under low margins, and the pull-to-center bias appeared under both asymmetric and symmetric demand. In Study 1, participants' average profits were approximately 9.9% lower in the high-margin condition and approximately 38.3% lower in the low-margin condition than the benchmark profit under the optimal ordering strategy reported in the paper. This shows that ordering bias in the same direction can translate into substantially different economic costs depending on the cost conditions.

Differences associated with premeditation were also confirmed. Compared with the low-premeditation group, the high-premeditation group ordered approximately 22.7 more units under high margins and approximately 13.7 fewer units under low margins. In other words, these participants did not simply raise or lower their orders across the board, but chose quantities that moved closer to the optimal level under each cost structure. In the control condition of Study 2, which provided no additional decision support, higher premeditation was likewise associated with smaller order bias.

### Study 1: Forms of Information Provision and Order Bias

In Study 1, the estimated magnitude of the premeditation effect was largest in the indirect support phase. In the final phase, in which the optimal order quantity was presented directly, the estimate became smaller and was not statistically significant. The authors interpret this in terms of differences in the deliberation required to translate information into a choice. When given service levels and stockout probabilities, users must connect the pieces of information and weigh the cost asymmetry themselves, so individuals higher in premeditation may have an advantage in this process. Once the optimal order quantity is presented, there is less for decision makers to derive on their own, and the differences associated with this trait may diminish accordingly.

### Study 2: The EFT Task and Order Bias

In the control condition of Study 2, higher premeditation was associated with smaller order bias under both high and low margins. In the EFT condition, the relationship was not statistically significant under low margins but remained significant under high margins. The paper interprets this pattern as the EFT task attenuating the premeditation advantage more strongly under low margins while only partially narrowing it under high margins. The EFT task provided neither the correct answer nor any new demand information; it merely prompted participants to anticipate the situations that could arise after placing an order. These results therefore suggest that, beyond providing information, prompting decision makers to reconsider costs and consequences they already know at the moment of choice may also be helpful.

<div class="diagram-box" markdown="1">

![Premeditation and order bias across support conditions](/assets/img/newsvendor-premeditation-fig2-support-conditions-en.png)

*Figure 2. Premeditation and order bias across support conditions. The association was not statistically significant in the direct support phase or in the low-margin EFT condition. This does not mean that individual differences disappeared entirely.*
{: .caption}

</div>

## ✔️ Conclusion

Wu and Seidmann (2026) examined ordering bias in the newsvendor problem by linking it to individual premeditation and to the form of decision support. Participants deviated from the optimal order quantity despite knowing the relevant demand and cost information, and the higher their premeditation, the smaller this bias. The association varied with how information was provided and with whether participants were asked to imagine future outcomes. This indicates that understanding ordering decisions requires considering not only the cost structure but also the characteristics of the people who interpret information and make choices.

These results also carry implications for the design of decision support. Presenting costs and probabilities alone may not be enough for users to translate that information into an appropriate order quantity. Presenting the optimal order quantity alongside this information, or helping decision makers review the consequences of ordering too much or too little in advance, shows promise for supporting this judgment process. Because the results differed across cost structures and support conditions, however, whether the same effects emerge in real work settings remains to be confirmed.

Building on the optimal order quantity prescribed by the basic newsvendor model and the pull-to-center bias documented in prior experiments, this paper examined why choices differ across individuals and what forms of support can address those differences. In doing so, it lays a foundation for considering together the problem of computing the optimal value and the process by which people put that value to use. Its contribution lies in showing that decision support that takes users' thought processes into account may lead to better ordering decisions.

## 🖇️ References

- Schweitzer, M. E., & Cachon, G. P. (2000). Decision bias in the newsvendor problem with a known demand distribution: Experimental evidence. *Management Science, 46*(3), 404–420. [https://doi.org/10.1287/mnsc.46.3.404.12070](https://doi.org/10.1287/mnsc.46.3.404.12070) — consulted in the Research Content and Logic section to introduce the pull-to-center bias and the prior experiments that explain it.
- Qin, Y., Wang, R., Vakharia, A. J., Chen, Y., & Seref, M. M. H. (2011). The newsvendor problem: Review and directions for future research. *European Journal of Operational Research, 213*(2), 361–374. [https://doi.org/10.1016/j.ejor.2010.11.024](https://doi.org/10.1016/j.ejor.2010.11.024) — consulted for the basic newsvendor model in the Research Content and Logic section and for the research background in the Conclusion.
- Target Corporation. (2022, August 17). *Target Corporation reports second quarter earnings* [Press release]. [Official earnings release](https://corporate.target.com/press/release/2022/08/target-corporation-reports-second-quarter-earnings) — source for the example illustrating the economic burden of excess inventory and for the operating income margin figures in the Introduction and Summary.
{: .reflist}

</div>

<div class="block lang-ko" markdown="1">

<a class="linkcard" href="https://doi.org/10.1016/j.omega.2026.103618" target="_blank" rel="noopener"><span class="lc-main"><span class="lc-title">Born to optimize? Investigating the impact of personality on decision making under uncertainty: An experimental study on the newsvendor game | Omega</span><span class="lc-desc">Across two newsvendor experiments, this paper shows that individuals higher in premeditation order closer to the optimal quantity, and that this advantage narrows under direct decision support or a brief episodic future thinking prompt.</span><span class="lc-url">🔗 doi.org/10.1016/j.omega.2026.103618</span></span><span class="lc-side">Born to Optimize?</span></a>

> Wu, T., & Seidmann, A. (2026). Born to optimize? Investigating the impact of personality on decision making under uncertainty: An experimental study on the newsvendor game. *Omega, 144*, Article 103618. [https://doi.org/10.1016/j.omega.2026.103618](https://doi.org/10.1016/j.omega.2026.103618)

## ✔️ 소개 및 요약

상품을 얼마나 준비할지 결정할 때 기업이 피해야 할 결과는 크게 두 가지다. 너무 적게 준비하면 판매 기회를 놓치고, 너무 많이 준비하면 남은 재고를 처리하는 데 비용이 든다. 어느 쪽을 더 경계해야 하는지는 상품마다 다르지만 주문하는 시점에는 실제 수요를 알 수 없다는 어려움이 존재한다.

미국 유통기업 Target이 2022년 2분기에 겪은 과잉재고 문제는 이 판단이 얼마나 큰 비용으로 이어질 수 있는지 보여준다. 회사의 공식 실적 발표에 따르면 예상보다 저조한 일부 상품군의 판매에 대응하기 위한 가격 인하와 과잉재고 관리 비용 등이 수익성을 압박했다. 당시 영업이익률은 전년 동기 9.8%에서 1.2%로 낮아졌다. 물류비 상승 등 다른 요인이 함께 작용했으므로 이를 모두 주문 판단의 실패로 돌릴 수는 없지만 수요와 재고가 어긋났을 때 기업이 감수해야 하는 부담을 분명히 보여준다.

그렇다면 수요의 확률분포와 상품의 가격 및 비용을 알고 있다면 이런 문제를 피할 수 있을까. 뉴스벤더 실험은 이 질문에 단순히 그렇다고 답하기 어렵다는 사실을 보여준다. 필요한 정보가 주어져도 사람들은 이익을 가장 크게 만드는 주문량을 그대로 선택하지 않으며, 그 선택이 최적 수준에서 벗어나는 정도 역시 사람마다 다르다.

Wu & Seidmann(2026)는 이러한 개인차를 사전 숙고 성향(premeditation, 행동하기 전에 그 결과를 생각하는 성향)과 연결한다. 논문은 사전 숙고 성향이 높은 사람이 더 나은 주문 결정을 하는지, 그리고 정보를 제공하거나 주문 결과를 미리 상상하도록 했을 때 그 차이가 달라지는지를 검토한다. 실험에서 확인된 것은 같은 정보가 주어져도 선택은 같지 않고 그 차이를 이해하려면 사람의 성향과 의사결정 지원 방식을 함께 살펴봐야 한다는 점이다.

## ✔️ 연구 내용 및 논리

### 뉴스벤더 기본모형과 최적 주문량

뉴스벤더 문제(newsvendor problem)는 수요가 확정되기 전에 한 판매 기간의 주문량을 결정하는 문제다. 당일 판매할 컵케이크를 미리 준비하는 매장을 생각하면 이해하기 쉽다. 매장은 고객이 몇 개를 구매할지 알 수 없는 상태에서 준비 수량을 정해야 한다. 판매 도중에 추가 주문을 할 수 없다면 처음에 정한 수량이 그날 판매의 상한이 된다.

이 판단을 모형으로 나타내기 위해 주문량을 <span class="mvar">Q</span>, 실제 수요를 <span class="mvar">D</span>라고 하자. 준비한 수량과 고객이 원하는 수량 가운데 작은 쪽이 실제 판매량이므로 이를 <span class="mvar"><span style="font-family:&quot;KaTeX_Main&quot;,Georgia,serif;font-style:normal">min</span>(Q, D)</span>로 표시할 수 있다. 판매가를 <span class="mvar">p</span>, 개당 구매 비용을 <span class="mvar">c</span>, 팔리지 않은 상품 한 개의 잔존가치를 <span class="mvar">s</span>라고 하면 판매 종료 후의 이익은 다음과 같다.

<div class="formula">\[\pi(Q, D) = p\min(Q, D) + s\left[Q - \min(Q, D)\right] - cQ\]</div>

첫째 항은 판매한 상품에서 얻은 매출이고, 둘째 항은 남은 상품을 처리하면서 회수한 금액이며, 마지막 항은 처음 주문할 때 지불한 구매 비용이다. 남은 컵케이크를 전부 폐기해야 한다면 <span class="mvar">s</span> = 0이 되고, 할인 판매 등을 통해 일부 금액을 회수할 수 있다면 그 금액이 <span class="mvar">s</span>에 해당한다.

문제는 주문할 때 아직 <span class="mvar">D</span>를 모른다는 데 있다. 따라서 매장은 특정한 하루의 수요를 정확히 맞히기보다 가능한 수요들을 고려했을 때 평균적으로 가장 큰 이익을 얻는 주문량을 찾아야 한다. 이러한 평균적인 예상 이익을 기대이익(expected profit)이라 부른다. 기본모형에서 기대이익을 최대화하는 주문량 <span class="mvar">Q<sup>*</sup></span>는 다음 조건으로 정해진다.

<div class="formula">\[F(Q^*) = \frac{p - c}{p - s} = \frac{p - c}{(p - c) + (c - s)}\]</div>

여기서 <span class="mvar">F(Q<sup>*</sup>)</span>는 수요가 최적 주문량 이하일 확률이다. 식의 오른쪽을 보면 이 확률이 무엇에 의해 결정되는지 알 수 있다. <span class="mvar">p − c</span>는 상품 한 개를 더 팔 수 있었는데 준비하지 못했을 때 놓치는 이익이고, <span class="mvar">c − s</span>는 한 개를 더 준비했지만 팔지 못했을 때의 손실이다. 즉 최적 주문량은 부족하게 준비했을 때의 비용과 과도하게 준비했을 때의 비용을 함께 고려해 정해진다. 이 비용의 비율을 임계비율(critical ratio)이라 부른다.

### 평균 쏠림 편향 (pull-to-center bias)

그러나 사람들은 이러한 비용 차이를 알고 있어도 최적 주문량을 그대로 선택하지 않는다. Schweitzer & Cachon(2000)의 실험에서는 고마진 상품을 최적 수준보다 적게, 저마진 상품을 최적 수준보다 많이 주문하는 경향이 나타났다. 최적 주문량에서 평균 수요 쪽으로 치우치는 이러한 선택을 평균 쏠림 편향(pull-to-center bias)이라 부른다.

이를 설명하는 방식 중 하나는 앵커링과 불충분한 조정(anchoring and insufficient adjustment)이다. 눈에 띄는 값을 출발점으로 삼은 뒤 필요한 만큼 수정하지 못하는 판단 방식이다. 평균 수요가 150개라면 우선 그 수량을 기준으로 생각하고 마진에 따라 주문량을 늘리거나 줄이기는 하지만 최적 수준에 도달할 만큼 충분히 조정하지 않는 것이다.

또 다른 설명은 주문량과 실제 수요 사이의 차이, 즉 사후 재고 오차(ex-post inventory error)를 줄이려는 선호다. 남은 상품이나 놓친 수요를 줄이는 데 집중하면 부족과 과잉의 비용 차이를 반영해 기대이익을 최대화하는 선택과 다른 결정을 할 수 있다. Schweitzer & Cachon(2000)의 실험에서는 반복적인 결과 피드백과 기존 교육 경험만으로 이러한 주문 편향이 충분히 해소되지 않았다.

<div class="diagram-box" markdown="1">

![평균 수요와 최적 주문량, 그리고 평균 쏠림 편향](/assets/img/newsvendor-premeditation-fig1-pull-to-center-ko.png)

*그림 1. 평균 수요와 최적 주문량, 그리고 평균 쏠림 편향. 평균 수요가 같아도 주문 부족과 과잉의 비용에 따라 최적 주문량은 달라진다. 화살표는 최적 수준에서 평균 수요 쪽으로 치우치는 편향의 방향을 나타낸다. 실험 2의 조건은 판매가 12달러, 잔존가치 0달러이며, 수요는 평균 150개와 표준편차 50개의 정규분포를 따른다.*
{: .caption}

</div>

### 사전 숙고 성향과 의사결정 지원

논문은 여기서 더 나아가 어떤 사람은 평균 수요에서 충분히 벗어나고 또 어떤 사람은 그 근처에 머무는 이유를 밝히고자 한다. 저자들은 주문 부족과 과잉의 결과를 얼마나 충분히 검토하는지가 조정의 폭과 관련될 것으로 본다. 사전 숙고 성향이 높은 사람은 두 결과를 더 신중하게 비교하므로 비용 구조에 맞춰 주문량을 조정할 가능성이 크다는 논리다.

이 성향의 역할은 정보 제공 방식에 따라서도 달라질 수 있다. 주문량별 품절 확률처럼 판단의 재료를 제공하는 간접 지원에서는 사용자가 여러 정보를 연결해 주문량을 도출해야 하는 반면, 최적 주문량 자체를 알려주는 직접 지원에서는 그 과정의 일부를 시스템이 대신한다. 저자들은 간접 지원에서 사전 숙고 성향의 이점이 더 두드러지고, 직접 지원에서는 그 이점이 약해질 것으로 예상한다.

두 번째 실험은 정보를 추가하는 대신 생각하는 방식을 잠시 바꾸는 방법을 검토한다. 주문을 너무 많이 하거나 너무 적게 했을 때 판매 종료 후에 어떤 상황이 생길지 구체적으로 떠올리도록 하는 것이다. 이러한 일화적 미래 사고(episodic future thinking, 자신에게 일어날 수 있는 미래 상황을 구체적으로 상상하는 사고)는 성격을 바꾸기보다 선택의 결과를 고려하는 사고를 그 순간에 촉진하려는 접근이다.

## ✔️ 데이터 및 방법론

두 실험은 웹 기반 뉴스벤더 게임으로 진행되었다. 참가자들은 상품의 가격과 비용, 수요의 확률분포를 제공받고 매 회차 주문량을 선택한 뒤 실제 수요와 이익을 확인했다. 첫 번째 실험은 정보 제공 방식에 따른 차이를, 두 번째 실험은 미래 사고를 촉진하는 과제에 따른 차이를 살펴보도록 구성됐다.

### 실험 1: 정보 제공 단계

참가자는 89명으로, 고마진 조건에 48명, 저마진 조건에 41명이 참여했다. 수요는 로그정규분포(높은 수요가 드물게 발생하는 비대칭 분포)를 따랐으며 평균은 150개였다. 최적 주문량은 고마진에서 약 186개, 저마진에서 약 90개였다. 참가자들은 총 75회 주문했고, 25회마다 새로운 정보를 제공받았다. 처음에는 각 회차의 기본적인 성과 정보를 받았다. 다음 단계에서는 주문량별 서비스 수준과 품절 확률, 최적 서비스 수준을 추가로 제공받았다. 여기서 서비스 수준(service level)은 수요가 주문량을 넘지 않아 품절을 피할 확률이다. 이 정보는 어느 수량을 선택해야 하는지 판단하는 데 도움을 주지만 주문량 자체를 알려주지는 않는다. 마지막 단계에서는 이러한 정보에 최적 주문량과 기대이익 범위를 더해 직접 지원을 제공했다.

### 실험 2: 미래 사고 과제

중국의 한 공립대학 학부생과 대학원생 135명이 참여했고, 자료가 누락된 5명을 제외한 130명이 분석에 포함됐다. 참가자들은 컵케이크 매장의 관리자 역할을 맡았으며, 수요는 평균 150개, 표준편차 50개의 정규분포(평균을 중심으로 대칭인 분포)를 따랐다. 가격과 비용 조건은 앞서 기본모형에서 살펴본 것과 같다. 실험은 고마진과 저마진, 미래 사고 과제와 비교 과제를 조합한 네 집단으로 구성됐다. 미래 사고 과제 집단은 주문 과잉과 부족이 판매 종료 후의 상황과 최종 수익에 어떤 영향을 줄지 상상하도록 안내받았다. 비교 집단은 주어진 가격과 비용, 수요 정보를 바탕으로 적절한 주문량을 선택하라는 중립적인 안내를 받았다.

### 성격 측정과 통계 분석

성격 특성은 충동성의 여러 측면을 조사하는 UPPS-P 척도와 그 단축형으로 측정했다. 사전 숙고 성향의 점수는 높을수록 행동의 결과를 더 많이 고려하는 방향으로 정리했다. 첫 번째 실험에서는 점수를 기준으로 높은 집단과 낮은 집단을 나누어 비교하고 원래 점수를 그대로 사용한 분석에서도 결과가 유지되는지 확인했다. 분석에는 혼합효과 회귀모형(mixed-effects regression, 같은 사람의 반복 선택과 사람 간 차이를 함께 고려하는 통계모형)을 사용했다. 이를 통해 수십 회의 주문을 서로 독립적인 사람들의 선택처럼 취급하지 않고 개인별 주문 수준과 회차에 따른 변화를 함께 살펴보았다. 주요 결과는 최적 주문량에서 벗어난 정도로 평가했으며, 위험 감수 성향과 인구통계적 특성 등도 분석에 반영했다.

## ✔️ 연구 결과

### 사전 숙고 성향과 주문 편향

두 실험 모두 고마진에서는 최적 수준보다 적게, 저마진에서는 최적 수준보다 많이 주문하는 경향을 확인했다. 평균 쏠림 편향은 비대칭적인 수요와 대칭적인 수요 조건에서 모두 나타났다. 첫 번째 실험에서 참가자들이 얻은 평균 이익은 논문이 제시한 최적 주문 전략의 비교 이익보다 고마진에서 약 9.9%, 저마진에서 약 38.3% 낮았다. 이는 같은 방향의 주문 편향이 비용 조건에 따라 상당히 다른 경제적 부담으로 이어질 수 있음을 보여준다.

사전 숙고 성향에 따른 차이도 확인되었다. 이 성향이 높은 집단은 낮은 집단보다 고마진에서 약 22.7개 더 주문했고, 저마진에서는 약 13.7개 덜 주문했다. 주문을 무조건 늘리거나 줄인 것이 아니라 각각의 비용 구조에서 최적 수준에 가까워지는 방향으로 선택했다는 뜻이다. 추가적인 의사결정 지원을 제공하지 않은 두 번째 실험의 비교 집단에서도 사전 숙고 성향이 높을수록 주문 편향이 작았다.

### 실험 1: 정보 제공 방식과 주문 편향

첫 번째 실험에서 사전 숙고 성향에 따른 차이의 추정 규모는 간접 지원 단계에서 가장 컸다. 최적 주문량을 직접 제시한 마지막 단계에서는 그 규모가 작아졌고 통계적으로 유의하지 않았다. 저자들은 이를 정보를 선택으로 옮기는 데 필요한 사고의 차이로 해석한다. 서비스 수준과 품절 확률을 제공받았을 때는 사용자가 정보를 연결하고 비용 차이를 검토해야 한다. 즉, 사전 숙고 성향이 높은 사람이 이 과정에서 더 유리할 수 있다는 것이다. 최적 주문량까지 제시되면 스스로 도출해야 할 내용이 줄어들므로 성향에 따른 차이도 약해질 수 있다.

### 실험 2: 미래 사고 과제와 주문 편향

두 번째 실험의 비교 집단에서는 고마진과 저마진 모두 사전 숙고 성향이 높을수록 주문 편향이 작았다. 미래 사고 과제 집단에서는 저마진의 관계가 통계적으로 유의하지 않았고, 고마진에서는 그 관계가 여전히 유의했다. 논문은 이 결과를 미래 사고 과제가 사전 숙고 성향에 따른 차이를 저마진에서 더 크게 약화시키고, 고마진에서는 일부만 줄이는 양상으로 해석한다. 미래 사고 과제가 제공한 것은 정답이나 새로운 수요 정보가 아니다. 주문 후에 생길 상황을 미리 떠올리게 했을 뿐이며, 따라서 이 결과는 정보 제공 외에도 이미 알고 있는 비용과 결과를 선택 시점에 다시 고려하도록 하는 방법이 도움이 될 가능성을 보여준다.

<div class="diagram-box" markdown="1">

![지원 조건에 따른 사전 숙고 성향과 주문 편향의 관계](/assets/img/newsvendor-premeditation-fig2-support-conditions-ko.png)

*그림 2. 지원 조건에 따른 사전 숙고 성향과 주문 편향의 관계. 직접 지원 단계와 저마진의 미래 사고 과제에서 해당 연관성이 통계적으로 유의하지 않았다. 이는 개인차가 완전히 사라졌다는 뜻은 아니다.*
{: .caption}

</div>

## ✔️ 결론

Wu & Seidmann(2026)의 연구는 뉴스벤더 문제의 주문 편향을 개인의 사전 숙고 성향과 의사결정 지원 방식에 연결해 살펴보았다. 참가자들은 수요와 비용에 관한 정보를 알고도 최적 주문량에서 벗어났으며, 사전 숙고 성향이 높을수록 그 편향이 작았다. 이러한 연관성은 정보를 제공하는 방식과 미래 결과를 상상하도록 하는 과제에 따라 다르게 나타났다. 이는 주문 결정을 이해할 때 비용 구조뿐 아니라 정보를 해석하고 선택하는 사람의 특성도 함께 고려해야 함을 보여준다.

이 결과는 의사결정 지원을 설계하는 데에도 의미가 있다. 비용과 확률을 제시하는 것만으로는 사용자가 그 정보를 적절한 주문량으로 연결하기 어려울 수 있다. 최적 주문량을 함께 제시하거나 주문 과잉과 부족의 결과를 미리 검토하도록 돕는 방식은 이러한 판단 과정을 지원할 가능성을 보여준다. 다만 결과가 비용 구조와 지원 조건에 따라 달랐으므로 실제 업무 환경에서도 같은 효과가 나타나는지 확인할 필요가 있다.

뉴스벤더 기본모형이 제시하는 최적 주문량과 선행 실험이 밝힌 평균 쏠림 편향을 바탕으로 이 논문은 사람마다 선택이 달라지는 이유와 그 차이에 대응할 수 있는 지원 방식을 검토했다. 이를 통해 최적값을 계산하는 문제와 사람이 그 값을 활용하는 과정을 함께 살펴볼 근거를 마련했으며, 사용자의 사고 과정을 고려하는 의사결정 지원이 더 나은 주문 선택으로 이어질 가능성을 보여주었다는 데 이 연구의 의의가 있다.

## 🖇️ 참고 자료

- Schweitzer, M. E., & Cachon, G. P. (2000). Decision bias in the newsvendor problem with a known demand distribution: Experimental evidence. *Management Science, 46*(3), 404–420. [https://doi.org/10.1287/mnsc.46.3.404.12070](https://doi.org/10.1287/mnsc.46.3.404.12070) — 「연구 내용 및 논리」에서 평균 쏠림 편향과 이를 설명하는 선행 실험을 소개하는 데 참고했다.
- Qin, Y., Wang, R., Vakharia, A. J., Chen, Y., & Seref, M. M. H. (2011). The newsvendor problem: Review and directions for future research. *European Journal of Operational Research, 213*(2), 361–374. [https://doi.org/10.1016/j.ejor.2010.11.024](https://doi.org/10.1016/j.ejor.2010.11.024) — 「연구 내용 및 논리」의 뉴스벤더 기본모형과 「결론」의 연구 배경을 정리하는 데 참고했다.
- Target Corporation. (2022, August 17). *Target Corporation reports second quarter earnings* [Press release]. [공식 실적 발표](https://corporate.target.com/press/release/2022/08/target-corporation-reports-second-quarter-earnings) — 「소개 및 요약」에서 과잉재고의 경제적 부담을 보여주는 사례와 영업이익률 수치의 출처로 활용했다.
{: .reflist}

</div>
