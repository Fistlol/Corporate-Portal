import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContentComponent } from './content/content.component';
import { DateComponent } from './date/date.component';
import { MailboxComponent } from './mailbox/mailbox.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ContentComponent,
    DateComponent,
    MailboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
