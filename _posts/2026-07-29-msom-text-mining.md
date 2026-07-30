---
layout: post
title: "Can We Measure Service Quality from Review Text, Not Star Ratings?"
title_ko: "별점이 아닌 리뷰 텍스트로 서비스 품질을 잴 수 있을까?"
date: 2026-07-29
category: blog
excerpt_en: "Mejia et al. (2020) · MSOM"
excerpt_ko: "Mejia et al. (2020) · MSOM"
---

<div class="lang-en" markdown="1">

<a class="linkcard" href="https://doi.org/10.1287/msom.2020.0883" target="_blank" rel="noopener"><span class="lc-main"><span class="lc-title">Service Quality Using Text Mining: Measurement and Consequences | Manufacturing & Service Operations Management</span><span class="lc-desc">Problem description: Measuring quality in the service industry remains a challenge. Existing methodologies are often costly and unscalable. Furthermore, understanding how elements of service quality...</span><span class="lc-url">🔗 doi.org/10.1287/msom.2020.0883</span></span><span class="lc-side">Service Quality Using Text Mining</span></a>

> Jorge Mejia, Shawn Mankad, Anandasivam Gopal (2020) Service Quality Using Text Mining: Measurement and Consequences. *Manufacturing & Service Operations Management* 23(6):1354–1372.

## ✔️ Introduction and Summary

When we pick a restaurant, we look at the star rating. But star ratings are harder to trust than they look. Run a review promotion and ratings get inflated; people who each gave two stars had entirely different reasons for it. Someone who gave two stars because the food was bad and someone who gave two stars because they waited an hour are mixed together behind the same number. The actual reason is written out in the review text — you just can't tell from the star rating alone.

The paper covered in this issue takes on exactly this problem: whether service quality can be measured from review text. The authors gathered 130,000 Yelp reviews of Washington, DC restaurants and used text mining (an analytical technique for pulling patterns out of writing) to extract five dimensions of service quality. They then check whether these dimensions are really measuring quality in three stages: an experiment where consumers are asked to classify actual reviews, a comparison against the industry-standard Zagat ratings, and a survival analysis (a statistical technique for seeing what factors affect the timing of a business's closure). To summarize the results: adding these text dimensions to a conventional model that predicted closure using only numeric variables like star rating and review count improved prediction accuracy by 70%.

## ✔️ Research Content and Logic

Service quality has long been measured through surveys. SERVQUAL, a standardized questionnaire, is the best-known example — it uses 22 items to measure the gap between what a customer expected and what they actually received. Asking customers directly is, in fact, the most reliable approach. (Exactly what SERVQUAL is has been linked in the references at the very bottom.)

That said, the authors lay out four limitations of surveys. First, reusing the same questionnaire across different settings is trickier than it sounds, because what customers consider important differs by industry. "The staff was friendly" doesn't carry the same weight toward overall satisfaction at a hospital as it does at a fast-food counter. So building a proper survey means tailoring it to the industry. Second, once you've tailored it that way, comparing similar businesses side by side becomes difficult. Third, survey results are averaged responses, which buries the variation between individual customers. Fourth, running a single round takes considerable time and money, making it hard to scale up to surveying thousands of businesses every year.

The authors' concern, then, is that this makes it hard to compare across businesses or track them over time. Meanwhile, there has already been plenty of research using online reviews, but most of it treated only numeric signals like star ratings and review counts as the object of study. What the authors focus on instead is the text — which actually makes up most of a review. Their logic: a star rating compresses a variety of experiences into a single number that reads differently to different people, whereas the text keeps what was good and what was bad separated out.

So how do you show that what's extracted from the text is genuinely "service quality"? The authors argue three conditions need to be satisfied: it should look that way to a human, it should come out consistently even against existing evaluations, and it should actually hold up in the real world.

First, it should look that way to a human. If a computer classifies a review as being "about wait time," a human reading the same review should read it the same way. A pattern that only a computer can recognize risks being statistical noise rather than quality. Second, it should come out consistently against existing evaluations — meaning it shouldn't clash with a score the same restaurant received through a different evaluation method. The authors use Zagat as the comparison, since it's a number that comes from a completely different route than text analysis — people who actually ate the food. Third, it should actually hold up in the real world. That restaurants with better service do better is a claim long accepted in this field, and if the indicator drawn from text is genuine service quality, this relationship ought to show up in the data too. The authors use closure as the outcome — sales figures aren't obtainable, but whether a business closed can be verified externally. If the first two conditions ask "is this indicator really measuring quality," the third asks "so what actual difference does it make." The paper checks these three in order, and the methodology used to check the third is the survival analysis mentioned above.

<div class="diagram-box" markdown="1">

![논문의 검증 구조](/assets/img/msom-fig1-verification.png)

*Figure 1. The paper's verification structure. Three different methods confirm whether the five dimensions extracted from text are genuinely "service quality."*
{: .caption}

</div>

## ✔️ Data and Methodology

The study covers restaurants in Washington, DC. The authors first built a list of roughly 2,000 restaurants operating as of December 2013, drawn from the DC city government database. For closures, they combed through Yelp, Foursquare, and the local food outlets Eater and Gayot for restaurants that shut down between 2005 and 2013, gathering 575 — which narrowed to 446 once restaurants located in Virginia or Maryland were excluded. They then went through these 446 one by one to confirm whether each had truly closed or simply relocated. Reviews were not scraped from the web but pulled through Yelp's official API. They applied for a research plan in 2013, were approved, and received an API key — but had to collect data within a cap of 5,000 calls per day. Reviews Yelp itself flagged as suspicious were excluded, leaving 130,000 reviews — roughly 50,000 printed pages' worth.

The text was first lowercased, words shorter than three letters and stopwords like "the" and "and" were removed, and stemming was applied (collapsing "values," "valued," and "valuing" all down to "valu"). The core methodology from there is NMF (Non-negative Matrix Factorization). It resembles PCA (principal component analysis) in that it compresses many variables down into a handful of axes, but instead of forcing the axes to sit at right angles to each other, it imposes the constraint that no value can be negative. Applied to text, this constraint is known to produce topics that a human can actually read and interpret. How many axes to split into was decided through cross-validation (a procedure that checks performance by splitting the data repeatedly), yielding five dimensions: overall quality, wait time, food quality, responsiveness, and ambiance.

One thing worth flagging here: these dimensions measure how much a topic comes up as a talking point in a review, not whether it's discussed positively or negatively. Indeed, in the wait-time dimension, the paper gives examples like "it took 30 minutes to make two burgers" alongside "here you don't wait two hours, it's out in five minutes." Both are about wait time, so they land on the same axis. And yet, the results show that the higher this score was, the lower the Zagat service rating and the higher the probability of closure. Wait time simply becoming a talking point in reviews at all turned out to be, on the whole, a bad sign — restaurants where nobody has to wait don't generate that kind of commentary in the first place.

Verification proceeded along three tracks, each covering one of the three conditions mentioned above.

The first is an Amazon MTurk (a platform for recruiting people online to do simple tasks) experiment. Before the main experiment, the authors ran a pilot with undergraduates, and for each dimension that passed the pilot, they recruited 200 participants and ran the study. Participants were shown a single mock restaurant review, displayed on a screen identical to Yelp's, and asked about that restaurant's quality and their intent to visit. The design is 2×2: one axis is whether the dimension's topic is clearly present in the review or faint, and the other is whether the star rating attached to it is high or low. Whether people classified reviews differently from chance was checked with a binomial test (a test comparing results against what you'd get from a coin flip, i.e., 50/50 odds).

<div class="diagram-box" markdown="1">

![MTurk 실험의 2x2 설계](/assets/img/msom-fig2-mturk-design.png)

*Figure 2. The MTurk experiment's 2×2 design.*
{: .caption}

</div>

The second is a comparison with the Zagat guide — a resource where anonymous volunteers' surveys are compiled by a local food-critic editor and scored out of 30 points each across food, décor, and service. Since it only ever existed in book form, the authors hand-coded it from 2005 through 2013 (2009 excluded, since no edition was published that year). Matching by restaurant name, address, and phone number, they obtained 899 restaurants, and the analysis used SUR regression (Seemingly Unrelated Regression — a method that estimates several regression equations at once rather than separately, treating their error terms as correlated with each other).

The third is survival analysis. The 446 closed restaurants were matched to comparable, still-open restaurants using CEM (Coarsened Exact Matching). The reason for matching is this: comparing closed and thriving restaurants wholesale would end up analyzing differences driven by factors other than service quality.

CEM groups values like star rating, review count, price range, and cuisine type into a handful of bins, and pairs only restaurants that fall into identical bins across all of them. For instance, if a closed restaurant sits in the bin "3-point-something stars · 50-something reviews · mid-range price · Italian," it's paired against an open restaurant sitting in that same bin. If no counterpart exists in that bin, the restaurant is dropped from the analysis. Grouping restaurants with similar conditions together is necessary to isolate what the text dimensions themselves are contributing. A panel logit model was then estimated with whether the restaurant closed in the following quarter as the dependent variable, controlling for location, competitive intensity, review length, and readability, with independent variables entered as one-quarter lagged values to reduce reverse-causality concerns.

## ✔️ Findings

To summarize the statistics: what remained after matching was 446 closed and 605 still-open restaurants. There were 2,021 open candidates, of which only about one in three was selected as a match — the rest were dropped because no closed restaurant shared their bin. The two groups had similar average star ratings (3.26 vs. 3.31) and review counts (54.8 vs. 59.5), suggesting the matching worked well. The final panel comprised 16,515 observations across 1,035 restaurants.

**First condition, does it look that way to a human?** People classified reviews with 93%, 90%, and 85% accuracy for the overall-quality, wait-time, and responsiveness dimensions respectively — well above chance. But there's a limitation the authors state candidly here. This accuracy held when the dimension's topic was clearly present in the review; accuracy dropped when the review was faint on that dimension. Wait time in particular was, at the faint end, indistinguishable from chance.

To sum up, unless a review explicitly spells something out — like "it was disappointing because the wait was too long" — people simply can't classify it. The authors attribute this to reviews skewing heavily generous: since the average sits above 4 out of 5 stars, clearly present signals match what people expect and are easy to recognize, but faint or ambiguous text is hard to read the meaning of. The authors leave this as a limitation.

That covers the human side — but there are two dimensions that couldn't even be put to a human: food quality and ambiance. These two never made it into the main experiment, because in the pilot run on undergraduates, people couldn't tell the two dimensions apart. But the authors point to the model, not the people, as the real cause. NMF extracts five axes from the reviews, and these two came out as the fourth and fifth axes — meaning weaker signal. Indeed, looking at the representative words for the two dimensions, terms like "food" and "good" overlap with the overall-quality dimension. Because the boundary between the axes themselves was blurry, it was hard to separate them even when shown to people. The authors are clear, though, that this doesn't mean food quality or ambiance aren't important as service quality.

**Second condition, is it consistent even against existing evaluations?** Compared against Zagat, the system as a whole produced an R² of 0.65. The correspondence is fairly clean, too. Overall quality correlated with all three Zagat categories, and wait time and responsiveness connected to Zagat's service item. The negative coefficient on the wait-time side (−2.99) is exactly as described in the methodology — the more wait time came up as a talking point in reviews, the lower the expert-assigned service score. And food quality corresponded to Zagat's food score, ambiance to décor, respectively. What's worth noting here is that the two dimensions that failed in the MTurk experiment find their footing this time.

**Third condition, does it actually hold up in reality?** The survival analysis shows that the text dimensions are linked to restaurant closure. The higher the overall-quality dimension, the lower the probability of closing the following quarter (p<0.001 — meaning there's less than a 0.1% chance this result occurred by chance — and this held across all four models), while the higher the wait-time dimension, the higher the probability of closure (p<0.01). Earlier it was said that wait time alone only captures one facet of service — this means that facet alone is heavy enough to be tied to closure. Responsiveness was only marginally significant.

What stands out here is that these text dimensions swayed closure more than the average star rating did. Since all variables were entered on the same standardized scale, their magnitudes can be directly compared — and the data backs up the authors' claim that there's simply more information in text than in a star rating. Compared with a conventional model using only numeric variables, model fit improved by 16% on AIC and 10% on BIC, and closure-prediction accuracy rose 70%. Food quality and ambiance, on the other hand, were not significant in any model.

<div class="diagram-box" markdown="1">

![5개 차원이 세 조건을 각각 통과했는지 정리한 표](/assets/img/msom-fig3-dimension-summary.png)

*Figure 3. A table summarizing whether each of the five dimensions passed each of the three verification conditions.*
{: .caption}

</div>

The authors also check the opposite explanation — that it's not declining quality that causes closure, but rather that once a closure decision is made, management simply stops caring. To rule this out, they interviewed people at the National Restaurant Association and confirmed that once a restaurant decides to close, it closes as quickly as possible, and the data itself showed that quality scores stayed flat until about 1.5 months before closure. On top of this, they add the logic that since hundreds of reviewers each wrote independently, it's unlikely they all somehow sensed the closure coming and wrote accordingly. Robustness checks were run quite broadly as well — a Cox model treating closure as a time-to-event outcome, alternative matching methods, controlling for restaurant age, six-month windows instead of quarters, and longer lags — and the results held up across all of them. Even so, the authors themselves stop short of claiming causality.

## ✔️ Conclusion

The paper delivers a way to measure service quality at scale without being tied to any one industry, and confirms that this measured value connects all the way to an outcome — closure. Applying NMF to Yelp review text, the authors extract five dimensions of service quality, verify them through two separate routes — the MTurk experiment and the Zagat comparison — and finally connect them to closure data for Washington, DC restaurants from 2005 to 2013. The result: information that a single star rating alone fails to capture was sitting in the text dimensions, and this information meaningfully contributed to predicting whether a business closed. To borrow a phrase from a National Restaurant Association report, "online reviews can make or break a business" — and this paper backs that claim with data.

To sum it up, the paper takes on two problems together: measuring service quality at scale, and connecting that measurement to a firm's actual performance. This matters because these two things have long been missing in service-quality research. Existing indicators like surveys or wait times can be accurate, but are hard to repeat at scale across industries, and while plenty of research has connected service quality to individual process performance, research connecting it to a firm's overall fate — like whether a restaurant survives — has been rare.

That said, this paper doesn't answer every question, and the authors themselves are clear about its limitations. With no sales data available, they had to rely on closure — a somewhat extreme outcome variable — and this analysis leans on one particular topic-modeling technique, leaving room to verify the same question with other methods.

Even so, the usefulness is clear. Restaurant operators can use this method to see which of their service elements are lacking relative to competitors, and investors or landlords without access to financial information can use it to gauge a business's current standing — this is the practical implication the authors emphasize. A platform like Yelp could, in principle, show dimension-level scores like these instead of a single star rating.

## ✏️ Contributor's Note

While reading this, a project from a "text mining" class kept coming to mind. Instead of surveys, it tried to gauge public opinion by collecting internet posts and comments — the idea was nearly identical to this paper's. The difference is that this paper checks, far more relentlessly, whether the indicator it extracted is really measuring performance. I ended things after crawling with hardly any validation, but this paper asks people, checks against expert evaluations, and connects it all the way to closure. That attitude was the most worth learning from.

Questions remain, too. Would the five dimensions pulled from one city, DC, come out the same way in New York or a smaller regional city? Isn't it possible that even sensitivity to wait time differs from city to city? In the end, this is really a question of whether results extracted in one place hold up somewhere else — which, in deep learning these days, is treated separately under the name "domain generalization." It was reassuring to see a similar concern show up in a different field.

## 📎 References

For readers who want to dig further into the terms and sources mentioned in this piece.

**SERVQUAL** — the tool cited in this piece as the representative "traditional survey method." It measures, across 22 items, the gap between what a customer expected from a service and what they felt they actually received, and organizes the results into five categories: tangibles, reliability, responsiveness, assurance, and empathy. Since its publication in 1988, it has been used as something close to the standard for measuring service quality.

> Parasuraman, A., V. A. Zeithaml, and L. L. Berry. "SERVQUAL: A Multiple-Item Scale for Measuring Consumer Perceptions of Service Quality." *Journal of Retailing* 64(1) (1988): 12–40.
> [semanticscholar.org](https://www.semanticscholar.org/paper/SERVQUAL:-A-multiple-item-scale-for-measuring-of-Parasuraman-Zeithaml/d26a2423f00ca372b424a029ae22521299f00de)

**PCA (Principal Component Analysis)** — a technique for compressing information that would otherwise be tangled across many variables into a handful of representative axes. The NMF used in this paper adds one further condition on top of PCA: every value must be zero or greater.

**CEM (Coarsened Exact Matching)** — a matching technique that groups variable values into a handful of bins, pairs only observations that land in the same bin, and discards any observation left without a match.

> Iacus, S., G. King, and G. Porro. "Causal Inference without Balance Checking: Coarsened Exact Matching." *Political Analysis* 20(1) (2012): 1–24.
> [doi.org/10.1093/pan/mpr013](https://doi.org/10.1093/pan/mpr013)

**Zagat** — the industry-standard rating used as the comparison point in this piece. It's a leading US crowdsourced restaurant-rating publication in which a local food-critic editor compiles anonymous volunteers' surveys and scores food, décor, and service out of 30 points each. During the 2005–2013 period this paper covers, it existed only in book form.

<div class="contrib">
  <div class="cr"><span class="cr-badge">Contributor</span><span class="cr-name">Hyunyul Moon</span></div>
  <div class="cr"><span class="cr-badge editor">Editor</span><span class="cr-name">Jiyoung Song</span></div>
</div>

</div>

<div class="block lang-ko" markdown="1">

<a class="linkcard" href="https://doi.org/10.1287/msom.2020.0883" target="_blank" rel="noopener"><span class="lc-main"><span class="lc-title">Service Quality Using Text Mining: Measurement and Consequences | Manufacturing & Service Operations Management</span><span class="lc-desc">Problem description: Measuring quality in the service industry remains a challenge. Existing methodologies are often costly and unscalable. Furthermore, understanding how elements of service quality...</span><span class="lc-url">🔗 doi.org/10.1287/msom.2020.0883</span></span><span class="lc-side">Service Quality Using Text Mining</span></a>

> Jorge Mejia, Shawn Mankad, Anandasivam Gopal (2020) Service Quality Using Text Mining: Measurement and Consequences. *Manufacturing & Service Operations Management* 23(6):1354–1372.

## ✔️ 소개 및 요약

식당을 고를 때 우리는 별점을 본다. 그런데 별점은 생각보다 믿기 어렵다. 리뷰 이벤트를 걸어놓으면 별점이 후해지기도 하고, 별 2개를 준 사람들도 이유는 제각각이다. 음식이 별로여서 2개를 준 사람과 한 시간을 기다려서 2개를 준 사람이 같은 숫자 뒤에 섞여 있는 것이다. 정작 그 이유는 리뷰 텍스트에 다 적혀 있어서 별점만 보면 알 수 없다.

이번 이슈에서 다룰 논문은 바로 이 문제, 즉 리뷰 텍스트로 서비스 품질을 측정할 수 있는지를 다룬다. 저자들은 워싱턴 DC 레스토랑들의 Yelp 리뷰 13만 건을 모아서 텍스트 마이닝(글에서 패턴을 뽑아내는 분석 기법)으로 서비스 품질의 차원 다섯 개를 뽑아냈다. 그리고 이 차원들이 진짜 품질을 재고 있는지를 세 단계로 확인하는데, 소비자를 모아 실제 리뷰를 분류시키는 실험, 업계 표준인 Zagat 평가와의 비교, 그리고 생존 분석(어떤 요인이 폐업 시점에 영향을 주는지 보는 통계 기법)이다. 결과를 요약하면, 별점과 리뷰 수 같은 숫자 변수만으로 폐업을 예측하던 기존 모형에 이 텍스트 차원들을 더했더니 예측 정확도가 70% 좋아졌다.

## ✔️ 연구 내용 및 논리

서비스 품질은 오래전부터 설문으로 측정해왔다. SERVQUAL 같은 표준화된 설문지가 대표적인데, 22개 문항으로 손님이 기대했던 것과 실제로 받은 것 사이의 격차를 재는 방식이다. 고객에게 직접 물어보는 것이 사실 가장 확실하다. (SERVQUAL이 정확히 무엇인지는 맨 아래 참고 자료에 링크를 달아두었다.)

다만 저자들은 설문에 네 가지 한계가 있다고 정리한다. 첫째, 같은 설문지를 여기저기 그대로 쓰기가 생각보다 까다롭다. 손님이 무엇을 중요하게 보는지가 업종마다 다르기 때문이다. 병원에서 "직원이 친절했다"와 패스트푸드에서 "직원이 친절했다"는 전체 만족에서 차지하는 무게가 같지 않다. 그래서 제대로 된 설문을 만들려면 업종에 맞게 손을 봐야 한다. 둘째, 그렇게 손을 보고 나면 이번엔 비슷한 업체끼리 나란히 놓고 비교하기가 어려워진다. 셋째, 설문 결과는 응답을 평균 낸 값이라 손님마다 다른 부분이 묻힌다. 넷째, 한 번 돌리는 데 시간과 비용이 크게 들어서 수천 개 업체를 매년 조사하는 식으로 늘리기가 어렵다.

그러다 보니 업체끼리 비교하거나 시간에 따라 추적하는 게 어렵다는 것이 저자들의 문제의식이다. 한편 온라인 리뷰를 쓰는 연구는 이미 많았는데, 대부분 별점이나 리뷰 수와 같은 숫자만을 대상으로 했다. 저자들이 주목하는 건 정작 리뷰의 대부분을 차지하는 텍스트 쪽이다. 별점은 여러 가지 경험을 숫자 하나에 눌러 담은 것이라 사람마다 같은 뜻으로 읽히지 않으며, 텍스트에는 어떤 면이 좋고 어떤 면이 나빴는지가 나뉘어 들어있다는 논리다.

그럼 텍스트에서 뽑아낸 게 진짜 "서비스 품질"이라는 걸 어떻게 보일까? 저자들은 세 가지를 만족해야 한다고 본다. 하나는 사람이 봐도 그렇게 보이는지, 하나는 기존 평가와 견줘도 일관되게 나오는지, 나머지 하나는 현실에서 실제로 그렇게 되는지다.

첫째, 사람이 봐도 그렇게 보여야 한다. 컴퓨터가 "이 리뷰는 대기시간 얘기"라고 분류했으면 사람이 같은 리뷰를 읽어도 그렇게 읽혀야 한다는 뜻이다. 컴퓨터만 알아보는 패턴이라면 그건 품질이 아니라 통계적 잡음일 수 있다. 둘째, 기존 평가와 견줘도 일관되게 나와야 한다. 같은 식당을 다른 방식으로 평가한 점수와 어긋나지 않아야 한다는 뜻이다. 저자들은 비교 상대로 Zagat을 쓴다. 사람이 직접 먹어보고 매기는 평가라 텍스트 분석과는 완전히 다른 경로로 나온 숫자다. 셋째, 현실에서 실제로 그렇게 되어야 한다. 서비스가 좋은 가게가 더 잘 된다는 건 이 분야에서 오래 받아들여져 온 주장인데, 텍스트에서 뽑은 지표가 진짜 서비스 품질이라면 이 관계가 데이터에서도 보여야 맞다. 저자들은 결과를 폐업 여부로 잡는다. 매출 자료는 구할 수 없지만 폐업 여부는 밖에서도 확인되기 때문이다. 앞의 둘이 "이 지표가 품질을 재고 있나"를 묻는다면, 셋째는 "그래서 그게 실제로 무슨 차이를 만드나"를 묻는 셈이다. 논문은 이 세 가지를 차례로 확인하고, 세 번째를 확인하는 방법론이 앞에서 언급한 생존 분석이다.

<div class="diagram-box" markdown="1">

![논문의 검증 구조](/assets/img/msom-fig1-verification.png)

*그림 1. 논문의 검증 구조. 텍스트에서 뽑은 5개 차원이 진짜 '서비스 품질'인지를 서로 다른 세 방식으로 확인한다.*
{: .caption}

</div>

## ✔️ 데이터 및 방법론

연구 대상은 워싱턴 DC의 레스토랑이다. 저자들은 DC 시청 데이터베이스에서 2013년 12월 기준 영업 중인 레스토랑 2,000여 곳의 명단을 먼저 만들었다. 폐업한 곳은 Yelp, Foursquare, 그리고 지역 음식 소식을 다루는 Eater와 Gayot을 뒤져서 2005년부터 2013년 사이 문 닫은 575곳을 모았는데, 이 중 버지니아나 메릴랜드에 있는 곳을 빼니 DC 안쪽이 446곳이었다. 그리고 이 446곳이 진짜 폐업한 건지 아니면 그냥 자리를 옮긴 건지를 하나씩 직접 확인했다. 리뷰는 웹에서 긁어오지 않고 Yelp 공식 API로 받았다. 2013년에 연구 계획서를 내서 승인을 받고 열쇠를 받았는데 하루 5,000회까지만 호출할 수 있다는 제한을 지켜가며 모았다고 한다. Yelp가 수상하다고 표시한 리뷰는 제외했고 그렇게 남은 게 13만 건이다. 종이로 치면 5만 페이지쯤 된다.

텍스트는 먼저 소문자로 바꾸고, 세 글자 미만 단어와 the·and 같은 불용어를 지우고, 어간 추출(values·valued·valuing을 전부 valu로 줄이는 식의 처리)을 거쳤다. 그 다음 핵심 방법론이 NMF(비음수 행렬 분해)다. 여러 변수를 몇 개의 축으로 줄인다는 점에서 PCA(주성분 분석)와 닮았는데, 축을 서로 직각으로 두는 대신 모든 값이 음수가 될 수 없다는 제약을 건다. 텍스트에 적용하면 이 제약 덕에 사람이 읽고 해석할 만한 주제가 나온다고 알려져 있다. 몇 개의 축으로 나눌지는 교차검증(데이터를 나눠가며 성능을 확인하는 절차)으로 정했고, 그렇게 5개 차원이 나왔다. 전반적 품질, 대기시간, 음식 품질, 응대성, 분위기다.

여기서 한 가지 짚어둘 게 있다. 이 차원들은 그 주제가 리뷰에서 얼마나 화제가 되는지를 재는 것이지, 좋다 나쁘다를 직접 재는 것이 아니다. 실제로 논문이 예로 든 대기시간 차원 리뷰를 보면 "버거 두 개 만드는 데 30분 걸렸다"도 있고 "여긴 두 시간씩 안 기다려도 되고 5분이면 나온다"도 있다. 둘 다 대기시간 얘기라 같은 축에 실린다. 다만 결과를 보면 이 점수가 높을수록 Zagat 서비스 평가가 낮았고 폐업 확률도 높았다. 대기시간이 리뷰에서 화제가 된다는 것 자체가 대체로 나쁜 신호였던 셈이다. 안 기다려도 되는 집은 애초에 그 얘기를 하지 않기 때문이다.

검증은 세 갈래인데, 앞에서 말한 세 조건을 하나씩 맡는다.

첫째는 아마존 MTurk(온라인으로 사람을 모아 간단한 작업을 맡기는 플랫폼) 실험이다. 본 실험 전에 대학생들로 파일럿을 먼저 돌렸고 통과한 차원에 대해서만 각각 참가자 200명을 모아 진행했다. 참가자에게 가상의 식당 리뷰 하나를 Yelp와 똑같은 화면으로 보여주고 그 식당의 품질과 방문 의향을 물었다. 설계는 2×2다. 그 차원 얘기가 뚜렷한 리뷰인지 희미한 리뷰인지가 한 축이고, 거기 붙은 별점이 높은지 낮은지가 다른 축이다. 사람들이 그냥 찍은 것과 다른지는 이항검정(동전 던지기처럼 반반 확률로 찍었을 때와 결과가 다른지 보는 검정)으로 확인했다.

<div class="diagram-box" markdown="1">

![MTurk 실험의 2x2 설계](/assets/img/msom-fig2-mturk-design.png)

*그림 2. MTurk 실험의 2×2 설계.*
{: .caption}

</div>

둘째는 Zagat 가이드와의 비교다. Zagat은 익명 자원자들이 낸 설문을 지역 음식 평론가인 편집자가 모아서 음식·인테리어·서비스 세 항목에 30점 만점으로 점수를 매기는 자료인데, 책으로만 나오던 거라 2005년부터 2013년까지(2009년은 책이 안 나와서 빠졌다)를 직접 손으로 코딩했다. 식당 이름과 주소, 전화번호로 매칭해서 899곳을 얻었고 분석에는 SUR 회귀(여러 회귀식을 따로 추정하지 않고 오차가 서로 얽혀 있다고 보고 한꺼번에 추정하는 방법)를 썼다.

셋째가 생존 분석이다. 폐업한 446곳을 조건이 비슷한데 계속 영업 중인 곳과 CEM(성긴 정확 매칭)이라는 방법으로 짝지었다. 짝을 맞추는 이유는 이렇다. 문 닫은 식당과 잘 되는 식당을 통째로 비교하면 서비스 품질이 아닌 다른 요소가 달라서 생긴 차이까지 분석하게 되기 때문이다.

CEM은 별점·리뷰 수·가격대·요리 종류 같은 값들을 몇 개 구간으로 뭉뚱그린 뒤 모든 구간이 똑같은 칸에 들어가는 식당끼리만 짝을 짓는다. 예를 들어 폐업한 식당이 "별점 3점대·리뷰 50건대·중간 가격대·이탈리안" 칸에 있으면 영업 중인 식당 중 같은 칸에 있는 곳을 상대로 붙여준다. 그 칸에 상대가 아무도 없으면 그 식당은 분석에서 제외된다. 조건이 비슷한 것끼리 묶어놓고 봐야 텍스트 차원의 몫을 가려낼 수 있기 때문이다. 그다음 분기에 문을 닫는지를 종속변수로 놓고 패널 로짓 모형을 추정했는데, 입지·경쟁 강도·리뷰 길이·가독성을 통제했고 앞뒤가 뒤바뀌는 걸 줄이기 위해 독립변수는 한 분기 앞의 값을 넣었다.

## ✔️ 연구 결과

통계를 요약하면, 매칭을 거쳐 남은 건 폐업 446곳과 영업 605곳이다. 영업 중인 후보는 2,021곳이었는데 그중 셋에 하나 정도만 짝으로 뽑혔다. 나머지는 폐업한 식당과 같은 칸에 들어가는 곳이 없어서 빠졌다. 두 집단은 평균 별점(3.26 대 3.31)이나 리뷰 수(54.8건 대 59.5건)가 비슷해서 매칭이 잘 됐다고 볼 수 있다. 최종 패널은 관측치 16,515개, 식당 1,035곳이다.

첫 번째 조건, 사람이 봐도 그렇게 보이는가. 사람들은 전반적 품질·대기시간·응대성 세 차원에서 각각 93%, 90%, 85%의 정확도로 리뷰를 분류했다. 반반 확률로 찍었을 때보다 한참 높다. 그런데 여기엔 저자들이 솔직하게 적어둔 한계가 있다. 이 정확도는 그 차원 얘기가 뚜렷한 리뷰를 보여줬을 때고, 희미한 리뷰를 보여줬을 때는 정확도가 떨어졌다. 특히 대기시간은 아예 우연 수준과 구별되지 않았다.

정리하면 리뷰에서 "대기시간이 너무 길어서 별로였어요" 와 같이 명시적으로 담겨있지 않다면, 사람들은 분류를 하지 못한다. 저자들은 이것을 리뷰가 워낙 후한 쪽으로 쏠려 있는 탓으로 본다. 5점 만점에 평균이 4점을 넘다 보니 뚜렷하게 담긴 신호는 사람들이 예상하는 바와 맞아떨어져 알아보기 쉽지만, 희미하거나 애매한 텍스트는 무슨 뜻인지 잡아내기 어렵다는 것이다. 저자들은 이걸 한계로 남겨둔다.

여기까지가 사람 쪽 이야기라면, 사람한테 물어보지도 못한 차원이 둘 있다. 음식 품질과 분위기다. 이 둘은 본 실험에 들어가지 못했는데, 대학생들을 대상으로 진행된 파일럿(예비 실험)에서 사람들이 두 차원을 구별하지 못했기 때문이다. 하지만 저자들이 진짜 원인으로 짚는 건 사람이 아니라 모델 쪽이다. NMF는 리뷰에서 5개 축을 뽑는데, 이 둘은 네 번째와 다섯 번째로 나온 축이라 신호가 약했다. 실제로 두 차원의 대표 단어를 보면 food, good 같은 게 전반적 품질 차원과 겹친다. 축 자체의 경계가 흐릿하다 보니 사람한테 보여줘도 갈라내기 어려웠던 것이다. 저자들은 그러면서, 음식 품질이나 분위기가 서비스 품질로서 중요하지 않다는 뜻은 아니라고 분명히 선을 긋는다.

두 번째 조건, 기존 평가와 견줘도 일관되게 나오는가. Zagat 평가와 비교했을 때 시스템 전체의 R²가 0.65로 나왔다. 대응 관계도 꽤 깔끔하다. 전반적 품질은 Zagat의 세 항목 모두와 상관이 있었고 대기시간과 응대성은 Zagat의 서비스 항목과 이어졌다. 대기시간 쪽 계수가 음수(−2.99)로 나온 건 방법론에서 말한 그대로다. 대기시간이 리뷰에서 화제가 될수록 전문가가 매긴 서비스 점수는 낮았다. 그리고 음식 품질은 Zagat의 음식과, 분위기는 인테리어와 각각 대응됐다. 여기서 눈여겨볼 것은 MTurk 실험에서 떨어졌던 그 두 차원이 이번엔 제자리를 찾아간다는 점이다.

세 번째 조건, 현실에서 실제로 그렇게 되는가. 생존 분석을 통해서는 텍스트 차원이 레스토랑의 폐업과 이어진다는 걸 보인다. 전반적 품질 차원이 높을수록 다음 분기에 문 닫을 확률이 낮았고(p<0.001 — 우연히 이런 결과가 나올 확률이 0.1%도 안 된다는 뜻이다. 네 개 모형에서 모두 그랬다), 대기시간 차원이 높을수록 폐업 확률이 높았다(p<0.01). 앞서 대기시간 하나로는 서비스의 한 면밖에 못 본다고 했는데 이 한 면만큼은 폐업까지 이어질 만큼 무겁다는 뜻이기도 하다. 응대성은 한계적으로만 유의했다.

여기서 눈에 띄는 건 이 텍스트 차원들이 평균 별점보다 폐업을 더 크게 좌우했다는 점이다. 변수를 모두 같은 척도로 맞춰서 넣었으니 크기를 직접 견줄 수 있는데, 별점보다 텍스트에 정보가 더 많다는 저자들의 주장을 데이터가 그대로 받쳐준 셈. 숫자 변수만 쓰던 기존 모형과 견주면 모형 적합도가 AIC 기준 16%, BIC 기준 10% 좋아졌고, 폐업을 맞히는 정확도는 70% 올라갔다. 반면 음식 품질과 분위기는 어느 모형에서도 유의하지 않았다.

<div class="diagram-box" markdown="1">

![5개 차원이 세 조건을 각각 통과했는지 정리한 표](/assets/img/msom-fig3-dimension-summary.png)

*그림 3. 5개 차원이 세 조건을 각각 통과했는지 정리한 표.*
{: .caption}

</div>

저자들은 반대 방향의 설명도 점검한다. 품질이 나빠져서 폐업하는 게 아니라 폐업하기로 결정하고 나서 관리를 놓아버린 걸 수도 있으니까. 이걸 확인하려고 전미레스토랑협회 사람들을 인터뷰해서 폐업을 결정하면 최대한 빨리 닫는다는 걸 확인했고, 데이터에서도 폐업 1.5개월 전까지는 품질 점수가 평평하게 유지된다는 걸 보였다. 여기에 더해 리뷰어 수백 명이 각자 따로 쓴 글이라 다들 폐업을 예감하고 썼을 리는 없다는 논리도 덧붙인다. 견고성 검증도 꽤 넓게 했는데, 폐업을 시점 자료로 보는 Cox 모형, 다른 매칭 방법, 식당 나이 통제, 분기 대신 6개월 단위, 더 긴 시차까지 돌려보고 결과가 유지되는 걸 확인했다. 그래도 저자들 스스로 인과관계를 주장하는 건 아니라고 선을 긋는다.

## ✔️ 결론

논문은 서비스 품질을 업종에 매이지 않고 대량으로 재는 방법을 내놓고, 그렇게 측정한 값이 폐업이라는 결과와 이어진다는 것까지 확인했다. Yelp 리뷰 텍스트에 NMF를 적용해 서비스 품질을 다섯 개 차원으로 뽑아내고, 이를 MTurk 실험과 Zagat 평가라는 서로 다른 두 경로로 검증한 뒤, 마지막으로 2005~2013년 워싱턴 DC 레스토랑의 폐업 데이터와 연결했다. 그 결과 별점 하나만으로는 포착되지 않던 정보가 텍스트 차원에 담겨 있었고, 이 정보가 폐업 여부를 예측하는 데도 유의미하게 기여했다. 전미레스토랑협회가 낸 보고서의 표현을 빌리면 "온라인 리뷰는 사업을 살릴 수도, 무너뜨릴 수도 있다"는 것인데, 이 논문은 그 주장을 데이터로 뒷받침한 셈이다.

정리하면 논문은 서비스 품질을 대량으로 측정하는 문제, 그리고 그 측정치를 기업의 실제 성과와 연결하는 문제, 이 두 가지를 함께 다룬 셈이다. 이것이 의미를 가지는 이유는 서비스 품질 연구에서 앞서 언급된 두 가지가 오래 비어 있었기 때문이다. 설문이나 대기시간 같은 기존 지표는 정확할 수 있지만 업종을 넘나들며 대량으로 반복하기 어려웠고, 서비스 품질을 개별 프로세스 성과와 연결한 연구는 많았어도 레스토랑의 생존 여부처럼 기업 전체의 명운과 연결한 연구는 드물었다.

다만 이 논문이 모든 물음에 답한 것은 아니며, 저자들 스스로도 한계를 분명히 밝힌다. 매출 자료가 없어 폐업이라는 다소 극단적인 결과 변수에 의존할 수밖에 없었고, 이번 분석은 특정 토픽 모델링 기법에 기대고 있어 다른 방법으로도 같은 질문을 검증해볼 여지가 남아 있다.

그럼에도 쓸모는 분명하다. 레스토랑 운영자는 이 방법으로 자신의 서비스 요소 중 무엇이 부족한지 경쟁사와 비교해볼 수 있고, 재무 정보에 접근하기 어려운 투자자나 건물주도 업체의 현재 상태를 가늠하는 데 활용할 수 있다는 것이 저자들이 강조하는 실무적 함의다. Yelp 같은 플랫폼이라면 별점 하나 대신 이런 차원별 점수를 보여주는 방식도 가능할 것이다.

## ✏️ 읽고 나서

읽는 동안 '텍스트마이닝' 수업에서 다루었던 프로젝트가 계속 떠올랐다. 설문 대신 인터넷 게시글과 댓글을 모아 여론을 재보려던 거였는데 논문과 발상이 거의 같았다. 차이점이라면 논문은 뽑아낸 지표가 정말 성과를 측정하고 있는지 훨씬 집요하게 확인한다는 것이다. 나는 크롤링 후 별다른 검증없이 끝냈지만 이 논문은 사람에게 물어보고 전문가 평가와 맞춰보고 폐업 여부까지 연결해 본다. 이 부분이 제일 배울 만한 자세였다.

궁금한 것 역시 남는다. DC 한 도시에서 뽑은 다섯 차원이 뉴욕이나 지방 소도시에서도 그대로 나올까? 대기시간에 예민한 정도만 해도 도시마다 다를 가능성은 없는가? 결국 한 곳에서 뽑아낸 결과가 다른 곳에서도 통하는지를 묻는 질문인 셈인데, 어떤 데서 학습한 것이 다른 데서도 통하는지는 요즘 딥러닝 분야에서 도메인 일반화라 부르며 따로 다루는 문제다. 분야는 달라도 비슷한 고민을 하고 있다는 게 반가웠다.

## 📎 참고 자료

이 글에 나온 용어와 자료를 더 보고 싶은 분들을 위해.

**SERVQUAL** — 이 글에서 "전통적인 설문 방식"의 대표로 든 도구. 손님이 서비스에 기대했던 수준과 실제로 받았다고 느낀 수준의 격차를 22개 문항으로 재고, 결과를 유형성·신뢰성·응답성·확신성·공감성 다섯 가지로 정리한다. 1988년에 나온 뒤로 서비스 품질 측정의 표준처럼 쓰여 왔다.

> Parasuraman, A., V. A. Zeithaml, and L. L. Berry. "SERVQUAL: A Multiple-Item Scale for Measuring Consumer Perceptions of Service Quality." *Journal of Retailing* 64(1) (1988): 12–40.
> [semanticscholar.org](https://www.semanticscholar.org/paper/SERVQUAL:-A-multiple-item-scale-for-measuring-of-Parasuraman-Zeithaml/d26a2423f00ca372b424a029ae22521299f00de)

**PCA(주성분 분석)** — 변수가 많을 때 서로 얽힐 정보를 몇 개의 대표 축으로 압축하는 기법. 이 논문이 쓴 NMF는 여기에 "모든 값이 0 이상이어야 한다"는 조건을 더한 것이다.

**CEM(성긴 정확 매칭)** — 변수 값을 몇 개 구간으로 뭉뚱그린 뒤 같은 칸에 들어가는 것끼리만 짝짓고, 짝이 없는 건 버리는 매칭 기법.

> Iacus, S., G. King, and G. Porro. "Causal Inference without Balance Checking: Coarsened Exact Matching." *Political Analysis* 20(1) (2012): 1–24.
> [doi.org/10.1093/pan/mpr013](https://doi.org/10.1093/pan/mpr013)

**Zagat** — 이 글에서 비교 상대로 쓰인 업계 표준 평가. 익명 자원자들의 설문을 지역 음식 평론가인 편집자가 취합해 음식·인테리어·서비스 세 항목에 30점 만점으로 점수를 매기는, 미국의 대표적인 크라우드소싱 기반 레스토랑 평가 매체다. 논문이 다룬 2005~2013년에는 책 형태로만 나왔다.

<div class="contrib">
  <div class="cr"><span class="cr-badge">Contributor</span><span class="cr-name">문현율</span></div>
  <div class="cr"><span class="cr-badge editor">Editor</span><span class="cr-name">송지영</span></div>
</div>

</div>
