$(document).ready(function() {
	var source = $("#template-test").html();
	var template = Handlebars.compile(source);
	var context = {title: "Lorem Ipsum"};
	var output = template(context);
	$("#output").html(output);
});