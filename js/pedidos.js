$('#button_submit').click(function(){
			let jsonToSend = {
                "paquetes" 	: $('#paquetes').val(),
                "dulces" 	: $('#dulces').val(),
			};

			$.ajax({
				url			: "controller/pedidos.php",
				type		: "POST",
				data		: jsonToSend,
				ContentType : "application/json",
				dataType	: "json",
				success		: function(data){
                    console.log("hola");
                    
                    alert('Pedido registrado!\n Has ordenado: \n -'+ $('#paquetes').val() + '\n -' + $('#dulces').val());
                    $("#form1").trigger("reset");

				},
				error		: function(error){
					alert('No se pudo hacer el pedido.');
					console.log(error);
				} 
			});
	});