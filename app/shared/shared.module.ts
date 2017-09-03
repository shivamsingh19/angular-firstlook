import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';
import {ConvertToSpacesPipe} from './convert-to-spaces.pipe';

@NgModule({
  imports: [ CommonModule],
  exports : [
    CommonModule,
    FormsModule,
    StarComponent,
      ConvertToSpacesPipe
  ],
  declarations: [ StarComponent, ConvertToSpacesPipe ],
})
export class SharedModule { }
