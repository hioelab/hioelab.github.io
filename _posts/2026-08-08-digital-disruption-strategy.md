---
layout: post
title: "When Does a Digital Disruption Strategy Actually Pay Off?"
title_ko: "디지털 디스럽션 전략은 언제 통할까?"
date: 2026-08-08
category: blog
excerpt_en: "Sting et al. (2024) · MIS Quarterly"
excerpt_ko: "Sting et al. (2024) · MIS Quarterly"
contributor: "Hyunyul Moon"
contributor_ko: "문현율"
editor: "Jiyoung Song"
editor_ko: "송지영"
---

<div class="lang-en" markdown="1">

<a class="linkcard" href="https://misq.umn.edu/misq/article/48/3/1263/2297/Performance-Implications-of-Digital-Disruption-in" target="_blank" rel="noopener"><span class="lc-main"><span class="lc-title">Performance Implications of Digital Disruption in Strategic Competition | MIS Quarterly</span><span class="lc-desc">This paper uses an NK-model simulation to show that a digital disruption strategy can help a firm outperform its rival while quietly eroding the firm's own absolute performance.</span><span class="lc-url">🔗 misq.umn.edu</span></span><span class="lc-side">Performance Implications of Digital Disruption</span></a>

> Sting, Fabian J., Murat Tarakci, and Jan Recker (2024). Performance Implications of Digital Disruption in Strategic Competition. *MIS Quarterly* 48(3):1263–1278.

## ✔️ Introduction and Summary

Hand a firm's resources to a digital disruption strategy, and it can end up further ahead of its rival while its own performance quietly gets worse. That's the finding of a new study on how much a firm should bet on digital technology to win in competition.

Start with the two paths the paper distinguishes. "Digital disruption" means using digital technology to overturn the assumptions an industry has taken for granted. It isn't something that collapses on its own — it's a firm deliberately breaking the existing order. Netflix is the textbook case. Renting a movie used to require a rental store and a video tape. Netflix eliminated both and rebuilt the value chain around streaming and recommendation algorithms. In the process, what counted as "a good movie service" changed — from having a nearby store with a deep catalog, to being available anytime with recommendations that fit. On the other side sits "adaptation" — leaving the existing approach in place and simply layering digital on top, the way a rental store might stay open while bolting on an online reservation feature.

The paper illustrates this with two companies in the Australian retail market. Woolworths is Australia's large supermarket chain; Amazon Australia is the online retailer that entered the country in 2017. Woolworths kept its stores and logistics network as they were and layered online ordering and delivery on top — adaptation. Amazon, unencumbered by physical constraints like stores, rebuilt logistics, recommendations, and delivery from scratch — digital disruption.

Look at the two companies' 2022 net online sales. Woolworths brought in $4.05 billion; Amazon Australia, $2.6 billion. By where each stands right now, Woolworths is ahead. And Woolworths isn't standing still either — its sales grew 29.1% over the year before, doing well by its own past standard. But Amazon's growth rate came in 23.8 percentage points higher than Woolworths'. The gap between them is closing. So who's actually winning? The answer depends on what you're looking at. The authors call the first "absolute performance" — how high I've climbed — and the second "relative performance" — the height difference between me and my rival.

## ✔️ Research Content and Logic

<div class="diagram-box" markdown="1">

![Same two companies, different winner depending on what you look at](/assets/img/digital-disruption-fig1-performance-en.png)

*Figure 1. Who's winning? 2022 net online sales, Australian retail market. By scale, Woolworths leads; by growth rate, Amazon leads.*
{: .caption}

</div>

So which path is better? That's hard to verify with real companies, because the answer to "what if Woolworths had rebuilt its value chain like Amazon" doesn't exist anywhere — a company only gets to live its life once. That's why the authors turn to simulation. This is where the paper's core idea comes from: borrowing a model built to explain evolution in biology and applying it to competition between firms. Imagine a landscape with peaks and valleys, and place a firm on it as something that moves around looking for higher ground. Adaptation then becomes moving one step at a time to a higher spot on the current landscape, and digital disruption becomes redrawing the landscape itself.

The short version of the result: digital disruption helps a firm get ahead of its rival, but it can eat into the firm's own performance at the same time. And there's a zone where, under the exact same circumstances, the right answer flips depending on what you're aiming for.

Digital disruption is treated almost as the obvious right answer in management discussions these days. Netflix isn't alone — similar things happened in music and publishing, and those stories are well known enough that they've shaped the conventional wisdom. But the authors point out that the cases we know are, by definition, the successes. Plenty of attempts to rebuild a value chain digitally have failed, and those don't make the news. Looking only at the successes makes digital disruption look like it always works. What we actually want to know is when it works and when it doesn't — and success stories alone can't answer that.

There's also a gap in the existing research, the authors argue. Studies so far have looked at one firm at a time — either the one that rebuilt its value chain or the one on the receiving end — explaining what capabilities it had and how it used technology. But when one firm reshapes its value chain, it's not just that firm's performance that changes. The strategies available to other firms change too. As the Australian retail market absorbed Amazon's new approach, the standards for customer demand, order fulfillment, and performance itself shifted, and Woolworths had to make its choices again on that shifted footing. So looking at Amazon alone can't tell you whether its choice actually paid off — that's the authors' critique.

This, too, is hard to check with real data, as noted above. So the authors use simulation to move two firms together. The paper asks two questions. First, what's the performance trade-off between digital disruption and adaptation? Second, under what conditions should a firm choose digital disruption, and under what conditions should it not?

## ✔️ Data and Methodology

This paper has no real company data. Instead, it builds a simulated competition inside a computer — a method called simulation.

In industrial engineering, problems are generally solved one of two ways. One is optimization: write the objective and constraints as equations and compute the single best answer under those conditions — "allocate production this way and cost is minimized," a clean, definite answer. But optimization doesn't always work. It struggles when relationships are too tangled to formalize cleanly, when chance plays a large role, or when your best move keeps changing depending on how your rival responds.

That's exactly the situation this paper is in. Decisions are entangled with each other, whether the market accepts a new approach is a probability, and the answer flips depending on what the rival does. This is where simulation comes in — instead of computing an answer, you build a model and actually run it. Give simulated firms a set of rules, let them move for a fixed period, and observe the outcome. A single run is at the mercy of chance, so you run it many times under each condition and average the results.

The character of the answer differs accordingly. Where optimization says "this is the answer," simulation is closer to "under these conditions, this is roughly what tends to happen." What this paper delivers, too, is less a proven fact than a well-reasoned finding.

### The NK model — what it is and why it was brought in

<div class="diagram-box" markdown="1">

![Strategy combinations as a landscape the NK model](/assets/img/digital-disruption-fig2-landscape-en.png)

*Figure 2. An example reducing a firm's strategic choices to 3 decisions to show the combination space as a landscape. Adaptation moves one square over at a time; digital disruption redraws the landscape itself.*
{: .caption}

</div>

The simulation framework the authors use is the NK model, built in 1993 by biologist Stuart Kauffman to explain biological evolution. Kauffman's question was this: an organism's traits are produced jointly by many genes, and when those genes influence one another, why is finding a good combination so hard? To answer it, he introduced the idea of a fitness landscape — placing every possible combination as a point on a map, with that point's height showing how good the combination is. That produces a landscape of peaks and valleys, and the organism becomes something that moves across it a little at a time, searching for higher ground.

The model's name comes from the two numbers that shape this landscape. N is how many decision elements there are; K is how entangled those elements are with each other. The reason this framework also applies to firms is that a firm's strategy has the same structure — a firm, too, makes many decisions at once, those decisions influence each other, and it searches for a better combination by changing them bit by bit. That's why the NK model has long been used in strategy research.

Where this paper departs from convention is in one respect: past research treated the landscape as fixed. A firm moved around on it, but the landscape itself never changed. This study assumes a firm's actions can change the landscape and reproduces that through simulation. Digital disruption is exactly that. Where the earlier description said "the standard for what counts as good performance changes itself," the model translates that into "the landscape gets redrawn."

**Working through the model.** A firm's strategy is broken into N decisions, each either 0 or 1 — a placeholder for things like "keep a store or not," "run in-house logistics or not." A firm's state, then, is a vector d = (d₁, d₂, …, d_N). The paper sets N = 12, giving 2¹² = 4,096 possible combinations — 4,096 points on the landscape.

Write how much each decision contributes to performance as π. A firm's overall performance is the average of these contributions, and that average is the height at that position. Put as one equation:

<div class="formula">\[\Pi(d) = \frac{1}{N}\sum_{m=1}^{N} \pi_m(d_m, d_{-m})\]</div>

In words: a firm's performance <span class="mvar">Π</span> is the average of the contribution <span class="mvar">π<sub>m</sub></span> that each of the N decisions makes. But each contribution <span class="mvar">π<sub>m</sub></span> isn't set by that one decision (<span class="mvar">d<sub>m</sub></span>) alone — it also depends on the other decisions (<span class="mvar">d<sub>−m</sub></span>). A firm's performance isn't a simple sum of individual decisions; it's a value produced by how the decisions are entangled with one another.

What matters here is what's inside <span class="mvar">π<sub>m</sub></span>'s parentheses: the contribution of the m-th decision depends not just on its own value (<span class="mvar">d<sub>m</sub></span>) but on the other decisions (<span class="mvar">d<sub>−m</sub></span>) as well. Whether running in-house logistics is a good call depends on whether the firm also keeps a store. How many other decisions it depends on is K, and the paper sets K = 6. K is what shapes the landscape. If K were 0, the decisions would be independent of each other, and simply improving each one at a time would reach the very top — a single smooth hill. The larger K gets, the more changing one decision shakes up the contribution of the others, producing a jagged landscape of scattered peaks and valleys, where climbing the nearest peak offers no guarantee it's the highest point around.

This is where the two strategies diverge. Adaptation is moving one decision at a time to a higher point on the current landscape. Digital disruption is changing the performance function itself, from Π to Π′. The new performance function keeps the same form — <span class="mvar">Π(d) = (1/N)Σπ<sub>m</sub>(d<sub>m</sub>, d<sub>−m</sub>)</span> — but every contribution value <span class="mvar">π′<sub>m</sub></span> inside it gets reset. Every peak and valley moves to a new location.

Strategy is expressed as a ratio. How much of its resources a firm commits to digital disruption is written as <span class="mvar">α</span>. α = 0 is pure adaptation; α = 1 is pure digital disruption. Treating it as an allocation problem rather than an either/or choice is a deliberate move by this paper.

Whether the new landscape actually takes hold is up to the market. Reshaping a value chain doesn't mean the world immediately follows along. The probability the market accepts it is written as <span class="mvar">ρ</span>, and the paper examines both a low case (0.1) and a high case (0.9) — a stand-in for things like regulation or how digitally ready an industry is.

The model places two firms, because each firm's best move depends on what its rival does. Still, what's measured is always one firm's own performance — not the two firms' combined output or industry-wide welfare.

Performance is measured two ways. Absolute performance is the height a firm has reached by the final period; relative performance is the height difference between the firm and its rival. As an equation:

<div class="formula">\[\Delta\Pi_i = \Pi_i(d_i^T) - \Pi_j(d_j^T)\]</div>

Absolute performance is the height firm <span class="mvar">i</span> has reached at the final period <span class="mvar">T</span> — that is, <span class="mvar">Π<sub>i</sub>(d<sub>i</sub><sup>T</sup>)</span> itself. Relative performance <span class="mvar">ΔΠ<sub>i</sub></span> subtracts the rival's height <span class="mvar">Π<sub>j</sub>(d<sub>j</sub><sup>T</sup>)</span> from that. A relative performance above 0 means the firm is ahead; below 0 means it's behind.

The two firms move simultaneously over 50 periods, and each condition is repeated 1,000 times and averaged. The variables, gathered in one place:

| Symbol | Meaning | Value |
|---|---|---|
| <span class="mvar">N</span> | Number of strategic decisions a firm makes | 12 |
| <span class="mvar">K</span> | How many other decisions each one is entangled with (how jagged the landscape is) | 6 |
| <span class="mvar">d</span> | The firm's current position (its combination of decisions) | 0/1 vector |
| <span class="mvar">π</span> | How much a single decision contributes to performance | assigned at random |
| <span class="mvar">Π</span> | The firm's performance = average of the <span class="mvar">π</span>'s = height on the landscape | computed |
| <span class="mvar">Π′</span> | Performance on the landscape redrawn by digital disruption | computed |
| <span class="mvar">α</span> | Share of resources committed to digital disruption | 0–1 |
| <span class="mvar">ρ</span> | Probability the market accepts the new landscape | 0.1 or 0.9 |
| <span class="mvar">T</span> | Simulation horizon | 50 |

## ✔️ Findings

**First question: what's the trade-off in absolute performance?**

When the market resists the new approach (ρ = 0.1) and the rival is also staying with adaptation, maximizing a firm's own performance means committing only a little to digital disruption (α ≈ 0.2). The curve is an inverted parabola — a little helps, a lot hurts. The authors treat this small bet as a kind of option: keeping the possibility of changing the game open, but only executing it when it's genuinely favorable. Going all-in, by contrast, carries a large opportunity cost — if the firm can't find a better spot on the new landscape, it has to come back to where it started, having given up whatever it could have gained by climbing the original landscape in the meantime.

Under the same conditions, if the rival starts pursuing digital disruption, the picture changes. Now the best move is to all but abandon digital disruption (α ≈ 0). There's no reason to add your own turbulence on top of the turbulence the rival has already created.

When the market readily accepts the new approach (ρ ≈ 0.9), the scale tips toward digital disruption — but only while the rival stays with adaptation. In that case, the best move is to mix the two (α ≈ 0.8), leaning heavily into the chance the new landscape will take hold while still banking some of the gains available on the current one. But here too, once the rival starts reshaping its value chain, the curve keeps falling, and sticking to adaptation alone (α ≈ 0) again becomes the best move.

**Second question: what about relative performance? Here the picture changes.**

When the market resists the new approach, the conclusion is similar — a moderate amount of disruption is best (α ≈ 0.3). What's interesting is that when the rival starts reshaping its value chain, the firm's own relative performance actually improves. The rival is spending money for nothing and giving up the gains available on the current landscape, and the gap between the two widens as a result.

When the market readily accepts the new approach, the picture flips entirely. The curve keeps climbing, and going all-in (α = 1) becomes the best move — even when the rival is doing exactly the same thing. If reshaping the value chain succeeds, either the firm climbs or the rival falls, and since relative performance only measures that difference, going all-in still pays off.

So a zone emerges where, under the same conditions, the right answer is exactly reversed. When the market is open and the rival is also pursuing disruption: protecting your own performance means adapting only (α = 0), while beating the rival means going all-in (α = 1). The goal you set leads to opposite prescriptions.

<div class="diagram-box" markdown="1">

![What to do and when eight cases by goal market openness and rival strategy](/assets/img/digital-disruption-fig3-decision-matrix-en.png)

*Figure 3. What to do, and when — eight cases by goal, market openness, and rival strategy, with the reversed cell highlighted. (Color key: gray/blue tones = Woolworths / adaptation / absolute performance; orange tones = Amazon / digital disruption / relative performance; red = where the answer flips.)*
{: .caption}

</div>

The authors run this fairly broadly to rule out chance. They varied the number of strategic elements (N) from 10 to 16, the landscape's complexity (K) from 4 to 8, and the time horizon from 10 to 1,000. They also tried having the new landscape overlap the original one by about half, and made market acceptance scale with performance instead of being fixed. The conclusion held up. That said, it's worth flagging that this is a confirmation within the model — it means the same conclusion holds when the settings change, not that this is how the real world actually works.

## ✔️ Conclusion

This paper shows that a strategy of digitally reshaping a value chain produces opposite prescriptions depending on the goal it's aimed at. It helps a firm get ahead of its rival, but it can eat into the firm's own performance at the same time, and the answer shifts depending on whether the market is ready to accept it and how the rival responds.

What makes this matter is that the lens on this question has mostly been fixed on a single firm up to now — explaining what capabilities the firm that rebuilt its value chain had, or why the firm on the receiving end couldn't hold up. But when one firm reshapes its value chain, the choices available to other firms change too, so leaving out how the rival responds tells only half the story. The authors fill that gap by placing two firms on the same landscape and having them trade moves.

The authors are upfront about the limits. The goal here is to build theory, not to test it, so confirming this against real data is left as future work. And since the paper deals with a two-firm contest, there's also room to extend it to industries with a mix of competition and cooperation.

Even so, the contribution stands. What the authors stress most is not to read a dip in performance as failure on its own. While a firm's own performance is stalling, the gap with its rival may be widening — and that gap can later come back as absolute performance once it pushes the rival out. The point is to check whether what you're aiming for and how you're measuring success and failure have quietly come apart. The authors have also made available a web tool for running this simulation directly.

## ✍️ After Reading

Reading this kept bringing back my optimization coursework. Getting stuck at the nearest peak on a jagged landscape is what we learned as a local optimum, and this paper's landscape is exactly that. In class, escaping it meant deliberately moving to a worse spot for a while, or jumping far away. This paper's digital disruption isn't a jump, though — it redraws the landscape itself. It struck me that the same problem can have an answer like this too.

I'll admit the NK model didn't click for me at first. But once I reduced it to three decisions and drew out the eight combinations by hand, it made much more sense. The paper uses twelve, which gives 4,096 combinations — cut it down to three and you can check the whole thing with your own eyes.

One more thought, on the side. In this model, a firm can set its own α, and the market's openness ρ is simply given. But how many firms in the real world actually know that number precisely? It seems unlikely that Woolworths moved forward having fixed "we'll go with α = 0.2." As clean as the model is, figuring out how to actually pin down those values in the real world still feels like an open problem. The authors seem to agree, since they also flag empirical testing as future work — and it makes me want to think, next time I'm stuck at a local optimum in my own work, about whether to change the search method or change how the problem itself is framed.

## 📎 References and Further Reading

For anyone who wants to dig further into the terms and materials mentioned in this piece:

- [The paper covered in this issue](https://misq.umn.edu/misq/article/48/3/1263/2297/Performance-Implications-of-Digital-Disruption-in) — the full text is available through the authors' institutional repositories. A free copy is hosted by [the University of Hamburg repository](https://www.edit.fis.uni-hamburg.de/ws/files/55963384/Performance_Implications_of_Digital_Disruption_in_Strategic_Competition.pdf); the publisher page is above.
- [The authors' public simulation tool](https://mtarakci.shinyapps.io/DigitalDisruption/) — lets you run this paper's simulation yourself, changing conditions to see how the results shift. Useful for getting a feel for where the paper's conclusions actually come from.
- NK model — the simulation framework this paper uses. Originally built in evolutionary biology to explain how genes interact, and since applied widely in strategy research. N is the number of decision elements; K is how entangled they are with each other. Kauffman, S. A. *The Origins of Order: Self-Organization and Selection in Evolution*. Oxford University Press, 1993. [NK model (English Wikipedia)](https://en.wikipedia.org/wiki/NK_model)
- Value chain — the chain of activities, from bringing in raw materials to making, selling, and servicing a product, through which a firm creates value. In this paper, adaptation layers digital onto this chain; digital disruption rebuilds the chain itself. [Value chain (Wikipedia)](https://en.wikipedia.org/wiki/Value_chain)
- Local optimum — a point that's higher than its surroundings but not the highest point overall. Mentioned in the reflection above; it's exactly the situation of getting stuck on a peak in this paper's jagged landscape.
{: .reflist}

</div>

<div class="block lang-ko" markdown="1">

<a class="linkcard" href="https://misq.umn.edu/misq/article/48/3/1263/2297/Performance-Implications-of-Digital-Disruption-in" target="_blank" rel="noopener"><span class="lc-main"><span class="lc-title">Performance Implications of Digital Disruption in Strategic Competition | MIS Quarterly</span><span class="lc-desc">이 논문은 NK 모델 시뮬레이션으로, 디지털 디스럽션 전략이 경쟁사보다 앞서는 데는 도움이 되지만 동시에 회사 자신의 절대 성과는 깎아먹을 수 있음을 보인다.</span><span class="lc-url">🔗 misq.umn.edu</span></span><span class="lc-side">Performance Implications of Digital Disruption</span></a>

> Sting, Fabian J., Murat Tarakci, and Jan Recker (2024). Performance Implications of Digital Disruption in Strategic Competition. *MIS Quarterly* 48(3):1263–1278.

## ✔️ 소개 및 요약

이번 이슈에서 다룰 논문은 회사가 디지털 기술에 자원을 얼마나 걸어야 경쟁에서 유리한지를 연구한 논문이다.

먼저 이 논문이 나누는 두 가지 길을 알아야 한다. 디지털 디스럽션은 디지털 기술을 새롭게 써서 그 산업에서 당연하게 여겨지던 방식 자체를 뒤엎는 것을 말한다. 무언가 저절로 무너진다는 뜻이 아니라, 한 회사가 의도적으로 기존 질서를 깨는 전략을 가리킨다. 넷플릭스가 대표적이다. 예전에 영화를 빌려 보려면 대여점이 있어야 하고 비디오테이프가 있어야 했다. 넷플릭스는 그것들을 아예 없애고 스트리밍과 추천 알고리즘을 중심으로 가치사슬을 다시 구성했다. 그 결과 "좋은 영화 서비스"의 조건 자체가 달라졌다. 매장이 가깝고 재고가 많은 것에서, 언제든 볼 수 있고 추천이 잘 맞는 것으로. 그 반대편에는 적응이 있다. 기존 방식은 그대로 두고 거기에 디지털을 보태는 것이다. 대여점이 문을 닫지 않은 채 온라인 예약 기능을 붙이는 식이다.

이 논문은 호주 소매시장의 두 회사를 예로 든다. Woolworths는 호주의 대형 슈퍼마켓 체인이고, 아마존 호주는 2017년 호주에 들어온 온라인 소매업체다. Woolworths는 매장과 물류체계를 그대로 두고 온라인 주문과 배송을 얹었다. 즉, 적응 쪽이다. 아마존은 매장 같은 물리적 조건에 얽매이지 않고 물류와 추천, 배송을 처음부터 새로 구성했다. 즉, 디지털 디스럽션 쪽이다.

2022년 두 회사의 온라인 순매출을 보자. Woolworths는 40억 5천만 달러였고, 아마존 호주는 26억 달러였다. 지금 서 있는 자리로 보면 Woolworths가 더 높다. 그리고 Woolworths도 제자리에 있는 게 아니라 전년보다 29.1% 늘었다. 과거의 자신과 견주면 잘하고 있는 것이다. 그런데 아마존의 매출 성장률은 Woolworths보다 23.8%포인트 높았다. 둘의 격차가 좁혀지고 있다는 뜻이다. 누가 이기고 있는 걸까. 답은 무엇을 보느냐에 달렸다. 저자들은 앞의 것을 절대 성과, 뒤의 것을 상대 성과라고 부른다. 절대 성과는 내가 도달한 높이이고, 상대 성과는 나와 상대의 높이 차이다.

## ✔️ 연구 내용 및 논리

<div class="diagram-box" markdown="1">

![같은 두 회사인데 무엇을 보느냐에 따라 승자가 바뀐다](/assets/img/digital-disruption-fig1-performance-ko.png)

*그림 1. 누가 이기고 있나. 호주 소매시장 2022년 온라인 순매출. 규모로 보면 Woolworths가, 성장률로 보면 아마존이 앞선다.*
{: .caption}

</div>

그럼 어느 쪽 길이 나은가. 이건 실제 회사로는 확인하기 어렵다. Woolworths가 만약 아마존처럼 가치사슬을 재편했다면 어땠을지, 그 답은 어디에도 없기 때문이다. 회사는 한 번밖에 살아보지 않는다. 그래서 저자들은 시뮬레이션을 택한다. 여기서 이 논문의 발상이 나온다. 생물학에서 진화를 설명하려고 만든 모델을 기업 간 경쟁에 가져다 쓴 것이다. 산봉우리와 골짜기가 있는 지형을 상상하고 회사를 그 위에서 더 높은 곳을 찾아 움직이는 존재로 놓는다. 그러면 적응은 지금 지형에서 위쪽으로 한 발씩 옮기는 일이 되고, 디지털 디스럽션은 지형 자체를 새로 그리는 일이 된다.

결과를 간단하게 요약하면, 디지털 디스럽션은 경쟁사보다 앞서는 데는 도움이 되지만 자기 성과 자체는 오히려 깎아먹을 수 있다. 그리고 같은 상황에서 무엇을 목표로 삼느냐에 따라 정답이 정반대로 뒤집히는 구간이 있다.

디지털 디스럽션은 요즘 경영에서 거의 정답처럼 이야기된다. 넷플릭스뿐 아니라 음악과 출판에서도 비슷한 일이 벌어졌고, 그 이야기들이 워낙 잘 알려져 있어서다. 그런데 저자들이 짚는 것은 우리가 아는 사례가 성공한 것들뿐이라는 점이다. 디지털로 가치사슬을 재편하려다 실패한 시도도 많은데, 그런 건 기사화되어 사람들에게 알려지지 않는다. 성공한 쪽만 모아놓고 보면 디지털 디스럽션이 늘 옳은 답처럼 보인다. 정작 알고 싶은 건 디지털 디스럽션이 언제 통하고 언제 그렇지 않은가인데, 성공 사례만으로는 그걸 가릴 수가 없다.

기존 연구에도 다루지 않은 부분이 있다고 본다. 지금까지는 회사 하나만을 놓고 판단했다는 것이다. 가치사슬을 새로 구성한 쪽이든 그 대상이 된 쪽이든 한쪽에 초점을 맞춰 그 회사가 어떤 능력을 갖췄고 기술을 어떻게 썼는지를 설명해왔다. 그런데 한 회사가 가치사슬을 새로 형성하면 그 회사의 성과만 달라지는 것이 아니다. 다른 회사들이 고를 수 있는 전략도 함께 달라진다. 호주 소매시장이 아마존의 새로운 방식을 받아들이면서 고객 수요와 주문 처리, 성과를 평가하는 기준이 바뀌었고, Woolworths는 바뀐 기준 위에서 다시 선택해야 했다. 그러니 아마존 한 회사만 봐서는 그 선택이 잘한 것인지 판단할 수 없다는 것이 저자들의 지적이다.

이걸 실제 자료로 확인하기 어렵다는 점은 앞서 말한 대로다. 그래서 저자들은 시뮬레이션으로 두 회사를 함께 움직이게 만든다. 이 논문이 던지는 질문은 둘이다. 첫째, 디지털 디스럽션과 적응 사이에 어떤 성과 트레이드오프가 있는가. 둘째, 어떤 조건에서 디지털 디스럽션을 택해야 하고 어떤 조건에서 택하지 말아야 하는가.

## ✔️ 데이터 및 방법론

이 논문에는 실제 기업 데이터가 없다. 대신 컴퓨터 안에 가상의 경쟁을 만들어 돌린다. 이런 방법을 시뮬레이션이라고 한다.

산업공학에서 문제를 푸는 방법은 크게 두 갈래다. 하나는 최적화다. 목표와 제약을 수식으로 적고, 그 조건에서 가장 좋은 답 하나를 계산해내는 것이다. "생산량을 이렇게 배분하면 비용이 최소"처럼 딱 떨어지는 답이 나온다. 그런데 최적화가 잘 안 되는 경우가 있다. 관계가 너무 얽혀 있어서 수식으로 정리가 안 되거나, 우연이 크게 작용하거나, 상대의 반응에 따라 내 최선이 계속 달라질 때다.

이 논문의 상황이 정확히 그렇다. 결정들이 서로 얽혀 있고, 시장이 새 방식을 받아들일지는 확률이며, 경쟁사가 무엇을 하느냐에 따라 답이 뒤집힌다. 이럴 때 활용할 수 있는 것이 시뮬레이션이다. 답을 계산해내는 대신, 모형을 만들어놓고 실제로 돌려보는 것이다. 즉, 가상의 회사에게 규칙을 주고 정해진 기간 동안 움직이게 한 뒤 결과를 본다. 한 번으로는 우연에 좌우되니 조건마다 여러 번 돌려 평균을 내는 방식이다.

결과적으로 도출되는 답의 성격도 다르다. 최적화가 "이게 정답이다"라면, 시뮬레이션은 "이런 조건에서는 대체로 이런 결과가 나온다"에 가깝다. 이 논문이 내놓는 것도 검증된 사실이라기보다 따져본 결과다.

### NK 모델 — 무엇이고 왜 가져왔나

<div class="diagram-box" markdown="1">

![전략의 조합을 지형으로 보면 NK 모델](/assets/img/digital-disruption-fig2-landscape-ko.png)

*그림 2. 회사의 결정을 3개로 줄여 전략의 조합을 지형으로 보인 예.<br>적응은 옆 칸으로 한 발씩 옮기는 것이고, 디지털 디스럽션은 지형 자체가 새로 그려지는 것이다.*
{: .caption}

</div>

저자들이 쓴 시뮬레이션 틀은 NK 모델이다. 1993년 생물학자 스튜어트 카우프만이 만든 모형으로, 원래는 생물의 진화를 설명하려던 것이었다. 카우프만의 질문은 이랬다. 생물의 형질은 여러 유전자가 함께 만들어내는데, 유전자들이 서로 영향을 주고받으면 좋은 조합을 찾기가 왜 그렇게 어려운가. 이 질문에 대해 설명하려고 그는 적응도 지형(fitness landscape)이라는 그림을 도입했다. 가능한 조합 하나하나를 지도 위의 한 점으로 놓고, 그 조합이 얼마나 좋은지를 그 점의 높이로 표현하는 것이다. 그러면 봉우리와 골짜기가 있는 지형이 만들어지고, 생물은 그 위에서 조금씩 움직이며 더 높은 곳을 찾는 존재가 된다.

모델의 이름은 이 지형의 모양을 정하는 두 숫자에서 왔다. N은 결정 요소가 몇 개인지, K는 그 요소들이 서로 얼마나 얽혀 있는지를 뜻한다. 이 틀이 회사에도 쓰이는 이유는 회사의 전략도 구조가 같기 때문이다. 회사도 여러 결정을 동시에 내리고, 그 결정들이 서로 영향을 주고받으며, 조금씩 바꿔가며 더 나은 조합을 찾는다. 그래서 NK 모델은 경영전략 연구에서 오래 쓰여왔다.

다만 이 논문은 한 지점에서 기존 방식을 바꾼다. 지금까지의 연구에서 지형은 고정된 것이었다. 회사가 그 위를 돌아다닐 뿐 지형 자체는 그대로였다. 이 연구는 회사의 행동이 지형을 바꿀 수 있다고 전제하고 시뮬레이션을 통해 재현한다. 디지털 디스럽션이 바로 그것이다. 앞에서 "좋은 성과의 기준 자체가 바뀐다"고 한 것을 모형에서는 "지형이 새로 그려진다"로 옮긴 셈이다.

**모형을 하나씩.** 회사의 전략을 N개의 결정으로 쪼갠다. 각 결정은 0 아니면 1이다. 매장을 둘 것인가 말 것인가, 자체 물류를 할 것인가 말 것인가 같은 것들의 자리표시자다. 회사 하나의 상태는 이런 벡터가 된다. d = (d₁, d₂, …, d_N). 논문은 N을 12로 뒀다. 가능한 조합이 2¹² = 4,096가지다. 이 4,096개가 지형 위의 점들이다.

각 결정이 성과에 기여하는 정도를 π로 쓴다. 회사 전체의 성과는 이 기여도들의 평균이고, 이것이 그 위치의 높이다. 이 관계를 하나의 식으로 정리하면 다음과 같다.

<div class="formula">\[\Pi(d) = \frac{1}{N}\sum_{m=1}^{N} \pi_m(d_m, d_{-m})\]</div>

풀어 말하면, 회사의 성과 <span class="mvar">Π</span>는 N개 결정 하나하나가 만들어내는 기여도 <span class="mvar">π<sub>m</sub></span>을 모두 더해 평균 낸 값이다. 그런데 각 기여도 <span class="mvar">π<sub>m</sub></span>은 그 결정 하나(<span class="mvar">d<sub>m</sub></span>)만으로 정해지지 않고, 다른 결정들(<span class="mvar">d<sub>−m</sub></span>)에도 함께 달려 있다. 회사의 성과가 개별 결정의 단순 합이 아니라, 결정들이 서로 얽혀 만들어내는 값이라는 뜻이다.

여기서 봐야 할 건 π의 괄호 안이다. m번째 결정의 기여도가 자기 값(<span class="mvar">d<sub>m</sub></span>)만이 아니라 다른 결정들(<span class="mvar">d<sub>−m</sub></span>)에도 달려 있다. 자체 물류를 갖추는 게 좋은 결정인지는 매장을 두는지 안 두는지에 따라 달라진다는 뜻이다. 몇 개에 달려 있는지가 K이고, 논문은 K를 6으로 뒀다. K가 지형의 모양을 정한다. K가 0이면 결정들이 서로 무관해서 하나씩 좋은 쪽으로 바꾸기만 하면 최고점에 닿는다. 매끈한 언덕 하나다. 반대로 K가 크면 하나를 바꿀 때 다른 것들의 기여도까지 흔들린다. 봉우리와 골짜기가 어지럽게 섞인 울퉁불퉁한 지형이 되고, 눈앞의 봉우리에 올라가봐야 그게 가장 높은 곳이라는 보장이 없다.

여기서 두 전략이 갈린다. 적응은 지금 지형에서 결정을 하나씩 바꿔가며 더 높은 곳을 찾는 일이다. 디지털 디스럽션은 성과 함수 자체를 Π에서 Π′로 바꾸는 일이다. 새로 만들어지는 성과 함수도 형태는 같다. <span class="mvar">Π(d) = (1/N)Σπ<sub>m</sub>(d<sub>m</sub>, d<sub>−m</sub>)</span>이지만, 그 안의 기여도 <span class="mvar">π′<sub>m</sub></span> 값이 모두 새로 정해진다는 점이 다르다. 봉우리와 골짜기의 위치가 전부 달라진다.

전략은 비율로 표현된다. 회사가 자원 중 얼마를 디지털 디스럽션에 걸지를 α로 쓴다. α가 0이면 순수 적응, 1이면 순수 디지털 디스럽션이다. 둘 중 하나를 고르는 게 아니라 배분의 문제로 본 것이 이 논문의 선택이다.

새 지형이 실제로 자리 잡을지는 시장이 정한다. 가치사슬을 재편했다고 세상이 곧바로 따라오는 건 아니다. 시장이 받아들일 확률을 ρ로 두고, 논문은 낮은 경우(0.1)와 높은 경우(0.9)를 나눠 본다. 규제나 산업의 디지털 준비도 같은 것들을 뭉뚱그린 값이다.

회사는 둘을 놓는다. 상대가 무엇을 하느냐에 따라 내 최선의 선택이 달라지기 때문이다. 다만 보는 것은 여전히 한 회사의 성과다. 두 회사를 합친 성과나 산업 전체의 이익을 재는 것이 아니다.

성과는 두 가지로 측정한다. 절대 성과는 마지막 시점에 내가 도달한 높이이고, 상대 성과는 나와 상대의 높이 차이다. 이를 식으로 쓰면 다음과 같다.

<div class="formula">\[\Delta\Pi_i = \Pi_i(d_i^T) - \Pi_j(d_j^T)\]</div>

절대 성과는 마지막 시점 T에서 내가 도달한 높이, 곧 <span class="mvar">Π<sub>i</sub>(d<sub>i</sub><sup>T</sup>)</span> 그 자체다. 상대 성과 <span class="mvar">ΔΠ<sub>i</sub></span>는 여기서 상대 회사의 높이 <span class="mvar">Π<sub>j</sub>(d<sub>j</sub><sup>T</sup>)</span>를 뺀 값이다. 상대 성과가 0보다 크면 내가 앞선 것이고, 작으면 뒤진 것이다.

두 회사가 50기간 동안 동시에 움직이고, 조건마다 1만 번씩 반복해 평균을 낸다. 변수를 한자리에 모으면 이렇다.

| 기호 | 뜻 | 값 |
|---|---|---|
| <span class="mvar">N</span> | 회사가 내리는 전략적 결정의 개수 | 12 |
| <span class="mvar">K</span> | 각 결정이 다른 몇 개 결정에 얽혀 있는가 (지형의 울퉁불퉁함) | 6 |
| <span class="mvar">d</span> | 회사의 현재 위치 (결정들의 조합) | 0/1 벡터 |
| <span class="mvar">π</span> | 결정 하나가 성과에 기여하는 정도 | 무작위로 부여 |
| <span class="mvar">Π</span> | 회사의 성과 = <span class="mvar">π</span>들의 평균 = 지형에서의 높이 | 계산값 |
| <span class="mvar">Π′</span> | 디지털 디스럽션으로 새로 그려진 지형에서의 성과 | 계산값 |
| <span class="mvar">α</span> | 자원 중 디지털 디스럽션에 거는 비율 | 0–1 |
| <span class="mvar">ρ</span> | 시장이 새 지형을 받아들일 확률 | 0.1 또는 0.9 |
| <span class="mvar">T</span> | 시뮬레이션 기간 | 50 |

## ✔️ 연구 결과

**첫 번째 질문, 절대 성과에서는 어떤 트레이드오프가 있는가.**

시장이 새 방식을 잘 안 받아주고(ρ = 0.1), 경쟁사도 적응에 머무를 때, 자기 성과를 최대로 하려면 디지털 디스럽션에 조금만 걸어야 한다(α ≈ 0.2). 곡선이 뒤집힌 포물선이라 조금은 좋지만 많이 걸면 나빠진다. 저자들은 이 소액 투자를 일종의 선택권으로 본다. 판을 바꿀 가능성을 열어두되 정말 유리할 때만 실행하는 것이다. 반면 전부를 거는 것은 기회비용이 크다. 새 지형에서 더 나은 자리를 못 찾으면 원래 자리로 돌아와야 하는데, 그동안 지금 지형에서 올라갔을 몫을 포기한 셈이 되기 때문이다.

같은 조건에서 경쟁사가 가치사슬 재편에 나서면 이야기가 달라진다. 이때 최선은 디지털 디스럽션을 거의 접는 것(α≈0)이다. 상대가 일으킨 흔들림 속에서 나까지 흔들 이유가 없다는 것이다.

시장이 잘 받아주면(ρ≈0.9) 저울이 디지털 디스럽션 쪽으로 기운다. 다만 경쟁사가 적응에 머무를 때만이다. 이때는 둘을 섞는 게 가장 좋다(α≈0.8). 새 지형이 자리 잡을 가능성을 크게 잡으면서 지금 지형에서의 이득도 챙기는 것이다. 그런데 여기서도 경쟁사가 재편에 나서면 곡선이 계속 내려가서 적응만 하는 게(α≈0) 최선이 된다.

**두 번째 질문, 상대 성과에서는 어떤가. 여기서 그림이 달라진다.**

시장이 잘 안 받아줄 때는 결론이 비슷하다. 디스럽션을 적당히만 하는 게 낫다(α≈0.3). 흥미로운 건 경쟁사가 가치사슬 재편에 나설 때 오히려 내 상대 성과가 좋아진다는 점이다. 상대가 헛돈을 쓰고 지금 지형에서의 이득까지 포기하는 동안 격차가 벌어지기 때문이다.

시장이 잘 받아줄 때는 완전히 뒤집힌다. 곡선이 계속 올라가서 전부를 거는 게 최선이 된다. 경쟁사도 똑같이 재편에 나설 때조차 그렇다. 가치사슬 재편에 성공하면 내가 올라가거나 상대가 내려가거나 둘 중 하나는 일어나는데, 상대 성과는 그 차이만 보기 때문이다.

그래서 같은 상황에서 정답이 정반대가 되는 구간이 생긴다. 시장이 열려 있고 경쟁사가 재편에 나설 때, 자기 성과를 지키려면 적응만 해야 하고(α=0), 경쟁사를 앞서려면 전부 걸어야 한다(α=1). 무엇을 목표로 잡았느냐가 정반대의 처방으로 이어진다.

<div class="diagram-box" markdown="1">

![언제 무엇을 해야 하나 목표 시장 개방도 경쟁사 전략에 따른 여덟 가지 경우](/assets/img/digital-disruption-fig3-decision-matrix-ko.png)

*그림 3. 언제 무엇을 해야 하나. 목표·시장 개방도·경쟁사 전략에 따른 여덟 가지 경우. 정답이 뒤집히는 칸을 강조했다. (색 규칙: 회색·파랑 계열 = Woolworths / 적응 / 절대 성과, 주황 계열 = 아마존 / 디지털 디스럽션 / 상대 성과, 붉은색 = 정답이 뒤집히는 지점)*
{: .caption}

</div>

저자들은 결과가 우연이 아닌지 꽤 넓게 확인한다. 전략 요소 수(N)를 10~16으로, 지형의 복잡도(K)를 4~8로, 기간을 10~1,000으로 바꿔봤다. 새 지형이 기존 지형과 절반쯤 겹치게도 해봤고, 시장이 받아들이는 방식을 성과에 비례하게도 바꿔봤다. 결론은 유지됐다. 다만 이건 모형 안에서의 확인이라는 점을 짚어둘 필요가 있다. 설정을 바꿔도 같은 결론이 나온다는 뜻이지, 현실이 그렇다는 뜻은 아니다.

## ✔️ 결론

이 논문은 디지털로 가치사슬을 재편하는 전략이 무엇을 목표로 삼느냐에 따라 정반대의 처방이 된다는 것을 보였다. 경쟁사보다 앞서는 데는 도움이 되지만 자기 성과 자체는 깎아먹을 수 있고, 시장이 받아들일 준비가 됐는지와 경쟁사가 어떻게 나오는지에 따라 답이 달라진다는 것이다.

이것이 의미가 있는 이유는 지금까지 이 문제를 보는 눈이 대체로 회사 하나에만 맞춰져 있었기 때문이다. 가치사슬을 새로 구성한 회사가 어떤 능력을 갖췄는지, 당한 회사가 왜 못 버텼는지를 설명해왔다. 그런데 한 회사가 가치사슬을 재편하면 다른 회사들의 선택지까지 달라지므로, 상대의 반응을 빼면 이야기가 반쪽이 된다. 저자들은 두 회사를 같은 지형에 놓고 서로의 수를 주고받게 만들어 그 부분을 채운다.

저자들 스스로도 한계를 분명히 밝힌다. 이 연구의 목표는 이론을 세우는 것이지 검증하는 것이 아니어서, 실제 자료로 확인하는 일은 다음 몫으로 남아 있다. 또 두 회사가 겨루는 상황을 다뤘으니, 경쟁과 협력이 섞인 여러 산업으로 넓혀볼 여지도 있다.

그럼에도 의의는 분명하다. 저자들이 특히 강조하는 건 성과가 떨어진 것을 곧바로 실패로 읽지 말라는 것이다. 자기 성과가 주춤한 동안 경쟁사와의 격차는 벌어지고 있을 수 있고, 그 격차가 나중에 경쟁사를 밀어내면서 절대 성과로 돌아올 수도 있기 때문이다. 무엇을 목표로 삼았는지와 무엇으로 성패를 재는지가 어긋나 있지 않은지 확인하라는 얘기다. 저자들은 이 시뮬레이션을 직접 돌려볼 수 있는 웹 도구도 공개해두었다.

## ✍️ 읽고 나서

읽으면서 계속 최적화 수업이 생각났다. 울퉁불퉁한 지형에서 눈앞의 봉우리에 갇히는 것을 지역 최적해라고 배웠는데, 이 논문의 지형이 정확히 그것이다. 수업에서는 거기서 빠져나오려고 가끔 일부러 나쁜 쪽으로 움직이거나 멀리 뛰는 방법을 사용했다. 그런데 이 논문의 디지털 디스럽션은 뛰는 게 아니라 지형 자체를 새로 그리는 쪽이다. 같은 문제에 이런 답도 있을 수 있구나 싶었다.

솔직히 NK 모델은 처음에 잘 안 잡혔다. 그런데 결정을 세 개로 줄여서 조합 여덟 개를 직접 그려보니 훨씬 나았다. 논문은 열두 개를 쓰니 4,096가지가 되는데, 셋으로 줄이면 눈으로 다 확인해볼 수 있다.

한편 이런 생각도 든다. 이 모형에서 회사는 자기 α를 정할 수 있고 시장의 개방도 ρ도 주어져 있다. 그런데 현실에서 그것을 정확히 아는 회사가 몇이나 될까. Woolworths가 "우리는 α 0.2로 간다"고 고정하고 움직였을 것 같지는 않다. 모형이 깔끔한 만큼 그 값들을 현실에서 어떻게 알아낼지는 남는 문제인 듯하다. 저자들도 실증은 다음 몫이라고 적어두었으니 같은 생각인 것 같고, 나중에 내가 다루는 문제에서도 지역 최적해에 갇혔을 때 탐색 방법을 바꿀지 문제 정의를 바꿀지 한번 따져보고 싶다.

## 📎 참고 자료

이 글에 나온 용어나 자료를 더 보고 싶은 분들을 위해.

- [이번 이슈에서 다룬 논문 원문](https://misq.umn.edu/misq/article/48/3/1263/2297/Performance-Implications-of-Digital-Disruption-in) — 저자 소속 기관 저장소에 전문이 공개되어 있다. [함부르크대 저장소](https://www.edit.fis.uni-hamburg.de/ws/files/55963384/Performance_Implications_of_Digital_Disruption_in_Strategic_Competition.pdf)에 무료 전문이 있고, 위 링크는 출판사 페이지다.
- [저자들이 공개한 시뮬레이션 도구](https://mtarakci.shinyapps.io/DigitalDisruption/) — 이 논문의 시뮬레이션을 직접 돌려볼 수 있다. 조건을 바꿔가며 결과가 어떻게 달라지는지 볼 수 있어서 본문의 결론이 어디서 나온 것인지 감을 잡기 좋다.
- NK 모델 — 이 논문이 쓴 시뮬레이션 틀. 원래 진화생물학에서 유전자들의 상호작용을 설명하려고 만들어졌고, 경영전략 연구에 응용되어왔다. N은 결정 요소의 개수, K는 그 요소들이 서로 얼마나 얽혀 있는지를 뜻한다. Kauffman, S. A. *The Origins of Order: Self-Organization and Selection in Evolution*. Oxford University Press, 1993. [NK model (영문 위키백과)](https://en.wikipedia.org/wiki/NK_model)
- 가치사슬 — 원재료를 들여와 만들고 팔고 사후 서비스까지 하는, 회사가 가치를 만들어내는 활동들의 사슬. 이 논문에서 적응은 이 사슬에 디지털을 얹는 것이고, 디지털 디스럽션은 사슬 자체를 다시 짜는 것이다. [가치사슬 (위키백과)](https://en.wikipedia.org/wiki/Value_chain)
- 지역 최적해 — 주변보다는 높지만 전체에서 가장 높지는 않은 지점. 소감에서 언급한 개념으로, 이 논문의 울퉁불퉁한 지형에서 봉우리에 갇히는 상황이 여기에 해당한다.
{: .reflist}

</div>
