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
    },
    {
      idCard: "4",
      titulo: "Samsung A23 5G",
      descripcion: "Potente procesador Snapdragon 685 | Pantalla de 6,67 | Frecuencia de actualización de 120Hz | Cámara triple de 108MP | Batería de 5000mAh | Carga Rápida.",
      imagen: "../assets/samsunga235g.jpg",
      alt: "Samsung A23 5G",
      marca: "Samsung",
      precio: 499
    },
    {
      idCard: "5",
      titulo: "Xiaomi RedmiNote 13",
      descripcion: "Con un diseño delgado y liviano, el moto g84 5G está disponible en colores increíbles y materiales de primer nivel, incluida una versión de cuero vegano que es suave al tacto y cómoda para la mano.",
      imagen: "../assets/xiaomiredminote12.png",
      alt: "Xiaomi RedmiNote 13",
      marca: "Xiaomi",
      precio: 599
    },
    {
      idCard: "6",
      titulo: "Motorola moto G84",
      descripcion: "Diseño sofisticado y máxima protección! Con un diseño delgado y liviano, el moto g84 5G está disponible en colores increíbles y materiales de primer nivel, incluida una versión de cuero vegano que es suave al tacto y cómoda para la mano.",
      imagen: "../assets/motorolamotog84.png",
      alt: "motorola moto g84",
      marca: "Motorola",
      precio: 599
    }
  ];
}
