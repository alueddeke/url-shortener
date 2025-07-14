interface InputProps {
  name: string;
  title: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  locked?: boolean;
  value?: string;
  onChange?: (value:string) => void //void means that the function is doing something, but not returning anything
  //void makes sense when you are making a state change, not as an event handler that has a return statement

}

export const Input: React.FC<InputProps> = ({
  name,
  title,
  placeholder,
  locked,
  required = false,
  disabled = false,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <p className="mb-1 font-medium">{title}</p>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};
