import React, { Fragment } from 'react';

const ControlPresupuesto = ({ presupuesto, restante }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${presupuesto}
            </div>
            <div className="aler">
                Restante: ${restante}
            </div>
        </Fragment>
    );
}

export default ControlPresupuesto;