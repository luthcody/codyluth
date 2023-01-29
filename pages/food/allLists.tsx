import Link from 'next/link';
import { getAllLists } from '../../components/api/helpers/database';

function generateTables(data) {
  const activeLists = [];
  const inactiveLists = [];

  data.forEach((list) => {
    const row = (
      <div className="row" key={list.id}>
        <div className="col"><Link href={`/food/list/${list.id}`}><a>{list.name}</a></Link></div>
      </div>
    );

    if (list.active) {
      activeLists.push(row);
    } else {
      inactiveLists.push(row);
    }
  })

  return { active: activeLists, inactive: inactiveLists };
}

function Lists({ data }) {
  const tables = generateTables(data);

  return (
    <div className="row justify-content-center">
      <div className="text-center h2">Grocery Lists</div>
      <div className="text-center h4 mt-2">Active Lists</div>
      <div className="col-8">{ tables.active }</div>
      <div className="text-center h4 mt-5">Inactive Lists</div>
      <div className="col-8">{ tables.inactive }</div>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await getAllLists();
  return { props: { data } }
}

export default Lists;
