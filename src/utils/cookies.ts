/**
 * Writes data to a cookie.
 *
 * @param {string} name - The name of the cookie.
 * @param {T} data - The data to be stored in the cookie.
 * @param {number} [days] - Number of days until the cookie expires.
 * @returns {void}
 */
const writeToCookie = <T>(name: string, data: T, days?: number): void => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = `${name}=${encodeURIComponent(
    JSON.stringify(data)
  )}${expires}; path=/`;
};

/**
 * Reads data from a cookie.
 *
 * @param {string} name - The name of the cookie.
 * @returns {T | null} - The data retrieved from the cookie, or null if not found.
 */
const readFromCookie = <T>(name: string): T | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      return JSON.parse(
        decodeURIComponent(c.substring(nameEQ.length, c.length))
      );
    }
  }
  return null;
};

/**
 * Removes a cookie.
 *
 * @param {string} name - The name of the cookie.
 * @returns {void}
 */
const removeFromCookie = (name: string): void => {
  document.cookie = name + "=; Max-Age=-99999999;";
};

export { writeToCookie, readFromCookie, removeFromCookie };
