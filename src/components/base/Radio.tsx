import React, { useState } from "react"


type Props = {
  className?: string
  value: string
  label: string
  checked?: boolean
  onChange: (event: string) => void
}

export default function Radio({className, value, label, checked, onChange}: Props) {
  const [isChecked, setIsChecked] = useState(checked ?? false);

  const handleSelect = (value: string) => {
    setIsChecked(!isChecked)
    onChange(value)
  }

  return (
    <label
      className={`${className} flex items-center text-nowrap`}
      onClick={() => handleSelect(value)}
    >
      <input
        type="radio"
        value={value}
        className={`${checked && "checked:bg-[#C1CD00]"} radio mr-4 size-6`}
        checked={checked}
        onChange={() => handleSelect(value)}
      />
      {label}
    </label>
  )
}
