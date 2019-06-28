/*
//ループ練習
for(i=0;i<5;i++){
    console.log("Hello World!");
}
*/

/*
// java hellos 7
for(i=1;i<=7;i++){
    console.log("Hello World! "+i);
}
*/

/*
//FizzBuzz
for(i=1;i<=34;i++){
    if((i%3==0)&&(i%5==0)){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}
*/

/*
//素数判定
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});
rl.on('line', function(line){
    count = 0;
    for(i=1;i<=line;i++){
        if(line%i==0){
            count++;
        }
    }
    if(count==2){
        console.log("素数です。");
    }else{
        console.log("素数ではありません。");
    }
})
*/

//平方根を求めてみる
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});
rl.on('line', function(line){
    let check=0;
    for(i=1;i<=line;i++){
        if((i*i)==line){
            console.log(i);
            check++;
        }
    }
    if(check==0){
        if(line!=0){
            console.log("r("+line+")");
        }else{
            console.log(line+"なので平方根がありません。")
        }
    }
})