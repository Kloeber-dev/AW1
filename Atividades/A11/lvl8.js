//LEVEL 8
function init(robot) {
    robot.flag = 0;
}

function loop(robot) {
    robot.move(20);

    if (robot.info().coins > 0) {
        robot.flag++;
    }

    if (robot.flag >= 1) {
        robot.jump(10);
    }
}
