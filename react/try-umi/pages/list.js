import styles from './list.css'
import router from 'umi/router'

export default function() {
  return (
    <div className={styles.normal}>
      <h1>/list</h1>
      <button
        onClick={() => {
          router.push('/list')
        }}
      >
        test push to self
      </button>
    </div>
  )
}
