import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'folder-structure-maker';
  folderStructure: Folder = {
    name: 'Root',
    subFolders: []
  };

  onAddFolder(folder: Folder) {
    this.folderStructure.subFolders.push(folder);
  }
}
