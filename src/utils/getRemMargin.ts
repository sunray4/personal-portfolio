interface GetRemMarginParams {
    sunScale: number;
    sunMargin: number;
    sunElement: SVGGElement | null;
    pathElement: SVGGElement | null;
}

export const getRemMargin = (params: GetRemMarginParams) => {
    const { sunScale, sunMargin, sunElement, pathElement } = params;

    if (!sunElement) {
      console.log("Sun element not found");
      return 0;
    }
    if (!pathElement) return 0;

    const pathLength = (pathElement as SVGPathElement).getTotalLength();

    const sunBBox = sunElement.getBBox();
    const sunHeightSvg = sunBBox.height * sunScale * sunMargin;
    const sunWidthSvg = sunBBox.width * sunScale * sunMargin;
    
    // The path is in SVG coordinate space, and goes from x=55 to x=1440, so max x is 1440
    const pathMaxX = 1440;
    const xTarget = pathMaxX - sunWidthSvg / 2; 
    let yResult = 0;

    // binary search along the path's length
    let start = 0;
    let end = pathLength;

    while (start <= end) {
        const mid = (start + end) / 2;
        const point = (pathElement as SVGPathElement).getPointAtLength(mid);

        if (Math.abs(point.x - xTarget) < 0.01) {
            yResult = point.y;
            break;
        } else if (point.x < xTarget) {
            start = mid + 0.01;
        } else {
            end = mid - 0.01;
        }
    }
    console.log("calculated y at x target:", yResult);
    console.log("sun height svg:", sunHeightSvg);
    console.log("sun width svg:", sunWidthSvg);
    
    // Top margin of sun travel path is distance from center of sun to y-coordinate of the sun's final position
    const margin = sunHeightSvg / 2 - yResult;
    
    // Convert to rem (removed the extra /2 division)
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const marginRem = margin / rootFontSize;

    console.log("sun margin (SVG units):", margin);
    console.log("sun margin (rem):", marginRem);

    return marginRem;
  };