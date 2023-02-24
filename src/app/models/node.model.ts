export class NodeModel {
    type: 'folder' | 'file' | 'unset' | null | undefined;
    name?: string;
    children?: NodeModel[];
    id: string | number | undefined ;
}
