import {
  ITEMS_PER_CONTAINER,
  SLIDE_CONTAINER_SIZE
} from '../constants/paperConstants';

export default function getCarouselIndex(paperLength) {
  const totalItems = paperLength;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_CONTAINER) - 1;

  const lastIndexOfCarousel = -(totalPages * SLIDE_CONTAINER_SIZE);

  return lastIndexOfCarousel;
}
