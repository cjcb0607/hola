class Form{
constructor(){   
}

display(){
    var title= createElement("h2") 
    var input = createInput("nombre")
    var button= createButton("Play")
    var wellcome= createElement("h3")
    

    title.html("JUEGO MULTIJUGADOR DE CARRERAS")
    title.position(width/2,10);
    input.position(width/2,120);
    button.position(width/2,200);
    button.mousePressed(function(){
        var name = input.value()
        input.hide()
        button.hide()
        wellcome.html("GREETING "+ name)
        wellcome.postion(width/2,150)
        playerCount++
        player.update(name)
        player.updateCount(playerCount)
    })
}


}