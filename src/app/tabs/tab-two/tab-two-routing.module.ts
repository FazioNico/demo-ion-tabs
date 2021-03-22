import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabTwoComponent } from './tab-two.component';

const routes: Routes = [
  {path: '', component: TabTwoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabTwoRoutingModule { }