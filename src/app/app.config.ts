import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideCssVarNamespacing } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideCssVarNamespacing('app'),
  ]
};
