import { NgModule } from '@angular/core';
import { ShareModule } from '../sharemodule/share.module';
import { ContentComponent } from './content.component';
import { MatPaginatorModule } from '@angular/material';
import { TalkshowModule } from '../talkshow/talkshow.module';


@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    ShareModule , MatPaginatorModule , TalkshowModule
  ],
  exports : [
    ContentComponent
  ]
})
export class ContentModule { }
