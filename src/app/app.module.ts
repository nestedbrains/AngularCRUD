import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


//FireBase
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";


// Component Imports
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ClientsComponent} from './components/clients/clients.component';
import {ClientDetailsComponent} from './components/client-details/client-details.component';
import {AddClientComponent} from './components/add-client/add-client.component';
import {EditClientComponent} from './components/edit-client/edit-client.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {SettingsComponent} from './components/settings/settings.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

//Service

import {ClientService} from "./services/client.service";
import {AngularFirestore} from "@angular/fire/firestore";
import {FormsModule} from "@angular/forms";
import {FlashMessagesModule} from "angular2-flash-messages";


const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-client', component: AddClientComponent},
  {path: 'client/:id', component: ClientDetailsComponent},
];

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCF9BhwVCT0SCEti601XP6MXHmvrmwQpw8",
    authDomain: "clientpanel-f106c.firebaseapp.com",
    databaseURL: "https://clientpanel-f106c.firebaseio.com",
    projectId: "clientpanel-f106c",
    storageBucket: "clientpanel-f106c.appspot.com",
    messagingSenderId: "878259158705",
    appId: "1:878259158705:web:043266fd7462c0ed"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    ClientService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
