"use client"

import Image from "next/image"

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image
        src="/images/dropbox_icon.png"
        width={50}
        height={30}
        className="!w-10 !h-auto"
        alt="Mini Dropbox Icon"
      />
      <span className="text-xl font-bold">Minibox</span>
    </div>
  )
}
