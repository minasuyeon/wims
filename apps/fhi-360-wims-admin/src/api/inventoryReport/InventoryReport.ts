export type InventoryReport = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  reportType?: "Option1" | null;
  generatedAt: Date | null;
  details: string | null;
  emailPreference: boolean | null;
  printPreference: boolean | null;
};
