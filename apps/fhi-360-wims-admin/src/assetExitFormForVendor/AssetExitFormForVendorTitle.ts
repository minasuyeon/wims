import { AssetExitFormForVendor as TAssetExitFormForVendor } from "../api/assetExitFormForVendor/AssetExitFormForVendor";

export const ASSETEXITFORMFORVENDOR_TITLE_FIELD = "id";

export const AssetExitFormForVendorTitle = (
  record: TAssetExitFormForVendor
): string => {
  return record.id?.toString() || String(record.id);
};
