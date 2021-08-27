//LEVEL 4
function init(robot) {
    //your code here
}

function loop(robot) {
    if (robot.info().x < 537 && robot.info().x > 400) {
        robot.jump(10);
    } else {
        robot.move(40);
    }
}