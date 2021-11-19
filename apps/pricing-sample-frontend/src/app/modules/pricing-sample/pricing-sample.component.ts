import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IGetPriceResponse,
  ISampleModel,
} from '@pricing-sample-nx/shared-models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonService } from '../../services/common.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'pricing-sample-nx-pricing-sample',
  templateUrl: './pricing-sample.component.html',
  styleUrls: ['./pricing-sample.component.scss'],
})
export class PricingSampleComponent implements OnInit, OnDestroy {
  productID = 'SDK-CDN-JS-SCR-IPT';
  product: IGetPriceResponse = {} as IGetPriceResponse;

  value: ISampleModel = {} as ISampleModel;
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    public router: Router,
    public productService: ProductService,
    public commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.getSample();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  getProduct(): void {
    const mockInput = {
      itemCode: 'SDK-CDN-JS-SCR-IPT',
      quantity: 10,
      coupon: '',
    };
    this.productService
      .getPrice(mockInput)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (response: IGetPriceResponse) => {
          this.product = response;
        },
        (ex) => {
          console.log('ex [LOG]:--> ', ex);
        }
      );
  }

  getSample(): void {
    this.commonService.getSample('mockID').subscribe({
      next: (response) => {
        this.value = response;
      },
      error: (ex) => {
        console.log('ex [LOG]:--> ', ex);
      },
    });
  }

  backToPreviousRoute() {
    this.router.navigate(['']);
  }
}
