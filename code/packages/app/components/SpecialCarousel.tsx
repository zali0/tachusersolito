import { COLORS } from 'app/constants'
import { DisplayImage, vw } from 'app/utils'
import { View, Text, styled, FlatList } from 'dripsy'
import React from 'react'
import { Platform } from 'react-native'
import ThemeColorText from './atoms/ThemeColorText'

const Container = styled(View)({
  bg: '$darkSecondary',
  padding: 20,
  marginTop: 20,
})

const Heading = styled(Text)({
  color: '$white',
  fontSize: [20, 32],
  alignSelf: 'flex-start',
  fontWeight: 'bold',
})

const CategoriesArray = styled(FlatList)({
  // width: '80%',
  // alignSelf: 'center',
  // justifyContent: 'space-around',
  // flexDirection: 'row',
  // flexWrap: 'wrap',
})
const CategoryElement = styled(View)({
  //   justifyContent: 'space-bwetween',
  //   flexDirection: 'row',
  width: Platform.OS === 'web' ? `${vw(10)}px` : vw(30),

  height: '100%',
  borderRadius: 20,
  margin: 10,
})

const SpecialCarousel = () => {
  const products = [
    {
      id: 1,
    }, {
      id: 1,
    }, {
      id: 1,
    }, {
      id: 1,
    }, {
      id: 1,
    }, {
      id: 1,
    }, {
      id: 1,
    }, {
      id: 1,
    },{
      id: 1,
    },{
      id: 1,
    },
  ]
  const renderCarouselItem = ({ item }) => (
    <CategoryElement>
      <DisplayImage
        //   styles={{ width: vw(10) }}
        border={true}
        styles={{ marginLeft: 5, borderRadius: 10 }}
        image={
          'https://image.shutterstock.com/z/stock-vector-vector-bakery-vertical-banner-design-for-grocery-bakery-dessert-menu-and-pastry-shop-recipe-476886412.jpg'
        }
        width={25}
        height={80}
        nativeHeight={10}
        nativeWidth={100}
        mode={'responsive'}
        nativeMode={'center'}
      />
    </CategoryElement>
  )

  return (
    <Container>
      <Heading>
        Special Ones For <ThemeColorText bold={false}>You</ThemeColorText>
      </Heading>
      <CategoriesArray
        data={products}
        renderItem={renderCarouselItem}
        keyExtractor={(item: any) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  )
}

export default SpecialCarousel
