import Navbar from "../navbar/Navbar";
import ListWork from "./ListWork";

export default function RightSidebar() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <ListWork />
    </div>
  );
}
