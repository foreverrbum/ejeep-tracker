import Svg, { Path } from 'react-native-svg'

export const Bus = ({ line }) => {
	const fill = line === 'a' ? '#EAB95A' : '#8F7D40'
	return (
		<Svg width="18" height="16" viewBox="0 0 18 16" fill="none">
			<Path
				d="M2.0769 2.78261C2.0769 1.24582 3.31673 0 4.84613 0H13.1538C14.6832 0 15.9231 1.24582 15.9231 2.78261V12.5217C15.9231 13.2901 15.3031 13.913 14.5384 13.913H3.46152C2.69682 13.913 2.0769 13.2901 2.0769 12.5217V2.78261Z"
				fill={fill}
			/>
			<Path
				d="M3.46143 13.9131H6.23066V15.3044C6.23066 15.6886 5.9207 16 5.53835 16H4.15373C3.77138 16 3.46143 15.6886 3.46143 15.3044V13.9131Z"
				fill={fill}
			/>
			<Path
				d="M11.7693 13.9131H14.5385V15.3044C14.5385 15.6886 14.2286 16 13.8462 16H12.4616C12.0792 16 11.7693 15.6886 11.7693 15.3044V13.9131Z"
				fill={fill}
			/>
			<Path d="M3.46143 2.08691H14.5383V8.34778H3.46143V2.08691Z" fill="white" />
			<Path
				d="M5.53835 11.4783C5.53835 12.0546 5.07341 12.5218 4.49989 12.5218C3.92636 12.5218 3.46143 12.0546 3.46143 11.4783C3.46143 10.902 3.92636 10.4348 4.49989 10.4348C5.07341 10.4348 5.53835 10.902 5.53835 11.4783Z"
				fill="white"
			/>
			<Path
				d="M14.5383 11.4783C14.5383 12.0546 14.0734 12.5218 13.4999 12.5218C12.9264 12.5218 12.4614 12.0546 12.4614 11.4783C12.4614 10.902 12.9264 10.4348 13.4999 10.4348C14.0734 10.4348 14.5383 10.902 14.5383 11.4783Z"
				fill="white"
			/>
			<Path
				d="M0 4.86948C0 4.48528 0.309957 4.17383 0.692308 4.17383H1.38462V7.65209H0.692308C0.309957 7.65209 0 7.34064 0 6.95644V4.86948Z"
				fill={fill}
			/>
			<Path
				d="M18 6.95645C18 7.34065 17.69 7.6521 17.3077 7.6521L16.6154 7.6521L16.6154 4.17384L17.3077 4.17384C17.69 4.17384 18 4.48529 18 4.86949L18 6.95645Z"
				fill={fill}
			/>
			<Path d="M1.38452 4.17383H2.07683V4.86948H1.38452V4.17383Z" fill={fill} />
			<Path d="M15.9231 4.17383H16.6154V4.86948H15.9231V4.17383Z" fill={fill} />
			<Path
				d="M9.09187 3.60054L7.96958 6.95652H7.18262L8.65377 3H9.15678L9.09187 3.60054ZM10.0303 6.95652L8.90257 3.60054L8.83496 3H9.34067L10.8199 6.95652H10.0303ZM9.97889 5.48641V6.07609H7.86681V5.48641H9.97889Z"
				fill={fill}
			/>
		</Svg>
	)
}
