import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Eye, NewspaperIcon, SparklesIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 md:gap-8">
      <div className="container mx-auto px-4 py-12 md:px-6 p-16">
        <div className="flex flex-col gap-8">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Articles populaires</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <Image
                        alt="Blog post image"
                        className="rounded-lg"
                        height="64"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "64/64",
                          objectFit: "cover",
                        }}
                        width="64"
                      />
                    </div>
                    <div>
                      <div className="font-medium">
                        <Link className="hover:underline" href="#">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </Link>
                      </div>
                      <div className="flex flex-row items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Eye size={16} /> 1.2K
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div>
                      <Image
                        alt="Blog post image"
                        className="rounded-lg"
                        height="64"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "64/64",
                          objectFit: "cover",
                        }}
                        width="64"
                      />
                    </div>
                    <div>
                      <div className="font-medium">
                        <Link className="hover:underline" href="#">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </Link>
                      </div>
                      <div className="flex flex-row items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Eye size={16} /> 1.2K
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div>
                      <Image
                        alt="Blog post image"
                        className="rounded-lg"
                        height="64"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "64/64",
                          objectFit: "cover",
                        }}
                        width="64"
                      />
                    </div>
                    <div>
                      <div className="font-medium">
                        <Link className="hover:underline" href="#">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </Link>
                      </div>
                      <div className="flex flex-row items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Eye size={16} /> 1.2K
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="gap-1 bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <SparklesIcon size={12} />
                  Changelog
                </span>
                <span className="text-sm">Dim. 21 avr.</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </a>
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorem nam asperiores quam, voluptatum porro cumque ab
                blanditiis in dolorum laboriosam fuga non. Nulla suscipit
                corporis error illo iste perferendis adipisci!
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image
                    className="w-7 h-7 rounded-full"
                    width={64}
                    height={64}
                    src={"/assets/images/authors/mrphil.png"}
                    alt="MrPhil's Profile Picture"
                  />
                  <span className="font-medium dark:text-white">
                    MrPhil7H48
                  </span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Lire
                  <ArrowRight size={18} />
                </a>
              </div>
            </article>
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="gap-1 bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <NewspaperIcon size={12} />
                  Actus
                </span>
                <span className="text-sm">Dim. 21 avr.</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </a>
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia dolore, laboriosam a eveniet hic dolorum animi nam id
                earum! Ad et illo dolorem deleniti reprehenderit vero libero
                quibusdam, nulla dolor?
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image
                    className="w-7 h-7 rounded-full"
                    width={64}
                    height={64}
                    src={"/assets/images/authors/ijuju.png"}
                    alt="iJuju's Profile Picture"
                  />
                  <span className="font-medium dark:text-white">iJuju_68</span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Lire
                  <ArrowRight size={18} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
