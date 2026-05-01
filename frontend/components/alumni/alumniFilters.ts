export type AlumniFilters = {
  search: string;
  branch: string;
  session: string;
  year: string;
};

export const branchOptions = [
  { value: "", label: "All Branches" },
  { value: "CSE", label: "CSE" },
  { value: "IT", label: "IT" },
  { value: "ECE", label: "ECE" },
  { value: "ME", label: "ME" },
  { value: "EEE", label: "EEE" },
  { value: "CE", label: "CE" },
  { value: "VLSI", label: "VLSI" },
  { value: "FPP", label: "FPP" },
];
