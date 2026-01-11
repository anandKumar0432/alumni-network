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
          className="w-full border rounded-sm px-1 py-1"
          required
        >
          <option value="">Select</option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="rounde-md">
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }