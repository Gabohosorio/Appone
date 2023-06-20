import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CitiesComponent {
  @Input() city!: string;
  @Input() cityselected!: string;
  @Output() cityClickEvent = new EventEmitter<string>();
  OnCityClick(city: string): void {
    this.cityClickEvent.emit(city);
  }
}
