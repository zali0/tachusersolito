import { View, Text, styled } from 'dripsy'
import React from 'react'
import TitleBar from 'app/components/Titlebar'
import { SIZES } from 'app/constants'
import { DisplayImage, vw } from 'app/utils'
import { products } from '../home'
import BagProduct from 'app/components/BagProduct'

const BannerWrapper = styled(View)({
    width: '70%',
    alignSelf: 'center'
})
const Banner = styled(DisplayImage)({
    borderRadius: 10,
})

const Button = styled(View)({
    width: '10%',
    bg: 'black', margin: '10',
    // borderRadius: 10,
    alignSelf: 'center',
    padding: vw(1)
})
const ButtonText = styled(Text)({
    color: 'white', margin: '10',
    // borderRadius: 10,
    textAlign: 'center'
})

const Bag = () => {
    return (
        <View>
            <TitleBar title={'Shopping bag'} />
            <BannerWrapper >

                <Banner
                    border={true}
                    mode="responsive"
                    nativeMode="contain"
                    styles={{ marginLeft: SIZES.$1, borderRadius: 22 }}
                    width={70}
                    nativeWidth={90}
                    height={35}
                    nativeHeight={20}
                    image={
                        'https://img.freepik.com/free-vector/flat-supermarket-twitch-banner_23-2149357978.jpg?w=2000'
                    }
                />
                {products.map(product => (<BagProduct item={product} />))}
            </BannerWrapper>
            <Button>
                <ButtonText>Proceed to checkout</ButtonText>
            </Button>
        </View>
    )
}

export default Bag