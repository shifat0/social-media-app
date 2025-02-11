import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    form: UseFormReturn | any | undefined;
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    labelClassName?: string;
    className?: string;
}

export default function InputField({
    form,
    name,
    label,
    type = 'text',
    placeholder,
    required = true,
    labelClassName,
    className,
    ...rest
}: Props) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className={cn(labelClassName)}>
                        {label}
                        {required && <span className="text-red-500"> *</span>}
                    </FormLabel>
                    <FormControl>
                        <Input
                            type={type}
                            placeholder={placeholder}
                            className={cn(className, 'border')}
                            {...field}
                            {...rest}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
