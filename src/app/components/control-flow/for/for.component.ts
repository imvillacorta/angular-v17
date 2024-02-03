import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.scss'
})
export class ForComponent {

  public dados: Array<{ name: string, age: number, height: number }> = [
    {
      name: 'Ivan',
      age: 34,
      height: 1.58
    },
    {
      name: 'Geovana',
      age: 30,
      height: 1.62
    },
    {
      name: 'Sexta Feira',
      age: 3,
      height: 0.30
    }
  ];

}
