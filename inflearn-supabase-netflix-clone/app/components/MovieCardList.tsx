"use client"
import MovieCard from "./MovieCard"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { searchMovies } from "actions/movieActions"
import { Spinner } from "@material-tailwind/react"
import { useRecoilValue } from "node_modules/recoil"
import { searchState } from "utils/recoil/atoms"
import { useInView } from "node_modules/react-intersection-observer/dist"
import { useEffect } from "react"
import { LastPage } from "node_modules/@mui/icons-material"

export default function MovieCardList() {
  const search = useRecoilValue(searchState)
  const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      initialPageParam: 1, // 내부적으로 관리할 number
      queryKey: ["movie", search],
      queryFn: ({ pageParam }) =>
        searchMovies({ search, page: pageParam, pageSize: 12 }),
      getNextPageParam: (lastPage) =>
        lastPage.page ? lastPage.page + 1 : null,
    })

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    console.log(inView)
  }, [inView])

  useEffect(() => {
    // inview의 조건안에 도달했고, 다음 페이지가 있다면, 데이터를 불러오는 상태가 아니라면,
    //fetching할 Next 페이지가 있다면
    if (inView && hasNextPage && !isFetching && !isFetchingNextPage) {
      fetchNextPage() // 다음 페이지를 불러온다.(pageNumber는 알아서 query가 가져오기 때문에 넘겨주지않아도 됨)
    }
  }, [inView, hasNextPage])

  return (
    <div className="grid gap-1 md:grid-cols-4 grid-cols-3 w-full h-full">
      {isFetching || (isFetchingNextPage && <Spinner />)}

      {
        <>
          {data?.pages
            ?.map((page) => page.data)
            ?.flat()
            ?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          <div ref={ref}></div>
        </>
      }
    </div>
  )
}
