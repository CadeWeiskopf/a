import { NgtCanvas } from 'angular-three';
import { Experience } from './experience/experience.component';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  viewChildren,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasComponent } from './canvas/canvas.component';
import { AnimComponent } from './anim/anim.component';
type Word = {
  text: string;
  fadeIn: boolean;
};
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CanvasComponent, NgtCanvas, AnimComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // sceneGraph = Experience;
  title = 'portfolio-cadew-dev';
  // protected words = ['cade', 'w', '.', 'dev'];
  // wordComponents = viewChildren<ElementRef<HTMLElement>>('word');
  // ngAfterViewInit(): void {
  //   console.log(this.wordComponents());
  //   this.wordComponents().forEach((word) => {
  //     setTimeout(() => {
  //       word.nativeElement.className = 'fade-in';
  //     });
  //   });
  // }
  // @HostListener('window:scroll', ['$event'])
  // onScroll($event: Event): void {
  //   const scrollY = window.scrollY;
  //   const maxScroll = document.body.scrollHeight - document.documentElement.clientHeight;
  //   const scrollProgress = scrollY / maxScroll;
  // }
}
