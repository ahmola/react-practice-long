import PropTypes from 'prop-types';

export default function List(props) {

    const itemList = props.items;
    const category = props.category;

    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    // fruits.sort((a, b) => b.name.localeCompare(a.name));
    // fruits.sort((a, b) => a.calories - b.calories)
    // fruits.sort((a, b) => b.calories - a.calories)
    
    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruit = fruits.filter(fruit => fruit.calories > 100);

    List.defaultProps = {
        category: "Category",
        items: [],
    }

    List.propTypes = {
        category: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number})),
    }

    const listItems = itemList.map(fruit =>
         <li key={fruit.id}>{fruit.name} : &nbsp;
                            <b>{fruit.calories}</b></li>);
  return (
      <>
        <h3 className="list-category">{category}</h3>
        <ul className="list-items">{listItems}</ul>
      </>
    
  )
}
