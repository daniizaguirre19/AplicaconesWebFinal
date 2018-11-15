

$.ajax({
	url: 'data/cartelera.xml',
	type: 'GET',
	dataType: 'xml',
	success: function(data){
		let new_html = '';

		$(data).find('series').each(function(){
			new_html+= `
			<div class="cart"><h3>${$(this).find('name').text()}</h3>
			<img id="img" src="${$(this).find('img').text()}"/>
			<span class="info">${$(this).find('sala').text()} Horario: ${$(this).find('horario').text()}</span>
			<p class="description">${$(this).find('description').text()}</p> </div> <div id="separacion">.</div>
			`;
		} );
		$('#cartelera').append(new_html);
	},
	error: function(error_msg){
	console.log(error_msg);
}

});
