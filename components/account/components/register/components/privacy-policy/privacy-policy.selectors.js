import DOMPurify from 'dompurify';
import get from 'lodash/get';
import { ALLOWED_TAGS, ALLOWED_ATTR } from './privacy-policy.constants';

export const getPrivacyPolicyData = ({ privacyPolicyReducer }) =>
  DOMPurify.sanitize(
    get(privacyPolicyReducer, 'privacyPolicyDetails.media', ''),
    {
      ALLOWED_TAGS,
      ALLOWED_ATTR
    }
  );
