import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxModule } from 'primeng/checkbox';
import { WrapperComponent } from './wrapper/wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from 'primeng/dragdrop';
import { PickListModule } from 'primeng/picklist';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [AppComponent, WrapperComponent],
  imports: [
    BrowserModule,
    DialogModule,
    DragDropModule,
    PickListModule,
    CheckboxModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
