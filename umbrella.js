class Umbrella {
    constructor(x, y, r) {
        var options = {
            isStatic: true
        }
        this.r = r;
        this.animation = loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png",)
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        animation(this.animation, 0, 0, this.r, this.r);
        pop();
    }
}