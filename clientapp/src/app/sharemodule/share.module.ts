import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    exports : [BrowserModule , BrowserAnimationsModule , NoopAnimationsModule , FormsModule]
})
export class ShareModule { }
