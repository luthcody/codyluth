import Link from 'next/link'
import { GiHotMeal } from 'react-icons/gi';
import { FaListUl, FaAppleAlt } from 'react-icons/fa';
import styles from './index.module.scss';

export default function Food() {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-3">
        <Link href='/food/lists'><a className={styles.mainSelectionsLink}>
          <div className={styles.mainSelections}>
            <FaListUl size={'3em'} />
            <div className="mt-2">Grocery Lists</div>
          </div>
        </a></Link>
      </div>
      <div className="col-12 col-md-3">
        <Link href='/food/meals'><a className={styles.mainSelectionsLink}>
          <div className={styles.mainSelections}>
            <GiHotMeal size={'3em'} />
            <div className="mt-2">Recipes</div>
          </div>
        </a></Link>
      </div>
      <div className="col-12 col-md-3">
        <Link href='/food/items'><a className={styles.mainSelectionsLink}>
          <div className={styles.mainSelections}>
            <FaAppleAlt size={'3em'} />
            <div className="mt-2">Grocery Items</div>
          </div>
        </a></Link>
      </div>
      <div className="col-12 mt-3">
        <Link href='/food/lists'><a className={styles.mainSelectionsLink}>
          <div className={styles.mainSelections}>
            <div className="">Go to active list</div>
          </div>
        </a></Link>
      </div>
    </div>
  );
}
