import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { PenComponent } from './pen/pen.component';
import { PencileComponent } from './pencile/pencile.component';
import {RoutingModuleModule} from './routing-module/routing-module.module';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { HeaderComponent } from './header/header.component';
import {TotalService} from './total.service';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    PenComponent,
    PencileComponent,
    GenerateBillComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RoutingModuleModule,
    FormsModule
  ],
  providers: [TotalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
