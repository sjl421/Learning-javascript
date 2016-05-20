# Stack

スタックとは、最後に入力したデータが先に出力されるという特徴をもつ、データ構造の一種。  
本を机の上に積み上げるような構造になっており、データを入れるときは新しいデータが一番上に追加され、データを出すときは一番上にある新しいデータが優先して出てくる。  

![スタックの参考図](http://image.itmedia.co.jp/ait/articles/0809/01/r20algorithm0201.jpg)

- [スタック 【 stack 】](http://e-words.jp/w/%E3%82%B9%E3%82%BF%E3%83%83%E3%82%AF.html)
- [データ構造の選択次第で天国と地獄の差 (1/3)](http://www.atmarkit.co.jp/ait/articles/0809/01/news163.html)


```js
/**
 * Stack
 * @class
 * last in, first out
 * first in, last out
 * http://e-words.jp/w/%E3%82%B9%E3%82%BF%E3%83%83%E3%82%AF.html
 */

class Stack {
  constructor() {
    this.data = [];
  }
  push(value) {
    this.data.push(value);
    return value;
  }
  pop() {
    return this.data.pop();
  }
  top() {
    return this.data[ this.data.length - 1 ];
  }
  size() {
    return this.data.length;
  }
  empty() {
    return this.data.length === 0;
  }
  dump() {
    return this.data;
  }
}

// test
var stack = new Stack();

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log('[data]', stack.dump());
console.log(stack.empty());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.top());
console.log('[data]', stack.dump());
```


```js
/**
 * Stack
 * @class
 * http://www.atmarkit.co.jp/ait/articles/0809/01/news163.html
 */

class Stack {
  constructor() {
    this.elements = new Array();
    this.length = 0;
  }
  push(value) {
    this.elements[this.length] = value;
    this.length++;
  }
  pop() {
    var popvalue = this.elements[this.length - 1];
    delete this.elements[this.length - 1];
    this.length--;
    return popvalue;
  }
}
```