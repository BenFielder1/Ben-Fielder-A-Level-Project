export function createNewPlatforms(game, physicsGroup, platformData){
    let newPlatform;
    for(let i = 0; i < platformData.length; i++){
        newPlatform = game.add.rectangle(platformData[i].x, platformData[i].y, platformData[i].w, platformData[i].h, 0x00ff00)
        physicsGroup.add(newPlatform)
    }
}

export function createNewPlayer(game, physicsGroup, x, y){
    let player = game.add.rectangle(x, y, 50, 50, 0xff0000)
    physicsGroup.add(player)
    return player
}