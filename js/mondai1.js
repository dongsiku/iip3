function Mondai1(){
	var m1 = document.getElementById('mondai1').value; // idが「id01」のテキストボックスに入力された値を取得して変数weightに代入
	
	if(m1="1"){
	var msg="おめでとうございます";
	var seihi="正解";
	}else{
	var msg="残念";
	var seihi="不正解";	
	}

//	var bmi = height / (weight * weight); // BMIを計算
	document.write("HelloWorld")
	document.write("判定：" + seihi);
	document.write("正解は1番");
	document.write("あなたの回答は" + m1 + "番です。");
}