import 'meteor-client';
import { MeteorObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

Meteor.startup(() => {
  const subscription = MeteorObservable.autorun().subscribe(() => {

    if (Meteor.loggingIn()) {
      return;
    }
    
    setTimeout(() => {
        if (subscription)
          {subscription.unsubscribe()}
        else {
          console.log("Timeout failure: ", subscription);
        }
    });

    if (environment.production) {
      enableProdMode();
    }

    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.log(err));
  });
});
