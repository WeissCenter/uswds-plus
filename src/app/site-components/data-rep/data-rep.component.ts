import { Component, ElementRef, Input, ViewChild } from '@angular/core';

interface DataItem {
  label: string;
  value: number;
  definition: string;
  percentage?: number;
  largest?: boolean;
  flexAmount?: number;
}

@Component({
  selector: 'data-rep',
  templateUrl: './data-rep.component.html',
  styleUrls: ['./data-rep.component.scss'],
})
export class DataRepComponent {
  @ViewChild('explainationRegion') explainationRegion!: ElementRef;
  @ViewChild('explanationSwitch') explanationSwitch!: ElementRef;
  @ViewChild('glossarySwitch') glossarySwitch!: ElementRef;
  @ViewChild('dataModal') dataModal!: ElementRef;
  @ViewChild('dataModalCloseBtn') dataModalCloseBtn!: ElementRef;
  @ViewChild('dataModalSwitch') dataModalSwitch!: ElementRef;
  @ViewChild('bars') barPanel!: ElementRef;

  @Input() data: DataItem[] = [];
  @Input() raw!: any;

  @Input() rawDataType = 'normal';

  useH1 = false;
  @Input() header = 'Title';
  @Input() insight = 'Insight';
  plainLanguage = 'Plain Language';
  showPlainLanguage = false;
  plainLanguageMaxCount = 5;
  showGlossary = false;
  showGlossaryBtn = false;
  glossaryIdsString = '';

  public uniqueIdPrefix = this.generateRandomId(8);

  private firstFocusableElement: HTMLElement | null = null;
  private lastFocusableElement: HTMLElement | null = null;
  private focusableElementsString =
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], li[tabindex="0"], li[tabindex="-1"], tr[tabindex="0"], tr[tabindex="-1"]';

  localization = 'en-US';

  total = 0;

  public id = this.generateRandomId(8);

  constructor() {}

  generateRandomId(length: number = 8): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  // This function is used to convert an array of objects into an array of label/value objects for the dmeo on 11/13/23
  mapToLabelValueArray(array: any[]) {
    return array.map((item) => {
      let label = '';
      let value = 0;
      const definition = 'Pipe in definition here';

      Object.keys(item).forEach((key) => {
        if (typeof item[key] === 'string') {
          label = item[key];
        } else if (typeof item[key] === 'number') {
          value = item[key];
        }
      });

      return { label, value, definition };
    });
  }

  processData() {
    // If data is an array of objects, check if it has the optional definition property
    if (this.data.length && this.data[0].definition)
      this.showGlossaryBtn = true;

    // Generate plain language summary
    this.generatePlainLanguage();

    // Calculate total
    this.total = this.data.reduce((acc, item) => acc + item.value, 0);

    // Find largest value
    const largestValue = this.data.reduce(
      (max, item) => Math.max(max, item.value),
      this.data[0].value
    );

    // Collect a list of the unique IDs for each definition for proper ARIA labeling
    const glossaryItemIds: string[] = [];

    // Calculate percentages and flex amount based on largest value
    // Flex amount is determined by dividing the item's value by the largest value
    // In the visual representation, the largest value fills the full width of the chart
    // effectively setting itself as "100%"
    this.data = this.data.map((item, index) => {
      item.percentage = (item.value / this.total) * 100;
      item.largest = item.value === largestValue;
      item.flexAmount = item.value / largestValue;
      glossaryItemIds.push(
        this.id + "series-item-definition-" + index
      );
      return item;
    });
    // Sort the array from largest to smallest
    this.data.sort((a, b) => b.value - a.value);
    this.glossaryIdsString = glossaryItemIds.join(" ");
  }

  generatePlainLanguage() {
    // Slice the array to include only the top items as per plainLanguageMaxCount
    const topItems = this.data.slice(0, this.plainLanguageMaxCount);

    // Convert each item into a plain language string
    const plainLanguageItems = topItems.map((item) => {
      // Convert the value to a percentage string with two decimal places
      const percentage = (
        (item.value / this.data.reduce((acc, cur) => acc + cur.value, 0)) *
        100
      ).toFixed(2);
      // Format the string with the label and the percentage
      return `${item.label} (${percentage}%)`;
    });

    // Combine the items into a sentence
    let summary = 'In the reported data, ';
    if (plainLanguageItems.length > 2) {
      // Join all items with commas, but the last item with 'and'
      const allButLast = plainLanguageItems.slice(0, -1).join(', ');
      const lastItem = plainLanguageItems[plainLanguageItems.length - 1];
      summary += `${allButLast}, and ${lastItem}`;
    } else if (plainLanguageItems.length === 2) {
      // No comma, just 'and'
      summary += `${plainLanguageItems[0]} and ${plainLanguageItems[1]}`;
    } else if (plainLanguageItems.length === 1) {
      // If there's only one item, just add it
      summary += `${plainLanguageItems[0]}`;
    }

    // Finish the sentence if there are items
    if (plainLanguageItems.length > 0) {
      summary += ' represent the top categories.';
    } else {
      summary += 'No data available.';
    }

    this.plainLanguage = summary;
  }

  togglePlainLanguage() {
    this.showPlainLanguage = !this.showPlainLanguage;
    this.explanationSwitch.nativeElement.setAttribute('aria-pressed', this.showPlainLanguage);
    this.explainationRegion.nativeElement.setAttribute('aria-expanded', this.showPlainLanguage);

    if (this.explainationRegion.nativeElement.hidden) {
      this.explainationRegion.nativeElement.hidden = false;

      this.explainationRegion.nativeElement.addEventListener(
        'keydown',
        this.handleTabFromPanel
      );
      this.explanationSwitch.nativeElement.addEventListener(
        'keydown',
        this.handleTabFromPlainLanguageBtn
      );
      this.glossarySwitch.nativeElement.addEventListener(
        'keydown',
        this.handleTabFromGlossaryBtn
      );
    } else {
      this.explainationRegion.nativeElement.hidden = true;
      this.explanationSwitch.nativeElement.focus();
      this.explainationRegion.nativeElement.removeEventListener(
        'keydown',
        this.handleTabFromPanel
      );
      this.explanationSwitch.nativeElement.removeEventListener(
        'keydown',
        this.handleTabFromPlainLanguageBtn
      );
      this.glossarySwitch.nativeElement.removeEventListener(
        'keydown',
        this.handleTabFromGlossaryBtn
      );
    }
  }

  handleTabFromPanel = (event: KeyboardEvent) => {
    // Handle forward tab (Tab without Shift)
    if (event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault();
      this.glossarySwitch.nativeElement.focus();
    }
    // Handle backward tab (Shift + Tab)
    else if (event.key === 'Tab' && event.shiftKey) {
      event.preventDefault();
      this.explanationSwitch.nativeElement.focus();
    }
  };

  handleTabFromPlainLanguageBtn = (event: KeyboardEvent) => {
    // Handle forward tab (Tab without Shift)
    if (event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault();
      this.explainationRegion.nativeElement.focus();
    }
  };

  handleTabFromGlossaryBtn = (event: KeyboardEvent) => {
    // Handle backward tab (Shift + Tab)
    if (event.key === 'Tab' && event.shiftKey) {
      event.preventDefault();
      this.explainationRegion.nativeElement.focus();
    }
  };

  toggleGlossary() {
    this.showGlossary = !this.showGlossary;
    this.glossarySwitch.nativeElement.setAttribute('aria-pressed', this.showGlossary);
    if (this.showGlossary) {
      // Cycle through all .definition elements and add set aria-expanded to true
      const definitions = this.barPanel.nativeElement.querySelectorAll('.definition');
      definitions.forEach((definition: HTMLElement) => {
        definition.setAttribute('aria-expanded', 'true');
        definition.hidden = false;
      });
    } else {
      // Cycle through all .definition elements and add set aria-expanded to false
      const definitions = this.barPanel.nativeElement.querySelectorAll('.definition');
      definitions.forEach((definition: HTMLElement) => {
        definition.setAttribute('aria-expanded', 'false');
        definition.hidden = true;
      });
    }
  }

  openDataModal() {
    this.dataModal.nativeElement.hidden = false;
    const focusableElements = this.dataModal.nativeElement.querySelectorAll(
      this.focusableElementsString
    ) as NodeListOf<HTMLElement>;
    this.firstFocusableElement = focusableElements[0];
    this.lastFocusableElement = focusableElements[focusableElements.length - 1];

    this.dataModalCloseBtn.nativeElement.focus();
    this.dataModal.nativeElement.addEventListener("keydown", this.trapTabKey);
  }

  trapTabKey = (event: KeyboardEvent) => {
    const deepActiveElement = document.activeElement;

    if (event.key === "Tab") {

      if (event.shiftKey) {
        /* shift + tab */
        if (deepActiveElement === this.firstFocusableElement) {
          event.preventDefault();
          this.lastFocusableElement!.focus();
        }
      } else {
        /* tab */
        if (deepActiveElement === this.lastFocusableElement) {
          event.preventDefault();
          this.firstFocusableElement!.focus();
        }
      }
    } else if (event.key === "Escape") {
      console.log('hitting here')
      this.closeModal();
    }
  };

  closeModal() {
    this.dataModal.nativeElement.hidden = true;
    this.dataModal.nativeElement.removeEventListener("keydown", this.trapTabKey);
    this.dataModalSwitch.nativeElement.focus(); // Return focus to the element that opened the modal
  }

  ngOnInit(): void {
    if (this.raw) {
      this.header = this.raw.title ?? this.raw.name;
      this.insight = this.raw.subtitle ?? this.raw.description;
      if (this.rawDataType === 'barChart')
        this.data = this.mapToLabelValueArray(this.raw.chart.data);
      else this.data = this.mapToLabelValueArray(this.raw.data);
    }
    this.processData();
  }
}
