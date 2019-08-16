import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';

import { BlogListComponent } from './components/blog-list/blog-list.component';

@NgModule({
  declarations: [
    BlogListComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
