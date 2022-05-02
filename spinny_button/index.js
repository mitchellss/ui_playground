
document.addEventListener('DOMContentLoaded',function(event){
    var a = document.getElementsByClassName("title")
    
    var newText = "Welcome to my pretentious website."

    for (var i=0;i<=newText.length;i++) {
        (function(ind) {
            setTimeout(function(){
                // console.log(ind);
                a[0].innerHTML = newText.slice(0,ind)
            }, 100 * ind);
        })(i);
     }
});

