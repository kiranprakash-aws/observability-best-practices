# メトリクス

メトリクスとは、作成された時刻とともに順序付けて保持される一連の数値です。これは、環境内のサーバー数、ディスク使用量、1 秒あたりの処理リクエスト数、リクエストの完了にかかるレイテンシなど、あらゆるものを追跡するために使用されます。

しかし、メトリクスはインフラストラクチャやアプリケーションモニタリングに限定されるものではありません。むしろ、販売、コールキュー、顧客満足度など、あらゆる種類のビジネスやワークロードを追跡するために使用できます。実際、運用データとビジネスメトリクスを組み合わせることで、包括的な視点と観測可能なシステムを実現できるのです。 

メトリクスの追加のコンテキストを提供している [OpenTelemetry のドキュメンテーションページ](https://opentelemetry.io/docs/concepts/signals/metrics/)を確認することをおすすめします。

## 重要業績評価指標(KPI)を知り、それを測定しましょう!

メトリクスにおいて*最も*重要なことは、*正しいものを測定する*ことです。そしてそれらが何であるかは誰にとっても異なります。
例えば電子商取引アプリケーションでは、重要な KPI として 1 時間あたりの売上高がある一方で、ベーカリーでは 1 日あたりに作られるクロワッサンの数により関心があるでしょう。 

 warning
	ビジネス KPI の完全な単一の情報源はありません。プロジェクトやアプリケーションを十分に理解して、*目標とするアウトプット*が何であるかを知る必要があります。

最初のステップは、上位目標を明示し、その目標のほとんどはインフラからの単一のメトリクスだけでは表現できません。
上記の電子商取引の例では、*メタ*目標である*1 時間あたりの売上高*を特定した後、購入前の商品検索に費やした時間、チェックアウトプロセスの完了に要した時間、商品検索結果のレイテンシなど、より詳細なメトリクスに立ち返ることができます。これにより、システムを観察するのに関連する情報を意図的に収集することができるようになります。 

 success
	KPI を特定したら、ワークロード内のどのメトリクスがそれらに影響を与えるかを*ワーキングバックワード*して確認できます。

## 運用メトリクスデータとの相関

Web サーバーの高い CPU 使用率が応答時間の遅延を引き起こし、それが顧客の不満と最終的に収益の低下につながる場合、CPU 使用率を測定することはビジネスの成果に直接影響を与えるため、*絶対に*測定する必要があります。

または逆に、一時的なクラウドリソース(Amazon EC2 フリートなど)でバッチ処理を実行するアプリケーションの場合、バッチを完了するための最もコスト効果の高い手段を実現するために、CPU を可能な限り利用することが*望ましい*場合があります。

いずれにしても、ビジネスメトリクスと運用データ(CPU 使用率など)を同じシステムに格納して、両方を相関付ける必要があります。

 success
	ビジネスメトリクスと運用メトリクスを、相関付けて両方への影響を観察した結論を導き出せるシステムに格納します。

## 正常な状態がどういう状態かを知る

健全なベースラインがどのような状態かを理解することは難しい場合があります。多くの人は、健全なメトリクスがどのようなものかを理解するために、ワークロードのストレステストを行う必要があります。ただし、ニーズに応じて、現在の運用メトリクスを観察することで、健全なしきい値について安全な結論を導き出すことができます。

健全なワークロードとは、KPI 目標を満たしながらも回復力が高く、可用性が高く、コスト効率の良いバランスが取れた状態です。

 success
	KPI には、パフォーマンスが要求を下回ったり超えたりした場合に、[アラーム](../signals/alarms/) を作成できるように、正常な範囲を特定する必要があります。

## 異常検知アルゴリズムの利用

正常な状態がどういう状態なのかを知る ことの課題は、システム内の*すべての*メトリクスについて正常なしきい値を知ることが現実的でない場合があることです。リレーショナル・データベース・マネジメント・システム (RDBMS) は数十のパフォーマンス・メトリクスを発行でき、マイクロサービス・アーキテクチャと組み合わせると、KPI に影響を与える可能性のあるメトリクスが数百になる可能性があります。

このような大量のデータポイントを監視し、個々の上限値と下限値を特定することは、人間にとって常に実用的というわけではありません。しかし、機械学習はこの種の反復作業に*非常に*適しています。可能な限り自動化と機械学習を活用しましょう。そうすることで、そうでなければ認識すらしなかったであろう問題を特定するのに役立ちます。

 success
	機械学習アルゴリズムと異常検知モデルを使用して、ワークロードのパフォーマンスしきい値を自動的に計算します。
