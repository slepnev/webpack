import * as $ from 'jquery'


function createAnalytics(): Object {
  let counter = 0;
  let isDestroyed: boolean = false;

  const listener = (): number => counter++;

  $(document).on('click', listener);

  return {
    destroy() {
      $(document).off('click', listener);
      isDestroyed = true;
    },
    getClicks() {
      if (isDestroyed) {
        return 'Analytics is destroyed';
      }
      return counter;
    }
  };
}

(<any>window).analytics = createAnalytics();
