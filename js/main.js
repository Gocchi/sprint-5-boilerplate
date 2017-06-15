var api ={
	url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics/'
};

var cargarPagina= function(){
	cargarTopics();
	// $("#btn-crear").click(crearTarea);
};

var cargarTopics= function(){
	$.getJSON(api.url,function(topics){
		topics.forEach(mostrarTemas);
	});
}

var mostrarTemas= function(topics){
	var content= topics.content;
	var author= topics.author_name;
	var responses= topics.responses_count;
	console.log(responses);
	var $ul=$("#container-topics");
	var $li=$("<li />");
	$li.addClass("collection-item avatar");
	var $img=$("<img />");
	$img.addClass("circle");
	var $title=$("<span />");
	$title.addClass("title");
	$title.text(content);
	var $dates=$("<p>" + author + "<br />"+ responses +"</p>");

	
	$ul.append($li);
	$li.append($img);
	$li.append($title);
	$li.append($dates);

};

$(document).ready(cargarPagina);
