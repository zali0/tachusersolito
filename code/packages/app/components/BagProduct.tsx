import { DisplayImage } from 'app/utils'
import { View, Text, styled } from 'dripsy'
import React from 'react'

import {
    MaterialCommunityIcons,
    FontAwesome,
    Ionicons,
    MaterialIcons,
    AntDesign,
    Entypo,
} from '@expo/vector-icons'
import { Link } from 'solito/link'
const Container = styled(View)({
    margin: 5
    ,
    flexDirection: 'row'
})

const ProductImageWrapper = styled(View)({
    width: '20%'
})
const ProductImage = styled(DisplayImage)({
})
const ProductInfo = styled(View)({
})
const ProductName = styled(Text)({
    fontSize: 30
})
const PriceWrapper = styled(View)({
    marginTop: 'auto'
})

const ProductPrice = styled(Text)({
    fontSize: 25

})

const PriceFunction = styled(View)({
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    bg: 'black',
    width: 70,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    bottom: 5,
    right: 5,
})
const Minus = styled(Text)({
    fontSize: 25,
    color: 'white'
})
const Number = styled(Text)({
    fontSize: 25,
    color: 'white'
})
const Plus = styled(Text)({
    fontSize: 25,
    color: 'white'
})

const Remove = styled(Ionicons)({
    position: 'absolute',
    top: 5,
    right: 5,
})
const BagProduct = ({ item }) => {
    return (
        <Container>
            <ProductImageWrapper>
                <Link href={`/products/${item.id}`}>
                    <ProductImage
                        styles={null}
                        border={false}
                        width={50}
                        height={100}
                        nativeWidth={100}
                        nativeHeight={100}
                        mode={'responsive'}
                        nativeMode={'contain'}
                        image={'https://www.veggycation.com.au/siteassets/veggycationvegetable/coriander-leaves.jpg'} />

                </Link>
            </ProductImageWrapper>

            <ProductInfo>
                <ProductName>{item.name}</ProductName>
                <PriceWrapper>

                    <ProductPrice>{item.price}</ProductPrice>
                </PriceWrapper>
            </ProductInfo>
            <PriceFunction>
                <Minus>-</Minus>
                <Number>3</Number>
                <Plus>+</Plus>
            </PriceFunction>
            <Remove name="remove-circle" size={24} color="black" />
    
        </Container>
    )
}

export default BagProduct