import { useMemo } from "react";
import Svg, {Path, Circle} from 'react-native-svg'
export const AboutNavIcon = ({focused}) => {
    const fillColor = useMemo(() => focused? '#fff': '#85A7F2', [focused]);
    const bgColor = useMemo(() => focused? '#446DC9': '#fff', [focused])
    return(
        <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <Circle cx="13" cy="13" r="13" fill={fillColor}/>
            <Path d="M14.104 9.92764V18.9091H11.9043V9.92764H14.104ZM11.7548 7.57852C11.7548 7.25202 11.8655 6.98087 12.0869 6.76505C12.3138 6.54922 12.6181 6.44131 13 6.44131C13.3818 6.44131 13.6834 6.54922 13.9048 6.76505C14.1316 6.98087 14.2451 7.25202 14.2451 7.57852C14.2451 7.89949 14.1316 8.16788 13.9048 8.3837C13.6834 8.59952 13.3818 8.70743 13 8.70743C12.6181 8.70743 12.3138 8.59952 12.0869 8.3837C11.8655 8.16788 11.7548 7.89949 11.7548 7.57852Z" fill={bgColor}/>
        </Svg>

    )
}
