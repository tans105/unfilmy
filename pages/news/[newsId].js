// route to our-domain/news/${newsId}
import {useRouter} from 'next/router';

function NewsItemPage() {
  const router = useRouter();
  const newsId = router.query.newsId

  //Send request to backend and fetch the news item for a newsId

  return <h1>The {newsId} Page</h1>;
}

export default NewsItemPage;