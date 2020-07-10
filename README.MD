# ngx-freshdesk-webwidget

[![Maintainability](https://api.codeclimate.com/v1/badges/75bc5877b3bf6939fe44/maintainability)](https://codeclimate.com/github/AlisonVilela/ngx-freshdesk-webwidget/maintainability)
[![Build Status](https://travis-ci.org/AlisonVilela/ngx-freshdesk-webwidget.svg?branch=master)](https://travis-ci.org/AlisonVilela/ngx-freshdesk-webwidget)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/AlisonVilela/ngx-freshdesk-webwidget/issues)

Freshdesk widget for Angular 8+

## Installation

Via [npm](https://www.npmjs.com/package/ngx-freshdesk-webwidget):

```bash
npm install ngx-freshdesk-webwidget --save
```

## Usage

### 1. Import the `NgxFreshdeskWebwidgetModule`

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxFreshdeskWebwidgetModule } from 'ngx-freshdesk-webwidget';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFreshdeskWebwidgetModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### SharedModule

```ts
@NgModule({
    exports: [
      CommonModule,
      NgxFreshdeskWebwidgetModule
    ]
})
export class SharedModule { }
```

##### Configuration

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxFreshdeskWebwidgetModule, NgxFreshdeskWebwidgetConfig } from 'ngx-freshdesk-webwidget';

import { AppComponent } from './app';

export class FreshdeskConfig extends NgxFreshdeskWebwidgetConfig {
  widgetId = 00000000000;
  locale = 'en';
  callback(FreshworksWidget) {
    FreshworksWidget('hide');
  }
}

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        NgxFreshdeskWebwidgetModule.forRoot(FreshdeskConfig)
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 2. Import the `NgxFreshdeskWebwidgetService`

```ts
import { NgxFreshdeskWebwidgetService } from 'ngx-freshdesk-webwidget';

@Component({
  selector: 'app',
  templateUrl: './app.html'
})
export class app {

  constructor(private _NgxFreshdeskWebwidgetService: NgxFreshdeskWebwidgetService) { }

}
```

#### 3. Example to usage

```ts
constructor(private _NgxFreshdeskWebwidgetService: NgxFreshdeskWebwidgetService) {
  this._NgxFreshdeskWebwidgetService.FreshworksWidget('identify', 'ticketForm', {
    name: 'Fulano Detal',
    email: 'fulano.detal@acme.inc',
  });

  this._NgxFreshdeskWebwidgetService.FreshworksWidget('show');
}

logout(){
  this._NgxFreshdeskWebwidgetService.FreshworksWidget('hide');
}
```

```ts
buttonClick(){
  this._NgxFreshdeskWebwidgetService.FreshworksWidget('open', 'ticketForm');
}
```

```ts
buttonClickArticle(articleId: number){
  this._NgxFreshdeskWebwidgetService.FreshworksWidget('open', 'article', {
    id: articleId
  });
}
```

## API

### NgxFreshdeskWebwidgetService

#### Methods

- `FreshworksWidget`. Please see [Freshdesk Documentation](https://developers.freshdesk.com/widget-api) for more information.

#### NgxFreshdeskWebwidgetConfig

- `widgetId`: Number of your Freshdesk Web Widget ID.
- `locale`: To force the widget to load in a particular language.
- `callback`: Callback, executed after Freshdesk loaded.

## Issues

Please report bugs and issues [here](https://github.com/AlisonVilela/ngx-freshdesk-webwidget/issues).

## License

MIT © [Alison Vilela](https://github.com/AlisonVilela)

## Change log

### v1.1.0

- Anuglar 10 support

### v1.0.0

- Added documentation
- Initial version
