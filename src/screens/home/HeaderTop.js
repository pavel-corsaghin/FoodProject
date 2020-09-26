import React from 'react'
import Block from '../../components/Block'
import Button from '../../components/Button'
import TextView from '../../components/TextView'

import Feather from 'react-native-vector-icons/Feather'
import COLORS from '../../assets/colors'
const HeaderTop = ({title, moreTitle, moreIcon}) => {
  return (
    <Block direction="row" justifyContent="space-between">
      <TextView bold h6>
        {title}
      </TextView>
      <Button>
        <Block direction="row" middle>
          <Feather size={18} color={COLORS.orange} name={moreIcon} />
          <TextView color={COLORS.orange}>
            {'  '}
            {moreTitle}
          </TextView>
        </Block>
      </Button>
    </Block>
  )
}

export default HeaderTop
