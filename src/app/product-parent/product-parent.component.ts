import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductChildComponent } from '../product-child/product-child.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-parent',
  standalone: true,
  imports: [CommonModule, ProductChildComponent, TranslateModule],
  templateUrl: './product-parent.component.html',
  styleUrl: './product-parent.component.scss'
})
export class ProductParentComponent {
  product = { name: 'Notebook', price: 20 };
  message = '';

  handleNotify(data: string) {
    this.message = data;
  }
}
