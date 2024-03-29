import Svg, { Path } from 'react-native-svg'

export const Destination = ({ fill }) => {
	return (
		<Svg width="15" height="23" viewBox="0 0 15 23" fill="none">
			<Path
				d="M15 7.5C15 11.6421 7.5 23 7.5 23C7.5 23 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5Z"
				fill={fill}
			/>
			<Path
				d="M12 7.5C12 9.98528 9.98528 12 7.5 12C5.01472 12 3 9.98528 3 7.5C3 5.01472 5.01472 3 7.5 3C9.98528 3 12 5.01472 12 7.5Z"
				fill="white"
			/>
			<Path
				d="M10 7.5C10 8.88071 8.88071 10 7.5 10C6.11929 10 5 8.88071 5 7.5C5 6.11929 6.11929 5 7.5 5C8.88071 5 10 6.11929 10 7.5Z"
				fill={fill}
			/>
		</Svg>
	)
}
