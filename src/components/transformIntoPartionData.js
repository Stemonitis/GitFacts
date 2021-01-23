let data = {};
let initialOptionsOrder = [{ language: "length" }, { other: "length" }];

export default function transformPartData(
  data,
  initialStatesArray,
  desiredOptionsOrder
) {
  let initObj = { name: "gitdata", children: [] };
  for (let i = 0; i < initialStatesArray.length; i++) {
    for (let j = 0; j < i[Object.keys(i)].length; j++) {
      initObj.children[j];
    }
  }
  return data;
}
