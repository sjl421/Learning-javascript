# DOMに直接アクセスする
## React では直接DOM操作は行わないのが基本

仕方なくDOMにアクセスしなくてはならない場面というのも少なからず存在します.
例えば, 入力フォームでユーザーが「送信」ボタンを押した時に, 入力必須のテキストボックスがあるのに, 
その値が空だったので, 強制的にそのテキストボックスにフォーカスを移したいという場面です.

これを解決するのが, `ref` プロパティです.<br>
このプロパティには, コールバック関数を指定するのですが, これは, React が DOM をインスタンス化する際に実行されます.
このコールバック関数が実行されるとき, インスタンス化したDOMオブジェクトが引数として得られます.

```js
<input type='text' ref={(obj) => { this.textUser = obj }} />
```

実際に「送信」ボタンを押した時に, 空の input 要素にフォーカスを移動するプログラムを紹介します.

- [refs-focus.html](examples/refs-focus.html)

## コンポーネントの render() メソッドに関する考察
当然ですが, `render()` メソッドの後で, DOMが実際にインスタンス化されますから,
`render()` メソッドの中では, `ref` で取得予定のDOMインスタンスを参照することはできません.

## まとめ
- React では, DOMを直接操作する必要はほとんどありません. そのため, DOMの直接操作は, 必要最低限にします
- 直接DOMを取得するには, コンポーネントの `ref` プロパティに, 実際のDOMインスタンスを得るコールバック関数を指定します
- React コンポーネントの `render()` メソッドの戻り値を参照して, 必要に応じて DOM インスタンスを生成します. 
  `render()` メソッドの戻り値と実際に生成される DOM とは異なるオブジェクトになります