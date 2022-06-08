import { Text, styled } from 'dripsy'

const ThemeColor = styled(Text)({
  color: '$primary',
  fontWeight: 'bold',
})
const ThemeColorText = ({ children, bold }) => {
  return (
    <ThemeColor sx={{ fontWeight: bold ? 'bold' : '' }}>{children}</ThemeColor>
  )
}

export default ThemeColorText
