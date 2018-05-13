import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './shared/app-navbar/app-navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { CategoriesService } from './services/categories.service';
import { HttpClientModule } from '@angular/common/http';
import { NumberConvertPipe } from './shared/pipes/numberconvert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomeComponent,
    NumberConvertPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
