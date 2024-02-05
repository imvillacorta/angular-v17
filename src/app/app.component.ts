import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfComponent } from './components/control-flow/if/if.component';
import { ForComponent } from './components/control-flow/for/for.component';
import { DeferComponent } from './components/defer/defer.component';
import { SignalsComponent } from './components/signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IfComponent, ForComponent, DeferComponent, SignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-v17';
}
