import React, { useState } from 'react'
import { Slider } from './Slider'
import { CollapsedSlider } from './CollapsedSlider'
import { FakeSlider } from './FakeSlider'

export const SliderHolder = ({ jeeps, handleSelectedJeepIdx }) => {
	const [ignoreRegion, handleIgnoreRegion] = useState({ x: 0, y: 0, width: 0, height: 0 })
	const [originFocus, handleOriginFocus] = useState(false)
	const [destinationFocus, handleDestinationFocus] = useState(false)
	const [expand, handleExpand] = useState(false)
	const [origin, handleOrigin] = useState(null)
	const [destination, handleDestination] = useState(null)

	if (expand === false)
		return (
			<CollapsedSlider
				expand={expand}
				handleExpand={handleExpand}
				handleOriginFocus={handleOriginFocus}
				handleDestinationFocus={handleDestinationFocus}
				origin={origin}
				destination={destination}
				handleOrigin={handleOrigin}
				handleDestination={handleDestination}
			/>
		)

	return ignoreRegion.width === 0 ? (
		<FakeSlider handleIgnoreRegion={handleIgnoreRegion} expand={expand} handleExpand={handleExpand} />
	) : (
		<Slider
			ignoreRegion={ignoreRegion}
			expand={expand}
			handleExpand={handleExpand}
			originFocus={originFocus}
			handleOriginFocus={handleOriginFocus}
			destinationFocus={destinationFocus}
			handleDestinationFocus={handleDestinationFocus}
			jeeps={jeeps}
			handleSelectedJeepIdx={handleSelectedJeepIdx}
			origin={origin}
			destination={destination}
			handleOrigin={handleOrigin}
			handleDestination={handleDestination}
		/>
	)
}
