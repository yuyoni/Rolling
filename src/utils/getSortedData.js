const getSortedData = (orderBy, arrayToSort) =>
  arrayToSort.sort((previous, next) =>
    orderBy === 'createdAt'
      ? new Date(next[orderBy]) - new Date(previous[orderBy])
      : next[orderBy] - previous[orderBy]
  );

export default getSortedData;
