let speed = 25;
radio.setGroup(69)

function forward() {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, speed);
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, speed);
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, speed);
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, speed);
}

function backward() {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, speed);
    mecanumRobot.Motor(LR.Upper_right, MD.Back, speed);
    mecanumRobot.Motor(LR.Lower_left, MD.Back, speed);
    mecanumRobot.Motor(LR.Lower_right, MD.Back, speed);
}

function right() {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, speed);
    mecanumRobot.Motor(LR.Upper_right, MD.Back, speed);
    mecanumRobot.Motor(LR.Lower_left, MD.Back, speed);
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, speed);
}

function left() {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, speed);
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, speed);
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, speed);
    mecanumRobot.Motor(LR.Lower_right, MD.Back, speed);
}

function upright() {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, speed);
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, speed);
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, speed);
    mecanumRobot.Motor(LR.Lower_right, MD.Back, speed);
}

function upleft() {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, speed);
    mecanumRobot.Motor(LR.Upper_right, MD.Back, speed);
    mecanumRobot.Motor(LR.Lower_left, MD.Back, speed);
    mecanumRobot.Motor(LR.Lower_right, MD.Back, speed);
}

function stop() {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 0);
    mecanumRobot.Motor(LR.Upper_right, MD.Back, 0);
    mecanumRobot.Motor(LR.Lower_left, MD.Back, 0);
    mecanumRobot.Motor(LR.Lower_right, MD.Back, 0);
}

upright();
/*
radio.onReceivedString(function(receivedString: string) {
    switch(receivedString) {
        case "U":
            forward();
            break;
        case "D":
            backward();
            break;
        case "L":
            left();
            break;
        case "R":
            right();
            break;
        case "UR":
            upright();
            break;
        case "UL":
            upleft();
            break;
        case "DR":
            break;
        case "DL":
            break;
        case "NIC":
            stop();
            break;
        default:
            break;
    }
});*/