
import { NgModule } from '@angular/core';
import { ShareModule } from '../sharemodule/share.module';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    ShareModule
  ],
  exports : [
      HeaderComponent
  ]
})
export class HeaderModule { }
