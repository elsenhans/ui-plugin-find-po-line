import React from 'react';
import { FormattedMessage } from 'react-intl';

import {
  PAYMENT_STATUS,
  RECEIPT_STATUS,
} from '@folio/stripes-acq-components';

export const CUSTOM_FIELDS_BACKEND_MODULE_NAME = 'Orders CRUD module';

export const CUSTOM_FIELD_TYPES = {
  DATE_PICKER: 'DATE_PICKER',
  MULTI_SELECT_DROPDOWN: 'MULTI_SELECT_DROPDOWN',
  TEXTBOX_LONG: 'TEXTBOX_LONG',
  TEXTBOX_SHORT: 'TEXTBOX_SHORT',
};

export const FILTERS = {
  ACCESS_PROVIDER: 'accessProvider',
  ACQUISITION_METHOD: 'acquisitionMethod',
  ACQUISITIONS_UNIT: 'purchaseOrder.acqUnitIds',
  ACTIVATED: 'activated',
  ACTUAL_RECEIPT_DATE: 'receiptDate',
  CLAIM_GRACE: 'grace',
  CLAIM_SENT: 'sent',
  CLAIM: 'claims',
  COLLECTION: 'collection',
  CUSTOM_FIELDS: 'customFields',
  DATE_CREATED: 'metadata.createdDate',
  DONOR: 'donorOrganizationIds',
  EXPECTED_ACTIVATION_DATE: 'expectedActivation',
  EXPECTED_RECEIPT_DATE: 'expectedReceiptDate',
  EXPENSE_CLASS: 'expenseClass',
  EXPORT_DATE: 'lastEDIExportDate',
  FUND_CODE: 'fundCode',
  IS_PACKAGE: 'isPackage',
  LOCATION: 'locations',
  MATERIAL_TYPE_ELECTRONIC: 'materialTypeElectronic',
  MATERIAL_TYPE_PHYSICAL: 'materialTypePhysical',
  ORDER_FORMAT: 'orderFormat',
  PAYMENT_STATUS: 'paymentStatus',
  PACKAGE_PO_LINE: 'packagePoLineId',
  PREFIX: 'purchaseOrder.poNumberPrefix',
  RECEIPT_DUE: 'receiptDue',
  RECEIPT_STATUS: 'receiptStatus',
  RUSH: 'rush',
  SOURCE_CODE: 'source',
  SUBSCRIPTION_FROM: 'subscriptionFrom',
  SUBSCRIPTION_TO: 'subscriptionTo',
  SUFFIX: 'purchaseOrder.poNumberSuffix',
  TAGS: 'tags',
  TRIAL: 'trial',
  VENDOR: 'purchaseOrder.vendor',
  CREATED_BY: 'metadata.createdByUserId',
  UPDATED_BY: 'metadata.updatedByUserId',
  DATE_UPDATED: 'metadata.updatedDate',
};

export const PAYMENT_STATUS_FILTER_OPTIONS = Object.keys(PAYMENT_STATUS).map(status => ({
  value: PAYMENT_STATUS[status],
  label: <FormattedMessage id={`ui-orders.payment_status.${status}`} />,
}));

export const RECEIPT_STATUS_FILTER_OPTIONS = Object.keys(RECEIPT_STATUS).map(status => ({
  value: RECEIPT_STATUS[status],
  label: <FormattedMessage id={`ui-orders.receipt_status.${status}`} />,
}));

export const QUALIFIER_SEPARATOR = ' ';
