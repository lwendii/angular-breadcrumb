import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { BreadcrumbListComponent } from './shared/breadcrumb-list/breadcrumb-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    BreadcrumbListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
