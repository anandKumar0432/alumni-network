import Input2 from "./input2";
import SelectField from "./selectField";

export default function StudentForm({ register }: { register: any }) {
    return (
      <div className="border rounded p-4 space-y-3">
        <h2 className="font-semibold text-lg">Student Details</h2>
  
        <SelectField
          label="Current Year*"
          register={register("student.currentYear")}
          options={["1st", "2nd", "3rd", "4th"]}
        />
  
        <Input2
          label="Interest"
          placeholder="i.e Web Dev"
          register={register("student.interest")}
        />
      </div>
    );
  }