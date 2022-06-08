import { Platform } from 'react-native'
import Image from 'next/image'
import { Image as DripsyImage, View } from 'dripsy'

const DisplayImage = ({ image, width, height }) => {
  if (Platform.OS === 'web') {
    return (
      <>
        <Image
          width={width}
          height={height}
          layout="intrinsic"
          src={image}
          priority
        />
      </>
    )
  } else {
    return (
      <>
        <DripsyImage
          width={width}
          height={height}
          resizeMode="center"
          source={image}
        />
      </>
    )
  }
}
export default DisplayImage
