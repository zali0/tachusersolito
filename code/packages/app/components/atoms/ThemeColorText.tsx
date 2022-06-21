import { Text, styled } from 'dripsy'

const ThemeColor = styled(Text)({
  color: '$primary',
  fontWeight: 'bold',
})
const ThemeColorText = ({ children, bold }) => {
  return (
    <ThemeColor sx={{ fontWeight: bold ? 'bold' : null }}>{children}</ThemeColor>
  )
}

export default ThemeColorText
