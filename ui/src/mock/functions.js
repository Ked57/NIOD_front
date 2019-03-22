export const mockFunctions = [
  {
    name: "addA2ADispatcher",
    data: {
      name: "russianA2ADispatcher",
      detection: {
        prefixes: ["RUSSIAN_EWR"],
        range: 30000
      },
      border: {
        name: "RUSSIAN_BORDER"
      },
      engageRadius: 30000,
      squadrons: [
        {
          name: "RUSSIAN_SQUADRON_MIG",
          map: "Caucasus",
          airbase: "Anapa_Vityazevo",
          groupLength: 2,
          takeofMethod: "Runway",
          landingMethod: "Runway",
          cap: {
            zoneName: "RUSSIAN_CAP_EAST",
            minCAPAlt: 4000,
            maxCAPAlt: 8000,
            minCAPSpeed: 500,
            maxCAPSPeed: 600,
            minCAPInterceptSpeed: 800,
            maxCAPInterceptSpeed: 900,
            mesureType: "RADIO",
            numberPerGroup: 2,
            lowerCheckTime: 30,
            upperCheckTime: 60,
            decisionWeight: 1
          }
        },
        {
          name: "RUSSIAN_SQUADRON_SU-27",
          map: "Caucasus",
          airbase: "Gelendzhik",
          groupLength: 2,
          takeofMethod: "Runway",
          landingMethod: "Runway",
          gci: {
            minInterceptSpeed: 900,
            maxInterceptSpeed: 1700
          }
        }
      ]
    },
    callback: () => console.log("dispatcher added")
  },
  {
    name: "addA2ADispatcher",
    data: {
      name: "usaA2ADispatcher",
      detection: {
        prefixes: ["USA_EWR"],
        range: 30000
      },
      border: {
        name: "USA_BORDER"
      },
      engageRadius: 30000,
      squadrons: [
        {
          name: "USA_SQUADRON_F18",
          map: "Caucasus",
          airbase: "Krasnodar_Pashkovsky",
          groupLength: 2,
          takeofMethod: "Runway",
          landingMethod: "Runway",
          cap: {
            zoneName: "USA_CAP_EAST",
            minCAPAlt: 4000,
            maxCAPAlt: 8000,
            minCAPSpeed: 500,
            maxCAPSPeed: 600,
            minCAPInterceptSpeed: 800,
            maxCAPInterceptSpeed: 900,
            mesureType: "RADIO",
            numberPerGroup: 2,
            lowerCheckTime: 30,
            upperCheckTime: 60,
            decisionWeight: 1
          }
        },
        {
          name: "USA_SQUADRON_F15",
          map: "Caucasus",
          airbase: "Maykop_Khanskaya",
          groupLength: 2,
          takeofMethod: "Runway",
          landingMethod: "Runway",
          gci: {
            minInterceptSpeed: 900,
            maxInterceptSpeed: 1700
          }
        }
      ]
    },
    callback: () => console.log("A2ADispatcher added")
  }
];
