import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FolderComponent } from './folder/folder.component';
import { NewComponent } from './new/new.component';


@NgModule({
  declarations: [
    AppComponent,
    FolderComponent,
    NewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
