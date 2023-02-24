import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NodeModel } from '../models/node.model';
@Injectable({
  providedIn: 'root'
})
export class TreeDataService {
  // _dataChange = new BehaviorSubject<NodeModel[]>(
  //   [{
  //     id: 1,
  //     name: 'John Heart 1',
  //     type: 'folder',
  //     children: [
  //       {
  //         id: 3,
  //         name: 'Ken Bond 1',
  //         type: 'file',
  //         children: []
  //       },
  //       {
  //         id: 4,
  //         name: 'Ken Bond 2',
  //         type: 'folder',
  //         children: [
  //           {
  //             id: 5,
  //             name: 'Vaggelis Awesome 1',
  //             type: 'file',
  //             children: []
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     name: 'John Heart 2',
  //     type: 'folder',
  //     children: [
  //       {
  //         id: 6,
  //         name: 'Ken Bond 1',
  //         type: 'file',
  //         children: []
  //       }
  //     ]
  //   }
  // ]
  // );
  _dataChange = new BehaviorSubject<NodeModel[]>(
    []
  );

}
