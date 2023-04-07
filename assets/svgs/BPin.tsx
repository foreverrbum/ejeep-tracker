import Svg, { Path } from 'react-native-svg'

export const BPin = ({ fill }) => {
	return (
		<Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
			<Path d="M14.1818 0H5.81818L0 5.81818V14.1818L5.81818 20H14.1818L20 14.1818V5.81818L14.1818 0Z" fill={fill} />
			<Path
				d="M13.68 1.20001H6.31995L1.19995 6.32001V13.68L6.31995 18.8H13.68L18.8 13.68V6.32001L13.68 1.20001Z"
				fill="white"
			/>
			<Path
				d="M12.8436 3.20001H7.15631L3.19995 7.15638V12.8436L7.15631 16.8H12.8436L16.8 12.8436V7.15638L12.8436 3.20001Z"
				fill={fill}
			/>
		</Svg>
	)
}
