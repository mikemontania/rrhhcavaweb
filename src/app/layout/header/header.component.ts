import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core'; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit, OnDestroy {
 
 
  pendientes: any[] = [];
  sinImagen: string = './assets/images/users/user_img.png';
  imagenEmpresa: string = './assets/images/logo-text.png';
  constructor( 
  ) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnChanges(){
    
  }


  async ngOnInit() {
     
  }
  cargar() {
    
  }
  logout() {
    
  }

  async actualizarPendientes() {
    
  }

  async findPendientes() {
    
  }


}
