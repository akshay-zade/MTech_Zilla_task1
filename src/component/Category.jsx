import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Category() {
  const [categoryData, setCategoryData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://apis.camillerakoto.fr/fakejobs/jobs")
      .then((response) => {
        console.log(response);
        setCategoryData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleApply =()=>{
    navigate('/contact')
  }
  return (
    <div className="product-head">
      <h1>Products</h1>
      <div className="cards">
        {categoryData.map((curUser) => {
          // const { title, description, thumbnail,price } = curUser;

          const { title, name, salary, date, fulltime, country, city } =
            curUser;
          return (
            <>
              <div>
                <div className="row">
                  <div className="col-12">
                    <div className="card" style={{ width: "18rem" }}>
                      {/* <img src={thumbnail} className="card-img-top" alt="..." /> */}
                      <div className="card-body">
                        <h1 className="card-text">{title}</h1>
                        <p className="card-text">{name}</p>
                        <p className="card-text">Salary: {salary}</p>
                        <p className="card-text">Date of posting: {date}</p>
                        <p className="card-text">Full Time:{fulltime}</p>
                        <p className="card-text">city: {city}</p>
                        <p className="card-text">Country: {country}</p>
                        <button type="button" class="btn btn-success" onClick={handleApply}>
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
