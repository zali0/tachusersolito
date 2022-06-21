import firebase from 'firebase/app';
import 'firebase/auth';
import { app, firebaseConfig } from "app/firebase.config";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
  FirebaseRecaptchaVerifier,
  FirebaseAuthApplicationVerifier,
} from "expo-firebase-recaptcha";
import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential, RecaptchaVerifier, signInWithPhoneNumber
} from "firebase/auth";

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
  Styles,
} from 'dripsy'
import React, { useRef } from 'react'
import { LogBox, Platform, StatusBar } from 'react-native'
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
import Button from 'app/components/atoms/Button'
import { getApp, getApps, initializeApp, } from "firebase/app";
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
  borderBottomRightRadius: SIZES.$7,
})

const ImageWrapper = styled(View)({
  width: Platform.OS === 'web' ? '50%' : '100%',
  height: Platform.OS === 'web' ? '25%' : '100%',
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
  fontSize: FONTS.lg,
  fontWeight: 'black',
})

const Form = styled(View)({
  width: '75%',
  alignSelf: 'center',
})

const WelcomeText = styled(Text)({
  fontSize: Platform.OS === 'web' ? FONTS.lg : FONTS.sm,
  fontWeight: 'bold',
  textAlign: 'center',
})

const Field = styled(View)({
  width: Platform.OS === 'web' ? '100%' : '75%',
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
  marginLeft: 20,
  fontSize: [14, 16, 18],
  fontWeight: 'regular',
  letterSpacing: SIZES.$3,
})

const Error = styled(Text)({
  marginTop: SIZES.$2,
  fontSize: 20,
  fontWeight: 'regular',
  alignSelf: 'center',
  color: 'red',
})
const LoginPressable = styled(Pressable)({
  padding: SIZES.$2,
  marginTop: SIZES.$4,
  width: '50%',
  alignSelf: 'center',
  borderRadius: SIZES.$2,
  bg: '$primary',
})

const LoginButtonText = styled(Text)({
  textAlign: 'center',
  fontSize: SIZES.$3,
  fontWeight: 'bold',
})

const OTP = styled(View)({
  width: '75%',
  alignSelf: 'center',
})

const Heading = styled(Text)({
  textAlign: 'center',
  fontWeight: 'black',
  fontSize: [18, 18, 24],
})
const SendMessage = styled(Text)({
  textAlign: 'center',
  fontWeight: 'bold',
  marginTop: 15,
  fontSize: [16, 17, 18],
})

const OtpInput = styled(TextInput)({
  width: '75%',
  alignSelf: 'center',
  borderBottomWidth: 2,
  marginLeft: SIZES.$2,
  fontSize: 24,
  fontWeight: 'regular',
  letterSpacing: SIZES.$3,
  textAlign: 'center',
  marginTop: 15,
  outlineColor: Platform.OS === 'web' ? 'white' : null
})

const Footer = styled(Text)({
  fontSize: 1,
  textAlign: 'center',
  fontWeight: 'light',
})

LogBox.ignoreLogs([
  `fontFamily "lato" is not a system font and has not been loaded through Font.loadAsync.`,
]);
 
const OnBoard = () => {
  const { push } = useRouter()
  const recaptchaVerifier = React.useRef(null);
  const [state, setState] = React.useState<string>('OTP')
  const [loadingState, setLoadingState] = React.useState<string>('Login')
  const [phoneNumber, setPhoneNumber] = React.useState<string>('')
  const [buttonColor, setButtonColor] = React.useState<string>('$primary')
  const [verificationId, setVerificationId] = React.useState<string>('');
  const [verificationCode, setVerificationCode] = React.useState('');
  const [message, showMessage] = React.useState({ text: "Initial Dummy Text" });
  const [error, setError] = React.useState<string>('')
  const attemptInvisibleVerification = false;

  const auth = getAuth(app);
  let appVerifier: RecaptchaVerifier;
  try {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
  } catch (err) {
    // console.log("Recaptcha verifier error")
    // console.log(err)
  }
  appVerifier = window.recaptchaVerifier;


  const handleVerify = async () => {
    try {
      const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
      await signInWithCredential(auth, credential);
      console.log({ text: "Phone authentication successful 👍" });
      push({
        pathname: '/',
        // query: {
        //   slug: 'drake',
        // },
      })
    } catch (err) {
      console.log(err)
    }
    // dispatch(addUser(phoneNumber));
  }
  const handleNumberInput = async () => {
    if (!phoneNumber) {
      setButtonColor('black')
      setError('Please enter the Phone Number.')
      return
    }

    if (phoneNumber.length === 10) {
      const phoneProvider = new PhoneAuthProvider(auth);
      let platformSpecific = Platform.OS === 'web' ? appVerifier : recaptchaVerifier.current
      const verificationId = await phoneProvider.verifyPhoneNumber(
        "+91".concat(phoneNumber),
        platformSpecific!
      );
      setVerificationId(verificationId);
      if (verificationId) {
        setState("OTP")
      }
      //   showMessage({
      //     text: 'Verification code has been sent to your phone.',
      //   });
      // } catch (err) {
      //   console.log(err)
      // showMessage({ text: `Error: ${err.message}`, color: 'red' });
      // }
    } else {
      setError('Invalid Phone Number')
    }
  }

  const [appIsDefined, setAppIsDefined] = React.useState<boolean>(false)
  React.useEffect(() => {
    if (getApps().length === 1) {
      setAppIsDefined(true)
    }
  }, getApps())
  if (appIsDefined) {
    return (
      <Container>
        <Showcase>
          <ImageWrapper>
            <DisplayImage
              border={false}
              styles={{ marginLeft: SIZES.$1 }}
              image={onboardDeliveryGuy}
              width={150}
              height={250}
              nativeWidth={50}
              nativeHeight={50}
              mode="intrinsic"
              nativeMode="center"
            />
          </ImageWrapper>
        </Showcase>
        <Login>
          <CompanyName>Tach</CompanyName>
          {state === 'number' ? <WelcomeText>
            Delivering in <ThemeColorText bold> 21 minutes</ThemeColorText> or
            <ThemeColorText bold> Free!</ThemeColorText>
          </WelcomeText> : null}
          {state === 'number' ? (
            <Form>
              <Field>
                <FieldName>Phone Number</FieldName>
                <FieldLayout>
                  <Initial>+91</Initial>
                  <FieldValue
                    sx={{
                      borderBottomColor: error.length !== 0 ? '$primary' : null,
                      borderBottomWidth: error.length !== 0 ? 3 : null,
                      outlineColor: Platform.OS === 'web' ? 'white' : null
                    }}
                    onChangeText={(text) => {
                      setPhoneNumber(text)
                    }}
                    maxLength={10}
                    keyboardType="phone-pad"
                  />
                </FieldLayout>
              </Field>
              <Error>{error}</Error>
              {Platform.OS === 'web' && <View sx={{ flex: 1, alignSelf: 'center' }} nativeID="recaptcha-container"></View>}
              {Platform.OS !== 'web' && (getApps().length === 1) ?
                <>
                  <FirebaseRecaptchaVerifierModal
                    ref={recaptchaVerifier}
                    firebaseConfig={app.options}
                  // attemptInvisibleVerification
                  />
                </>
                : null}
              <LoginPressable onPress={handleNumberInput} sx={{ bg: buttonColor, }}>
                <LoginButtonText selectable={false} sx={{ color: 'white' }}>
                  {loadingState}
                </LoginButtonText>
              </LoginPressable>
              {Platform.OS !== 'web' && attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
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
              <OtpInput onChangeText={(num) => setVerificationCode(num)}
                keyboardType="phone-pad" selectionColor='red' maxLength={6} />
              <Pressable onPress={handleVerify}>
                <Button text={'Verify'} width={50} bg={'primary'} />
              </Pressable>
            </OTP>
          )}
          <Footer>
            <ThemeColorText bold={false}>©Tach 2021</ThemeColorText>, All rights
            Reserved
          </Footer>
        </Login>
      </Container>
    )
  } else {
    return (<Text>LOADING BRUH</Text>)
  }

}

export default OnBoard;