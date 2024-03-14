import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-token-table',
  templateUrl: './token-table.component.html',
  styleUrls: ['./token-table.component.scss']
})
export class TokenTableComponent {
  @Input() data: any[] = [];
  @Input() type: 'css' | 'json' = 'json';
  @Input() label: string = '';
  @Input() colors: boolean = false;


}
