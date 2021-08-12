import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/esp/index/index.component';
import { ContactarComponent } from './components/esp/contactar/contactar.component';
import { EsheaderComponent } from './components/esp/esheader/esheader.component';
import { FooterComponent } from './components/footer/footer.component';
import { ESPComponent } from './components/esp/esp.component';
import { FormComponent } from './components/form/form.component';
import { AboutUsComponent } from './components/esp/about-us/about-us.component';
import { ParticularsComponent } from './components/particulars/particulars.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactarComponent,
    EsheaderComponent,
    FooterComponent,
    ESPComponent,
    FormComponent,
    AboutUsComponent,
    ParticularsComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  // SweetAlert2Module,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
