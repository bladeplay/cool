class Game{
constructor(){

}
getState(){
    var gameStateRef =database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState=data.val();
    });

}
update(state){
    database.ref('/').update({
        gameState:state
    });
}
start(){
    if(gameState===0){
        player =new Player();
        player.getCount();
        form=new Form();
        form.display();
    }
}
play(){
    form.hide();
    textSize(30);
    text("Game Start",120,100);
    Player.getPlayerInfo();

    if(all_players!==undefined){
    var display_Pose=130;
    for(var plr in all_players){
       if (plr==="player" + player.index)
          fill("red");
          else
          fill("black");
    
     display_Pose+=20;
     textSize(15);
     text(all_players[plr].name + ": " + all_players[plr].distance,120,display_Pose)
    }
}
if(keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance+=50;
    player.update();
}
}
}
