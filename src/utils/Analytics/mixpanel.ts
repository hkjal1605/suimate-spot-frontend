import mixpanel from 'mixpanel-browser';

class MixpanelAnalytics {
  constructor() {
    mixpanel.init('cc11e0c94e44fc794e9d212ec8cebf3f', {
      debug: true,
      track_pageview: true,
      persistence: 'localStorage'
    });
  }

  identify(address: string) {
    mixpanel.identify(address);
  }

  track(eventName: string, data?: any) {
    mixpanel.track(eventName, data);
  }
}

const mixpanelAnalytics = new MixpanelAnalytics();
export default mixpanelAnalytics;
