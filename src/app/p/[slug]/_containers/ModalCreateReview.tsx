'use client';

import { ArrowRightIcon, ImageIcon } from '@/assets/images/icons';
import { CloseIcon } from '@/assets/images/icons/CloseIcon';
import { Button, IconButton, Modal, Rating } from '@/components';
import { useClickOutside } from '@/hooks';
import { uploadService } from '@/services/upload';
import { yupResolver } from '@hookform/resolvers/yup';
import cx from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FieldErrors, UseFormRegister, UseFormSetError, UseFormSetValue, UseFormWatch, useForm } from 'react-hook-form';
import { mixed, number, object, string } from 'yup';

type SetValueType = UseFormSetValue<{
  photo?: any | undefined;
  rate: number;
  content: string;
  firstName: string;
  lastName: string;
  email: string;
}>;

type RegisterType = UseFormRegister<{
  photo?: any | undefined;
  rate: number;
  content: string;
  firstName: string;
  lastName: string;
  email: string;
}>;

type WatchType = UseFormWatch<{
  photo?: any | undefined;
  rate: number;
  content: string;
  firstName: string;
  lastName: string;
  email: string;
}>;

type ErrorsType = FieldErrors<{
  photo?: any | undefined;
  rate: number;
  content: string;
  firstName: string;
  lastName: string;
  email: string;
}>;

const StepOne = ({ setValue, watch }: { setValue: SetValueType; watch: WatchType }) => {
  return (
    <>
      <p className='text-2xl font-[600] text-center'>How would you rate this item?</p>
      <Rating size='large' value={watch('rate') || 0} onChange={(value) => setValue('rate', value)} />
    </>
  );
};

const StepTwo = ({ setValue, watch }: { setValue: SetValueType; watch: WatchType }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setValue('photo', file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setPreviewUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleLabelClick = () => {
    const fileInput = document.getElementById('upload-file');
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <>
      <div className='container max-w-xl flex flex-col gap-8'>
        <div>
          <p className='text-2xl font-[700] text-center'>Show it off</p>
          <p className='text-base text-center'>We&apos;d love to see it in action!</p>
        </div>
        {previewUrl && (
          <div className='group p-4 border rounded-2xl overflow-hidden w-full h-[200px] relative'>
            <span className='absolute inset-0 group-hover:bg-[rgba(0,0,0,0.4)]' />
            <div
              className='opacity-0 group-hover:opacity-100 absolute top-0 right-0 cursor-pointer'
              onClick={() => {
                setValue('photo', undefined);
                setPreviewUrl(null);
              }}
            >
              <CloseIcon />
            </div>
            <Image src={previewUrl} alt='preview-img' width={0} height={0} className='w-full h-full object-cover' />
          </div>
        )}
        <IconButton
          startIcon={<ImageIcon />}
          className='p-4 border rounded-2xl no-uppercase font-bold text-base justify-center w-full'
          onClick={handleLabelClick}
        >
          Add photo
        </IconButton>
        <input id='upload-file' type='file' accept='image/*' className='hidden' onChange={handleFileChange} />
      </div>
    </>
  );
};

const StepThree = ({ setValue }: { setValue: SetValueType }) => {
  return (
    <>
      <div className='container max-w-4xl flex flex-col gap-8'>
        <div>
          <p className='text-2xl font-[700] text-center'>Tell us more!</p>
        </div>
        <textarea
          className='bg-white border border-gray-600 px-6 py-4 text-base rounded-xl w-full'
          rows={8}
          placeholder='Share your experiences'
          onChange={(e) => setValue('content', e.target.value)}
        />
      </div>
    </>
  );
};

const StepFour = ({ register, errors }: { register: RegisterType; errors: ErrorsType }) => {
  return (
    <>
      <div className='container max-w-4xl flex flex-col gap-8'>
        <div>
          <p className='text-2xl font-[700] text-center'>About you</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='col-span-1'>
            <label className='text-base font-bold'>First name</label>
            <input
              className={cx('bg-white border border-gray-600 px-6 py-4 text-base rounded-xl w-full', {
                'border-red-500': errors.firstName,
              })}
              {...register('firstName')}
            />
            {errors.firstName && <p className='text-red-500 text-base'>{errors.firstName.message}</p>}
          </div>
          <div className='col-span-1'>
            <label className='text-base font-bold'>Last name</label>
            <input
              className={cx('bg-white border border-gray-600 px-6 py-4 text-base rounded-xl w-full', {
                'border-red-500': errors.lastName,
              })}
              {...register('lastName')}
            />
            {errors.lastName && <p className='text-red-500 text-base'>{errors.lastName.message}</p>}
          </div>
          <div className='col-span-1 lg:col-span-2'>
            <label className='text-base font-bold'>Email</label>
            <input
              className={cx('bg-white border border-gray-600 px-6 py-4 text-base rounded-xl w-full', {
                'border-red-500': errors.email,
              })}
              {...register('email')}
            />
            {errors.email && <p className='text-red-500 text-base'>{errors.email.message}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

interface IModalCreateReviewProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const schema = object({
  rate: number().required(),
  photo: mixed(),
  content: string().required(),
  firstName: string().required('Vui lòng nhập trường này'),
  lastName: string().required('Vui lòng nhập trường này'),
  email: string().required('Vui lòng nhập trường này'),
});

export function ModalCreateReview({ onSubmit, onClose }: IModalCreateReviewProps) {
  const [step, setStep] = useState(0);

  const ref = useClickOutside(onClose);

  const {
    register,
    formState: { errors, isValid },
    setValue,
    watch,
    handleSubmit,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const listContentStep = [
    <StepOne setValue={setValue} watch={watch} key={1} />,
    <StepTwo setValue={setValue} watch={watch} key={2} />,
    <StepThree setValue={setValue} key={3} />,
    <StepFour register={register} errors={errors} key={4} />,
  ];

  const handlePrev = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
    }
  };

  const onSubmitHandler = async (data: any) => {
    const { photo } = data;
    const response = await uploadService.upload(photo);
    onSubmit({ ...data, photo: response[0] });
  };

  useEffect(() => {
    if (Boolean(watch('rate'))) {
      setStep((prev) => prev + 1);
    }
  }, [watch('rate')]);

  return (
    <Modal ref={ref}>
      <form onSubmit={handleSubmit(onSubmitHandler)} className='h-full'>
        <div className='p-8 h-full flex flex-col gap-10'>
          <div className='w-[20px] h-[20px] cursor-pointer' onClick={onClose}>
            <CloseIcon width='100%' height='100%' />
          </div>
          {listContentStep.map((item, index) => (
            <div
              className={cx('flex flex-col gap-10 items-center flex-1 justify-center', { hidden: step !== index })}
              key={index}
            >
              {item}
            </div>
          ))}
          <div className='flex justify-between'>
            <IconButton
              startIcon={
                <span className='rotate-180'>
                  <ArrowRightIcon />
                </span>
              }
              className={cx('text-lg font-bold capitalize', { hidden: step === 0 })}
              onClick={handlePrev}
              type='button'
            >
              Back
            </IconButton>
            {step < 3 && (
              <Button
                className={cx('!py-3 !text-lg !px-8', { hidden: step === 0 })}
                onClick={handleNext}
                type={'button'}
                disabled={step === 2 && !watch('content')}
              >
                Next
              </Button>
            )}
            {step === 3 && (
              <Button className={cx('!py-3 !text-lg !px-8')} onClick={handleNext} type='submit' disabled={!isValid}>
                Done
              </Button>
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
}
