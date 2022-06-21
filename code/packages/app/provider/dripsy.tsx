import { DripsyProvider, makeTheme } from 'dripsy'

import { useFonts } from 'expo-font'

import LatoThin from 'app/assets/fonts/Lato-Thin.ttf'
import LatoThinItalic from 'app/assets/fonts/Lato-ThinItalic.ttf'
import LatoLight from 'app/assets/fonts/Lato-Light.ttf'
import LatoLightItalic from 'app/assets/fonts/Lato-LightItalic.ttf'
import LatoRegular from 'app/assets/fonts/Lato-Regular.ttf'
import LatoItalic from 'app/assets/fonts/Lato-Italic.ttf'
import LatoBold from 'app/assets/fonts/Lato-Bold.ttf'
import LatoBoldItalic from 'app/assets/fonts/Lato-BoldItalic.ttf'
import LatoBlack from 'app/assets/fonts/Lato-Black.ttf'
import LatoBlackItalic from 'app/assets/fonts/Lato-BlackItalic.ttf'

const Fonts = ({ children }) => {
  const [loaded, error] = useFonts({
    latoThin: LatoThin,
    latoThinItalic: LatoThinItalic,
    latoLight: LatoLight,
    latoLightItalic: LatoLightItalic,
    latoRegular: LatoRegular,
    latoItalic: LatoItalic,
    latoBold: LatoBold,
    latoBoldItalic: LatoBoldItalic,
    latoBlack: LatoBlack,
    latoBlackItalic: LatoBlackItalic,
  })
  return <>{loaded && children}</>
}

const fontName = 'lato'

const theme = makeTheme({
  // https://www.dripsy.xyz/usage/theming/create

  customFonts: {
    [fontName]: {
      thin: 'latoThin',
      thinItalic: 'latoThinItalic',
      light: 'latoLight',
      lightItalic: 'latoLightItalic',
      regular: 'latoRegular',
      regularItalic: 'latoRegularItalic',
      bold: 'latoBold',
      boldItalic: 'latoBoldItalic',
      black: 'latoBlack',
      bolderItalic: 'latoBlackItalic',
    },
  },

  fonts: {
    root: fontName,
  },
  colors: {
    $primary: '#EB1135',
    $secondary: '#25251C',
    $white: '#ffffff',
    $black: '#000000',
    $grey: '#646464',
    $darkSecondary: '#0F0F0C',
    // $xs: 90,
  },

  text: {
    // body: {},
    // bold: {
    //   fontWeight: 'bold',
    // },
    // boldWithRoot: {
    //   fontWeight: 'bold',
    //   fontFamily: 'root', // this isn't needed, but it illustrates it
    // },
  },
  space: {
    $none: 0,
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
    $7: 256,
    $8: 512,
  },
  types: {
    onlyAllowThemeValues: 'always',
    reactNativeTypesOnly: true,
  },
})

export function Dripsy({ children }: { children: React.ReactNode }) {
  return (
    <Fonts>
      <DripsyProvider
        theme={theme}
        // this disables SSR, since react-native-web doesn't have support for it (yet)
        ssr
      >
        {children}
      </DripsyProvider>
    </Fonts>
  )
}
