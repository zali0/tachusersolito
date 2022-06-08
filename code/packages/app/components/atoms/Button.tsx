import { FONTS, SIZES } from 'app/constants'
import { View, Text, styled } from 'dripsy'
import React from 'react'

const Container = styled(View)({
  alignSelf: 'center',
  margin: SIZES.$4,
  padding: SIZES.$2,
  borderRadius: SIZES.$4,
})
const ButtonText = styled(View)({
  color: '$white',
  fontSize: FONTS.md,
  fontWeight: 'bold',
  textAlign: 'center',
})
const Button = ({ width, bg, text }) => {
  return (
    <Container sx={{ width: `${width}%`, bg: `$${bg}` }}>
      <ButtonText>{text}</ButtonText>
    </Container>
  )
}

export default Button
