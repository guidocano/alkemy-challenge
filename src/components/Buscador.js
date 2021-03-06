import swAlert from '@sweetalert/with-react';
import {useNavigate} from "react-router-dom";

function Buscador () {
    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault()
        const keyword = e.currentTarget.keyword.value.trim();
        // console.log(keyword)

        if(keyword.length === 0) {
            swAlert(<h5>Tienes que escribir una palabra.</h5>)
        } else if (keyword.length < 2) {
            swAlert(<h5>Tienes que escribir más de 1 caracter.</h5>)
        } else {
            e.currentTarget.keyword.value = "";
            navigate(`/resultados?keyword=${keyword}`);
            navigate(0);
        }
    }

    return (
        <form className="d-flex align-items-center" onSubmit={submitHandler}>
            <label className="form-label mb-0 mx-2">
                <input className="form-control" type="text" name="keyword" placeholder="Buscar..."/>    
            </label>

            <button className="btn btn-success" type="submit">Ingresar</button>
        </form>
    )
}

export default Buscador