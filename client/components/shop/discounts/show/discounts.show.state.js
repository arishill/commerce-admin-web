'use strict';

Admin.components.shop.discounts.show.state = {
  isEditingItems: m.prop(false),
  page: m.prop('receipt'),
  isDeletingId: m.prop(null),
  isDeleteProcessing: m.prop(null)
};
