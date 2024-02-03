import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfComponent } from './components/control-flow/if/if.component';
import { ForComponent } from './components/control-flow/for/for.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IfComponent, ForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-v17';
}
