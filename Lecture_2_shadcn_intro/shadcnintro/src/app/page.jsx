// import the component into the file you want to use
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid place-items-center bg-gray-700">
      <h1>Hello Next</h1>
      <Button 
      // className="text-bold text-gray-600 bg-white hover:bg-red-400"
      variant="outline"
      size="icon"
      >Hello</Button>
    </div>
  );
}
