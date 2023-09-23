import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { CarrerasTecnicasComponent } from "../carreras-tecnicas/components/carreras-tecnicas/carreras-tecnicas.component";
import { ExamenesAdmisionComponent } from "../examenes-admision/components/examenes-admision/examenes-admision.component";

const childRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'carreras', component: CarrerasTecnicasComponent},
    {path: 'examenes', component: ExamenesAdmisionComponent}
]   

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})
export class RouterChildModule{}