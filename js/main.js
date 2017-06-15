var allTopics= $("#all-topics");
var api ={
	url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics';
}

var cargarPagina= function(){
	cargarTopics();
	// $("#btn-crear").click(crearTarea);
};

var cargarTopics= function(){
	var url= ;
	$.getJSON(url,function(response){
		var topics= response.results;
		console.log(url);
		mostrarTemas(topics);
	});
}

var mostrarTemas= function(topics){
	var content= topics.content;
	var $ul=$("#container-topic");
	var $li=$("<li />");
	var title=$("<span />");
	var dates=$("<p>+"topics.author_name+"<br />"+ topics.responses_count+"</p>");
}

$(document).ready(cargarPagina);