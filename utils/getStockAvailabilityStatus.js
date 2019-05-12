export const getStockAvailabilityStatus = (attributes = {}, isAtg = false) => {
  let {
    PickupEligible,
    DeliveryEligible,
    PickupInStock,
    DeliveryInStock
  } = attributes;

  const TRUE = 'true';
  const getFlag = flag => flag && flag[0] === TRUE;
  if (!isAtg) {
    PickupEligible = getFlag(PickupEligible);
    DeliveryEligible = getFlag(DeliveryEligible);
    PickupInStock = getFlag(PickupInStock);
    DeliveryInStock = getFlag(DeliveryInStock);
  } else {
    if (
      PickupEligible === undefined &&
      DeliveryEligible === undefined &&
      PickupInStock === undefined &&
      DeliveryInStock === undefined
    ) {
      const { status, skuStatus } = attributes;
      PickupEligible = true;
      DeliveryEligible = true;
      PickupInStock = true;
      DeliveryInStock = true;
      if (status === 'unavailable' || skuStatus === 'INACTIVE') {
        PickupEligible = false;
        DeliveryEligible = false;
      }
      if (status === 'available') {
        PickupInStock = true;
        DeliveryInStock = true;
      }
      //skuAvailabilityStatus == "SELLABLE",LOWSTOCK
    }
  }

  // PickupEligible = (Math.floor(Math.random()*10)%2) === 0;
  // DeliveryEligible = (Math.floor(Math.random()*10)%2) === 0;
  // PickupInStock = (Math.floor(Math.random()*10)%2) === 0;
  // DeliveryInStock = (Math.floor(Math.random()*10)%2) === 0;

  if (attributes.isMembershipItem || attributes.isMembershipRenew) {
    PickupEligible = false;
    DeliveryEligible = false;
    PickupInStock = false;
    DeliveryInStock = false;
  }
  const hasDeliveryEligibleInStock = DeliveryEligible && DeliveryInStock;
  const hasPickUpEligibleInStock = PickupEligible && PickupInStock;
  return {
    PickupEligible,
    DeliveryEligible,
    PickupInStock,
    DeliveryInStock,
    isOutOfStock: function() {
      return !(
        hasPickUpEligibleInStock ||
        hasDeliveryEligibleInStock ||
        attributes.isMembershipItem
      );
    },
    hasHomeDelivery: function() {
      return hasDeliveryEligibleInStock;
    },
    hasPickup: function() {
      return hasPickUpEligibleInStock;
    },
    hasOoPickup: function() {
      return PickupEligible && !PickupInStock;
    },
    hasOoDelivery: function() {
      return DeliveryEligible && !DeliveryInStock;
    },
    hasDeliveryOnly() {
      return this.hasHomeDelivery() && !this.hasPickup();
    },
    hasPickupOnly() {
      return this.hasPickup() && !this.hasHomeDelivery();
    },
    isInactive() {
      return !(PickupEligible || DeliveryEligible);
    },
    isAvailable() {
      // Item may not eligible now but stock will available,
      // eg: offer roll out in particular date.
      return PickupInStock || DeliveryInStock;
    },
    isDisplay() {
      return this.isAvailable();
    }
  };
};
