import React, { useState, useEffect } from "react";
import pic1 from './malaga.jpg';

const Description = (props) => {

    //const [desc, setDesc] = useState([])
    const [data1, setData] = useState([]);
    useEffect(() => {
        if (props.loc == "Philipsburg") {
            fetch('/api/hello')
                .then((res) => res.json())
                .then((data1) => setData(data1.Philipsburg))
        }

        else if (props.loc == "Malaga") {
            fetch('/api/hello')
                .then((res) => res.json())
                .then((data1) => setData(data1.Malaga))
        }

        else if (props.loc == "Reykjavik") {
            fetch('/api/hello')
                .then((res) => res.json())
                .then((data1) => setData(data1.Reykjavik))

        }

        else if (props.loc == "Edmonton") {
            fetch('/api/hello')
                .then((res) => res.json())
                .then((data1) => setData(data1.Edmonton))

        }

        else if (props.loc == "Vancouver") {
            fetch('/api/hello')
                .then((res) => res.json())
                .then((data1) => setData(data1.Vancouver))

        }

        else {
            fetch('/api/hello')
                .then((res) => res.json())
                .then((data1) => setData(data1.default))

        }


    }, [props]);



    if (props.loc) {
        return (
            <>
                
                <div className="container-content">
                    <img src={data1.jpg} alt="Logo" />
                    <div className="box">
                        <div className="box_content">
                            <h1>{data1.label}</h1>
                            <p>{data1.desc}</p>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default Description;