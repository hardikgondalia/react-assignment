import { TableColumn } from '../../organisms/Table/types';

export type TableRowProps<T> = {
  item: T;
  columns: TableColumn<T>[];
};