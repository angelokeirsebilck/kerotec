import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader.js";
import { useRouter } from "next/router";

const Form = ({ thanksSlug }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    // e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/submit", {
        body: JSON.stringify({
          data,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const result = await response.json();

      router.push(`/${thanksSlug}`);
      setIsLoading(false);
      reset();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const inputClass =
    "peer h-12 p-2 pl-0 w-full border-0 border-b-2 text-base outline-none focus:ring-0 focus:border-primary placeholder-transparent ";
  const textareaClass =
    "peer h-32 p-2 pl-0 pt-1.5 leading-none w-full border-0 border-b-2 text-base outline-none focus:ring-0 focus:border-primary placeholder-transparent ";

  const labelClass =
    "absolute left-0 text-sm -top-2 text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray peer-placeholder-shown:top-4 transition-all peer-focus:text-sm peer-focus:-top-2 peer-focus:text-gray ";

  const errorClass =
    "absolute right-0 bottom-1 text-sm text-error z-10 font-medium";

  const errorClassTextarea =
    "absolute right-0 bottom-3 text-sm text-error z-10 font-medium";
  return (
    <div className="">
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full"
      >
        <div className="relative">
          <input
            id="name"
            {...register("name", {
              required: "Dit veld is verplicht.",
            })}
            type="text"
            className={
              errors.name
                ? inputClass + "border-error focus:border-error "
                : inputClass
            }
            placeholder="Naam"
          />
          <label htmlFor="name" className={labelClass}>
            Naam
          </label>
          <div className={errorClass}>{errors.name?.message}</div>
        </div>
        <div className="relative mt-6">
          <input
            id="firstname"
            {...register("firstname", {
              required: "Dit veld is verplicht.",
            })}
            type="text"
            className={
              errors.firstname
                ? inputClass + "border-error focus:border-error "
                : inputClass
            }
            placeholder="Voornaam"
          />
          <label htmlFor="firstname" className={labelClass}>
            Voornaam
          </label>
          <div className={errorClass}>{errors.firstname?.message}</div>
        </div>
        <div className="relative mt-6">
          <input
            id="phone"
            {...register("phone", {
              required: "Dit veld is verplicht.",
            })}
            type="text"
            className={
              errors.phone
                ? inputClass + "border-error focus:border-error "
                : inputClass
            }
            placeholder="Telefoonnummer"
          />
          <label htmlFor="phone" className={labelClass}>
            Telefoonnummer
          </label>
          <div className={errorClass}>{errors.phone?.message}</div>
        </div>
        <div className="relative mt-6">
          <input
            id="email"
            {...register("email", {
              required: "Dit veld is verplicht.",
              pattern: {
                value:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                message: "Vul een geldig emailadres in.",
              },
            })}
            type="text"
            className={
              errors.email
                ? inputClass + "border-error focus:border-error "
                : inputClass
            }
            placeholder="Emailadres"
          />
          <label htmlFor="email" className={labelClass}>
            Emailadres
          </label>
          <div className={errorClass}>{errors.email?.message}</div>
        </div>
        <div className="relative mt-8">
          <textarea
            id="message"
            {...register("message", { required: "Dit veld is verplicht." })}
            className={
              errors.message
                ? textareaClass + "border-error focus:border-error "
                : textareaClass
            }
            placeholder="Bericht"
          />
          <label
            htmlFor="message"
            className="absolute left-0 -top-4 text-sm text-gray 
            transition-all
          peer-placeholder-shown:top-2 
           peer-placeholder-shown:text-base peer-placeholder-shown:text-gray 
           peer-focus:-top-4
           peer-focus:text-sm
           peer-focus:text-gray 
           "
          >
            Bericht
          </label>
          <div className={errorClassTextarea}>{errors.message?.message}</div>
        </div>
        <button
          type="submit"
          className={`btn btn-primary relative mt-12 ${
            isLoading
              ? "pointer-events-none !border-primary-bg !bg-primary-bg"
              : ""
          }`}
        >
          <div className="absolute left-1/2 -translate-x-1/2 transform">
            <ClipLoader loading={isLoading} size={30} color="#000" />
          </div>
          <span className={`${isLoading ? "text-transparent" : ""}`}>
            verstuur
          </span>
        </button>
      </form>
    </div>
  );
};

export default Form;
