function formatString(input: string, toUpper?: boolean): string {
  return toUpper === false ? input?.toLocaleLowerCase() : input.toUpperCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];

  for (const array of arrays) {
    result.push(...array);
  }
  return result;
}
