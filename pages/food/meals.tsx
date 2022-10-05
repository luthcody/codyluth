import { getAllLists } from '../../components/api/helpers/database';
import { Col } from 'react-bootstrap';

export async function getServerSideProps() {
  const results = await getAllLists();

  return {
    props: {
      listData: results
    }
  }
}

type MealsType = {
  listData: Array<any>
}

export default function Meals({ listData } : MealsType) {
  console.log(listData);

  let lists = [];

  if (listData) {
    lists = listData.map((value) => (
      <div className="col-12 row">
        <div className="col">{value.name}</div>
      </div>
    ))
  }

  return (
    <div>
      <div>Grocery Lists</div>
      <div className="row">
        {lists}
      </div>
    </div>
  )
}

