export type HeadingProps = {
  /** Heading level (1-6) */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};