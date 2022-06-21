import { vw } from 'app/utils'
import { Platform } from 'react-native'

export const SIZES = {
  $none: 0,
  $xs: 0.5,
  $0: 0,
  $1: 4,
  $2: 8,
  $3: 16,
  $4: 32,
  $5: 64,
  $6: 128,
  $7: 256,
  $8: 512,
}
export const COLORS = {
  primary: '#EB1135',
  secondary: '#25251C',
  white: '#ffffff',
  black: '#000000',
  grey: '#646464',
  darkSecondary: '#0F0F0C',
  error: '#ac0000'
}
export const FONTS = {
  xxs: Platform.OS === 'web' ? vw(0.1) : vw(0.1),
  xs: Platform.OS === 'web' ? vw(0.2) : vw(0.3),
  sm: Platform.OS === 'web' ? vw(0.8) : vw(0.5),
  md: Platform.OS === 'web' ? vw(1) : vw(5),
  lg: Platform.OS === 'web' ? vw(2) : vw(7),
  xl: Platform.OS === 'web' ? vw(4) : vw(10),
  xxl: Platform.OS === 'web' ? vw(10) : vw(14),
}
