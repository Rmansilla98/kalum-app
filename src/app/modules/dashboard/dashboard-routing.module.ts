import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./page/dashboard/dashboard.component";
import { NgModule } from "@angular/core";




const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent, loadChildren: () => import('./router-child.module').then(m => m.RouterChildModule)}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule{}