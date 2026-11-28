import { useId } from "react";

export const inputClass =
  "w-full rounded border border-line bg-white px-4 text-[17px] leading-[23px] text-ink placeholder:text-[#757575]";

// Label + control. `as` switches between input / select / textarea.
export default function Field({ label, as: Tag = "input", className = "", ...rest }) {
  const id = useId();
  const size = Tag === "textarea" ? "min-h-[90px] py-3" : "h-[50px]";
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-[15px] leading-[26px] font-bold">{label}</label>
      <Tag id={id} className={`${inputClass} ${size}`} {...rest} />
    </div>
  );
}

// Styled native file picker.
export function FileField({ label, ...rest }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[15px] leading-[26px] font-bold">{label}</label>
      <input
        id={id}
        type="file"
        accept="image/*"
        className={`${inputClass} py-3 text-[15px] file:mr-3 file:rounded-sm file:border file:border-ink/60 file:bg-[#f0f0f0] file:px-2 file:text-[15px]`}
        {...rest}
      />
    </div>
  );
}
