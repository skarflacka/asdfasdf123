$(document).ready(function() {
	var source   = $("#template-test").html();
	var template = Handlebars.compile(source);
	var context = {title: "My New Post"};
	var html    = template(context);
	$("#header").html(html);
});