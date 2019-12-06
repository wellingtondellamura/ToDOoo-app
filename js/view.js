function view(page){
    var app = document.getElementById('app');
    fetch('/'+page+'.html').then(function(response) {
        response.text().then(function(data){
            app.innerHTML = data;
        });
    }).catch(function(error) {
        console.log('error:', error);
    });
}