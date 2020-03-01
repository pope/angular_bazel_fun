import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HelloWorldModule } from 'angular_bazel_fun/src/ng-todo-app/pages/hello-world/hello-world.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => Promise.resolve(HelloWorldModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      //preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
