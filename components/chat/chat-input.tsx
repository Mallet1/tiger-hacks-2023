'use client'

import * as z from 'zod'
import axios from 'axios'
import qs from 'query-string'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useModal } from '@/hooks/use-modal-store'
import { EmojiPicker } from '@/components/emoji-picker'
import { Button } from '../ui/button'

interface ChatInputProps {
    apiUrl: string
    query: Record<string, any>
    name: string
    type: 'conversation' | 'channel'
}

const formSchema = z.object({
    content: z.string().min(1),
})

export const ChatInput = ({ apiUrl, query, name, type }: ChatInputProps) => {
    const { onOpen } = useModal()
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            content: '',
        },
    })

    const isLoading = form.formState.isSubmitting

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)

        try {
            const url = qs.stringifyUrl({
                url: apiUrl,
                query,
            })

            await axios.post(url, values)

            form.reset()
            router.refresh()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name='content'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className='relative p-4 pb-6'>
                                    <button
                                        type='button'
                                        onClick={() =>
                                            onOpen('messageFile', {
                                                apiUrl,
                                                query,
                                            })
                                        }
                                        className='absolute top-7 left-8 h-[24px] w-[24px] bg-zinc-500 dark:bg-zinc-400 hover:bg-zinc-600 dark:hover:bg-zinc-300 transition rounded-full p-1 flex items-center justify-center'
                                    >
                                        <Plus className='text-white dark:text-[#313338]' />
                                    </button>
                                    <Input
                                        disabled={isLoading}
                                        className='px-14 py-6 bg-zinc-200/90 dark:bg-zinc-700/75 border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600 dark:text-zinc-200'
                                        placeholder={`Message ${
                                            type === 'conversation'
                                                ? name
                                                : '#' + name
                                        }`}
                                        {...field}
                                    />
                                    {/* <div className='absolute top-7 left-10'>
                                        <EmojiPicker
                                            onChange={(emoji: string) =>
                                                field.onChange(
                                                    `${field.value} ${emoji}`
                                                )
                                            }
                                        />
                                    </div> */}
                                    <Button
                                        variant='primary'
                                        className='absolute top-5 right-5'
                                        onClick={() => {
                                            const recentWeight =
                                                window.localStorage.getItem(
                                                    'weights'
                                                )
                                            const recentCalories =
                                                window.localStorage.getItem(
                                                    'calories'
                                                )
                                            if (
                                                !recentWeight ||
                                                !recentCalories
                                            )
                                                return

                                            onSubmit({
                                                content: `Today's weight: ${
                                                    JSON.parse(
                                                        recentWeight
                                                    ).pop().weight
                                                }\nCalories eaten today: ${JSON.parse(
                                                    recentCalories
                                                )
                                                    .filter(
                                                        (calorie: any) =>
                                                            calorie.name ===
                                                            new Date().toLocaleString(
                                                                'en-US',
                                                                {
                                                                    dateStyle:
                                                                        'short',
                                                                }
                                                            )
                                                    )
                                                    .map(
                                                        (calorie: any) =>
                                                            calorie.calories
                                                    )
                                                    .reduce(
                                                        (
                                                            partialSum: any,
                                                            a: any
                                                        ) => partialSum + a,
                                                        0
                                                    )}`,
                                            })
                                        }}
                                    >
                                        Post Fitness
                                    </Button>
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}
