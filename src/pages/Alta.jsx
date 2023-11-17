import React, { useEffect, useState } from 'react';
import './Alta.css';
import FormAlta from '../components/FormAlta';
import TableAlta from '../components/TableAlta';




const Alta = () => {
  const [productoAEditar, setProductoAEditar] = useState(null)

  

  

  useEffect(() => {
    document.title = 'ConsolEye - Alta (Carga de productos)';
  }, []);

  return (
    <>
      <FormAlta productoAEditar={productoAEditar} setProductoAEditar={setProductoAEditar} />

      <hr />

      <TableAlta setProductoAEditar={setProductoAEditar} />

    </>
  );
};

export default Alta;
