import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {MailboxComponent} from './mailbox/mailbox.component';
import {DateComponent} from './date/date.component';
import {ContentComponent} from './content/content.component';
import {MapComponent} from './map/map.component';
import {FolderComponent} from './folder/folder.component';
import {CameraComponent} from './camera/camera.component';
import {LinkComponent} from './link/link.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent}
    ]
  },
  {
    path: 'main', component: MainComponent, children: [
      // {path: 'content', redirectTo: '/map', pathMatch: 'full'},
      {path: 'content', component: ContentComponent, children: [
          {path: 'map', component: MapComponent},
          {path: 'folder', component: FolderComponent},
          {path: 'camera', component: CameraComponent},
          {path: 'link', component: LinkComponent},
        ]},
      {path: 'date', component: DateComponent},
      {path: 'mailbox', component: MailboxComponent},
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
