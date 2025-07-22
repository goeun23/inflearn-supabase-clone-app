"use client"

import { DeleteFile } from "actions/storageActions"
import { queryClient } from "config/ReactQueryClientProvider"
import { IconButton, Spinner } from "node_modules/@material-tailwind/react"
import { useMutation } from "@tanstack/react-query"
import { getImageUrl } from "utils/supabase/storage"

export default function DropboxImage({ image }) {
  const deleteImageMutation = useMutation({
    mutationFn: DeleteFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
      })
    },
  })
  return (
    <div className="relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md">
      <div>
        <img
          src={getImageUrl(image.name)}
          className="w-full aspect-square rounded-2xl"
        />
      </div>

      <div>{image.name}</div>
      <div className="absolute top-4 right-4">
        <IconButton
          onClick={() => deleteImageMutation.mutate(image.name)}
          color="red"
        >
          {deleteImageMutation.isPending ? (
            <Spinner />
          ) : (
            <i className="fas fa-trash" />
          )}
        </IconButton>
      </div>
    </div>
  )
}
