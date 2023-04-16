export const isInsideRegion = (x, y, ignoreRegion) => {
	return (
		x >= ignoreRegion.x &&
		x <= ignoreRegion.x + ignoreRegion.width &&
		y >= ignoreRegion.y &&
		y <= ignoreRegion.y + ignoreRegion.height
	)
}
