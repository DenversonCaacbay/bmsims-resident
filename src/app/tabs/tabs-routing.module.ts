import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyRequestComponent } from './my-request/my-request.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TabsPage } from './tabs.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: TabsPage
//   }
// ];
const routes: Routes = [
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
