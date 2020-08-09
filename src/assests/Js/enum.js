const ENUM = Object.freeze({
  PATTERN: {//eslint-disable-next-line
      TEXT: '[a-zA-Z0-9\s]+', //eslint-disable-next-line
      REMOVE_SPECIAL_CHARS: /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, //eslint-disable-next-line
      REPLACE_SPECIAL_NUMS: /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/0-9]/gi, //eslint-disable-next-line
      REMOVE_DOUBLE_SPACE_ADD_SPACE: /\s\s+/g, //eslint-disable-next-line
      ALLOW_ALPHABETS_ONLY: /^[a-zA-Z \s]+$/, //eslint-disable-next-line
      UMBERS_ONLY: /^[0-9\b]+$/, //eslint-disable-next-line
      REMOVE_HTML_TAG: /(<([^>]+)>)/ig,
  }
})
export default ENUM;