import { expect, test } from 'vitest'
import { Router, Dispatcher } from '@stratox/pilot';

const router = new Router();
const layoutTestValue = "TheLayoutViewHasLoaded";

function myComponentPartial({ props }) {
  const { output } = this.partial(({ props }) => props.test, props);
  return output;
}

function myComponent({ props, dispatch, http, view, services }) {
  const { output } = this.partial(myComponentPartial, props);
  const { output: outputBlock } = this.block(({ props }) => props.test, props);

  test('The dispatch is instance of Dispatcher', () => {
    expect(dispatch instanceof Dispatcher).toBe(true);
  });

  test('Test partial output', () => {
    expect(output).toBe(layoutTestValue);
  });

  test('Test block output', () => {
    expect(outputBlock.length > 30).toBe(true);
  });
  
  if(!services.has("test")) {
    services.set("test", "hasService");
  }

  return output;
}

function myComponentStates({ state }) {
  
  state.set("test", "stateTest");
  if(state.get("test") === "stateTest") {
    state.update("test", "stateTestUpdated");
  }

  test('Has state', () => {
    expect(state.get("test")).toBe("stateTestUpdated");
  });
  
  return layoutTestValue;
}

router.get('/', function({ http, dispatch, services }) {


  test('HTTP status OK', () => {
    expect(http.status).toBe(200);
  });

  this.layout(myComponent, { test: layoutTestValue });

  test('Has service', () => {
    expect(services.has("test")).toBe(true);
    if(services.has("test")) {
      expect(services.get("test")).toBe("hasService");
    }
  });


  dispatch.navigateTo("/test", { test: "lorem" });

  return this;
});

router.get('/test', function({ request, dispatch }) {
  test('HTTP Get request', () => {
    expect(request.get.get("test")).toBe("lorem");
  });
  this.layout(myComponentPartial, { test: layoutTestValue });
  dispatch.navigateTo("/test-state");
  return this;
});

router.get('/test-state', function({ request, dispatch, state }) {
  this.layout(myComponentStates, { test: layoutTestValue });
  dispatch.navigateTo("/404");
  return this;
});


// Will handle 404 and 405 HTTP Status errors codes
// Not required you can also handle it directly in the dispatcher
router.get('[STATUS_ERROR]', function({ http }) {
  test('HTTP status not found', () => {
    expect(http.status).toBe(404);
  });
  return "404";
});

export default router;
