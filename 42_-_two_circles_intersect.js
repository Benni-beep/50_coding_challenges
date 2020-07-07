// Create a function that will return a Boolean value indicating if two circles
// defined by center coordinates and radius are intersecting

// Um einander zu schneiden, muss der Abstand der beiden Mittelpunkte kleiner sein 
// als der Radius des einen Kreises und der Radius des anderen Kreises zusammen

// TODO: calculate points of intersection

const circle1 = {center: { x: 0, y: 0 }, radius: 1};
const circle2 = {center: { x: 0, y: 2 }, radius: 1};

function intersection(m1, r1, m2, r2) {
    const biggerCircleR = r1 > r2 ? r1 : r2;
    const smallerCircleR = r2 < r1 ? r2 : r1;

    const distanceM = Math.sqrt(Math.pow(m2.x - m1.x, 2) + Math.pow(m2.y - m1.y, 2));

    /** first checks, if smaller circle is completely inside bigger circle -> if true return false
     * then checks if distance between m1 and m2 is equal or smaller than sum of r1 and r2 
     *      -> circles intersect at TWO points if distance < r1+r2
     * *      -> circles intersect at ONE point if distance = r1+r2
     *      -> if true return true
    */
    return distanceM + smallerCircleR < biggerCircleR ? false : distanceM <= r1 + r2 ? true : false;
}


console.log(intersection(circle1.center, circle1.radius, circle1.center, circle2.radius))