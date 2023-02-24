import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.sass']
})
export class NewComponent {
  @Input() folder: any;
  @Output() addFolder = new EventEmitter<Folder>();

  onAddFolder() {
    const newFolder: Folder = {
      name: 'New Folder',
      subFolders: []
    };
    this.addFolder.emit(newFolder);
  }
}
