'use client';

import React, { ChangeEvent, useState } from 'react';
import Icon from '@/lib/icon';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/utils';
import Spinner from '@/components/shared/Spinner';

export default function UploadStory(): React.JSX.Element {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    console.log(errors);

    // Hanlding Image Change
    const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

            if (!file.type.startsWith('image/') || file.size > maxSizeInBytes) return;

            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    // Remove Selected Image
    const removeSelectedImage = () => {
        setPreviewUrl(null);
        reset();
    };

    // Form Submission
    const onSubmit = async (data: any) => {
        try {
            console.log('submitting...');
            setIsLoading(true);

            // TODO: Implement the actual story upload logic here
            // This might involve sending the image to a server or storage service

            const formData = new FormData();
            formData.append('image', data.image[0]);
            console.log('Story data:', formData);
            toast.success('Story uploaded successfully!');

            // Reset the form and preview
            setPreviewUrl(null);
            reset();
            setIsLoading(false);
            console.log('Story uploaded successfully!');
        } catch (error) {
            console.error('Error uploading story:', error);
            toast.error('Failed to upload story. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                    <Label
                        className={cn(
                            'border p-4 w-[150px] h-[200px] flex flex-col items-center justify-center gap-2 cursor-pointer',
                            errors.image ? 'border-red-500' : 'border-dashed',
                        )}
                        htmlFor="image"
                    >
                        <Icon name="image" />
                        <span>Upload Story</span>
                    </Label>

                    <Input
                        type="file"
                        id="image"
                        {...register('image', {
                            required: {
                                value: true,
                                message: 'Please select an image for your story',
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
                                        const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
                                        if (file.size > maxSizeInBytes) {
                                            return 'Image size must be less than 5MB';
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
                    {errors.image && (
                        <span className="text-red-500">{errors.image.message as string}</span>
                    )}
                </div>

                {previewUrl && (
                    <div className="relative w-[150px] h-[200px] border">
                        <div className="relative w-full h-full">
                            <Image
                                src={previewUrl}
                                alt="PreviewStory"
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
                    </div>
                )}
            </div>

            <Button type="submit" variant="secondary" className="w-full mt-4" disabled={isLoading}>
                {isLoading ? <Spinner label="Uploading..." /> : 'Create Story'}
            </Button>
        </form>
    );
}
