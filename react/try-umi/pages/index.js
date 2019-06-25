import Link from 'umi/link'
import styles from './index.css'

export default function() {
  return (
    <div>
      <h1>Routes </h1>
      <ul>
        <li>
          <Link to="/list"> list </Link>
        </li>
        <li>
          <Link to="/users/123"> /users/123 </Link>
        </li>
        <li>
          <Link to="/users/posts/123/comments">/users/posts/123/comments</Link>
        </li>
      </ul>
    </div>
  )
}
