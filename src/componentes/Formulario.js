import React, { Fragment, useState } from 'react';

import { calcularTotal } from '../helpers';


const Formulario = ({ cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando, guardarError }) => {
    // Definir state   
    const [cantidadEvent, guardarCantidadEvent] = useState(0);
    const [plazoEvent, guardarPlazoEvent] = useState(0);

    const calcularPrestamo = e => {
        e.preventDefault();
        // Validar 
        if (cantidadEvent === 0 || isNaN(cantidadEvent) || plazoEvent === 0) {
            guardarTotal(0);
            guardarError(true);
                setTimeout(() => {
                    guardarError(false);
                }, 3000);
            return;
        }
        guardarError(false);
        guardarCantidad(cantidadEvent);
        guardarPlazo(plazoEvent);

        // Habilitar Spinner
        guardarCargando(true);
        // Deshabilitar Spinner
        setTimeout(() => {
            guardarCargando(false);
        }, 1000);
        // Realizar Operacion de prestamo 
        const total = calcularTotal(cantidadEvent, plazoEvent);
        guardarTotal(total);
    }
    // Definir un State
    return (
        <Fragment>
            <form onSubmit={calcularPrestamo}>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input
                            className="u-full-width"
                            type="number"
                            min="0"
                            placeholder="Ejemplo: 3000"
                            onChange={e =>  guardarCantidadEvent(parseInt(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select
                            className="u-full-width"
                            onChange={e => guardarPlazoEvent(parseInt(e.target.value))}
                        >
                            <option value="0">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Calcular"
                            className="button-primary u-full-width"
                        />
                    </div>
                </div>
            </form>
        </Fragment>
    );
}

export default Formulario;