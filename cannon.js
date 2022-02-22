class cannon {
    constructor(x,y,w,h,angle){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.angle = angle
        this.cannonBase1 = loadImage("assets/cannonBase.png")
        this.cannonUp = loadImage("assets/canon.png")
    }
    show(){
        push()
        imageMode(CENTER)
        image(this.cannonUp,this.x,this.y,this.w,this.h)
        pop()
        image(this.cannonBase1,70,20,200,200)
        noFill()

    }
}