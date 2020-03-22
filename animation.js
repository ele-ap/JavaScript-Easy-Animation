function myMove(){
    var elem = document.getElementById("animate");

    var id = setInterval(frame,5);

    var wid = elem.style.width;
    var hei = elem.style.height;
    wid = 50;
    hei = 50;

    function frame(){
        if(wid === 400){
            clearInterval(id);
        }
        else{
            wid++;
            hei++;
            elem.style.width = wid + 'px';
            elem.style.height = hei + 'px';
        }
    }
}


function revMove(){
    var elem = document.getElementById("animate");

    var rid = setInterval(rev_frame,5);

    var wid = elem.style.width;
    var hei = elem.style.height;
    wid = 400;
    hei = 400
    function rev_frame(){
        if(wid === 50){
            clearInterval(rid);
        }
        else{
            wid--;
            hei--;
            elem.style.width = wid + 'px';
            elem.style.height = hei + 'px';
        }
    }
}