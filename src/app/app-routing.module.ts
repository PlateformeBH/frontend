import { NgModule } from "@angular/core";
import { Router, Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./index/index.component";
import { PresentationComponent } from "./presentation/presentation.component";
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
import { InscrireComponent } from './examples/inscrire/inscrire.component';
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { ManagerComponent } from "./pages/manager/manager.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { UnauthorizedComponent } from "./pages/unauthorized/unauthorized.component";
import { AuthGuard } from "./guards/auth.guard";
import { Role } from "./model/role.enum";
import { RegisterAsManagerComponent } from "./pages/register-as-manager/register-as-manager.component";
import { RegisterAsMechanicComponent } from "./pages/register-as-mechanic/register-as-mechanic.component";
import { RegisterAsSupplierComponent } from "./pages/register-as-supplier/register-as-supplier.component";
import { SupplierComponent } from "./pages/supplier/supplier.component";
import { PanierComponent } from "./pages/panier/panier.component";
import { DamageComponent } from "./pages/damage/damage.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { LandingComponent } from "./pages/landing/landing.component";
import { MechanicComponent } from "./pages/mechanic/mechanic.component";
import { FirstpageComponent } from "./pages/firstpage/firstpage.component";

const routes: Routes = [
  { path: "", redirectTo: "presentation", pathMatch: "full" },
  { path: "index", component: IndexComponent },
  { path: "presentation", component: PresentationComponent },
  { path: "sections", component: SectionsComponent },
  { path: "examples/profile-page", component: ProfilepageComponent },
  { path: "examples/register-page", component: RegisterpageComponent },
  { path: "examples/landing-page", component: LandingpageComponent },
  { path: "examples/about-us", component: AboutusComponent },
  { path: "examples/500-error", component: Error500Component },
  { path: "examples/account-settings", component: AccountsettingsComponent },
  { path: "examples/blog-post", component: BlogpostComponent },
  { path: "examples/blog-posts", component: BlogpostsComponent },
  { path: "examples/chat-page", component: ChatpageComponent },
  { path: "examples/checkout-page", component: CheckoutpageComponent },
  { path: "examples/contact-us", component: ContactusComponent },
  { path: "examples/ecommerce", component: EcommerceComponent },
  { path: "examples/error", component: ErrorComponent },
  { path: "examples/invoice-page", component: InvoicepageComponent },
  { path: "examples/login-page", component: LoginpageComponent },
  { path: "examples/pricing-page", component: PricingpageComponent },
  { path: "examples/product-page", component: ProductpageComponent },
  { path: "examples/reset-page", component: ResetpageComponent },
  { path: "examples/inscrire-page", component: InscrireComponent },
  {path: "home" , component: HomeComponent, canActivate: [AuthGuard],
  data: { roles: [Role.CLIENT , Role.MANAGER, Role.MECHANIC , Role.SUPPLIER]}},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.CLIENT , Role.MANAGER, Role.MECHANIC , Role.SUPPLIER]}
  },
  { path: 'manager', 
    component: ManagerComponent
  },
  {path: '404', component: NotFoundComponent},
  {path: '401', component: UnauthorizedComponent},
  {
    path: 'addManager', component: RegisterAsManagerComponent  
  },

  {path: 'supplier', component: SupplierComponent,
     
},

  {
    path: 'addMechanic', component: RegisterAsMechanicComponent
  },
  {
    path: 'addSupplier', component: RegisterAsSupplierComponent
  },
  {
    path: 'panier', component: PanierComponent
  },
  {
    path:'damage', component: DamageComponent
  },
  {path: 'admin', component: AdminComponent},
  {path: 'landing', component: LandingComponent},
  {path : 'mechanic' , component: MechanicComponent},
  {path : 'app', component: FirstpageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router){
    this.router.errorHandler=(error: any) => {
      this.router.navigate(['/404'])
    };
  }
}
