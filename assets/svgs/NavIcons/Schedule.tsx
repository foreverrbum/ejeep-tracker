import { useMemo } from 'react'
import Svg, { Path } from 'react-native-svg'

export const ScheduleNavIcon = ({ focused }) => {
	const fillColor = useMemo(() => (focused ? '#fff' : '#85A7F2'), [focused])
	const bgColor = useMemo(() => (focused ? '#446DC9' : '#fff'), [focused])
	return (
		<Svg width="28" height="24" viewBox="0 0 28 24" fill="none">
			<Path
				d="M0 3.78947C0 1.69661 1.69661 0 3.78947 0H24C26.0929 0 27.7895 1.69661 27.7895 3.78947V20.2105C27.7895 22.3034 26.0929 24 24 24H3.78947C1.69661 24 0 22.3034 0 20.2105V3.78947Z"
				fill={fillColor}
			/>
			<Path d="M1.26318 5.05263H11.3684V10.1053H1.26318V5.05263Z" fill={bgColor} />
			<Path d="M1.26318 11.3684H11.3684V16.4211H1.26318V11.3684Z" fill={bgColor} />
			<Path
				d="M1.26318 17.6842H11.3684V22.7368H3.7895C2.39425 22.7368 1.26318 21.6058 1.26318 20.2105V17.6842Z"
				fill={bgColor}
			/>
			<Path d="M12.6316 5.05263H18.9474V10.1053H12.6316V5.05263Z" fill={bgColor} />
			<Path d="M12.6316 11.3684H18.9474V16.4211H12.6316V11.3684Z" fill={bgColor} />
			<Path d="M12.6316 17.6842H18.9474V22.7368H12.6316V17.6842Z" fill={bgColor} />
			<Path d="M20.2106 5.05263H26.5264V10.1053H20.2106V5.05263Z" fill={bgColor} />
			<Path d="M20.2106 11.3684H26.5264V16.4211H20.2106V11.3684Z" fill={bgColor} />
			<Path
				d="M20.2106 17.6842H26.5264V20.2105C26.5264 21.6058 25.3953 22.7368 24 22.7368H20.2106V17.6842Z"
				fill={bgColor}
			/>
		</Svg>
	)
}
