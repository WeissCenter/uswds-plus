import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule} from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccordionComponent } from './pages/components/items/accordion/accordion.component';
import { AlertComponent } from './pages/components/items/alert/alert.component';
import { BannerComponent } from './pages/components/items/banner/banner.component';
import { BreadcrumbComponent } from './pages/components/items/breadcrumb/breadcrumb.component';
import { TokenTableComponent } from './site-components/token-table/token-table.component';
import { ButtonComponent } from './pages/components/items/button/button.component';
import { ComponentsComponent } from './pages/components/components.component';
import { CoreComponent } from './pages/core/core.component';
import { ComponentOverviewComponent } from './pages/components/overview/overview.component';
import { CoreOverviewComponent } from './pages/core/overview/overview.component';
import { ColorsComponent } from './pages/core/items/colors/colors.component';
import { PrimaryComponent } from './pages/core/items/colors/primary/primary.component';
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
import { TokenFormComponent } from './site-components/token-form/token-form.component';
import { FormInputComponent } from './pages/components/items/form-input/form-input.component';
import { BaseComponent } from './pages/core/items/colors/base/base.component';
import { WarningComponent } from './pages/core/items/colors/warning/warning.component';
import { InfoComponent } from './pages/core/items/colors/info/info.component';
import { ErrorComponent } from './pages/core/items/colors/error/error.component';
import { SuccessComponent } from './pages/core/items/colors/success/success.component';
import { EmergencyComponent } from './pages/core/items/colors/emergency/emergency.component';
import { DisabledComponent } from './pages/core/items/colors/disabled/disabled.component';
import { BorderComponent } from './pages/core/items/border/border.component';
import { RadioButtonComponent } from './pages/components/items/radio-button/radio-button.component';
import { SecondaryComponent } from './pages/core/items/colors/secondary/secondary.component';
import { AccentCoolComponent } from './pages/core/items/colors/accent-cool/accent-cool.component';
import { AccentWarmComponent } from './pages/core/items/colors/accent-warm/accent-warm.component';
import { BasicComponent } from './pages/core/items/colors/basic/basic.component';
import { SpacingComponent } from './pages/core/items/spacing/spacing.component';
import { FocusComponent } from './pages/core/items/focus/focus.component';
import { LinksComponent } from './pages/core/items/links/links.component';
import { KitchenSinkComponent } from './pages/kitchen-sink/kitchen-sink.component';
import { AccessibilityWidgetComponent } from './accessibility-widget/accessibility-widget.component';
import { ModalComponent } from './pages/components/items/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AlertComponent,
    BannerComponent,
    BreadcrumbComponent,
    TokenTableComponent,
    ButtonComponent,
    ComponentsComponent,
    CoreComponent,
    ComponentOverviewComponent,
    CoreOverviewComponent,
    ColorsComponent,
    PrimaryComponent,
    FontsComponent,
    SizesComponent,
    LineHeightComponent,
    FamiliesComponent,
    WeightsComponent,
    FontBodyComponent,
    FontH1Component,
    FontH2Component,
    FontH3Component,
    FontH4Component,
    FontH5Component,
    FontH6Component,
    LetterSpacingComponent,
    FontLeadComponent,
    BodyColorComponent,
    TableComponent,
    SideNavigationComponent,
    TokenFormComponent,
    FormInputComponent,
    BaseComponent,
    WarningComponent,
    InfoComponent,
    ErrorComponent,
    SuccessComponent,
    EmergencyComponent,
    DisabledComponent,
    BorderComponent,
    RadioButtonComponent,
    SecondaryComponent,
    AccentCoolComponent,
    AccentWarmComponent,
    BasicComponent,
    SpacingComponent,
    FocusComponent,
    LinksComponent,
    KitchenSinkComponent,
    ModalComponent,
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    AccessibilityWidgetComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
