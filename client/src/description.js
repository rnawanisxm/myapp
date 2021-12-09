import React, { useState, useEffect } from "react";
import pic1 from './malaga.jpg';

const Description = (props) => {

    //const [desc, setDesc] = useState([])
    const [data1, setData] = useState([]);
    useEffect(() => {
        

        if(props.loc){
            fetch(`/api/${props.loc}`)
                .then((res) => res.json())
                .then((data1) => setData(data1));
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
                            <div className = "desc">{data1.desc}</div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default Description;