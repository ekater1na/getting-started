import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConverToSpacesPipe } from './shared/conver-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConverToSpacesPipe,
    StarComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
