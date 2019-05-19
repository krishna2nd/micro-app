/* === LIBRARIES === */
import { createAction } from "redux-actions";
import { get, post } from "../../request/request.api";
import { createRequestActions } from "../../request/request.utils";
import fetchBackendUrl from "../../utils/fetch";
import { URL_PDP_SKU_DETAILS } from "./pdp.constants";

export const {
  PdpSkuRequest,
  PdpSkuSuccess,
  PdpSkuFailure
} = createRequestActions("PdpSku", "PDP");

export const fetchSkuDetails = skuId => (dispatch, getState) => {
  console.log("PDP SKUID", skuId);
  dispatch(
    fetchBackendUrl({
      method: get,
      url: URL_PDP_SKU_DETAILS + skuId,
      onSuccess: PdpSkuSuccess,
      onRequest: PdpSkuRequest,
      onFailure: PdpSkuFailure
    })
  );
};
