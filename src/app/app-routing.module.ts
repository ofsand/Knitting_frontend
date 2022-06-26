import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './components/collections/collections.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [
  {path: 'products', component: ProductsPageComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'collections', component: CollectionsComponent},
  {path: 'home', component: HomePageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductsPageComponent, ContactUsComponent, CollectionsComponent, HomePageComponent];
