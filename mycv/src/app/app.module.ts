import { AuthGuard } from './guard/auth.guard';
import * as authService from './services/auth.service';
import { ValidateService } from './services/validate.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http'
import {RouterModule, Routes} from '@angular/router'
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProfileComponent } from './component/profile/profile.component';
import { UploadcvComponent } from './component/uploadcv/uploadcv.component';
import { PreviewcvComponent } from './component/previewcv/previewcv.component';
import { EditcvComponent } from './component/editcv/editcv.component';
import { FooterComponent } from './component/footer/footer.component';
import { JoblistingComponent } from './component/joblisting/joblisting.component';
import { JobregComponent } from './component/jobreg/jobreg.component';


const appRoutes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'register', component: RegisterComponent},
 {path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'editcv', component: EditcvComponent, canActivate: [AuthGuard]},
  { path: 'uploadcv', component: UploadcvComponent, canActivate: [AuthGuard] },
  { path: 'previewcv', component: PreviewcvComponent, canActivate: [AuthGuard] },
 {path: 'joblisting', component: JoblistingComponent },
  { path: 'jobreg', component: JobregComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UploadcvComponent,
    PreviewcvComponent,
    EditcvComponent,
    FooterComponent,
    JoblistingComponent,
    JobregComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, authService.AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
