import { useForm } from 'react-hook-form';
import Input from '../input/Input';
import EffectButton from '../button/EffectButton';
import style from './form.module.scss';
type FormData = {
    name:string,
    subject:string,
    email: string,
    textarea?: string,
}

// use useForm For form data
const Form = () => {
  const {register,handleSubmit,formState: { errors }} = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.form_control}>
          <Input placeholder='Name*' type="text" {...register("name", {required: true})}/>

          {errors.name && errors.name.type === "required" && (
            <p className={style.errorMsg}>Name is required.</p>
          )}

        </div>
        <div className={style.form_control}>
          <Input placeholder='Email*' type="text" {...register("email", {required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/})}/>

          {errors.email && errors.email.type === "required" && (
            <p className={style.errorMsg}>Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className={style.errorMsg}>Email is not valid.</p>
          )}
        </div>

        <div className={style.form_control}>
          <Input placeholder='subject*' type="text" {...register("subject", {required: true})}/>

          {errors.subject && errors.subject.type === "required" && (
            <p className={style.errorMsg}>Subject is required.</p>
          )}
        </div>
        
        <div className={style.form_control}>
          <Input type="textarea" placeholder='Your message*' {...register("textarea", {required: true, minLength: 12})}/>
          
          {errors.textarea && errors.textarea.type === "minLength" && (
            <p className={style.errorMsg}>
              TextArea should be at least 12 characters.
            </p>
          )}
        </div>
       
        <EffectButton type="submit" children="send message"/>
      </form>
  
  );
};

export default Form;
