let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue(){
    if(count == 10){
        alert("¡Tu publicación ganó 10 seguidores! ¡Felicidades!");
    } else if(count ==20) {
        alert("¡Tu publicación ganó 20 seguidores! ¡Sigue así!");
    }
}

function resetCount(){
    count = 0;
    displayCount();
    alert("¡Se ha reseteado el contador!")
}