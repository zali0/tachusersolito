import TitleBar from 'app/components/Titlebar'
import { COLORS } from 'app/constants'
import { View, Text, styled, TextInput } from 'dripsy'
import React from 'react'
import { Platform, StatusBar } from 'react-native'
import {
    MaterialCommunityIcons,
    FontAwesome,
    Ionicons,
    MaterialIcons,
    AntDesign,
    Entypo,
} from '@expo/vector-icons'
import ShowcaseCarousel from 'app/components/ShowcaseCarousel'
import { products } from '../home'
const Container = styled(View)({
    width: '100%',
    height: '100%',
    bg: '#F5F5F5',
    marginTop: Platform.OS !== 'web' ? StatusBar.currentHeight : '0',
})

const FakeSearchBox = styled(View)({
    width: Platform.OS === 'web' ? '30%' : '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    padding: 3,
    bg: 'black',
    marginTop: 10
})

const SearchInput = styled(TextInput)({
    color: COLORS.white,
    width: '90%',
    height: '100%',
    fontWeight: 'bold',
    fontSize: [10, 20]
})

const SearchIcon = styled(Ionicons)({
    color: COLORS.white,
})

const LoadingView = styled(View)({
    margin: [20, 24],
    // color: COLORS.white,
    alignItems: 'center'
})

const LoadingText = styled(Text)({
    color: COLORS.black,
    fontSize: [20, 24],
    fontWeight: 'bold',
})


const Loading = () => {
    return (
        <LoadingView>
            <LoadingText>Search is going places</LoadingText>
            <AntDesign style={{ margin: 20 }} name="loading1" size={24} color="black" />
        </LoadingView>
    )
}
const Search = () => {
    return (
        <Container>
            <TitleBar title={'Search'} />
            <FakeSearchBox>
                <SearchInput placeholder='Search the Earth' autoFocus={true} />
                <SearchIcon name="md-search-outline" size={24} />
            </FakeSearchBox>
            {true && <Loading />}
            <ShowcaseCarousel
                em={'You'}
                heading={'Suggested For'}
                products={products}
            />
        </Container>
    )
}

export default Search