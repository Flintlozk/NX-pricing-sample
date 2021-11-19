import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingSampleComponent } from './pricing-sample.component';
import { PricingSampleRoutingModule } from './pricing-sample-routing';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [PricingSampleComponent],
  imports: [CommonModule, FormsModule, PricingSampleRoutingModule],
  providers: [ProductService],
})
export class PricingSampleModule {}
