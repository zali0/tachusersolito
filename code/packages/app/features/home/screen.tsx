import { Text, useSx, View, H1, P, Row, A, Image as DripsyImage } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import Image from 'next/image'
// import onboardDeliveryGuy from '../../assets/onboardDeliveryGuy.webp'
import { Platform } from 'react-native'
export function HomeScreen() {
  const sx = useSx()

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    ></View>
  )
}
