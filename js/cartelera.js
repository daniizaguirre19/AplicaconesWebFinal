
$.ajax({
url: 'data/popular_netflix_series.xml',
type: 'GET',
dataType: 'xml',
success : function(data){
	let new_html = '';

	$(data).find('series').each(function(){
		new_html += `
		<li>${$(this).attr('name')}
		</li>
		`;
	});
	$('#popular_series_list').append(new_html);

},
error: function(error_msg){
	console.log(error_msg);
}
});

$.ajax({
	url: 'data/popular_netflix_series_2.xml',
	type: 'GET',
	dataType: 'xml',
	success: function(data){
		let new_html = '';

		$(data).find('series').each(function(){
			new_html+= `
			<h3>	${$(this).find('ranking').text()}.${$(this).find('name').text()}</h3>
			<img src="${$(this).find('img').text()}"/>
			<p class="series_info">${$(this).find('sala').text()} Horario: ${$(this).find('horario').text()} | IMDB <span class="imdb_score">${$(this).find('imdb').text()}</span> </p>
			<p class="description">${$(this).find('description').text()}</p>
			`;
		} );
		$('#cartelera').append(new_html);
	},
	error: function(error_msg){
	console.log(error_msg);
}

});

$.ajax({
	url: 'data/bojack.json',
	type: 'GET',
	dataType: 'json',
	success : function(data){
		let new_html = '';

		for (let i = 0; i < data.length; i++){
			new_html+= `
				<h3>${data[i].ranking}. ${data[i].name}</h3>
				<p class="series_info">Season ${data[i].season}, episode ${data[i].episode_num}, IMDB score <span class="imdb_score">${data[i].score}</span> </p>
			<p class="description">${data[i].summary}</p>

			`;
		}
		$('#best_bojack').append(new_html);
	},
	error: function(error_msg){
	console.log(error_msg);
}
});