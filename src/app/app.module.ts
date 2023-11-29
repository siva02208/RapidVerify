import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PassportpageComponent } from './components/passportpage/passportpage.component';
import { SamplePageComponent } from './components/sample-page/sample-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserpageComponent } from './components/userpage/userpage.component';
import { OcrPageComponent } from './components/ocr-page/ocr-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PassportpageComponent,
    SamplePageComponent,
    UserpageComponent,
    OcrPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
