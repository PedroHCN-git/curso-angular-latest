import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { MenuComponent } from './shared/menu/menu.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageErrorComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
