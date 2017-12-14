
import { NgModule } from '@angular/core';
import { ShareModule } from '../sharemodule/share.module';
import { HeaderComponent ,DialogRegister} from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule , MatButtonModule , MatInputModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    HeaderComponent,
    DialogRegister
  ],
  imports: [
    ShareModule , HttpClientModule , MatDialogModule ,MatButtonModule , MatFormFieldModule , MatInputModule
  ],
  entryComponents :[DialogRegister],
  exports : [
      HeaderComponent
  ]
})
export class HeaderModule { }
