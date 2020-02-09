import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  {
    path: 'coin/:id',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
  },
  { path: 'bitcoin', loadChildren: () => import('./bitcoin/bitcoin.module').then(m => m.BitcoinModule) },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
