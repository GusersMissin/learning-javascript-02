# Node.jsでプログラミング問題を解く

- 共通の条件：Node.js上で動かすこと。
- 採点（計10点）
    - 必須課題：7点
    - 発展課題：3点

# 必須課題

## 問題1：FizzBuzz

（回答: 01.js）

### 問題文

引用元: [練習問題 - プログラミングスレまとめ in VIP](http://vipprog.net/wiki/exercise.html)

> ルールは以下の通り
> 
> 1. 1から順番に数を表示する
> 2. その数が3で割り切れるなら"Fizz"、5で割り切れるなら"Buzz"、両方で割り切れるなら"FizzBuzz"と表示する

- 本課題のローカルルール
    - 今回は `15` まで数字をカウントすること
    - 数字は改行で区切ること（1行に1つの数字を出力する）
    - できるだけ制御構文（for, ifなど）を使うこと
        - 使わずやっても提出できるが、

実行例

```
$ node 01.js
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```

# 発展課題

以下は任意です（満点を取るには必要です）。下記から好きな問題を **1つ以上** 選んで解いてください。
（問題を解くごとに `## 問題2` 、 `## 問題3` と見出しを増やし、それぞれ問題文を書くこと）

- [練習問題 - プログラミングスレまとめ in VIP](http://vipprog.net/wiki/exercise.html)
- [言語処理100本ノック 2015](http://www.cl.ecei.tohoku.ac.jp/nlp100/#ch1)
- それ以外のサイト（引用元サイトの「タイトル」と「リンク」を必ず書くこと）

## 問題2（これ以降任意）

（回答: 02.js）

### 問題文

引用元: 平方根を求めてみる
http://vipprog.net/wiki/exercise.html

与えられた数の平方根を求める
当然ライブラリは使わない