---
layout: post
title: "Generative AI Is Spreading Faster Through Individuals Than Organizations"
title_ko: "생성형 AI는 조직보다 개인에게 더 빠르게 퍼진다"
date: 2026-08-16 00:00:02 +0900
category: blog
excerpt_en: "Bick et al. (2026) · Management Science"
excerpt_ko: "Bick et al. (2026) · Management Science"
contributor: "Suwon Kim"
contributor_ko: "김수원"
editor: "Jiyoung Song"
editor_ko: "송지영"
---

<div class="lang-en" markdown="1">

<a class="linkcard" href="https://doi.org/10.1287/mnsc.2025.02523" target="_blank" rel="noopener"><span class="lc-main"><span class="lc-title">The Rapid Adoption of Generative AI | Management Science</span><span class="lc-desc">Generative artificial intelligence (genAI) is a potentially important new technology, but its impact on the economy depends on the speed and intensity of adoption. This paper reports results from a...</span><span class="lc-url">🔗 doi.org/10.1287/mnsc.2025.02523</span></span><span class="lc-side">The Rapid Adoption of Generative AI</span></a>

> Bick, A., Blandin, A., & Deming, D. J. (2026). The Rapid Adoption of Generative AI. *Management Science*.

## ✔️ Introduction and Summary

<div class="diagram-box" markdown="1">

![Individuals already have generative AI in hand, before firms have even finished building adoption systems](/assets/img/genai-adoption-fig1-illustration.png)

*Figure 1. Before firms have finished building out adoption systems, individuals already have generative AI in hand.*
{: .caption}

</div>

Forecasts of just how much generative AI will affect the economy vary sharply from researcher to researcher. The root cause is simple: until now, there was no reliable data measuring how many people were actually using AI. Researchers at the Federal Reserve Bank of St. Louis, Vanderbilt University, and the Harvard Kennedy School designed and ran the first nationally representative survey of its kind in the United States to fill that gap.

As of late 2024, 45.5% of Americans aged 18–64 were using generative AI, and 32.1% of workers were using it directly in their jobs. Benchmarked against the year each technology's first mass-market product launched, that's a faster pace of diffusion than the PC, and it outpaces both the PC and the internet by an even wider margin. Over the same period, only 5.3% of firms reported that "our company uses AI." In other words, individual adoption is running ahead of organizational adoption.

## ✔️ Research Content and Logic

Beyond the adoption numbers, the second thing this paper sets out to learn is who adopts faster, and why.

<div class="sysbox" markdown="1">

- **The speed gap between individuals and organizations**

    The gap between the worker survey (32.1%) and the firm survey (5.3%) is large enough that it's hard to explain away as statistical noise. The researchers read it as a signal that workers are adopting new technology ahead of their organizations, and cite an analogy from Box CEO Aaron Levie: it echoes how, in the early 2010s, employees began using cloud storage services on personal accounts before their companies ever formally approved them.

- **Occupational gaps and the nature of the work**

    The paper compares work-related AI usage rates across 12 occupations, and the gaps between them are substantial. Computer and mathematical occupations top the list at 53.6%, while personal service occupations sit at the bottom at 15.8% — a gap of more than 3x between the highest and lowest. Whether that gap reflects preference or a genuine difference in the nature of the work needed separate verification. The researchers compared actual usage rates against existing research's predicted "occupational AI exposure," finding a correlation of 0.65–0.71 — evidence that the gap is rooted in the character of the work itself.

- **Where the predictions miss**

    Office and administrative roles and managerial roles are predicted to have similar AI exposure in theory, but actual usage among managers is more than double. Tracing the source of this mismatch, the researchers found that the perception "AI doesn't help with my work" (correlation −0.88) mattered far more than institutional barriers like "my company won't let me use it" (−0.30). What determines adoption has more to do with how useful people feel it is than with policy. That said, company attitude itself turned out to be a powerful variable in its own right: 86% of employees who said their company encourages AI use actually used it, versus just 13% among those who said their company doesn't.

</div>

## ✔️ Data and Methodology

The data comes from the RPS (Real-Time Population Survey), an online labor-market survey that has run since 2020, designed to match the item wording of the CPS (Current Population Survey) — the U.S. Bureau of Labor Statistics' official employment survey — as closely as possible. Two rounds of fieldwork in August and November 2024 gathered more than 10,000 responses.

The methodology rests on three devices built to turn this data into conclusions that can actually be trusted.

<div class="sysbox" markdown="1">

<span class="sysnum">1</span> **Building a benchmark for comparison**

A single number like "45% of people use generative AI" doesn't tell you whether that's fast or slow on its own. Rather than write new survey items, the researchers reused the exact question wording from the CPS's Computer and Internet Use Supplement (CIU), which has run since 1984. The original item asked, "Do you [directly] use a computer for your job?" The researchers took the post-2001 version, which dropped the word "directly," as their template and simply swapped "computer" for "generative AI," asking "Do you use Generative AI for your job?" Reusing the same question frame let them compare the diffusion of the two technologies on the same yardstick. There was no need to survey PC adoption separately — the actual CIU response data from 1984 was used directly as the benchmark.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">2</span> **Handling sample bias**

Online surveys risk over-sampling people who are heavy internet users, and repeating the same kind of survey doesn't fix that problem. The researchers instead layered three data sources whose biases point in different directions. Overall adoption rates nearly matched a separate survey run by a different polling firm (IncQuery), the SWAA (Survey of Working Arrangements and Attitudes, fielded December 2024) — 46.5% versus 45.5%. A Pew Research Center survey (February 2024, 27% reporting ChatGPT experience), which also captures people without internet access, showed somewhat more divergence from the RPS's ChatGPT usage rate (32%) but still landed in a broadly similar range. BTOS (Business Trends and Outlook Survey, the U.S. Census Bureau's monthly firm survey) wasn't used to validate the numbers — it served as a control group illustrating the gap itself between individual-level and firm-level measurement.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">3</span> **Converting survey responses into productivity figures**

Scaling an individual's sense of "I saved a few hours" up to an industry-wide productivity figure requires a separate way to convert one into the other. The researchers used the Cobb-Douglas production function (the standard economic production function that explains output as a combination of two inputs, capital and labor) to convert time savings into output growth via the following approximation.

<div class="formula">\[\frac{\Delta Y}{Y} \approx (1-\alpha) \times \frac{\sum_i s_i \tilde{w}_i}{\sum_i \ell_i \tilde{w}_i}\]</div>

The fraction on the right is the share of total working hours that AI saved. <span class="mvar">s<sub>i</sub></span> is the time worker <span class="mvar">i</span> saved, <span class="mvar">ℓ<sub>i</sub></span> is worker <span class="mvar">i</span>'s total working hours, and <span class="mvar">w̃<sub>i</sub></span> is that worker's wage relative to the average. Weighting by wage lets time savings among higher-paid occupations count for more in the output figure. <span class="mvar">(1-α)</span> is the labor share — the portion of total output that goes to labor. Since this value and AI usage rates both vary by industry, the calculation was performed separately for each industry and then summed.

</div>

## ✔️ Findings

The core finding is that generative AI is already producing visible time savings in specific task areas, and those savings translate into productivity figures that vary considerably by industry.

By use case, adoption clusters around drafting documents and communications (45.1%), administrative tasks (29.9%), and translation/summarization (25.9%), while more technical tasks like coding (15.4%) and data analysis (10.6%) make up a comparatively smaller share. The time-savings effect came to 5.2% of working hours among users, and 1.4% across all workers including non-users.

Plugging these figures into the production function model produces industry-level productivity gains ranging from 0.1% in real estate to 1.7% in professional, scientific, and technical services. Even industries like information services, where both AI usage and time savings are high, ended up with a comparatively smaller final productivity effect when the labor share was low. The economy-wide productivity gain was estimated at 1.2% — higher than the 0.7% estimated by Acemoglu (2025) using a similar framework, with much of the difference owed to the fact that actual observed AI adoption came in higher than that study's forecast-based adoption rate.

## ✔️ Conclusion

This paper's contribution is that it is the first to pin down, with trustworthy numbers, just how much generative AI is actually being used. Forecasts about generative AI's economic impact have varied sharply from researcher to researcher because there was no nationwide data measuring actual adoption on the ground — this study is the first to build data, using the same question design as official government surveys, that allows for historical comparison.

The data also puts existing theory to the test. Models predicting which occupations are more exposed to AI already existed, but no one had checked how well those predictions actually matched real behavior. This paper is the first to empirically demonstrate that correlation, and by pinpointing where the predictions break down, it surfaces a factor existing models were missing: the practical usefulness individuals actually feel.

The policy implications are clear too. Until now, the indicators governments and companies have leaned on to gauge AI diffusion have mostly come from firm-level surveys. This paper shows that such indicators substantially underestimate the real pace of diffusion. Managers now need to think about how to formally support usage that has already spread organically from the ground up, while also addressing the security concerns that come with occupations handling sensitive information.

That said, the paper's estimates carry two distinct lower bounds. One is the adoption rate itself. Passive or embedded AI use that respondents aren't even aware of — autocomplete features, for instance — doesn't get captured in a survey, so the researchers treat their adoption estimate as a floor that likely understates the real number. The other is the productivity-gain estimate. That figure rests on the assumption that time saved translates directly into output, and it doesn't capture the larger productivity gains that could come from redesigning work processes entirely or automating them outright. The researchers explain that this, too, is closer to a lower bound when viewed over the long run. Even so, the measurement framework this paper built, along with the microdata it plans to release, looks set to become a benchmark for tracking generative AI's labor-market impact going forward.

## ✔️ References

- Acemoglu, D. (2025). The simple macroeconomics of AI. *Economic Policy*, 40(121), 13–58. [doi.org/10.1093/epolic/eiae042](https://doi.org/10.1093/epolic/eiae042)
- Barrero, J. M., Bloom, N., & Davis, S. J. (2021). Why working from home will stick (NBER Working Paper No. 28731). National Bureau of Economic Research. [doi.org/10.3386/w28731](https://doi.org/10.3386/w28731)
- Bick, A., & Blandin, A. (2023). Employer reallocation during the COVID-19 pandemic: Validation and application of a do-it-yourself CPS. *Review of Economic Dynamics*, 49, 58–76. [doi.org/10.1016/j.red.2022.11.002](https://doi.org/10.1016/j.red.2022.11.002)
- Bonney, K., Breaux, C., Buffington, C., Dinlersoz, E., Foster, L. S., Goldschlag, N., Haltiwanger, J. C., Kroff, Z., & Savage, K. (2024). Tracking firm use of AI in real time: A snapshot from the Business Trends and Outlook Survey (NBER Working Paper No. 32319). National Bureau of Economic Research. [doi.org/10.3386/w32319](https://doi.org/10.3386/w32319)
- Eloundou, T., Manning, S., Mishkin, P., & Rock, D. (2024). GPTs are GPTs: Labor market impact potential of LLMs. *Science*, 384(6702), 1306–1308. [doi.org/10.1126/science.adj0998](https://doi.org/10.1126/science.adj0998)
- Felten, E., Raj, M., & Seamans, R. (2021). Occupational, industry, and geographic exposure to artificial intelligence: A novel dataset and its potential uses. *Strategic Management Journal*, 42(12), 2195–2217. [doi.org/10.1002/smj.3286](https://doi.org/10.1002/smj.3286)
- Karabarbounis, L. (2024). Perspectives on the labor share. *Journal of Economic Perspectives*, 38(2), 107–136. [doi.org/10.1257/jep.38.2.107](https://doi.org/10.1257/jep.38.2.107)
- McClain, C. (2024, March 26). *Americans' use of ChatGPT is ticking up, but few trust its election information*. Pew Research Center. [pewresearch.org](https://www.pewresearch.org/short-reads/2024/03/26/americans-use-of-chatgpt-is-ticking-up-but-few-trust-its-election-information/)
{: .reflist}

</div>

<div class="block lang-ko" markdown="1">

<a class="linkcard" href="https://doi.org/10.1287/mnsc.2025.02523" target="_blank" rel="noopener"><span class="lc-main"><span class="lc-title">The Rapid Adoption of Generative AI | Management Science</span><span class="lc-desc">Generative artificial intelligence (genAI) is a potentially important new technology, but its impact on the economy depends on the speed and intensity of adoption. This paper reports results from a...</span><span class="lc-url">🔗 doi.org/10.1287/mnsc.2025.02523</span></span><span class="lc-side">The Rapid Adoption of Generative AI</span></a>

> Bick, A., Blandin, A., & Deming, D. J. (2026). The Rapid Adoption of Generative AI. *Management Science*.

## ✔️ 소개 및 요약

<div class="diagram-box" markdown="1">

![기업이 도입 체계를 다 갖추기도 전에, 개인은 이미 생성형 AI를 손에 쥐고 있다](/assets/img/genai-adoption-fig1-illustration.png)

*그림 1. 기업이 도입 체계를 다 갖추기도 전에, 개인은 이미 생성형 AI를 손에 쥐고 있다.*
{: .caption}

</div>

생성형 AI가 경제에 얼마나 영향을 미칠지에 대한 전망은 연구자마다 크게 엇갈린다. 근본 원인은 단순하다. 실제로 얼마나 많은 사람이 AI를 쓰고 있는지 제대로 측정한 데이터가 없었기 때문이다. 세인트루이스 연방준비은행(Federal Reserve Bank of St. Louis), 밴더빌트대(Vanderbilt University), 하버드 케네디스쿨(Harvard Kennedy School) 연구진이 미국 최초의 전국 대표 설문조사를 직접 설계해 이 자리를 채웠다.

2024년 말 기준 미국의 18~64세 인구 중 45.5%가 생성형 AI를 쓰고 있었고, 근로자의 32.1%는 업무에 직접 활용하고 있었다. 각 기술의 첫 대중 시장 제품 출시를 기준으로 비교하면, 이는 PC보다 빠르고 PC와 인터넷 둘 다를 더 큰 격차로 앞선 확산세다. 같은 시기 "우리 회사가 AI를 쓴다"고 답한 기업은 5.3%에 불과했다. 개인의 도입이 조직의 도입을 앞서고 있다는 뜻이다.

## ✔️ 연구 내용 및 논리

도입률 숫자 다음으로 이 논문이 알고자 하는 것은 "누가, 왜 더 빨리 받아들이는가"다.

<div class="sysbox" markdown="1">

- **개인과 조직의 속도 차이**

    근로자 대상 조사(32.1%)와 기업 대상 조사(5.3%)의 격차는 통계 오차로 설명하기 어려운 수준이다. 연구진은 이 격차를 근로자가 조직보다 먼저 신기술을 받아들이고 있다는 신호로 해석하며, Box의 CEO 아론 레비(Aaron Levie)의 비유를 인용해 2010년대 초 직원들이 회사의 공식 승인 없이 클라우드 저장 서비스를 개인 계정으로 먼저 쓰기 시작했던 흐름과 유사하다고 설명한다.

- **직업별 격차와 업무 성격의 관계**

    논문은 12개 직종의 업무용 AI 사용률을 비교했는데, 직종 간 격차가 상당했다. 컴퓨터·수학 직군이 53.6%로 가장 높았고 대인서비스직이 15.8%로 가장 낮아, 최고와 최저 직종 간 격차가 3배가 넘었다. 이 격차가 취향의 문제인지, 실제 업무 성격의 차이인지를 가리려면 별도의 검증이 필요하다. 연구진은 기존 연구가 예측한 "직업별 AI 노출도"와 실제 사용률을 비교했다. 상관관계 0.65~0.71로, 이 격차가 업무 성격에서 비롯된다는 근거를 확보했다.

- **예측이 어긋나는 지점**

    사무행정직과 관리직은 이론상 AI 노출도가 비슷한데 실제 사용률은 관리직이 두 배 이상 높다. 이 어긋남의 원인을 추적한 결과, "AI가 내 일에 도움이 안 된다"는 인식(상관관계 -0.88)이 "회사가 못 쓰게 한다"는 제도적 장벽(-0.30)보다 훨씬 강하게 작용했다. 도입 여부를 가르는 것은 제도보다 체감에 가깝다. 다만 회사의 태도 자체는 별개로 강력한 변수였다. 회사가 사용을 권장한다고 답한 직원의 86%가 실제로 AI를 쓰는 반면, 권장하지 않는다고 답한 직원은 13%만 썼다.

</div>

## ✔️ 데이터 및 방법론

데이터는 RPS(Real-Time Population Survey)다. 2020년부터 운영된 온라인 노동시장 설문조사로, 미국 노동통계국의 공식 고용 통계인 CPS(Current Population Survey)와 문항을 최대한 동일하게 맞춰 설계됐다. 2024년 8월과 11월 두 차례 조사로 1만 명 넘는 응답을 확보했다.

방법론은 이 데이터를 신뢰할 수 있는 결론으로 만들기 위한 세 가지 장치로 구성된다.

<div class="sysbox" markdown="1">

<span class="sysnum">1</span> **비교 기준을 만드는 방식**

"생성형 AI 사용자가 45%다"라는 숫자 하나만으로는 이게 빠른 건지 느린 건지 알 수 없다. 연구진은 새 문항을 만드는 대신, 1984년부터 시행된 CPS의 컴퓨터·인터넷이용 부가조사(CIU)에서 쓰던 질문 틀을 재사용했다. 원래 문항은 "Do you [directly] use a computer for your job?"(업무에 [직접] 컴퓨터를 쓰십니까?)였는데, 연구진은 'directly'가 빠진 2001년 이후 버전을 기준 삼아 "컴퓨터"만 "생성형 AI"로 바꿔 "Do you use Generative AI for your job?"이라고 물었다. 같은 문항 틀을 재사용해 두 기술의 확산세를 같은 기준으로 비교할 수 있게 한 것이다. PC 도입률 자체는 새로 조사할 필요 없이, 1984년 당시 실제로 시행된 CIU 응답 데이터를 그대로 가져와 벤치마크로 삼았다.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">2</span> **표본 편향을 다루는 방식**

온라인 설문은 인터넷을 자주 쓰는 사람이 과대표집될 위험이 있는데, 같은 방식의 설문을 반복해서는 이 문제가 해결되지 않는다. 연구진은 편향의 방향이 서로 다른 세 개의 자료를 겹쳐 놓았다. 다른 조사업체(IncQuery)가 진행한 SWAA(Survey of Working Arrangements and Attitudes, 근무형태·태도 조사, 2024년 12월 시행)와는 전체 도입률이 거의 일치했고(46.5% vs 45.5%), 인터넷 미접속자까지 포함하는 퓨리서치센터 조사(2024년 2월, ChatGPT 사용 경험 27%)도 RPS의 ChatGPT 사용률(32%)과는 다소 차이가 있었지만 큰 틀에서는 유사한 범위였다. 기업 대상 공식 조사인 BTOS(Business Trends and Outlook Survey, 미국 인구조사국이 매달 시행하는 기업동향조사)는 검증용이 아니라, 개인 단위와 기업 단위 측정치의 격차 자체를 보여주는 대조군으로 썼다.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">3</span> **설문 응답을 생산성 수치로 바꾸는 방식**

"몇 시간 아꼈다"는 개인의 체감을 산업 전체의 생산성 수치로 확장하려면 별도의 환산 방법이 필요하다. 연구진은 콥-더글라스 생산함수(자본과 노동 두 투입 요소의 조합으로 산출량을 설명하는 경제학의 표준 생산함수)를 이용해 다음 근사식으로 시간 절약을 산출량 증가율로 환산했다.

<div class="formula">\[\frac{\Delta Y}{Y} \approx (1-\alpha) \times \frac{\sum_i s_i \tilde{w}_i}{\sum_i \ell_i \tilde{w}_i}\]</div>

오른쪽 분수는 전체 근무시간 중 AI가 절약해준 시간의 비율이다. <span class="mvar">s<sub>i</sub></span>는 근로자 <span class="mvar">i</span>가 아낀 시간, <span class="mvar">ℓ<sub>i</sub></span>는 근로자 <span class="mvar">i</span>의 전체 근무시간, <span class="mvar">w̃<sub>i</sub></span>는 평균 대비 상대 임금이다. 고임금 직군의 시간 절약이 산출량에 더 크게 반영되도록 임금으로 가중치를 줬다. <span class="mvar">(1-α)</span>는 노동소득분배율, 즉 전체 생산 중 노동이 차지하는 몫이다. 산업마다 이 값과 AI 사용률이 다르기 때문에, 계산은 산업별로 따로 수행한 뒤 합산했다.

</div>

## ✔️ 연구 결과

핵심은 생성형 AI가 이미 특정 업무 영역에서 눈에 보이는 시간 절약을 만들어내고 있고, 그 절약분이 산업별로 상당한 격차를 보이는 생산성 수치로 이어진다는 점이다.

용도별로 보면 문서·커뮤니케이션 작성(45.1%), 행정 업무(29.9%), 번역·요약(25.9%)에 집중돼 있고, 코딩(15.4%)이나 데이터 분석(10.6%) 같은 기술적 작업의 비중은 상대적으로 낮았다. 시간 절약 효과는 사용자 기준 업무 시간의 5.2%, 비사용자를 포함한 전체 근로자 기준으로는 1.4%였다.

이 수치를 생산함수 모델에 대입하면 산업별 생산성 향상 폭은 부동산업 0.1%부터 전문·과학·기술서비스업 1.7%까지 갈린다. 정보서비스업처럼 AI 사용률과 시간절약률이 모두 높은 산업도, 노동소득분배율이 낮으면 최종 생산성 효과는 상대적으로 작게 나타났다. 전체 경제 차원의 생산성 향상 효과는 1.2%로 추정됐다. 유사한 프레임워크를 쓴 Acemoglu(2025)의 추정치(0.7%)보다 높은데, 차이의 상당 부분은 실제 관측된 AI 도입률이 그 연구의 예측 기반 도입률보다 높았기 때문이다.

## ✔️ 결론

이 논문의 기여는 생성형 AI가 얼마나 쓰이는지를 처음으로 신뢰할 수 있는 숫자로 확정했다는 데 있다. 생성형 AI의 경제적 파급력을 둘러싼 전망이 연구자마다 크게 엇갈렸던 건 실제 도입 실태를 측정한 전국 단위 데이터가 없었기 때문인데, 이 연구는 정부 공식 조사와 동일한 문항 설계로 역사적 비교가 가능한 데이터를 처음 구축했다.

이 데이터는 기존 이론도 검증한다. 어떤 직업이 AI에 더 노출되는지 예측하는 모델들은 이미 있었지만, 그 예측이 실제 행동과 얼마나 맞는지는 확인된 적이 없었다. 이 논문은 그 상관관계를 처음 실증했고, 예측이 빗나가는 지점을 짚어내면서 기존 모델이 놓치고 있는 요인, 즉 개인이 체감하는 실질적 유용성을 드러냈다.

정책적 함의도 뚜렷하다. 지금까지 정부와 기업이 AI 확산을 진단할 때 참고해온 지표는 대부분 기업 대상 조사였다. 이 논문은 그런 지표가 실제 확산 속도를 상당히 과소평가하고 있다는 걸 보여준다. 관리자 입장에서는 이미 자생적으로 퍼진 사용을 어떻게 조직적으로 지원할지, 동시에 민감 정보를 다루는 직군에서 나오는 보안 우려는 어떻게 다룰지 함께 고민해야 한다.

다만 이 연구의 추정치에는 성격이 다른 두 개의 하한선이 존재한다. 하나는 도입률 자체다. 응답자가 인지하지 못하는 수동적·내장형 AI 사용(예: 자동완성 기능)은 설문에 잡히지 않으므로, 연구진은 도입률 추정치 자체를 실제보다 낮게 잡힌 하한선으로 본다. 다른 하나는 생산성 향상 추정치다. 이 수치는 절약한 시간이 그대로 성과로 이어진다는 가정에 기반하며, 업무 프로세스 자체를 재설계하거나 완전히 자동화하는 데서 나올 더 큰 생산성 효과는 잡아내지 못한다. 연구진은 이 역시 장기적 관점에서는 하한선에 가깝다고 설명한다. 그럼에도 이 논문이 구축한 측정 틀과 공개 예정인 마이크로데이터는 앞으로 생성형 AI의 노동시장 영향을 추적하는 기준점이 될 것으로 보인다.

## ✔️ 참고문헌

- Acemoglu, D. (2025). The simple macroeconomics of AI. *Economic Policy*, 40(121), 13–58. [doi.org/10.1093/epolic/eiae042](https://doi.org/10.1093/epolic/eiae042)
- Barrero, J. M., Bloom, N., & Davis, S. J. (2021). Why working from home will stick (NBER Working Paper No. 28731). National Bureau of Economic Research. [doi.org/10.3386/w28731](https://doi.org/10.3386/w28731)
- Bick, A., & Blandin, A. (2023). Employer reallocation during the COVID-19 pandemic: Validation and application of a do-it-yourself CPS. *Review of Economic Dynamics*, 49, 58–76. [doi.org/10.1016/j.red.2022.11.002](https://doi.org/10.1016/j.red.2022.11.002)
- Bonney, K., Breaux, C., Buffington, C., Dinlersoz, E., Foster, L. S., Goldschlag, N., Haltiwanger, J. C., Kroff, Z., & Savage, K. (2024). Tracking firm use of AI in real time: A snapshot from the Business Trends and Outlook Survey (NBER Working Paper No. 32319). National Bureau of Economic Research. [doi.org/10.3386/w32319](https://doi.org/10.3386/w32319)
- Eloundou, T., Manning, S., Mishkin, P., & Rock, D. (2024). GPTs are GPTs: Labor market impact potential of LLMs. *Science*, 384(6702), 1306–1308. [doi.org/10.1126/science.adj0998](https://doi.org/10.1126/science.adj0998)
- Felten, E., Raj, M., & Seamans, R. (2021). Occupational, industry, and geographic exposure to artificial intelligence: A novel dataset and its potential uses. *Strategic Management Journal*, 42(12), 2195–2217. [doi.org/10.1002/smj.3286](https://doi.org/10.1002/smj.3286)
- Karabarbounis, L. (2024). Perspectives on the labor share. *Journal of Economic Perspectives*, 38(2), 107–136. [doi.org/10.1257/jep.38.2.107](https://doi.org/10.1257/jep.38.2.107)
- McClain, C. (2024, March 26). *Americans' use of ChatGPT is ticking up, but few trust its election information*. Pew Research Center. [pewresearch.org](https://www.pewresearch.org/short-reads/2024/03/26/americans-use-of-chatgpt-is-ticking-up-but-few-trust-its-election-information/)
{: .reflist}

</div>
