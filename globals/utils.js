export function isDevelopment() {
  return location.hostname.match(/^dev\./) || location.hostname.match(/^localhost/);
}

export function timeout(time, promise) {
  let timer = null;
  return Promise.race([
    promise,
    new Promise((resolve, reject) => {
      timer = setTimeout(() => reject('errors.timeout_error'), time);
    }),
  ]).then((result) => {
    clearTimeout(timer);
    return result;
  });
}

export function patience(time) {
  return promise => timeout(time, promise);
}

export function gql(strings, ...values) {
  let raw;
  if (typeof strings === 'string') {
    raw = [strings];
  } else {
    raw = strings.raw;
  }
  const resultArr = [];
  for (let i = 0; i < raw.length; i += 1) {
    resultArr.push(raw[i]);
    if (i < values.length) {
      resultArr.push(values[i]);
    }
  }
  return resultArr.join('').trim();
}

export default {
  isDevelopment,
  timeout,
  patience,
  gql,
};
