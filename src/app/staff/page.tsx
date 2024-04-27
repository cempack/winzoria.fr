import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import StaffMember from "@/components/staff/staff-member";

export default function Staff() {
    return (
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 md:gap-8">
            <div className="container space-y-4 mx-auto px-4 py-12 md:px-6 p-16">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Staff</CardTitle>
                        <CardDescription>
                            Découvrez les membres de l&apos;équipe Winzoria.
                        </CardDescription>
                    </CardHeader>
                    <CardContent
                        className="flex items-center flex-row flex-wrap gap-12 px-8 py-6 mt-[-15px]">
                        <StaffMember username="iJuju_68" role="Administrateur"/>
                        <StaffMember username="MrPhil7H48" role="Administrateur"/>
                        <StaffMember username="Gaspartichaut" role="Helper"/>
                        <StaffMember username="BillyCroquers" role="Animateur"/>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}