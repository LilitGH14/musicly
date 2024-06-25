import useGlobalContext from "@/hooks/use-context";
import React, {
  useState,
  useCallback,
  useRef,
  KeyboardEvent,
  MouseEvent,
} from "react";
import { useClickAway } from "react-use";

interface Option {
  id: number;
  optionName: string;
}

interface NiceSelectProps {
  options: Option[];
  placeholder?: string;
  className?: string;
  onChange: (item: Option, name: string) => void;
  name: string;
}

const NiceSelect: React.FC<NiceSelectProps> = ({
  options,
  placeholder,
  className,
  onChange,
  name,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { setNiceSelectData } = useGlobalContext();

  const [open, setOpen] = useState<boolean>(false);
  const [current, setCurrent] = useState<Option>();

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const currentHandler = (item: Option) => {
    setCurrent(item);
    onChange(item, name);
    setNiceSelectData(item?.optionName);
    onClose();
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const stopPropagation = (e: MouseEvent | KeyboardEvent) => {
    e.stopPropagation();
  };

  useClickAway(ref, onClose);

  return (
    <div
      className={`nice-select ${className || ""} ${open ? "open" : ""}`}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      ref={ref}
    >
      <span className="current">{current?.optionName || placeholder}</span>
      <ul
        className="list"
        role="menubar"
        onClick={stopPropagation}
        onKeyPress={stopPropagation}
      >
        {options?.map((item) => (
          <li
            key={item.id}
            data-value={item.id}
            className={`option ${
              item.id === current?.id ? "selected focus" : ""
            }`}
            role="menuitem"
            onClick={() => currentHandler(item)}
            onKeyPress={(e: KeyboardEvent<HTMLLIElement>) => {
              stopPropagation(e);
            }}
          >
            {item.optionName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NiceSelect;
