import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Contact() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // service id: service_99uw46r
  const REACT_APP_SERVICE_ID = 'service_99uw46r'
  // template id: template_lwnes4m
  const REACT_APP_TEMPLATE_ID = 'template_lwnes4m'
  // public key: CEwyrSxuWSMhkZoHL
  const REACT_APP_USER_ID = 'CEwyrSxuWSMhkZoHL'

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;  try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };    await emailjs.send(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        templateParams,
        REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      
      <section className='contact-me' id='contact'>
        <img className='section__img--contact-me' src='./contact.png' alt=''/>
        <h2 className='section__title'>Contact Me</h2>
        <p className='section__subtitle'>Feel free to reach out!</p>
        <p className='section__text'>
          For inquiries,
          you can reach me through the following form
          or contact me directly through the email or phone number
          listed at the bottom of the page.
        </p>

        <div className='contact-form'>
          <form className='form' onSubmit={handleSubmit(onSubmit)} noValidate>

            <input type='text' name='name' className='form-control' placeholder='Name' { 
              ...register('name', {
                required: {
                  value: true, 
                  message: 'Please enter your name' }, 
                  maxLength: {
                    value: 50,
                    message: 'Please use 50 characters or less'
                  }
              })
            }/>
            {errors.name && <span className='error-message'>{errors.name.message}</span>}

            <input type='email' name='email' className='form-control' placeholder='Email' {
              ...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              })
            }/>
            {errors.email && (
              <span className='error-message'>Please enter a valid email address</span>
            )}

            <input type='text' name='subject' className='form-control' placeholder='Subject' {
              ...register('subject', {
                required: { value: true, message: 'Please enter a subject' },
                maxLength: {
                  value: 75,
                  message: 'Subject cannot exceed 75 characters'
                }
              })
            }/>
            {errors.subject && (
              <span className='error-message'>{errors.subject.message}</span>
            )}

            <textarea cols='30' rows='5' name='message' className='form-control message' placeholder='Message' {
              ...register('message', {required: true})
            }/>
            {errors.message && <span className='error-message'>Please enter a message</span>}

            <button className='btn' type='submit'>SEND</button>

          </form>
        </div>

        <ToastContainer />

      </section>

    </div>
  )

}