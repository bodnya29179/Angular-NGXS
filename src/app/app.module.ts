import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CartComponent, ProductComponent, ProductsComponent } from './components';
import { CartFacadeService, ProductFacadeService, ProductService } from './services';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    CartComponent,
  ],
  providers: [
    ProductService,
    ProductFacadeService,
    CartFacadeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
