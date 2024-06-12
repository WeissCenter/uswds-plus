import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessibilityWidgetService {

  private target: HTMLElement | null = null;
  private showAccessibilityWidget = new BehaviorSubject<boolean>(false);
  showAccessibilityWidget$ = this.showAccessibilityWidget.asObservable();

  toggleWidgetVisibility(target?: HTMLElement) {
    this.showAccessibilityWidget.next(!this.showAccessibilityWidget.value);

    // Store the target element for focus restoration
    if (target) {
      this.target = target.closest('button');
    } else {
      this.target = document.getElementById('accessibilityCenterBtn');
    }
    // If widget has been closed, return focus to the nearest button or the target itself if it's a button
    if (!this.showAccessibilityWidget.value) {
      if (this.target) {
        this.target.focus();
        this.target = null;
      }

    }
  }
}
