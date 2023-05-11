class MouseMoveParticle {
  constructor({ x, y, color, speedX, speedY, size }) {
    this.x = x || 0;
    this.y = y || 0;
    this.color = color || "white";
    this.speedX = speedX || 0;
    this.speedY = speedY || 0;
    this.size = size || Math.random() * 15 + 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) {
      this.size -= 0.1;
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

class FlowFieldParticle {
  constructor({ x, y, color, maxHistory, speedModifier, timer }) {
    this.x = x || 0;
    this.y = y || 0;
    this.speedX = 0;
    this.speedY = 0;
    this.color = color || "white";
    this.history = [{ x, y }];
    this.maxHistory = maxHistory || 200;
    this.speedModifier = speedModifier || 1;
    this.timer = timer || this.maxHistory * 2;
    this.angle = 0;
  }

  draw(ctx) {
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.history[0].x, this.history[0].y);
    for (let i = 0; i < this.history.length; i++) {
      ctx.lineTo(this.history[i].x, this.history[i].y);
    }
    ctx.stroke();
  }
}

class FlowFieldOverlayParticle extends FlowFieldParticle {
  constructor({ x, y, color, maxHistory, speedModifier, timer }) {
    super({ x, y, color, maxHistory, speedModifier, timer });
    this.newAngle = 0;
    this.angleCorrector = 0.2;
  }

  draw(ctx) {
    super.draw(ctx);
  }
}

class TextParticle {
  constructor({
    x,
    y,
    originX,
    originY,
    speedX,
    speedY,
    speedModifier,
    size,
    color,
    includeHistory,
    maxHistory,
    timer,
  }) {
    this.x = x || 0;
    this.y = y || 0;
    this.originX = originX || this.x;
    this.originY = originY || this.y;
    this.speedX = speedX || 0;
    this.speedY = speedY || 0;
    this.speedModifier = speedModifier || 1;
    this.color = color || "white";
    this.size = size || Math.random() * 15 + 1;
    this.history = includeHistory ? [{ x: this.x, y: this.y }] : null;
    this.maxHistory = maxHistory || 0;
    this.angle = 0;
    this.newAngle = 0;
    this.angleCorrector = 0.2;
    this.timer = timer || this.maxHistory;

    //
    this.dx = 0;
    this.dy = 0;
    this.vx = 0;
    this.vy = 0;
    this.force = 0;
    this.angle = 0;
    this.distance = 0;
    this.friction = Math.random() * 0.6 + 0.3;
    this.ease = Math.random() * 0.085 + 0.025;
  }

  update() {}

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

class BlobParticle {
  constructor(effect) {
    this.effect = effect;
    this.x = this.effect.canvas.width * 0.5;
    this.y = this.effect.canvas.height * 0.5;

    this.color = "yellow";
    this.radius = Math.random() * 80 + 20;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.angle = 0;
    this.va = Math.random() * 0.1 - 0.05;
    this.range = Math.random() * 20;
  }

  update() {
    if (this.x < this.radius || this.x > this.effect.canvas.width - this.radius)
      this.speedX *= -1;

    if (
      this.y < this.radius ||
      this.y > this.effect.canvas.height - this.radius
    )
      this.speedY *= -1;

    this.angle += this.va;

    this.x += this.speedX * Math.sin(this.angle) * this.range;
    this.y += this.speedY * Math.cos(this.angle) * this.range;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

class CircularMovementParticle {
  constructor({ x, y, middleX, middleY }) {
    this.middleX = middleX;
    this.middleY = middleY;
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.radius = 0;
    this.trail = [];
    this.getStartingAngleAndRadius();
  }

  getStartingAngleAndRadius() {
    const dx = this.x - this.middleX;
    const dy = this.y - this.middleY;
    this.radius = Math.sqrt(dx * dx + dy * dy);
    this.angle = Math.atan2(dy, dx);
  }

  update() {
    this.angle += 0.02;
    this.x = this.middleX + this.radius * Math.cos(this.angle);
    this.y = this.middleY + this.radius * Math.sin(this.angle);

    // Add the previous position to the trail array
    this.trail.push({ x: this.x, y: this.y });

    // If the trail array is too long, remove the oldest position
    if (this.trail.length > 3) {
      this.trail.shift();
    }
  }

  draw(ctx) {
    // Draw the trail
    ctx.beginPath();
    for (let i = 0; i < this.trail.length; i++) {
      const point = this.trail[i];
      const opacity = (i / this.trail.length) * 100;
      ctx.fillStyle = `hsl(${this.radius}, ${opacity}%, 50%)`;
      ctx.arc(point.x, point.y, (i + 1) / 2, 0, 2 * Math.PI);
    }
    ctx.fill();

    // Draw the particle
    ctx.fillStyle = `hsl(${this.radius}, 100%, 50%)`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fill();
  }
}
