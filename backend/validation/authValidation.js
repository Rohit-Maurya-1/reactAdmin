   const Joi = require('joi');
   module.exports = authValidation = (req,res,next)=>{
        const schema = Joi.object().keys({
          firstName: Joi.string().alphanum().min(3).max(30).required(),
          lastName: Joi.string().alphanum().min(3).max(30).required(),
          email: Joi.string().email(),
          password: Joi.string().min(6).required(),
          passwordConfirm: Joi.string().valid(Joi.ref('password')).required(),
          city: Joi.string().required(),
          postalCode: Joi.string().alphanum(),
          country: Joi.string().required(),
          province: Joi.string().required()
       });
        const {error} = schema.validate(req.body, {abortEarly:false}); 
         if(error){
              res.status(200).send(error.details[0].message)
        }else{
            next()
        }
    }
   
 
      
    

