import { expect, test, vi } from 'vitest'
import { App } from '@stratox/core';
import routes from './routes-ajax';

// Fetch mock
global.fetch = vi.fn((url) => {
  if (url.indexOf("/slug") === 0) {
    return Promise.resolve({
        json: () => Promise.resolve({ key: url }),
    });
  }
  return Promise.reject(new Error('Not Found'));
});

const app = new App({
  request: {
    dataType: "json",
    url: "/slug-1",
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

const result = await new Promise((resolve) => {
  app.setup("#app").mount(
    routes, app.serverParams("path"), async (response, http) => {
      resolve(http.response.id);
    }
  );
});


