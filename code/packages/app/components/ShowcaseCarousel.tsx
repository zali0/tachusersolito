import { View, Text, FlatList } from 'dripsy'
import React from 'react'
import { styled } from 'dripsy'
import { COLORS, SIZES } from 'app/constants'
import ThemeColorText from './atoms/ThemeColorText'
import ShowcaseProduct from './ShowcaseProduct'

const Container = styled(View)({
  width: '100%',
  marginTop: SIZES.$3,
  marginBottom: SIZES.$3,
  padding: 10,
  bg: COLORS.white
})

const Heading = styled(Text)({
  fontSize: 20,
  fontWeight: 'bold',
})

const ShowcaseProducts = styled(FlatList)({})

const ShowcaseCarousel = ({ products, heading, em }) => {
  const renderCarouselItem = ({ item }) => <ShowcaseProduct item={item} />
  return (
    <Container>
      <Heading>
        {heading} <ThemeColorText bold>{em}</ThemeColorText>
      </Heading>
      <ShowcaseProducts
        data={products}
        renderItem={renderCarouselItem}
        keyExtractor={(item: any) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  )
}

export default ShowcaseCarousel
