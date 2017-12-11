import { NgModule } from '@angular/core';
import { ShareModule } from '../sharemodule/share.module';
import { ContentComponent } from './content.component';


@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    ShareModule
  ],
  exports : [
    ContentComponent
  ]
})
export class ContentModule { }
