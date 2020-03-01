import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HelloWorldComponent} from './hello_world.component';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [
    RouterModule,
    RouterModule.forChild([{path: '', component: HelloWorldComponent}])
  ],
  exports: [HelloWorldComponent],
})
export class HelloWorldModule {
}
