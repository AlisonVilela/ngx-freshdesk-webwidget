export abstract class NgxFreshdeskWebwidgetConfig {
  abstract widgetId: number;
  abstract callback(FreshworksWidget): any;
}
