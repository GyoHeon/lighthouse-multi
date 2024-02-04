import { Card } from "@/components/card";
import { MAIN_MENU } from "@/constants/menu";

export const Main = () => {
  return (
    <div className="mb-32 flex flex-col gap-3 justify-evenly text-center lg:flex-row lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
      {MAIN_MENU.map((item) => (
        <Card.Menu key={item.title} {...item} />
      ))}
    </div>
  );
};
