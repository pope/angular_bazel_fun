import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoPageComponent } from './todo-page.component';

@NgModule({
  declarations: [TodoPageComponent],
  imports: [
    RouterModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoPageComponent,
      },
    ]),
  ],
  exports: [TodoPageComponent],
})
export class TodoPageModule {}
