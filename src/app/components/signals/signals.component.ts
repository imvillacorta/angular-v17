import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal('Ivan ');
  public lastName = signal('Villacorta');
  public fullName = computed(() => {
    return this.firstName() + this.lastName();
  });
  public array = signal([1]);

  constructor() {

  }

  public updateName() {
    return this.firstName.set('Geovana ');
  }

  public updateArray() {
    this.array.update((oldValue: Array<number>) => {
      console.log(oldValue);
      return [...oldValue, oldValue.length + 1];
    });
  }

}
