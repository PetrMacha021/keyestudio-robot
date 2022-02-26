radio.set_group(727)

speedX = 0
speedY = 0

def on_received_value(name, value):
    global speedX, speedY
    if name == "X":
        speedX = max(-100, min((value-512)/5, 100))
        if speedX > 7:
            mecanumRobot.motor(LR.UPPER_LEFT, MD.FORWARD, speedX)
            mecanumRobot.motor(LR.UPPER_RIGHT, MD.BACK, speedX)
            mecanumRobot.motor(LR.LOWER_LEFT, MD.BACK, speedX)
            mecanumRobot.motor(LR.LOWER_RIGHT, MD.FORWARD, speedX)
        elif speedX < -7:
            mecanumRobot.motor(LR.UPPER_LEFT, MD.BACK, speedX*-1)
            mecanumRobot.motor(LR.UPPER_RIGHT, MD.FORWARD, speedX*-1)
            mecanumRobot.motor(LR.LOWER_LEFT, MD.FORWARD, speedX*-1)
            mecanumRobot.motor(LR.LOWER_RIGHT, MD.BACK, speedX*-1)
        else:
            if speedY < 7 and speedY > -7:
                mecanumRobot.motor(LR.UPPER_LEFT, MD.FORWARD, 0)
                mecanumRobot.motor(LR.UPPER_RIGHT, MD.FORWARD, 0)
                mecanumRobot.motor(LR.LOWER_LEFT, MD.FORWARD, 0)
                mecanumRobot.motor(LR.LOWER_RIGHT, MD.FORWARD, 0)
    elif name == "Y":
        speedY = max(-100, min((value-512)/5, 100))
        if speedY > 7:
            mecanumRobot.motor(LR.UPPER_LEFT, MD.FORWARD, speedY)
            mecanumRobot.motor(LR.UPPER_RIGHT, MD.FORWARD, speedY)
            mecanumRobot.motor(LR.LOWER_LEFT, MD.FORWARD, speedY)
            mecanumRobot.motor(LR.LOWER_RIGHT, MD.FORWARD, speedY)
        elif speedY < -7:
            mecanumRobot.motor(LR.UPPER_LEFT, MD.BACK, speedY*-1)
            mecanumRobot.motor(LR.UPPER_RIGHT, MD.BACK, speedY*-1)
            mecanumRobot.motor(LR.LOWER_LEFT, MD.BACK, speedY*-1)
            mecanumRobot.motor(LR.LOWER_RIGHT, MD.BACK, speedY*-1)
        else:
            if speedX < 7 and speedX > -7:
                mecanumRobot.motor(LR.UPPER_LEFT, MD.FORWARD, 0)
                mecanumRobot.motor(LR.UPPER_RIGHT, MD.FORWARD, 0)
                mecanumRobot.motor(LR.LOWER_LEFT, MD.FORWARD, 0)
                mecanumRobot.motor(LR.LOWER_RIGHT, MD.FORWARD, 0)
    console.log("X"+str(speedX)+" Y"+str(speedY))
radio.on_received_value(on_received_value)