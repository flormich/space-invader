function Sprite(filename, left, top) {
    this.vais = window.document.createElement("img");
    this.vais.classList.add("vais");
    // this.vais.height = 60;
    this.vais.width = 70;
    this.vais.src = filename;
    // this.vais.width = width;
    // this.vais.height = height;
    this.vais.style.position = "absolute";

    // alert ('height = ' + this.vais.clientHeight);

    // this.vais.style.left = "50%";
    // this.vais.style.top = "85%";

    //ici je définie les box de mes images. DOnc l'info margin du css les mettre ici en déduisant la hauteur de mes sprites afin d'avoir la m^me hauteur de box

    window.document.body.appendChild(this.vais);

    Object.defineProperty(this, "left", {
        get: function () {
            return this._left;
        },
        set: function (value) {
            this._left = value;
            this.vais.style.left = value + "px";
        }
    });

    Object.defineProperty(this, "top", {
        get: function () {
            return this._top;
        },
        set: function (value) {
            this._top = value;
            this.vais.style.top = value + "px";
        }
    })

    Object.defineProperty(this, "display", {
        get: function () {
            return this.vais.style.display;
        },
        set: function (value) {
            this.vais.style.display = value;
        }
    });

    this.left = left;
    this.top = top;
}

Sprite.prototype.startAnimation = function (fct, interval) {
    if (this._clock) window.clearInterval(this._clock);
    this._clock = window.setInterval(() => {
        fct(this);
    }, interval);
};

Sprite.prototype.stopAnimation = function () {
    window.clearInterval(this._clock);
};


Sprite.prototype.checkCollision = function (other) {
    return ((this.top < (other.top + other.vais.height) &&
         (this.top + this.vais.height) > other.top) &&
         (this.left < (other.left + other.vais.width) &&
         (this.left + this.vais.width) > other.left))
};