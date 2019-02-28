import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgmodelModule } from './ngmodel/ngmodel.module';
import { ReactiveFormsControlModule } from './reactive-forms-control/reactive-forms-control.module';
import { ReactiveFormsGroupModule } from './reactive-forms-group/reactive-forms-group.module';


import { AppComponent } from './app.component';
import { NgmodelComponent } from './ngmodel/ngmodel.component';
import { ReactiveFormsControlComponent } from './reactive-forms-control/reactive-forms-control.component';
import { ReactiveFormsGroupComponent } from './reactive-forms-group/reactive-forms-group.component';

const routes: Routes = [
  { path: '', redirectTo: 'ng-model', pathMatch: 'full' },
  { path: 'ng-model', component: NgmodelComponent },
  { path: 'reactive-forms-control', component: ReactiveFormsControlComponent },
  { path: 'reactive-forms-group', component: ReactiveFormsGroupComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsControlModule,
    NgmodelModule,
    ReactiveFormsGroupModule,

    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
