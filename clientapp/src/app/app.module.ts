
import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { ContentModule } from './content/content.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderModule,ContentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
