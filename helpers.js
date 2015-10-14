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

Handlebars.registerHelper("navbar", function(){
    var result = '<div class="nav-bar">'
        +'<nav class="top-bar" data-topbar role="navigation" style="background-color: #74bfdd;">'
        +'<ul class="title-area">'
        +'    <li class="name">'
        +'        <h1><a href="#">kongSugar'
        +'        </a></h1>'
        +'    </li>'
        +'    <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>'
        +'</ul>'
        +'<section class="top-bar-section">'
        +'<ul class="right">'
        +'    <li><a href="#">Overview</a></li>'
        +'    <li><a href="#">Blog</a></li>'
        +'    <li><a href="#">Wahosy</a></li>'
        +'    <li><a href="#">CalendarFX</a></li>'
        +'    <li><a href="#">TVDB-API</a></li>'
        +'</ul>'
        +'<ul class="left"> '
        +'</ul>'
        +'</section> '
        +'</nav> '
        +'</div>';


    return new Handlebars.SafeString(result);
});


$.getScript("https://cdn.rawgit.com/moski/gist-Blogger/master/public/gistLoader.js");