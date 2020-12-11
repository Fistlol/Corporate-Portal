import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './content/content.component';
import { DateComponent } from './date/date.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { MapComponent } from './map/map.component';
import { FolderComponent } from './folder/folder.component';
import { CameraComponent } from './camera/camera.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ContentComponent,
    DateComponent,
    MailboxComponent,
    MapComponent,
    FolderComponent,
    CameraComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
