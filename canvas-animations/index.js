window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class MouseMovementEffect {
    constructor(canvas, ctx) {
      this.canvas = canvas;
      this.ctx = ctx;
      this.particles = [];
      this.hue = 0;
      this.mouse = {
        x: undefined,
        y: undefined,
      };

      this.mouseEvent = (e) => {
        this.mouse.x = e.x;
        this.mouse.y = e.y;
        this.addParticles(1);
      };

      this.clickEvent = (e) => {
        this.mouse.x = e.x;
        this.mouse.y = e.y;
        this.addParticles(20);
        console.log("click");
      };
    }

    init() {
      canvas.addEventListener("click", this.clickEvent);
      canvas.addEventListener("mousemove", this.mouseEvent);
    }

    update() {
      this.hue += 2;
      this.particles = this.particles.filter((p) => p.size >= 0.3);
      this.particles.forEach((p) => p.update());
    }

    draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].draw(this.ctx);

        for (let j = i; j < this.particles.length; j++) {
          if (j === i) continue;
          const dx = this.particles[i].x - this.particles[j].x;
          const dy = this.particles[i].y - this.particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.particles[i].color;
            this.ctx.lineWidth = this.particles[i].size * 0.1;
            this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
            this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
            this.ctx.stroke();
            this.ctx.restore();
          }
        }
      }
    }

    addParticles(num) {
      for (let i = 0; i < num; i++) {
        this.particles.push(
          new MouseMoveParticle({
            x: this.mouse.x,
            y: this.mouse.y,
            speedX: Math.random() * 4 - 2,
            speedY: Math.random() * 4 - 2,
            color: `hsl(${this.hue}, 100%, 50%)`,
          })
        );
      }
    }

    dispose() {
      canvas.removeEventListener("mousemove", this.mouseEvent);
      canvas.removeEventListener("click", this.clickEvent);
      this.particles = [];
    }
  }

  class FlowFields {
    constructor(canvas, ctx) {
      this.canvas = canvas;
      this.ctx = ctx;
      this.particles = [];
      this.numberOfParticles = 1500;

      this.cellSize = 10;
      this.rows;
      this.cols;
      this.flowField = [];
      this.curve = 1;
      this.zoom = 0.1;
      this.color = 600;
      this.debug = false;
      this.setDebug = (e) => {
        if (e.key === "d") this.debug = !this.debug;
      };

      window.addEventListener("keydown", this.setDebug);
      this.sliderDiv;
      this.addSliders();
    }

    addSliders() {
      this.sliderDiv = document.createElement("div");
      this.sliderDiv.classList.add("slider-container");
      this.sliderDiv.innerHTML = `<label for="zoom-slider">Zoom:</label>
      <input
        id="zoom-slider"
        type="range"
        min="0.001"
        max="1"
        value="${this.zoom}"
        step="0.001"
      />

      <label for="curve-slider">Curve:</label>
      <input
        id="curve-slider"
        type="range"
        min="0"
        max="20"
        value="${this.curve}"
        step="0.5"
      />
      
      <label for="color-slider">Colour:</label>
      <input
        id="color-slider"
        type="range"
        min="0"
        max="800"
        value="${this.color}"
        step="1"
      />`;

      document.body.appendChild(this.sliderDiv);

      document.getElementById("zoom-slider").addEventListener("change", (e) => {
        this.zoom = e.srcElement.value * 0.5;

        this.particles = [];
        this.flowField = [];
        this.init();
      });
      document
        .getElementById("curve-slider")
        .addEventListener("change", (e) => {
          this.curve = e.srcElement.value;

          this.particles = [];
          this.flowField = [];
          this.init();
        });
      document
        .getElementById("color-slider")
        .addEventListener("change", (e) => {
          this.color = e.srcElement.value * 0.5;

          this.particles = [];
          this.flowField = [];
          this.init();
        });
    }

    init() {
      // create flow field
      this.rows = Math.floor(this.canvas.height / this.cellSize);
      this.cols = Math.floor(this.canvas.width / this.cellSize);
      for (let y = 0; y < this.rows; y++) {
        for (let x = 0; x < this.cols; x++) {
          let angle =
            (Math.cos(x * this.zoom) + Math.sin(y * this.zoom)) * this.curve;
          this.flowField.push(angle);
        }
      }

      // create particles
      this.addParticles(this.numberOfParticles);
    }

    drawGrid() {
      this.ctx.save();
      this.ctx.strokeStyle = "white";
      this.ctx.lineWidth = 0.3;
      for (let c = 0; c < this.cols; c++) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.cellSize * c, 0);
        this.ctx.lineTo(this.cellSize * c, this.canvas.height);
        this.ctx.stroke();
      }
      for (let r = 0; r < this.rows; r++) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.cellSize * r);
        this.ctx.lineTo(this.canvas.width, this.cellSize * r);
        this.ctx.stroke();
      }

      this.ctx.restore();
    }

    update() {
      for (let i = 0; i < this.particles.length; i++) {
        this.updateParticle(this.particles[i]);
      }
    }

    resetParticle(p) {
      p.x = Math.floor(Math.random() * this.canvas.width);
      p.y = Math.floor(Math.random() * this.canvas.height);
      p.history = [{ x: p.x, y: p.y }];
      p.timer = p.maxHistory * 2;
    }

    updateParticle(p) {
      p.timer--;

      if (p.timer >= 1) {
        let x = Math.floor(p.x / this.cellSize);
        let y = Math.floor(p.y / this.cellSize);
        let index = y * this.cols + x;
        p.angle = this.flowField[index];

        p.speedX = Math.cos(p.angle);
        p.speedY = Math.sin(p.angle);
        p.x += p.speedX * p.speedModifier;
        p.y += p.speedY * p.speedModifier;

        p.history.push({ x: p.x, y: p.y });
        if (p.history.length > p.maxHistory) {
          p.history.shift();
        }
      } else if (p.history.length > 1) {
        p.history.shift();
      } else {
        this.resetParticle(p);
      }
    }

    draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.particles.forEach((p) => p.draw(this.ctx));
      if (this.debug) this.drawGrid();
    }

    addParticles(num) {
      let perc = 100;
      let hue = this.color;
      for (let i = 0; i < num; i++) {
        perc -= 50 / num;
        hue += 50 / num;
        this.particles.push(
          new FlowFieldParticle({
            x: Math.floor(Math.random() * this.canvas.width),
            y: Math.floor(Math.random() * this.canvas.height),
            color: `hsl(${hue}, ${perc}%, 50%)`,
            maxHistory: Math.floor(Math.random() * 200 + 10),
            speedModifier: Math.floor(Math.random() * 3 + 1),
            timer: Math.floor(Math.random() * 200 + 10) * 2,
          })
        );
      }
    }

    dispose() {
      this.sliderDiv.remove();
      window.removeEventListener("keydown", this.setDebug);
      this.flowField = [];
      this.particles = [];
    }
  }

  class FlowFieldOverlay {
    constructor(canvas, ctx) {
      this.canvas = canvas;
      this.ctx = ctx;
      this.particles = [];
      this.numberOfParticles = 1000;

      this.cellSize = 10;
      this.rows;
      this.cols;
      this.flowField = [];
      this.curve = 5;
      this.zoom = 0.01;
      this.debug = false;
      this.textInput;
      this.currentText = "FLOW";
      this.setDebug = (e) => {
        if (e.key === "d") this.debug = !this.debug;
      };

      window.addEventListener("keydown", this.setDebug);

      this.keyEvent = (e) => {
        this.currentText = e.target.value;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles = [];
        this.flowField = [];
        this.init();
      };

      this.addInputDiv();
      this.textInput = document.getElementById("textInput");
      this.textInput.addEventListener("keyup", this.keyEvent);
      this.textInput.value = this.currentText;
    }

    addInputDiv() {
      var elemInput = document.createElement("input");
      elemInput.type = "text";
      elemInput.className = "textInput";
      elemInput.setAttribute("id", "textInput");
      elemInput.setAttribute("placeholder", "Type something...");
      document.body.appendChild(elemInput);
    }

    drawText() {
      const textSize = Math.max(800 - this.currentText.length * 50, 150);
      this.ctx.font = `${textSize}px Impact`;
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";

      const gradient1 = this.ctx.createLinearGradient(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );

      gradient1.addColorStop(0.2, "rgb(255,0,0)");
      gradient1.addColorStop(0.4, "rgb(0,255,0)");
      gradient1.addColorStop(0.6, "rgb(150,100,100)");
      gradient1.addColorStop(0.8, "rgb(0,255,255)");

      const gradient2 = this.ctx.createLinearGradient(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );

      gradient2.addColorStop(0.2, "rgb(255,255,0)");
      gradient2.addColorStop(0.4, "rgb(200,5,50)");
      gradient2.addColorStop(0.6, "rgb(150,255,255)");
      gradient2.addColorStop(0.8, "rgb(0,255,255)");

      const gradient3 = this.ctx.createRadialGradient(
        this.canvas.width / 2,
        this.canvas.height / 2,
        10,
        this.canvas.width / 2,
        this.canvas.height / 2,
        this.canvas.width / 2
      );

      gradient3.addColorStop(0.2, "rgb(255,255,0)");
      gradient3.addColorStop(0.4, "rgb(200,150,50)");
      gradient3.addColorStop(0.6, "rgb(0,255,255)");
      gradient3.addColorStop(0.8, "rgb(0,0,255)");

      this.ctx.fillStyle = gradient1;
      this.ctx.fillText(
        this.currentText,
        this.canvas.width / 2,
        this.canvas.height / 2
      );
    }

    init() {
      this.canvas.width =
        Math.round(window.innerWidth / this.cellSize) * this.cellSize;
      // create flow field
      this.rows = Math.floor(this.canvas.height / this.cellSize);
      this.cols = Math.floor(this.canvas.width / this.cellSize);

      // draw text
      this.drawText();

      // scan pixel data
      const imageData = this.ctx.getImageData(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );

      for (let y = 0; y < imageData.height; y += this.cellSize) {
        for (let x = 0; x < imageData.width; x += this.cellSize) {
          const index = (y * imageData.width + x) * 4;
          const red = imageData.data[index];
          const green = imageData.data[index + 1];
          const blue = imageData.data[index + 2];
          const alpha = imageData.data[index + 3];
          const color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
          const grayscale = (red + green + blue) / 3;
          const colorAngle = ((grayscale / 255) * 6.28).toFixed(2);
          this.flowField.push({ x, y, alpha, color, colorAngle });
        }
      }

      // create particles
      this.addParticles(this.numberOfParticles);
    }

    drawGrid() {
      this.ctx.save();
      this.ctx.strokeStyle = "white";
      this.ctx.lineWidth = 0.3;
      for (let c = 0; c < this.cols; c++) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.cellSize * c, 0);
        this.ctx.lineTo(this.cellSize * c, this.canvas.height);
        this.ctx.stroke();
      }
      for (let r = 0; r < this.rows; r++) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.cellSize * r);
        this.ctx.lineTo(this.canvas.width, this.cellSize * r);
        this.ctx.stroke();
      }

      this.ctx.restore();
    }

    update() {
      for (let i = 0; i < this.particles.length; i++) {
        this.updateParticle(this.particles[i]);
      }
    }

    resetParticle(p) {
      let attempts = 0;
      let resetSuccess = false;

      while (attempts < 20 && !resetSuccess) {
        attempts++;
        let testIndex = Math.floor(Math.random() * this.flowField.length);
        if (this.flowField[testIndex].alpha > 0) {
          p.x = this.flowField[testIndex].x;
          p.y = this.flowField[testIndex].y;
          p.color = this.flowField[testIndex].color;
          p.history = [{ x: p.x, y: p.y }];
          p.timer = p.maxHistory * 2;
          resetSuccess = true;
        }
      }

      if (!resetSuccess) {
        p.x = Math.random() * this.canvas.width;
        p.y = Math.random() * this.canvas.height;
        p.history = [{ x: p.x, y: p.y }];
        p.timer = p.maxHistory * 2;
        p.color = `hsl(240, 80%, 50%)`;
      }
    }

    updateParticle(p) {
      p.timer--;

      if (p.timer >= 1) {
        let x = Math.floor(p.x / this.cellSize);
        let y = Math.floor(p.y / this.cellSize);
        let index = y * this.cols + x;
        p.newAngle = this.flowField[index]?.colorAngle;
        if (p.angle > p.newAngle) {
          p.angle -= p.angleCorrector;
        } else if (p.angle < p.newAngle) {
          p.angle += p.angleCorrector;
        } else {
          p.angle = p.newAngle;
        }

        p.speedX = Math.cos(p.angle);
        p.speedY = Math.sin(p.angle);
        p.x += p.speedX * p.speedModifier;
        p.y += p.speedY * p.speedModifier;

        p.history.push({ x: p.x, y: p.y });
        if (p.history.length > p.maxHistory) {
          p.history.shift();
        }
      } else if (p.history.length > 1) {
        p.history.shift();
      } else {
        this.resetParticle(p);
      }
    }

    draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.particles.forEach((p) => p.draw(this.ctx));
      if (this.debug) {
        this.drawGrid();
        this.drawText();
      }
    }

    addParticles(num) {
      let perc = 100;
      let hue = 240;
      for (let i = 0; i < num; i++) {
        perc -= 50 / num;
        hue += 50 / num;
        const p = new FlowFieldOverlayParticle({
          x: Math.floor(Math.random() * this.canvas.width),
          y: Math.floor(Math.random() * this.canvas.height),
          color: `hsl(${hue}, ${perc}%, 50%)`,
          maxHistory: Math.floor(Math.random() * 200 + 10),
          speedModifier: Math.floor(Math.random() * 3 + 1),
          timer: Math.floor(Math.random() * 200 + 10) * 2,
        });
        this.particles.push(p);

        this.resetParticle(p);
      }
    }

    dispose() {
      this.textInput.remove();
      window.removeEventListener("keydown", this.setDebug);
      this.flowField = [];
      this.particles = [];
    }
  }

  class TextEffect {
    constructor(canvas, ctx) {
      this.canvas = canvas;
      this.ctx = ctx;
      this.textInput;

      this.lineHeight = 200;
      this.fontSize = 200;
      this.currentText = "";

      this.particles = [];
      this.gap = 2;
      this.mouse = {
        radius: 20000,
        x: 0,
        y: 0,
      };

      this.keyEvent = (e) => {
        this.currentText = e.target.value;

        const length = this.currentText.replace(" ", "").length;
        if (length < 5) {
          this.gap = 2;
        } else if (length < 12) {
          this.gap = 3;
        } else if (length < 25) {
          this.gap = 4;
        } else if (length < 35) {
          this.gap = 5;
        } else if (length < 45) {
          this.gap = 6;
        } else if (length < 80) {
          this.gap = 8;
        } else {
          this.gap = 10;
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.wrapText(e.target.value);
        this.convertToParticles();
      };
      this.mouseMoveEvent = (e) => {
        this.mouse.x = e.x;
        this.mouse.y = e.y;
      };
    }

    init() {
      this.addInputDiv();
      this.textInput = document.getElementById("textInput");
      this.textInput.addEventListener("keyup", this.keyEvent);
      this.textInput.value = this.currentText;
      this.wrapText(this.currentText);
      this.convertToParticles();

      window.addEventListener("mousemove", this.mouseMoveEvent);
    }

    addInputDiv() {
      var elemInput = document.createElement("input");
      elemInput.type = "text";
      elemInput.className = "textInput";
      elemInput.setAttribute("id", "textInput");
      elemInput.setAttribute("placeholder", "Type something...");
      document.body.appendChild(elemInput);
    }

    wrapText(text) {
      const gradient = this.ctx.createLinearGradient(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      gradient.addColorStop(0.3, "red");
      gradient.addColorStop(0.5, "fuchsia");
      gradient.addColorStop(0.7, "purple");
      this.ctx.fillStyle = gradient;
      this.ctx.strokeStyle = "white";
      this.ctx.font = `${this.fontSize}px Impact`;
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";

      let linesArray = [];
      let lineCounter = 0;
      let line = "";
      let testLine;
      let words = text.split(" ");

      for (let i = 0; i < words.length; i++) {
        testLine = line + words[i] + " ";
        if (this.ctx.measureText(testLine).width > this.canvas.width * 0.8) {
          line = words[i] + " ";
          lineCounter++;
        } else {
          line = testLine;
        }
        linesArray[lineCounter] = line;
      }
      let textHeight = this.lineHeight * lineCounter;
      let textY = this.canvas.height / 2 - textHeight / 2;
      linesArray.forEach((el, i) => {
        this.ctx.fillText(
          el,
          this.canvas.width / 2,
          textY + i * this.lineHeight
        );
        this.ctx.strokeText(
          el,
          this.canvas.width / 2,
          textY + i * this.lineHeight
        );
      });
    }

    convertToParticles() {
      this.particles = [];
      const pixels = this.ctx.getImageData(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );

      for (let y = 0; y < this.canvas.height; y += this.gap) {
        for (let x = 0; x < this.canvas.width; x += this.gap) {
          const index = (y * this.canvas.width + x) * 4;
          const alpha = pixels.data[index + 3];
          if (alpha > 0) {
            const red = pixels.data[index];
            const green = pixels.data[index + 1];
            const blue = pixels.data[index + 2];
            const color = `rgb(${red}, ${green}, ${blue})`;
            this.particles.push(
              new TextParticle({
                x: Math.random() * this.canvas.width,
                y: 0,
                originX: x,
                originY: y,
                color,
                size: this.gap - 1,
              })
            );
          }
        }
      }
    }

    update() {
      for (let i = 0; i < this.particles.length; i++) {
        this.updateParticle(this.particles[i]);
      }
    }

    updateParticle(p) {
      p.dx = this.mouse.x - p.x;
      p.dy = this.mouse.y - p.y;
      p.distance = p.dx * p.dx + p.dy * p.dy;
      p.force = -this.mouse.radius / p.distance;

      if (p.distance < this.mouse.radius) {
        p.angle = Math.atan2(p.dy, p.dx);
        p.vx += p.force * Math.cos(p.angle);
        p.vy += p.force * Math.sin(p.angle);
      }

      p.x += (p.vx *= p.friction) + (p.originX - p.x) * p.ease;
      p.y += (p.vy *= p.friction) + (p.originY - p.y) * p.ease;
    }

    draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.particles.forEach((p) => p.draw(this.ctx));
    }

    dispose() {
      this.particles = [];
      this.textInput.remove();
      window.removeEventListener("mousemove", this.mouseMoveEvent);
    }
  }

  class BlobEffect {
    constructor(canvas, ctx) {
      this.canvas = canvas;
      this.ctx = ctx;
      this.blobs = [];
      this.numberOfBlobs = 50;
    }

    init() {
      canvas.classList.add("blob-effect");

      for (let i = 0; i < this.numberOfBlobs; i++) {
        this.blobs.push(new BlobParticle(this));
      }
    }

    update() {
      this.blobs.forEach((b) => b.update());
    }

    draw() {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.blobs.forEach((b) => b.draw(this.ctx));
    }

    dispose() {
      canvas.classList.remove("blob-effect");
      this.blobs = [];
    }
  }

  class OrbitEffect {
    constructor(canvas, ctx) {
      this.canvas = canvas;
      this.ctx = ctx;
      this.particles = [];

      this.mouseEvent = (e) => {
        this.particles.push(
          new CircularMovementParticle({
            x: e.x,
            y: e.y,
            middleX: this.canvas.width / 2,
            middleY: this.canvas.height / 2,
          })
        );
      };

      this.mouseDownEvent = (e) => {
        document.addEventListener("mousemove", this.mouseMoveEvent);
        this.mouseMoveEvent(e);
      };

      this.mouseMoveEvent = (e) => {
        this.particles.push(
          new CircularMovementParticle({
            x: e.x,
            y: e.y,
            middleX: this.canvas.width / 2,
            middleY: this.canvas.height / 2,
          })
        );
      };

      this.mouseUpEvent = (e) => {
        document.removeEventListener("mousemove", this.mouseMoveEvent);
      };
    }

    init() {
      this.particles.push(
        new CircularMovementParticle({
          x: this.canvas.width / 2 + 20,
          y: this.canvas.height / 2 + 20,
          middleX: this.canvas.width / 2,
          middleY: this.canvas.height / 2,
        })
      );
      document.addEventListener("mousedown", this.mouseDownEvent);
      document.addEventListener("mouseup", this.mouseUpEvent);
    }

    update() {
      this.particles.forEach((p) => p.update());
    }

    draw() {
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.particles.forEach((p) => p.draw(this.ctx));
    }

    dispose() {
      this.particles = [];
    }
  }

  class FractalDraw {
    constructor(canvas, ctx) {
      this.canvas = canvas;
      this.ctx = ctx;

      this.isDrawing = false;
      this.lastX = 0;
      this.lastY = 0;

      canvas.addEventListener("mousedown", (event) => {
        this.isDrawing = true;
        this.lastX = event.offsetX;
        this.lastY = event.offsetY;
      });

      canvas.addEventListener("mousemove", (event) => {
        let symmetry = 2;
        let angle = 6.28 / symmetry;
        if (this.isDrawing) {
          this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);

          let mx = this.lastX;
          let my = this.lastY;
          let px = event.offsetX;
          let py = event.offsetY;

          for (let i = 0; i < symmetry; i++) {
            this.ctx.strokeStyle = "blue";
            this.ctx.rotate(angle);

            this.ctx.beginPath();
            this.ctx.moveTo(mx, my);
            this.ctx.lineTo(px, py);
            this.ctx.stroke();
          }

          this.lastX = event.offsetX;
          this.lastY = event.offsetY;
        }
      });

      canvas.addEventListener("mouseup", () => {
        this.isDrawing = false;
      });
    }

    init() {}

    draw() {}

    update() {}
  }

  let effect = new MouseMovementEffect(canvas, ctx);
  effect.init();
  const effectSelect = document.getElementById("effect-select");
  effectSelect.addEventListener("change", function () {
    const selectedValue = effectSelect.value;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    effect.dispose();

    switch (selectedValue) {
      case "mouse-movement":
        effect = new MouseMovementEffect(canvas, ctx);
        break;
      case "flow-fields":
        effect = new FlowFields(canvas, ctx);
        break;
      case "flow-field-overlay":
        effect = new FlowFieldOverlay(canvas, ctx);
        break;
      case "particle-text":
        effect = new TextEffect(canvas, ctx);
        break;
      case "blob-effect":
        effect = new BlobEffect(canvas, ctx);
        break;
      case "orbit-effect":
        effect = new OrbitEffect(canvas, ctx);
        break;
      default:
        break;
    }

    effect.init();
  });

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    effect.dispose();
    effect.init();
  });

  function animate() {
    effect.update();
    effect.draw();
    requestAnimationFrame(animate);
  }

  animate();
});
