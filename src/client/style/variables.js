const colours = {
  pos: '#00cc66',
  neg: '#ff6347',

  q0: '#9d9d9d',
  q1: '#ffffff',
  q2: '#a5ff99',
  q3: '#4980f8',
  q4: '#bf72f3',
  q5: '#ffa64d',
  q6: '#99ebff',
  q7: '#ffcc00',

  mainLight: '#373e48',
  mainDark: '#21252b',
  mainGrey: '#333',
  barGrey: '#444'
}

const sizing = {
  browsePadding: 4,
  itemListPadding: 1.5,
  itemHeight: 5,
  navBarHeight: 7.5,
  pagePadding: 5
}

const zIndex = {
  navBar: 1
}

export default {
  ...colours,
  ...sizing,
  ...zIndex
}
