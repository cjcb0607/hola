class Game{
constructor(){

}
//call gamestate
getState(){
    gameStateRef=database.ref("gamestate");
    gameStateRef.on("value",function(data){
        gamestate=data.val()
    })
}

//update base de datos 
update(state){
database.ref('/').update({gamestate:state})
}

start(){
    if(gameState===0){
        player= new Player(); 
        player.getCount();
        form= new Form();
        form.display();
    }
}









}