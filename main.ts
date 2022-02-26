radio.setGroup(727)
let speedX = 0
let speedY = 0
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    
    if (name == "X") {
        speedX = Math.max(-100, Math.min((value - 512) / 5, 100))
        if (speedX > 7) {
            mecanumRobot.Motor(LR.Upper_left, MD.Forward, speedX)
            mecanumRobot.Motor(LR.Upper_right, MD.Back, speedX)
            mecanumRobot.Motor(LR.Lower_left, MD.Back, speedX)
            mecanumRobot.Motor(LR.Lower_right, MD.Forward, speedX)
        } else if (speedX < -7) {
            mecanumRobot.Motor(LR.Upper_left, MD.Back, speedX * -1)
            mecanumRobot.Motor(LR.Upper_right, MD.Forward, speedX * -1)
            mecanumRobot.Motor(LR.Lower_left, MD.Forward, speedX * -1)
            mecanumRobot.Motor(LR.Lower_right, MD.Back, speedX * -1)
        } else if (speedY < 7 && speedY > -7) {
            mecanumRobot.Motor(LR.Upper_left, MD.Forward, 0)
            mecanumRobot.Motor(LR.Upper_right, MD.Forward, 0)
            mecanumRobot.Motor(LR.Lower_left, MD.Forward, 0)
            mecanumRobot.Motor(LR.Lower_right, MD.Forward, 0)
        }
        
    } else if (name == "Y") {
        speedY = Math.max(-100, Math.min((value - 512) / 5, 100))
        if (speedY > 7) {
            mecanumRobot.Motor(LR.Upper_left, MD.Forward, speedY)
            mecanumRobot.Motor(LR.Upper_right, MD.Forward, speedY)
            mecanumRobot.Motor(LR.Lower_left, MD.Forward, speedY)
            mecanumRobot.Motor(LR.Lower_right, MD.Forward, speedY)
        } else if (speedY < -7) {
            mecanumRobot.Motor(LR.Upper_left, MD.Back, speedY * -1)
            mecanumRobot.Motor(LR.Upper_right, MD.Back, speedY * -1)
            mecanumRobot.Motor(LR.Lower_left, MD.Back, speedY * -1)
            mecanumRobot.Motor(LR.Lower_right, MD.Back, speedY * -1)
        } else if (speedX < 7 && speedX > -7) {
            mecanumRobot.Motor(LR.Upper_left, MD.Forward, 0)
            mecanumRobot.Motor(LR.Upper_right, MD.Forward, 0)
            mecanumRobot.Motor(LR.Lower_left, MD.Forward, 0)
            mecanumRobot.Motor(LR.Lower_right, MD.Forward, 0)
        }
        
    }
    
    console.log("X" + ("" + speedX) + " Y" + ("" + speedY))
})
