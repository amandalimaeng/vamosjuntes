import React from 'react';
import theme from 'theme';

/**
 * Envelope (message) icon
 *
 * @param {string} width
 * @param {string} color
 */
export const AppsIcon = ({ width, color }) => {
  const DEFAULT_WIDTH = '18';
  const DEFAULT_COLOR = theme.colors.text.secondary;

  return (
    <svg
    width={width || DEFAULT_WIDTH}
    fill={theme.colors[color] || DEFAULT_COLOR}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512.001 512.001"
  >
<path d="m332 417.964844c68.382812-14.03125 120-75.042969 120-147.964844v-1.507812c34.191406-6.96875 60-37.273438 60-73.492188 0-41.355469-33.644531-75-75-75s-75 33.644531-75 75c0 36.21875 25.808594 66.523438 60 73.492188v1.507812c0 56.277344-38.300781 103.703125-90 117.171875v-387.171875h-332v512h332zm60-222.964844c0-24.8125 20.1875-45 45-45s45 20.1875 45 45-20.1875 45-45 45-45-20.1875-45-45zm-211 75v-1.054688c51.371094-7.242187 91-51.089843 91-103.945312v-45h-61v30h31v15c0 41.355469-34.09375 75-76 75s-76-33.644531-76-75v-15h30v-30h-60v45c0 52.855469 39.628906 96.703125 91 103.945312v1.054688c0 49.445312 23.957031 93.164062 61.074219 121h-182.074219v-301h272v301c-66.71875 0-121-54.28125-121-121zm121-240v30h-272v-30zm0 452h-272v-61h121v30h30v-30h121zm0 0"/><path d="m422 180h30v30h-30zm0 0"/><path d="m511.21875 30.78125c-19.851562-19.847656-46.210938-30.78125-74.21875-30.78125s-54.367188 10.933594-74.21875 30.78125l21.214844 21.214844c14.183594-14.183594 33.007812-21.996094 53.003906-21.996094s38.820312 7.8125 53.003906 21.996094zm0 0"/><path d="m405.167969 73.222656 21.265625 21.15625c2.8125-2.824218 6.5625-4.378906 10.566406-4.378906s7.753906 1.554688 10.566406 4.378906l21.265625-21.15625c-8.480469-8.527344-19.785156-13.222656-31.832031-13.222656s-23.351562 4.695312-31.832031 13.222656zm0 0"/>

    
     </svg>
  );
};