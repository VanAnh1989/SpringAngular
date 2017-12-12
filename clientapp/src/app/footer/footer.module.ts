import { NgModule } from '@angular/core';
import { ShareModule } from '../sharemodule/share.module';
import { FooterComponent } from './footer.component';
import { MatPaginatorModule } from '@angular/material';
import { TalkshowModule } from '../talkshow/talkshow.module';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    ShareModule
  ],
  exports : [
    FooterComponent
  ]
})
export class FooterModule { }
