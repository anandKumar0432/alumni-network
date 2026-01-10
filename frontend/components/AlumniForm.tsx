import Input2 from "./input2";

export default function AlumniForm({ register }: { register: any }) {
    return (
      <div className="border rounded p-4 space-y-3">
        <h2 className="font-semibold text-lg">Alumni Details</h2>
  
        <Input2 label="Current Job" placeholder="Ex- Associate Engineer" register={register("alumni.currentJob")} />
        <Input2 label="Company" placeholder="TCS" register={register("alumni.currentCompany")} />
        <Input2 label="LinkedIn" placeholder="www.linkedIn.com" type="url" register={register("alumni.linkedIn")} />
        <Input2 label="Instagram" placeholder="www.instagram.com" type="url" register={register("alumni.instagram")} />
        <Input2 label="Portfolio" placeholder="www.portofolio.me" type="url" register={register("alumni.portfolio")} />
      </div>
    );
  }