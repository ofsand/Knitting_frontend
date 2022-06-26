import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewItemComponent } from './components/review-item/review-item.component';
import { BannerMessageComponent } from './components/banner-message/banner-message.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ManageProductsComponent } from './adminPages/manage-products/manage-products.component';
import { ManageCategoriesComponent } from './adminPages/manage-categories/manage-categories.component';
import { ManageReviewsComponent } from './adminPages/manage-reviews/manage-reviews.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LandingComponent,
    ProductListComponent,
    PromotionComponent,
    CollectionsComponent,
    NewsletterComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    ProductItemComponent,
    ContactUsComponent,
    ContactFormComponent,
    HeaderComponent,
    FooterComponent,
    ReviewsComponent,
    ReviewItemComponent,
    BannerMessageComponent,
    PageNotFoundComponent,
    ManageProductsComponent,
    ManageCategoriesComponent,
    ManageReviewsComponent,
    ProductCardComponent,
    SearchFieldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
