import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CartComponent, ProductComponent, ProductsComponent } from './components';
import { CartFacadeService, ProductFacadeService, ProductService } from './services';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { CartSelectors, CartState, ProductSelectors, ProductsState } from './store';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([ProductsState, CartState], {
      /* developmentMode: !environment.production */
      developmentMode: true,
    }),
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
    ProductSelectors,
    CartSelectors,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
