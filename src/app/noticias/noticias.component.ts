import { Component, OnInit } from '@angular/core';
import { MantenimientoNoticiasService } from '../servicios/mantenimiento-noticias.service';
import { Noticias } from '../clases/noticias';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias:Noticias[];

  constructor(private noticiaServicio:MantenimientoNoticiasService) { }


  ngOnInit(): void {
  	this.noticiaServicio.getNoticias().subscribe(noticias => {
  		console.log(noticias);
  		this.noticias = noticias;
  	},(error)=>{
  		console.log(error);
  	});

  }

}
