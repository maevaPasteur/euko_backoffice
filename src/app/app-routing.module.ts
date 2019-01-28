import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { BorrowersComponent } from './users/borrowers/borrowers.component';
import { InvestorsComponent } from './users/investors/investors.component';
import { NeutralComponent } from './users/neutral/neutral.component';
import { BothComponent  } from './users/both/both.component';
import { ProjectComponent  } from './projects/project/project.component';
import { ProjectListComponent  } from './projects/project-list/project-list.component';
import { ProjectKanbanComponent } from './projects/project-kanban/project-kanban.component';
import { ProjectToValidComponent  } from './projects/project-to-valid/project-to-valid.component';
import { DesignComponent } from './graphic/design/design.component';
import { WireframeComponent } from './graphic/wireframe/wireframe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'utilisateurs', component: UserComponent },
  { path: 'utilisateurs/tous', component: UserListComponent },
  { path: 'utilisateurs/emprunteurs', component: BorrowersComponent },
  { path: 'utilisateurs/investisseurs', component: InvestorsComponent },
  { path: 'utilisateurs/innactifs', component: NeutralComponent },
  { path: 'utilisateurs/mixtes', component: BothComponent },
  { path: 'projet', component: ProjectComponent },
  { path: 'projet/liste', component: ProjectListComponent },
  { path: 'projet/a-valider', component: ProjectToValidComponent },
  { path: 'projet/kanban', component: ProjectKanbanComponent },
  { path: 'charte-grahique', component: DesignComponent },
  { path: 'maquettes', component: WireframeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
