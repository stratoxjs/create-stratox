import { expect, test, vi } from 'vitest'
import { Router, Dispatcher } from '@stratox/pilot';
import { StratoxFetch } from '@stratox/core';


function myComponent({ props, context }) {
  if(context.isLoading()) {
    return "";
  }
  test('fetch with component', () => {
    expect(props.key === '/slug-1').toBe(true);
  });
  return "OK";
}


const router = new Router();
router.get('/', function({ http, context, request }) {

  this.layout(myComponent, StratoxFetch.get("/slug-1"));

  test('Testing fetch API status', () => {
    expect(http.status).toBe(200);
  });

  test('HTTP GET Request', () => {
    expect(request.get.get("param")).toBe("1");
  });

  return this;

}, {
  url: "/slug-2",
});

export default router;
