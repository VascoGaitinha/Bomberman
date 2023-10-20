this.obstacles.forEach(element => {
    if( element.exploded ===true){
        if (player.left === element.left || player.top === element.top){
            console.log("apanhou fogo")
            this.lives --;
        }}
});
