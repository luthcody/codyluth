import Link from 'next/link';
import { Row, Table } from 'react-bootstrap';
import { getListMealsAndItems } from '../../../components/api/helpers/database';
import Styles from './list.module.scss'

async function updateItemCompleted(listId, itemId, completed) {
  fetch(`/api/food/updateCompleted?completed=${completed ? '1' : '0'}&listId=${listId}&itemId=${itemId}`);
}

function generateMealTable(mealData) {
  console.log(mealData)
  return mealData.map((list) => (
    <div className="row" key={list.meal_id}>
      <div className="col"><Link href={`/food/items/${list.meal_id}`}><a className="text-decoration-none">{list.name}</a></Link></div>
    </div>
  ));
}

function generateItemsTable(itemData, listId, lightMode) {
  console.log(itemData);

  const groupedItems = itemData.reduce((prev, current) => {
    if (!prev[current.location]) {
      prev[current.location] = {};
    }

    if (!prev[current.location][current.category]) {
      prev[current.location][current.category] = [];
    }

    prev[current.location][current.category].push(current);
    return prev;
  }, {});

  const elements = [];
  Object.keys(groupedItems).forEach((location) => {
    const categories = groupedItems[location];

    const categoryElements = Object.keys(categories).map((category) => {
      const items = categories[category];
      const itemElements = [(<tr key={category}><td className="text-center" colSpan={3}>{category}</td></tr>)];

      Object.keys(items).forEach((itemId) => {
        const item = items[itemId];
        itemElements.push((
          <tr key={item.item_id}>
            <td className="text-center"><input type="checkbox" className={Styles.itemCheckbox} defaultChecked={item.completed} onChange={(e) => updateItemCompleted(listId, item.item_id, e.target.checked)} /></td>
            <td>{item.name}</td>
            <td>{item.quantity} {item.package_type}</td>
          </tr>
        ))
      });

      return itemElements
    });

    elements.push((<div className="h3" key={location}>{location}</div>))
    elements.push((
      <Table striped bordered hover size='sm' variant={lightMode ? 'light' : 'dark'} key={`${location}-table`}>
        <thead>
        </thead>
        <tbody>{categoryElements}</tbody>
      </Table>
    ))
  })

  return elements;
}

function List({ data, listId, lightMode }) {
  const listName = data.listName[0][0].name;
  const meals = generateMealTable(data.meals[0]);
  const items = generateItemsTable(data.items[0], listId, lightMode);

  return (
    <div className="row justify-content-center">
      <div className="text-center h3">{listName}</div>
      <div className="col-12 col-lg-8 mt-3">{ meals }</div>
      <div className="col-12 col-lg-6 mt-5">{ items }</div>
    </div>
  )
}

export async function getServerSideProps(req) {
  const data = await getListMealsAndItems(req.query.listid);
  return { props: { data, listId: req.query.listid } }
}

export default List;
