//問題数随時更新
var allen = "2";
//それぞれの解説を書く



var kaisetu=[
"解説を書く",
"解説を書く"
];

var span=[];
var qqq=[];
for (let i = 1; i < Number(allen)+1; i++){
span.push("span"+i);
qqq.push("q"+i);
}

function answer(){
let seigo = "";
let maru = 0;
let url = "https://twitter.com/intent/tweet?text=";
let urltext="text=---------------";
let urlurl="&url=";
let urlhashtags= "&hashtags=";
let urlafter = "&url=https://atmrrtiv.github.io&hashtags=検定"
let urlenco="";
let urlencobe="";
let seigomae="";

//改行 %0A
//https://twitter.com/intent/tweet?text=ツイート内容&url=https://atmrrtiv.github.io&hashtags=検定


for (let i = 1; i < Number(allen)+1; i++){
if ( document.getElementById('Q').elements["q"+i].value == "1") {
maru=maru+1
seigo=seigo+i+"問目 "+"正解<br>";
}else{
seigo=seigo+i+"問目 "+"不正解<br>";
}
}

seigomae="正解数 "+maru+"/"+allen+": 正答率 "+Math.ceil(maru/allen*100)+"%";
seigo=seigomae+"<br>"+seigo+"<br>";


urlencobe = url+seigomae+urlafter;
urlenco = encodeURI(urlencobe);
seigo="<a href="+urlenco+ ">結果をツイートする</a>"  
+"<br>" +seigo;





document.getElementById("kotae").innerHTML= seigo;
}


//ひたすらボタンを置いていく
function clickBtn1(){
//aの値を入れる　ボタンの後ろと同じ
let a=1;
let ans = document.getElementById('Q').elements[qqq[a-1]].value;
if(ans==0){
ans="<h3>不正解</h3>"}
else if(ans==1){
ans="<h3>正解</h3>"}
ans=ans+kaisetu[a-1];
document.getElementById(span[a-1]).innerHTML = ans;
}



function clickBtn2(){
//aの値を入れる　ボタンの後ろと同じ
let a=2;
let ans = document.getElementById('Q').elements[qqq[a-1]].value;
if(ans==0){
ans="<h3>不正解</h3>"}
else if(ans==1){
ans="<h3>正解</h3>"}
ans=ans+kaisetu[a-1];
document.getElementById(span[a-1]).innerHTML = ans;
}


function clickBtn3(){
document.getElementById("span3").innerHTML=
document.getElementById('Q').elements['q3'].value;
}


