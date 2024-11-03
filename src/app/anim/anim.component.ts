import { Component, signal } from '@angular/core';
import { trigger } from '@angular/animations';
import {
  cadeFrames,
  cadeSpanFrames,
  generateAnimateCalls,
  lCadeFrames,
  wFrames,
  wordsFrames,
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
    trigger('lCade', [
      ...lCadeFrames,
      ...generateAnimateCalls(lCadeFrames.length),
    ]),
  ],
})
export class AnimComponent {
  protected readonly prevFrame = signal(0);
  protected readonly frame = signal(0);
  protected readonly wordsFrames = wordsFrames;
  protected readonly cadeFrames = cadeFrames;
  protected readonly cadeSpanFrames = cadeSpanFrames;
  protected readonly wFrames = wFrames;
  protected readonly lCadeFrames = lCadeFrames;

  getFrameTransition(states: unknown[]): string {
    return `frame${Math.min(this.frame(), states.length - 1)}`;
  }
}
