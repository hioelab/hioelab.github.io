---
layout: post
title: "TwelveLabs: The AI That Understands Video Like a Person"
title_ko: "TwelveLabs: 영상을 사람처럼 이해하는 AI"
date: 2026-10-16
category: blog
excerpt_en: "The AI startup offering video search and analysis"
excerpt_ko: "영상 검색과 분석 기능을 제공하는 AI 스타트업"
contributor: "Minhee Jo"
contributor_ko: "조민희"
editor: "Jiyoung Song"
editor_ko: "송지영"
---

<div class="lang-en" markdown="1">

<img class="post-logo" style="max-width:680px;width:100%;margin:28px auto 24px;padding:16px 24px;box-sizing:border-box;" src="/assets/img/twelvelabs_logo.gif" alt="TwelveLabs logo">

## A video-understanding AI company founded by comrades from military service

After studying computer science at UC Berkeley in the United States, Lee Jae-sung, CEO of TwelveLabs, volunteered for the Cyber Operations Command of the Republic of Korea Armed Forces. There he threw himself into AI research and met the colleagues with whom he would later found a company. At the time, the Command was deep in AI research aimed at preventing government secrets from leaking through the dark web. For someone with a strong appetite for learning, military life, with free rein to read AI papers, was not hard at all, he says.

The friendships forged in the military grew into a passion for starting a company. Lee still vividly remembers telling Kim Seong-jun, the company's Chief Development Officer, "Let's start a company together," during an overnight duty shift. Because each of them was discharged at a different time, the dream could easily have faded. But Kim, who was discharged first, would bring his laptop every weekend to Star Cafe, the visitors' area of the Ministry of National Defense, to meet Lee and Lee Seung-jun, the Chief Technology Officer, and keep the dream alive. TwelveLabs opened its doors in 2021, once all three had returned to civilian life.

They hypothesized that AI could learn the same way humans understand the world, by seeing, hearing, and touching, and they chose video as the data best suited to that approach. TwelveLabs develops very large AI models that analyze, understand, and describe video. In October 2021, it took first place in the video retrieval track of the "Value Challenge 2021," hosted by Microsoft and the International Conference on Computer Vision. In 2023, NVIDIA decided to invest directly in a Korean AI startup for the first time. That October, the company raised $10 million from investors including NVIDIA, Intel, Samsung Next, and Korea Investment Partners. Lee said he hopes TwelveLabs will be recognized as "the company that handles multimodal video AI best," and that its ultimate aim is to become a company that provides AI technology that is friendly to humanity.

## The potential of video data and the demand in the age of physical AI

Lee chose video because he saw it as the data with the greatest potential in the AI era. According to the interview, he pointed out that roughly 80% of the world's data is video, yet most of it cannot be searched and goes largely unused. He said that the absence of an interface connecting video and AI was an enormous opportunity from a developer's point of view. In the same interview, he explained that today's multimodal large language models (models that understand and process several forms of data in an integrated way) chop video into short pieces or handle it at the level of static frames (still images pulled out of a video), which limits their ability to grasp higher-level context.

Demand is already showing up in industry. A typical example is a broadcaster or OTT service searching tens of thousands of hours of video archives for a specific scene. Maple Leaf Sports & Entertainment (MLSE) in Canada reportedly cut the time it took to find past highlight footage from 16 hours to 9 minutes using TwelveLabs technology. With the arrival of the age of physical AI (AI applied to machines that act directly in the real world), the need for video technology is growing even greater. Lee explained that for robots, drones, and autonomous driving systems to operate safely and effectively, they must perceive their surroundings and judge situations in real time.

This need is also tied to the problem of data for training robots. According to TwelveLabs' official blog, video is already piling up in vehicles, factories, warehouses, and homes, but robot data cannot be collected from the web the way text can. General-purpose robot policy models (models that decide a robot's actions) such as π0 are built on roughly 10,000 hours of teleoperated robot data. In publicly available first-person video datasets, manually labeling (attaching tags to data) one hour of video takes 70 to 155 hours of work, so reviewing and searching it by hand clearly has its limits. The same blog says that language models think but cannot see well, while robots see and react but are weak at judgment and reasoning, and that video intelligence will become the bridge between the two.

## Three capabilities TwelveLabs offers for video

If video is the data with the greatest potential, making it genuinely usable is TwelveLabs' job. The company puts forward an AI that understands the context of video like a person, supporting content search, analysis, summarization, and even automation. TwelveLabs says that being an AI designed around video is what sets it apart from conventional video search and text generation technology. At the center are three capabilities, Search, Analyze, and Embed, and the two models that support them, Marengo and Pegasus.

<div class="sysbox" markdown="1">

<span class="sysnum">1</span> **Search: Describe a scene and it finds that moment**

<img style="display:block;margin:18px auto 16px;border-radius:12px;max-width:100%;" src="/assets/img/twelvelabs_fig1-search.png" alt="TwelveLabs Search illustration">

<p class="caption" style="text-align:center;margin-top:8px;">Source: TwelveLabs official website</p>

Search finds the moment you want when you describe a scene in natural language. TwelveLabs says it delivers results that are not only fast and accurate but also aware of context. Its sample apps include "Who talked about us," which uses semantic search to find influencers well suited for promotion; "Shade finder," which searches video by image to find color shades; and "Crop and seek," which crops specific video content in real time as it searches with text or image queries.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">2</span> **Analyze: Turn video into insights**

<img style="display:block;margin:18px auto 16px;border-radius:12px;max-width:100%;" src="/assets/img/twelvelabs_fig2-analyze.png" alt="TwelveLabs Analyze illustration">

<p class="caption" style="text-align:center;margin-top:8px;">Source: TwelveLabs official website</p>

Analyze generates text from video and automates analysis and insights. It produces many forms of text in real time, from Q&A, summaries, and hashtags to detailed reports, so businesses can quickly get analysis tailored to their needs. Its sample apps include an app that analyzes each platform's unique posts to streamline promoting a video across multiple platforms; "Interview analyzer," which evaluates interview performance based on video content; and "Olympics classification," which classifies sports footage against specific class criteria.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">3</span> **Embed: Express the meaning of video as vectors**

<img style="display:block;margin:18px auto 16px;border-radius:12px;max-width:100%;" src="/assets/img/twelvelabs_fig3-embed.png" alt="TwelveLabs Embed illustration">

<p class="caption" style="text-align:center;margin-top:8px;">Source: TwelveLabs official website</p>

Embed captures the context and nuance of video in vectors (numerical values that represent meaning), making it possible to build experiences that go beyond search, classification, and recommendation. Users can even define their own classifier (a tool that sorts video according to set criteria) in natural language and try it out immediately. Its sample apps include "Fashion AI assistant," which gives personalized fashion recommendations based on text and image queries; "Content Recommender app," a recommendation system that understands video content at the semantic level; and "Zoom Meetings Analysis," which uses AWS AgentCore and Strands Agents to build an enterprise video analysis agent (an AI program that carries out tasks on its own).

</div>

TwelveLabs says these capabilities are used across many industries. The main fields it highlights are media and entertainment, advertising, public sector and security, and the automotive industry. Representative use cases include automatic highlight clip generation, scene selection and editing support, metadata generation and automatic tagging, automatic summaries and headlines, content search and recommendation, real-time scene classification, and context-based ad matching. It also offers developer-friendly APIs and SDKs (tools used to connect features to other programs and to develop with them), so it can be used flexibly from customization through deployment.

## How semantic video search works and the two core models

Behind Search, one of the capabilities introduced above, is "semantic video search," which finds video by meaning rather than by tags. Conventional video search can only find file names, tags that people type in, and speech transcripts, so anything not written in the title or description is effectively nonexistent to search. Semantic video search finds scenes based on what actually happens in the video rather than on labels attached in advance. For example, if you describe "a car swerving sharply to avoid a pedestrian," it can find that scene even if no one tagged it that way.

The key is multimodal embedding, which converts the composition of the screen, motion, sound, dialogue, and on-screen text into a single numerical vector all at once. Because it also captures how these signals change over time, it is said to be able to tell tears of joy from tears of sorrow.

Once a video library has been converted into vectors this way, search queries entered as text or images are converted into vectors in the same space. The video segments closest to the query vector are then ranked and shown, and users can pinpoint the exact moment down to the timestamp. This structure also makes it possible to search freely across text, audio, images, and video, to find similar scenes from an image, or to narrow results by combining text and an image.

Video differs from image and text search in that it has a dimension of time. A scene is defined not only by what appears in a single frame but by motion, sequence, and the interplay of what is seen, heard, and said over a few seconds. In a courtroom video, for instance, the system must work out that a raised hand, a voice raising an objection, and the on-screen caption all belong to the same moment. That is why video is data in which several kinds of information change together over time, not just one, and useful search is possible only if they are modeled together.

<div class="sysbox" markdown="1">

<span class="sysnum">1</span> **Marengo: A model that integrates all information into one for analysis**

Marengo 3.0 is a single multimodal embedding model that jointly analyzes the frames, flow, speech, and sound of video. It processes visual, audio, dialogue, and motion data across 36 languages and returns a single 512-dimensional vector that can be used directly in production search (search used in real services). TwelveLabs says the model outperformed Google VideoPrism-G by +10% on MSR-VTT and +3% on ActivityNet (public evaluation datasets used to compare the performance of video understanding models).

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">2</span> **Pegasus: A model that understands video and puts it into words**

Pegasus 1.5 is a video-specialized language model that builds rich embeddings from video frames and speech recognition data and aligns them with language embeddings (matching video information and language information to each other). It generates natural, context-appropriate text in response to user prompts and handles a range of text generation tasks such as question answering, summarization, and description.

</div>

The two models divide the work. Marengo is used for search, and Pegasus for producing text from video, such as summaries, chapters, and time-based metadata. Using them together removes the need for separate systems built for search and for summarization. In the end, even without people tagging everything one by one, the video itself becomes the index.

## TwelveLabs on the global stage and its goals ahead

The way these capabilities interlock into one video-understanding technology is helping TwelveLabs establish itself as a foundation of the AI era, beyond being a search tool. The company, founded in 2021 by soldiers who had nurtured their dream at Star Cafe, the visitors' area of the Ministry of National Defense, has been named to the global AI startup list "AI 100" by the global research firm CB Insights every year since 2022, four years in a row, and it also drew NVIDIA's first direct investment in a Korean AI startup. With cumulative funding of about 150 billion won (according to News24), it still researches and develops its core AI models in Seoul while carrying that technology to the world market from San Francisco. It is continuing the challenge it began when it entered the U.S. market as a small team.

TwelveLabs aims to become a general-purpose tool like ChatGPT for video and is working on developing video AI agents. It is also expanding into physical AI and defense. Making Korea its Asia-Pacific headquarters and entering Asian markets is also cited as a task ahead. Lee's stated medium- to long-term goal is to become "the basic infrastructure of an era in which every machine understands video like a human." Lee and his colleagues, who said they were "thrilled" to be walking a path no one else was taking, are now trying to give machines eyes to see the world. We watch with anticipation to see what miracle this team, named after Admiral Yi Sun-sin's 12 ships, will accomplish next.

<a class="linkcard" href="https://www.twelvelabs.io/" target="_blank" rel="noopener"><span class="lc-main"><span class="lc-title">TwelveLabs: Video Intelligence Platform & API</span><span class="lc-desc">TwelveLabs delivers enterprise video AI powered by multimodal intelligence. Search, analyze, and understand video across vision, audio, and language.</span><span class="lc-url">🔗 twelvelabs.io</span></span><span class="lc-side">TwelveLabs</span></a>

## References

- Noh, Y. (2024, May 25). [Lee Jae-sung, CEO of TwelveLabs](https://www.forbeskorea.co.kr/news/articleView.html?idxno=339784) [in Korean]. *Forbes Korea*.
- Jeong, Y. (2026, January 22). [\[K-AI Innovators ⑥\] TwelveLabs: "80% of the world's data is video… we will be the ChatGPT of video AI"](https://www.inews24.com/view/1930458) [in Korean]. *News24*.
- TwelveLabs. (2026, September 30). [*Teaching machines how the world works with video intelligence*](https://www.twelvelabs.io/ko/blog/teaching-machines-how-the-world-works-with-video-intelligence).
- TwelveLabs. (n.d.). [*Video AI platform: Search, analyze & embed*](https://www.twelvelabs.io/ko/product/product-overview). Retrieved October 16, 2026.
- TwelveLabs. (2026, September 7). [*What is semantic video search?*](https://www.twelvelabs.io/ko/blog/what-is-semantic-video-search)
- TwelveLabs. (2026, June 30). [The people building TwelveLabs: Yoon Kim, CSO](https://www.twelvelabs.io/ko/blog/people-building-twelvelabs-yoon) [in Korean].
{: .reflist}

</div>

<div class="block lang-ko" markdown="1">

<img class="post-logo" style="max-width:680px;width:100%;margin:28px auto 24px;padding:16px 24px;box-sizing:border-box;" src="/assets/img/twelvelabs_logo.gif" alt="트웰브랩스 로고">

## 군 복무 중 만난 동료들이 세운 영상 이해 AI 기업

이재성 트웰브랩스(TwelveLabs) 대표는 미국 UC버클리대에서 컴퓨터공학을 공부한 뒤 국군 사이버작전사령부에 자원했다. 그는 그곳에서 AI 연구에 몰두하며 훗날 함께 창업할 동료들을 만났다. 당시 사이버작전사령부에서는 다크웹을 통한 정부 기밀문서 유출을 막기 위한 AI 연구가 한창이었다. AI 논문을 마음껏 읽을 수 있는 군 생활은 학구열 높은 그에게 힘들지 않았다고 한다.

군에서 쌓은 우정은 창업에 대한 열정으로 이어졌다. 이 대표는 당직 근무 중 김성준 개발총괄이사에게 “같이 창업해요”라고 말했던 기억이 지금도 생생하다고 말했다. 전역 시기가 저마다 달라 꿈이 묻힐 수도 있었다. 하지만 먼저 전역한 김 이사가 주말마다 노트북을 들고 국방부 면회처인 스타카페를 찾아 이 대표와 이승준 기술총괄이사를 만나 꿈을 키워갔다. 이들이 모두 민간인 신분이 된 2021년 트웰브랩스가 문을 열었다.

이들은 인간이 보고 듣고 만지며 세상을 이해하듯 AI도 같은 방식으로 학습할 수 있다는 가설을 세웠고 그에 가장 적합한 데이터로 영상을 택했다. 영상을 분석하고 이해하며 설명하는 초거대 AI 모델을 개발하는 트웰브랩스는 2021년 10월 마이크로소프트와 국제컴퓨터비전학술대회가 주최한 ‘밸류 챌린지 2021’ 영상 검색 트랙에서 1위를 차지했다. 2023년에는 엔비디아가 처음으로 국내 AI 스타트업에 직접 투자하기로 결정했다. 그해 10월에는 엔비디아를 비롯해 인텔, 삼성넥스트, 한국투자파트너스 등에서 1000만 달러 규모 투자금을 유치했다. 이 대표는 트웰브랩스가 “멀티모달 영상 AI를 가장 제대로 다루는 기업으로 인식되길 바란다”며 궁극적으로는 친인류적인 AI 기술을 제공하는 기업이 되겠다는 포부를 밝혔다.

## 영상 데이터의 잠재력과 피지컬 AI 시대의 수요

이재성 대표가 영상을 택한 것은 영상이 AI 시대에 가장 큰 잠재력을 가진 데이터라고 보았기 때문이다. 인터뷰에 따르면 이 대표는 전 세계 데이터의 약 80%가 영상 형태임에도 대부분 검색이 안 되고 제대로 활용되지 못하고 있다고 짚었다. 그는 영상과 AI를 연결하는 인터페이스가 없었던 점이 개발자 입장에서는 엄청난 기회였다고 말했다. 같은 인터뷰에서 이 대표는 현존하는 멀티모달(여러 형태의 데이터를 통합적으로 이해하고 처리하는) 거대언어모델이 영상을 짧게 쪼개거나 정적 프레임(영상에서 뽑아낸 정지 이미지) 수준으로 처리해 고차원적 맥락을 이해하는 데 한계가 있다고 설명했다.

수요는 이미 산업 현장에서 나타나고 있다. 방송사나 OTT 서비스가 수만 시간의 영상 아카이브에서 특정 장면을 검색하는 것이 대표적이다. 캐나다의 메이플 리프 스포츠 앤드 엔터테인먼트(MLSE)는 트웰브랩스 기술로 과거 하이라이트 영상을 찾는 시간을 16시간에서 9분으로 줄였다고 한다. 여기에 피지컬 AI(현실 세계에서 직접 움직이는 기계에 적용되는 AI) 시대가 열리면서 영상 기술의 필요성은 더욱 커지고 있다. 이 대표는 로봇이나 드론, 자율주행 시스템이 안전하고 효과적으로 작동하려면 실시간으로 주변 환경을 인식하고 상황을 판단해야 한다고 설명했다.

이 필요성은 로봇 학습에 쓸 데이터 문제와도 맞닿아 있다. 트웰브랩스 공식 블로그에 따르면 영상은 이미 차량, 공장, 창고, 가정에 쌓이고 있지만 로봇 데이터는 텍스트처럼 웹에서 수집할 수 없다. π0 같은 범용 로봇 정책 모델(로봇의 행동을 결정하는 모델)은 약 1만 시간의 원격조작 로봇 데이터에 기반한다. 공개된 1인칭 영상 데이터셋 기준으로 영상 1시간을 사람이 직접 라벨링(데이터에 이름표를 붙이는 작업)하는 데는 70~155시간의 작업이 드는 만큼 수작업으로 검토하고 검색하기에는 한계가 분명하다는 것이다. 같은 블로그는 언어 모델은 생각하지만 잘 보지 못하고 로봇은 보고 반응하지만 판단과 추론을 잘 하지 못한다고 하면서 영상 지능이 이 둘 사이를 잇는 다리가 될 것이라고 설명한다.

## 트웰브랩스가 영상으로 제공하는 세 가지 기능

영상이 가장 큰 잠재력을 가진 데이터라면 이를 실제로 쓸 수 있게 만드는 것이 트웰브랩스의 몫이다. 트웰브랩스는 사람처럼 영상의 맥락을 이해하는 AI를 내세워 콘텐츠 검색, 분석, 요약, 자동화까지 지원한다. 영상 중심으로 설계된 AI라는 점이 기존 영상 검색과 텍스트 생성 기술을 뛰어넘는 차이를 만든다는 것이 이 회사의 설명이다. 그 중심에는 Search, Analyze, Embed 세 가지 기능과 이를 뒷받침하는 Marengo와 Pegasus 두 가지 모델이 있다.

<div class="sysbox" markdown="1">

<span class="sysnum">1</span> **Search: 장면을 설명하면 그 순간을 찾아낸다**

<img style="display:block;margin:18px auto 16px;border-radius:12px;max-width:100%;" src="/assets/img/twelvelabs_fig1-search.png" alt="트웰브랩스 Search 기능 이미지">

<p class="caption" style="text-align:center;margin-top:8px;">출처: 트웰브랩스 공식 홈페이지</p>

Search는 자연어로 원하는 장면을 설명하면 그 순간을 찾아주는 기능이다. 트웰브랩스는 빠르고 정확할 뿐 아니라 맥락까지 이해하는 검색 결과를 제공한다고 소개한다. 샘플 앱으로는 의미 기반 검색으로 홍보에 적합한 인플루언서를 찾는 ‘Who talked about us’, 이미지로 영상을 검색해 색조(shade)를 찾는 ‘Shade finder’, 텍스트나 이미지 검색어로 특정 영상 콘텐츠를 실시간 크롭하며 찾는 ‘Crop and seek’가 있다.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">2</span> **Analyze: 영상을 인사이트로 바꾼다**

<img style="display:block;margin:18px auto 16px;border-radius:12px;max-width:100%;" src="/assets/img/twelvelabs_fig2-analyze.png" alt="트웰브랩스 Analyze 기능 이미지">

<p class="caption" style="text-align:center;margin-top:8px;">출처: 트웰브랩스 공식 홈페이지</p>

Analyze는 영상에서 텍스트를 생성하고 분석과 인사이트를 자동화하는 기능이다. Q&A와 요약, 해시태그는 물론 상세 리포트까지 다양한 형태의 텍스트를 실시간으로 생성하며 비즈니스에 특화된 분석 결과를 빠르게 얻을 수 있다. 샘플 앱으로는 플랫폼별 고유 게시물을 분석해 여러 플랫폼에 걸친 영상 홍보 과정을 간소화하는 앱, 영상 내용을 바탕으로 면접 수행을 평가하는 ‘Interview analyzer’, 스포츠 영상을 특정 클래스 기준으로 분류하는 ‘Olympics classification’이 있다.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">3</span> **Embed: 영상의 의미를 벡터로 표현한다**

<img style="display:block;margin:18px auto 16px;border-radius:12px;max-width:100%;" src="/assets/img/twelvelabs_fig3-embed.png" alt="트웰브랩스 Embed 기능 이미지">

<p class="caption" style="text-align:center;margin-top:8px;">출처: 트웰브랩스 공식 홈페이지</p>

Embed는 영상의 맥락과 뉘앙스를 벡터(의미를 숫자로 나타낸 값)에 담아 검색과 분류, 추천을 넘어서는 경험을 만들 수 있게 하는 기능이다. 자연어로 나만의 분류기(영상을 정해진 기준에 따라 나누는 도구)를 지정하고 즉시 실행해 볼 수도 있다. 샘플 앱으로는 텍스트와 이미지 검색어를 바탕으로 개인화된 패션 추천을 제공하는 ‘Fashion AI assistant’, 영상 콘텐츠를 의미 수준에서 이해하는 추천 시스템 ‘Content Recommender app’, AWS AgentCore와 Strands Agent로 기업용 영상 분석 에이전트(스스로 작업을 수행하는 AI 프로그램)를 만드는 ‘Zoom Meetings Analysis’가 있다.

</div>

트웰브랩스는 이 기능들이 여러 산업에서 쓰인다고 소개한다. 주요 활용 분야로 꼽는 곳은 미디어 및 엔터테인먼트, 광고, 공공 및 보안, 자동차 산업이다. 대표 사례로는 하이라이트 클립 자동 생성, 장면 선택 및 편집 지원, 메타데이터 생성 및 자동 태깅, 요약과 헤드라인 자동 생성, 콘텐츠 검색과 추천, 실시간 장면 분류, 컨텍스트 기반 광고 매칭 등이 있다. 개발자 친화적인 API와 SDK(다른 프로그램에 기능을 연결하고 개발하는 데 쓰는 도구)도 제공해 커스터마이징부터 배포까지 유연하게 쓸 수 있다.

## 시맨틱 영상 검색의 원리와 두 가지 핵심 모델

앞서 소개한 기능 중 Search의 바탕에는 영상을 태그가 아닌 의미로 찾는 ‘시맨틱 영상 검색’이 있다. 기존 영상 검색은 파일명, 사람이 입력한 태그, 음성 전사 텍스트만 찾을 수 있어서 제목이나 설명에 적히지 않은 내용은 검색에서 사실상 존재하지 않는 것과 같다. 시맨틱 영상 검색은 사람이 미리 붙인 라벨이 아니라 영상에서 실제로 일어나는 일을 기준으로 장면을 찾는다. 예를 들어 ‘보행자를 피하려고 급히 방향을 트는 자동차’처럼 설명하면 아무도 그렇게 태그하지 않았더라도 해당 장면을 찾아낼 수 있다는 것이다.

핵심은 멀티모달 임베딩이다. 화면 구성과 움직임, 소리, 대사, 화면 속 글자를 한꺼번에 하나의 숫자 벡터로 바꾸는 방식이다. 시간에 따라 이 신호들이 어떻게 변하는지까지 담기 때문에 같은 눈물이라도 기쁨의 눈물인지 슬픔의 눈물인지 구분할 수 있다고 한다.

영상 라이브러리가 이렇게 벡터로 바뀌고 나면 글이나 이미지로 입력한 검색어도 같은 공간의 벡터로 변환된다. 그다음 검색어 벡터와 가장 가까운 영상 구간을 순위로 보여주고 사용자는 타임스탬프 단위로 정확한 순간을 찾을 수 있다. 이 구조 덕분에 텍스트, 오디오, 이미지, 영상 사이에서 자유롭게 검색하는 것도 가능하며 이미지로 비슷한 장면을 찾거나 글과 이미지를 함께 넣어 결과를 좁힐 수도 있다.

영상에는 시간이라는 차원이 있다는 점이 이미지나 텍스트 검색과 다르다. 한 장면은 한 프레임에 보이는 것만이 아니라 움직임, 순서, 몇 초에 걸쳐 보이고 들리고 말해진 것의 상호작용으로 정의된다. 법정 영상에서 손을 든 모습, 이의를 제기하는 음성, 화면 속 자막이 같은 순간에 속한다는 것을 알아내야 하는 식이다. 그래서 영상은 하나가 아닌 여러 종류의 정보가 시간에 따라 함께 변하는 데이터이며 이를 함께 모델링해야 쓸모 있는 검색이 가능하다.

<div class="sysbox" markdown="1">

<span class="sysnum">1</span> **Marengo: 모든 정보를 하나로 통합해 분석하는 모델**

Marengo 3.0은 영상의 프레임, 플로우, 음성, 소리를 통합 분석하는 단일 멀티모달 임베딩 모델이다. 시각, 오디오, 대사, 모션 데이터를 36개 언어에 걸쳐 처리하고 프로덕션 검색(실제 서비스에 쓰이는 검색)에 바로 쓸 수 있는 단일 512차원 벡터를 반환한다. 트웰브랩스는 이 모델이 Google VideoPrism-G 대비 MSR-VTT와 ActivityNet(영상 이해 모델의 성능을 비교하는 공개 평가 데이터셋) 기준으로 각각 +10%, +3%의 성능을 기록했다고 소개한다.

</div>

<div class="sysbox" markdown="1">

<span class="sysnum">2</span> **Pegasus: 영상을 이해하고 글로 풀어내는 모델**

Pegasus 1.5는 영상 프레임과 음성 인식 데이터를 풍부한 임베딩으로 구성하고 이를 언어 임베딩과 정렬(영상 정보와 언어 정보를 서로 대응시키는 일)하는 비디오 특화 언어모델이다. 사용자의 프롬프트에 따라 자연스럽고 문맥에 맞는 텍스트를 생성하며 질문 응답, 요약, 설명 등 다양한 텍스트 생성 작업을 수행한다.

</div>

역할은 두 모델이 나눠 맡는다. 검색에는 Marengo가, 영상에서 요약과 챕터, 시간별 메타데이터 같은 텍스트를 만드는 데는 Pegasus가 쓰인다. 이 둘을 함께 쓰면 검색과 요약을 따로 만든 서로 다른 시스템 없이 처리할 수 있다. 결국 사람이 일일이 태그를 붙이지 않아도 영상 자체가 곧 색인이 되는 셈이다.

## 글로벌 무대에 선 트웰브랩스와 앞으로의 목표

여러 기능이 하나의 영상 이해 기술로 맞물려 돌아가는 구조는 트웰브랩스가 검색 도구를 넘어 AI 시대의 기반으로 자리 잡는 밑거름이 되고 있다. 국방부 면회처 스타카페에서 꿈을 키우던 병사들이 전역 후 2021년 문을 연 이 회사는 글로벌 리서치 기업 CB인사이트의 글로벌 100대 AI 스타트업 ‘AI 100’에 2022년부터 4년 연속 이름을 올렸고 엔비디아의 첫 국내 AI 스타트업 직접 투자까지 이끌어냈다. 누적 투자금이 약 1500억원(아이뉴스24 보도 기준)에 이르는 지금도 서울에서는 핵심 AI 모델을 연구하고 개발하며 샌프란시스코에서는 그 기술을 세계 시장에 전하고 있다. 작은 규모로 미국 시장에 진출했던 도전을 이어가고 있는 것이다.

트웰브랩스는 영상 분야의 챗GPT 같은 범용 도구를 지향하며 영상 AI 에이전트 개발을 목표로 하고 있다. 피지컬 AI와 국방 분야로도 영역을 넓히고 있다. 한국을 아시아태평양 본부로 삼아 아시아 시장에 진출하는 것도 과제로 꼽힌다. 이 대표가 밝힌 중장기 목표는 “모든 기계가 영상을 사람처럼 이해하는 시대의 기본 인프라”가 되는 것이다. 아무도 걷지 않던 길에서 “신이 났다”고 말하던 이 대표와 동료들이 이제는 기계에게 세상을 보는 눈을 주려 하고 있다. 이순신 장군의 12척의 배에서 이름을 따왔다는 이 팀이 또 한 번 어떤 기적을 만들어낼지 설렘을 안고 지켜보게 된다.

<a class="linkcard" href="https://www.twelvelabs.io/ko/" target="_blank" rel="noopener"><span class="lc-main"><span class="lc-title">TwelveLabs: Video Intelligence Platform & API</span><span class="lc-desc">TwelveLabs delivers enterprise video AI powered by multimodal intelligence. Search, analyze, and understand video across vision, audio, and language.</span><span class="lc-url">🔗 twelvelabs.io/ko</span></span><span class="lc-side">TwelveLabs</span></a>

## 참고 자료

- 노유선 (2024.5.25). [이재성 트웰브랩스 대표](https://www.forbeskorea.co.kr/news/articleView.html?idxno=339784). 포브스코리아.
- 정유림 (2026.1.22). [\[K-AI 이노베이터⑥\] 트웰브랩스 “전 세계 데이터 80%가 영상…영상 AI 분야의 챗GPT 될 것”](https://www.inews24.com/view/1930458). 아이뉴스24.
- 트웰브랩스 (2026.9.30). [Teaching Machines How the World Works with Video Intelligence](https://www.twelvelabs.io/ko/blog/teaching-machines-how-the-world-works-with-video-intelligence).
- 트웰브랩스 (2026.10.16 열람). [Video AI Platform: Search, Analyze & Embed](https://www.twelvelabs.io/ko/product/product-overview).
- 트웰브랩스 (2026.9.7). [What Is Semantic Video Search?](https://www.twelvelabs.io/ko/blog/what-is-semantic-video-search)
- 트웰브랩스 (2026.6.30). [트웰브랩스를 만드는 사람들 – 김윤 CSO](https://www.twelvelabs.io/ko/blog/people-building-twelvelabs-yoon).
{: .reflist}

</div>
