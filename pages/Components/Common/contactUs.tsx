import { useForm } from 'react-hook-form';
import axiosInstance from '../../../utils/axiosInstance';

interface ContactUsProps {
  backgroundLg: string;
  backgroundSm: string;
}
const ContactUs = ({ backgroundLg, backgroundSm }: ContactUsProps) => {
  const defaultValues = {
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
  };

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });
  return (
    <div
      className={`w-full my-32  md:min-h-[70%] 2xl:min-h-[90%] flex flex-col items-center justify-between py-14 2xl:py-44 
      ${backgroundLg}  ${backgroundSm} bg-cover bg-center `}
      id="contact-form"
    >
      <span className="text-3xl text-white underline decoration-underlinecolor">
        Contact Us
      </span>
      <form
        className="flex flex-col items-center justify-center w-full"
        onSubmit={handleSubmit(async (data) => {
          clearErrors();
          try {
            await axiosInstance.post('/contactUs/', {
              ...data,
            });
            reset(defaultValues);
          } catch (e: any) {
            if (e instanceof Error) {
              e.message;
            }
          }
        })}
      >
        <div className="flex flex-col items-center w-full px-10 mt-16 lg:mt-24 md:flex-row md:justify-evenly mb-102xl:px-44">
          <div className="flex flex-col items-center justify-center w-full ">
            <input
              type="text"
              className={`mb-4 md:mb-10 w-[100%] md:w-80 2xl:w-96 h-12 rounded-md  border-2 bg-gray-200 p-2 opacity-70 ${
                errors.fullName
                  ? `placeholder-red-500 border-red-500`
                  : `placeholder-gray-600 border-gray-300`
              }`}
              placeholder={`${
                errors.fullName ? `${errors.fullName?.message}` : `Name`
              }`}
              {...register('fullName', {
                required: 'Please Enter your full name',
              })}
            />

            <input
              type="text"
              className={`mb-4 md:mb-10 w-[100%] md:w-80 2xl:w-96 h-12 rounded-md  border-2 bg-gray-200 p-2 opacity-70 ${
                errors.phoneNumber
                  ? `placeholder-red-500 border-red-500`
                  : `placeholder-gray-600 border-gray-300`
              }`}
              placeholder={`${
                errors.phoneNumber
                  ? `${errors.phoneNumber?.message}`
                  : `Phone Number`
              }`}
              {...register('phoneNumber', {
                required: 'Please Enter your phone Number',
              })}
            />
            <input
              type="text"
              className={`mb-4 md:mb-10 w-[100%] md:w-80 2xl:w-96 h-12 rounded-md  border-2 bg-gray-200 p-2 opacity-70 ${
                errors.email
                  ? `placeholder-red-500 border-red-500`
                  : `placeholder-gray-600 border-gray-300`
              }`}
              placeholder={`${
                errors.email ? `${errors.email?.message}` : `Email`
              }`}
              {...register('email', {
                required: 'Please Enter your email',
              })}
            />
          </div>
          <div className="flex w-full mt-4 md:mt-0 md:items-end">
            <textarea
              id="message"
              className={`h-40 w-[100%] md:w-80  rounded-md bg-gray-200 p-2 opacity-70 ${
                errors.message
                  ? `placeholder-red-500 border-red-500 border-2`
                  : `placeholder-gray-600 border-gray-300`
              } 2xl:w-96 resize-none`}
              placeholder={`${
                errors.message ? `${errors.message?.message}` : `Message`
              }`}
              {...register('message', {
                required: 'Please Enter your message',
              })}
            />
          </div>
        </div>
        <button
          className="mt-2 bg-[#ACFE14] hover:opacity-70 text-black rounded-xl p-3 w-32 font-bold "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
