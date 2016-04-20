# AngularJS アプリケーションプログラミング

## もくじ

- [x] 1. [イントロダクション](01/)
- [x] 2. [AngularJS の基本](02/)
- [x] 3. [ディレクティブ](03/)
  - 3.2 バインド関連のディレクティブ
    - 3.2.1 バインド式を属性値として指定する - `ng-bind`
    - 3.2.2 Angular 式による画面のチラツキを防ぐ - `ng-cloak`
    - 3.2.3 データバインドを無効化する - `ng-non-bindable`
    - 3.2.4 HTML文字列をバインドする - `ng-bind-html`
    - 3.2.5 テンプレートをビューにバインドする - `ng-bind-template`
    - 3.2.6 数値によってバインドする文字列を変化させる - `ng-plurlize`
  - 3.3 外部リソース関連のディレクティブ
    - 3.3.1 アンカータグを動的に生成する - `ng-href` 
    - 3.3.2 画像を動的に生成する - `ng-src/ng-srcset`
    - 3.3.3 補足: `<iframe>/<object>` などで別ドメインのリソースを取得する - `$sce`
    - 3.3.4 別ファイルのテンプレートを取得する - `ng-include`
    - 3.3.5 インクルードするテンプレートを先読みする - `script`
  - 3.4 イベント関連のディレクティブ
    - 3.4.1 イベント関連の主なディレクティブ
    - 3.4.2 イベント情報を取得する - `$event`
  - 3.5 制御関連のディレクティブ
    - 3.5.1 要素にスタイルプロパティを付与する - `ng-style`
    - 3.5.2 要素にスタイルクラスを付与する - `ng-class` 
    - 3.5.3 式の真偽によって表示/非表示を切り替える(1) - `ng-if`
    - 3.5.4 式の真偽によって表示/非表示を切り替える(2) - `ng-show/ng-hide`
    - 3.5.5 式の真偽に応じて詳細の表示/非表示を切り替える - `ng-open`
    - 3.5.6 式の値によって表示を切り替える - `ng-switch`
    - 3.5.7 配列/オブジェクトをループ処理する - `ng-repeat`
    - 3.5.8 偶数/奇数行に対してだけスタイルを適用する - `ng-class-even/ng-class-odd`
    - 3.5.9 モデルの初期値を設定する - `ng-init`
  - 3.6 フォーム関連のディレクティブ
    - 3.6.1 入力ボックスで利用できる属性 - `<input>/<textarea>` 要素
    - 3.6.2 フォームよその値が変更された時の処理を定義する - `ng-change`
    - 3.6.3 ラジオボタンを設置する - `<input type="radio">`
    - 3.6.4 チェックボックスを設置する - `<input type="checkbox">`
    - 3.6.5 チェックボックスのオンオフを切り替える - `ng-checked`
    - 3.6.6 選択ボックスを設置する - `<select>` `ng-options`
    - 3.6.7 テキストボックスの内容を区切り文字で分割する - `ng-list`
    - 3.6.8 フォーム要素を読み取り専用/利用不可にする - `ng-disabled/ng-readonly`
    - 3.6.9 フォームの状態を検知する
  - 3.7 その他のディレクティブ
    - 3.7.1 メッセージの表示/非表示を条件に応じて切り替える - `ng-messages`
    - 3.7.2 モデルの更新方法を設定する - `ng-model-options`
    - 3.7.3 Content Security Policy を利用する - `ng-csp`
    - 3.7.4 要素の表示/非表示時にアニメーションを適用する - `ngAnimate`
- [x] 4. [フィルター](04/)
  - 4.1 フィルター基本
    - 4.1.1 テンプレートからのフィルター利用
    - 4.1.2 JavaScript からのフィルター利用
  - 4.2 文字列関連のフィルター
    - 4.2.1 文字列を大文字⇔小文字に変換する - `lowercase/uppercase` 
    - 4.2.2 オブジェクトをJSON形式に変換する - `json`
    - 4.2.3 URL/メールアドレスをリンク整形する - `linky` フィルター
  - 4.3 配列関連のフィルター
    - 4.3.1 配列をソートする - `orderBy`
    - 4.3.2 例: ソート可能なテーブルを作成する
    - 4.3.3 配列の件数を制限する - `limitTo`
    - 4.3.4 配列を特定の条件で絞り込む - `filter`
- [x] 5. [サービス](05/)
  - 5.1 サービスの基本
  - 5.2 非同期通信の実行 - `$http` サービス
    - 5.2.1 `$http` サービスの基本
    - 5.2.2 HTTP POST による非同期通信
    - 5.2.3 JSON 形式の Web API にアクセスする
    - 5.2.4 非同期通信時のデフォルト値を設定する
  - 5.3 HTTP 経由で CRUD 処理 - `$resource` サービス
    - 5.3.1 サーバーサイドの準備
    - 5.3.2 クライアントサイドの実装
    - 5.3.3 `resource` オブジェクトの生成
    - 5.3.4 アクションの実行
  - 5.4 ルーティング - `$routeProvider` プロバイダー
    - 5.4.1 ルーティングの基本
    - 5.4.2 `$routeProvider.when` メソッドのパラメーター
    - 5.4.3 例: 決められたルールで別のルートにリダイレクトする
    - 5.4.4 例: コントローラーの処理前に任意の処理を挿入する
  - 5.5 標準オブジェクトのラッパー
    - 5.5.1 指定された時間単位に処理を実行する - `$interval` サービス
    - 5.5.2 指定時間の経過によって処理を実行する - `$timeout` サービス
    - 5.5.3 ページのアドレス情報を取得/設定する - `$location` サービス
  - 5.6 Promise による非同期処理 - `$q` サービス
    - 5.6.1 Promise の基本
    - 5.6.2 非同期処理の連結
    - 5.6.3 例: 現在地から日の入り時刻を求める
    - 5.6.4 複数の非同期処理を監視する
  - 5.7 その他のサービス
    - 5.7.1 クッキーを登録/削除する - `$cookies/$cookiesProvider`
    - 5.7.2 開発者ツールにログを出力する - `$log/$logProvider`
    - 5.7.3 アプリ共通の例外処理を定義する - `$exceptionHandler`
    - 5.7.4 非 AngularJS アプリで AngularJS のサービスを利用する - `$injector`
    - 5.7.5 モバイルデバイスへの対応 - `$swipe`
  - 5.8 グローバル API
    - 5.8.1 AngularJS の現在のバージョン情報を取得する - `version`
    - 5.8.2 オブジェクトが等しいかどうかを判定する - `equals` メソッド
    - 5.8.3 変数の型を判定する - `isXxxxx` メソッド
    - 5.8.4 文字列を大文字/小文字変換する - `lowercase/uppercase` メソッド
    - 5.8.5 JSON 文字列/JavaScript オブジェクトを変換する
    - 5.8.6 配列/オブジェクトのよそを順番に処理する - `forEach` メソッド
    - 5.8.7 オブジェクト/配列をコピーする - `copy` メソッド
    - 5.8.8 オブジェクト同士をまーじする - `extend/merge` メソッド
    - 5.8.9 jQuery 五感オブジェクトを取得する - `element` メソッド
    - 5.8.10 AngularJS アプリを手動で起動する - `bootstrap` メソッド
    - 5.8.11 `this` キーワードのコンテキストを強制的に変更する - `bind` メソッド
    - 5.8.12 空の関数を取得する - `noop` メソッド
    - 5.8.13 デフォルトの関数を準備する - `identity` メソッド
- [x] 6. [スコープオブジェクト](06/)
  -  6.1 スコープの有効範囲
    - 6.1.1 有効範囲の基本
    - 6.1.2 複数のコントローラーを配置した場合
    - 6.1.3 コントローラーを入れ子に配置した場合
    - 6.1.4 入れ子となったコントローラーでの注意点
  -  6.2 コントローラー間の情報共有
    - 6.2.1 親コントローラーのスコープを取得する - `$parent`
    - 6.2.2 アプリ唯一のスコープを取得する - `$rootScope`
    - 6.2.3 イベントによるスコープ間のデータ交換
    - 6.2.4 並列関係にあるスコープでイベントを通知する
    - 6.2.5 補足: 標準サービス/ディレクティブでの `$broadcast/$emit` イベント
  - 6.3 スコープの監視
    - 6.3.1 スコープの変更をビューに反映する - `$apply` メソッド
    - 6.3.2 アプリ内データの更新を監視する - `$watch` メソッド
    - 6.3.3 スコープの監視を中止する
    - 6.3.4 複数の値セットを監視する - `$watchGroup` メソッド
    - 6.3.5 配列の追加/削除/変更を監視する - `$watchCollection` メソッド
    - 6.3.6 補足: `$digest` ループ
- [ ] 7. [ディレクティブ/フィルター/サービスの自作](07/)
  - 7.1 フィルターの自作
    - 7.1.1 フィルターの基本
    - 7.1.2 パラメーター付きのフィルターを定義する
    - 7.1.3 例: 配列の内容を任意の条件でフィルターする
    - 7.1.4 既存のフィルターを利用する - `$filter`
  - 7.2 サービスの自作
    - 7.2.1 シンプルな値を共有する (1) - `value` メソッド
    - 7.2.2 シンプルな値を共有する (2) - `constant` メソッド
    - 7.2.3 ビジネスロジックを定義する (1) - `service` メソッド
    - 7.2.4 ビジネスロジックを定義する (2) - `factory` メソッド
    - 7.2.5 パラメーター情報を伴うサービスを定義する - `provider` メソッド
    - 7.2.6 より本格的な自作のための補足
  - 7.3 ディレクティブの自作
    - 7.3.1 ディレクティブ定義の基本
    - 7.3.2 利用するテンプレートを指定する - `template/templateUrl` プロパティ
    - 7.3.3 現在の要素をテンプレートで置き換える - `replace` プロパティ
    - 7.3.4 ディレクティブの適用箇所を宣言する - `restrict` プロパティ
    - 7.3.5 子要素のコンテンツをテンプレートに反映させる - `transclude` プロパティ
    - 7.3.6 ディレクティブに適用すべきスコープを設定する - `scope` プロパティ
    - 7.3.7 ディレクティブの挙動を定義する - `link` プロパティ
    - 7.3.8 コンパイル時の挙動を定義する - `compile` プロパティ
    - 7.3.9 デゥレクティブの優先順位と処理方法を決める - `priority/terminal` プロパティ
    - 7.3.10 ディレクティブ同士で情報を交換する - `controller/require` プロパティ
    - 7.3.11 コントローラーに別名をつける - `controllerAs` パラメータ
    - 7.3.12 複数の要素にまたがってディレクティブを適用する - `multiElement` パラメータ
  - 7.4 自作ディレクティブの具体例
    - 7.4.1 タブパネルを実装する
    - 7.4.2 `ng-required` 属性の実装を読み解く
    - 7.4.3 `$asyncValidators` プロパティによる非同期検証の実装
    - 7.4.4 例: jQuery UI のウィジェットをディレクティブ化する
- [ ] 8. テスト
  - 8.1 テストの基本
  - 8.2 ユニットテスト（基本）
    - 8.2.1 ユニットテストのためのツール
    - 8.2.2 ユニットテストの準備
    - 8.2.3 テストの基本
  - 8.3 ユニットテスト（AngularJS アプリ）
    - 8.3.1 フィルターのテスト
    - 8.3.2 サービスのテスト
    - 8.3.3 コントローラーのテスト
    - 8.3.4 ディレクティブのテスト
  - 8.4 モック
    - 8.4.1 タイムアウト/インターバル時間を経過させる - `$timeout/$interval` モック
    - 8.4.2 ログの内容を配列に蓄積する - `$log` モック
    - 8.4.3 HTTP 通信を記事的に実行する - `$httpBackend` モック
    - 8.4.4 非同期処理における例外の有無をチェックする - `$exceptionHandler` モック
    - 8.4.5 タイムゾーン固定の日付オブジェクトを生成する - `angular.mock.TzDate` オブジェクト
  - 8.5 E2E(End to End) テスト
    - 8.5.1 E2E テストの準備
    - 8.5.2 E2E テストの基本
    - 8.5.3 E2E テストでHTTP 通信を擬似的に実行する - `$httpBackend` モック
- [ ] 9. 関連ライブラリ/ツール
  - 9.1 AngularJS アプリで利用できる関連ライブラリ
    - 9.1.1 Bootstrap を AngularJS アプリで活用する - `UI Bootstrap`
    - 9.1.2 標準以外のイベントを処理する - `UI Event`
    - 9.1.3 自作の検証機能を実装する - `UI Validate`
    - 9.1.4 より高度なルーティングを実装する - `UI Router`
    - 9.1.5 ソート/フィルター/ページング機能を備えたグリッド表を生成する - `UI Grid`
    - 9.1.6 国際化対応ページを実装する - `angular-translate`
    - 9.1.7 AngularJS アプリに Google Maps を導入する - `angular-google-chart`
  - 9.2 開発に役立つソフトウェア/ツール
    - 9.2.1 アプリのひな形を自動生成する - `Yeoman`
    - 9.2.2 提携作業を自動化するビルドツール - `Grunt`
    - 9.2.3 クライアントサイド JavaScript のパッケージ管理ツール `Bower`


## 外部リンク

- [AngularJS アプリケーションプログラミング](http://www.wings.msn.to/index.php/-/A-03/978-4-7741-7568-3/) - WINGS
- [AngularJS アプリケーションプログラミング](http://www.amazon.co.jp/dp/B01444JMK6/) - Amazon