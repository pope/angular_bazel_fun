import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'angular_bazel_fun/src/shared/material/material.module';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [
    MaterialModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: '',
        component: HelloWorldComponent,
      },
    ]),
  ],
  exports: [HelloWorldComponent],
})
export class HelloWorldModule {}
