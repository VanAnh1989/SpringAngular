
import { NgModule } from '@angular/core';
import { ShareModule } from '../sharemodule/share.module';
import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    ShareModule , HttpClientModule
  ],
  exports : [
      HeaderComponent
  ]
})
export class HeaderModule { }
