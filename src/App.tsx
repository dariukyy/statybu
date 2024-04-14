import {
  Button,
  Card,
  NumberInput,
  SearchSelect,
  SearchSelectItem,
} from "@tremor/react";
import Label from "./components/Label";
import { useForm } from "react-hook-form";
import { useState } from "react";

type formData = {
  cement: string;
  length: number;
  width: number;
  height: number;
};

function App() {
  const { register, handleSubmit } = useForm<formData>();
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );

  function onSubmit(data: formData) {
    console.log(selectedValue, data);
  }
  return (
    <Card className="h-screen w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[60%] p-6 border-2 flex flex-col justify-center items-center gap-4 border-slate-200 rounded-md"
      >
        <Label htmlFor="cement">Pasirinkite cemento tipą</Label>
        <SearchSelect
          id="cement"
          placeholder="Pasirinkite cemento tipą..."
          onValueChange={(e) => setSelectedValue(e)}
        >
          <SearchSelectItem value="CEM I 52,5 R">CEM I 52,5 R</SearchSelectItem>
          <SearchSelectItem value=" CEM I 42,5 R">
            CEM I 42,5 R
          </SearchSelectItem>
          <SearchSelectItem value="CEM I 42,5 N">CEM I 42,5 N</SearchSelectItem>
          <SearchSelectItem value="CEM II/A-LL 42,5 N">
            CEM II/A-LL 42,5 N
          </SearchSelectItem>
          <SearchSelectItem value="CEM II/A-LL 42,5 R">
            CEM II/A-LL 42,5 R
          </SearchSelectItem>
          <SearchSelectItem value="CEM II/A-S 42,5N">
            CEM II/A-S 42,5N
          </SearchSelectItem>
          <SearchSelectItem value="CEM I 42,5N-SR3">
            CEM I 42,5N-SR3
          </SearchSelectItem>
          <SearchSelectItem value="CEM II/A-P 52,5N">
            CEM II/A-P 52,5N
          </SearchSelectItem>
        </SearchSelect>
        <Label htmlFor="length">Įveskite ilgį</Label>
        <NumberInput
          min={0}
          {...register("length")}
          id="length"
          placeholder="Įveskite ilgį (m)"
        />
        <Label htmlFor="width">Įveskite plotį</Label>
        <NumberInput
          min={0}
          {...register("width")}
          id="width"
          placeholder="Įveskite plotį (m)"
        />
        <Label htmlFor="height">Įveskite aukštį</Label>
        <NumberInput
          min={0}
          {...register("height")}
          id="height"
          placeholder="Įveskite aukštį (mm)"
        />
        <Button type="submit">Skaičiuoti</Button>
      </form>
    </Card>
  );
}

export default App;
