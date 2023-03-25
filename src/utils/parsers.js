export const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

 export const timeCounter = (time) => {
    if (time) {
      var date = new Date(Date.now() - time);
    var hours = date.getHours() - 3;
    var minutes = "0" + date.getMinutes();
    return hours + ":" + minutes.substr(-2);
    }
    return ""
  };