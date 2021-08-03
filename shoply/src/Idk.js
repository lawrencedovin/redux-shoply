import Data from './data';
import Item from './Item';

const Idk = () => {
    return (
        <>
          <div>
            <h3>Using local JSON file</h3>
            {Object.keys(Data.products).map((item, i) => (
              <Item 
                id={item} 
                name={Data.products[item].name} 
                price={Data.products[item].price} 
                description={Data.products[item].description} 
                image_url={Data.products[item].image_url}
              />
            ))}
          </div>
        </>
    );
}

export default Idk;