import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CategoryComponent } from './components/category/category.component'; 
import { KidsComponent } from './kids/kids.component';
import { JeansComponent } from './jeans/jeans.component';
import { Jeans1Component } from './jeans1/jeans1.component';
import { Jeans2Component } from './jeans2/jeans2.component';
import { Robes1Component } from './robes1/robes1.component';
import { Shorts1Component } from './shorts1/shorts1.component';
import { Pulls1Component} from './pulls1/pulls1.component';
import { Jackets1Component } from './jackets1/jackets1.component';
import { Manteaux1Component } from './manteaux1/manteaux1.component';
import { Baskets1Component } from './baskets1/baskets1.component';
import { Talons1Component } from './talons1/talons1.component';
import { Sandales1Component } from './sandales1/sandales1.component';
import { Jupes1Component } from './jupes1/jupes1.component';
import { Costumes2Component } from './costumes2/costumes2.component';
import { Jackets2Component } from './jackets2/jackets2.component';
import { Manteaux2Component } from './manteaux2/manteaux2.component';
import { Pulls2Component } from './pulls2/pulls2.component';
import { Sandales2Component } from './sandales2/sandales2.component';
import { Shorts2Component } from './shorts2/shorts2.component';
import { Baskets2Component } from './baskets2/baskets2.component';
import { CostumesComponent } from './costumes/costumes.component';
import { BasketsComponent } from './baskets/baskets.component';
import { JacketsComponent } from './jackets/jackets.component';
import { ManteauxComponent } from './manteaux/manteaux.component';
import { PullsComponent } from './pulls/pulls.component';
import { RobesComponent } from './robes/robes.component';
import { SandalesComponent } from './sandales/sandales.component';
import { ShortsComponent } from './shorts/shorts.component';
import { TalonsComponent } from './talons/talons.component';
import { ProductDetailsComponent } from './product-details/product-details.component';




const routes: Routes = [
  {
    path:'', component: HomeComponent
  }, 
  { path: 'costumes', component: CostumesComponent },
  { path: 'baskets', component: BasketsComponent },
  { path: 'jackets', component: JacketsComponent },
  { path: 'jeans', component: JeansComponent },
  { path: 'manteaux', component: ManteauxComponent },
  { path: 'Pulls', component: PullsComponent },
  { path: 'Robes', component: RobesComponent },
  { path: 'sandales', component:SandalesComponent },
  { path: 'Shorts', component:ShortsComponent },
  { path: 'talons', component:TalonsComponent },
  { path: 'Jupes', component:JeansComponent },
  { path: 'product/:id', component: ProductDetailsComponent },

  { path: 'costumes2', component: Costumes2Component },
  { path: 'jackets2', component: Jackets2Component },
  { path: 'jeans', component: Jeans2Component },
  { path: 'manteaux2', component: Manteaux2Component },
  { path: 'Pulls2', component: Pulls2Component },
  { path: 'sandales2', component: Sandales2Component },
  { path: 'Shorts2', component: Shorts2Component },
  { path: 'baskets2', component: Baskets2Component },

  { path: 'Kids', component: KidsComponent },
  {path: 'jeans' , component:JeansComponent},
  {path: 'jeans1' , component:Jeans1Component},
  {path: 'jackets1' , component:Jackets1Component}, 
  {path: 'jeans2' , component:Jeans2Component},
  {path: 'Robes1' , component:Robes1Component}, 
  {path: 'Pulls1' , component:Pulls1Component}, 
  {path: 'Shorts1' , component:Shorts1Component}, 
  {path: 'manteaux1' , component:Manteaux1Component},  
  {path: 'baskets1' , component:Baskets1Component}, 
  {path: 'talons1' , component:Talons1Component},
  {path: 'sandales1' , component:Sandales1Component}, 
  {path: 'Jupes1' , component:Jupes1Component},   

  {
    path: 'product/:id', component: ProductComponent
  }, 
  {
    path: 'cart', component: CartComponent
  }, 
  {
    path:'checkout', component: CheckoutComponent
  }, 
  {
    path:'category', component: CategoryComponent
  }, 
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
