export type TableColumn<T> = {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T]) => React.ReactNode;
};

export type TableProps<T> = {
  data: T[];
  columns: TableColumn<T>[];
  className?: string;
};