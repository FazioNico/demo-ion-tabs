import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'tab-one',
        loadChildren: () => import('./tab-one/tab-one.module')
                              .then(m => m.TabOneModule)
      },
      {
        path: 'tab-two',
        loadChildren: () => import('./tab-two/tab-two.module')
                              .then(m => m.TabTwoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }