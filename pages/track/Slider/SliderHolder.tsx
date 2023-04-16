import React, { useState } from 'react'
import { Slider } from './Slider'
import { CollapsedSlider } from './CollapsedSlider'
import { FakeSlider } from './FakeSlider'

export const SliderHolder = () => {
	const [ignoreRegion, handleIgnoreRegion] = useState({ x: 0, y: 0, width: 0, height: 0 })
	const [expand, handleExpand] = useState(false)

	if (expand === false) return <CollapsedSlider expand={expand} handleExpand={handleExpand} />

	return ignoreRegion.width === 0 ? (
		<FakeSlider handleIgnoreRegion={handleIgnoreRegion} expand={expand} handleExpand={handleExpand} />
	) : (
		<Slider ignoreRegion={ignoreRegion} expand={expand} handleExpand={handleExpand} />
	)
}
