const BREAKPOINTS = [500, 700, 900, 1100, 1300] as const;
const COLUMNS = [2, 3, 4, 5, 6, 7] as const;

export function getNumColumns(width: number): number {
  for (let i = 0; i < BREAKPOINTS.length; i++) {
    if (width < BREAKPOINTS[i]) return COLUMNS[i];
  }
  return COLUMNS[COLUMNS.length - 1];
}
