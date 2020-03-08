import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'angular_bazel_fun/src/shared/material/material.module';
import { TodoPageComponent } from './todo-page.component';

@NgModule({
  declarations: [TodoPageComponent],
  imports: [
    MaterialModule,
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
