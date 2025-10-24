interface CalculateSafeEndpointParams {
    sunScale: number;
    sunMargin: number;
    sunElement: SVGGElement | null;
    pathElement: SVGGElement | null;
}

// Calculate the maximum safe endpoint for the sun based on viewport
export const calculateSafeEndpoint = ({sunScale, sunMargin, sunElement, pathElement}: CalculateSafeEndpointParams) => {
    
    if (!sunElement) return 0;
    
    const sunBBox = sunElement.getBBox();

    const sunRadius = Math.max(sunBBox.width * sunScale, sunBBox.height * sunScale) / 2;

    console.log("sun radius:", sunRadius);
    console.log("sun width:", sunBBox.width * sunScale);
    console.log("sun height:", sunBBox.height * sunScale);

    if (!pathElement) return 0;
    
    const pathLength = (pathElement as SVGPathElement).getTotalLength();
    
    // Binary search to find the maximum safe endpoint
    let low = 0;
    let high = 1;
    let safeEnd = 0;
    
    for (let i = 0; i < 20; i++) {
    const mid = (low + high) / 2;
    const point = (pathElement as SVGPathElement).getPointAtLength(pathLength * (1 - mid));

    const margin = sunRadius * sunMargin;
    const isInBounds =
        point.x - margin >= 0 &&
        point.x + margin <= window.innerWidth &&
        point.y - margin >= -sunRadius &&
        point.y + margin <= window.innerHeight;
    
    if (isInBounds) {
        safeEnd = mid;
        high = mid;
    } else {
        low = mid;
    }
    }
    console.log("calculated safe end:", safeEnd);
    return safeEnd;
};