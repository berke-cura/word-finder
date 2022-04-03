import { useForm } from 'react-hook-form';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {send} from '@emailjs/browser'
//  import { TextField, Box,  Button } from '@material-ui/core';
import '/Users/berke/reactFrontEnd/word-finder/'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };
      await send(
        "service_f15ktbo",
        "template_w71x8ay",
        templateParams,
        "Ddh_OrBYFK4IU7CJc"
      );
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm' style={{}}>
            <form onSubmit={this.handleSubmit}>
            <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                  <TextField style={{marginBottom: 10, width: '35%'}} id="outlined-basic" name='name' className='form-control formInput' label="Name" variant="outlined" {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}/>
                  
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='col-6'>
                  <TextField style={{marginBottom: 10, width: '35%'}} id="outlined-basic" name='email' className='form-control formInput' label="Email" variant="outlined" {...register('email', {
                        required: { value: true, message: 'Please enter your email address' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}/>
                    
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                  <TextField style={{marginBottom: 10, width: '35%'}} id="outlined-basic" name='subject' className='form-control formInput' label="Subject" variant="outlined" {...register('subject', {
                        required: { value: true, message: 'Please enter your subject' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}/>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                  <TextField style={{marginBottom: 10, width: '35%'}}
          id="standard-multiline-static"
         
          label="Message"
          name='message'
          {...register('message', {
            required: true
          })}
          className='form-control formInput'
          multiline
          rows={4}
          defaultValue="Message"
          variant="standard"
        />
                   
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
                <Button style={{marginBottom: 10, width: '35%'}} className='submit-btn' type='submit' variant="outlined">Submit</Button>

               
              </form>
              </Box>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
