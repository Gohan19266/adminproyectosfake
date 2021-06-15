import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';



export default function BasicEditingGrid(users) {
  console.log(users.users);
  const userArray =users.users;
  return (
    <div style={{ height: 570, width: '100%' }}>
    
      <DataGrid rows={userArray} columns={columns} />
    </div>
  );
}

const columns = [
  { field: 'name', headerName: 'Name', width: 500, editable: false },
  {
    field: 'code',
    headerName: 'Campus Code',
    type: 'number',
    width: 400,
    editable: false,
  },
  { field: 'note', headerName: 'Note', width: 270, editable: true },
];


