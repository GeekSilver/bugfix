// cookie specific functions

// set cookie
export const setCookie = (cname, cvalue, exdays, path) => {
  let d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie =
    cname + "=" + cvalue + ";" + expires + ";path=" + path + ";";
};

// get cookie
export const getCookie = (cname) => {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

// check cookie if is set
export const checkCookie = (cname) => {
  let user = getCookie(cname);
  if (user !== "") {
    return true;
  } else {
    return false;
  }
};

// delete cookie
export const deleteCookie = (cname, path) => {
  document.cookie =
    cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + path + ";";
};
