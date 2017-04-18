# Generators
## 概要
- `function` と関数名の間に * を付けて定義する( `function* name() {}` )
- Generator 関数を実行すると、Iterator が返る
- `yield` で実行を区切る
- `Generator#next()` で、`yield` を1つ進む
- Generator は、`yield` と `next` によって関数を停止・再開する
- 関数の呼び出し先と呼び出し元で値を交換できる

## 基本
### Generator を生成する

```js
// Generator の基本
function* generator1() {
  // yield でイテレータの区切りを指定
  yield 1;
  yield 2;
  return 3;
}
```

__Constructor として生成することで this 参照を扱う__

```js
function* F() {
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
}

let obj = {};
let f = F.call(obj); // obj を this に指定して呼び出す
// または
let f = F.call(F.prototype); // 自分の prototype を this とする

// または、コンストラクターを生成する関数を定義する
function* gen() {
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
}

function F() {
  return gen.call(gen.prototype);
}

let f = new F();

// test
f.next();
f.next();
f.next();
```



### `next()` で順に実行する

```js
// イテレータを作成
const g = generator();
// 1つめの yield まで実行
console.log(g.next());//=> { "value": 1, "done": false }
// 2つめの yield まで実行
console.log(g.next());//=> { "value": 2, "done": false }
// 関数の最後まで実行
console.log(g.next());//=> { "value": 3, "done": true }
```

```js
{
  value: <Any>,
  done: <Boolean>
}
```

### `for/of` で順に実行する

```js
// for/of と組み合わせる
for (let n of generator()) {
  console.log(n);
}
//=> 1
//=> 2
```

## `while` で順に実行する

```js
while (true) {
  let item = g.next();
  if (item.done) {
    break;
  }
  console.log(item.value);
}
```

### Spread operator でまとめて実行する

```js
// 結果を配列で取得する
console.log( [...generator()] );//=> [1, 2]
```

### `Array.from` でまとめて実行する

```js
console.log( Array.from(generator()) );//=> [1, 2]
```

## `yield` に値を渡す
- `next()` 引数に渡した値が `yield` 式の戻り値となる

```js
// ロギング用関数
function msg(str) {
  console.log('msg:', str);
  return str;
}

function* generator() {
  console.log('start');
  
  // `ret1` は `next(arg)` の引数(`arg`)の値を受け取る
  const ret1 = yield msg('yeild 1');
  console.log('ret1:', ret1);

  const ret2 = yield msg('yeild 2');
  console.log('ret2:', ret2);
  
  return 'end';
}

const g = generator();
// 最初の yield まで進む
const next1 = g.next();
console.log(next1);//=> { "value": "yeild 1", "done": false }

// yield に値を渡す(ret1 に入る)
const next2 = g.next('next 1');
console.log(next2);//=> { "value": "yeild 2", "done": false}

const next3 = g.next('next 2');
console.log(next3);//=> { "value": "end", "done": true }
```

```js
function* generator3() {
  var a = yield 'first';
  var b = yield 'second';
  yield a + b;
}

const g3 = generator3();
console.log(g3.next().value);//=> first
console.log(g3.next(10).value);// a = 10 //=> second
console.log(g3.next(100).value);//b = 100 //=> 110
```

## yield*
- `yield*` には iterable なオブジェクトを渡す

```js
function* generator() {
  yield* [1, 2, 3];
}

const g = generator();
console.log(g.next().value);//=> 1
console.log(g.next().value);//=> 2
console.log(g.next().value);//=> 3

function* generator2() {
  yield* 'あいうえお';
}

const g2 = generator2();
console.log(g.next().value);//=> あ
console.log(g.next().value);//=> い
console.log(g.next().value);//=> う
```

## return
### `return()` メソッド

```js
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const g = numbers();

console.log(g.next()); //=> { "value": 1, "done": false }
console.log(g.return()); //=> { "done" : true }
console.log(g.next()); //=> { "done": true }
```

### return

```js
function* numbers() {
  yield 1;
  yield 2;
  return 3;
  yield 4;
}

// rese params
console.log([...numbers()]);//=> [1,2]
// Array.from
console.log(Array.from(numbers()));//=> [1,2]
// for/of
for (let n of numbers()) {
  console.log(n);
  //=> 1
  //=> 2
}
// next
const g = numbers();
console.log(g.next());//=> {"value":1,"done":false}
console.log(g.next());//=> {"value":2,"done":false}
console.log(g.next());//=> {"value":3,"done":true}
console.log(g.next());//=> {"done":true}

const g = numbers();
console.log(g.next());//=> {"value":1,"done":false}
console.log(g.return(5));//=> {"value":5,"done":true}
console.log(g.next());//=> {"done":true}


// try/catch をはさむ
function* numbers() {
  yield 1;
  try {
    yield 2;
  } catch(e) {
    yield 3;
    yield 4;
  }
  yield 5;
}

const g = numbers();
console.log(g.next());//=> {"value":1,"done":false}
console.log(g.next());//=> {"value":2,"done":false}
console.log(g.return(6));//=> {"value":6,"done":true}
console.log(g.next());//=> {"done":true}
console.log(g.next());//=> {"done":true}
```

## 非同期処理

```js
asyncFlow(function* () {
  // yield に Promise を渡す
  let items = yield getUrl('/items');
  let id = items[0].id;
  let item = yield getUrl('/items/' + id);
  console.log(item);
});

function asyncFlow(generator) {
  const g = generator();
  const next = value => {
    // promise を受け取る
    const result = g.next(value);
    if (!result.done) {
      const promise = result.value;
      promise.then(value => {
        // promise が完了したら next 関数に結果を渡す
        next(value);
      });
    }
  }
  next();
}

function getUrl(str) {
  // get url on xhr
}
```

## 関連
- [イテレータ](./Iterator.md)

# リンク
- [ES6 Generators in Depth](https://ponyfoo.com/articles/es6-generators-in-depth)
- [ジェネレータについて](http://js-next.hatenablog.com/entry/2014/08/07/174147)
- [JavaScript のジェネレータを極める！](http://goo.gl/KBRGxb)
- [最近のjs非同期処理 PromiseとGeneratorの共存](http://qiita.com/kidach1/items/d997df84a0ede39d76ad)
- [co](https://github.com/tj/co)
