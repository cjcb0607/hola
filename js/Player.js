class Player{
    constructor(){
    }

    getCount(){
        playerCountRef=database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount=data.val()
        })
    }
    
    //update base de datos 
    updateCount(pCount){
    database.ref('/').update({playerCount:pCount})
    }
    
    update(nombre){
        var playerindex= "player"+playerCount 
        database.ref(playerindex).set({name:nombre})
    }
}