import * as fromTransfer from '../reducers/transfer.reducer';
import { selectTransferState } from './transfer.selectors';

describe('Transfer Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTransferState({
      [fromTransfer.transferFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
