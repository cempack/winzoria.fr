'use client'

import {Suspense, useCallback, useEffect, useState} from 'react';
import {fetchSkin} from "@/lib/fetchSkin";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import Image from "next/image";

type Role = 'Administrateur' | 'Super-Modérateur' | 'Modérateur' | 'Helper' | 'Animateur' | 'Builder' | 'Développeur';

const StaffMember = ({username, role}: { username: string; role: Role }) => {
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleFetchSkin = useCallback(async () => {
        try {
            const skinUrl = await fetchSkin(username);
            setImageUrl(skinUrl);
            setError(null); // Reset error
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        }
    }, [username]);

    useEffect(() => {
        if (!imageUrl) {
            handleFetchSkin().catch(() => {
            });
        }
    }, [username, imageUrl, handleFetchSkin]);

    return (
        <div>
            <Suspense>
                {error && <div style={{color: 'red'}}>{error}</div>}

                {imageUrl && (
                    <Card className="text-xl w-[30rem] h-full flex flex-row p-3 items-center">
                        <CardContent className="pt-2">
                            <Image className="bg-secondary p-2 rounded-lg border" width={120} height={120}
                                   src={imageUrl}
                                   alt={`Skin for ${username}`}/>
                        </CardContent>
                        <CardHeader>
                            <CardTitle>{username}</CardTitle>
                            <CardDescription><Badge variant={role}>{role}</Badge></CardDescription>
                        </CardHeader>
                    </Card>
                )}
            </Suspense>
        </div>
    );
};

export default StaffMember;