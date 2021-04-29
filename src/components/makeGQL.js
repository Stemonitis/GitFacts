// import gql from "graphql-tag";

const makeGQL = (keyword, filtersArray) => {
  const arrayOfSeparateQueries = filtersArray.map((arrayObject) => {
    //first we get the array of query values
    //then we create an array of key:value query values (e.g. ["language:python", ...])
    let filter;

    typeof arrayObject[Object.keys(arrayObject)] === "string"
      ? (filter = [arrayObject[Object.keys(arrayObject)]])
      : (filter = arrayObject[Object.keys(arrayObject)]);
    //make sure that all the language names with spaces in names are
    //wrapped with !!doublequotes (otherwise search will give false results)
    if (Object.keys(arrayObject)[0] === "language") {
      console.log(Object.values(arrayObject));
      // prettier-ignore
      filter=Object.values(arrayObject)[0].map((l)=>(l.replaceAll("'", "\\\"")))
    }
    console.log(filter, "filter");
    return filter.map((queryValue) => {
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
  // turn into set of arrays with not more than 100 strings in it
  let queriesSet = [];
  if (finalCombinationQueryArray.length <= 50) {
    queriesSet = finalCombinationQueryArray;
  }

  while (finalCombinationQueryArray.length > 50) {
    queriesSet[queriesSet.length] = finalCombinationQueryArray.slice(0, 50);
    finalCombinationQueryArray = finalCombinationQueryArray.slice(50);
  }
  //don`t forget to append the rest
  queriesSet[queriesSet.length] = finalCombinationQueryArray;
  let finalQueries;
  if (typeof queriesSet[0] === "string") {
    finalQueries = [
      `query gitfacts {
      ` +
        queriesSet.reduce(
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
        "}",
    ];
  } else {
    finalQueries = queriesSet.map((queryArray, i) => {
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
  }
  return [finalQueries, filtersArray];
};
export default makeGQL;
