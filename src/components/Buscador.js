import swAlert from '@sweetalert/with-react';

function Buscador () {
    const submitHandler = e => {
        e.preventDefault()
        const keyword = e.currentTarget.keyword.value.trim();
        // console.log(keyword)

        if(keyword.length === 0) {
            swAlert(<h5>Tienes que escribir una palabra.</h5>)
        } else if (keyword.length < 2) {
            swAlert(<h5>Tienes que escribir más de 1 caracter.</h5>)
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