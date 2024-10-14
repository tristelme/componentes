import { Component } from '@angular/core';

export interface Componentes {
  idCard: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  alt: string;
  marca: string;
  precio: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  info: Componentes[] = [
    {
      idCard: "1",
      titulo: "iPhone 14",
      descripcion: "El último modelo de iPhone.",
      imagen: "../assets/iphone14.png",
      alt: "iPhone 14",
      marca: "Apple",
      precio: 999
    },
    {
      idCard: "2",
      titulo: "Samsung Galaxy S21",
      descripcion: "Un smartphone potente de Samsung.",
      imagen: "../assets/samsungs21.png",
      alt: "Samsung Galaxy S21",
      marca: "Samsung",
      precio: 799
    },
    {
      idCard: "3",
      titulo: "Google Pixel 6",
      descripcion: "La mejor cámara en un smartphone.",
      imagen: "../assets/GooglePixel6.png",
      alt: "Google Pixel 6",
      marca: "Google",
      precio: 599
    }
  ];
}
