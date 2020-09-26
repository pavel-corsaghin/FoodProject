import React from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native'
import Block from '../../components/Block'
import Button from '../../components/Button'
import TextView from '../../components/TextView'
import HeaderTop from './HeaderTop'
import foodapp from '../../mocks/foodapp.json'

const W = Dimensions.get('window').width / 4
const style = StyleSheet.create({
  img: {
    width: W,
    height: W,
    borderRadius: 8,
  },
})

const PopularItems = () => {
  const renderItem = ({ item }) => {
    return (
      <Button margin={5} borderRadius={8} shadow padding={10} color={'#fff'}>
        <Block direction="row">
          <Image style={style.img} source={{ uri: item.image }} />
          <Block paddingHorizontal={8}>
            <Block block>
              <TextView size={16}>{item.name}</TextView>
              <TextView color="#AAAAAA">By {item.location}</TextView>
            </Block>
            <TextView size={16}>{item.price}</TextView>
          </Block>
        </Block>
      </Button>
    )
  }
  return (
    <Block padding={10}>
      <HeaderTop title="Popular Items" moreTitle="View all" />
      <FlatList
        style={{ marginTop: 10 }}
        horizontal data={foodapp}
        renderItem={renderItem}
      />
    </Block>
  )
}

export default PopularItems
