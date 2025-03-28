import { Routes } from '@angular/router';
import { ProductParentComponent } from './product-parent/product-parent.component';

export const routes: Routes = [
  { path: 'product', component: ProductParentComponent },
  { path: '', redirectTo: 'product', pathMatch: 'full' },
];
