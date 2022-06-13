import { Platform } from 'react-native'
import Image from 'next/image'
import { Image as DripsyImage, View } from 'dripsy'
import { vh, vw } from './viewPorts'
import { SIZES } from 'app/constants'
// import './utils.css'
const DisplayImage = ({
  image,
  width,
  nativeWidth,
  height,
  nativeHeight,
  styles,
  mode,
  nativeMode,
  border
}) => {
  if (Platform.OS === 'web') {
    console.log('width', width)
    return (
      <>
        <View sx={styles}>
          <Image
            className={border ? 'border' : ''}
            width={vw(width)}
            height={vh(height)}
            layout={mode}
            src={image}
            priority
          />
        </View>
      </>
    )
  } else {
    return (
      <>
        <DripsyImage
          sx={styles}
          width={vw(nativeWidth)}
          height={vh(nativeHeight)}
          resizeMode={nativeMode}
          source={
            typeof image !== 'string'
              ? image
              : { uri: image, width: vw(nativeWidth), height: vh(nativeHeight) }
          }
        />
      </>
    )
  }
}
export default DisplayImage
