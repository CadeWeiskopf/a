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
        'frame5 => frame6': '500ms linear',
        'frame6 => frame5': '500ms linear',
        'frame6 => frame7': '500ms linear',
        'frame7 => frame6': '500ms linear',
        'frame7 => frame8': '500ms linear',
        'frame8 => frame7': '500ms linear',
        'frame8 => frame9': '500ms linear',
        'frame9 => frame8': '500ms linear',
        'frame9 => frame10': '500ms linear',
        'frame10 => frame9': '500ms linear',
        'frame10 => frame11': '500ms linear',
        'frame11 => frame10': '500ms linear',
        'frame11 => frame12': '500ms linear',
        'frame12 => frame11': '500ms linear',
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
  protected readonly frame = signal(0);
  protected readonly wordsFrames = wordsFrames;
  protected readonly cadeFrames = cadeFrames;
  protected readonly cadeSpanFrames = cadeSpanFrames;
  protected readonly wFrames = wFrames;
  protected readonly wSpanFrames = wSpanFrames;
  protected readonly dotFrames = dotFrames;
  protected readonly dotSpanFrames = dotSpanFrames;
  protected readonly lCadeFrames = lCadeFrames;
  protected readonly lWFrames = lWFrames;
  protected readonly dotTextPhases = dotTextPhases;

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
}
