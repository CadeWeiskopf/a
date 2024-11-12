import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimComponent } from './anim/anim.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Cade Weiskopf Resume';
}
