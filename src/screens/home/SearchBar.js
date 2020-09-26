import React from 'react'
import Block from '../../components/Block'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Feather from 'react-native-vector-icons/Feather'

const SearchBar = () => {
    return (
        <Block direction="row">
            <Button margin={4} color="#fff" padding={10} borderRadius={4} shadow>
                <Feather name="map-pin" size={20} />
            </Button>
            <Block
                margin={4}
                middle
                color="#fff"
                borderRadius={4}
                paddingHorizontal={8}
                block
                direction="row"
                shadow>
                <Block block>
                    <Input padding={10} placeholder={'Search for meals or area'} />
                </Block>
                <Feather name="search" size={20} />
            </Block>
        </Block>
    )
}

export default SearchBar
