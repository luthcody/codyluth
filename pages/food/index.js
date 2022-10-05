import styles from './index.module.scss';
import { GiHotMeal } from 'react-icons/gi';
import { FaListUl, FaAppleAlt } from 'react-icons/fa';

function Food({ lightMode }) {
  return (
    <div className="row">
      <div className="col-12 col-md-4">
        <div className={`${styles.mainSelections} ${lightMode ? styles.mainSelectionsLight : ''}`}>
          <FaListUl size={'3em'}/>
          <div className="mt-2">Grocery Lists</div>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className={`${styles.mainSelections} ${lightMode ? styles.mainSelectionsLight : ''}`}>
          <GiHotMeal size={'3em'}/>
          <div className="mt-2">Recipes</div>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className={`${styles.mainSelections} ${lightMode ? styles.mainSelectionsLight : ''}`}>
          <FaAppleAlt size={'3em'}/>
          <div className="mt-2">Grocery Items</div>
        </div>
      </div>
      <div className="col-12 mt-3">
        <div className={`${styles.mainSelections} ${lightMode ? styles.mainSelectionsLight : ''}`}>
          <div className="">Go to active list</div>
        </div>
      </div>
    </div>
  );
}

Food.lightMode = true;

export default Food;
