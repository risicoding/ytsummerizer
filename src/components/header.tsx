import Image from "next/image";
import { Button } from "./ui/button";
import { Sparkles} from "lucide-react";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-8 py-6">
      <Image src="/logo.svg" height={50} width={50} alt="logo" />
      <Button className="bg-boston-400 shadow-md shadow-boston-600 flex justify-between min-w-28 px-6 py-5">
        <span className="text-md leading-6 font-medium">Login</span>
        <Sparkles />
      </Button>
    </header>
  );
};

export default Header;
