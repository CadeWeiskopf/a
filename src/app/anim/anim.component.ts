import { Component, computed, HostListener, signal } from '@angular/core';
import { trigger } from '@angular/animations';
import {
  cadeFrames,
  cadeSpanFrames,
  dotFrames,
  dotSpanFrames,
  dotTextPhases,
  generateAnimateCalls,
  lCadeFrames,
  lWFrames,
  wFrames,
  wordsFrames,
  wSpanFrames,
  fullStackUFrames,
  devFrames,
  devTextPhases,
  cadeTrailFrames,
  devSpanFrames,
  leftFrames,
  rightFrames,
  canvasFrames,
} from './anim.model';
import { CanvasComponent } from './canvas/canvas.component';

@Component({
  selector: 'app-anim',
  standalone: true,
  imports: [CanvasComponent],
  templateUrl: './anim.component.html',
  styleUrl: './anim.component.scss',
  animations: [
    trigger('words', [
      ...wordsFrames,
      ...generateAnimateCalls(wordsFrames.length),
    ]),
    trigger('cade', [
      ...cadeFrames,
      ...generateAnimateCalls(wordsFrames.length),
    ]),
    trigger('cadeSpan', [
      ...cadeSpanFrames,
      ...generateAnimateCalls(cadeSpanFrames.length),
    ]),
    trigger('w', [...wFrames, ...generateAnimateCalls(wFrames.length)]),
    trigger('wSpan', [
      ...wSpanFrames,
      ...generateAnimateCalls(wSpanFrames.length),
    ]),
    trigger('dot', [...dotFrames, ...generateAnimateCalls(dotFrames.length)]),
    trigger('dotSpan', [
      ...dotSpanFrames,
      ...generateAnimateCalls(dotSpanFrames.length, {
        'frame4 => frame5': '200ms ease-in',
        'frame5 => frame4': '200ms ease-in',
        'frame5 => frame6': '200ms ease-out',
        'frame6 => frame5': '200ms ease-in',
        'frame6 => frame7': '200ms linear',
        'frame7 => frame6': '200ms linear',
        'frame7 => frame8': '200ms linear',
        'frame8 => frame7': '200ms linear',
        'frame8 => frame9': '400ms ease-out',
        'frame9 => frame8': '400ms ease-out',
      }),
    ]),
    trigger('fullStackU', [
      ...fullStackUFrames,
      ...generateAnimateCalls(fullStackUFrames.length),
    ]),
    trigger('dev', [
      ...devFrames,
      ...generateAnimateCalls(devFrames.length, {
        'frame4 => frame5': '200ms ease-in',
        'frame5 => frame4': '200ms ease-in',
        'frame5 => frame6': '200ms ease-out',
        'frame6 => frame5': '200ms ease-in',
        'frame6 => frame7': '200ms linear',
        'frame7 => frame6': '200ms linear',
        'frame7 => frame8': '200ms linear',
        'frame8 => frame7': '200ms linear',
        'frame8 => frame9': '400ms ease-out',
        'frame9 => frame8': '400ms ease-out',
      }),
    ]),
    trigger('devSpan', [
      ...devSpanFrames,
      ...generateAnimateCalls(devSpanFrames.length, {
        'frame8 => frame9': '400ms ease-in',
        'frame9 => frame8': '400ms ease-in',
      }),
    ]),
    trigger('lCade', [
      ...lCadeFrames,
      ...generateAnimateCalls(lCadeFrames.length),
    ]),
    trigger('lW', [...lWFrames, ...generateAnimateCalls(lWFrames.length)]),
    trigger('left', [
      ...leftFrames,
      ...generateAnimateCalls(leftFrames.length, {
        'frame9 => frame10': '200ms linear',
        'frame10 => frame11': '200ms linear',
      }),
    ]),
    trigger('right', [
      ...rightFrames,
      ...generateAnimateCalls(rightFrames.length, {
        'frame9 => frame10': '200ms linear',
        'frame10 => frame11': '200ms linear',
      }),
    ]),
    trigger('canvas', [
      ...canvasFrames,
      ...generateAnimateCalls(canvasFrames.length),
    ]),
  ],
})
export class AnimComponent {
  protected readonly frame = signal(0);
  protected readonly previousFrame = signal(0);
  updateFrame = (f: number) => {
    this.previousFrame.set(this.frame());
    this.frame.set(f);
  };
  protected readonly wordsFrames = wordsFrames;
  protected readonly cadeFrames = cadeFrames;
  protected readonly cadeSpanFrames = cadeSpanFrames;
  protected readonly cadeTrailFrames = cadeTrailFrames;
  protected readonly wFrames = wFrames;
  protected readonly wSpanFrames = wSpanFrames;
  protected readonly dotFrames = dotFrames;
  protected readonly dotSpanFrames = dotSpanFrames;
  protected readonly fullStackUFrames = fullStackUFrames;
  protected readonly devFrames = devFrames;
  protected readonly rightFrames = rightFrames;
  protected readonly leftFrames = leftFrames;
  protected readonly lCadeFrames = lCadeFrames;
  protected readonly lWFrames = lWFrames;
  protected readonly dotTextPhases = dotTextPhases;
  protected readonly devTextPhases = devTextPhases;
  protected readonly devSpanFrames = devSpanFrames;
  protected readonly canvasFrames = canvasFrames;

  getFrameTransition(states: unknown[]): string {
    return `frame${Math.min(this.frame(), states.length - 1)}`;
  }

  @HostListener('window:keydown.arrowdown', ['$event'])
  handleArrowDown(_event: KeyboardEvent) {
    // this.frame.update((f) => f + 1);
    this.updateFrame(this.frame() + 1);
  }

  @HostListener('window:keydown.arrowup', ['$event'])
  handleArrowUp(_event: KeyboardEvent) {
    this.updateFrame(this.frame() - 1);
    // this.frame.update((f) => f - 1);
  }

  slide($event: Event) {
    this.updateFrame(
      (($event as InputEvent).currentTarget as HTMLInputElement).valueAsNumber
    );
  }

  min(x: number, y: number) {
    return Math.min(x, y);
  }

  max(x: number, y: number) {
    return Math.max(x, y);
  }
}
