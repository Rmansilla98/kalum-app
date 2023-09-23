import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";

const childRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent}
]

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})
export class RouterChildModule{}