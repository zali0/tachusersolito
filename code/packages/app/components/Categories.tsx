import { COLORS } from 'app/constants'
import { DisplayImage, vw } from 'app/utils'
import { View, Text, styled } from 'dripsy'
import React from 'react'
import { Platform } from 'react-native'

const Container = styled(View)({
  bg: '$primary',
  padding: 20,
  marginTop: 20,
})

const Heading = styled(Text)({
  color: '$white',
  fontSize: [20, 32],
  alignSelf: 'center',
  fontWeight: 'regular',
})

const CategoriesArray = styled(View)({
  width: '90%',
  alignSelf: 'center',
  justifyContent: 'space-around',
  flexDirection: 'row',
  flexWrap: 'wrap',
})
const CategoryElement = styled(View)({
  //   justifyContent: 'space-bwetween',
  //   flexDirection: 'row',
  width: Platform.OS === "web" ? vw(10) : vw(30),
  bg: '$white',
  marginLeft: 20,
  padding: 10,
  borderRadius: 20,
  margin: [5, 5],
})

const CategoryName = styled(Text)({
  fontSize: [10, 20],
  color: COLORS.black,
  fontWeight: 'bold',
  alignSelf: 'center'
})

const Categories = () => {
  return (
    <Container>
      <Heading>Categories</Heading>
      <CategoriesArray>
        <CategoryElement>
          <DisplayImage
            border={false}
            //   styles={{ width: vw(10) }}
            styles={{ marginLeft: 5, borderRadius: 10 }}
            image={'https://s1.1zoom.me/big0/857/334910-svetik.jpg'}
            width={15}
            height={15}
            nativeHeight={10}
            nativeWidth={20}
            mode={'responsive'}
            nativeMode={'center'}
          />
          <CategoryName>Fruits and Vegetables</CategoryName>
        </CategoryElement>

        <CategoryElement>
          <DisplayImage
            border={false}
            //   styles={{ width: vw(10) }}
            styles={{ marginLeft: 5, borderRadius: 10 }}
            image={'https://s1.1zoom.me/big0/857/334910-svetik.jpg'}
            width={15}
            height={15}
            nativeHeight={10}
            nativeWidth={20}
            mode={'responsive'}
            nativeMode={'center'}
          />
          <CategoryName>Fruits and Vegetables</CategoryName>
        </CategoryElement>
        <CategoryElement>
          <DisplayImage
            border={false}
            //   styles={{ width: vw(10) }}
            styles={{ marginLeft: 5, borderRadius: 10 }}
            image={'https://s1.1zoom.me/big0/857/334910-svetik.jpg'}
            width={15}
            height={15}
            nativeHeight={10}
            nativeWidth={20}
            mode={'responsive'}
            nativeMode={'center'}
          />
          <CategoryName>Fruits and Vegetables</CategoryName>
        </CategoryElement>
        <CategoryElement>
          <DisplayImage
            border={false}
            //   styles={{ width: vw(10) }}
            styles={{ marginLeft: 5, borderRadius: 10 }}
            image={'https://s1.1zoom.me/big0/857/334910-svetik.jpg'}
            width={15}
            height={15}
            nativeHeight={10}
            nativeWidth={20}
            mode={'responsive'}
            nativeMode={'center'}
          />
          <CategoryName>Fruits and Vegetables</CategoryName>
        </CategoryElement>
        <CategoryElement>
          <DisplayImage
            border={false}
            //   styles={{ width: vw(10) }}
            styles={{ marginLeft: 5, borderRadius: 10 }}
            image={'https://s1.1zoom.me/big0/857/334910-svetik.jpg'}
            width={15}
            height={15}
            nativeHeight={10}
            nativeWidth={20}
            mode={'responsive'}
            nativeMode={'center'}
          />
          <CategoryName>Fruits and Vegetables</CategoryName>
        </CategoryElement>
        <CategoryElement>
          <DisplayImage
            border={false}
            //   styles={{ width: vw(10) }}
            styles={{ marginLeft: 5, borderRadius: 10 }}
            image={'https://s1.1zoom.me/big0/857/334910-svetik.jpg'}
            width={15}
            height={15}
            nativeHeight={10}
            nativeWidth={20}
            mode={'responsive'}
            nativeMode={'center'}
          />
          <CategoryName>Fruits and Vegetables</CategoryName>
        </CategoryElement>
      </CategoriesArray>
    </Container>
  )
}

export default Categories
