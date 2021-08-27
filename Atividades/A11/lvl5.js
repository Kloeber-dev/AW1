//LEVEL 5
function init(robot) {
    //your code here
}

function loop(robot) {
    var robotX = robot.info().x;

    robot.move(40);
    if (358 < robotX && robotX < 497 ||
        559 < robotX && robotX < 762) {
        robot.jump(10);
    }
}
