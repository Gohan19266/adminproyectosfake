import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function BasicEditingGrid(user) {
  console.log(user);
  return (
    <div style={{ height: 570, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
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
const rows = [
  {
    id: 1,
    name: ' randomTraderName(',
    code: '2542342342',
    note: 5,
  },
  {
    id: 2,
    name: 'randomTraderName',
    code: '2543423',
    note: 5,
  },
  {
    id: 3,
    name: 'randomTraderName',
    code: '42342425',
    note: 5,
  },
  {
    id: 4,
    name: 'randomTraderName',
    code: '2543423',
    note: 5,
  },
  {
    id: 5,
    name: 'randomTraderName',
    code: '23424435',
    note: 5,
  },
];
