import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsPageComponent } from './pages/collections-page/collections-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [
  {path: 'products', component: ProductsPageComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'collections', component: CollectionsPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'testproduct', component: ProductDetailsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductsPageComponent, ContactUsComponent, CollectionsPageComponent, HomePageComponent, LoginPageComponent, ProductDetailsComponent];
