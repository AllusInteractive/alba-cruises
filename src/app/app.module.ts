import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RoutesComponent } from './components/routes/routes.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { MorarComponent } from './components/routes/morar/morar.component';
import { RumComponent } from './components/routes/rum/rum.component';
import { MuckComponent } from './components/routes/muck/muck.component';
import { EiggComponent } from './components/routes/eigg/eigg.component';
import { RegisterComponent } from './components/users/register/register.component';
import { SignInComponent } from './components/users/sign-in/sign-in.component';
import { TimesCostsComponent } from './components/times-costs/times-costs.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { BookingsComponent } from './components/users/bookings/bookings.component';
import { AccountComponent } from './components/users/account/account.component';
import { PaymentComponent } from './components/users/payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'routes', component: RoutesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'routes/morar', component: MorarComponent },
  { path: 'routes/muck', component: MuckComponent },
  { path: 'routes/rum', component: RumComponent },
  { path: 'routes/eigg', component: EiggComponent },
  { path: 'users/sign-in', component: SignInComponent },
  { path: 'users/register', component: RegisterComponent },
  { path: 'times-and-costs', component: TimesCostsComponent },
  { path: 'terms-and-conditions', component: TermsConditionsComponent },
  { path: 'users/bookings', component: BookingsComponent },
  { path: 'users/account', component: AccountComponent },
  { path: 'users/payment', component: PaymentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RoutesComponent,
    NewsComponent,
    ContactComponent,
    AboutComponent,
    MorarComponent,
    RumComponent,
    MuckComponent,
    EiggComponent,
    RegisterComponent,
    SignInComponent,
    TimesCostsComponent,
    TermsConditionsComponent,
    BookingsComponent,
    AccountComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
