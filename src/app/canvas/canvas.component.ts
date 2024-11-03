import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import {
  FONT_SIZE,
  getFirstScene,
  updateFontSize,
  WordPhase,
} from './canvas.model';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss',
})
export class CanvasComponent implements OnInit, OnDestroy {
  readonly FONT_SIZE = FONT_SIZE;
  protected readonly canvas =
    viewChild<ElementRef<HTMLCanvasElement>>('canvas');
  protected ctx: CanvasRenderingContext2D | undefined | null;
  #active: Map<object, boolean> = new Map();
  #previousPhaseIndex = -1;
  #currentPhaseIndex = -1;
  #currentScrollProgress = 0;
  #previousScrollY = -1;
  #currentScrollDirection: 'UP' | 'DOWN' = 'DOWN';
  #gradientOffset = 0;
  protected frames: { text: string; x: number; y: number }[] = [];
  #currentFames: typeof this.frames = [];
  #frameTicks: Subscription;
  #currentGradient: any;
  #randomLineY = document.documentElement.clientHeight * 0.25; //const randomNumber = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
  getRandomLineY = () =>
    document.documentElement.clientHeight *
    (Math.random() * (0.4 - 0.05) + 0.05);

  protected readonly showEnd = signal(false);
  startFadeInLetters = false;
  tActive = false;
  gradientDuration = 8000;
  elapsedTime = 0;
  previousTime = 0;
  color = {
    from: {
      h: [286, 11], // Range of hue
      s: 75,
      l: 80,
    },
    to: {
      h: [120, 334],
      s: 80,
      l: 70,
    },
  };

  constructor() {
    const frameInverval = interval(16);
    this.#frameTicks = frameInverval.pipe().subscribe((e) => {
      this.ctx!.clearRect(
        0,
        0,
        this.canvas()!.nativeElement.width,
        this.canvas()!.nativeElement.height
      );
      const fontSize = FONT_SIZE;
      this.ctx!.font = `${fontSize}px roboto mono`;
      this.ctx!.textAlign = 'left';
      this.ctx!.textBaseline = 'top';

      if (!this.tActive) {
        this.render(this.gradientDuration);
        this.tActive = true;
      }
      if (this.#animateLineLeftSide) {
        console.log('left');
        this.#randomLineY = this.getRandomLineY();

        this.ctx!.strokeStyle = 'white';
        this.animateLine(
          0,
          this.#randomLineY,
          document.documentElement.clientWidth * 0.5,
          this.#randomLineY,
          2000
        );
        this.#animateLineLeftSide = false;
        setTimeout(() => {
          this.reverseAnimateLine(
            document.documentElement.clientWidth * 0.5,
            this.#randomLineY,
            0,
            this.#randomLineY,
            2000
          );
          setTimeout(() => (this.#animateLineRightSide = true), 2000);
          // this.#reverseAnimateLeftSide = true;
        }, 2000);
      }

      (this.frames.length > 0 ? this.frames : this.#currentFames).forEach(
        ({ text, x, y }) => {
          if (text === "Let's ") {
            requestAnimationFrame(() => {
              this.ctx!.save();
              this.ctx!.fillStyle = 'white';
              this.ctx!.fillText(text, x, y);
              this.ctx!.restore();
              if (this.#currentPhaseIndex > 11) {
                if (!this.#drawnEnding) {
                  setTimeout(() => (this.#drawnEnding = true), 250);
                }
              } else {
                this.#drawnEnding = false;
              }
            });

            return;
          } else if (
            text === 'Work ' ||
            text === 'Toge' ||
            text === 'Together'
          ) {
            requestAnimationFrame(() => {
              this.ctx!.save();
              this.ctx!.fillStyle = 'white';
              this.ctx!.fillText(text, x, y);
              this.ctx!.restore();
            });

            return;
          } else if (
            text === 'Securing data' ||
            text === 'Storing  data' ||
            text === 'Sending  data' ||
            text === 'Showing  data'
          ) {
            requestAnimationFrame(() => {
              this.ctx!.font = `${fontSize * 0.75}px roboto mono`;
              this.ctx!.fillText(text, x, y);
              this.ctx!.font = `${fontSize}px roboto mono`;
            });
            return;
          }
          if (this.#currentPhaseIndex > 10) {
            this.ctx!.save();
            this.ctx!.font = `${fontSize * 0.75}px roboto mono`;
            this.ctx!.scale(1, 6); // 1 means no change in width, 2 means double the height
            // console.log(document.documentElement.clientHeight);
            this.ctx!.fillText(
              '}',
              document.documentElement.clientWidth * 0.5 +
                this.ctx!.measureText('Securing data').width +
                FONT_SIZE * 3.5,
              (document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5) /
                5.95
            ); // Draw the letter at coordinates (100, 100)
            this.ctx!.restore();
          }
          if (text === 'Cade' && this.#currentPhaseIndex > 2) {
            return;
          }
          if (text === 'Weiskopf' && this.#currentPhaseIndex > 3) {
            return;
          }
          requestAnimationFrame(() => {
            this.ctx!.fillText(text, x, y);
          });
        }
      );

      if (this.frames.length > 0) {
        this.#currentFames = this.frames;
      }
      this.frames = [];

      if (this.#currentPhaseIndex > 11) {
        this.showEnd.set(true);
      } else {
        this.showEnd.set(false);
      }
    });
  }

  animateLine(
    lineStartX: number,
    lineStartY: number,
    lineEndX: number,
    lineEndY: number,
    duration: number // Duration of the animation in milliseconds
  ) {
    const startTime = performance.now();
    const deltaX = lineEndX - lineStartX;
    const deltaY = lineEndY - lineStartY;

    const drawFrame = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Ensure progress does not exceed 1

      const currentX = lineStartX + deltaX * progress;
      const currentY = lineStartY + deltaY * progress;

      this.ctx!.beginPath();
      this.ctx!.moveTo(lineStartX, lineStartY);
      this.ctx!.lineTo(currentX, currentY);
      if (this.#animateLineLeftSide) {
        this.ctx!.strokeStyle = 'white';
      }
      this.ctx!.stroke();

      if (progress < 1) {
        requestAnimationFrame(drawFrame);
      }
    };

    requestAnimationFrame(drawFrame);
  }

  reverseAnimateLine(
    lineStartX: number,
    lineStartY: number,
    lineEndX: number,
    lineEndY: number,
    duration: number
  ) {
    const startTime = performance.now();
    const deltaX = lineEndX - lineStartX;
    const deltaY = lineEndY - lineStartY;

    const drawFrame = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = 1 - Math.min(elapsedTime / duration, 1);

      const currentX = lineStartX + deltaX * progress;
      const currentY = lineStartY + deltaY * progress;

      this.ctx!.beginPath();
      this.ctx!.moveTo(lineStartX, lineStartY);
      this.ctx!.lineTo(currentX, currentY);
      this.ctx!.stroke();

      if (progress > 0) {
        requestAnimationFrame(drawFrame);
      }
    };

    requestAnimationFrame(drawFrame);
  }

  ngOnInit(): void {
    this.ctx = this.canvas()?.nativeElement.getContext('2d');
    this.resizeCanvas();
    requestAnimationFrame(() => this.draw(0));
  }

  ngOnDestroy(): void {
    this.#frameTicks.unsubscribe();
  }

  resizeCanvas(): void {
    const canvas = this.canvas()?.nativeElement;
    if (canvas) {
      console.log('resize', window.innerWidth);
      if (window.innerWidth < 321) {
        updateFontSize(10);
      } else if (window.innerWidth < 376) {
        updateFontSize(11);
      } else if (window.innerWidth < 431) {
        updateFontSize(12);
      } else if (window.innerWidth < 520) {
        updateFontSize(14);
      } else if (window.innerWidth < 570) {
        updateFontSize(16);
      } else if (window.innerWidth < 769) {
        updateFontSize(18);
      } else if (window.innerWidth < 1205) {
        updateFontSize(24);
      } else {
        updateFontSize(42);
      }

      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.clientHeight;
    }
  }

  draw(scrollProgress: number, force?: boolean): void {
    const canvas = this.canvas()?.nativeElement;
    if (!canvas) {
      throw new Error('canvas undefined');
    }

    if (!this.ctx) {
      throw new Error('canvas context undefined');
    }

    const animateText = (
      text: string,
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      duration: number,
      currentWordPhase: WordPhase
    ) => {
      const startTime = performance.now();

      const drawFrame = (time: number) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const currentX = startX + (endX - startX) * progress;
        const currentY = startY + (endY - startY) * progress;

        if (!this.#active.get(currentWordPhase)) {
          return;
        }

        const replaceFrame = this.frames.find((e) => e.text === text);
        if (replaceFrame) {
          replaceFrame.x = currentX;
          replaceFrame.y = currentY;
        } else {
          this.frames.push({ text, x: currentX, y: currentY });
        }

        if (progress < 1) {
          requestAnimationFrame(() => drawFrame(performance.now()));
        }
      };

      requestAnimationFrame(drawFrame);
    };

    const phaseIndex = Math.floor(scrollProgress * 100);
    this.#currentPhaseIndex = phaseIndex;
    this.#currentScrollProgress = scrollProgress;
    if (phaseIndex === this.#previousPhaseIndex && !force) {
      return;
    }
    this.#previousPhaseIndex = phaseIndex;
    // this.#active.clear();

    getFirstScene(this.ctx).words.forEach((w, i) => {
      const usePhaseIndex =
        phaseIndex < w.phases.length - 1 ? phaseIndex : w.phases.length - 1;
      this.#active.set(w.phases[usePhaseIndex], true);
      let animPhaseIndex = -1;
      if (usePhaseIndex === 0) {
        if (this.#currentScrollDirection === 'DOWN') {
          animPhaseIndex = 0;
        } else {
          animPhaseIndex = 1;
        }
      } else {
        if (this.#currentScrollDirection === 'DOWN') {
          animPhaseIndex = usePhaseIndex - 1;
        } else {
          animPhaseIndex = Math.min(usePhaseIndex + 1, w.phases.length - 1);
        }
      }

      const animStartX = w.phases[animPhaseIndex].position.x();
      const animStartY = w.phases[animPhaseIndex].position.y();

      requestAnimationFrame(() =>
        animateText(
          w.phases[usePhaseIndex].text,
          animStartX,
          animStartY,
          w.phases[usePhaseIndex].position.x(),
          w.phases[usePhaseIndex].position.y(),
          250,
          w.phases[usePhaseIndex]
        )
      );
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.resizeCanvas();
    requestAnimationFrame(() => this.draw(this.#currentScrollProgress, true));
    // this.draw(this.#currentPhaseIndex);
    console.log('resize');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event: Event): void {
    const scrollY = window.scrollY;
    this.#currentScrollDirection =
      scrollY > this.#previousScrollY ? 'DOWN' : 'UP';
    this.#previousScrollY = scrollY;
    const maxScroll =
      document.body.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = scrollY / maxScroll;

    this.draw(scrollProgress);
  }

  toCssColor(color: HslColor, progress: number) {
    const { h, s, l } = color;
    const hue = Math.floor(h[0] + (h[1] - h[0]) * progress);

    return `hsl(${hue}, ${s}%, ${l}%)`;
  }

  #drawnEnding = false;
  #animateLineRightSide = true;
  #animateLineLeftSide = false;
  #reverseAnimateLeftSide = false;
  render(duration: number) {
    // if (!this.context) {
    //   return
    // }

    const now = performance.now();
    const delta = now - this.previousTime;

    this.elapsedTime += delta;
    this.previousTime = now;

    // progress: 0 -> 1 -> 0 -> 1 ...
    const rawProgress = (this.elapsedTime % duration) / duration;
    const isForward = Math.floor(this.elapsedTime / duration) % 2 === 0;
    const progress = isForward ? rawProgress : 1 - rawProgress;

    const gradient = this.ctx!.createLinearGradient(
      document.documentElement.clientWidth,
      0,
      0,
      document.documentElement.clientHeight
    );

    gradient.addColorStop(
      0,
      this.toCssColor(this.color.from as HslColor, progress)
    );
    gradient.addColorStop(
      1,
      this.toCssColor(this.color.to as HslColor, progress)
    );

    this.#currentGradient = gradient;
    this.ctx!.fillStyle = gradient;
    // this.ctx!.strokeStyle = gradient;
    this.ctx!.fillRect(
      0,
      0,
      document.documentElement.clientWidth / 2,
      document.documentElement.clientHeight
    );

    this.ctx!.fillStyle = 'white';
    this.ctx!.fillText(
      'Cade Weiskopf',
      document.documentElement.clientWidth * 0.5 -
        this.ctx!.measureText(`Cade`).width -
        this.ctx!.measureText(`Weiskopf`).width -
        FONT_SIZE * 1.25,
      document.documentElement.clientHeight * 0.5
    );

    if (this.#animateLineRightSide) {
      console.log('anim right');
      this.ctx!.strokeStyle = gradient;
      this.animateLine(
        document.documentElement.clientWidth * 0.5,
        this.#randomLineY,
        document.documentElement.clientWidth,
        this.#randomLineY,
        2000
      );
      this.#animateLineRightSide = false;
      console.log('animate');
      setTimeout(() => {
        console.log('reverse right');
        this.reverseAnimateLine(
          document.documentElement.clientWidth,
          this.#randomLineY,
          document.documentElement.clientWidth * 0.5,
          this.#randomLineY,
          2000
        );
        setTimeout(() => (this.#animateLineLeftSide = true), 2000);
        // setTimeout(() => (this.#animateLineRightSide = true), 6000);
      }, 2000);
    }

    if (this.#drawnEnding) {
      this.ctx!.fillText(
        "Let's Work Together",
        document.documentElement.clientWidth * 0.5 -
          this.ctx!.measureText(`Let's Work Together`).width -
          FONT_SIZE * 0.65,
        document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
      );
    }

    this.ctx!.fillStyle = gradient;

    requestAnimationFrame(() => {
      this.render(this.gradientDuration);
    });
  }
}

type HslColor = {
  h: [number, number]; // hue range
  s: number;
  l: number;
};
