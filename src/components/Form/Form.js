
import React from 'react';
import Select from '../OptionSelect/OptionSelect';
import './form.css'

const Form = () => {
    
    return (
        <div>
        <div className="container login-container">
            <div className="row">
                  <div className="col-md-6 login-form-2">
                    <h3>Registre su Proyecto</h3>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre de Proyecto"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Descripcion"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Integrantes" 
                            />
                        </div>
                        <div classsName = "form-group">
                            <Select />  
                        </div>
                        <div className="btn-create">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear Proyecto" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )

};
export default Form;