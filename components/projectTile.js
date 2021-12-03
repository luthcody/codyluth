import Image from 'next/image'
import Link from 'next/link'
import styles from './projectTile.module.scss'

export default function ProjectTile({ project }) {
  let tags = [];
  
  if (project && project.tags) {
    tags = project.tags.map((tag) => {
      return (<span className={styles.tag}>
        <span className={styles.tagColor} data-tag={tag}></span>
        {tag}
      </span>)
    })
  }

  return (
    <Link href={'/project/' + project.id}>
      <a className={'col-12 col-md-4 ' + styles.projectCardContainer}>
      <div className={styles.projectCard}>
            <Image src={project.thumbnailImage} className={styles.projectThumbnail} width={500} height={300} />
            <div className={styles.projectCardData}>
              {project.name}
            </div>
            <div className={styles.tags}>
              {tags}
            </div>
        </div>
      </a>
    </Link>
  )
}