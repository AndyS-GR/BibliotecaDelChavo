import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { BookComponent } from './component/book/book.component';
import { PrestamoComponent } from './component/prestamo/prestamo.component';
import { FormsModule } from '@angular/forms';
import { BookListarComponent } from './component/book/book-listar/book-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookComponent,
    PrestamoComponent,
    BookListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
