import { Input } from "./ui/input";

interface InputProps {
    label: string;
    type?: string;
    required?: boolean;
    register: any;
    placeholder?: string;
  }
  
  export default function Input2({ label, type = "text", required, register, placeholder }: InputProps) {
    return (
      <div>
        <label className="block text-sm font-medium mb-1">
          {label}
        </label>
        <Input type={type} required={required} {...register} placeholder={placeholder}/>
      </div>
    );
  }