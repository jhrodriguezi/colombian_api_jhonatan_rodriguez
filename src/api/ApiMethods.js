const getHeaders = () => {
  return {
    "Content-Type": "application/json",
  };
};

const BASE_URL = "https://api-colombia.com/api/v1/";

class ApiMethods {
  static apiRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
      url = BASE_URL + url;
      if (body !== null) {
        fetch(url, { method, headers: getHeaders() })
          .then((res) => res.json())
          .then(resolve)
          .catch(reject);
      } else {
        fetch(url, { method, headers: getHeaders() })
          .then((res) => res.json())
          .then(resolve)
          .catch(reject);
      }
    });
  }

  static get(url) {
    return this.apiRequest("GET", url);
  }
}

export default ApiMethods;
