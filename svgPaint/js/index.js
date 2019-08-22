function PaintView() {
    this.svgElement = document.getElementById('svg');
    this.lineWidth = 5;
    this.strokeStyle = 'black';
    this.path = null;
    this.coords = null;
}

PaintView.prototype.startDraw = function (x, y) {
    this.coords = `m${x} ${y} `;
    this.path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    this.path.setAttributeNS(null, 'stroke', this.strokeStyle);
    this.path.setAttributeNS(null, 'stroke-width', this.lineWidth);
    this.path.setAttributeNS(null, 'fill', 'none');
    this.path.setAttributeNS(null, 'd', this.coords);
    this.svgElement.appendChild(this.path);
};

PaintView.prototype.drawLine = function (x, y) {
    this.coords += `L${x} ${y} `;
    this.path.setAttributeNS(null, 'd', this.coords);
};

PaintView.prototype.setLineWidth = function (value) {
    this.lineWidth = value;
};

PaintView.prototype.setStrokeStyle = function (value) {
    this.strokeStyle = value;
};

PaintView.prototype.reset = function () {
    this.path = null;
    this.coords = null;
};

PaintView.prototype.clearAll = function () {
    this.svgElement.innerHTML = '0';
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

    this.veiw.svgElement.addEventListener('mousedown', event => {
        this.isDrawing = true;
        const {offsetX, offsetY} = event;
        this.veiw.startDraw(offsetX, offsetY);
    });

    this.veiw.svgElement.addEventListener('mousemove', event => {
        if (this.isDrawing) {
            const {offsetX, offsetY} = event;
            this.veiw.drawLine(offsetX, offsetY);
        }
    });

    this.veiw.svgElement.addEventListener('mouseup', () => {
        this.isDrawing = false;
        this.veiw.reset();
    });

    this.veiw.svgElement.addEventListener('mouseleave', () => {
        this.isDrawing = false;
        this.veiw.reset();
    });
};

const app = new App;
app.init();







