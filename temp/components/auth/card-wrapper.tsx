"use client";

import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonhref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonhref,
  showSocial,
}: CardWrapperProps) => {
  return <Card className="w-[400px] shadow-md">
    <CardHeader>
        <Header  label={headerLabel}/>
    </CardHeader>
    <CardContent>
        {children}
    </CardContent>
    {showSocial && (
        <CardFooter>
            <Social/>
        </CardFooter>
    )}
    <CardFooter>
        <BackButton
        href={backButtonhref}
        label={backButtonLabel}/>
    </CardFooter>
    </Card>;
};
