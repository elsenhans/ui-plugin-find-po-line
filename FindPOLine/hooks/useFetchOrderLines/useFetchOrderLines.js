import { useCallback } from 'react';
import moment from 'moment';

import { useCustomFields } from '@folio/stripes/smart-components';
import {
  useOkapiKy,
  useStripes,
} from '@folio/stripes/core';
import {
  LINES_API,
  getFiltersCount,
  PLUGIN_RESULT_COUNT_INCREMENT,
} from '@folio/stripes-acq-components';

import { CUSTOM_FIELDS_BACKEND_MODULE_NAME } from '../../constants';
import {
  getLinesQuery,
} from '../../utils';

export const useFetchOrderLines = () => {
  const ky = useOkapiKy();
  const { timezone } = useStripes();

  const fetchOrderLines = useCallback(async ({
    searchParams = {},
    offset = 0,
    limit = PLUGIN_RESULT_COUNT_INCREMENT,
  }) => {
    const [customFields, isLoadingCustomFields] = useCustomFields(CUSTOM_FIELDS_BACKEND_MODULE_NAME, 'po_line');
    const buildLinesQuery = getLinesQuery(searchParams, ky, customFields, isLoadingCustomFields);
    const filtersCount = getFiltersCount(searchParams);

    if (!filtersCount) {
      return { poLines: [], totalRecords: 0 };
    }

    moment.tz.setDefault(timezone);

    const query = await buildLinesQuery();

    moment.tz.setDefault();

    const builtSearchParams = {
      query,
      limit,
      offset,
    };

    const { poLines, totalRecords } = await ky
      .get(LINES_API, { searchParams: { ...builtSearchParams } })
      .json();

    return {
      poLines,
      totalRecords,
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { fetchOrderLines };
};
