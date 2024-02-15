import { Component, Input } from '@angular/core';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-component-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class ComponentOverviewComponent {
  components: any[] = [];
  constructor(public componentsService: ComponentsService) { 
    this.components = componentsService.getData();
  }

}
