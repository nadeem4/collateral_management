export interface TransferModel {
  segment: String;
  collateral: String;
  instrumentType: String;
  symbol: number | string;
  custodian: string;
  pendingRelease: number;
  pendingTransfer: number;
  requestedQty: number;
  trnRequestDate: string;
  requestDate: string;
  valueDate: string;
  requestType: string;
  natureOfRequest: string;
  requestId: number;
  processDate: string;
  status: string;
  clientCode: string;
  tmCode: string;
  isin: string;
  availableQty: number;
}
