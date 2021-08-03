import Data from './data';

const Idk = () => {
    return (
        <>
          <div>
            <h3>Using local JSON file</h3>
            {Object.keys(Data.products).map((item, i) => (
              <div key={item}>
                <p>Item : {item}</p>
                <p>name : {Data.products[item].name}</p>
                <p>price : {Data.products[item].price}</p>
                <p>description : {Data.products[item].description}</p>
                <p>image : {Data.products[item].image_url}</p>
              </div>
            ))}
          </div>
        </>
    );
}

export default Idk;