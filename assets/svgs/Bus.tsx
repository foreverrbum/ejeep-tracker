import Svg, { Path } from 'react-native-svg'
import { LINE_A } from '../../constants/colors'

const BusB = () => {
	return (
		<Svg width="18" height="16" viewBox="0 0 18 16" fill="none">
			<Path
				d="M2.0769 2.78261C2.0769 1.24582 3.31673 0 4.84613 0H13.1538C14.6832 0 15.9231 1.24582 15.9231 2.78261V12.5217C15.9231 13.2901 15.3031 13.913 14.5384 13.913H3.46152C2.69682 13.913 2.0769 13.2901 2.0769 12.5217V2.78261Z"
				fill="#8F7D40"
			/>
			<Path
				d="M3.46143 13.9131H6.23066V15.3044C6.23066 15.6886 5.9207 16 5.53835 16H4.15373C3.77138 16 3.46143 15.6886 3.46143 15.3044V13.9131Z"
				fill="#8F7D40"
			/>
			<Path
				d="M11.7693 13.9131H14.5385V15.3044C14.5385 15.6886 14.2286 16 13.8462 16H12.4616C12.0792 16 11.7693 15.6886 11.7693 15.3044V13.9131Z"
				fill="#8F7D40"
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
				d="M0 4.86948C0 4.48528 0.309957 4.17383 0.692308 4.17383H1.38462V7.65209H0.692308C0.309957 7.65209 0 7.34063 0 6.95644V4.86948Z"
				fill="#8F7D40"
			/>
			<Path
				d="M18 6.95645C18 7.34065 17.69 7.6521 17.3077 7.6521L16.6154 7.6521L16.6154 4.17384L17.3077 4.17384C17.69 4.17384 18 4.48529 18 4.86949L18 6.95645Z"
				fill="#8F7D40"
			/>
			<Path d="M1.38452 4.17383H2.07683V4.86948H1.38452V4.17383Z" fill="#8F7D40" />
			<Path d="M15.9231 4.17383H16.6154V4.86948H15.9231V4.17383Z" fill="#8F7D40" />
			<Path
				d="M9.12718 5.19293H8.12117L8.11576 4.66576H8.97844C9.12628 4.66576 9.24977 4.64493 9.34893 4.60326C9.44809 4.56159 9.52291 4.50091 9.57339 4.4212C9.62568 4.34149 9.65182 4.24457 9.65182 4.13043C9.65182 4.00362 9.62748 3.90036 9.5788 3.82065C9.53193 3.74094 9.45801 3.68297 9.35705 3.64674C9.25608 3.6087 9.12808 3.58967 8.97303 3.58967H8.36185V6.95652H7.61816V3H8.97303C9.19659 3 9.39581 3.02174 9.57069 3.06522C9.74737 3.10688 9.89701 3.1721 10.0196 3.26087C10.1422 3.34964 10.2351 3.46105 10.2982 3.59511C10.3631 3.72917 10.3955 3.88859 10.3955 4.07337C10.3955 4.23641 10.3576 4.38678 10.2819 4.52446C10.208 4.66033 10.0935 4.77083 9.93848 4.85598C9.78523 4.94112 9.59052 4.99004 9.35434 5.00272L9.12718 5.19293ZM9.09473 6.95652H7.90212L8.21312 6.36956H9.09473C9.24256 6.36956 9.36426 6.34511 9.45981 6.2962C9.55717 6.24728 9.62928 6.18025 9.67616 6.09511C9.72483 6.00815 9.74917 5.90851 9.74917 5.7962C9.74917 5.67301 9.72754 5.56612 9.68427 5.47554C9.6428 5.38496 9.5761 5.31522 9.48415 5.2663C9.39401 5.21739 9.27501 5.19293 9.12718 5.19293H8.35374L8.35915 4.66576H9.34352L9.5139 4.86957C9.74106 4.87138 9.92586 4.91667 10.0683 5.00543C10.2125 5.0942 10.3189 5.20833 10.3874 5.34783C10.4559 5.48732 10.4902 5.63768 10.4902 5.79891C10.4902 6.05254 10.4352 6.2654 10.3252 6.4375C10.217 6.6096 10.0584 6.73913 9.84923 6.82609C9.6419 6.91304 9.3904 6.95652 9.09473 6.95652Z"
				fill="#8F7D40"
			/>
		</Svg>
	)
}
const BusA = ({ fill = LINE_A }) => {
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
export const Bus = ({ line }) => {
	return line === 'a' ? <BusA /> : <BusB />
}
