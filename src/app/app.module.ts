import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PedidosComponent } from './pedido/pedidos/pedidos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ThfModule } from '@totvs/thf-ui';
import { AppRoutingModule } from './app.routing.module';
import { CargasComponent } from './cargas/cargas.component';
import { CargasService } from './providers/cargas.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    CargasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ThfModule,
    AppRoutingModule
  ],
  providers: [
    CargasService,
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
