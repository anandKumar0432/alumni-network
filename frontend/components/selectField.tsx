export default function SelectField({
    label,
    register,
    options,
  }: {
    label: string;
    register: any;
    options: string[];
  }) {
    return (
      <div>
        <label className="block text-sm font-medium mb-1">
          {label}
        </label>
        <select
          {...register}
          className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-black"
        >
          <option value="">Select</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }