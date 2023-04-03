import { useState } from "react";

const About = () => {
  return (
    <>
      <div className="container">
        <h1 className="mt-3">Formulario</h1>
      </div>

      <form className="col g-3 needs-validation">
        <div className="container">
          <div className="col-md-6 mx-auto">
            <div className="form-group mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="Marcos..."
                pattern="^[^0-9]+$"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                placeholder="Galperin..."
                pattern="^[^0-9]+$"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label className="form-label">Email</label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">
                  @
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  placeholder="galperin@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="form-group mb-3">
              <label className="form-label">Ciudad</label>
              <input
                type="text"
                className="form-control"
                id="validationC ustom03"
                pattern="^[^0-9]+$"
                placeholder="Buenos Aires..."
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="exampleFormControlTextarea1">
                Escribe tu mensaje
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                maxLength={150}
              ></textarea>
            </div>

            <div className="form-group">
              <button className="btn btn-dark" type="submit">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default About;
