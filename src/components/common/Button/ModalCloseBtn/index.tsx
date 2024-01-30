import { Button } from "@nextui-org/react";

interface ICloseButtonProps {
  onClose: () => void;
  icon: any;
}
export const ModalCloseBtn = ({ onClose, icon }: ICloseButtonProps) => {
  return (
    <div className="flex justify-end py-1">
      <Button
        isIconOnly
        onClick={onClose}
        className="bg-transparent hover:text-white text-zinc-500 hover:bg-zinc-800 rounded-full"
      >
        {icon}
      </Button>
    </div>
  );
};
