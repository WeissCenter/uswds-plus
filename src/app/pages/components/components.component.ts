import { Component } from '@angular/core';
import { ComponentsService } from './components.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {

  public components: any[] = [];

  constructor(public componentsService: ComponentsService) { 
    this.components = componentsService.getData();
  }

}
