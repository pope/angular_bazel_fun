import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'angular_bazel_fun/src/shared/material/material.module';
import { TodoStoreModule } from './store/store.module';
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
    TodoStoreModule,
  ],
  exports: [TodoPageComponent],
})
export class TodoPageModule {}
