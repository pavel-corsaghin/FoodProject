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
import categories from '../../mocks/categories.json'

const W = Dimensions.get('window').width / 4
const style = StyleSheet.create({
  img: {
    width: W,
    height: (W * 9) / 16,
    borderRadius: 8,
  },
})

const TopCategories = () => {
  const renderItem = ({ item }) => {
    return (
      <Button padding={5}>
        <Image style={style.img} source={{ uri: item.image }} />
        <TextView padding={8} center>
          {item.name}
        </TextView>
      </Button>
    )
  }

  return (
    <Block padding={10}>
      <HeaderTop moreIcon="filter" title="Top Categories" moreTitle="Filter" />
      <FlatList
        style={{ marginTop: 10 }}
        horizontal
        keyExtractor={item => item.id}
        data={categories}
        renderItem={renderItem}
      />
    </Block>
  )
}

export default TopCategories
