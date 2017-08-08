function createPlayer(id, top, left) {
    $("#field").append('<div id=' + id + ' style=top:' + top + 'px;margin-left:' + left + 'px; class="circle">' + id + '</div>');
}


console.log(data);
(function theLoop(i) {
    setTimeout(function () {
        $("#field").html('<div></div>');
        for (let j = 0; j < data.player_positions[i].length; j++) {
            for (let k = 0; k < 3; k++) {
                switch (k) {
                    case 0:
                        var playerId = data.player_positions[i][j][k]
                        break;
                    case 1:
                        var coordinateX = data.player_positions[i][j][k] * 680;
                        break;
                    case 2:
                        var coordinateY = data.player_positions[i][j][k] * 1020;
                        break;
                }
            }
            console.log(data.player_positions[i][j]);
            createPlayer(playerId, coordinateX, coordinateY);
        }
        if (--i) {
            theLoop(i);
        }
    }, 100);
})(data.player_positions.length - 1);