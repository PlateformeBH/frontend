import { TagInputModule } from "ngx-chips";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { NgModule } from "@angular/core";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { PopoverModule } from "ngx-bootstrap/popover";
import { TimepickerModule } from "ngx-bootstrap/timepicker";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PresentationModule } from "./presentation/presentation.module";

import { IndexComponent } from "./index/index.component";
import { SectionsComponent } from "./sections/sections.component";
import { ProfilepageComponent } from "./examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./examples/landingpage/landingpage.component";
import { AboutusComponent } from "./examples/aboutus/aboutus.component";
import { Error500Component } from "./examples/500error/500error.component";
import { AccountsettingsComponent } from "./examples/accountsettings/accountsettings.component";
import { BlogpostComponent } from "./examples/blogpost/blogpost.component";
import { BlogpostsComponent } from "./examples/blogposts/blogposts.component";
import { ChatpageComponent } from "./examples/chatpage/chatpage.component";
import { CheckoutpageComponent } from "./examples/checkoutpage/checkoutpage.component";
import { ContactusComponent } from "./examples/contactus/contactus.component";
import { EcommerceComponent } from "./examples/ecommerce/ecommerce.component";
import { ErrorComponent } from "./examples/error/error.component";
import { InvoicepageComponent } from "./examples/invoicepage/invoicepage.component";
import { LoginpageComponent } from "./examples/loginpage/loginpage.component";
import { PricingpageComponent } from "./examples/pricingpage/pricingpage.component";
import { ProductpageComponent } from "./examples/productpage/productpage.component";
import { ResetpageComponent } from "./examples/resetpage/resetpage.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PictureUploadComponent } from "./components/picture-upload/picture-upload.component";
import { InscrireComponent } from './examples/inscrire/inscrire.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterAsMechanicComponent } from './pages/register-as-mechanic/register-as-mechanic.component';
import { RegisterAsManagerComponent } from './pages/register-as-manager/register-as-manager.component';
import { RegisterAsSupplierComponent } from './pages/register-as-supplier/register-as-supplier.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { PanierComponent } from './pages/panier/panier.component';
import { DamageComponent } from './pages/damage/damage.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DamageSaveComponent } from './component/damage-save/damage-save.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PieceSaveComponent } from './component/piece-save/piece-save.component';
import { MechanicComponent } from './pages/mechanic/mechanic.component';
import { UserSaveComponent } from './component/user-save/user-save.component';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProfilepageComponent,
    RegisterpageComponent,
    LandingpageComponent,
    SectionsComponent,
    AboutusComponent,
    Error500Component,
    AccountsettingsComponent,
    BlogpostComponent,
    BlogpostsComponent,
    ChatpageComponent,
    CheckoutpageComponent,
    ContactusComponent,
    EcommerceComponent,
    ErrorComponent,
    InvoicepageComponent,
    LoginpageComponent,
    PricingpageComponent,
    ProductpageComponent,
    ResetpageComponent,
    NavbarComponent,
    FooterComponent,
    PictureUploadComponent,
    InscrireComponent,
    UnauthorizedComponent,
    NotFoundComponent,
    ManagerComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    RegisterAsMechanicComponent,
    RegisterAsManagerComponent,
    RegisterAsSupplierComponent,
    SupplierComponent,
    PanierComponent,
    DamageComponent,
    AdminComponent,
    DamageSaveComponent,
    LandingComponent,
    PieceSaveComponent,
    MechanicComponent,
    UserSaveComponent,
    FirstpageComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    TimepickerModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    TagInputModule,
    PresentationModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {}
