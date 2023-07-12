export const validateSchema={
    required:'must provide details',
    pattern:{
        value:/^[A-Za-z'-]+$/,
        message:'only accept letters'
    },
    minLength: {
        value: 3,
        message: "Minimum twenty letters",
      },
      maxLength: {
        value: 30,
        message: "Maximum hundred letters",
      },

}