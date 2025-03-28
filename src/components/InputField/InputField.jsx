export const InputField = ({
  name,
  type,
  placeholder,
  value,
  children,
  onChange,
}) => {
  const InputComponent = type === `textarea` ? `textarea` : `input`;
  return (
    <div className="w-full mb-4">
      <label htmlFor={name} className={`block font-bold mb-2 text-black"`}>
        {children}
      </label>
      <InputComponent
        type={type === `textarea` ? undefined : type}
        name={name}
        className={`text-white bg-gray-500 border-gray-900 border-2 focus:border-gray-300 focus:outline-gray-200 w-full px-4 py-2 rounded-lg focus:outline `}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        rows={type === `textarea` ? 4 : undefined}
      />
    </div>
  );
};
