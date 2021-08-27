//LEVEL 6
function init(robot) {
    // your code here
}

function loop(robot) {
    if (robot.info().coins % 2 == 0)
        robot.move(40);
    else
        robot.move(-40);
}
