import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NewItemComponent {
  @Input() className = 'btn-primary';
  @Input() label!:string;
  @Output() newItemEvent = new EventEmitter<string>();
  AddNewItem(item: string): void {
    console.log('Item -> ', item);
    this.newItemEvent.emit(item);
  }
}
