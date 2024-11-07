import { Component, HostListener, signal } from '@angular/core';
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
        'frame4 => frame5': '200ms linear',
        'frame5 => frame4': '200ms linear',
        'frame5 => frame6': '200ms linear',
        'frame6 => frame5': '200ms linear',
        'frame6 => frame7': '200ms linear',
        'frame7 => frame6': '200ms linear',
        'frame7 => frame8': '200ms linear',
        'frame8 => frame7': '200ms linear',
        'frame8 => frame9': '600ms linear',
        'frame9 => frame8': '600ms linear',
      }),
    ]),
    trigger('fullStackU', [
      ...fullStackUFrames,
      ...generateAnimateCalls(fullStackUFrames.length),
    ]),
    trigger('dev', [
      ...devFrames,
      ...generateAnimateCalls(devFrames.length, {
        'frame4 => frame5': '200ms linear',
        'frame5 => frame4': '200ms linear',
        'frame5 => frame6': '200ms linear',
        'frame6 => frame5': '200ms linear',
        'frame6 => frame7': '200ms linear',
        'frame7 => frame6': '200ms linear',
        'frame7 => frame8': '200ms linear',
        'frame8 => frame7': '200ms linear',
        'frame8 => frame9': '600ms linear',
        'frame9 => frame8': '600ms linear',
      }),
    ]),
    trigger('lCade', [
      ...lCadeFrames,
      ...generateAnimateCalls(lCadeFrames.length),
    ]),
    trigger('lW', [...lWFrames, ...generateAnimateCalls(lWFrames.length)]),
  ],
})
export class AnimComponent {
  slide($event: Event) {
    this.frame.set(
      (($event as InputEvent).currentTarget as HTMLInputElement).valueAsNumber
    );
    throw new Error('Method not implemented.');
  }
  protected readonly frame = signal(0);
  protected readonly wordsFrames = wordsFrames;
  protected readonly cadeFrames = cadeFrames;
  protected readonly cadeSpanFrames = cadeSpanFrames;
  protected readonly wFrames = wFrames;
  protected readonly wSpanFrames = wSpanFrames;
  protected readonly dotFrames = dotFrames;
  protected readonly dotSpanFrames = dotSpanFrames;
  protected readonly fullStackUFrames = fullStackUFrames;
  protected readonly devFrames = devFrames;
  protected readonly lCadeFrames = lCadeFrames;
  protected readonly lWFrames = lWFrames;
  protected readonly dotTextPhases = dotTextPhases;
  protected readonly devTextPhases = devTextPhases;

  getFrameTransition(states: unknown[]): string {
    return `frame${Math.min(this.frame(), states.length - 1)}`;
  }

  @HostListener('window:keydown.arrowdown', ['$event'])
  handleArrowDown(_event: KeyboardEvent) {
    this.frame.update((f) => f + 1);
  }

  @HostListener('window:keydown.arrowup', ['$event'])
  handleArrowUp(_event: KeyboardEvent) {
    this.frame.update((f) => f - 1);
  }

  min(x: number, y: number) {
    return Math.min(x, y);
  }

  max(x: number, y: number) {
    return Math.max(x, y);
  }
}
