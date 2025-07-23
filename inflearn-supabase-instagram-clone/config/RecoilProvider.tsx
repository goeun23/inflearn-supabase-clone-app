"use client"

import { RecoilRoot } from "recoil"

export default function ReactQueryClientProviders({
  children,
}: React.PropsWithChildren) {
  return <RecoilRoot>{children}</RecoilRoot>
}
