"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import checkUsername from "@/lib/checkUsername";
import {toast} from "@/components/ui/use-toast";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ArrowRight} from "lucide-react";
import {useState} from "react";

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Le nom d'utilisateur ne peut pas comporter moins de 2 caractères.",
    }).max(16, {
        message: "Le nom d'utilisateur ne peut pas dépasser 16 caractères.",
    }),
})

export function VoteForm() {
    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        const [status, result] = await checkUsername(data.username);
        if (status === 'error' && result === 'User does not exist') {
            toast({
                title: "Le nom d'utilisateur n'existe pas. Veuillez vérifier votre saisie.",
                variant: "destructive",
            })
        } else if (status === 'error' && result === 'An unknown error occurred') {
            toast({
                title: "Une erreur est survenue. Veuillez nous contacter.",
                variant: "destructive",
            })
        } else {
            setIsUsernameValid(true);
        }
    }

    return (
        <div>
            {!isUsernameValid ? (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Nom d&apos;utilisateur Minecraft</FormLabel>
                                    <FormControl>
                                        <Input placeholder="cempack" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Voter</Button>
                    </form>
                </Form>
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Sites de vote</CardTitle>
                        <CardDescription>
                            Voici la liste des sites de vote sur lesquels vous pouvez voter.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            <li>
                                <Button className="flex flex-row items-center gap-1">
                                    serveur-minecraft.com <ArrowRight size={16}/>
                                </Button>
                            </li>
                            <li>
                                <Button className="flex flex-row items-center gap-1">
                                    serveur-prive.com <ArrowRight size={16}/>
                                </Button>
                            </li>
                            <li>
                                <Button className="flex flex-row items-center gap-1">
                                    liste-serveurs-minecraft.org <ArrowRight size={16}/>
                                </Button>
                            </li>
                            <li>
                                <Button className="flex flex-row items-center gap-1">
                                    serveursminecraft.org <ArrowRight size={16}/>
                                </Button>
                            </li>
                            <li>
                                <Button className="flex flex-row items-center gap-1">
                                    liste-serveurs.fr <ArrowRight size={16}/>
                                </Button>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
