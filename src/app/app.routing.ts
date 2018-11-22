import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AppGuardGuard } from './app-guard.guard';

import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { ShowComponent } from './components/show/show.component';
import { EditComponent } from './components/edit/edit.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';

const routes:Routes = [
    { path:"", redirectTo:"/login", pathMatch:"full" },
    { path: 'home', component:HomeComponent, canActivate: [AppGuardGuard] },
    { path: 'add', component:AddComponent, canActivate: [AppGuardGuard]},
    { path: 'show', component:ShowComponent,canActivate: [AppGuardGuard] },
    { path: "edit/:id", component:EditComponent, canActivate: [AppGuardGuard]},
    { path: "search/:nama", component:SearchComponent, canActivate: [AppGuardGuard]},
    { path: "login", component:LoginComponent}
];
@NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
  })
  export class AppRoutingModule { }

  export const RoutableApp = [
    HomeComponent,
    AddComponent,
    ShowComponent,
    EditComponent,
    SearchComponent,
    LoginComponent
  ];
  export const EntryApp = [];