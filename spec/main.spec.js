import { expect, test } from 'vitest'
import { App } from '@stratox/core';
import routes from './routes-main';
import Fields from '@/templates/Fields';


const app = new App({
  fields: Fields,
  request: {
    //dataType: "json",
    //url: "https://dummyjson.com/products",
    //startPath: "/1",
    config: {
      headers: {
        'Accept': 'application/json'
      }
    },
    get: function(searchParams) {
      searchParams.append("param", 1);
      return searchParams;
    },
    post: function(object) {
      object.param = 1;
      return object;
    }
  },
  ready: function(stratox) {

  }
});

let count = 0;


app.setup("#app").mount(routes, app.serverParams("path"), function(response, http) {

  let msg = (++count)+'. ';
  msg += (count > 1) ? "Next page response: OK" : "Start page response: OK";

  test(msg, () => {
    expect(response.indexOf('id=\"stratox')).toBe(5);
  });

  return `My Test `;
});


