function calcular(){
	var campo1 = document.form1.text1.value.replace(",", ".");
	var campo2 = document.form1.text2.value.replace(",", ".");
	var campo3 = document.form1.text3.value.replace(",", ".");
	var campo4 = document.form1.text4.value.replace(",", ".");
	var campo5 = document.form1.text5.value.replace(",", ".");

	var resultado = (parseFloat(campo1) + parseFloat(campo2) + parseFloat(campo3) + parseFloat(campo4) + parseFloat(campo5))/5;

	alert(resultado);
}
function nova_consulta(){
	if(document.getElementById('text1').value!="") {
	document.getElementById('text1').value="";
	document.getElementById('text2').value="";
	document.getElementById('text3').value="";
	document.getElementById('text4').value="";
	document.getElementById('text5').value="";
}
	
	
}
