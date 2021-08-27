//LEVEL 3
function init(robot) {
    robot.pular = true;
}

function loop(robot) {
    if (robot.pular) {
        robot.jump(10);
        robot.pular = false;
    } else {
        robot.move(40);
        robot.pular = true;
    }
}
