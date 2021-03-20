// //responseData is an array of responses
// //requestData is an array of objects with query filters as a key and array of queryoptions as a value
export default function transformIntoPartionData(queryResult, requestArray) {
  //first lets get an array of responses
  let repositoryCounts = queryResult
    .reduce((total, response) => {
      total.push(
        Object.keys(response).map((key) => response[key].repositoryCount)
      );
      return total;
    }, [])
    .flat();

  //to create the hierarchy
  //first lets create initial array of the objects for the deepest layer
  let lowestLayerNames = requestArray[requestArray.length - 1]; //f.e. stars: (3) ["<=10", "10..100", ">=100"]
  let lowestLayerCategory = Object.keys(lowestLayerNames); // f.e. "stars"
  let lowestLayerArray = lowestLayerNames[lowestLayerCategory]; // ["<=10", "10..100", ">=100"]
  let lowestLayer = repositoryCounts.map((size, i) => ({
    name:
      //lowestLayerCategory + " " + lowestLayerArray[i % lowestLayerArray.length],
      lowestLayerArray[i % lowestLayerArray.length],
    size: size,
  }));

  let initialArrayLengths = requestArray.map((object) => ({
    [Object.keys(object)]: object[Object.keys(object)].length,
  }));
  //initialArrayLengths.length is the number of options
  //first we loop therough each option
  for (let i = initialArrayLengths.length - 1; i >= 1; i--) {
    //then we loop through all of the lowest layer objects
    //in the end we update this object so we can add another layer on the
    //top of it

    let categoryName = Object.keys(initialArrayLengths[i]);
    let categoryNameForNaming = Object.keys(initialArrayLengths[i - 1]);
    let n = initialArrayLengths[i][categoryName]; //iterator for the categories
    let nextLevelArray = [];
    let children = [];
    let nameArray = requestArray[i - 1][Object.keys(requestArray[i - 1])];
    let k = initialArrayLengths[i - 1][categoryNameForNaming]; //iterator to lop through the names (кількість категорій)

    for (let j = 0; j < lowestLayer.length; j++) {
      //now we have to make sure that we group the next layer children properly
      //based on the amount of the filters in the search options after we get through
      //the group we append the group to the new object and the end of this loop update
      //the lowest layer object
      //if we are still in within the group we want to append this
      //lowest layer group to the children array
      //if we are out of the count number we want to attach the previous children
      //group to the object array and start a new one
      children.push(lowestLayer[j]);
      if (j % n == n - 1) {
        nextLevelArray.push({
          name: nameArray[((j + 1) / n - 1) % k],
          longname:
            categoryNameForNaming + " " + nameArray[((j + 1) / n - 1) % k],
          children: children,
        });
        children = [];
      }
    }
    lowestLayer = nextLevelArray;
  }
  let finalHierarchy = { name: "gitdata", children: lowestLayer };

  return finalHierarchy;
}
