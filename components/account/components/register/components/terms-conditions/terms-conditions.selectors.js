import DOMPurify from 'dompurify';
import get from 'lodash/get';
import { ALLOWED_TAGS, ALLOWED_ATTR } from './terms-conditions.constants';

export const getTermsConditionsData = ({ termsConditionsReducer }) =>
  DOMPurify.sanitize(
    get(termsConditionsReducer, 'termsConditionsDetails.media', ''),
    {
      ALLOWED_TAGS,
      ALLOWED_ATTR
    }
  );
