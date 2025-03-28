import { Component, EventEmitter, inject, input, Input, output, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-child',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './product-child.component.html',
  styleUrl: './product-child.component.scss'
})
export class ProductChildComponent {
  // @Input() product: { name: string; price: number } | undefined;
  // @Output() notify = new EventEmitter<string>();
  private readonly translate: TranslateService =  inject(TranslateService);;
  product = input<{ name: string; price: number }>();
  notify = output<string>();


  sendToParent() {
    const message = this.translate.instant('PRODUCT.ADDED_TO_CART', {
      name: this.product()?.name
    });

    this.notify.emit(message);
  }
}
