class Game{
    constructor(){
    }

// read the game State from the database
    getState(){
     
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })


    }

    //update the game State in the db to value passed in paranthese
    update(state){
     database.ref('/').update({
         gameState:state
     })
    }

     start(){
         if (gameState===0) {
             player=new Player();
             player.getCount();
             form=new Form();
             form.display();

            }
     }


    
}