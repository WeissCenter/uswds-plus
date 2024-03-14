import { Component } from '@angular/core';
import { CoreService } from './core.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {

  public core: any[] = [];

  constructor(public coreService: CoreService) { 
    this.core = coreService.getData();
  }
}
