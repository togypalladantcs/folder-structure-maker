import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TreeDataService } from '../service/tree-data.service';
import { TreeFunctionService } from '../service/tree-function.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.sass'],
})
export class FolderComponent implements OnInit {
  public items: Array<any>;
  nestedDataSource: any;
  title = 'FOLDER STRUCTURE MAKER';
  data = new BehaviorSubject<any[]>([]);
  public treeData = [
    {
      name: 'Parent 1',
      children: [
        { name: 'Child 1.1' },
        { name: 'Child 1.2' },
        { name: 'Child 1.3' }
      ]
    },
    {
      name: 'Parent 2',
      children: [
        { name: 'Child 2.1' },
        { name: 'Child 2.2' }
      ]
    }
  ];
  constructor(
    public dataService: TreeDataService,
    private service: TreeFunctionService
  ) {
    this.items = [{ text: 'Item 1' }];
  }
  ngOnInit(): void {
    this.dataService._dataChange.subscribe((value: any) => {
      this.dataService = value;
      console.log(this.dataService);
    });
  }
  public addItem(parentIndex: number, name: string): void {
    this.treeData[parentIndex].children.push({ name });
  }
  addFolderToRoot(): void {
    const value = {
      type: 'folder',
      name: 'test',
      children: [],
      id: 0,
    };
    this.data.next(this.data.getValue().concat([value]));  }
}
