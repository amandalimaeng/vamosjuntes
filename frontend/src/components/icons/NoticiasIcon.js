import React from 'react';
import theme from 'theme';

/**
 * Envelope (message) icon
 *
 * @param {string} width
 * @param {string} color
 */
export const NoticiasIcon = ({ width, color }) => {
  const DEFAULT_WIDTH = '18';
  const DEFAULT_COLOR = theme.colors.text.secondary;

  return (
    <svg
    width={width || DEFAULT_WIDTH}
    fill={theme.colors[color] || DEFAULT_COLOR}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512.001 512.001"
  > <path d="M425.5,181.3V21.8L392.8,0l-24.5,16.3L343.8,0l-24.5,16.3L294.8,0l-24.5,16.3L245.8,0l-24.5,16.3L196.8,0l-24.5,16.3
  L147.8,0l-24.5,16.3L98.8,0L74.3,16.3L49.8,0L17.2,21.8v445.4c0,22.5,18.3,40.8,40.8,40.8h392c22.5,0,40.8-18.3,40.8-40.8V181.3
  H425.5z M58,491.7c-13.5,0-24.5-11-24.5-24.5V30.5l16.3-10.9L74.3,36l24.5-16.3L123.3,36l24.5-16.3L172.3,36l24.5-16.3L221.3,36
  l24.5-16.3L270.3,36l24.5-16.3L319.3,36l24.5-16.3L368.3,36l24.5-16.3l16.3,10.9v150.8v285.8c0,9.2,3.2,17.7,8.4,24.5H58z
   M474.5,467.2c0,13.5-11,24.5-24.5,24.5s-24.5-11-24.5-24.5V197.7h49V467.2z"/></svg>
  );
};
