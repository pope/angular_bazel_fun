import {Component} from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {
  name: string = 'Adam';
  date: string = 'Feb 29, 2020';
}
