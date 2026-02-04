// our-domain.com/news/detail

import { useRouter } from "next/router";

export default function DetailsPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  //send a request to backend API
  // to fetch the news item with newsId

  return <h1>{newsId} Details Page</h1>;
}
