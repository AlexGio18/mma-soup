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
  searchfighter: handleError(async text => {
      console.log(text)
      const res = await axios.get(baseURL+ 'search/' + text);
      return res.data
  }),
  deletefighter: handleError(async id => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  }),
  createfighter: handleError(async payload => {
    const new_fighter = {}
    for (var k in payload) {
      new_fighter[k] = payload[k].value
    }

    new_fighter['professional_record'] = []
    new_fighter['amateur_record'] = []
    console.log(new_fighter)
    const res = await axios.post(baseURL, new_fighter);
    return res.data;
  }),
  updatefighter: handleError(async (id, payload) => {
    const updates = {}
    for (var k in payload) {
        updates[k] = payload[k].value
    }
    const res = await axios.put(baseURL + id, updates);
    return res.data;
  })
};
