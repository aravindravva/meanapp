import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddcandidatesComponent } from './candidates/addcandidates/addcandidates.component';
import { DisplaycandidatesComponent } from './candidates/displaycandidates/displaycandidates.component';


const routes: Routes = [{path:"",component:AddcandidatesComponent},
  {path:'add',component:AddcandidatesComponent},
{path:'display',component:DisplaycandidatesComponent},
{path:"add/:id",component:AddcandidatesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
