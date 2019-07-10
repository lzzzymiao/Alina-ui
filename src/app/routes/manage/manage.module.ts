import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { UploadComponent } from './upload/upload.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [UploadComponent, SearchComponent],
  imports: [
    CommonModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }
