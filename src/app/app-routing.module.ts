import { EditTaskComponent } from './views/edit-task/edit-task.component';
import { ViewNewsComponent } from './views/view-news/view-news.component';
import { AddNewsComponent } from './views/add-news/add-news.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdsService } from './services/auth-gaurds.service';

const routes: Routes = [
  {path:'signup',component:SignUpComponent},
  {path:'',component:SignInComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGaurdsService]},
  {path:'addNews',component:AddNewsComponent,canActivate:[AuthGaurdsService]},
 {path:'news',component:ViewNewsComponent,canActivate:[AuthGaurdsService]},
 {path:'editNews/:id',component:EditTaskComponent,canActivate:[AuthGaurdsService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
