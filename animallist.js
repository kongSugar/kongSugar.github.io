// JQUERY ANIMAL TEMPLATE

var source = $("#navTemplate").html();
var template = Handlebars.compile(source);
$("#navBar").html(template());

var source = $("#animalTemplate").html();
var template = Handlebars.compile(source);
var data = {animals: [
    {type: "Dog", sound: "woof"},
    {type: "Cat", sound: "meow"},
    {type: "Cow", sound: "moo"}
], title: "TITEL!"};
$("#animalList").html(template(data));


