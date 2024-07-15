export type Form = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField: string | null;
  isActive: boolean | null;
  createdBy: string | null;
  assignedTo: string | null;
};
