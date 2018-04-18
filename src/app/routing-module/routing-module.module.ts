import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import {Routes, RouterModule} from '@angular/router';
import { BookComponent } from '../book/book.component';
import { PenComponent } from '../pen/pen.component';
import { PencileComponent } from '../pencile/pencile.component';
import {GenerateBillComponent} from '../generate-bill/generate-bill.component';

const appRouters : Routes = [
  {path:"book",component:BookComponent},
  {path:"Pen",component:PenComponent},
  {path:"Pencile",component:PencileComponent},
  {path:"Bill", component:GenerateBillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRouters)],
  exports: [RouterModule]
})
export class RoutingModuleModule { }
