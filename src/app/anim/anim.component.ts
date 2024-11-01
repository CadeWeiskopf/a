import { Component, effect, signal } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-anim',
  standalone: true,
  imports: [],
  templateUrl: './anim.component.html',
  styleUrl: './anim.component.scss',
  animations: [
    trigger('frame1', [
      state('start', style({})),
      state('end', style({ width: 'calc(50%)' })),
      transition('start => end', [animate('1s')]),
      transition('end => start', [animate('1s')]),
    ]),
  ],
})
export class AnimComponent {
  prevFrame = signal(0);
  frame = signal(0);

  getFrameTransition(frame: number): 'start' | 'end' {
    if (this.frame() === frame) {
      if (this.prevFrame() > this.frame()) {
        console.log('starrt');
        return 'start';
      } else {
        console.log('end');
        return 'end';
      }
    } else if (this.frame() > frame) {
      return 'end';
    } else {
      console.log('!', this.frame(), this.prevFrame());
      return 'start';
    }
  }
}
