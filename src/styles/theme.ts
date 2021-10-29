export default {
  breakpoints: {
    values: {}
  },
  // this theme is deprecated, use V2 below
  carvana: {
    body: '#E4ECF0',
    blue: {
      primary: '#00AED9',
      hover: '#018DC0',
      medium: '#00619E',
      dark: '#183558',
      stroke: '#122946',
      pastel: '#CFEAF2',
      darker: '#0B1F36'
    },
    gray: {
      background: '#F4F8FA',
      jet: '#363636',
      veryLight: '#D9DDE9',
      light: '#CCC',
      medium: '#AAB1C7',
      dark: '#757989',
      border: '#D8D8D8',
      veryDark: '#040404',
      stormGrey: '#757989',
      headerGray: '#E5E5E5'
    },
    green: {
      primary: '#1DD08B',
      dark: '#00812C',
      pastel: '#BDFFE4'
    },
    red: {
      primary: '#FF7171',
      dark: '#D87174',
      pastel: '#FFCCCC'
    },
    yellow: {
      primary: '#FEB948',
      hover: '#EB9F23',
      pastel: '#FBF2DE',
      dark: '#A97B33'
    },
    white: {
      primary: '#FFFFFF',
      secondary: '#F4F8FA'
    },
    black: {
      primary: '#000000'
    },
    purple: {
      pastel: '#97A6D8'
    }
  },
  carvanaV2: {
    blue: {
      lighter: '#00AED9',
      primary: '#0092D8',
      light: '#4EBAE8',
      medium: '#00619E',
      dark: '#122946',
      pastel: '#CFEAF2'
    },
    green: {
      primary: '#20A91E',
      light: '#64CB63',
      dark: '#008400'
    },
    yellow: {
      primary: '#FEB948',
      light: '#FED37F',
      dark: '#FF9600'
    },
    red: {
      primary: '#D6002B',
      light: '#F65B5B',
      dark: '#A30000'
    },
    grey: {
      veryLight: '#F8F8F9',
      light: '#D6DCE2',
      medium: '#B9C3CE',
      mediumDark: '#757989',
      dark: '#8292A7',
      darker: '#586E89'
    },
    white: {
      primary: '#FFFFFF',
      secondary: '#F4F8FA'
    },
    black: {
      primary: '#000000'
    },
    orange: {
      primary: '#FF9600',
      pastel: '#FFD394'
    }
  },
  StyledText: {
    fontFamily: '"Brandon Text", Lato, Helvetica, sans-serif'
  },
  boxShadow: 'rgba(25, 41, 61, 0.18) 0px 2px 3px 1px',
  borderRadius: '3px'
} as const;
