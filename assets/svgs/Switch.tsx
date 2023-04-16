import Svg, { Path, Rect, Circle } from 'react-native-svg'

export const Switch = () => {
	return (
		<Svg width="25" height="23" viewBox="0 0 25 23" fill="none">
			<Path
				d="M0 6.70833L6.73077 0L13.4615 6.70833V9.58333L7.69231 3.83333V23H5.76923V3.83333L0 9.58333V6.70833Z"
				fill="#446DC9"
			/>
			<Path
				d="M25 16.2917L18.2692 23L11.5385 16.2917L11.5385 13.4167L17.3077 19.1667L17.3077 1.23711e-06L19.2308 1.40467e-06L19.2308 19.1667L25 13.4167L25 16.2917Z"
				fill="#446DC9"
			/>
		</Svg>
	)
}
