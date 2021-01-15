const additionalOptions = [
  {
    name: "Search in...(default is name and description)",
    query_name: "in",
    checkboxes: { name: 0, description: 0, readme: 0 },
    input_range: {},
  },
  {
    name: "Search in repository",
    query_name: "repo",
    checkboxes: { "Owner/Name": 0 },
    input_range: {},
  },
  {
    name: "Search for specific user or oganization",
    query_name: "user or org",
    checkboxes: { radiobuttons: "" },
    input_range: {},
  },
  {
    name: "Number of Followers",
    query_name: "followers",
    checkboxes: {},
    input_range: {},
  },
  {
    name: "Number of Forks",
    query_name: "forks",
    checkboxes: {},
    input_range: {},
  },
  {
    name: "Forked Only",
    query_name: "forked:only",
    checkboxes: {},
    input_range: {},
  },
  {
    name: "Seach by the Topic",
    query_name: "topic",
    checkboxes: {},
    input_range: {},
  },
  {
    name: "Search by the license",
    query_name: "license",
    checkboxes: {},
    input_range: {},
  },
  {
    name: "Visibility",
    query_name: "is",
    checkboxes: { is: ["public", "internal", "private"] },
    input_range: {},
  },
  {
    name: "Is a Mirror",
    query_name: "mirror",
    checkboxes: { mirror: [true, false] },
    input_range: {},
  },
  {
    name: "Archived",
    query_name: "archived",
    checkboxes: { achived: [true, false] },
    input_range: {},
  },
  {
    name: "Issues",
    query_name: "good-first-issues help-wanted-issues",
    checkboxes: {},
    input_range: {},
  },
  {
    name: "Last Updated",
    query_name: "pushed",
    checkboxes: {},
    input_range: {},
  },
];
export default additionalOptions;
