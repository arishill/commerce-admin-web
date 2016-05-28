'use strict';

Admin.components.shop.orders.show.state = {
  geocodeData: m.prop(null),
  isEditingItems: m.prop(false),
  page: m.prop('receipt'),
  isDeletingId: m.prop(null),
  isDeleteProcessing: m.prop(null)
};
