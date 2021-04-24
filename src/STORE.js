const STORE = {
  users: [
    {
      id: '1',
      username: 'user1',
      password: '11'
    },
    {
      id: '2',
      username: 'user2',
      password: '22'
    },
    {
      id: '3',
      username: 'demo',
      password: 'pwdemo'
    },

  ],

  parks: {
    'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
    'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
    'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
    'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
    'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
    'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
    'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
    'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
    'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
    'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
    'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
    'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
    'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
  },


  stateOptions: [
    {
      label: "Alabama",
      value: "AL",
    },
    {
      label: "Alaska",
      value: "AK",
    },
    {
      label: "Arizona",
      value: "AZ",
    },
    {
      label: "Arkansas",
      value: "AR",
    },
    {
      label: "California",
      value: "CA",
    },
    {
      label: "Colorado",
      value: "CO",
    },
    {
      label: "Connecticut",
      value: "CT",
    },
    {
      label: "Delaware",
      value: "DE",
    },
    {
      label: "District Of Columbia",
      value: "DC",
    },
    {
      label: "Florida",
      value: "FL",
    },
    {
      label: "Georgia",
      value: "GA",
    },
    {
      label: "Hawaii",
      value: "HI",
    },
    {
      label: "Idaho",
      value: "ID",
    },
    {
      label: "Illinois",
      value: "IL",
    },
    {
      label: "Indiana",
      value: "IN",
    },
    {
      label: "Iowa",
      value: "IA",
    },
    {
      label: "Kansas",
      value: "KS",
    },
    {
      label: "Kentucky",
      value: "KY",
    },
    {
      label: "Louisiana",
      value: "LA",
    },
    {
      label: "Maine",
      value: "ME",
    },
    {
      label: "Maryland",
      value: "MD",
    },
    {
      label: "Massachusetts",
      value: "MA",
    },
    {
      label: "Michigan",
      value: "MI",
    },
    {
      label: "Minnesota",
      value: "MN",
    },
    {
      label: "Mississippi",
      value: "MS",
    },
    {
      label: "Missouri",
      value: "MO",
    },
    {
      label: "Montana",
      value: "MT",
    },
    {
      label: "Nebraska",
      value: "NE",
    },
    {
      label: "Nevada",
      value: "NV",
    },
    {
      label: "New Hampshire",
      value: "NH",
    },
    {
      label: "New Jersey",
      value: "NJ",
    },
    {
      label: "New Mexico",
      value: "NM",
    },
    {
      label: "New York",
      value: "NY",
    },
    {
      label: "North Carolina",
      value: "NC",
    },
    {
      label: "North Dakota",
      value: "ND",
    },
    {
      label: "Ohio",
      value: "OH",
    },
    {
      label: "Oklahoma",
      value: "OK",
    },
    {
      label: "Oregon",
      value: "OR",
    },
    {
      label: "Pennsylvania",
      value: "PA",
    },
    {
      label: "Rhode Island",
      value: "RI",
    },
    {
      label: "South Carolina",
      value: "SC",
    },
    {
      label: "South Dakota",
      value: "SD",
    },
    {
      label: "Tennessee",
      value: "TN",
    },
    {
      label: "Texas",
      value: "TX",
    },
    {
      label: "Utah",
      value: "UT",
    },
    {
      label: "Vermont",
      value: "VT",
    },
    {
      label: "Virginia",
      value: "VA",
    },
    {
      label: "Washington",
      value: "WA",
    },
    {
      label: "West Virginia",
      value: "WV",
    },
    {
      label: "Wisconsin",
      value: "WI",
    },
    {
      label: "Wyoming",
      value: "WY",
    },
  ],


  activityOptions: [
    {
      label: "-- All Activities --",
      value: "All",
    },
    {
      label: "Biking",
      value: "Biking",
    },

    {
      label: "Birdwatching",
      value: "Birdwatching",
    },
    {
      label: "Boating",
      value: "Boating",
    },
    {
      label: "Camping",
      value: "Camping",
    },
    {
      label: "Canoeing",
      value: "Canoeing",
    },
    {
      label: "Caving",
      value: "Caving",
    },
    {
      label: "Climbing",
      value: "Climbing",
    },
    {
      label: "Cross-Country Skiing",
      value: "Cross-Country Skiing",
    },
    {
      label: "Fishing",
      value: "Fishing",
    },
    {
      label: "Fly Fishing",
      value: "Fly Fishing",
    },
    {
      label: "Foraging",
      value: "Foraging",
    },
    {
      label: "Geocaching",
      value: "Geocaching",
    },
    {
      label: "Hiking",
      value: "Hiking",
    },
    {
      label: "Historical",
      value: "Historical",
    },
    {
      label: "Horseback Riding",
      value: "Horseback Riding",
    },
    {
      label: "Hunting",
      value: "Hunting",
    },
    {
      label: "Kayaking",
      value: "Kayaking",
    },
    {
      label: "Off-Roading",
      value: "Off-Roading",
    },
    {
      label: "Picnicking",
      value: "Picnicking",
    },
    {
      label: "Scenic Drive",
      value: "Scenic Drive",
    },
    {
      label: "Shopping",
      value: "Shopping",
    },
    {
      label: "Skiing",
      value: "Skiing",
    },
    {
      label: "Stargazing",
      value: "Stargazing",
    },
    {
      label: "Swimming",
      value: "Swimming",
    },
    {
      label: "Tours",
      value: "Tours",
    },
    {
      label: "Water Activities",
      value: "Water Activities",
    },
    {
      label: "Whitewater Rafting",
      value: "Whitewater Rafting",
    },
    {
      label: "Wildlife Viewing",
      value: "Wildlife Viewing",
    },
    {
      label: "Winter Sports",
      value: "Winter Sports",
    },
  ],


  favOrderByOptoins: [
    {
      label: "Park Name",
      selected: 1,
    },
    {
      label: "Rating",
      selected: 0,
    },
    {
      label: "State Name",
      selected: 0,
    },
    {
      label: "Activity",
      selected: 0,
    },
    {
      label: "Stop Number",
      selected: 0,
    },
  ],
}
export default STORE;

