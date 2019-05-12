const setTridentTimer = (prod, timer = {}) => {
  const TIMER_6HR = 21600000;
  const TIMER_DISPLAY_TIME_LIMIT = window.TIMER_DISPLAY_TIME_LIMIT || TIMER_6HR;
  const eventRemainingTime =
    timer.eventRemainingTime || prod.eventRemainingTime;
  if (
    TIMER_DISPLAY_TIME_LIMIT &&
    eventRemainingTime >= TIMER_DISPLAY_TIME_LIMIT
  ) {
    delete prod.eventStartTime;
    delete prod.eventExpiresAt;
    delete prod.eventRemainingTime;
    delete prod.eventFetchTime;
    return prod;
  }
  if (timer.eventStartTime) {
    prod.eventStartTime = timer.eventStartTime;
  }
  if (timer.eventExpiresAt) {
    prod.eventExpiresAt = timer.eventExpiresAt;
  }
  if (timer.eventRemainingTime) {
    prod.eventRemainingTime = timer.eventRemainingTime;
  }
  if (timer.eventFetchTime) {
    prod.eventFetchTime = timer.eventFetchTime;
  } else {
    prod.eventFetchTime = Date.now();
  }

  if (prod.eventStartTime && prod.eventRemainingTime) {
    prod.eventRemainingTimeInSec = parseInt(
      (prod.eventRemainingTime - (Date.now() - prod.eventFetchTime)) / 1000,
      10
    );
  }

  return prod;
};

export default setTridentTimer;
