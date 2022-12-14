import "./projectList.css";
import Project from "../Projects/project";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire!!!</h1>
        <p className="pl-desc">
          Have a glance at the project...
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
