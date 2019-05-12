import get from 'lodash/get';

export const getEncId = props => get(props, 'match.params.encId');

export const getToken = props => get(props, 'match.params.token');
