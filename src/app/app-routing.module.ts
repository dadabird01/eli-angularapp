import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';
import { CustomersComponent } from './components/customers/customers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpComponent } from './components/tuts/http/http.component';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/new', component: CustomersNewComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'pageNotFound', component: PageNotFoundComponent },
  { path: 'tuts/http', component: HttpComponent },
  { path: '**', redirectTo: 'pageNotFound', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
