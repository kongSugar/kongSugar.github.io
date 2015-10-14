Handlebars.registerHelper("helper", function(){
    return "This is the output of your helper method.";
});

Handlebars.registerHelper("multiply", function(a, b){
    return a * b;
});

Handlebars.registerHelper("gist", function(id){
    id = Handlebars.Utils.escapeExpression(id);

    var result = '<div class="gistLoad" data-id="'+ id +'" id="gist-'+id+'">Loading gist <i class="fa fa-spinner fa-spin"></i></div>';
    return new Handlebars.SafeString(result);
});

Handlebars.registerHelper("sugardown", function(file){
    <!-- load a file like markdown but with my needs -->
    return 0;
});

$.getScript("https://cdn.rawgit.com/moski/gist-Blogger/master/public/gistLoader.js");