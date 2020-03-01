import {Component} from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: 'hello_world.component.html',
  styleUrls: ['./hello_world.component.scss']
})
export class HelloWorldComponent {
  name: string = 'Adam';
  date: string = 'Feb 29, 2020';
}
