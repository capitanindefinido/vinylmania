import Svg, { Path } from 'react-native-svg'
import { theme } from '../configs/theme'

export const Diamond = props => (
  <Svg width={21} height={18} fill='none' {...props}>
    <Path
      fill={theme.colors.black}
      d='M20.225 6.21 16.096.9a2.349 2.349 0 0 0-1.84-.9H6.455a2.35 2.35 0 0 0-1.84.9L.49 6.21a2.334 2.334 0 0 0 .19 3.078l8.028 8.03a2.33 2.33 0 0 0 3.295 0l8.03-8.03a2.335 2.335 0 0 0 .192-3.079Z'
    />
  </Svg>
)
