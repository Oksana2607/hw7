function PaintView() {
    this.canvasElement = document.getElementById('canvas');
    this.ctx = this.canvasElement.getContext('2d');
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = 'black';
}

PaintView.prototype.drawLine = function (x, y) {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.ctx.lineWidth / 2, 0, Math.PI * 2);
    this.ctx.fillStyle = this.ctx.strokeStyle;
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
};

PaintView.prototype.setLineWidth = function (value) {
    this.ctx.lineWidth = value;
};

PaintView.prototype.setStrokeStyle = function (value) {
    this.ctx.strokeStyle = value;
};

PaintView.prototype.reset = function () {
    this.ctx.beginPath();
};

PaintView.prototype.clearAll = function () {
    this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
};

function App() {
    this.store = new Store();
    this.veiw = new PaintView();
    this.isDrawing = false;
    this.widthInput = document.getElementById('range');
    this.styleInput = document.getElementById('color');
    this.clearButton = document.getElementById('clear');
}

App.prototype.init = function () {
    this.widthInput.addEventListener('change', event => {
        this.store.setLineWidth(+event.target.value);
        this.veiw.setLineWidth(+event.target.value);
    });

    this.styleInput.addEventListener('change', event => {
        this.store.setStrokeStyle(event.target.value);
        this.veiw.setStrokeStyle(event.target.value);
    });

    this.clearButton.addEventListener('click', () => {
        this.veiw.clearAll();
    });

    this.veiw.canvasElement.addEventListener('mousedown', () => {
        this.isDrawing = true;
    });

    this.veiw.canvasElement.addEventListener('mousemove', event => {
        if (this.isDrawing) {
            const {layerX, layerY} = event;
            this.veiw.drawLine(layerX, layerY);
        }
    });

    this.veiw.canvasElement.addEventListener('mouseup', () => {
        this.isDrawing = false;
        this.veiw.reset();
    });

    this.veiw.canvasElement.addEventListener('mouseleave', () => {
        this.isDrawing = false;
        this.veiw.reset();
    });
};

const app = new App;
app.init();

