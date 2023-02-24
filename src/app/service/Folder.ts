interface Folder {
  name: string;
  subFolders: Folder[];
}

const folderStructure: Folder = {
  name: 'Root',
  subFolders: [
    {
      name: 'Folder 1',
      subFolders: [
        {
          name: 'Folder 1.1',
          subFolders: []
        },
        {
          name: 'Folder 1.2',
          subFolders: [
            {
              name: 'Folder 1.2.1',
              subFolders: []
            }
          ]
        }
      ]
    },
    {
      name: 'Folder 2',
      subFolders: []
    }
  ]
};
