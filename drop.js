class Drop {
    constructor(x, y, r, options) {
        var options = {
            isStatic: false,
            friction: 0.1,
        }
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position
        ellipseMode(CENTER);
        fill("aqua");
        noStroke();
        ellipse(pos.x,pos.y,this.r,this.r);
    }

    update() {
        if(this.body.position.y > height) {
            Body.setPosition(this.body, {x: random(0,windowWidth), y: random(-400,0)});
        }
    }
}