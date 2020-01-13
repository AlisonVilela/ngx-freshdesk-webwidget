import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFreshdeskWebwidgetConfig } from './ngx-freshdesk-webwidget.model';
import { NgxFreshdeskWebwidgetService } from './ngx-freshdesk-webwidget.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class NgxFreshdeskWebwidgetModule {
  static forRoot(freshdeskConfig: Type<NgxFreshdeskWebwidgetConfig>): ModuleWithProviders {
    return {
      ngModule: NgxFreshdeskWebwidgetModule,
      providers: [
        {provide: NgxFreshdeskWebwidgetConfig, useClass: freshdeskConfig },
        {provide: NgxFreshdeskWebwidgetService, useClass: NgxFreshdeskWebwidgetService, deps: [NgxFreshdeskWebwidgetConfig] }
      ]
    };
  }
}

export {
  NgxFreshdeskWebwidgetService,
  NgxFreshdeskWebwidgetConfig
};
