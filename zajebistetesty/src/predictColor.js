const COLOR_TYPES = {
    BLUE:  0,
    BLUE_RED: 1,
    BLUE_YELLOW: 2, 
    BLUE_GREEN: 3,
    RED: 4,
    RED_BLUE: 5,
    RED_YELLOW: 6, 
    RED_GREEN: 7,
    YELLOW: 8,
    YELLOW_BLUE: 9,
    YELLOW_RED: 10,
    YELLOW_GREE: 11,
    GREEN: 12,
    GREEN_BLUE: 13,
    GREEN_RED: 14,
    GREEN_YELLOW: 15 
}

const predictColor = (red, blue, green, yellow) => {
  if (blue > red && blue > green && blue > yellow) {
    return COLOR_TYPES.BLUE;
  }
  if (red > blue && red > green && red > yellow) {
    return COLOR_TYPES.RED;
  }
  if (green > red && green > blue && green > yellow) {
    return COLOR_TYPES.GREEN;
  }
  if (yellow > red && yellow > green && yellow > blue) {
    return COLOR_TYPES.YELLOW;
  }

  // RED EQUAL
  if (red === blue && red > yellow && red > green) {
    //RED_BLUE
    return COLOR_TYPES.RED;
  }

  if (red === yellow && red > blue && red > green) {
    //RED_YELLOW
    return COLOR_TYPES.RED;
  }

  if (red === green && red > yellow && red > blue) {
    //RED_GREEN
    return COLOR_TYPES.RED;
  }

  // BLUE EQUAL
  if (blue === green && blue > yellow && blue > red) {
    //BLUE_GREEN
    return COLOR_TYPES.BLUE;
  }

  if (blue === yellow && blue > green && blue > red) {
    //RED_YELLOW
    return COLOR_TYPES.RED;
  }

  // YELLOW EQUAL
  if (yellow === green && yellow > blue && yellow > red) {
    // GREEN_YELLOW
    return COLOR_TYPES.GREEN;
  }
};

export default predictColor;
