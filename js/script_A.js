$.ajax({
	url: 'data/bohemian.xml',
	type: 'GET',
	dataType: 'xml',
	success: function(data){
		let new_html = '';

		$(data).find('comment').each(function(){
			new_html+= `
			<h7>	Usuario: <span class="comment_name"> ${$(this).find('name').text()}</span>  </h7>
			</br>
			<h7> Email: <span class="comment_name"> ${$(this).find('name').attr("email")} </span> </h7>
			<p class="comment">${$(this).find('text').text()} </p>
			
			`;
		} );
		$('#Bohemian_comment').append(new_html);
	},
	error: function(error_msg){
	console.log(error_msg);
}

});
$.ajax({
	url: 'data/halloween.xml',
	type: 'GET',
	dataType: 'xml',
	success: function(data){
		let new_html = '';

		$(data).find('comment').each(function(){
			new_html+= `
			<h7>	Usuario: <span class="comment_name"> ${$(this).find('name').text()}</span>  </h7>
			</br>
			<h7> Email: <span class="comment_name"> ${$(this).find('name').attr("email")} </span> </h7>
			<p class="comment">${$(this).find('text').text()} </p>
			
			`;
		} );
		$('#Halloween_comment').append(new_html);
	},
	error: function(error_msg){
	console.log(error_msg);
}

});

$.ajax({
	url: 'data/kkklan.xml',
	type: 'GET',
	dataType: 'xml',
	success: function(data){
		let new_html = '';

		$(data).find('comment').each(function(){
			new_html+= `
			<h7>	Usuario: <span class="comment_name"> ${$(this).find('name').text()}</span>  </h7>
			</br>
			<h7> Email: <span class="comment_name"> ${$(this).find('name').attr("email")} </span> </h7>
			<p class="comment">${$(this).find('text').text()} </p>
			
			`;
		} );
		$('#KKKlan_comment').append(new_html);
	},
	error: function(error_msg){
	console.log(error_msg);
}

});

$.ajax({
	url: 'data/cascanueces.xml',
	type: 'GET',
	dataType: 'xml',
	success: function(data){
		let new_html = '';

		$(data).find('comment').each(function(){
			new_html+= `
			<h7>	Usuario: <span class="comment_name"> ${$(this).find('name').text()}</span>  </h7>
			</br>
			<h7> Email: <span class="comment_name"> ${$(this).find('name').attr("email")} </span> </h7>
			<p class="comment">${$(this).find('text').text()} </p>
			
			`;
		} );
		$('#Cascanueces_comment').append(new_html);
	},
	error: function(error_msg){
	console.log(error_msg);
}

});

$.ajax({
	url: 'data/pesadillas.xml',
	type: 'GET',
	dataType: 'xml',
	success: function(data){
		let new_html = '';

		$(data).find('comment').each(function(){
			new_html+= `
			<h7>	Usuario: <span class="comment_name"> ${$(this).find('name').text()}</span>  </h7>
			</br>
			<h7> Email: <span class="comment_name"> ${$(this).find('name').attr("email")} </span> </h7>
			<p class="comment">${$(this).find('text').text()} </p>
			
			`;
		} );
		$('#Pesadillas_comment').append(new_html);
	},
	error: function(error_msg){
	console.log(error_msg);
}

});


















$.ajax({
	url: 'data/sr_burrito_ingredientes.json',
	type: 'GET',
	dataType: 'json',
	success : function(data){
		let new_html = '';
 		var datos = data["menu"]["tipo_burrito"]
		for (i in datos){
			new_html+= `
				<input type="radio" name="tortilla" id="${datos[i].value}"/> ${datos[i].type}
				<br/>

			`;
		}
		$('#radio_tortilla').append(new_html);
	},
	error: function(error_msg){
	console.log(error_msg);
}
});

$.ajax({
	url: 'data/sr_burrito_ingredientes.json',
	type: 'GET',
	dataType: 'json',
	success : function(data){
		let new_html = '';
 		var datos = data["menu"]["ingrediente"]
 		new_html+=`<select id="carne">
					<option value="0" selected disabled hidden> Ingrediente principal... </option>`;
		for (i in datos){
			new_html+= `
			<option value="${i}" > ${datos[i].type} </option>
			<br/>

			`;
			
		}
		new_html+=`</select>`;
		$('#select_carne').append(new_html);
	},
	error: function(error_msg){
	console.log(error_msg);
}
});

$.ajax({
	url: 'data/sr_burrito_ingredientes.json',
	type: 'GET',
	dataType: 'json',
	success : function(data){
		let new_html = '';
 		var datos = data["menu"]["toppings"]
		for (i in datos){
			new_html+= `
			<input type="checkbox" name="extra" id="${datos[i].value}" value="${datos[i].value} " /> ${datos[i].topping} 
				<br/>

			`;
		}
		$('#check_secun').append(new_html);
	},
	error: function(error_msg){
	console.log(error_msg);
}
});

$.ajax({
	url: 'data/sr_burrito_ingredientes.json',
	type: 'GET',
	dataType: 'json',
	success : function(data){
		let new_html = '';
 		var datos = data["menu"]["salsas"]
		for (i in datos){
			new_html+= `
				<input type="radio" name="salsa" id="${datos[i].value}"/> ${datos[i].salsa}
				<br/>

			`;
		}
		$('#radio_salsa').append(new_html);
	},
	error: function(error_msg){
	console.log(error_msg);
}
});