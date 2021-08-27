//LEVEL 7
function init(robot) {
    robot.moedas = robot.info().coins;
    robot.vida = robot.info().energy;
}

function loop(robot) {
    robot.move(40);
    if (robot.info().coins > robot.moedas)
        robot.jump(10);
    else if (robot.info().energy > robot.vida)
        robot.jump(10);

    robot.moedas = robot.info().coins;
    robot.vida = robot.info().energy;
}
