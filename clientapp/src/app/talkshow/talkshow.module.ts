
import { NgModule } from '@angular/core';
import { ShareModule } from '../sharemodule/share.module';
import { TalkshowComponent } from './talkshow.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TalkshowComponent
  ],
  imports: [
    ShareModule , HttpClientModule
  ],
  exports : [
    TalkshowComponent
  ]
})
export class TalkshowModule { }
