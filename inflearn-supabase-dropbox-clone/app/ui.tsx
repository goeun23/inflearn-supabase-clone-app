"use client"
import Image from "next/image"
import Logo from "./components/Logo"
import SearchComponent from "./components/SearchComponent"
import FileDragDropZone from "./components/FileDragDropZone"
import DropboxImageList from "./components/DropboxImageList"
import { useState } from "react"
export default function UI() {
  const [searchInput, setSearchInput] = useState("")
  return (
    <main className="w-full p-2 flex flex-col gap-4">
      Dropbox clone
      {/* Logo */}
      <Logo />
      {/* Search Component */}
      <SearchComponent
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {/* File Drag&Drop Zone */}
      <FileDragDropZone />
      {/* Dropbox Image List */}
      <DropboxImageList />
    </main>
  )
}
