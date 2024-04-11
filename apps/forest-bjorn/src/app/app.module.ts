import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NavHeaderComponent } from '@mcalamosca/ui-components';
import { FirebaseUIModule } from 'firebaseui-angular';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [AppComponent, LandingComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(environment.firebaseUiAuthConfig),
    // Material Modules
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    // Other Component Modules
    NavHeaderComponent,
  ],
  providers: [
    // {
    //   provide: USE_AUTH_EMULATOR,
    //   useValue: !environment.production ? ['http://localhost:9099'] : undefined,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
