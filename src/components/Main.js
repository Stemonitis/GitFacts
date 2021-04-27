import React, { useState, useRef } from "react";
import Options from "./Options";
import DataDisplay from "./DataDisplay";
import { useLazyQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import initialData from "./initialData";

const Main = () => {
  const [queryString, updateQueryString] = useState([
    [
      `query test {
      search(query: "lol", type: REPOSITORY) {
        repositoryCount
      }}`,
    ],
    initialData[0],
  ]);
  //this is the iterator that helps to loop through the array of queries
  const [queryIterator, updateQueryIterator] = useState(0);
  //this is the api data
  let [responseData, updateResponseData] = useState([]);
  //This is the data that goes to d3 part of the application. Initial data is the initial picture you see
  //on the screen
  let [sunBurstData, updateSunBurstData] = useState(initialData[1]);
  //piece of state to track the amount of queries. We need it because making large queries result in errors.
  let [loadingCount, updateLoadingCount] = useState([0, 0]);
  //lazyquery for calling the github server
  const [fire, { error, loading }] = useLazyQuery(
    gql`
      ${queryString[0][loadingCount[0]]}
    `,
    {
      onCompleted: (datachunk) => {
        //refetch data if error
        //update response data
        let append = responseData;
        append.push(datachunk);
        updateResponseData(append);
        updateSunBurstData(responseData);

        //if there are more items in the array than we want to fetch than we want to continue looping
        //through the array
        if (queryIterator > 0) {
          updateQueryIterator(queryIterator - 1);
          updateLoadingCount([loadingCount[0] + 1, loadingCount[1]]);
          fire();
        }
      },
    }
  );

  return (
    <main>
      <Options
        updateQueryString={updateQueryString}
        updateQueryIterator={updateQueryIterator}
        updateResponseData={updateResponseData}
        updateLoadingCount={updateLoadingCount}
        fire={fire}
      />
      <DataDisplay
        loading={loading}
        loadingCount={loadingCount}
        error={error}
        queryResult={sunBurstData}
        queryString={queryString[1]}
      />
    </main>
  );
};

export default Main;
