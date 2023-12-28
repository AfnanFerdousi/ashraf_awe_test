'use client'
import { useReducer } from "react";
import { useForm } from "react-hook-form"

const initialSatate = {
  stepOne: true,
  stepTwo: false,
  stepThree: false
}


const reducer = (state, action) => {
  switch (action.type) {
    case "stepOne":
      return { ...state, stepOne: false, stepTwo: true }
    case "stepTwo":
      return { ...state, stepTwo: false, stepThree: true }
    default:
      return state;
  }
};

export default function Home() {

  const [state, dispatch] = useReducer(reducer, initialSatate)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => console.log(data)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className='bg-white h-[556px] w-[890px] rounded-[30px] flex items-center justify-center'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col justify-center w-full h-full items-center gap-[20px] relative'>
            <div>
              <h1 className='text-[48px] font-semibold'>Fill out the box</h1>

              {/* first step */}
              {state.stepOne &&
                <>
                  <div className='flex gap-[10px]'>
                    <label htmlFor='firstname' className='flex flex-col'>
                      First Name *
                      <input placeholder='first name' id='firstname' name='firstname' className='rounded-[30px] h-[60px] w-[370px] border border-black px-[10px]' {...register("firstname", { required: true })} />

                      {errors.firstname && <span className='text-red-400'>This field is required</span>}

                    </label>
                    <label htmlFor='lastname' className='flex flex-col'>
                      Last Name *
                      <input placeholder='first name' id='lastname' name='lastname' className='rounded-[30px] h-[60px] w-[370px] border border-black px-[10px]' {...register("lastname", { required: true })} />

                      {errors.lastname && <span className='text-red'>This field is required</span>}

                    </label>
                  </div>

                  <div className='flex gap-[10px]'>
                    <label htmlFor='email' className='flex flex-col'>
                      Email *
                      <input placeholder='email' id='email' name='email' className='rounded-[30px] h-[60px] w-[370px] border border-black px-[10px]' {...register("email", { required: true })} />
                      {errors.email && <span className='text-red'>This field is required</span>}
                    </label>
                    <label htmlFor='phone' className='flex flex-col'>
                      Phone
                      <input placeholder='phone' id='phone' name='phone' className='rounded-[30px] h-[60px] w-[370px] border border-black px-[10px]' {...register("phone")} />
                    </label>
                  </div>
                </>
              }
            </div>

            {/* second step */}
            {state.stepTwo &&
              <>
                <div className='w-[700px]'>
                  <label htmlFor='timeline' className='flex flex-col'>
                    Timeline
                    <select id='timeline' name='timeline' className='border border-black rounded-[30px] h-[60px] w-full px-[10px]' {...register("timeline")}>
                      <option className='w-full'>Within 1 week</option>
                      <option className='w-full'>Within 2 week</option>
                      <option className='w-full'>Within 3 week</option>
                    </select>
                  </label>
                </div>

                <div className='w-[700px]'>
                  <label htmlFor='product' className='flex flex-col'>
                    Product
                    <select id='product' name='product' className='border border-black rounded-[30px] h-[60px] w-full px-[10px]' {...register("product")}>
                      <option className='w-[770px]'>Item 1</option>
                      <option className='w-[770px]'>item 2</option>
                      <option className='w-[770px]'>item 3</option>
                    </select>
                  </label>
                </div>
              </>
            }

            {/* final step */}
            {state.stepThree &&
              <div className='w-[700px]'>
                <div>
                  <h3>Services</h3>
                  <br />
                  <div className='flex gap-3'>
                    <label className='flex gap-2' htmlFor='design'>
                      <input type='radio' id='design' name='services' {...register("service")} value='Website Design' />
                      Website Design
                    </label>
                    <label className='flex gap-2' htmlFor='appDesign'>
                      <input type='radio' id='appDesign' name='services' value='appDesign' {...register("service")} />
                      App Design
                    </label>
                    <label className='flex gap-2' htmlFor='ui/ux'>
                      <input type='radio' id='ui/ux' name='services' value='UI/UX Design' {...register("service")} />
                      UI/UX Design
                    </label>
                  </div>

                </div>
                <div className='mt-3'>
                  <label className='flex flex-col gap-2' htmlFor='message'>
                    Message
                    <textarea id='message' {...register("message")} className='rounded-[15px] border p-3' placeholder='Write your message...' />
                  </label>
                </div>
              </div>
            }

            {/* <div className='flex justify-end items- absolute left-0 bottom-[-100px]'>
              <button type='button'
                className='rounded-[30px] w-[161px] border bg-[#F0F2FF
] py-[15px] px-[45px]'
                onClick={() => dispatch({ type: state.stepOne ? 'stepTwo' : state.stepTwo && 'stepThree' })}
              >Go Back</button>
            </div> */}

            <div className='flex justify-end items- absolute right-0 bottom-[-100px]'>
              <button type='button' className='rounded-[30px] w-[161px] border bg-[#5B6CFF] py-[15px] px-[45px]'
                onClick={() => dispatch({ type: state.stepOne ? 'stepTwo' : state.stepTwo && 'stepThree' })}
              >Go Next</button>
            </div>


            {state.stepThree &&
              <div className='flex justify-end items- absolute right-0 bottom-[-100px]'>
                <button type='submit' className='rounded-[30px] w-[217px] border bg-[#5B6CFF] py-[15px] px-[45px]'>Send Message</button>
              </div>
            }


          </div>
        </form>
      </div>
    </main>
  )
}
