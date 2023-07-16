import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './tabs/home/home.component';
import { MyRequestComponent } from './tabs/my-request/my-request.component';
import { ProfileComponent } from './tabs/profile/profile.component';
import { AboutUsComponent } from './tabs/about-us/about-us.component';
import { TabsPage } from './tabs/tabs.page';  

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login-form',
    loadChildren: () => import('./login-form/login-form.module').then( m => m.LoginFormPageModule)
  },
  {
    path: '',
    redirectTo: 'login-form',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
     path: 'tabs',
    component: TabsPage,
    children: [
        {
          path: 'home',
          component: HomeComponent,
        },
        {
          path: 'my-request',
          component: MyRequestComponent,
        },
        {
          path: 'profile',
          component: ProfileComponent,
        },
        {
          path: 'about-us',
          component: AboutUsComponent,
        },
        // Add more custom tab routes here
        {

          path: 'tabs',
          component: TabsPage   
        },
    ]
  }

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
