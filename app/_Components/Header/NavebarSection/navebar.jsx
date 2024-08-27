import Li_navebar from "../../Elements/li_navebar";
import LogoIcon from "../../../../public/logo.svg";
import Button_main from "../../Elements/button_main";
import Drawer from "./drawer";

export default function Navebar() {
  return (
    <nav className=" sticky top-0 z-50 shadow-md py-4 bg-white">
      <div className="container flex justify-between items-center">
        <LogoIcon className="w-[120px] h-[50px]" />
        <ul className="gap-x-8 md:flex transition hidden">
          <Li_navebar>Home</Li_navebar>
          <Li_navebar>Sell Your Car</Li_navebar>
          <Li_navebar>About Us</Li_navebar>
          <Li_navebar>Contact Us</Li_navebar>
        </ul>

        <Drawer />
        <Button_main>Sign in</Button_main>
      </div>
    </nav>
  );
}
