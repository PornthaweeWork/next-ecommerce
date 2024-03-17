import React, { useState } from "react"

type Props = {
  titleButton: string
  children: React.ReactNode
}

export default function SelectOption({titleButton, children}: Props) {
  const [isShowSort, setIsShowSort] = useState(false)

  return (
    <div className="relative flex w-fit flex-col items-end justify-center">
      <button
        className="border p-3 mb-1"
        onClick={(): void => setIsShowSort(!isShowSort)}
      >
        {titleButton}
      </button>
      {isShowSort && (
        <div className="border p-5">
          {children}
        </div>
      )}
    </div>
  )
}
