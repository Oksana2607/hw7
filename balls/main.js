function BallsCanvas(canvasObj){
    this.canvas = document.getElementById(canvasObj);
    this.context = this.canvas.getContext("2d");
    this.items = [];
    let obj = this;
    this.canvas.addEventListener('click', function(event) {
        obj.createBall(event);
    });
}

BallsCanvas.prototype.draw = function () {
    this.context.fillStyle = "white";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.width);

    for(let i = 0; i <this.items.length; i++) {
        this.context.beginPath();
        this.context.arc(this.items[i].x, this.items[i].y, this.items[i].R, 0, Math.PI * 2);
        this.context.fillStyle = this.items[i].color;
        this.context.fill();
        this.context.stroke();
        this.context.closePath();

        if (this.items[i].x + this.items[i].R >= this.canvas.width || this.items[i].x - this.items[i].R <= 0) {
            this.items[i].dx = -this.items[i].dx;
        }
        if (this.items[i].y + this.items[i].R >= this.canvas.height || this.items[i].y - this.items[i].R <= 0) {
            this.items[i].dy = -this.items[i].dy;
        }

        this.items[i].x += this.items[i].dx;
        this.items[i].y += this.items[i].dy;

        for (let j = 0; j < this.items.length; j++) {
            if (!(this.items[i] === this.items[j])) {
                let dx = this.items[i].x - this.items[j].x;
                let dy = this.items[i].y - this.items[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < (this.items[i].R + this.items[j].R)+1) {
                    if (this.items[i].R >= this.items[j].R * 3) {
                        this.items[i].R += this.items[j].R;
                        this.items.splice(j, 1);
                    } else if (this.items[j].R >= this.items[i].R * 3) {
                        this.items[j].R += this.items[i].R;
                        this.items.splice(i, 1);
                    } else {
                        let cos_fi = (this.items[j].x - this.items[i].x) / distance;
                        let sin_fi = (this.items[j].y - this.items[i].y) / distance;

                        let Vn1 = this.items[i].dx * cos_fi + this.items[i].dy * sin_fi;
                        let Vt1 = -this.items[i].dx * sin_fi + this.items[i].dy * cos_fi;

                        let Vn2 = this.items[j].dx * cos_fi + this.items[j].dy * sin_fi;
                        let Vt2 = -this.items[j].dx * sin_fi + this.items[j].dy * cos_fi;

                        let collisionTime = (this.items[i].R + this.items[j].R - distance) / (Vn1 - Vn2);

                        this.items[i].x -= this.items[i].dx * collisionTime;
                        this.items[i].y -= this.items[i].dy * collisionTime;
                        this.items[j].x -= this.items[j].dx * collisionTime;
                        this.items[j].y -= this.items[j].dy * collisionTime;

                        let V = Vn1;
                        Vn1 = Vn2;
                        Vn2 = V;

                        this.items[i].dx = Vn1 * cos_fi - Vt1 * sin_fi;
                        this.items[i].dy = Vn1 * sin_fi + Vt1 * cos_fi;
                        this.items[j].dx = Vn2 * cos_fi - Vt2 * sin_fi;
                        this.items[j].dy = Vn2 * sin_fi + Vt2 * cos_fi;

                        this.items[i].x += this.items[i].dx * collisionTime;
                        this.items[i].y += this.items[i].dy * collisionTime;
                        this.items[j].x += this.items[j].dx * collisionTime;
                        this.items[j].y += this.items[j].dy * collisionTime;
                    }
                }
            }
        }

        if (this.items[i].R*2 > 200) { // > 500
            this.newBall(this.items[i]);
            this.items.splice(i, 1);
        }
    }
};

BallsCanvas.prototype.start = function (){
    setInterval(()=>{this.draw()}, 10);
};

BallsCanvas.prototype.createBall = function (event){

    let rect = this.canvas.getBoundingClientRect();
    let X = event.clientX - rect.left;
    let Y = event.clientY - rect.top;
    let fi = this.getRandomInt(1,360)*Math.PI/180;
    let v = this.getRandomInt(1, 8); //10, 50
    let r = this.getRandomInt(10, 100); //50, 200
    let randomX = Math.cos(fi)*v;
    let randomY = Math.sin(fi)*v;


    if (X + randomX >= this.canvas.width - r) {
        X-=r;
    }
    if (X + randomX <= r) {
        X+=r;
    }
    if (Y + r >= this.canvas.height - r) {
        Y-=r;
    }
    if (Y + randomY <= r) {
        Y+=r;
    }

    let obj = {R: r, x: X, y: Y,  dx: randomX, dy: randomY, speed: v, fi: fi,  color: BallsCanvas.prototype.rndColor()} ;
    this.items.push(obj);
};

BallsCanvas.prototype.newBall = function (item) {
    console.log(item);
    let X = item.x;
    let Y = item.y;
    let v = item.speed;
    let r = parseInt(item.R/5);
    let new_fi = item.fi - (60*Math.PI/180);

    for (let i = 0; i < 5; i++) {
        let randomX = Math.cos(new_fi)*v;
        let randomY = Math.sin(new_fi)*v;

        let obj = {R: r, x: X, y: Y,  dx: randomX, dy: randomY, speed: v, fi: new_fi,  color: BallsCanvas.prototype.rndColor()} ;
        console.log(obj);
        this.items.push(obj);
        new_fi += (30*Math.PI/180);
    }
};


BallsCanvas.prototype.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

BallsCanvas.prototype.rndColor = function() {
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7',
            '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'],
        color = '#', i;
    for (i = 0; i < 6 ; i++) {
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let startBalls = new BallsCanvas("myCanvas");
startBalls.start();