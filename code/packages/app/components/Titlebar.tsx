import { View, Text, styled, Pressable } from "dripsy";
import React from "react";


import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  AntDesign,
  Entypo,
} from '@expo/vector-icons'
import { COLORS } from "app/constants";
import { useRouter } from "solito/router";

const Container = styled(View)({
  width: '100%',
  padding: 20,
  marginTop: 15,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
})
const BackArrow = styled(Ionicons)({
  fontSize: 30,
  margin: 10
})
const ScreenTitle = styled(Text)({
  fontSize: 30,
  fontWeight: 'bold',
  color: COLORS.primary
})

const Line = styled(View)({
  width: '70%',
  marginRight: 20,
  height: 4,
  backgroundColor: '#000',
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
  alignSelf: 'flex-end'
})

const TitleBar = ({ title, showBack = true }) => {
  // if (!showBack) {
  // NICE INNOVATION, hahaa
  //   Container.inlineStyle.rules.push("justify-content: flex-end;");
  // }

  const { push, replace, back, parseNextPath } = useRouter()
  return (
    <View>
      <Container
        sx={{ justifyContent: !showBack ? "flex-end" : "space-between" }}
      >
        {showBack && (
          // <Navigate navigation={navigation} goBack={true}>
          <Pressable onPress={() => back()}>
            <BackArrow name="arrow-back" />
          </Pressable>
          // </Navigate>
        )
        }
        <ScreenTitle>{title}</ScreenTitle>
      </Container >
      <Line />
    </View >
  );
};

export default TitleBar;
