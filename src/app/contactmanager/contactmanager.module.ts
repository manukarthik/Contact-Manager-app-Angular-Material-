import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';


const routes: Routes = [
  
  {
   path: '', component:ContactmanagerAppComponent,
children:[
  {path: ':id', component: MainContentComponent},
  {path:'', component: MainContentComponent}
]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers:[
UserService
  ],
  declarations: [ContactmanagerAppComponent,ToolbarComponent,MainContentComponent, SidenavComponent, NewContactDialogComponent],
  entryComponents:[
    NewContactDialogComponent
  ]
})
export class ContactmanagerModule { }
