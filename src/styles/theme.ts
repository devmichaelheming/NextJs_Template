declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryPure: string;
      primaryLight: string;
      primaryMedium: string;
      primaryDark: string;

      secondaryPure: string;
      secondaryLight: string;
      secondaryMedium: string;
      secondaryDark: string;

      lowPure: string;
      lowLight: string;
      lowMedium: string;
      lowDark: string;

      highPure: string;
      highLight: string;
      highMedium: string;
      highDark: string;

      successPure: string;
      successLight: string;
      successMedium: string;
      successDark: string;

      warningPure: string;
      warningLight: string;
      warningMedium: string;
      warningDark: string;

      helperPure: string;
      helperLight: string;
      helperMedium: string;
      helperDark: string;
    };
    boxShadow: string;
  }
}

const tokenColors = {
  colors: {
    primaryPure: "#2B4D65",
    primaryLight: "#EAF4F9",
    primaryMedium: "#2B4D65",
    primaryDark: "#1B3140",

    secondaryPure: "#4AACF8",
    secondaryLight: "#E3F5FF",
    secondaryMedium: "#67C6FC",
    secondaryDark: "#479EE9",

    lowPure: "#000000",
    lowLight: "#A3A3A3",
    lowMedium: "#666666",
    lowDark: "#121212",

    highPure: "#FFFFFF",
    highLight: "#F5F5F5",
    highMedium: "#E0E0E0",
    highDark: "#CCCCCC",

    successPure: "#00A611",
    successLight: "#C3E8C0",
    successMedium: "#17B51C",
    successDark: "#008300",

    warningPure: "#C41F2C",
    warningLight: "#F9C9CF",
    warningMedium: "#E43433",
    warningDark: "#A8071A",

    helperPure: "#EDC002",
    helperLight: "#F9F9C1",
    helperMedium: "#EDD818",
    helperDark: "#EDA700",
  },

  boxShadow:
    "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 10px 0 rgba(0, 0, 0, 0.08), 0 9px 20px 8px rgba(0, 0, 0, 0.05)",
};

export { tokenColors };
