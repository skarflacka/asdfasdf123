$(document).ready(function() {
	var source = $("#template-test").html();
	var source2 = $("#node1").html();
	var template = Handlebars.compile(source);
	var template2 = Handlebars.compile(source2);
	var context = {title: "Lorem Ipsum"};

	var data = {
		node1: {node2: "Node2", node3: "node3", node4: {node6: "node6"}, node5: "node5"}
	};

	var output = template(context);
	var output2 = template2(data);
	$("#header").html(output);
	$("#content").html(output2);
});