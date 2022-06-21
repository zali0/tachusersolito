import ShowcaseProduct from 'app/components/ShowcaseProduct'
import TitleBar from 'app/components/Titlebar'
import { SIZES } from 'app/constants'
import { DisplayImage } from 'app/utils'
import { View, Text, styled } from 'dripsy'
import React from 'react'
import { createParam } from 'solito'
import { products } from '../home'

const Container = styled(View)({

})

const SubContainer = styled(View)({
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
})


const Sidebar = styled(View)({
    width: '10%',
    flexDirection: 'column',
    borderRightWidth: 2,
})


const SubCategory = styled(View)({
    flexDirection: 'column'
})

const SubCategoryImage = styled(DisplayImage)({
    flexDirection: 'column',
    alignSelf: 'center'
})
const SubCategoryName = styled(Text)({
    flexDirection: 'column',
    alignSelf: 'center'
})
const CurrentCategory = styled(View)({
    width: '90%',
    borderLeftWidth: 2,
})



const Banner = styled(DisplayImage)({
    borderRadius: 99,
})

const Products = styled(View)({
    flexDirection: 'row',
    flexWrap: 'wrap'
})


const Category = () => {
    const { useParam } = createParam()

    const [id, setID] = useParam('id')
    console.log(id)
    return (
        <Container>
            <TitleBar title={`Category Id: ${id}`} />
            <SubContainer>
                <Sidebar>
                    <SubCategory>
                        <SubCategoryImage
                            border={false}
                            styles={null}
                            width={20}
                            nativeWidth={100}
                            height={25}
                            nativeHeight={100}
                            mode={'responsive'}
                            nativeMode={100}
                            image='https://www.veggycation.com.au/siteassets/veggycationvegetable/coriander-leaves.jpg' />
                        <SubCategoryName>Herbs</SubCategoryName>
                    </SubCategory>
                    <SubCategory>
                        <SubCategoryImage
                            border={false}
                            styles={null}
                            width={20}
                            nativeWidth={100}
                            height={25}
                            nativeHeight={100}
                            mode={'responsive'}
                            nativeMode={100}
                            image='https://www.veggycation.com.au/siteassets/veggycationvegetable/coriander-leaves.jpg' />
                        <SubCategoryName>Herbs</SubCategoryName>
                    </SubCategory>
                    <SubCategory>
                        <SubCategoryImage
                            border={false}
                            styles={null}
                            width={20}
                            nativeWidth={100}
                            height={25}
                            nativeHeight={100}
                            mode={'responsive'}
                            nativeMode={100}
                            image='https://www.veggycation.com.au/siteassets/veggycationvegetable/coriander-leaves.jpg' />
                        <SubCategoryName>Herbs</SubCategoryName>
                    </SubCategory>
                    <SubCategory>
                        <SubCategoryImage
                            border={false}
                            styles={null}
                            width={20}
                            nativeWidth={100}
                            height={25}
                            nativeHeight={100}
                            mode={'responsive'}
                            nativeMode={100}
                            image='https://www.veggycation.com.au/siteassets/veggycationvegetable/coriander-leaves.jpg' />
                        <SubCategoryName>Herbs</SubCategoryName>
                    </SubCategory>
                    <SubCategory>
                        <SubCategoryImage
                            border={false}
                            styles={null}
                            width={20}
                            nativeWidth={100}
                            height={25}
                            nativeHeight={100}
                            mode={'responsive'}
                            nativeMode={100}
                            image='https://www.veggycation.com.au/siteassets/veggycationvegetable/coriander-leaves.jpg' />
                        <SubCategoryName>Herbs</SubCategoryName>
                    </SubCategory>
                    <SubCategory>
                        <SubCategoryImage
                            border={false}
                            styles={null}
                            width={20}
                            nativeWidth={100}
                            height={25}
                            nativeHeight={100}
                            mode={'responsive'}
                            nativeMode={100}
                            image='https://www.veggycation.com.au/siteassets/veggycationvegetable/coriander-leaves.jpg' />
                        <SubCategoryName>Herbs</SubCategoryName>
                    </SubCategory>
                </Sidebar>
                <CurrentCategory >
                    <Banner
                        border={false}
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
                    <Products>

                        <ShowcaseProduct item={products[0]} />
                        <ShowcaseProduct item={products[0]} />
                        <ShowcaseProduct item={products[0]} />
                        <ShowcaseProduct item={products[0]} />
                        <ShowcaseProduct item={products[0]} />
                        <ShowcaseProduct item={products[0]} />
                        <ShowcaseProduct item={products[0]} />
                        <ShowcaseProduct item={products[0]} />
                        <ShowcaseProduct item={products[0]} />
                        <ShowcaseProduct item={products[0]} />
                        <ShowcaseProduct item={products[0]} />
                        <ShowcaseProduct item={products[0]} />
                    </Products>
                </CurrentCategory>
            </SubContainer>
        </Container>
    )
}

export default Category