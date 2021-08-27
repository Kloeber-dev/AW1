//LEVEL 1
function init(robot) {
    console.log("Robot initializing...");
}

function loop(robot) {
    console.log("Robot looping...");
    robot.action = { type: 'move', amount: 40 };
}
