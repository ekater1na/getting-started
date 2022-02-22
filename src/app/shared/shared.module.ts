import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {StarComponent} from "./star/star.component";
import {ConvertToSpacesPipe} from "./pipe/convert-to-spaces.pipe";


@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    ConvertToSpacesPipe,

  ]
})
export class SharedModule {
}