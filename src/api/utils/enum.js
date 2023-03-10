const CategoryEnum = {
  FURNITURE: 1,
  ELECTRONICS: 2,
  VEHICLES: 3,
};

const UserRole = {
  ADMIN: 1,
  USER: 2,
};

const NotificationTypeEnum = {
  PAYMENT: '1',
};

const NotificationRecipientTypeEnum = {
  WEB: 1,
  ANDROID: 2,
  IOS: 3,
};

const ExpiryUnit = {
  MINUTE: 'm',
  HOUR: 'h',
  DAY: 'd',
};

const ProductBidStatus = {
  CREATED: 1,
  ACCEPTED: 2,
  REJECTED: 3,
  MODIFIED: 4,
};

const OrderStatus = {
  PENDING: 1,
  PICKED_UP_DATE_ESTIMATED: 2,
  PICKED_UP: 3,
  PAID: 4,
};

module.exports = {
  CategoryEnum,
  NotificationRecipientTypeEnum,
  NotificationTypeEnum,
  ProductBidStatus,
  OrderStatus,
  UserRole,
  ExpiryUnit,
};
