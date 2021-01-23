// import gql from "graphql-tag";

const makeGQL = (keyword, filtersArray) => {
  const arrayOfSeparateQueries = filtersArray.map((arrayObject) => {
    //first we get the array of query values
    //then we create an array of key:value query values (e.g. ["language:python", ...])
    return arrayObject[Object.keys(arrayObject)].map((queryValue) => {
      return Object.keys(arrayObject) + ":" + queryValue + " ";
    });
  });
  //combine all the arrays to get all possible combinations
  const combinedFiltersArray = arrayOfSeparateQueries.reduce(
    (firstArray, secondArray) => {
      return firstArray.reduce(
        (totalArray, firstArrayValue) =>
          totalArray.concat(
            secondArray.map(
              (secondArrayValue) => firstArrayValue + secondArrayValue
            )
          ),
        []
      );
    }
  );
  //add the keyword search value
  let finalCombinationQueryArray = combinedFiltersArray.map(
    (query) => keyword + " " + query
  );

  // turn into set of array with not more than 100 strings in it
  let queriesSet = [];
  while (finalCombinationQueryArray.length > 100) {
    queriesSet[queriesSet.length] = finalCombinationQueryArray.slice(0, 100);
    finalCombinationQueryArray = finalCombinationQueryArray.slice(100);
  }

  const finalQueries = queriesSet.map((queryArray) => {
    return (
      `query gitfacts {
        ` +
      queryArray.reduce(
        (total, query, index) =>
          total +
          `
           l${index} : search(query:"${query}",
    type: REPOSITORY)
    {
      repositoryCount
    }`,
        ""
      ) +
      "}"
    );
  });

  // const finalCountdown = finalQueries.map((query) => {
  //   return gql`
  //     ${query}
  //   `;
  // });
  // const initialOptionsArray = filtersArray.map((arrayObject) => ({
  //   [Object.keys(arrayObject)]: arrayObject[Object.keys(arrayObject)].length,
  // }));
  return [finalQueries, filtersArray];
};
export default makeGQL;
