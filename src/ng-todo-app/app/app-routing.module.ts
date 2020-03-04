import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'todos',
    loadChildren: () =>
      import(
        'angular_bazel_fun/src/ng-todo-app/pages/todo-page/todo-page.module'
      ).then(m => m.TodoPageModule),
  },
  {
    path: 'hello-world',
    loadChildren: () =>
      import(
        'angular_bazel_fun/src/ng-todo-app/pages/hello-world/hello-world.module'
      ).then(m => m.HelloWorldModule),
  },
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      //preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
