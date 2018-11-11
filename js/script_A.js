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
 		var datos = data["menu"]["paquetes"]
 		new_html+=`<select id="paquetes">
					<option value="0" selected disabled hidden> Paquete a elegir... </option>`;
		for (i in datos){
			new_html+= `
			<option value="${datos[i].type}" > ${datos[i].type} </option>
			<br/>

			`;
			
		}
		new_html+=`</select>`;
		$('#paquete').append(new_html);
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
 		var datos = data["menu"]["dulces"]
 		new_html+=`<select id="dulces">
					<option value="0" selected disabled hidden> Dulces a elegir... </option>`;
		for (i in datos){
			new_html+= `
			<option value="${datos[i].type}" > ${datos[i].type} </option>
			<br/>

			`;
			
		}
		new_html+=`</select>`;
		$('#dulce').append(new_html);
	},
	error: function(error_msg){
	console.log(error_msg);
}
});

