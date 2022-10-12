import { logEvent } from 'firebase/analytics';
import { analytics } from '../pages/_app';

const TroberLogger = async (event: string, params?: object) => {
  try {
    if (params) {
      await logEvent(analytics, event, params);
    } else {
      await logEvent(analytics, event);
    }
  } catch (e) {
    console.log(e);
  }
};

export default TroberLogger;
