import axios from "axios";
import OnePost from './OneProduct.jsx'
import { useEffect, useState } from "react";
import Search from "./Search.jsx";

function AllProduct() {
    const [data, setData] = useState([]);
    const [refresh, setrefresh] = useState(true);


    const lookForOne = async (searchTerm) => {
        try {
            const response = await axios.get(
                `http://localhost:5000/api/Products/${searchTerm}`
            );
            setData(response.data);
        } catch (error) {
            console.log(error, "error");
        }
    };


    const fetch = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/Products/getAllProduct"
            );
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetch();
    }, [refresh]);

    console.log(data, 'data');

    return (
        <div className="flex flex-col">
            <div className="flex justify-center gap-4 mt-3">

                <Search lookForOne={lookForOne} />
            </div>

            <div className='justify-center gap-3 flex flex-wrap mt-7' >

                {data.map((e, i) => {
                    return (
                        <div className=' ' key={e.id}>
                            <OnePost e={e} i={i} />
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default AllPosts
