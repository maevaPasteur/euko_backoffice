import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import {AgePipe} from './services/pipes/age.pipe';
import {FunctionPipe} from './services/pipes/function.pipe';
import {SumPipe} from './services/pipes/sum.pipe';
import {TranslatePipe} from './services/pipes/translate.pipe';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserComponent} from './users/user/user.component';
import {HomeComponent} from './home/home.component';
import {InvestorsComponent} from './users/investors/investors.component';
import {BorrowersComponent} from './users/borrowers/borrowers.component';
import {BothComponent} from './users/both/both.component';
import {NeutralComponent} from './users/neutral/neutral.component';
import {ProjectComponent} from './projects/project/project.component';
import {ProjectListComponent} from './projects/project-list/project-list.component';
import {ProjectToValidComponent} from './projects/project-to-valid/project-to-valid.component';
import {ProjectKanbanComponent} from './projects/project-kanban/project-kanban.component';
import { ParametersComponent } from './informations/parameters/parameters.component';
import { ContractsComponent } from './informations/contracts/contracts.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        UserListComponent,
        UserComponent,
        HomeComponent,
        InvestorsComponent,
        BorrowersComponent,
        BothComponent,
        NeutralComponent,
        ProjectComponent,
        ProjectListComponent,
        ProjectToValidComponent,
        ProjectKanbanComponent,
        AgePipe,
        FunctionPipe,
        SumPipe,
        TranslatePipe,
        ParametersComponent,
        ContractsComponent,
        UserDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([])
    ],
    providers: [
        {
            provide: LocationStrategy, useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
