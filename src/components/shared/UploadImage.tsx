'use client';

import * as React from 'react';
import { useForm, FormProvider, UseFormReturn } from 'react-hook-form';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Icon from '@/lib/icon';

interface UploadImageContextType {
    previewUrl: string | null;
    setPreviewUrl: React.Dispatch<React.SetStateAction<string | null>>;
    maxSize: number;
}

const UploadImageContext = React.createContext<UploadImageContextType | null>(null);

interface UploadImageProps extends React.ComponentPropsWithoutRef<'div'> {
    maxSize?: number;
    form?: UseFormReturn<any>;
}

const UploadImage = React.forwardRef<HTMLDivElement, UploadImageProps>(
    ({ className, children, maxSize = 5, form, ...props }, ref) => {
        const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
        const providedForm = form || useForm();

        return (
            <UploadImageContext.Provider value={{ previewUrl, setPreviewUrl, maxSize }}>
                <FormProvider {...providedForm}>
                    <div ref={ref} className={cn('flex gap-4', className)} {...props}>
                        {children}
                    </div>
                </FormProvider>
            </UploadImageContext.Provider>
        );
    },
);
UploadImage.displayName = 'UploadImage';

const UploadImageInput = React.forwardRef<
    HTMLLabelElement,
    React.ComponentPropsWithoutRef<'label'>
>(({ className, children, ...props }, ref) => {
    const context = React.useContext(UploadImageContext);
    if (!context) throw new Error('UploadImageInput must be used within an UploadImage');
    const { maxSize, setPreviewUrl } = context;
    const {
        register,
        formState: { errors },
    } = useForm();

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            const maxSizeInBytes = maxSize * 1024 * 1024;

            if (!file.type.startsWith('image/') || file.size > maxSizeInBytes) return;

            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <Label
                ref={ref}
                className={cn(
                    'border p-4 w-[150px] h-[200px] flex flex-col items-center justify-center gap-2 cursor-pointer',
                    errors.image ? 'border-red-500' : 'border-dashed',
                    className,
                )}
                htmlFor="image"
                {...props}
            >
                {children || (
                    <>
                        <Icon name="image" />
                        <span>Upload Image</span>
                    </>
                )}
            </Label>
            <Input
                type="file"
                id="image"
                {...register('image', {
                    required: {
                        value: true,
                        message: 'Please select an image',
                    },
                    validate: {
                        acceptedFormats: (files: FileList | null) => {
                            if (files) {
                                const file = files[0];
                                if (!file.type.startsWith('image/')) {
                                    return 'Only image files are allowed';
                                }
                                return true;
                            }
                        },
                        maxSize: (files: FileList | null) => {
                            if (files) {
                                const file = files[0];
                                const maxSizeInBytes = maxSize * 1024 * 1024;
                                if (file.size > maxSizeInBytes) {
                                    return `Image size must be less than ${maxSize}MB`;
                                }
                                return true;
                            }
                        },
                    },
                    onChange: handleImageChange,
                })}
                className="hidden"
                accept="image/*"
            />
            {errors.image && <span className="text-red-500">{errors.image.message as string}</span>}
        </div>
    );
});
UploadImageInput.displayName = 'UploadImageInput';

const UploadImagePreview = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
    ({ className, children, ...props }, ref) => {
        const context = React.useContext(UploadImageContext);
        if (!context) throw new Error('UploadImagePreview must be used within an UploadImage');
        const { previewUrl, setPreviewUrl } = context;

        const removeSelectedImage = () => {
            setPreviewUrl(null);
        };

        if (!previewUrl) return null;

        return (
            <div
                ref={ref}
                className={cn('relative w-[150px] h-[200px] border', className)}
                {...props}
            >
                {children || (
                    <>
                        <div className="relative w-full h-full">
                            <Image
                                src={previewUrl}
                                alt="Preview"
                                fill
                                className="rounded-lg object-contain"
                            />
                        </div>
                        <Icon
                            name="x"
                            size={24}
                            color="white"
                            className="absolute top-2 right-2 cursor-pointer hover:text-red-500"
                            onClick={removeSelectedImage}
                        />
                    </>
                )}
            </div>
        );
    },
);
UploadImagePreview.displayName = 'UploadImagePreview';

export { UploadImage, UploadImageInput, UploadImagePreview };
