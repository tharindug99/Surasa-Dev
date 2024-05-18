import * as React from 'react';

import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';



const key = 'Compact Table';

const Component = () => {

    const nodes = [
        {
          id: 1,
          name: 'Task 1',
          deadline: new Date('2024-05-20'),
          type: 'Type A',
          isComplete: true,
          nodes: [{ id: 11, name: 'Subtask 1.1' }, { id: 12, name: 'Subtask 1.2' }],
        },
        {
          id: 2,
          name: 'Task 2',
          deadline: new Date('2024-05-22'),
          type: 'Type B',
          isComplete: false,
          nodes: [{ id: 21, name: 'Subtask 2.1' }],
        },
        {
          id: 3,
          name: 'Task 3',
          deadline: new Date('2024-05-25'),
          type: 'Type C',
          isComplete: true,
          nodes: [],
        },
      ];
    
      // Transform sample data

  const data = { nodes };

  const theme = useTheme(getTheme());

  const COLUMNS = [
    { label: 'Task', renderCell: (item) => item.name },
    {
      label: 'Deadline',
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

export default Component;