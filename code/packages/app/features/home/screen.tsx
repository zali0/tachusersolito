import onboardDeliveryGuy from 'app/assets/images/onboardDeliveryGuy.png'
import {
  Text,
  useSx,
  View,
  H1,
  P,
  Row,
  A,
  styled,
  TextInput,
  Image as DripsyImage,
  FlatList,
  ScrollView,
} from 'dripsy'
import { Link, TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { Image } from 'react-native'
// import onboardDeliveryGuy from '../../assets/onboardDeliveryGuy.webp'
import { Platform, StatusBar } from 'react-native'
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  AntDesign,
  Entypo,
} from '@expo/vector-icons'
import { COLORS, FONTS, SIZES } from 'app/constants'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { DisplayImage, vw } from 'app/utils'
import ThemeColorText from 'app/components/atoms/ThemeColorText'
import ShowcaseCarousel from 'app/components/ShowcaseCarousel'
import Categories from 'app/components/Categories'
import SpecialCarousel from 'app/components/SpecialCarousel'

const Container = styled(ScrollView)({
  width: '100%',
  bg: '#F5F5F5',
  marginTop: Platform.OS !== 'web' ? StatusBar.currentHeight : '0',
})

const Topbar = styled(View)({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
})
const Location = styled(View)({
  width: '60%',
  flexDirection: 'row',
  margin: SIZES.$3,
})

const LocationText = styled(Text)({
  fontSize: Platform.OS === 'web' ? FONTS.sm : FONTS.xxs,
  fontWeight: 'light',
  marginLeft: SIZES.$1,
})

// Notification Area
const Notification = styled(View)({
  position: 'relative',
  margin: SIZES.$3,
})

const NotificationIcon = styled(Ionicons)({
  fontSize: 40,
  color: COLORS.secondary,
})

const NotificationCircle = styled(View)({
  position: 'absolute',
  top: 0,
  right: 0,
  width: 25,
  height: 25,
  borderRadius: SIZES.$3,
  backgroundColor: COLORS.primary,
  justifyContent: 'center',
  alignItems: 'center',
})
const NotificationText = styled(Text)({
  color: COLORS.white,
  fontSize: 15,
})

const WelcomeText = styled(Text)({
  color: COLORS.black,
  fontSize: 15,
  fontWeight: 'bold',
  margin: 10,
  marginTop: 0,
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
  bg: 'white',
})

const FakeInput = styled(Text)({
  color: COLORS.grey,
})

const SearchIcon = styled(Ionicons)({
  color: COLORS.primary,
})

const RenderBanners = styled(FlatList)({
  marginTop: SIZES.$2,
})

const Banner = styled(DisplayImage)({
  borderRadius: 99,
  marginLeft: 10,
})
const banners = [
  {
    id: 1,
    image:
      'https://img.freepik.com/free-vector/flat-supermarket-twitch-banner_23-2149357978.jpg?w=2000',
    title: 'Fresh Everyday',
  },
  {
    id: 2,
    image:
      'https://img.freepik.com/free-vector/flat-supermarket-twitch-banner_23-2149357978.jpg?w=2000',
    title: 'Fresh Everyday',
  },
  {
    id: 3,
    image:
      'https://img.freepik.com/free-vector/flat-supermarket-twitch-banner_23-2149357978.jpg?w=2000',
    title: 'Fresh Everyday',
  },
]

const products = [
  {
    id: 1,
    image:
      'https://www.veggycation.com.au/siteassets/veggycationvegetable/coriander-leaves.jpg',
    name: 'Sting',
    manufacturer: 'Sting',
    desc: 'Get Energized',
    quantity: '250 ml',
    price: 18,
    before: 20,
    off: 5,
  },
  {
    id: 2,
    image:
      'https://www.veggycation.com.au/siteassets/veggycationvegetable/coriander-leaves.jpg',
    name: '7 Up Lemon',
    manufacturer: null,
    quantity: '250 ml',
    price: 20,
    before: null,
    off: null,
  },
  {
    id: 3,
    image:
      'https://www.veggycation.com.au/siteassets/veggycationvegetable/coriander-leaves.jpg',
    name: 'Goli Soda (Lemond)',
    manufacturer: null,
    quantity: '250 ml',
    price: 20,
    before: 25,
    off: null,
  },
  {
    id: 3,
    image:
      'https://www.veggycation.com.au/siteassets/veggycationvegetable/coriander-leaves.jpg',
    name: 'Goli Soda (Lemond)',
    manufacturer: null,
    quantity: '250 ml',
    price: 20,
    before: 25,
    off: null,
  },
  {
    id: 3,
    image:
      'https://www.veggycation.com.au/siteassets/veggycationvegetable/coriander-leaves.jpg',
    name: 'Goli Soda (Lemond)',
    manufacturer: null,
    quantity: '250 ml',
    price: 20,
    before: 25,
    off: null,
  },
  {
    id: 3,
    image:
      'https://www.veggycation.com.au/siteassets/veggycationvegetable/coriander-leaves.jpg',
    name: 'Goli Soda (Lemond)',
    manufacturer: null,
    quantity: '250 ml',
    price: 20,
    before: 25,
    off: null,
  },
  {
    id: 4,
    image:
      'https://www.veggycation.com.au/siteassets/veggycationvegetable/coriander-leaves.jpg',
    name: 'Corriander',
    manufacturer: null,
    quantity: '2 pcs',
    price: 20,
    before: 25,
    off: null,
  },
]

export { products, banners }

export function HomeScreen() {

  const renderBanner = ({ item }) => (
    <Link href={`/category/${item.id}`}>
      <Banner
        border={false}
        mode="intrinsic"
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
    </Link>
  )
  return (
    <Container>
      <Topbar>
        <Link href='/location'>
          <Location>
            <Entypo name="location" size={FONTS.lg} color={COLORS.primary} />
            <LocationText>
              9-2-74/2/1, Engineer Ghayaaz, Muslim Basti
            </LocationText>
          </Location>
        </Link>
        <Notification>
          <NotificationIcon name="notifications-outline" />
          <NotificationCircle>
            <NotificationText>3</NotificationText>
          </NotificationCircle>
        </Notification>
      </Topbar>
      <WelcomeText>
        Welcome <ThemeColorText bold>Zeeshan Ali</ThemeColorText>
      </WelcomeText>
      <Link href='/search'>
        <FakeSearchBox>
          <FakeInput>Search</FakeInput>
          <SearchIcon name="md-search-outline" size={24} />
        </FakeSearchBox>
      </Link>
      <RenderBanners
        data={banners}
        renderItem={renderBanner}
        keyExtractor={(item: any) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      ></RenderBanners>
      <ShowcaseCarousel
        em={'You'}
        heading={'Hand Picked For'}
        products={products}
      />
      <Categories />

      <ShowcaseCarousel
        em={'You'}
        heading={'Hand Picked For'}
        products={products}
      />
      <ShowcaseCarousel
        em={'You'}
        heading={'Hand Picked For'}
        products={products}
      />
      <SpecialCarousel />

      <ShowcaseCarousel
        em={'You'}
        heading={'Hand Picked For'}
        products={products}
      />
    </Container>
  )
}
