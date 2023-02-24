import { Injectable } from '@angular/core';
import { NodeModel } from '../models/node.model';

@Injectable({
  providedIn: 'root'
})
export class TreeFunctionService {

  flatJsonArray(flattenedAray: Array<NodeModel>, node: NodeModel[]) {
    const array: Array<NodeModel> = flattenedAray;
    node.forEach(element => {
      if (element.children) {
        array.push(element);
        this.flatJsonArray(array, element.children);
      }
    });
    return array;
  }

  findNodeMaxId(node?: NodeModel[]) {
   // const flatArray = this.flatJsonArray([]);
    const flatArrayWithoutChildren: any[] = [];
    // flatArray.forEach(element => {
    //   flatArrayWithoutChildren.push(element.id);
    // });
    return Math.max(...flatArrayWithoutChildren);
  }

  constructor() { }
}
// // Define a Folder class to represent folders in the folder structure
// class Folder {
//   constructor(name) {
//     this.name = name;
//     this.children = [];
//   }

//   addChild(child) {
//     this.children.push(child);
//   }

//   removeChild(child) {
//     const index = this.children.indexOf(child);
//     if (index >= 0) {
//       this.children.splice(index, 1);
//     }
//   }

//   rename(newName) {
//     this.name = newName;
//   }
// }

// // Define the root folder of the folder structure
// const rootFolder = new Folder('Root');

// // Define a function to add a new folder to the root directory
// function addFolderToRoot(name) {
//   const newFolder = new Folder(name);
//   rootFolder.addChild(newFolder);
//   // Update the folder tree view in the user interface
// }

// // Define a function to rename a folder
// function renameFolder(folder, newName) {
//   folder.rename(newName);
//   // Update the folder tree view in the user interface
// }

// // Define a function to delete a folder
// function deleteFolder(folder) {
//   folder.parent.removeChild(folder);
//   // Update the folder tree view in the user interface
// }
