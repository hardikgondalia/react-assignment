import { TableRow } from '../../molecules/TableRow/TableRow';
import { TableProps } from './types';
import styles from '../../../../shared/styles/table.module.css';

export const Table = <T extends Record<string, any>>({
  data,
  columns,
  className = '',
}: TableProps<T>) => {
  return (
    <table className={`${styles.table} ${className}`}>
      <thead>
        <tr>
          {columns && columns.map((column,index) => (
            <th key={index}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow key={index} item={item} columns={columns} />
        ))}
      </tbody>
    </table>
  );
};