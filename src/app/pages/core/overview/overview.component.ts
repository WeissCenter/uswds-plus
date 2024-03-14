import { Component } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-core-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class CoreOverviewComponent {

  public core: any[] = [];

  constructor(public coreService: CoreService) { 
    this.core = coreService.getData();
  }

}
