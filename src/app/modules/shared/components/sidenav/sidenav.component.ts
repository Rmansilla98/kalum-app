import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/modules/login/components/login/login.component';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidenav',
  templateUrl:'./sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  menuNav = [
    {name: 'Home', route:'home',icon: 'home'},
    {name: 'Carreras', route:'carreras',icon: 'category'},
    {name: 'Examenes', route:'examenes',icon: 'calendar_today'}
  ]

  mobileQuery: MediaQueryList;

  constructor(media: MediaMatcher, public dialogLogin: MatDialog, public authService: AuthService){
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnInit(): void {

  }

  openFormLogin(){
    const dialogLoginRef = this.dialogLogin.open(LoginComponent, {width: '450px'});
  }

  logout(): void{
    let username = this.authService.usuario.username;
    this.authService.logout();
    Swal.fire({
      title: 'logout',
      text: `${username}, has cerrado sesión con éxito`,
      icon: 'success'
    });
  }

}
