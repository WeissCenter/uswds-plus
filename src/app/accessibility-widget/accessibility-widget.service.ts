import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessibilityWidgetService {

  private showAccessibilityWidget = new BehaviorSubject<boolean>(false);
  showAccessibilityWidget$ = this.showAccessibilityWidget.asObservable();

  toggleWidgetVisibility() {
    this.showAccessibilityWidget.next(!this.showAccessibilityWidget.value);
    // If widget has been closed, return focus to a11y button #accessibilityCenterBtn
    if (!this.showAccessibilityWidget.value) {
      const element = document.getElementById('accessibilityCenterBtn');
      console.log(element);
      if (element) {
        element.focus();
      }
    }
  }
}
