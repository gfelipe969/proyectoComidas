import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Aut({ changeIng }) {//publica

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const u = 'felipe';
        const c = '12345';

        if (username === u && password === c) {
            console.log('ingreso correctamente')
            changeIng(true);
            navigate("/home");
        } else {
            alert('usuario o contraseña errados');
        }
    }

    function handleUsername(e) {
        const vr = e.target.value;
        setUsername(vr);
    }

    function handlePass(e) {
        setPassword(e.target.value);
    }

    return (//bootstrap
        <main role="main" className="container my-auto">
            <div className="row">
                <div id="login" className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-12">
                    <h2 className="text-center">Autenticación</h2>
                    <img className="img-fluid mx-auto d-block rounded"
                        src="https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_640.jpg" alt='alimentos' />

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="correo">Usuario</label>
                            <input id="correo" name="correo"
                                className="form-control" type="text"
                                placeholder="Usuario" onChange={handleUsername} />
                        </div>
                        <div className="form-group">
                            <label for="palabraSecreta">Contraseña</label>
                            <input id="palabraSecreta" name="palabraSecreta"
                                className="form-control" type="password"
                                placeholder="Contraseña" onChange={handlePass} />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary mb-2">
                            Iniciar Sesión
                        </button>
                        <br />
                    </form>
                </div>
            </div>
        </main>
    );
}
