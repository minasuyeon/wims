export type InventoryReportCreateInput = {
  reportType?: "Option1" | null;
  generatedAt?: Date | null;
  details?: string | null;
  emailPreference?: boolean | null;
  printPreference?: boolean | null;
};
