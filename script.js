function clickBtn0(){



//セレクトの結果を取得＞関数に格納＞正誤判定＞正誤を関数に格納（正答率も）＞出力

//選択肢で選んだ回答　随時追加
var anslis = [
String(document.form1.q1.selectedIndex),
String(document.form1.q2.selectedIndex)
]

//問題の正解 随時追加
var correct = [1,3];

var seigo="";
var scr=0;

for (let i = 0; i < anslis.length; i++) {
let j=i+1;
if (anslis[i] == correct[i]) {
scr=scr+1
 seigo =seigo+ '問'+j+ ' 正解<br>'  ;
}else{
    seigo =seigo + '問'+j+ ' 不正解<br>';
};
}


scr= scr/anslis.length *100;

seigo="正答率 "+scr+"%"+" <br>"+ seigo ;




	document.getElementById("span0").innerHTML= seigo;
}


//ひたすらボタンを置いていく

function clickBtn1(){
if(String(document.form1.q1.selectedIndex)==0){
document.getElementById("span1").innerHTML=
"回答を選んでください"
}else{
document.getElementById("span1").innerHTML=
 "答えと解説";
}
}

function clickBtn2(){
if(String(document.form1.q2.selectedIndex)==0){
document.getElementById("span2").innerHTML=
"回答を選んでください"
}else{
document.getElementById("span2").innerHTML=
 "答えと解説";
}
}


