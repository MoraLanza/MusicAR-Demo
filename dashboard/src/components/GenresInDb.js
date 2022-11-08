import { React, useState, useEffect } from "react";
import { getCategories } from "../services/categories";
import { Link } from 'react-router-dom';


function GenresInDb() {
  const [categories, setCategories] = useState();

  useEffect(async () => {
    const categories = await getCategories();
    setCategories(categories.categories.slice(0, 6));
  }, []);

  if (!categories) return null;

  console.log(categories);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Géneros en la db
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {categories.map((category, index) => {
              return (
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">{category.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <Link className="button-primary" to='/CategoriesPagination'>Ver todos los géneros</Link>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
