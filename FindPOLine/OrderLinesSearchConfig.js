import { generateQueryTemplate } from '@folio/stripes-acq-components';

const indexes = [
  'contributors',
  'poLineNumber',
  'requester',
  'titleOrPackage',
  'publisher',
  'vendorDetail.vendorAccount',
  'vendorDetail.referenceNumbers',
  'donor',
  'selector',
  'physical.volumes',
  'details.productIds',
];

export const indexISBN = {
  labelId: 'ui-orders.search.productIdISBN',
  value: 'productIdISBN',
};

export const searchableIndexes = [
  {
    labelId: 'ui-orders.search.keyword',
    value: '',
  },
  ...indexes.map(index => ({ labelId: `ui-orders.search.${index}`, value: index })),
  indexISBN,
];

export const queryTemplate = generateQueryTemplate(indexes);

function getCqlQuery(query, qindex, dateFormat, customField) {
  return customField?.type === CUSTOM_FIELD_TYPES.DATE_PICKER
    ? searchByDate(query, dateFormat)
    : customSearchMap[qindex]?.(query, dateFormat) || `*${query}*`;
}

export const getKeywordQuery = (query, customFields) => {
  const customFieldIndexes = (customFields || [])
    .filter((cf) => [
      CUSTOM_FIELD_TYPES.DATE_PICKER,
      CUSTOM_FIELD_TYPES.TEXTBOX_SHORT,
      CUSTOM_FIELD_TYPES.TEXTBOX_LONG,
    ].includes(cf.type))
    .map((cf) => `${FILTERS.CUSTOM_FIELDS}.${cf.refId}`);

  return [...indexes, ...customFieldIndexes].reduce(
    (acc, sIndex) => {
      const customField = customFields?.find((cf) => `${FILTERS.CUSTOM_FIELDS}.${cf.refId}` === sIndex);
      const cqlQuery = getCqlQuery(query, sIndex, dateFormat, customField);
      if (acc) {
        return `${acc} or ${sIndex}=="*${cqlQuery}*"`;
      } else {
        return `${sIndex}=="*${cqlQuery}*"`;
      }
    },
    '',
  );
};
