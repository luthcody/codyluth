import styles from './projectTile.module.scss'

export default function ProjectTile({ project }) {
  return (
    <div className={'col-12 col-md-4 ' + styles.projectCardContainer}>
        <div className={styles.projectCard}>
            {project.name}
        </div>
    </div>
  )
}