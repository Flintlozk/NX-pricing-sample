import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingSampleComponent } from './pricing-sample.component';
import { PricingSampleRoutingModule } from './pricing-sample-routing';

@NgModule({
  declarations: [PricingSampleComponent],
  imports: [CommonModule, PricingSampleRoutingModule],
})
export class PricingSampleModule {}
