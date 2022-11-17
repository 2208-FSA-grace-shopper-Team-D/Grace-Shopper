import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllShoes, selectAllShoes, deleteSingleShoe } from "../store/shoesSlice";
import { Link } from "react-router-dom";

const AllShoes = () => {
    const dispatch = useDispatch()
    const shoes = useSelector(selectAllShoes)

    console.log("########", shoes)

    useEffect(()=>{
        dispatch(fetchAllShoes())
    },[dispatch])


    // const handleDelete = async (e) => {
    //     console.log("event handler dispatch delete shoe:", shoes)
    //     dispatch(deleteSingleShoe)
    // }
    return (
        <div className="allShoes">
        <ul>
        {shoes.map((shoe) => {
            return <li key={shoe.id}>
                <Link to={`/shoe/${shoe.id}`}>
                    <h3>{shoe.brand}</h3>
                    <h3>{shoe.name}</h3>
                    <h3>{shoe.type}</h3>
                    <img src={shoe.imageUrl} /></Link>
                    {/* <button className="deleteButton" onClick={handleDelete}>Remove from inventory</button> */}
            </li>
          })}
        </ul> 
        </div>
    )
}

export default AllShoes