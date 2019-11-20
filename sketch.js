let bubbles = []
console.log(bubbles)
// let unicorn 

function setup() { 
noCanvas()    
let myCanvas = createCanvas(390 , 255)

myCanvas.parent('myCanvas')
    for (let i = 0; i < 100; i++) {
        let x = random(width)
        let y = random(height)
        let r = random(10, 50)
        bubbles[i] = new Bubble(x + random(), y + random(), random(-7, 600) / r)
    }


    unicorn = new Bubble(400, 200, 50)
}

function draw() {
    background(124, 154, 209)


    // unicorn.x = mouseX
    // unicorn.y = mouseY
    // unicorn.show()
    // unicorn.move()

    for (let b of bubbles){
        b.show()
        b.move()
        let overlapping = false
        for (let other of bubbles) {
            if (b !== other && b.intersects(other)){
                overlapping = true
            } 
        }
        if (overlapping) {
            b.changeColor(173, 216, 230)
        } else{b.changeColor(251, 176, 59)}
    }

// for (let i = 0; i < bubbles.length; i++){
//     bubbles[i].show()
//     bubbles[i].move()
//     if (unicorn.intersects(b)){
//         background
//     }

//works like above

}

class Bubble{
    constructor(x, y, r = 50){
        this.x = x
        this.y = y
        this.r = r
        this.brightness = 0
    }

    intersects(other){
        let d = dist(this.x, this.y, other.x, other.y)
        return (d < this.r + other.r)

        //condense version of same code above
        // if (d < this.r + other.r) {
        //     return true
        // } else {
        //     return false
        // }
       
    } 

    changeColor(bright) {
        this.brightness = bright
    }

    contains(px, py) {
        let d =dist(px, py, this.x, this.y)
        if (d < this.r) {
            return true
        }
        else {
            return false
        }
    }

    move(){
        this.x = this.x + random(random(-5, 5))
        this.y = this.y + random(random(-3, 3))
    }

    show(){
        stroke(251, 176, 59)
        strokeWeight(random(-3, 2))
        fill(this.brightness, 125)
        ellipse(this.x, this.y, this.r * 2)
    }
    
}