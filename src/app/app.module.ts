import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
