import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { PagInicialComponent } from './shared/components/Home/pag-inicial.component';
import { ProductScreenComponent } from './shared/components/product-screen/product-screen.component';
import { ProductCreateComponent } from './modules/vendas/components/products/product-create/product-create.component';
import { ClientScreenComponent } from './shared/components/client-screen/client-screen.component';
import { ClientCreateComponent } from './modules/vendas/components/clients/client-create/client-create.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { AlertModalComponent } from './shared/components/alert-modal/alert-modal.component';


import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';







const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    PagInicialComponent,
    ProductScreenComponent,
    ProductCreateComponent,
    ClientScreenComponent,
    ClientCreateComponent,
    AlertModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    BrowserAnimationsModule,
    TooltipModule,
    ModalModule.forRoot(),
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
