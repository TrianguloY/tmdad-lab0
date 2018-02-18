$(document).ready(function() {
    
    $("#search").submit(searchOnClick);
    
    mustacheTemplate = "unloaded";
    
    $.get('template', function(template) {
        Mustache.parse(template);
        mustacheTemplate = template;
    });
});

function searchOnClick(event) {
    event.preventDefault();
    var target = $(this).attr('action');
    var query = $("#q").val();
    $.get(target, { q: query } )
            .done( onPostQuery )
            .fail( onFailQuery );
}

function onPostQuery(data){
    
    var rendered = Mustache.render(mustacheTemplate, data);
    
    $("#resultsBlock").empty().append(rendered);
}

function onFailQuery(){
    $("#resultsBlock").empty().append("-error-");
}