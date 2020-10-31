/**
 * General
 */
export const IMAGE_NOT_FOUND = 'Image not found';
export const LEFT_ARROW = '<';
export const RIGHT_ARROW = '>';

/**
 * URLs
 */
const PROTOCOLS = {
  HTTPS: 'https://'
};
const URLS = {
  INSTAGRAM: `${PROTOCOLS.HTTPS}instagram.com/`
};

/**
 * Artist
 */
export const ARTIST = Object.freeze({
  TITLE: 'B de la Fuente Art',
  INSTAGRAM: 'bdelafuente_art',
  DESCRIPTION: ['dibujo', 'pintura', 'ilustración']
});

/**
 * Contact
 */
export const CONTACT = Object.freeze({
  URLS: {
    INSTAGRAM: `${URLS.INSTAGRAM}${ARTIST.INSTAGRAM}`,
    CONTACT_US: '#'
  }
});
