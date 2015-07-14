function calcular(){
	var campo1 = document.form1.text1.value.replace(",", ".");
	var campo2 = document.form1.text2.value.replace(",", ".");
	var campo3 = document.form1.text3.value.replace(",", ".");
	var campo4 = document.form1.text4.value.replace(",", ".");
	var campo5 = document.form1.text5.value.replace(",", ".");

	var resultado = (parseFloat(campo1) + parseFloat(campo2) + parseFloat(campo3) + parseFloat(campo4) + parseFloat(campo5))/5;
	
	alert("Sua média no ENEM:" + resultado);
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

function Onlynumbers(e)
{
	var tecla=new Number();
	if(window.event) {
		tecla = e.keyCode;
	}
	else if(e.which) {
		tecla = e.which;
	}
	else {
		return true;
	}
	if((tecla >= "97") && (tecla <= "122")){
		return false;
	}
}
