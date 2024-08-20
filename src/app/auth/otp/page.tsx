"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { OtpFormSchema } from "@/utils/formSchema";
import { authEndPoint } from "@/lib/endPoints";
import { usePostData } from "@/hooks/useApi";
import { toast } from "react-toastify";
import Spinner from "@/components/shared/Spinner";
import { useRouter } from "next/navigation";
import useCountdown from "@/hooks/useCountDown";

export default function AuthOTPPage() {
  const router = useRouter();
  const timeLeft = useCountdown({ minutes: 0.5 });

  // Api
  const { mutateAsync, isPending } = usePostData(authEndPoint.verifyOtp, {
    withCredentials: true,
  });

  // Initialize Form
  const form = useForm<z.infer<typeof OtpFormSchema>>({
    resolver: zodResolver(OtpFormSchema),
    defaultValues: {
      otp: "",
    },
  });

  // Handling OTP submission
  const onSubmit = async (data: z.infer<typeof OtpFormSchema>) => {
    try {
      const response: any = await mutateAsync({ payload: data });

      toast.success(response?.message);
      router.push("/");
      form.reset();
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full min-h-screen flex flex-col items-center justify-center gap-6"
      >
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center justify-center">
              <FormLabel className="text-xl">One-Time Password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* CountDown */}
        <p>
          {timeLeft?.seconds ? (
            `${timeLeft.seconds} seconds left`
          ) : (
            <span className="text-red-400">Times Up</span>
          )}
        </p>

        <Button
          type="submit"
          disabled={isPending || !timeLeft?.seconds}
          className="disabled:cursor-not-allowed"
        >
          {isPending ? <Spinner /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
