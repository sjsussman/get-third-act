'use client';

import { useState } from 'react';
import { FormProps } from '../../shared/types';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Form = ({ title, description, inputs, radioBtns, textarea, checkboxes, btn, btnPosition }: FormProps) => {
  const [inputValues, setInputValues] = useState([]);
  const [radioBtnValue, setRadioBtnValue] = useState('');
  const [textareaValues, setTextareaValues] = useState('');
  const [checkedState, setCheckedState] = useState<boolean[]>(new Array(checkboxes && checkboxes.length).fill(false));
  const handleRef = React.useRef<HTMLFormElement>(null);

  // Update the value of the entry fields
  const changeInputValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // Update checked radio buttons
  const changeRadioBtnsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioBtnValue(event.target.value);
  };

  // Update the textarea value
  const changeTextareaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValues(event.target.value);
  };

  // Update checkbox radio buttons
  const changeCheckboxHandler = (index: number) => {
    setCheckedState((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.map(() => {
        newValues[index] = !checkedState[index];
      });
      return newValues;
    });
  };

  const form = useRef();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    form.current &&
      emailjs.sendForm('service_wzkljh8', 'template_pog4yzk', form.current, 'L5UIqLd4cSCB_4jvF').then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
      {title && <h2 className={`${description ? 'mb-2' : 'mb-4'} text-2xl font-bold`}>{title}</h2>}
      {description && <p className="mb-4">{description}</p>}
      <form ref={handleRef} onSubmit={sendEmail} id="contactForm">
        <div className="mb-6">
          {/* Inputs */}
          <div className="mx-0 mb-1 sm:mb-4">
            {inputs.map(({ type, label, name, autocomplete, placeholder }, index) => (
              <div key={`item-input-${index}`} className="mx-0 mb-1 sm:mb-4">
                <label htmlFor={name} className="pb-1 text-xs uppercase tracking-wider">
                  {label}
                </label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  autoComplete={autocomplete}
                  value={inputValues[index]}
                  onChange={changeInputValueHandler}
                  placeholder={placeholder}
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                />
              </div>
            ))}
          </div>
          {/* Textarea */}
          {textarea && (
            <div className={`mx-0 mb-1 sm:mb-4`}>
              <label htmlFor={textarea.name} className="pb-1 text-xs uppercase tracking-wider">
                {textarea.label}
              </label>
              <textarea
                id={textarea.name}
                name={textarea.name}
                cols={textarea.cols}
                rows={textarea.rows}
                value={textareaValues}
                onChange={(e) => changeTextareaHandler(e)}
                placeholder={textarea.placeholder}
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
              />
            </div>
          )}
        </div>
        <div
          className={`${btnPosition === 'left' ? 'text-left' : btnPosition === 'right' ? 'text-right' : 'text-center'}`}
        >
          <button type={btn.type} className="btn btn-primary sm:mb-0">
            {btn.title}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
