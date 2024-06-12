import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  private data: any[] = 
  [
    {
      name: 'Accordion',
      route: 'accordion',
      desc: 'The accordion component is used to show and hide content. It is composed of a series of panels, each associated with a header in a list.',
    },
    {
      name: 'Alert',
      route: 'alert',
      desc: 'An alert keeps users informed of important and sometimes time-sensitive changes.',
    },
    {
      name: 'Banner',
      route: 'banner',
      desc: 'Banners identify official websites of government organizations in the United States. They also help visitors understand whether a website is official and secure.',
    },
    {
      name: 'Breadcrumb',
      route: 'breadcrumb',
      desc: 'Breadcrumbs help users understand where they are in the website hierarchy and navigate back to higher-level pages.',
    },
    {
      name: 'Button',
      route: 'button',
      desc: 'A button draws attention to important actions with a large selectable surface.',
    }
    ,
    {
      name: 'Form input',
      route: 'form-input',
      desc: 'Form inputs allow users to enter data into a form.',
    },
    {
      name: 'Table',
      route: 'table',
      desc: 'Tables display sets of data across rows and columns.',
    },
    {
      name: 'Step Indicator',
      route: 'step-indicator',
      desc: 'A step indicator shows users where they are in a multi-step process and how many steps are left.',
    },
    {
      name: 'Side Navigation',
      route: 'side-navigation',
      desc: 'Side navigation provides a list of links to important content on a website.',
    },
    {
      name: 'Radio Button',
      route: 'radio-button',
      desc: 'Radio buttons allow users to select one option from a list.',
    }
  ];

  getData(): any[] {
    return this.data;
  }
}
