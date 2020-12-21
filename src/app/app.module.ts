import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogFolderComponent} from './dialog-folder/dialog-folder.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {ContentComponent} from './content/content.component';
import {DateComponent} from './date/date.component';
import {MailboxComponent} from './mailbox/mailbox.component';
import {MapComponent} from './map/map.component';
import {FolderComponent} from './folder/folder.component';
import {CameraComponent} from './camera/camera.component';
import {LinkComponent} from './link/link.component';
import {DateBoxComponent} from './date-box/date-box.component';
import {DatePipe} from './date.pipe';

registerLocaleData(localeRu, 'ru');

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
    LinkComponent,
    DialogFolderComponent,
    DateBoxComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatTableModule
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
