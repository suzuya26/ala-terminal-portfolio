import cv from '../data/cv.json';

export function filterDataByCommand(command) {
  return cv.filter(item => item.command === command);
}