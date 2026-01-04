import { Input } from "./ui/input";

interface InputProps {
    label: string;
    type?: string;
    required?: boolean;
    register: any;
  }
  
  export default function Input2({ label, type = "text", required, register }: InputProps) {
    return (
      <div>
        <label className="block text-sm font-medium mb-1">
          {label}
        </label>
        <Input type={type} required={required} {...register} />
      </div>
    );
  }