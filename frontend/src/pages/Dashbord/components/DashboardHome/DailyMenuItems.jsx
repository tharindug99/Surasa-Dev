import * as React from 'react';

import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';



const key = 'Compact Table';

const DailyMenuItemsTable = () => {

    const nodes = [
        {
          id: 1,
          name: 'Margherita Pizza',
          deadline: new Date('2024-05-20'),
          type: 'Type A',
          isComplete: true,
          nodes: [{ id: 11, name: 'Subtask 1.1' }, { id: 12, name: 'Subtask 1.2' }],
        },
        {
          id: 2,
          name: 'Caesar Salad',
          deadline: new Date('2024-05-22'),
          type: 'Type B',
          isComplete: false,
          nodes: [{ id: 21, name: 'Subtask 2.1' }],
        },
        {
          id: 3,
          name: 'Pasta Carbonara',
          deadline: new Date('2024-05-25'),
          type: 'Type C',
          isComplete: true,
          nodes: [],
        },
      ];
    
    

  const data = { nodes };

  const theme = useTheme(getTheme());

  const COLUMNS = [
    { label: 'Food Items', 
        renderCell: (item) => item.name },
    {
      label: 'Description',
      renderCell: (item) =>
        item.deadline.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
    },
    { label: 'Type', renderCell: (item) => item.type },
    {
      label: 'Complete',
      renderCell: (item) => item.isComplete.toString(),
    },
    { label: 'Tasks', renderCell: (item) => item.nodes?.length },
  ];

  return <CompactTable columns={COLUMNS} data={data} theme={theme} />;
};

export default DailyMenuItemsTable;