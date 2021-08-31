import React from 'react';

const Resultado = ({ total, plazo, cantidad }) => {
    return (
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: S/. {(cantidad).toFixed(2)}</p>
            <p>A pagar en: {plazo} meses</p>
            <p>Su pago mensual es: S/. {(total/plazo).toFixed(2)}</p>
            <p>Total a pagar: S/. {(total).toFixed(2)}</p>
        </div>
    );
}

export default Resultado;