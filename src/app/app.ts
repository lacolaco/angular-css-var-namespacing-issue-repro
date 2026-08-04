import { Component, inject } from '@angular/core';
import { CssVarNamespacer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <p>Component Scope Text</p>
    <p [style.color]="'var(--text-color)'">Component Scope Text (inline)</p>
  `,
  styles: `
    :host {
      --text-color: blue;
      --global--text-color: green;
    }

    p {
      color: var(--text-color);
    }

    p[data-global] {
      color: var(--global--text-color);
    }
  `,
})
export class App {
  namespacer = inject(CssVarNamespacer);
  textColor = this.namespacer.namespace('--text-color');
}
