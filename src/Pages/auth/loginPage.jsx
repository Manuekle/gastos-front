/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { EnvelopeSimple, Password } from '@phosphor-icons/react';

import { useDispatch, useSelector } from 'react-redux';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../../actions/userActions';

import SocialMedia from '../../components/socialMedia';

function loginPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { error, userInfo } = userLogin;

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
          username: '',
          password: ''
        }}
        validate={(res) => {
          const error = {};

          // Validacion Email
          if (!res.username) {
            error.username = 'Por favor, introduzca un correo electrónico';
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              res.username
            )
          ) {
            error.username =
              'El correo electrónico solo puede contener letras, números, guiones, puntos y un signo en el momento';
          }
          // Validacion Contraseña
          if (!res.password) {
            error.password = 'Introduzca una contraseña';
          } else if (res.password.length < 6) {
            error.password = 'La contraseña debe tener al menos 6 caracteres';
          }

          return error;
        }}
        onSubmit={(res, { resetForm }) => {
          resetForm();
          setFormData(true);
          dispatch(login(res.username, res.password));
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
                    className="outline-none relative w-full h-full py-3 pl-12 rounded-lg bg-white text-black border border-black placeholder:text-black/50"
                    type="email"
                    id="username"
                    name="username"
                    placeholder="Correo Electronico"
                  />
                  <EnvelopeSimple
                    size={24}
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-black"
                  />
                </div>
                <ErrorMessage
                  name="username"
                  component={() => (
                    <div className="text-red-500 text-xs pl-1 pt-2 font-normal">
                      {errors.username}
                    </div>
                  )}
                />
              </span>
              <span className="w-[400px] relative">
                <div className="relative">
                  <Field
                    className="outline-none relative w-full h-full py-3 pl-12 rounded-lg bg-white text-black border border-black placeholder:text-black/50"
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
                <button
                  type="submit"
                  className="bg-black w-full rounded-lg border-2 border-black"
                >
                  {!formData && (
                    <h1 className="text-white text-md font-bold py-3">
                      Entrar
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

export default loginPage;
