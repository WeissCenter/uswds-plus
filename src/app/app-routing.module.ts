import { Route, RouterModule } from '@angular/router';
import { ComponentsComponent } from './pages/components/components.component';
import { ComponentOverviewComponent } from './pages/components/overview/overview.component';
import { CoreComponent } from './pages/core/core.component';
import { CoreOverviewComponent } from './pages/core/overview/overview.component';
import { AccordionComponent } from './pages/components/items/accordion/accordion.component';
import { AlertComponent } from './pages/components/items/alert/alert.component';
import { BannerComponent } from './pages/components/items/banner/banner.component';
import { BreadcrumbComponent } from './pages/components/items/breadcrumb/breadcrumb.component';
import { ButtonComponent } from './pages/components/items/button/button.component';
import { ColorsComponent } from './pages/core/items/colors/colors.component';
import { PrimaryComponent } from './pages/core/items/colors/primary/primary.component';
import { AccentCoolComponent } from './pages/core/items/colors/accent-cool/accent-cool.component';
import { AccentWarmComponent } from './pages/core/items/colors/accent-warm/accent-warm.component';
import { FontsComponent } from './pages/core/items/fonts/fonts.component';
import { SizesComponent } from './pages/core/items/fonts/sizes/sizes.component';
import { LineHeightComponent } from './pages/core/items/fonts/line-height/line-height.component';
import { FamiliesComponent } from './pages/core/items/fonts/families/families.component';
import { WeightsComponent } from './pages/core/items/fonts/weights/weights.component';
import { FontBodyComponent } from './pages/core/items/fonts/body/body.component';
import { FontH1Component } from './pages/core/items/fonts/h1/h1.component';
import { FontH2Component } from './pages/core/items/fonts/h2/h2.component';
import { FontH3Component } from './pages/core/items/fonts/h3/h3.component';
import { FontH4Component } from './pages/core/items/fonts/h4/h4.component';
import { FontH5Component } from './pages/core/items/fonts/h5/h5.component';
import { FontH6Component } from './pages/core/items/fonts/h6/h6.component';
import { LetterSpacingComponent } from './pages/core/items/fonts/letter-spacing/letter-spacing.component';
import { FontLeadComponent } from './pages/core/items/fonts/lead/lead.component';
import { BodyColorComponent } from './pages/core/items/colors/body/body.component';
import { TableComponent } from './pages/components/items/table/table.component';
import { SideNavigationComponent } from './pages/components/items/side-navigation/side-navigation.component';
import { FormInputComponent } from './pages/components/items/form-input/form-input.component';
import { BaseComponent } from './pages/core/items/colors/base/base.component';
import { InfoComponent } from './pages/core/items/colors/info/info.component';
import { SuccessComponent } from './pages/core/items/colors/success/success.component';
import { ErrorComponent } from './pages/core/items/colors/error/error.component';
import { WarningComponent } from './pages/core/items/colors/warning/warning.component';
import { DisabledComponent } from './pages/core/items/colors/disabled/disabled.component';
import { EmergencyComponent } from './pages/core/items/colors/emergency/emergency.component';
import { BorderComponent } from './pages/core/items/border/border.component';
import { SecondaryComponent } from './pages/core/items/colors/secondary/secondary.component';
import { RadioButtonComponent } from './pages/components/items/radio-button/radio-button.component';
import { BasicComponent } from './pages/core/items/colors/basic/basic.component';

import { NgModule } from '@angular/core';

export const appRoutes: Route[] = [
  {
    path: '',
    data: { breadcrumbLabel: 'Home' },
    children: [
      {
        path: 'components',
        component: ComponentsComponent,
        data: { breadcrumbLabel: 'Compenents' },
        children: [
          {
            path: '',
            redirectTo: 'overview',
            pathMatch: 'full',
          },
          {
            path: 'overview',
            component: ComponentOverviewComponent,
            data: { breadcrumbLabel: 'Overview' },
          },
          {
            path: 'accordion',
            component: AccordionComponent,
            data: { breadcrumbLabel: 'Accordion' },
          },
          {
            path: 'alert',
            component: AlertComponent,
            data: { breadcrumbLabel: 'Alert' },
          },
          {
            path: 'banner',
            component: BannerComponent,
            data: { breadcrumbLabel: 'Banner' },
          },
          {
            path: 'breadcrumb',
            component: BreadcrumbComponent,
            data: { breadcrumbLabel: 'Breadcrumb' },
          },
          {
            path: 'button',
            component: ButtonComponent,
            data: { breadcrumbLabel: 'Button' },
          },
          {
            path: 'form-input',
            component: FormInputComponent,
            data: { breadcrumbLabel: 'Form input' },
          },
          {
            path: 'table',
            component: TableComponent,
            data: { breadcrumbLabel: 'Table' },
          },
          {
            path: 'side-navigation',
            component: SideNavigationComponent,
            data: { breadcrumbLabel: 'Side Navigation' },
          },
          {
            path: 'radio-button',
            component: RadioButtonComponent,
            data: { breadcrumbLabel: 'Radio Button' },
          },
        ],
      },
      {
        path: 'core',
        component: CoreComponent,
        data: { breadcrumbLabel: 'Core' },
        children: [
          {
            path: '',
            redirectTo: 'overview',
            pathMatch: 'full',
          },
          {
            path: 'overview',
            component: CoreOverviewComponent,
            data: { breadcrumbLabel: 'Overview' },
          },
          {
            path: 'border',
            component: BorderComponent,
            data: { breadcrumbLabel: 'Border' },
          },
          {
            path: 'colors',
            component: ColorsComponent,
            data: { breadcrumbLabel: 'Colors' },
            children: [
              { path: '', redirectTo: 'primary', pathMatch: 'full' },
              {
                path: 'primary',
                component: PrimaryComponent,
                data: { breadcrumbLabel: 'Primary' },
              },
              {
                path: 'basic',
                component: BasicComponent,
                data: { breadcrumbLabel: 'Basic palette' },
              },
              {
                path: 'accent-cool',
                component: AccentCoolComponent,
                data: { breadcrumbLabel: 'Accent Cool' },
              },
              {
                path: 'accent-warm',
                component: AccentWarmComponent,
                data: { breadcrumbLabel: 'Accent Warm' },
              },
              {
                path: 'secondary',
                component: SecondaryComponent,
                data: { breadcrumbLabel: 'Secondary' },
              },
              {
                path: 'body',
                component: BodyColorComponent,
                data: { breadcrumbLabel: 'Body' },
              },
              {
                path: 'base',
                component: BaseComponent,
                data: { breadcrumbLabel: 'Base' },
              },
              {
                path: 'info',
                component: InfoComponent,
                data: { breadcrumbLabel: 'Info' },
              },
              {
                path: 'success',
                component: SuccessComponent,
                data: { breadcrumbLabel: 'Success' },
              },
              {
                path: 'error',
                component: ErrorComponent,
                data: { breadcrumbLabel: 'Error' },
              },
              {
                path: 'warning',
                component: WarningComponent,
                data: { breadcrumbLabel: 'Warning' },
              },
              {
                path: 'disabled',
                component: DisabledComponent,
                data: { breadcrumbLabel: 'Disabled' },
              },
              {
                path: 'emergency',
                component: EmergencyComponent,
                data: { breadcrumbLabel: 'Emergency' },
              },
            ],
          },
          {
            path: 'fonts',
            component: FontsComponent,
            data: { breadcrumbLabel: 'Fonts' },
            children: [
              { path: '', redirectTo: 'sizes', pathMatch: 'full' },
              {
                path: 'sizes',
                component: SizesComponent,
                data: { breadcrumbLabel: 'Sizes' },
              },
              {
                path: 'line-height',
                component: LineHeightComponent,
                data: { breadcrumbLabel: 'Line height' },
              },
              {
                path: 'letter-spacing',
                component: LetterSpacingComponent,
                data: { breadcrumbLabel: 'Letter spacing' },
              },
              {
                path: 'weights',
                component: WeightsComponent,
                data: { breadcrumbLabel: 'Weights' },
              },
              {
                path: 'families',
                component: FamiliesComponent,
                data: { breadcrumbLabel: 'Families' },
              },
              {
                path: 'body',
                component: FontBodyComponent,
                data: { breadcrumbLabel: 'Body' },
              },
              {
                path: 'lead',
                component: FontLeadComponent,
                data: { breadcrumbLabel: 'Lead' },
              },
              {
                path: 'h1',
                component: FontH1Component,
                data: { breadcrumbLabel: 'H1' },
              },
              {
                path: 'h2',
                component: FontH2Component,
                data: { breadcrumbLabel: 'H2' },
              },
              {
                path: 'h3',
                component: FontH3Component,
                data: { breadcrumbLabel: 'H3' },
              },
              {
                path: 'h4',
                component: FontH4Component,
                data: { breadcrumbLabel: 'H4' },
              },
              {
                path: 'h5',
                component: FontH5Component,
                data: { breadcrumbLabel: 'H5' },
              },
              {
                path: 'h6',
                component: FontH6Component,
                data: { breadcrumbLabel: 'H6' },
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class RoutingModule {}
