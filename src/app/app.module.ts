import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { BreadcrumbListComponent } from './shared/breadcrumb-list/breadcrumb-list.component';
import { UserManagementModule } from './user-management/user-management.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    BreadcrumbListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
