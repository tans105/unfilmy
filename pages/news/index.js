// route to our-domain/news
import Link from 'next/link' // use this instead of anchor tag to support single page application
import {Fragment} from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li><Link href='/news/nextjs-is-great'>NextJs is great</Link></li>
        <li><Link href='/news/something-else'>Something Else</Link></li>
      </ul>
    </Fragment>
  )
}

export default NewsPage;