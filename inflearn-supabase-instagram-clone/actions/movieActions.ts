"use server"

import { create } from "domain"
import { createServerSupabaseClient } from "utils/supabase/server"
function handleError(error) {
  if (error) {
    console.error(error)
    throw error
  }
}

export async function searchMovies({ search, page, pageSize }) {
  const supabase = await createServerSupabaseClient()

  const { data, error, count } = await supabase
    .from("movie")
    .select("*")
    .like("title", `%${search}%`)
    .range((page - 1) * pageSize, page * pageSize - 1)
  // limit(0, 1000) 과 같은 식

  // hasNextPage는 직접 계산해줘야하는데, 여기서 suapbase에서 count를 활용
  // count : 전체 쿼리의 갯수
  const hasNextPage = count > page * pageSize

  if (error) {
    console.error(error)
    return {
      data: [],
      count: 0,
      page: null,
      pageSize: null,
      error,
    }
  }

  return {
    data,
    page,
    pageSize,
    hasNextPage,
  }
}

export async function getMovie(id) {
  const supabase = await createServerSupabaseClient()

  const { data, error } = await supabase
    .from("movie")
    .select("*")
    .eq("id", id)
    .maybeSingle()

  handleError(error)

  return data
}
