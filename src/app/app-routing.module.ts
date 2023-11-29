import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PassportpageComponent } from './components/passportpage/passportpage.component';
import { SamplePageComponent } from './components/sample-page/sample-page.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { OcrPageComponent } from './components/ocr-page/ocr-page.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"login",component:SamplePageComponent},
  {path:"passport",component:PassportpageComponent},
  {path:"userview/:email",component:UserpageComponent},
  {path:"ocr",component:OcrPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
