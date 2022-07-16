import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'page1',
    component: Page1Component,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'page2',
    component: Page2Component,
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
