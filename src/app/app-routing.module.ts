import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {MailboxComponent} from './mailbox/mailbox.component';
import {DateComponent} from './date/date.component';
import {ContentComponent} from './content/content.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'content', component: ContentComponent},
  {path: 'date', component: DateComponent},
  {path: 'mailbox', component: MailboxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
