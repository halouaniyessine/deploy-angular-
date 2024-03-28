import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { KidsComponent } from './kids/kids.component';
import { FormsModule } from '@angular/forms';
import { JeansComponent } from './jeans/jeans.component';
import { RobesComponent } from './robes/robes.component';
import { JupesComponent } from './jupes/jupes.component';
import { ShortsComponent } from './shorts/shorts.component';
import { PullsComponent } from './pulls/pulls.component';
import { JacketsComponent } from './jackets/jackets.component';
import { ManteauxComponent } from './manteaux/manteaux.component';
import { CostumesComponent } from './costumes/costumes.component';
import { BasketsComponent } from './baskets/baskets.component';
import { TalonsComponent } from './talons/talons.component';
import { SandalesComponent } from './sandales/sandales.component';
import { Jeans1Component } from './jeans1/jeans1.component';
import { Robes1Component } from './robes1/robes1.component';
import { Jupes1Component } from './jupes1/jupes1.component';
import { Shorts1Component } from './shorts1/shorts1.component';
import { Pulls1Component } from './pulls1/pulls1.component';
import { Jackets1Component } from './jackets1/jackets1.component';
import { Manteaux1Component } from './manteaux1/manteaux1.component';
import { Baskets1Component } from './baskets1/baskets1.component';
import { Talons1Component } from './talons1/talons1.component';
import { Sandales1Component } from './sandales1/sandales1.component';
import { Jeans2Component } from './jeans2/jeans2.component';
import { Manteaux2Component } from './manteaux2/manteaux2.component';
import { Jackets2Component } from './jackets2/jackets2.component';
import { Shorts2Component } from './shorts2/shorts2.component';
import { Pulls2Component } from './pulls2/pulls2.component';
import { Costumes2Component } from './costumes2/costumes2.component';
import { Baskets2Component } from './baskets2/baskets2.component';
import { Sandales2Component } from './sandales2/sandales2.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    ProductComponent,
    CategoryComponent,
    KidsComponent,
    JeansComponent,
    RobesComponent,
    JupesComponent,
    ShortsComponent,
    PullsComponent,
    JacketsComponent,
    ManteauxComponent,
    CostumesComponent,
    BasketsComponent,
    TalonsComponent,
    SandalesComponent,
    Jeans1Component,
    Robes1Component,
    Jupes1Component,
    Shorts1Component,
    Pulls1Component,
    Jackets1Component,
    Manteaux1Component,
    Baskets1Component,
    Talons1Component,
    Sandales1Component,
    Jeans2Component,
    Manteaux2Component,
    Jackets2Component,
    Shorts2Component,
    Pulls2Component,
    Costumes2Component,
    Baskets2Component,
    Sandales2Component,
    ProductDetailsComponent,
  ],
  imports: [
    FormsModule,
    RouterModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
