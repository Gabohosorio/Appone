import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'SaleOn: Online Sales App';
  cities = ['Medellín', 'Bogota', 'Manizales'];
  name!: string;
  cityselected!: string;
  criteria = "";
  LogoAmisoft = 'assets/images/AmisoftOscuroSinFondo.png';
  AddCity(city: string): void {
    this.cities.push(city);
  }
  OnCityClick(city: string): void {
    this.cityselected = city;
  }
  OnClearCity(): void {
    this.cityselected = '';
  }
}
