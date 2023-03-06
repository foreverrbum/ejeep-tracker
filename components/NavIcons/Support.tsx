import { useMemo } from "react";
import Svg, {Path} from 'react-native-svg'

export const SupportNavIcon = ({focused}) => {
    const fillColor = useMemo(() => focused? '#fff': '#85A7F2', [focused]);
    const bgColor = useMemo(() => focused? '#446DC9': '#fff', [focused])
    return(
        <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <Path d="M0 3.55028C0 1.58952 1.58735 0 3.54545 0H22.4545C24.4126 0 26 1.58952 26 3.55028V17.7514C26 19.7122 24.4126 21.3017 22.4545 21.3017H3.54545C1.58735 21.3017 0 19.7122 0 17.7514V3.55028Z" fill={fillColor}/>
            <Path d="M13.7357 12.7802H11.667C11.6728 12.2544 11.716 11.8036 11.7968 11.428C11.8834 11.0524 12.0248 10.7144 12.221 10.4139C12.4172 10.1077 12.6826 9.79563 13.0173 9.47782C13.2827 9.22934 13.5193 8.99531 13.7271 8.77573C13.9406 8.55037 14.1079 8.31635 14.2291 8.07365C14.3503 7.82518 14.4109 7.54492 14.4109 7.23289C14.4109 6.8804 14.3532 6.5857 14.2378 6.34878C14.1281 6.11187 13.9637 5.93273 13.7444 5.81139C13.5309 5.68426 13.2626 5.6207 12.9394 5.6207C12.6739 5.6207 12.4229 5.67559 12.1863 5.78538C11.9497 5.89517 11.7593 6.06564 11.615 6.29678C11.4708 6.52214 11.3929 6.81684 11.3813 7.18088H9.08752C9.10484 6.4239 9.28372 5.79405 9.62419 5.29133C9.96466 4.78282 10.4234 4.40433 11.0005 4.15586C11.5775 3.90161 12.2238 3.77448 12.9394 3.77448C13.73 3.77448 14.4051 3.90739 14.9649 4.1732C15.5304 4.43323 15.9603 4.8146 16.2546 5.31733C16.5547 5.82006 16.7047 6.42679 16.7047 7.13754C16.7047 7.64605 16.6066 8.10254 16.4104 8.50704C16.2142 8.90575 15.9545 9.27846 15.6314 9.62517C15.3082 9.97187 14.9591 10.3215 14.584 10.674C14.2551 10.9687 14.0329 11.2836 13.9175 11.6187C13.8021 11.9539 13.7415 12.341 13.7357 12.7802ZM11.4506 15.4758C11.4506 15.1291 11.566 14.8402 11.7968 14.6091C12.0334 14.3779 12.3508 14.2624 12.749 14.2624C13.1471 14.2624 13.4616 14.3779 13.6925 14.6091C13.9291 14.8402 14.0474 15.1291 14.0474 15.4758C14.0474 15.811 13.9291 16.0941 13.6925 16.3253C13.4616 16.5564 13.1471 16.672 12.749 16.672C12.3508 16.672 12.0334 16.5564 11.7968 16.3253C11.566 16.0941 11.4506 15.811 11.4506 15.4758Z" fill={bgColor}/>
            <Path d="M2.23851 24.3971L3.99649 19.7027C4.16946 19.2408 4.61042 18.9348 5.10306 18.9348H12.721C13.9681 18.9348 14.3649 20.6183 13.2495 21.1767L3.8736 25.8711C2.91288 26.3521 1.86136 25.4042 2.23851 24.3971Z" fill={fillColor}/>
        </Svg>


    )
}
