import axios from 'axios';
import Vue from 'vue';
import FlashMessage from '@smartweb/vue-flash-message';
//import 'vue-flash-message/dist/vue-flash-message.min.css';

Vue.use(FlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true
  }
});

const vm = new Vue();
const baseURL = 'http://localhost:3000/fighters/';

const handleError = fn => (...params) =>
  fn(...params).catch(error => {
      console.log(error)
    vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error');
  });

export const api = {
  getfighter: handleError(async id => {
      console.log(id)
    const res = await axios.get(baseURL + id);
    return res.data;
  }),
  getfighters: handleError(async () => {
    const res = await axios.get(baseURL);
    return res.data;
  }),
  get_top_10: handleError(async div => {
      const res = await axios.get(baseURL + 'top-10-' + div);
      return res.data
  }),
  deletefighter: handleError(async id => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  }),
  createfighter: handleError(async payload => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  }),
  updatefighter: handleError(async payload => {
    const res = await axios.put(baseURL + payload._id, payload);
    return res.data;
  })
};
