import { Dimensions } from 'react-native'

const vh = (percentage) => {
  const viewportHeight = Dimensions.get('window').height
  const decimal = percentage * 0.01
  percentage = parseInt(percentage, 10)

  // Hard limits
  if (percentage < 0) {
    percentage = 100
  }
  if (percentage > 1000) {
    percentage = 1000
  }

  return Math.round(viewportHeight * decimal)
}

const vw = (percentage) => {
  const viewportWidth = Dimensions.get('window').width
  const decimal = percentage * 0.01
  percentage = parseInt(percentage, 10)

  // Hard limits
  if (percentage < 0) {
    percentage = 100
  }
  if (percentage > 1000) {
    percentage = 1000
  }

  return Math.round(viewportWidth * decimal)
}

export { vw, vh }
