var api ={
	url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics/'
};


var cargarPagina= function(){
	cargarTopics();
	$("#btn-crear").click(crearTopic);
	$("#btn-search").submit(filtrarTemas);
};

var cargarTopics= function(){
	$.getJSON(api.url,function(topics){
		topics.forEach(mostrarTemas);
	});
}

var mostrarTemas= function(topics){
	var content= topics.content;
	var author= topics.author_name;
	console.log(content);
	var responses= topics.responses_count;
	var $ul=$("#container-topics");
	var $li=$("<li />");
	$li.addClass("collection-item avatar");
	var $img=$("<img />");
	$img.addClass("circle");
	var $title=$("<span />");
	$title.addClass("title");
	$title.text(content);
	var $dates=$("<p>Autor:" + author + "<br />Respuestas:"+ responses +"</p>");

	
	$ul.append($li);
	$li.append($img);
	$li.append($title);
	$li.append($dates);

};


var crearTopic= function(e){
	e.preventDefault();
  	var nameAuthor= $("#name-author").val();
  	var msn= $("#msn-new").val();
  	console.log(nameAuthor);
  	console.log(msn);
  	$.post(api.url, {
  	author_name: nameAuthor,
  	content: msn
  }, function (topics) {
    mostrarTemas(topics);
	});
};

var filtrarContactos = function (e) {
	e.preventDefault();
	var busqueda = $("#btn-search").val().toLowerCase();
	var filtradosAutor = author.filter(function (topics) {
		return topics.author_name.toLowerCase().indexOf(busqueda) >= 0;
	});
	mostrarTemas(filtrados);
};




$(document).ready(cargarPagina);
