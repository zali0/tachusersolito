import { View, Text, styled } from 'dripsy'
import React from 'react'
import TitleBar from 'app/components/Titlebar'
import { DisplayImage, vw } from 'app/utils'
import { products } from '../home/screen'
import { COLORS } from 'app/constants'
import ShowcaseCarousel from 'app/components/ShowcaseCarousel'

const Product = styled(View)({
    width: '80%',
    flexDirection: 'row',
    alignSelf: 'center',
    // justifyContent: ''
})

const ProductImage = styled(View)({
    width: '20%',
})
const ProductInfo = styled(View)({
    width: '80%',
})
const CompanyName = styled(Text)({
    fontSize: 20
})
const ProductName = styled(Text)({
    fontSize: 30

})
const Price = styled(View)({
    fontSize: 20,
    color: '$primary'

})
const DescriptionTitle = styled(Text)({
    fontSize: 20,

})

const PriceArea = styled(View)({
    marginTop: vw(5),
    flexDirection: 'row',
    justifyContent: 'space-around'
})
const PriceTag = styled(View)({
    flexDirection: 'row',
})
const Currency = styled(Text)({
    color: COLORS.primary,
    fontSize: 30,
})
const Numeric = styled(Text)({
    color: COLORS.primary,
    marginLeft: vw(1),
    fontSize: 90,

})
const PriceFunction = styled(View)({
    width: vw(10),
    backgroundColor: COLORS.secondary,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: vw(10),
    // padding: vw(2)
})

const Minus = styled(Text)({
    color: COLORS.white,
    fontSize: 30
})
const Quantity = styled(Text)({
    width: 40,
    height: 40,
    padding: vw(1),
    // justifyContent: 'center',
    // textAlign: 'center',
    alignSelf: 'center',
    color: COLORS.secondary,
    backgroundColor: '#fff',
    borderRadius: vw(50),
    fontSize: 20,
})
const Plus = styled(Text)({
    color: COLORS.white,
    fontSize: 30

})


const ProductScreen = () => {
    return (
        <View>
            <TitleBar title={'Product Name'} />
            <Product >
                <ProductImage>
                    <DisplayImage
                        border={false}
                        styles={null}
                        width={10}
                        height={20}
                        nativeWidth={10}
                        nativeHeight={10}
                        mode={'responsive'}
                        nativeMode={'contain'}
                        image={products[0]!.image} />
                </ProductImage>
                <ProductInfo>
                    <CompanyName>Monster</CompanyName>
                    <ProductName>Kothmeer Baranje</ProductName>
                    <Price>$ 45</Price>
                    <DescriptionTitle>Product Information</DescriptionTitle>
                    <DescriptionTitle>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto qui dolore accusamus, id dolores quo numquam laboriosam, deleniti consequuntur ratione sed dolorum. Architecto veniam ab placeat nihil? Dicta, soluta iusto!</DescriptionTitle>
                    <PriceArea>
                        <PriceTag>
                            <Currency>₹</Currency>
                            <Numeric>90</Numeric>
                        </PriceTag>
                        <PriceFunction>
                            <Minus>-</Minus>
                            <Quantity>3</Quantity>
                            <Plus>+</Plus>
                        </PriceFunction>
                    </PriceArea>
                </ProductInfo>
            </Product>
            <ShowcaseCarousel heading={"Frequenty bought"} em={"togeather"} products={products} />
        </View>
    )
}

export default ProductScreen