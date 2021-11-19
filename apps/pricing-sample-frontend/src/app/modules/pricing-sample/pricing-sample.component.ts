import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISampleModel } from '@pricing-sample-nx/shared-models';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'pricing-sample-nx-pricing-sample',
  templateUrl: './pricing-sample.component.html',
  styleUrls: ['./pricing-sample.component.scss'],
})
export class PricingSampleComponent implements OnInit {
  public value: ISampleModel = {} as ISampleModel;
  constructor(public commonService: CommonService, public router: Router) {}

  ngOnInit(): void {
    this.getSample();
  }

  getSample() {
    this.commonService.getSample('mockID').subscribe({
      next: (response) => {
        this.value = response;
        console.log('response [LOG]:--> ', response);
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
