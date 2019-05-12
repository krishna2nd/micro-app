export const ANNOUNCEMENT = {
  generic: {
    heading: {
      awaiting:
        'Se ha presentado un problema confirmando tu pago para el pedido  #{orderId}',
      success: 'Pago confirmado para el pedido #{orderId}',
      cancelled: 'El pago para el pedido #{orderId} no se ha confirmado'
    },
    subHeading: {
      awaiting:
        'Estamos tratando de confirmar tu pago, una vez confirmado procederemos a crear tu pedido. Para  más detalles puedes revisar la sección de ',
      success:
        'Buenas noticias, hemos confirmado el pago  de tu pedido. Por favor visita la sección ',
      cancelled:
        'Lo sentimos, no se pudo confirmar el pago de tu pedido con tu banco y ha sido cancelado. Por favor inténtalo nuevamente o llama a nuestro call center para más información.'
    }
  },
  order: {
    heading: {
      awaiting: 'Se presentó un problema confirmando tu pago.'
    },
    subHeading: {
      awaiting:
        'Hubo un inconveniente al confirmar tu pago para el pedido {orderId}. Estamos trabajando para resolver la situación, una vez confirmemos tu pago se creará  tu pedido. Puedes consultar esta página para actualizaciones sobre el proceso o llama a nuestro call center para más información.',
      success:
        'Buenas noticias, hemos confirmado el pago  de tu pedido. Por favor visita la sección Mis Órdenes para obtener detalles del pedido.',
      cancelled:
        'Lo sentimos, no pudimos confirmar el pago de tu pedido con tu banco y  ha sido cancelado. Por favor inténtalo nuevamente o llama a nuestro call center para más información.'
    }
  }
};
