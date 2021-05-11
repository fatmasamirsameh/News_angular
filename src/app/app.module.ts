import { NewsService } from './services/news.service';
import { AuthService } from './services/auth.service';
import { ReporterService } from './services/reporter.service';
import { InterceptorService } from './services/interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { ProfileComponent } from './views/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { AddNewsComponent } from './views/add-news/add-news.component';
import { ViewNewsComponent } from './views/view-news/view-news.component';
import { EditTaskComponent } from './views/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    AddNewsComponent,
    ViewNewsComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ReporterService,
    AuthService,
    NewsService,
    {
      provide:HTTP_INTERCEPTORS,
      
      useClass:InterceptorService ,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
