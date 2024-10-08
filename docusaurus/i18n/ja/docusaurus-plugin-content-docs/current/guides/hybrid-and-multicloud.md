# ハイブリッドとマルチクラウドのためのベストプラクティス

## はじめに

マルチクラウドとは、自社のワークロードを運用するために複数のクラウドサービスプロバイダーを同時に利用することを指し、ハイブリッドとはオンプレミスとクラウドの両方の環境にわたってワークロードを拡張することを指します。ハイブリッドおよびマルチクラウド環境におけるオブザーバビリティは、ツールの多様性、レイテンシー、異種のワークロードにより、複雑性が大幅に増す可能性があります。にもかかわらず、これは開発およびビジネスの両ユーザーにとって共通の目標であり続けています。豊富な製品とサービスのエコシステムがこれに対応しています。

しかし、クラウドネイティブなワークロードのためのオブザーバビリティツールの有用性は劇的に異なる可能性があります。 コンテナ化されたバッチ処理ワークロードの監視と、サーバーレスフレームワークを使用したリアルタイムの銀行アプリケーションの要件の違いを考えてみましょう。両方ともログ、メトリクス、トレースを持っていますが、それらを観察するためのツールチェーンは異なり、クラウドネイティブ、オープンソース、ISV製品が数多く利用可能です。 Prometheusなどのオープンソースツールは、一方で素晴らしい適合となる可能性がありますが、マネージドサービスとして提供されるクラウドネイティブツールの方が要件を満たす可能性が高いでしょう。

これにマルチクラウドとハイブリッドの複雑さが加わると、アプリケーションからの洞察を取得することはかなり難しくなります。

これらの追加の次元に対処し、オブザーバビリティへのアプローチを容易にするために、お客様はしばしば統一されたインターフェイスを持つ単一のツールチェーンに投資する傾向があります。 結局のところ、信号対雑音比を下げることは通常良いことです! しかし、単一のアプローチはすべてのユースケースには機能せず、さまざまなプラットフォームの運用モデルは混乱を招く可能性があります。 私たちの目標は、ニーズに合わせた意思決定を支援し、問題が発生したときの平均復旧時間を短縮することです。 以下は、あらゆる規模のお客様や業界全体での経験から得たベストプラクティスです。

:::info
    これらのベストプラクティスは、エンタープライズアーキテクト、開発者、DevOpsなど、幅広い役割を対象としています。 これらを組織のビジネスニーズの観点から評価し、分散型環境におけるオブザーバビリティがどのように最大限の価値を提供できるかを検討することをお勧めします。
:::
## ツールが判断を左右することがあってはならない

アプリケーション、ツール、プロセスは、売上や顧客満足度の向上などのビジネス目標の達成を支援するために存在します。
技術戦略を立てる際には、こうしたビジネス目標の達成に最大限に貢献できるようなものを選ぶことが大切です。
しかし、目標達成に役立つものは単なるツールであり、戦略そのものではありません。
たとえ家を建設しようとしている場合を考えてみましょう。工具に家の設計や建設方法を尋ねることはありません。
むしろ工具は目的を達成するための手段に過ぎません。

単一かつ同質の環境であれば、ツールの選定は比較的容易です。
なぜなら、1つのアプリケーションを1つの環境で実行している場合、ツールを全体的に同じものを使用できるからです。
しかし、ハイブリッド環境やマルチクラウド環境では状況が異なり、ビジネス目標とこれらの環境にまたがるワークロードの[付加価値](https://arxiv.org/abs/2303.13402)を常に考慮することが重要です。
各クラウドサービスプロバイダー(CSP)には独自のネイティブな可観測性ソリューションがあり、パートナー各社やインディペンデント・ソフトウェア・ベンダー(ISV)の豊富な製品セットも利用できます。

複数の環境で運用しているからといって、すべてのワークロードに1つのツールを使用することが望ましいとは限りません。
むしろ、複数のサービス、フレームワーク、プロバイダーを使用してワークロードを観測する必要がある場合もあります。
詳細は以下の「[シングルパネルよりワークロードのコンテキストが重要]」を参照してください。
とにかく、ツールを実装する際には、将来的に可観測性ソリューションを進化させることができるように「[双方向ドア](https://aws.amazon.com/executive-insights/content/how-amazon-defines-and-operationalizes-a-day-1-culture/)」を作成することを忘れないでください。

以下に、避けるべき「ツール優先」の結果の例を示します。

1. 将来的にアップグレードしたり、新しいソリューションに移行するための双方向ドアなしに、1つのツールの実装に焦点を当てることは、そうでなければ回避できた技術的負債を生み出す可能性があります。この場合、ツールがソリューションとなり、いつの日か解決すべき問題となる可能性があります。

2. ボリュームディスカウントにより、1つのツールを社内標準として使用することになる場合、実際にはその機能の恩恵を受けられないことがあります。これは「コスト優先」で、意図せずにモノリシックなアンチパターンを生み出すことになります。これにより、ボリュームのしきい値以下を維持するためにテレメトリの収集を控えることを促し、結果として可観測性ツールの利用を阻害することにもなりかねません。

3. 既存のトレース収集インフラがないが、ログとメトリクスの収集器が豊富にあるために、特定の種類のテレメトリ(通常はトレース)を収集しないことは、不完全な可観測性ソリューションにつながる可能性があります。

4. 人件費とトレーニングコストの削減を望み、サポートスタッフを1つのツールチェーンのみに特化させることは、他の可観測性パターンの潜在的な価値を低下させることになります。

:::info
    可観測性戦略をツールが左右している場合は、アプローチを逆転させる必要があります。ツールは可観測性を可能にし、強化するためのものです。選択肢を制限するためではありません。
:::

:::info
   ツールの乱立は、企業が実際に直面する大きな問題です。しかし、単一のツールチェーンへの急激な移行は、同様に可観測性ソリューションの有用性を低下させる可能性があります。ハイブリッド環境とマルチクラウド環境のワークロードには、各プラットフォーム固有のテクノロジーがあり、各CSPの高レベルサービスは有用です。ただし、シングルソース製品を使用することのトレードオフについては、価値ベースの分析が必要です。このリスクの一部を軽減するアプローチについては、「[OpenTelemetry への投資]」を参照してください。
:::
## (オブザーバビリティ) データには重力がある

すべてのデータには重力があり、それがワークロード、ソリューション、ツール、人、プロセス、プロジェクトを引き寄せる力となります。たとえば、顧客の取引を含むデータベースは、コンピューティングと分析のワークロードを引き寄せる魅力的な力となります。これは、ワークロードを置く場所、環境、および今後の運用方法に直接影響します。同じことがオブザーバビリティ・シグナルにも当てはまりますが、このデータが生み出す重力は、ワークロードと組織のコンテキストに結びついています 

オブザーバビリティ・テレメトリのコンテキストを、それが関連する基礎となるワークロードやデータから完全に切り離すことはできません。ここでも同じルールが適用されます: テレメトリはデータであり、重力を持っています。これは、シグナルを集約および分析するテレメトリ・エージェント、コレクター、またはシステムを配置する場所に影響を与えるはずです。

:::tip
    オブザーバビリティ・データの時間経過とともにの価値は、ほかのデータ・タイプよりもかなり低くなります。これをオブザーバビリティ・データの「半減期」と呼ぶことができます。テレメトリを別の環境に中継する際の追加のレイテンシを、発生する可能性のある問題に対するアラートの要件と比較衡量しつつ、このデータの強制的な事前評価の低下とみなすことができます。
:::
:::info
    異なる環境間でデータを送信することにビジネス上のメリットがある場合に限り、それを行うことがベストプラクティスです。クエリのための単一のデータソースを用意すること自体、多くのビジネスニーズを満たすわけではなく、望ましくないほど高価なソリューションとなり、障害点も増える可能性があります。
:::
## 一枚のガラスよりもワークロードのコンテキストが重要

よくある要望の1つに、すべてのワークロードを観測するための「シングルパネオブガラス」があります。これは、可能な限りシンプルな方法で、できるだけ多くのデータを表示したいという自然な欲求から生じます。そして、作業の変更、不満、診断時間を減らしたいと考えます。オブザーバビリティソリューション全体を一度に表示できる1つのインターフェイスを作成することは便利ですが、テレメトリデータをその発生元のコンテキストから切り離すというトレードオフが伴う場合があります。 

例えば、100台のサーバーのCPU使用率を示すダッシュボードは、消費に異常なスパイクがあることを示す可能性がありますが、これがなぜ発生したのか、この動作を招く要因は何かを説明することはありません。そして、このメトリクスの重要性がすぐには明らかではないかもしれません。

私たちは、シングルパネオブガラスをあまりにも積極的に追求している顧客を見てきました。その結果、すべてのビジネスコンテキストが失われ、1つのツールですべてを見ようとすることが、実際にはそのデータの価値を希釈してしまうことがあります。ダッシュボードやツールは、物語を伝える必要があります。そして、この物語には、ワークロードのイベントに影響を与えるビジネスメトリクスと結果を含める必要があります。

さらに、ツールは運用モデルに合わせる必要があります。グローバルなサポートチームがすべての環境にアクセスできる場合、シングルパネオブガラスは価値を追加できますが、単一のワークロードや単一のクラウドプロバイダーまたはハイブリッド環境にのみアクセスできる場合は、このアプローチを通じて価値が追加されることはありません。こうした場合、各環境内でネイティブにダッシュボードを作成できるようにすることで、迅速に価値を提供し、将来的な変更にも柔軟に対応できます。

:::info
    オブザーバビリティデータの価値は、その発生源であるアプリケーションと深く統合されています。テレメトリには、その環境からのコンテキスト認識が必要です。ハイブリッドおよびマルチクラウド環境では、テクノロジー間の違いが大きいため、コンテキストの必要性はさらに高まります(ただし、Kubernetesなどのシステムは、クラウドプロバイダーやオンプレミス間で似通っている場合があります)。
:::

:::info
    分散システムのシングルパネオブガラスを構築する際は、ビジネスメトリクスとサービスレベルオブジェクティブ(SLO)を、これらのSLOに貢献する他のデータ(インフラストラクチャメトリクスなど)と同じビューに表示します。これにより、そうでない場合に不足しがちなコンテキストを提供します。  
:::
:::tip
    シングルパネオブガラスは、問題を迅速に診断し、検出時間(MTTD)を短縮して平均復旧時間(MTTR)を改善するのに役立ちますが、これはテレメトリデータの意味を保持できる場合に限られます。保持できない場合、シングルパネオブガラスアプローチは時間を無駄にしたり、運用チームにとってマイナスの影響を及ぼしたりする可能性があります。
:::

:::info
    シングルパネオブガラスの価値を判断できない場合、またはワークロードが単一のクラウドプロバイダーまたはオンプレミス環境に完全に縛られている場合は、上位レベルのビジネスメトリクスのみをシングルパネオブガラスにロールアップし、生のメトリクスやその他の関連要因は元の環境に残すことを検討してください。
:::info
## OpenTelemetry への投資

オブザーバビリティベンダーのランドスケープ全体で、OpenTelemetry(OTel) は事実上の標準となっています。OTEL は各テレメトリタイプを 1 つ以上の Collector に変換でき、これにはクラウドネイティブサービスや、さまざまな SaaS および ISV 製品を含めることができます。OTel エージェントと Collector は、OpenTelemetry Protocol(OTLP)を使用して通信します。これにより、さまざまなデプロイメントパターンを可能にする形式で、シグナルをカプセル化します。

最も価値のあるトランザクショントレースを収集するには、ビジネスとインフラのコンテキストとともに、アプリケーションにトレース収集を統合する必要があります。一部の自動インスツルメンテーションエージェントは、ほとんど労力を必要とせずにこれを実行できます。ただし、最も洗練されたユースケースでは、トランザクショントレースをサポートするためにコード変更が必要です。これにより、技術的負債が発生し、ワークロードが特定のテクノロジーに縛られます。

OTel は、span の概念を使用してログ、メトリクス、トレースをキャプチャします。Span には、単一のトランザクションからグループ化されたこれらのシグナルが含まれ、コンテキスト化された検索可能なオブジェクトにパッケージ化されます。つまり、単一のアプリケーションイベントからのシグナルを 1 つのシンプルなエンティティで表示できるのです。たとえば、Web サイトにログインしているユーザーと、これが統合しているすべてのダウンストリームサービスへのリクエストを、単一の span として提示できます。

:::tip
    OTel はアプリケーショントレースに限定されておらず、ログとメトリクスに広く使用されています。また、[多くの ISV 製品が現在 OTLP を直接受け入れています](https://opentelemetry.io/ecosystem/vendors/)。
:::

:::info
    OTel を使用してアプリケーションにインスツルメンテーションを施すことで、将来的に別のオブザーバビリティプラットフォームに移行する場合でも、アプリケーション層でのインスツルメンテーションの置き換えの必要がなくなります。これにより、オブザーバビリティソリューションの一部が [Two-Way Door](https://aws.amazon.com/executive-insights/content/how-amazon-defines-and-operationalizes-a-day-1-culture/) になります。
:::

:::info
   OTelは、将来の変更に対応可能でスケーラブルであり、アプリケーションコードを変更することなく、収集と分析のシステムを将来的に変更しやすくするため、効率的な [Left Shift](https://www.youtube.com/watch?v=99r7cxKW8Rg) です。
:::