let submit_button = document.getElementById("submit");
let clear_button = document.getElementById("cancel");
submit_button.classList.remove("element_hidden");
clear_button.classList.remove("element_hidden");

formu=document.getElementById("form1");
formu.classList.remove("element_hidden");
console.log(submit_button);
if(submit_button){


submit_button.addEventListener("click",function(event){

		var validado= true;
		let = document.getElementById("formulario");
		//validar tortilla
		let tortilla = document.getElementsByName("tortilla");

		var seleccionado = false;
		let tortilla_incorrecto = document.getElementById("tortilla_incorrecto");
		
		for (var i=0; i<tortilla.length; i++){
				if(tortilla[i].checked){
					seleccionado= true;
					var tortilla_elegida = tortilla[i].value;
					break;
				}
			
			}
		
		if(seleccionado==false){
			tortilla_incorrecto.classList.remove("element_hidden");
			validado = false;

		}else{
			tortilla_incorrecto.classList.add("element_hidden");

		}
		
	//validar carne
		let carne = document.getElementById("carne");
		let carne_incorrecto =document.getElementById("carne_incorrecto");
		var carnefinal;

		if(carne.value==0){
			carne_incorrecto.classList.remove("element_hidden");
			validado = false;
		}else{
			carne_incorrecto.classList.add("element_hidden");
			if (carne.value==1){
				carnefinal="Carne asada";
			}else if(carne.value==2){
				carnefinal="Trompo";
			}else if (carne.value==3){
				carnefinal="Pollo";
			}else{
				carnefinal="Nopalitos";
			}
		}

		//comprobar ingredientes secundarios
		var secundarios='';
		var c1 = document.getElementById("arroz_blanco").checked;
		if(c1==true){
			secundarios+= 'Arroz blanco ';

		}
 		var c2 = document.getElementById("queso").checked;
 		if(c2==true){
 			secundarios+= 'Queso ';
 		}
 			var c3 = document.getElementById("frijolitos").checked;
 		if(c3==true){
 			secundarios+= 'Frijolitos ';
 		}
 		var c4 = document.getElementById("crema").checked;
 		if(c4==true){
 			secundarios+= 'Crema ';
 		}

 		var c5 = document.getElementById("lechuga").checked;
 		if(c5==true){
 			secundarios+= 'Lechuga ';
 		}
 		var c6 = document.getElementById("pico_de_gallo").checked;
 		if(c6==true){
 			secundarios+= 'Pico de Gallo ';
 		}
 		var c7 = document.getElementById("guacamole").checked;
 		if(c7==true){
 			secundarios+= 'Guacamole ';
 		}
 		var c8 = document.getElementById("jalapeños").checked;
 		if(c8==true){
 			secundarios+= 'Jalapeños ';
 		}
 
 		 if(secundarios == ''){
 		 	secundarios+='No elegiste ningún ingrediente secundario ';
 		 }
 		
		//validar salsa
		let salsa = document.getElementsByName("salsa");
		var seleccionadasalsa = false;
		let salsa_incorrecto = document.getElementById("salsa_incorrecto");
		var salsa_elegida;
		for (var j=0; j<salsa.length; j++){
				if(salsa[j].checked){
					seleccionadasalsa= true;
					if(salsa[j].value=="de_la_casa"){
						salsa_elegida="De la casa";
					}else{
					 salsa_elegida = salsa[j].value;
					}
					
					break;
				}
			
			}
		
		if(seleccionadasalsa==false){
			salsa_incorrecto.classList.remove("element_hidden");
			validado = false;

		}else{
			salsa_incorrecto.classList.add("element_hidden");

		}


		//validar nachos

		let nachos = document.getElementsByName("nachos");
		var selec_nachos = false;
		let nachos_incorrecto = document.getElementById("nachos_incorrecto");
		
		for (var y=0; y<nachos.length; y++){
				if(nachos[y].checked){
					selec_nachos= true;
					var nachos_elegida = nachos[y].value;
					break;
				}
			
			}
		
		if(selec_nachos==false){
			nachos_incorrecto.classList.remove("element_hidden");
			validado = false;

		}else{
			nachos_incorrecto.classList.add("element_hidden");

		}
		//validar numero
		let numero = document.getElementById("numero");
		let numero_incorrecto = document.getElementById("numero_incorrecto");
		numero_elegido = '';
		if (numero.value==""){
			numero_incorrecto.classList.remove("element_hidden");
			validado = false;
		}else{
			if(valida_numero(numero.value)){
				numero_incorrecto.classList.add("element_hidden");
				numero_elegido+=numero.value;
				numero_elegido+= ' burritos';
			}else{
				numero_incorrecto.textContent = "Ingresa un número válido";
				numero_incorrecto.classList.remove("element_hidden");
				validado = false;
			}
			
		}
		function valida_numero(numero){

			var regex_numero = /\d+/;
			return regex_numero.test(numero);
		}

		if(validado==true){
			formu.classList.add("element_hidden");
			submit_button.classList.add("element_hidden");
			clear_button.classList.add("element_hidden");
			document.getElementById("how").classList.add("element_hidden");
			document.getElementById("resum").classList.remove("element_hidden");
			document.getElementById("tortilla_elegida").textContent = tortilla_elegida;
			document.getElementById("carne_elegida").textContent = carnefinal;
			document.getElementById("secundarios_elegida").textContent = secundarios;
			document.getElementById("salsa_elegida").textContent = salsa_elegida;
			document.getElementById("nachos_elegida").textContent = nachos_elegida;
			document.getElementById("numero_elegida").textContent = numero_elegido;
			document.getElementById("res").classList.remove("element_hidden");
			submit_button.classList.add("element_hidden");
			clear_button.classList.add("element_hidden");


		}
})
};
if(clear_button){
	clear_button.addEventListener("click",function(event){
		document.getElementById("form1").reset();
		tortilla_incorrecto.classList.add("element_hidden");
		carne_incorrecto.classList.add("element_hidden");
		salsa_incorrecto.classList.add("element_hidden");
		nachos_incorrecto.classList.add("element_hidden");
		numero_incorrecto.classList.add("element_hidden");
	})

};


