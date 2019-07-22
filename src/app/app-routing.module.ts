import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlidesComponent } from './components/slides/slides.component'
import { ListUserComponent } from './components/list-user/list-user.component';
import { NewUserComponent } from './components/new-user/new-user.component';

const routes: Routes = [
  {
    component : SlidesComponent,
    path : 'slides'
  },{
    component : ListUserComponent,
    path : 'users'
  },{
    component : NewUserComponent,
    path : 'users/create'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
