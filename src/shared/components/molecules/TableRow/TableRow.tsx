import React from 'react';
import { TableRowProps } from './types';

export const TableRow = <T extends Record<string, any>>({
  item,
  columns,
}: TableRowProps<T>) => {
  return (
    <tr>
      {columns.map((column) => {
        const cellValue = item[column.key];
        return (
          <td key={column.key.toString()}>
            {column.render ? column.render(cellValue) : cellValue}
          </td>
        );
      })}
    </tr>
  );
};