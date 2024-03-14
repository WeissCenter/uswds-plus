import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private data: any[] = 
  [
    {
      name: 'Border',
      route: 'border',
      desc: 'Borders are used to separate content, provide visual contrast, and indicate interactive elements.',
    },
    {
      name: 'Colors',
      route: 'colors',
      desc: 'Colors are used to convey meaning, illustrate relationships, and communicate status.',
      children: [
        {
          name: 'Primary',
          route: 'primary',
          desc: 'Primary colors are used for primary actions and links.',
        }, 
        {
          name: 'Secondary',
          route: 'secondary',
          desc: 'Secondary colors are used for secondary actions and links.',
        },
        {
          name: 'Body',
          route: 'body',
          desc: 'Body background color.',
        },
        {
          name: 'Basic palette',
          route: 'basic',
          desc: 'Basic palette colors are used for basic actions and links.',
        },
        {
          name: 'Accent cool',
          route: 'accent-cool',
          desc: 'Accent colors provide a range of colors to be used for accent actions and links. Cool consists a shade within the cool color spectrum.',
        },
        {
          name: 'Accent warm',
          route: 'accent-warm',
          desc: 'Accent colors provide a range of colors to be used for accent actions and links. Warm consists a shade within the warm color spectrum.',
        },
        {
          name: 'Success',
          route: 'success',
          desc: 'Success colors are used for success actions and links.',
        },
        {
          name: 'Warning',
          route: 'warning',
          desc: 'Warning colors are used for warning actions and links.',
        },
        {
          name: 'Error',
          route: 'error',
          desc: 'Error colors are used for error actions and links.',
        },
        {
          name: 'Info',
          route: 'info',
          desc: 'Info colors are used for info actions and links.',
        },
       {
        name: 'Emergency',
        route: 'emergency',
        desc: 'Emergency colors are used for emergency actions and links.',
       },
       {
        name: 'Base',
        route: 'base',
        desc: 'Base color.',
      },
       {
        name: 'Disabled',
        route: 'disabled',
        desc: 'Disabled colors are used for disabled actions and links.',
       },
      ]
    },
    {
      name: 'Fonts',
      route: 'fonts',
      desc: 'Fonts are used to convey meaning, illustrate relationships, and communicate status.',
      children: [
        {
          name: 'Sizes',
          route: 'sizes',
          desc: 'Font sizes are used to convey meaning, illustrate relationships, and communicate status.',
        },
        {
          name: 'Line heights',
          route: 'line-height',
          desc: 'Line height is used to set the amount of space between lines of text.',
        },
        {
          name: 'Letter spacing',
          route: 'letter-spacing',
          desc: 'Letter spacing is used to set the amount of space between characters in a line of text.',
        },
        {
          name: 'Weights',
          route: 'weights',
          desc: 'Font weights are used to convey meaning, illustrate relationships, and communicate status.',
        },
        {
          name: 'Families',
          route: 'families',
          desc: 'Font families are used to convey meaning, illustrate relationships, and communicate status.',
        },
        {
          name: 'Body',
          route: 'body',
          desc: 'Font body.',
        },
        {
          name: 'Lead',
          route: 'lead',
          desc: 'Font lead.',
        },
        {
          name: 'H1',
          route: 'h1',
          desc: 'Font h1.',
        },
        { 
          name: 'H2',
          route: 'h2',
          desc: 'Font h2.'
        },
        {
          name: 'H3',
          route: 'h3',
          desc: 'Font h3.'
        },
        {
          name: 'H4',
          route: 'h4',
          desc: 'Font h4.'
        },
        {
          name: 'H5',
          route: 'h5',
          desc: 'Font h5.'
        },
        {
          name: 'H6',
          route: 'h6',
          desc: 'Font h6.'
        },
        
      ]
    },
    {
      name: 'Spacing',
      route: 'spacing',
      desc: 'Spacing is used to convey meaning, illustrate relationships, and communicate status.',
    }
  ];

  getData(): any[] {
    return this.data;
  }
}
