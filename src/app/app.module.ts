import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home.component';
import { ContratComponent } from './contrat/contrat.component';
import { InvestorsComponent } from './users/investors/investors.component';
import { BorrowersComponent } from './users/borrowers/borrowers.component';
import { BothComponent } from './users/both/both.component';
import { NeutralComponent } from './users/neutral/neutral.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectToValidComponent } from './projects/project-to-valid/project-to-valid.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserListComponent,
    UserComponent,
    HomeComponent,
    ContratComponent,
    InvestorsComponent,
    BorrowersComponent,
    BothComponent,
    NeutralComponent,
    ProjectComponent,
    ProjectListComponent,
    ProjectToValidComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
