import Input2 from "./input2";

export default function StudentForm({ register }: { register: any }) {
    return (
      <div className="border rounded p-4 space-y-3">
        <h2 className="font-semibold text-lg">Student Details</h2>
  
        <Input2
          label="Current Year*"
          required
          register={register("student.currentYear")}
        />
  
        <Input2
          label="Interest"
          register={register("student.interest")}
        />
      </div>
    );
  }