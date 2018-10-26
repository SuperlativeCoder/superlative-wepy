


// import { getPrefix, formatUrlWithParams } from '../utils/url';

// import { CALL_API } from '../constants/symbols';
// import actionTypes from '../constants/actionTypes';

// export default store => next => (action) => {
//   console.log(store, next, action, '22222222')
//   // const callAPI = action[CALL_API];
//   // if (!callAPI) {
//   //   return next(action);
//   // }
//   // const currStore = store.getState();
//   // let success = () => {};
//   // let error = () => {};
//   // const { types, url } = callAPI;
//   // const method = callAPI.method || 'get'; // 请求方法 默认GET
//   // const params = callAPI.params || {}; // url中拼接的内容
//   // const headers = callAPI.headers || {}; // 额外的header 项
//   // const urlPreFix = getPrefix(method); // 根据请求方法拼接前缀
//   // const endpoint = url.startsWith('http') ? url : urlPreFix + formatUrlWithParams(url, params);
//   // let { responseCode } = callAPI;

//   // if (typeof responseCode === 'undefined') {
//   //   responseCode = 0;
//   // }

//   // const useTypes = Array.isArray(types) && types.length === 3;

//   // if (typeof url !== 'string') {
//   //   throw new Error('Specify a string endpoint URL');
//   // }

//   // function actionWith(data) {
//   //   return Object.assign({}, action, data);
//   // }

//   // // const csrfToken = state.security.csrf_token;
//   // const [requestType, successType, failureType] = types || [];

//   // const headerOptions = Object.assign({}, {
//   //   accept: 'application/json',
//   //   'Content-Type': 'application/json',
//   // }, headers);

//   // if (currStore.user.token) {
//   //   // headerOptions.authorization = `Bearer ${currStore.user.token}`;
//   // }
//   // headerOptions.authorization = 'Bearer 82520932-1c71-46ee-a8b0-b50faea4a180';

//   // const options = {
//   //   headers: headerOptions,
//   //   // credentials: 'include',
//   // };

//   // if (callAPI.method) {
//   //   options.method = method;
//   // }

//   // if (callAPI.headers && (typeof callAPI.headers === 'object')) {
//   //   Object.assign(options.headers, callAPI.headers);
//   // }


//   // if (callAPI.data) {
//   //   Object.assign(options, {
//   //     body: JSON.stringify(callAPI.data),
//   //   });
//   // }

//   // if (callAPI.success && typeof callAPI.success === 'function') {
//   //   success = callAPI.success;
//   // }

//   // if (callAPI.error && typeof callAPI.error === 'function') {
//   //   error = callAPI.error;
//   // }

//   // if (useTypes) {
//   //   next(actionWith({
//   //     type: requestType,
//   //     payload: callAPI.data || {},
//   //   }));
//   // }
//   // function hanndleErr(res) {
//   //   if (res.code === -101) {
//   //     next(actionWith({
//   //       type: actionTypes.LOG_OUT,
//   //     }));
//   //     return;
//   //   }
//   //   error(res);
//   //   notification.error({
//   //     message: `请求错误${res.code}`,
//   //     description: res.message,
//   //   });
//   //   if (useTypes) {
//   //     next(actionWith({
//   //       type: failureType,
//   //       payload: res,
//   //     }));
//   //   }
//   // }

//   // return fetch(endpoint, options)
//   //   .then((response) => {
//   //     let responseData = null;
//   //     try {
//   //       responseData = response.json();
//   //     } catch (e) {
//   //       console.log('request err', e);
//   //       // throw new JsonParseError(e.message);
//   //     }

//   //     return responseData;
//   //   })
//   //   .then((jsonResult) => {
//   //     const { code, result, extra } = jsonResult;
//   //     if (parseInt(code, 10) === parseInt(responseCode, 10)) {
//   //       if (useTypes) {
//   //         next(actionWith({
//   //           type: successType,
//   //           payload: result,
//   //           extraData: extra,
//   //           requestData: callAPI.data,
//   //         }));
//   //       }
//   //       success(result, extra, store.dispatch);
//   //     } else {
//   //       hanndleErr(jsonResult);
//   //     }
//   //   })
//   //   .catch((err) => {
//   //     hanndleErr(err);
//   //   });
// };
