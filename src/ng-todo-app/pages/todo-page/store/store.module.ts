import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { todoStoreReducer } from './store.reducers';
import { TODO_STORE_STATE } from './store.state';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_STORE_STATE, todoStoreReducer),
  ],
})
export class TodoStoreModule {}
