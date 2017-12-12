
import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { ContentModule } from './content/content.module';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderModule,ContentModule,FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
