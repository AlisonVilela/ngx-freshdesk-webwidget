import { Injectable } from '@angular/core';

import { NgxFreshdeskWebwidgetConfig } from './ngx-freshdesk-webwidget.model';

function getWindow(): any {
  return window;
}

@Injectable()
export class NgxFreshdeskWebwidgetService {

  private window: any;

  constructor(private ngxFreshdeskWebwidgetConfig?: NgxFreshdeskWebwidgetConfig) {
    if (!this.ngxFreshdeskWebwidgetConfig.widgetId) {
      throw new Error('Missing widgetId. Please set in app config via FreshdeskWidgetProvider');
    }

    this.window = getWindow();
    const window = this.window;

    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://widget.freshworks.com/widgets/${this.ngxFreshdeskWebwidgetConfig.widgetId}.js`;

    window.fwSettings = {
      'widget_id': ngxFreshdeskWebwidgetConfig.widgetId
    };

    window.FreshworksWidget || function() {
      if ("function" != typeof window.FreshworksWidget) {
        let n = function() {
          n['q'].push(arguments)
        };
        n['q'] = [], window.FreshworksWidget = n
      }
    }();

    script.onload = function (event) {
      try {
        ngxFreshdeskWebwidgetConfig.callback(window.FreshworksWidget);
      } catch (error) {
        console.log("error.: ", error)
      }
    };

    script.onerror = function (event) {
      console.log("error Onerror.: ", event)
    };

    document.body.append(script);
  }

  get FreshworksWidget() {
    return this.window.FreshworksWidget
  }
}
