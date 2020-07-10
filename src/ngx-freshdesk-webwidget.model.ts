export abstract class NgxFreshdeskWebwidgetConfig {
  abstract widgetId: number;
  abstract locale: string;
  abstract callback(FreshworksWidget): any;
}
