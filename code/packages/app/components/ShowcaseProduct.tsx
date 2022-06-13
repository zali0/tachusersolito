import { COLORS, SIZES } from 'app/constants'
import { DisplayImage, vw } from 'app/utils'
import { View, Text, styled } from 'dripsy'
import { Platform } from 'react-native'
import { Link } from 'solito/link'
// font-weight: ${SIZES.bold};
const Container = styled(View)({
  width: Platform.OS === 'web' ? `${vw(15)}px` : vw(30),
  // height: '100%',
  backgroundColor: COLORS.white,
  padding: SIZES.$2,
  borderRadius: 20,
  margin: SIZES.$1,
  elevation: 3,
  shadowColor: 'grey',
  shadowOffset: {
    width: 3,
    height: 3
  },
  shadowOpacity: 0.8,
  shadowRadius: 2

})

const ProductImage = styled(DisplayImage)({
  // width: '100%',
  // height: '80%',
  alignSelf: 'center',
})

const ProductName = styled(Text)({
  fontSize: [12, 15],
  fontWeight: 'black',
})

const Quantity = styled(Text)({
  fontSize: 14,
  fontWeight: 'regular',
  color: COLORS.darkSecondary,
  opacity: 0.5,
})
const Prices = styled(View)({
  flexDirection: 'row',
  marginTop: 'auto',
})

const Before = styled(Text)({
  fontSize: 14,
  fontWeight: 'regular',
  marginRight: 3,
  color: COLORS.secondary,
  // textDecoration: 'line-through',
})
const Price = styled(Text)({
  fontWeight: 'bold',
  color: COLORS.primary,
  fontSize: 16,
  marginLeft: 'auto',
})
// const AddButton = styled(View)`
//   position: absolute;
//   top: ${SIZES.sm};
//   right: ${SIZES.sm};
//   width: ${vw(8)}px;
//   height: ${vw(8)}px;
//   justify-content: center;
//   align-items: center;
//   border-radius: ${RADIUS.circle};
//   background-color: ${COLORS.primary};
// `;
// const AddButtonText = styled(Text)`
//   font-size: ${SIZES.md};
//   color: ${COLORS.white};
//   align-self: center;
// `;

// const Function = styled(View)`
//   position: absolute;
//   top: ${SIZES.sm};
//   right: ${SIZES.sm};
//   width: 50%;
//   flex-direction: row;
//   justify-content: space-around;
//   align-items: center;
//   border-radius: ${RADIUS.circle};
//   padding: ${SIZES.sm};
//   background-color: ${COLORS.primary};
// `;
// const Minus = styled(Text)`
//   color: ${COLORS.white};
//   font-size: ${SIZES.md};
// `;
// const Plus = styled(Text)`
//   color: ${COLORS.white};
//   font-size: ${SIZES.md};
// `;
// const Current = styled(Text)`
//   color: ${COLORS.white};
//   font-size: ${SIZES.md};
// `;
// const Off = styled(ImageBackground)`
//   width: 90%;
//   position: absolute;
//   top: 10%;
//   left: -${vw(1)}px;
//   padding: ${SIZES.sm};
//   justify-content: center;
// `;
// const OffText = styled(Text)`
//   color: ${COLORS.white};
//   font-size: ${SIZES.sm};
//   font-weight: ${SIZES.bold};
//   margin-left: ${SIZES.sm};
// `;

const ShowcaseProduct = (props) => {
  const { item } = props;
  return (
    <Link href={`/products/${item.id}`}>
      <Container>
        {/* <Navigate navigation={props.navigation} params={item} to="Product"> */}
        <ProductImage
          border={false}
          styles={{ marginLeft: 10 }}
          width={10}
          height={20}
          nativeWidth={20}
          nativeHeight={15}
          mode={'responsive'}
          nativeMode={'contain'}
          image={item.image}
        />
        <View>
          <ProductName numberOfLines={1}>{item.name}</ProductName>
          <Quantity>{item.quantity}</Quantity>
          <Prices>
            {item.before && <Before>₹{item.before}</Before>}
            <Price>₹{item.price}</Price>
          </Prices>
        </View>
        {/* </Navigate> */}
        {/* <AddButton>
        <AddButtonText>+</AddButtonText>
      </AddButton> */}
        {/* <Function>
          <Minus>-</Minus>
          <Current>3</Current>
          <Plus>+</Plus>
        </Function> */}
        {/* {item.off && (
        <Off resizeMode={"contain"} source={off}>
          <OffText numberOfLines={1}>{item.off}% OFF</OffText>
        </Off>
      )} */}
      </Container>
    </Link>
  )
}

export default ShowcaseProduct
