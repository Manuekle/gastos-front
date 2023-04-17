/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { EnvelopeSimple, User, Password } from '@phosphor-icons/react';

import { useDispatch, useSelector } from 'react-redux';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { register } from '../../actions/userActions';

import SocialMedia from '../../components/socialMedia';

function registerPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState(false);

  const userRegister = useSelector((state) => state.userRegister);
  const { error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
      navigate('/');
    }
  }, [userInfo, navigate]);
  return (
    <div className="flex justify-center items-start bg-[#F1F333] h-full py-12">
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validate={(res) => {
          const error = {};

          // Validacion Nombre
          if (!res.name) {
            error.name = 'Por favor ingresa un nombre';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(res.name)) {
            error.name = 'El nombre solo puede contener letras y espacio';
          }
          // Validacion Email
          if (!res.email) {
            error.email = 'Por favor ingresa un correo electronico';
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(res.email)
          ) {
            error.email =
              'El correo electronico solo puede contener letras, numeros, guiones, puntos y arrobas';
          }

          // Validacion Contraseña
          if (!res.password) {
            error.password = 'Introduzca una contraseña';
          } else if (res.password.length < 6) {
            error.password = 'La contraseña debe tener al menos 6 caracteres';
          }

          // Validacion Repetir Contraseña
          if (!res.confirmPassword) {
            error.confirmPassword = 'Repita la contraseña';
          } else if (res.confirmPassword !== res.password) {
            error.confirmPassword = 'Las contraseñas no coinciden';
          }

          return error;
        }}
        onSubmit={(res, { resetForm }) => {
          resetForm();
          setFormData(true);
          dispatch(register(res.name, res.email, res.password));
          setTimeout(() => {
            setFormData(false);
          }, 1000);
          return res;
        }}
      >
        {({ errors }) => (
          <Form>
            <div className="mb-8 h-full flex justify-center flex-col gap-4 items-center w-[650px]">
              <SocialMedia />
              <div className="flex flex-row gap-2 justify-center items-center">
                <hr className="w-44 h-[2px] border-black" />
                <h1 className="text-sm font-bold">o</h1>
                <hr className="w-44 h-[2px] border-black" />
              </div>
              <span className="w-[400px] relative">
                <div className="relative">
                  <Field
                    className="outline-none relative w-full h-full py-3 pl-14 rounded-md bg-white text-black border border-black placeholder:text-black/50"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre de Usuario"
                  />
                  <User
                    size={24}
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-black"
                  />
                </div>
                <ErrorMessage
                  name="name"
                  component={() => (
                    <div className="text-red-500 text-xs pl-1 pt-2 font-normal">
                      {errors.name}
                    </div>
                  )}
                />
              </span>
              <span className="w-[400px] relative">
                <div className="relative">
                  <Field
                    className="outline-none relative w-full h-full py-3 pl-14 rounded-lg bg-white text-black border border-black placeholder:text-black/50"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Correo Electronico"
                  />
                  <EnvelopeSimple
                    size={24}
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-black"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component={() => (
                    <div className="text-red-500 text-xs pl-1 pt-2 font-normal">
                      {errors.email}
                    </div>
                  )}
                />
              </span>
              <span className="w-[400px] relative">
                <div className="relative">
                  <Field
                    className="outline-none relative w-full h-full py-3 pl-14 rounded-lg bg-white text-black border border-black placeholder:text-black/50"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                  />
                  <Password
                    size={24}
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-black"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="text-red-500 text-xs pl-1 pt-2 font-normal">
                      {errors.password}
                    </div>
                  )}
                />
              </span>
              <span className="w-[400px] relative">
                <div className="relative">
                  <Field
                    className="outline-none relative w-full h-full py-3 pl-14 rounded-lg bg-white text-black border border-black placeholder:text-black/50"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirmar contraseña"
                  />
                  <Password
                    size={24}
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-black"
                  />
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  component={() => (
                    <div className="text-red-500 text-xs pl-1 pt-2 font-normal">
                      {errors.confirmPassword}
                    </div>
                  )}
                />
              </span>
              <span className="w-[400px] relative">
                <button
                  type="submit"
                  className="bg-black w-full rounded-lg border-2 border-black"
                >
                  {!formData && (
                    <h1 className="text-white text-md font-bold py-3">
                      Registrarse
                    </h1>
                  )}
                  {formData && (
                    <h1 className="text-white text-md font-bold py-3">
                      Cargando...
                    </h1>
                  )}
                </button>
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default registerPage;
