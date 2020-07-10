import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { NgxFreshdeskWebwidgetConfig } from './ngx-freshdesk-webwidget.model';
import { NgxFreshdeskWebwidgetService } from './ngx-freshdesk-webwidget.service';

@NgModule()
export class NgxFreshdeskWebwidgetModule {
  static forRoot(freshdeskConfig: Type<NgxFreshdeskWebwidgetConfig>): ModuleWithProviders<NgxFreshdeskWebwidgetModule> {
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
