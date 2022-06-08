import { FONTS, SIZES } from 'app/constants'
import DisplayImage from 'app/utils/DisplayImage'
import {
  Text,
  useSx,
  View,
  H1,
  P,
  Row,
  A,
  styled,
  TextInput,
  Pressable,
  Image as DripsyImage,
  Image,
} from 'dripsy'
import React from 'react'
import { Platform, StatusBar } from 'react-native'
import { Link, TextLink } from 'solito/link'
import { useRouter } from 'solito/router'
import onboardDeliveryGuy from 'app/assets/images/onboardDeliveryGuy.png'
import deliveryGuy from 'app/assets/images/deliveryGuy.jpg'
import ThemeColorText from 'app/components/atoms/ThemeColorText'
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  AntDesign,
  Entypo,
} from '@expo/vector-icons'
import { vw } from 'app/utils'
import Button from 'app/components/atoms/Button'
const Container = styled(View)({
  width: '100%',
  height: '100%',
  flexDirection: Platform.OS === 'web' ? 'row' : 'column',
  paddingTop: Platform.OS !== 'web' ? StatusBar.currentHeight : '0',
})

const Showcase = styled(View)({
  width: Platform.OS === 'web' ? '50%' : '100%',
  height: Platform.OS === 'web' ? '100%' : '50%',
  bg: '$primary',
  justifyContent: 'center',
  alignItems: 'center',
  borderTopRightRadius: SIZES.$7,
  // borderBottomLeftRadius: SIZES.$7,
  borderBottomRightRadius: SIZES.$7,
})

const ImageWrapper = styled(View)({
  width: Platform.OS === 'web' ? '50%' : '100%',
  height: Platform.OS === 'web' ? '50%' : '100%',
  justifyContent: 'center',
  alignItems: 'center',
})

const Login = styled(View)({
  width: Platform.OS === 'web' ? '50%' : '100%',
  height: Platform.OS === 'web' ? '100%' : '50%',
  justifyContent: 'space-around',
})

const CompanyName = styled(Text)({
  color: '$primary',
  textAlign: 'center',
  fontSize: vw(6),
  fontWeight: 'black',
})

const Form = styled(View)({
  width: '75%',
  alignSelf: 'center',
})

const WelcomeText = styled(Text)({
  fontSize: FONTS.md,
  fontWeight: 'bold',
  textAlign: 'center',
})

const Field = styled(View)({
  width: Platform.OS === 'web' ? '50%' : '100%',
  alignSelf: 'center',
})
const FieldName = styled(Text)({
  marginTop: SIZES.$2,
  fontWeight: 'light',
})
const FieldLayout = styled(View)({
  flexDirection: 'row',
})
const Initial = styled(Text)({
  fontSize: SIZES.$1,
  marginTop: SIZES.$2,
  borderBottomWidth: 2,
})

const FieldValue = styled(TextInput)({
  flex: 1,
  borderBottomWidth: 2,
  marginTop: SIZES.$2,
  marginLeft: SIZES.$2,
  fontSize: SIZES.$1,
  fontWeight: 'regular',
  letterSpacing: SIZES.$3,
})

const Error = styled(Text)({
  marginTop: SIZES.$2,
  fontSize: FONTS.sm,
  alignSelf: 'center',
  color: 'red',
})

const LoginButton = styled(View)({
  width: '50%',
  bg: '$primary',
  color: '#fff',
  padding: SIZES.$2,
  marginTop: SIZES.$4,
  borderRadius: SIZES.$2,
  alignSelf: 'center',
})

const LoginButtonText = styled(Text)({
  textAlign: 'center',
  fontSize: SIZES.$3,
  fontWeight: 'light',
})

const OTP = styled(View)({
  width: '50%',
  alignSelf: 'center',
})

const Heading = styled(Text)({
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: FONTS.md,
})
const SendMessage = styled(Text)({
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: FONTS.sm,
})

const OtpInput = styled(TextInput)({
  width: '40%',
  alignSelf: 'center',
  borderBottomWidth: 2,
  marginTop: SIZES.$2,
  marginLeft: SIZES.$2,
  fontSize: SIZES.$1,
  fontWeight: 'regular',
  letterSpacing: SIZES.$3,
})

const Footer = styled(Text)({
  fontSize: 1,
  textAlign: 'center',
  fontWeight: 'light',
})

export function OnboardScreen() {
  const sx = useSx()
  const { push } = useRouter()
  const [state, setState] = React.useState<string>('number')
  const [phoneNumber, setPhoneNumber] = React.useState<string>('')
  const [error, setError] = React.useState<string>('')
  const handleLogin = () => {
    console.log('Handling Login')
    if (!phoneNumber) {
      setError('Please enter the Phone Number.')
      return
    }
    if (phoneNumber.length === 10) {
      console.log('Successfull Login')
      // push({
      //   pathname: '/',
      //   query: {
      //     slug: 'drake',
      //   },
      // })
      setState('otp')
    } else {
      setError('Invalid Phone Number')
    }
  }
  return (
    <Container>
      <Showcase>
        <ImageWrapper>
          <DisplayImage image={onboardDeliveryGuy} width={1200} height={1000} />
        </ImageWrapper>
      </Showcase>
      <Login>
        <CompanyName>Tach</CompanyName>
        <WelcomeText>
          Delivering in <ThemeColorText bold> 21 minutes</ThemeColorText> or
          <ThemeColorText bold> Free!</ThemeColorText>
        </WelcomeText>
        {state === 'number' ? (
          <Form>
            <Field>
              <FieldName>Phone Number</FieldName>
              <FieldLayout>
                <Initial>+91</Initial>
                <FieldValue
                  sx={{
                    borderBottomColor: error.length !== 0 ? '$primary' : '',
                    borderBottomWidth: error.length !== 0 ? 3 : 1,
                  }}
                  onChangeText={(text) => {
                    setPhoneNumber(text)
                  }}
                  keyboardType="phone-pad"
                />
              </FieldLayout>
            </Field>
            <Error>{error}</Error>
            <Pressable onPress={handleLogin}>
              <LoginButton>
                <LoginButtonText selectable={false} sx={{ color: 'white' }}>
                  Login
                </LoginButtonText>
              </LoginButton>
            </Pressable>
          </Form>
        ) : (
          <OTP>
            <Pressable
              onPress={() => {
                setState('number')
              }}
            >
              <Ionicons name="return-down-back" size={30} color="black" />
            </Pressable>
            <Heading>OTP Verification</Heading>
            <SendMessage>
              OTP has been sent to
              <ThemeColorText bold>+91 939 001 6592</ThemeColorText>
            </SendMessage>
            <OtpInput />
            <Button text={'Verify'} width={50} bg={'primary'} />
          </OTP>
        )}

        <Footer>
          <ThemeColorText bold={false}>©Tach 2021</ThemeColorText>, All rights
          Reserved
        </Footer>
      </Login>
    </Container>
  )
}
