import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxModule } from 'primeng/checkbox';
import { WrapperComponent } from './wrapper/wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    DialogModule,
    CheckboxModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
