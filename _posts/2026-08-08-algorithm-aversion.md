---
layout: post
title: "Making Sense of Contradictory Algorithm Aversion Research"
title_ko: "엇갈리는 알고리즘 회피 연구를 정리하다"
date: 2026-08-08
category: blog
excerpt_en: "Jussupow et al. (2024) · MIS Quarterly"
excerpt_ko: "Jussupow et al. (2024) · MIS Quarterly"
contributor: "Suwon Kim"
contributor_ko: "김수원"
editor: "Jiyoung Song"
editor_ko: "송지영"
---

<div class="lang-en" markdown="1">

<a class="linkcard" href="https://doi.org/10.25300/MISQ/2024/18512" target="_blank" rel="noopener"><span class="lc-main"><span class="lc-title">An Integrative Perspective on Algorithm Aversion and Appreciation in Decision-Making | MIS Quarterly</span><span class="lc-desc">People have conflicting responses for support from algorithms or humans in decision-making. On the one hand, they fail to benefit from algorithms due to algorithm aversion. On the other hand, many prefer algorithmic over human advice, an effect of algorithm...</span><span class="lc-url">🔗 doi.org/10.25300/MISQ/2024/18512</span></span><span class="lc-side">Algorithm Aversion and Appreciation</span></a>

> Jussupow, E., Benbasat, I., & Heinzl, A. (2024). An Integrative Perspective on Algorithm Aversion and Appreciation in Decision-Making. *MIS Quarterly*, 48(4), 1575–1590.

## ✔️ Introduction and Summary

<div class="diagram-box" markdown="1">

![Same advice, different reaction](/assets/img/algorithm-aversion-fig1-illustration.png)

*Figure 1. Same advice, different reaction.*
{: .caption}

</div>

People sometimes avoid an algorithm's advice, and sometimes trust it more than a human's. The same person can swing between the two depending on the situation. This contradiction produced two separate strands of research — algorithm aversion and algorithm appreciation — but until now, nothing tied the two together into a single framework.

The idea traces back to 1954. Psychologist Paul Meehl, in his book *Clinical versus Statistical Prediction*, first analyzed why physicians favored their own clinical judgment over statistical formulas. In 2015, Dietvorst et al. explicitly coined the term "algorithm aversion," and the research area took off. Yet just four years later, in 2019, Logg et al. reported the opposite finding — people actually followed an algorithm's suggestion more than another person's advice, a result they called "algorithm appreciation." Contradictory conclusions kept piling up under the same name.

Researchers at the Technical University of Darmstadt, the University of British Columbia, and the University of Mannheim argue the contradiction isn't in the experimental results themselves, but in how the questions were framed. Different studies assumed different things by "algorithm," and measured "aversion" in different ways, so results that were never comparable in the first place ended up lumped together under one label. This paper redefines algorithm aversion as "the preference for humans over algorithms in decision-making," and organizes a decade of prior research into a single classification scheme.

## ✔️ Research Content and Logic

In a hiring task where participants judged whether to accept or reject applicants, half were told "a computer program is screening," and the other half "an HR expert is screening" — with the screening criteria and process described as identical (Rebitschek et al., 2021). Yet participants' expectations diverged. Those told a computer was screening expected more false rejections of applicants who should have passed, and fewer false acceptances of applicants who should have been rejected.

This experiment is frequently cited within the algorithm aversion research stream. But that stream actually mixes together experiments with very different characters. The authors split the difference along two questions: what do we mean by "algorithm," and what is being compared to what.

<div class="sysbox" markdown="1">

- **What do we mean by "algorithm"?**

    Borrowing Faulkner and Runde's (2019) theory of digital objects, the authors distinguish three layers. Layer 1 treats the algorithm as the computational procedure itself — a statistical formula or predictive model. The hiring experiment above falls here. Layer 2a treats it as embedded in software (a nonmaterial object) like a chatbot or sales agent, and Layer 2b as embedded in a physical form (a material object) like a robot. As you move up the layers, factors like how human-like the interface is, the mode of interaction, and context start to shape the results too.

- **What is being compared to what?**

    Prior studies measure preference for algorithms in four ways: asking about general attitudes toward algorithms with no human comparison at all (Approach 0); seeing whether people follow their own judgment or the algorithm's judgment (Approach 1); comparing perceptions of a human advisor versus an algorithmic advisor (Approach 2); and having people judge first, then receive advice, and seeing how much they revise their judgment (Approach 3).

    The hiring experiment is an Approach 2 study. Logg et al. (2019) is an example of Approach 3: participants estimated a person's weight from a photo, then saw either an algorithm's suggestion (aggregated from other participants' guesses) or one other person's advice. Participants followed the algorithm's suggestion more than the individual's advice. Approach 0 measures only general attitudes — like "I don't trust algorithms" — with no comparison at all, which means it can't really explain where a preference for humans comes from, since there's no human comparison to begin with.

- **Overlaying the two questions**

    Overlaying the two questions creates as many cells as their combination allows. The hiring experiment and the weight-estimation experiment both treated the algorithm as a computational procedure (Layer 1), but used different comparison approaches, so they land in different cells. Even though both came out of the same algorithm aversion research area, they were actually measuring different things.

</div>

## ✔️ Methodology

This paper is a Research Note — a theoretical synthesis that reviews existing studies on algorithm aversion and builds the classification scheme above. MIS Quarterly defines this format as a short paper that makes a conceptual or methodological contribution rather than presenting new empirical data, and this paper is no exception: it draws entirely on the existing literature, without new experiments or surveys.

The two-layer distinction (how algorithms are conceptualized) comes from Faulkner and Runde's (2019) theory of digital objects; the approach distinction (comparison type) comes from the psychology literature's judge-advisor framework (Bonaccio & Dalal, 2006). That framework originally studied how much people adjust their own judgment after receiving advice; the authors extend it by splitting the advisor into "human" and "algorithm."

The classification scheme also flags which moderating variables matter in each cell. Studies that treat the algorithm purely as a computational procedure need to control for whether the method is regression or a neural network, and how reliable the underlying data is. Studies where the algorithm is embedded in software or a robot need to additionally consider how human-like the interaction is, and framing effects like whether it's called "AI" or "algorithm." On the approach side, studies anchored on "my own judgment" need to control for how much people generally stick to their own judgment, while studies comparing to a human need to control for whether the comparison person is an expert.

## ✔️ Discussion

What this paper actually delivers is a single table. Below is a reader-friendly reconstruction of the paper's Table 2. It crosses "what do we mean by algorithm" (Layer 1 / 2a / 2b) on the vertical axis with "what is being compared" (Approaches 1–3) on the horizontal axis, and places representative studies in each cell.

<div class="diagram-box" markdown="1">

![A classification scheme for algorithm aversion research](/assets/img/algorithm-aversion-fig2-classification-en.png)

*Figure 2. A classification scheme for algorithm aversion research, adapted from the paper's Table 2. Approach 0 has no human comparison, so it is not included in this matrix.*
{: .caption}

</div>

This table explains why contradictory conclusions have piled up under the single name "algorithm aversion" — different studies were actually measuring different cells. For example, Dietvorst et al. (2015), in the Layer 1 × Approach 1 cell, and Logg et al. (2019), in the Layer 1 × Approach 3 cell, both treat the algorithm as a computational procedure, but the former measures whether a person sticks to their own judgment, while the latter measures how much they revise after receiving advice. Since they're measuring entirely different things, it's natural for the conclusions to diverge.

That said, the authors are also clear that the matrix alone doesn't explain everything. Studies within the same cell can still reach different conclusions, for four reasons.

<div class="sysbox" markdown="1">

<span class="sysnum">1</span> **Egocentric advice discounting**

People tend to stick to their own judgment regardless of whether the advice comes from a human or an algorithm — a tendency called egocentric advice discounting. So Approach 1 studies, which use "my own judgment" as the baseline, can't easily tell whether people are rejecting advice because it's algorithmic, or simply because they don't like taking advice from anyone.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">2</span> **Characteristics of the human comparison agent**

Who gets chosen as the comparison person changes the result. Comparing an algorithm to an expert like a doctor produces a different degree of aversion than comparing it to a nonexpert like an experiment participant (Hou & Jung, 2021). An individual's personal relationship with that person matters too.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">3</span> **Temporal considerations**

Timing matters as well. Some studies report that people initially prefer algorithms, then swing to aversion after experiencing a few errors (Dietvorst et al., 2015); others find that aversion appears first and simply persists (Castelo et al., 2019). The paper organizes this into a typical temporal pathway — initial preference, initial advice-taking behavior, experience, and calibrated preference (Figure 3) — where Approach 2 studies mostly capture initial preferences before any interaction, Approach 1 studies capture the first few decisions, and Approach 3 studies capture calibrated preferences after repeated experience. The same person can look averse or appreciative depending on when you ask.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">4</span> **Differences in operationalization**

The measures themselves differ too. Studies comparing to "my own judgment" use a behavioral measure — how much the advice was incorporated into the revised judgment (weight on advice) — while studies comparing to a human use attitudinal measures, like how competent the agent seems. Even when both claim to measure "algorithm aversion," they're measuring it with different rulers.

</div>

## ✔️ Conclusion

This paper's greatest strength is that it takes more than a decade of scattered, contradictory experimental results and organizes them into a single table — giving the concept of algorithm aversion a shared coordinate system for the first time. With this table, researchers designing a new study no longer have to settle for vaguely "looking at preference for algorithms." Instead, they can first decide which layer to treat the algorithm as — a computational procedure, a chatbot, or a robot — what to compare it against, and when to ask. That also reduces the mistake of casually placing different studies' results side by side.

The framework's real strength lies in its extensibility. As the authors themselves note, recent findings that content generated by large language models like ChatGPT is rated less favorably than human-written content are really an extension of the same "preference for humans" phenomenon this paper organizes. As generative AI rapidly spreads as a new layer of algorithms — one that generates content directly rather than just offering suggestions — this classification scheme is likely to become even more useful from here on.

Above all, as a Research Note published in MIS Quarterly, a top journal in information systems, this paper packs a careful reorganization of a vast literature into a short format — a rare achievement. It's an unusually practical piece of theory that can lift an entire field's productivity without a single new experiment.

## ✔️ References

- Bonaccio, S., & Dalal, R. S. (2006). Advice taking and decision-making: An integrative literature review, and implications for the organizational sciences. *Organizational Behavior and Human Decision Processes*, 101(2), 127–151. [doi.org/10.1016/j.obhdp.2006.07.001](https://doi.org/10.1016/j.obhdp.2006.07.001)
- Castelo, N., Bos, M. W., & Lehmann, D. R. (2019). Task-dependent algorithm aversion. *Journal of Marketing Research*, 56(5), 809–825. [doi.org/10.1177/0022243719851788](https://doi.org/10.1177/0022243719851788)
- Dietvorst, B. J., Simmons, J. P., & Massey, C. (2015). Algorithm aversion: People erroneously avoid algorithms after seeing them err. *Journal of Experimental Psychology: General*, 144(1), 114–126. [doi.org/10.1037/xge0000033](https://doi.org/10.1037/xge0000033)
- Faulkner, P., & Runde, J. (2019). Theorizing the digital object. *MIS Quarterly*, 43(4), 1279–1302. [doi.org/10.25300/MISQ/2019/13136](https://doi.org/10.25300/MISQ/2019/13136)
- Hou, Y. T. Y., & Jung, M. F. (2021). Who is the expert? Reconciling algorithm aversion and algorithm appreciation in AI-supported decision making. *Proceedings of the ACM on Human-Computer Interaction*, 5(CSCW2). [doi.org/10.1145/3479864](https://doi.org/10.1145/3479864)
- Logg, J. M., Minson, J. A., & Moore, D. A. (2019). Algorithm appreciation: People prefer algorithmic to human judgment. *Organizational Behavior and Human Decision Processes*, 151, 90–103. [doi.org/10.1016/j.obhdp.2018.12.005](https://doi.org/10.1016/j.obhdp.2018.12.005)
- Rebitschek, F. G., Gigerenzer, G., & Wagner, G. G. (2021). People underestimate the errors made by algorithms for credit scoring and recidivism prediction but accept even fewer errors. *Scientific Reports*, 11(1), 1–11. [doi.org/10.1038/s41598-021-99802-y](https://doi.org/10.1038/s41598-021-99802-y)
{: .reflist}

</div>

<div class="block lang-ko" markdown="1">

<a class="linkcard" href="https://doi.org/10.25300/MISQ/2024/18512" target="_blank" rel="noopener"><span class="lc-main"><span class="lc-title">An Integrative Perspective on Algorithm Aversion and Appreciation in Decision-Making | MIS Quarterly</span><span class="lc-desc">People have conflicting responses for support from algorithms or humans in decision-making. On the one hand, they fail to benefit from algorithms due to algorithm aversion. On the other hand, many prefer algorithmic over human advice, an effect of algorithm...</span><span class="lc-url">🔗 doi.org/10.25300/MISQ/2024/18512</span></span><span class="lc-side">Algorithm Aversion and Appreciation</span></a>

> Jussupow, E., Benbasat, I., & Heinzl, A. (2024). An Integrative Perspective on Algorithm Aversion and Appreciation in Decision-Making. *MIS Quarterly*, 48(4), 1575–1590.

## ✔️ 소개 및 요약

<div class="diagram-box" markdown="1">

![같은 조언, 다른 반응](/assets/img/algorithm-aversion-fig1-illustration.png)

*그림 1. 같은 조언, 다른 반응.*
{: .caption}

</div>

알고리즘의 조언을 사람들은 회피하기도 하고, 더 신뢰하기도 한다. 같은 사람이 상황에 따라 둘 사이를 오가기도 한다. 이 모순은 알고리즘 회피(algorithm aversion)와 알고리즘 선호(algorithm appreciation)라는 두 갈래 연구를 낳았지만, 두 흐름을 하나로 묶어 설명하는 틀은 그동안 없었다.

이 개념의 뿌리는 1954년으로 거슬러 올라간다. 심리학자 폴 밀(Paul Meehl)은 저서 「임상적 예측과 통계적 예측」에서, 의사들이 통계적 공식보다 자신의 임상적 판단을 선호하는 현상을 처음 분석했다. 이후 2015년 디에트보스트 외(Dietvorst et al.)가 알고리즘 회피라는 용어를 학계에 명시적으로 도입하면서 이 연구가 본격적으로 확산됐다. 그런데 불과 4년 뒤인 2019년, 로그 외(Logg et al.)는 사람들이 오히려 다른 사람의 조언보다 알고리즘의 제안을 더 잘 따른다는 정반대 결과, 즉 알고리즘 선호를 보고했다. 같은 이름의 연구 분야 안에서 상반된 결론들이 계속 쌓여온 것이다.

독일 다름슈타트공과대학(Technical University of Darmstadt), UBC(University of British Columbia), 만하임대(University of Mannheim) 연구진은 이 모순의 원인이 실험 결과 자체가 아니라 질문 설계에 있다고 본다. 연구자마다 알고리즘을 서로 다른 것으로 상정하고, 회피를 서로 다른 방식으로 측정해왔기 때문에 애초에 비교가 불가능한 결과들을 같은 이름 아래 모아온 것이다. 이 논문은 알고리즘 회피를 "의사결정에서 알고리즘보다 사람을 선호하는 경향"으로 새롭게 정의하고, 지난 10년간 쌓인 기존 연구들을 하나의 분류 체계 위에 정리한다.

## ✔️ 연구 내용 및 논리

채용 지원자를 평가해 합격과 불합격을 가르는 업무에서 참가자 절반에게는 "컴퓨터 프로그램이 심사한다"고, 나머지 절반에게는 "인사 담당 전문가가 심사한다"고 알려주고 심사 기준이나 방식은 똑같다고 설명했다(Rebitschek et al., 2021). 그런데 참가자들의 예상은 갈렸다. 컴퓨터가 심사한다고 들은 쪽은 실제로는 합격시켜야 할 지원자를 부당하게 떨어뜨리는 실수를 더 많이 할 거라고 짐작했다. 반대로 떨어뜨려야 할 지원자를 실수로 통과시키는 일은 더 적을 거라고 봤다.

이 실험은 알고리즘 회피 연구 흐름 안에서 자주 인용된다. 그런데 이 흐름 안에는 서로 성격이 다른 실험들이 뒤섞여 있다. 저자들은 그 차이를 두 가지 질문으로 나눠서 본다. 하나는 "알고리즘을 뭐라고 보는가", 다른 하나는 "무엇과 무엇을 비교하는가"다.

<div class="sysbox" markdown="1">

- **알고리즘을 뭐라고 보는가**

    저자들은 Faulkner와 Runde(2019)의 디지털 객체 이론을 빌려 알고리즘을 세 층위로 구분한다. Layer 1은 알고리즘을 통계 공식이나 예측 모델 그 자체, 즉 계산 절차로 다루는 경우다. 앞서 본 채용 심사 실험이 여기 해당한다. Layer 2a는 챗봇이나 영업 에이전트처럼 소프트웨어(비물질적 객체)로 구현된 대상으로 다루는 경우, Layer 2b는 로봇처럼 물리적 형체(물질적 객체)를 가진 대상으로 다루는 경우다. 층위가 올라갈수록 인터페이스의 사람다움, 상호작용 방식, 맥락 같은 요인이 실험 결과에 함께 개입한다.

- **무엇과 무엇을 비교하는가**

    기존 연구들이 알고리즘에 대한 선호를 측정하는 방식은 네 가지다. 사람과 비교하지 않고 알고리즘에 대한 일반적 태도만 묻는 방식(접근법 0), 내 판단과 알고리즘의 판단 중 뭘 따르는지를 보는 방식(접근법 1), 사람 조언자와 알고리즘 조언자에 대한 인식 차이를 보는 방식(접근법 2), 그리고 먼저 스스로 판단한 뒤 조언을 받고 판단을 얼마나 수정하는지를 보는 방식(접근법 3)이다.

    채용 심사 실험은 접근법 2에 해당한다. 접근법 3을 쓴 사례로는 로그 외(2019)가 있다. 참가자들에게 사진 속 인물의 몸무게를 추정하게 한 뒤, 다른 사람들의 응답을 집계한 알고리즘의 제안과 한 사람의 조언을 각각 보여줬다. 참가자들은 한 사람의 조언보다 알고리즘의 제안을 더 많이 따랐다. 접근법 0은 비교 대상 없이 "나는 알고리즘을 신뢰하지 않는다" 같은 일반적 태도만 측정하는 방식으로, 인간 비교가 없다 보니 정작 사람에 대한 선호가 어디서 오는지는 설명하지 못한다는 한계가 있다.

- **두 질문을 겹치면**

    두 질문을 겹치면 그 조합만큼 칸이 생긴다. 채용 심사 실험과 몸무게 추정 실험은 둘 다 알고리즘을 계산 절차(Layer 1)로 다뤘지만, 비교 방식이 달라서 서로 다른 칸에 들어간다. 같은 알고리즘 회피 연구 분야 안에서 나왔는데도 실제로는 서로 다른 것을 재고 있었던 셈이다.

</div>

## ✔️ 방법론

이 논문은 알고리즘 회피를 다룬 기존 연구들을 검토해 앞서 본 분류 체계를 만든 이론 정리 논문(Research Note)이다. MIS Quarterly는 이 형식을 "실증 데이터가 아니라 개념적·방법론적 기여를 하는 짧은 논문"으로 규정하는데, 이 논문 역시 새로운 실험이나 설문 없이 기존 문헌 전체를 재료로 삼는다.

두 층위 구분(알고리즘의 개념 구분)은 Faulkner와 Runde(2019)의 디지털 객체 이론에서, 접근법 구분(비교 방식)은 심리학의 판단자-조언자 틀(judge-advisor framework, Bonaccio & Dalal, 2006)에서 가져왔다. 이 틀은 원래 사람이 조언을 받은 뒤 자기 판단을 얼마나 조정하는지를 연구하는 방법론인데, 저자들은 조언자를 사람과 알고리즘으로 나눠서 확장했다.

이 분류 체계는 각 칸마다 신경 써야 할 변수(조절변수)도 함께 알려준다. 계산 절차만 다루는 연구는 계산 방식이 회귀분석인지 신경망인지, 데이터가 얼마나 신뢰할 만한지를 통제해야 한다. 소프트웨어나 로봇으로 구현된 알고리즘을 다루는 연구는 여기에 더해, 인터페이스가 얼마나 사람처럼 상호작용하는지, AI라고 부르는지 알고리즘이라고 부르는지 같은 표현(프레이밍) 차이까지 고려해야 한다. 접근법 쪽에서는, "내 판단"을 기준으로 삼는 연구는 사람들이 원래 자기 판단을 얼마나 고집하는 성향인지를, 사람과 비교하는 연구는 비교 대상이 전문가인지 아닌지를 통제해야 한다.

## ✔️ 논의

이 논문이 실제로 내놓은 결과물은 표 하나다. 아래는 논문의 Table 2를 이해하기 쉽게 재구성한 것이다. "알고리즘을 뭐라고 보는가"(Layer 1 / 2a / 2b)를 세로축으로, "무엇과 비교하는가"(접근법 1~3)를 가로축으로 삼아, 지금까지 나온 대표 연구들을 각 칸에 배치했다.

<div class="diagram-box" markdown="1">

![알고리즘 회피 연구 분류 체계](/assets/img/algorithm-aversion-fig2-classification-ko.png)

*그림 2. 알고리즘 회피 연구 분류 체계 (원 논문 Table 2를 국문으로 재구성). 접근법 0은 인간 비교가 없어 이 매트릭스에는 포함되지 않는다.*
{: .caption}

</div>

이 표를 보면 왜 "알고리즘 회피"라는 같은 이름 아래 정반대 결론들이 쌓여왔는지 설명이 된다 — 서로 다른 연구가 사실 서로 다른 칸을 재고 있었기 때문이다. 예를 들어 Layer 1 × 접근법 1에 속한 디에트보스트 외(2015) 연구와 Layer 1 × 접근법 3에 속한 로그 외(2019) 연구는 둘 다 알고리즘을 계산 절차로 다뤘다는 점은 같지만, 전자는 "내 판단을 고수하는가"를 측정하고 후자는 "조언을 받은 뒤 얼마나 수정하는가"를 측정한다. 측정하는 대상 자체가 다르니 결론이 엇갈리는 게 오히려 자연스럽다.

다만 저자들은 이 매트릭스만으로 모든 게 설명되지는 않는다는 점도 함께 짚는다. 같은 칸에 속한 연구끼리도 결론이 갈릴 수 있는데, 여기에는 네 가지 이유가 있다.

<div class="sysbox" markdown="1">

<span class="sysnum">1</span> **자기중심적 조언 폄하 (egocentric advice discounting)**

사람들은 조언의 출처가 사람이든 알고리즘이든 상관없이 원래 자기 판단을 고집하는 경향이 있다. 그것을 자기중심적 조언 폄하라고 부른다. 그래서 "내 판단"을 기준으로 삼는 접근법 1 연구는, 사람들이 조언을 안 따르는 게 알고리즘이라서인지 원래 남의 말을 잘 안 들어서인지를 구분하기 어렵다.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">2</span> **인간 비교 대상의 특성 (characteristics of the human comparison agent)**

비교 대상으로 어떤 사람을 세우느냐도 결과를 바꾼다. 알고리즘을 의사 같은 전문가와 비교했을 때와 실험 참가자 같은 비전문가와 비교했을 때, 회피의 정도가 다르게 나타난다(Hou & Jung, 2021). 개인이 그 사람과 개인적으로 어떤 관계였는지도 영향을 준다.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">3</span> **시간적 관점 (temporal considerations)**

시점도 문제다. 어떤 연구들은 사람들이 처음엔 알고리즘을 선호하다가 오류를 몇 번 겪은 뒤 회피로 돌아선다고 보고하고(Dietvorst et al., 2015), 다른 연구들은 애초에 회피가 먼저 나타나고 그게 그대로 굳어진다고 본다(Castelo et al., 2019). 논문은 이를 "초기 선호 → 초기 조언 수용 행동 → 경험 → 보정된 선호"로 이어지는 전형적 시간 경로(Figure 3)로 정리하는데, 접근법 2 연구는 주로 상호작용 이전의 초기 선호를, 접근법 1 연구는 초기 몇 번의 결정을, 접근법 3 연구는 반복 경험 이후 보정된 선호를 각각 들여다본다. 같은 사람이라도 언제 물어보느냐에 따라 회피로도, 선호로도 보일 수 있다.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">4</span> **조작화(측정 방식)의 차이 (differences in operationalization)**

측정 지표 자체도 다르다. "내 판단"과 비교하는 연구는 "조언을 얼마나 반영해서 판단을 수정했는가"라는 행동 지표(weight on advice)를 쓰고, 사람과 비교하는 연구는 "이 행위자가 얼마나 유능해 보이는가" 같은 태도 지표를 쓴다. 같은 알고리즘 회피를 쟀다고 해도, 서로 다른 자로 잰 셈이다.

</div>

## ✔️ 결론

이 논문의 가장 큰 미덕은 10년 넘게 제각각 쌓여온 모순된 실험 결과들을 하나의 표로 정리해 알고리즘 회피라는 개념에 처음으로 공통의 좌표계를 부여했다는 점이다. 이 표를 쓰면 새 연구를 설계할 때 "알고리즘에 대한 선호를 본다"고 뭉뚱그리는 대신 알고리즘을 어떤 층위(계산 절차인지, 챗봇인지, 로봇인지)로 다룰지, 무엇과 비교할지, 언제 물어볼지를 먼저 정하고 시작할 수 있다. 서로 다른 연구 결과를 함부로 같은 선상에 놓고 비교하는 실수도 줄어든다.

이 틀의 진짜 힘은 확장성에 있다. 저자들이 직접 짚었듯이 ChatGPT 같은 대형언어모델이 만든 글이 사람이 쓴 글보다 낮게 평가받는다는 최근 연구들도 결국 이 논문이 정리한 "사람에 대한 선호" 현상의 연장선에 있다. 생성형 AI가 알고리즘의 새로운 층위(콘텐츠를 직접 만들어내는 행위자)로 빠르게 확산되는 지금, 이 분류 체계는 오히려 지금부터 더 유용해질 가능성이 크다.

무엇보다 이 논문은 MIS Quarterly라는 정보시스템 분야 최상위 저널에 게재된 Research Note로서 짧은 분량 안에 방대한 문헌을 정교하게 재구성해냈다는 점에서 완성도가 높다. 새로운 실험 데이터 없이도 분야 전체의 생산성을 끌어올릴 수 있는, 보기 드물게 실용적인 이론 논문이다.

## ✔️ 참고문헌

- Bonaccio, S., & Dalal, R. S. (2006). Advice taking and decision-making: An integrative literature review, and implications for the organizational sciences. *Organizational Behavior and Human Decision Processes*, 101(2), 127–151. [doi.org/10.1016/j.obhdp.2006.07.001](https://doi.org/10.1016/j.obhdp.2006.07.001)
- Castelo, N., Bos, M. W., & Lehmann, D. R. (2019). Task-dependent algorithm aversion. *Journal of Marketing Research*, 56(5), 809–825. [doi.org/10.1177/0022243719851788](https://doi.org/10.1177/0022243719851788)
- Dietvorst, B. J., Simmons, J. P., & Massey, C. (2015). Algorithm aversion: People erroneously avoid algorithms after seeing them err. *Journal of Experimental Psychology: General*, 144(1), 114–126. [doi.org/10.1037/xge0000033](https://doi.org/10.1037/xge0000033)
- Faulkner, P., & Runde, J. (2019). Theorizing the digital object. *MIS Quarterly*, 43(4), 1279–1302. [doi.org/10.25300/MISQ/2019/13136](https://doi.org/10.25300/MISQ/2019/13136)
- Hou, Y. T. Y., & Jung, M. F. (2021). Who is the expert? Reconciling algorithm aversion and algorithm appreciation in AI-supported decision making. *Proceedings of the ACM on Human-Computer Interaction*, 5(CSCW2). [doi.org/10.1145/3479864](https://doi.org/10.1145/3479864)
- Logg, J. M., Minson, J. A., & Moore, D. A. (2019). Algorithm appreciation: People prefer algorithmic to human judgment. *Organizational Behavior and Human Decision Processes*, 151, 90–103. [doi.org/10.1016/j.obhdp.2018.12.005](https://doi.org/10.1016/j.obhdp.2018.12.005)
- Rebitschek, F. G., Gigerenzer, G., & Wagner, G. G. (2021). People underestimate the errors made by algorithms for credit scoring and recidivism prediction but accept even fewer errors. *Scientific Reports*, 11(1), 1–11. [doi.org/10.1038/s41598-021-99802-y](https://doi.org/10.1038/s41598-021-99802-y)
{: .reflist}

</div>
