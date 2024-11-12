import {
  Component,
  computed,
  effect,
  ElementRef,
  HostListener,
  input,
  signal,
  untracked,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss',
})
export class CanvasComponent {
  minimize = input(false);
  maximize = input(false);
  animEffect = effect(() => {
    this.minimize();
    this.maximize();
    this.#animatingRect = false;
  });
  #animatingRect = false;
  protected readonly canvas =
    viewChild<ElementRef<HTMLCanvasElement>>('canvas');
  protected ctx: CanvasRenderingContext2D | undefined | null;
  protected readonly showEnd = signal(false);
  gradientDuration = 4000;
  elapsedTime = 0;
  previousTime = 0;
  color = {
    from: {
      h: [300, 350], // Range of hue
      s: 90,
      l: 55,
    },
    to: {
      h: [200, 272],
      s: 90,
      l: 80,
    },
  };

  ngOnInit(): void {
    this.ctx = this.canvas()?.nativeElement.getContext('2d');
    this.resizeCanvas();
    this.render(this.gradientDuration);
  }

  resizeCanvas(): void {
    const canvas = this.canvas()?.nativeElement;
    if (canvas) {
      canvas.width = Math.min(
        window.innerWidth,
        document.documentElement.clientWidth
      );
      canvas.height = Math.max(
        window.innerHeight,
        document.documentElement.clientHeight
      );
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    // alert('resized');
    this.resizeCanvas();
  }

  toCssColor(color: HslColor, progress: number) {
    const { h, s, l } = color;
    const hue = Math.floor(h[0] + (h[1] - h[0]) * progress);

    return `hsl(${hue}, ${s}%, ${l}%)`;
  }

  render(duration: number) {
    if (!this.ctx) {
      throw new Error('!this.ctx');
    }

    const now = performance.now();
    const delta = now - this.previousTime;

    this.elapsedTime += delta;
    this.previousTime = now;

    // progress: 0 -> 1 -> 0 -> 1 ...
    const rawProgress = (this.elapsedTime % duration) / duration;
    const isForward = Math.floor(this.elapsedTime / duration) % 2 === 0;
    const progress = isForward ? rawProgress : 1 - rawProgress;

    const rotationSpeed = 0.001;
    const rotationAngle = rotationSpeed * this.elapsedTime;
    const centerX = this.ctx.canvas.width / 2;
    const centerY = this.ctx.canvas.height / 2;
    const radius = Math.min(this.ctx.canvas.width, this.ctx.canvas.height) / 2;

    const startX = centerX + radius * Math.cos(rotationAngle);
    const startY = centerY + radius * Math.sin(rotationAngle);
    const endX = centerX + radius * Math.cos(rotationAngle + Math.PI);
    const endY = centerY + radius * Math.sin(rotationAngle + Math.PI);

    const gradient = this.ctx.createLinearGradient(startX, startY, endX, endY);

    gradient.addColorStop(
      0,
      this.toCssColor(this.color.from as HslColor, progress)
    );
    gradient.addColorStop(
      1,
      this.toCssColor(this.color.to as HslColor, progress)
    );

    this.ctx.fillStyle = gradient;
    this.ctx.strokeStyle = gradient;

    if (this.minimize() && !this.#animatingRect) {
      this.animateRect(this.ctx.canvas.width / 2, this.ctx.canvas.width / 4);
    } else if (this.maximize() && !this.#animatingRect) {
      this.animateRect(this.ctx.canvas.width / 4, this.ctx.canvas.width / 2);
    } else if (!this.maximize()) {
      if (!this.#animatingRect) {
        this.ctx?.clearRect(
          0,
          0,
          this.ctx.canvas.width,
          this.ctx.canvas.height
        );
      }
      this.ctx.fillRect(
        0,
        0,
        this.ctx.canvas.width / (this.minimize() ? 4 : 2),
        this.ctx.canvas.height
      );
    }

    requestAnimationFrame(() => {
      this.render(this.gradientDuration);
    });
  }

  animateRect(startWidth: number, targetWidth: number) {
    this.#animatingRect = true;
    const height = document.documentElement.clientHeight;
    const duration = 500;
    let startTime: number | null = null;

    const animateRectInterp = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const progress = (timestamp - startTime) / duration;
      const currentWidth =
        startWidth + (targetWidth - startWidth) * Math.min(progress, 1);

      this.ctx?.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.ctx?.fillRect(0, 0, currentWidth, height);

      if (progress < 1) {
        requestAnimationFrame(animateRectInterp);
      }
    };

    requestAnimationFrame(animateRectInterp);
  }
}

type HslColor = {
  h: [number, number]; // hue range
  s: number;
  l: number;
};
