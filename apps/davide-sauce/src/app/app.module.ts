import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FooterComponent, NavHeaderComponent, SocialMediaIconsComponent } from '@mcalamosca/ui-components';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    // Material Modules
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    // Other Component Modules
    NavHeaderComponent,
    FooterComponent,
    SocialMediaIconsComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
