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
export const CONTACT_CONSTANTS = Object.freeze({
  URLS: {
    INSTAGRAM: `${URLS.INSTAGRAM}${ARTIST.INSTAGRAM}`,
    CONTACT_US: '#'
  }
});
